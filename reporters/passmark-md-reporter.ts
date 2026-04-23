/**
 * Passmark markdown reporter.
 *
 * Drops one markdown file per test into `docs/runs/<timestamp>/`, plus an
 * `index.md` summary table. Reads per-test AI reasoning + step events from
 * the `passmark-events` attachment written by the runSteps wrapper in
 * passmark.setup.ts, so the writeup has the AI's reasoning per step — not
 * just pass/fail.
 *
 * Wired into `playwright.config.ts` alongside the html / list / json reporters.
 */
import * as fs from 'fs';
import * as path from 'path';
import type {
  FullConfig,
  FullResult,
  Reporter,
  Suite,
  TestCase,
  TestResult,
} from '@playwright/test/reporter';

type Row = { name: string; status: string; duration: number; file: string };

class PassmarkMarkdownReporter implements Reporter {
  private runDir!: string;
  private startedAtMs!: number;
  private rows: Row[] = [];

  onBegin(_config: FullConfig, _suite: Suite): void {
    this.startedAtMs = Date.now();
    const ts = new Date(this.startedAtMs).toISOString().replace(/[:.]/g, '-');
    this.runDir = path.resolve(__dirname, '..', 'docs', 'runs', ts);
    fs.mkdirSync(this.runDir, { recursive: true });
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    const slug = slugify(test.titlePath().slice(-2).join('--')) || 'test';
    const file = `${slug}.md`;
    fs.writeFileSync(path.join(this.runDir, file), this.renderTest(test, result), 'utf8');
    this.rows.push({
      name: test.titlePath().slice(2).join(' › '),
      status: result.status,
      duration: result.duration,
      file,
    });
  }

  onEnd(result: FullResult): void | Promise<void> {
    fs.writeFileSync(path.join(this.runDir, 'index.md'), this.renderIndex(result), 'utf8');

    const latest = path.resolve(__dirname, '..', 'docs', 'runs', 'latest');
    try { fs.unlinkSync(latest); } catch { /* not present */ }
    try { fs.symlinkSync(path.basename(this.runDir), latest); } catch { /* sym not supported, skip */ }

    process.stdout.write(`\nRun report -> ${path.relative(process.cwd(), this.runDir)}/index.md\n`);
  }

  private renderTest(test: TestCase, result: TestResult): string {
    const lines: string[] = [];
    lines.push(`# ${test.title}`);
    lines.push('');
    lines.push(`- **Status:** \`${result.status}\``);
    lines.push(`- **Duration:** ${(result.duration / 1000).toFixed(1)}s`);
    lines.push(`- **File:** \`${path.relative(path.resolve(__dirname, '..'), test.location.file)}\``);
    lines.push(`- **Retries used:** ${result.retry}`);
    lines.push('');

    const events = readPassmarkEvents(result.attachments);
    if (events.length) {
      lines.push('## Passmark log');
      lines.push('');
      for (const ev of events) {
        const prefix = ev.k === 'stepStart' ? 'START ' : ev.k === 'stepEnd' ? 'END   ' : 'REASON';
        const body = ev.k === 'reasoning' ? (ev.r ?? '') : (ev.desc ?? '');
        const short = body.length > 280 ? body.slice(0, 277) + '...' : body;
        lines.push(`- \`${ev.id.slice(0, 6)}\` **${prefix}** ${short}`);
      }
      lines.push('');
    }

    if (result.errors.length) {
      lines.push('## Errors');
      lines.push('');
      for (const err of result.errors) {
        const msg = (err.message ?? String(err)).replace(/\[[0-9;]*m/g, '');
        lines.push('```');
        lines.push(msg.slice(0, 2000));
        lines.push('```');
        lines.push('');
      }
    }

    const nonLogAttachments = result.attachments.filter(
      (a) => a.name !== 'passmark-events' && a.path,
    );
    if (nonLogAttachments.length) {
      lines.push('## Attachments');
      lines.push('');
      for (const a of nonLogAttachments) {
        const rel = path.relative(this.runDir, a.path!);
        lines.push(`- ${a.name} -> \`${rel}\``);
      }
      lines.push('');
    }

    return lines.join('\n');
  }

  private renderIndex(result: FullResult): string {
    const passed = this.rows.filter((r) => r.status === 'passed').length;
    const failed = this.rows.filter((r) => r.status !== 'passed' && r.status !== 'skipped').length;
    const wall = ((Date.now() - this.startedAtMs) / 1000).toFixed(1);

    const lines: string[] = [];
    lines.push(`# Passmark run — ${new Date(this.startedAtMs).toISOString()}`);
    lines.push('');
    lines.push(`- **Overall:** \`${result.status}\``);
    lines.push(`- **Tests:** ${this.rows.length} (${passed} passed, ${failed} failed)`);
    lines.push(`- **Wall time:** ${wall}s`);
    lines.push('');
    lines.push('| # | Test | Status | Duration | Detail |');
    lines.push('|---|---|---|---|---|');
    this.rows.forEach((r, i) => {
      const icon = r.status === 'passed' ? 'PASS' : r.status === 'failed' ? 'FAIL' : '....';
      lines.push(`| ${i + 1} | ${r.name} | ${icon} ${r.status} | ${(r.duration / 1000).toFixed(1)}s | [open](./${r.file}) |`);
    });
    lines.push('');
    return lines.join('\n');
  }
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

type PassmarkEvent = {
  k: 'stepStart' | 'stepEnd' | 'reasoning';
  id: string;
  desc?: string;
  r?: string;
};

function readPassmarkEvents(attachments: TestResult['attachments']): PassmarkEvent[] {
  const att = attachments.find((a) => a.name === 'passmark-events' && a.path);
  if (!att?.path || !fs.existsSync(att.path)) return [];
  const events: PassmarkEvent[] = [];
  for (const line of fs.readFileSync(att.path, 'utf8').split('\n')) {
    if (!line.trim()) continue;
    try {
      const obj = JSON.parse(line);
      if (obj && typeof obj.k === 'string' && typeof obj.id === 'string') {
        events.push(obj as PassmarkEvent);
      }
    } catch {
      /* skip malformed line */
    }
  }
  return events;
}

export default PassmarkMarkdownReporter;
