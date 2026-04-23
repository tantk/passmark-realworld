/**
 * Passmark single-provider (Google-only) routing + per-test step logging.
 *
 * Why Google-only:
 *   Passmark defaults assertionPrimary to Claude and the rest to Gemini.
 *   We don't have an Anthropic key for the hackathon, so every slot is pointed
 *   at a Gemini variant. Primary and secondary still use *different* Gemini
 *   models so the two-model consensus doesn't collapse to one model voting
 *   twice.
 *
 * Why monkey-patch runSteps:
 *   Passmark logs via pino, which writes directly to fd 1 and bypasses
 *   Playwright's result.stdout / onStdOut capture. To get per-step AI
 *   reasoning into the markdown report we inject the onStepStart /
 *   onStepEnd / onReasoning callbacks here and append events to a JSONL
 *   file that we attach to the current test.
 *
 * Imported via `require('./passmark.setup')` in playwright.config.ts so it
 * loads once per worker, after dotenv and before any spec evaluates.
 */
import * as fs from 'fs';
import { configure } from 'passmark';
import * as passmarkModule from 'passmark';
import * as playwrightTest from '@playwright/test';

configure({
  ai: {
    gateway: 'none',
    // Gemini-3 models accept the `thinking_level` param Passmark sends for
    // step execution and user-flow slots. Gemini-2.5 rejects it, so 2.5 only
    // gets the simpler assertion-secondary / utility roles.
    models: {
      stepExecution: 'google/gemini-3-flash-preview',
      userFlowLow: 'google/gemini-3-flash-preview',
      userFlowHigh: 'google/gemini-3.1-pro-preview',
      assertionPrimary: 'google/gemini-3-flash-preview',
      assertionSecondary: 'google/gemini-2.5-flash-lite',
      assertionArbiter: 'google/gemini-3.1-pro-preview',
      utility: 'google/gemini-2.5-flash-lite',
    },
  },
});

type Step = { id: string; description: string; reasoning?: string };
type RunStepsOpts = {
  onStepStart?: (s: Step) => void;
  onStepEnd?: (s: Step) => void;
  onReasoning?: (s: Step) => void;
  [key: string]: unknown;
};

const pm = passmarkModule as unknown as {
  runSteps: (opts: RunStepsOpts) => Promise<void>;
};
const originalRunSteps = pm.runSteps;

pm.runSteps = async function wrappedRunSteps(opts: RunStepsOpts): Promise<void> {
  let testInfo: playwrightTest.TestInfo | undefined;
  try {
    testInfo = playwrightTest.test.info();
  } catch {
    // called outside a test context — skip logging, proceed normally
  }

  let logPath: string | undefined;
  let logFd: number | undefined;
  if (testInfo) {
    logPath = testInfo.outputPath('passmark-events.jsonl');
    try {
      logFd = fs.openSync(logPath, 'a');
    } catch {
      logFd = undefined;
    }
  }

  const append = (rec: Record<string, unknown>): void => {
    if (logFd === undefined) return;
    try {
      fs.writeSync(logFd, JSON.stringify({ t: Date.now(), ...rec }) + '\n');
    } catch {
      /* best-effort */
    }
  };

  const userOnStepStart = opts.onStepStart;
  const userOnStepEnd = opts.onStepEnd;
  const userOnReasoning = opts.onReasoning;

  try {
    await originalRunSteps({
      ...opts,
      onStepStart: (s: Step) => {
        append({ k: 'stepStart', id: s.id, desc: s.description });
        userOnStepStart?.(s);
      },
      onStepEnd: (s: Step) => {
        append({ k: 'stepEnd', id: s.id, desc: s.description });
        userOnStepEnd?.(s);
      },
      onReasoning: (s: Step) => {
        append({ k: 'reasoning', id: s.id, r: s.reasoning });
        userOnReasoning?.(s);
      },
    });
  } finally {
    if (logFd !== undefined) {
      try {
        fs.closeSync(logFd);
      } catch {
        /* noop */
      }
      if (logPath && testInfo) {
        await testInfo
          .attach('passmark-events', {
            path: logPath,
            contentType: 'application/x-ndjson',
          })
          .catch(() => undefined);
      }
    }
  }
};
