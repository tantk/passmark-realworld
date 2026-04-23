<!--
Hashnode draft for the Bug0 #BreakingAppsHackathon submission.

Fill in the TODOs, drop in numbers from `docs/runs/latest/index.md`, and
publish. Suggested tags at the bottom.
-->

# Plain-English regression tests for a Medium clone — what shipped, what bit me

> Submission for the Bug0 [Breaking Apps Hackathon](https://hashnode.com/hackathons/breaking-things). Source: <https://github.com/TODO-your-handle/passmark-realworld>.

## TL;DR

I wrote eight end-to-end regression tests for the [RealWorld](https://github.com/gothinkster/realworld) reference app ("Conduit", a Medium clone) using [Passmark](https://github.com/bug0inc/passmark) — an open-source library that lets you describe browser tests in plain English, executes them via Playwright, and verifies assertions with multiple LLMs in consensus. First run resolves each step with an LLM; subsequent runs replay cached Playwright actions at native speed.

The tests cover the full CRUD surface (browse → signup → login → create → read+comment → update → delete) plus the social actions (favorite, comment, edit profile). What surprised me wasn't the AI part — it was the *self-hosted backend* part.

## The pitch in one paragraph

A Passmark test reads like this:

```ts
await runSteps({
  page,
  userFlow: 'Articles: create a new article',
  steps: [
    { description: `Navigate to ${BASE}` },
    { description: 'Click the New Article link in the header' },
    { description: 'Fill the Article Title field', data: { value: 'Hello world' } },
    { description: 'Click the Publish Article button',
      waitUntil: 'The published article page is visible' },
  ],
  assertions: [
    { assertion: 'The article body text is visible on the page' },
    { assertion: 'Both tags are visible on the article page' },
  ],
  test, expect,
});
```

No selectors. No `await page.locator('input[name="title"]')`. The first run picks the right element with an LLM and caches the action; later runs replay without paying for a model call. Assertions are evaluated by Claude *and* Gemini in parallel; if they disagree, an arbiter model breaks the tie.

## Why RealWorld

It's the [canonical full-stack CRUD demo](https://github.com/gothinkster/realworld) — auth, articles, comments, favorites, follows, tags. If your testing tool can cover Conduit, it can cover most CRUD apps. There are dozens of frontend/backend implementations to choose from; I picked `node-express-prisma-v1-official-app` (backend) + `angular-realworld-example-app` (frontend).

## The eight tests

| # | Flow | Notes |
|---|---|---|
| 01 | Anonymous browse global feed | Smoke-only, no auth |
| 02 | Sign up new user | Inline `{{run.email}}` / `{{run.shortid}}` placeholders |
| 03 | Log in / log out | Full round-trip |
| 04 | Create article (tags, body) | Tags entered via free-text + Enter |
| 05 | Read article + post comment | Same author posts and comments |
| 06 | Update (edit) article | Pencil → publish |
| 07 | Delete article | Verifies it disappears from profile |
| 08 | Favorite, comment, edit profile | Chained social actions |

Each test is self-contained: signs up a fresh user with a unique email, does its thing, and exits. No shared fixtures. If one fails, the others are unaffected.

## Setup adventure (the real story)

I expected the LLM bits to be the rough edges. They weren't. The friction was all in standing up a 5-year-old reference backend on a 2026 Linux box. **In order:**

1. **Prisma 2.29 → 4.16.** Prisma 2's binary targets list doesn't include `debian-openssl-3.6.x` (the OpenSSL 3 build on modern Ubuntu). Bumped to v4 because v5 changed the implicit-m:n syntax.
2. **Patched `schema.prisma`.** Even Prisma v4 rejects the legacy `@relation("X", references: [id])` shorthand on m:n relations. Removed the `references:` arg from four lines and dropped the now-GA preview features.
3. **Node 25 → 20.** The `jsonwebtoken` library transitively depends on `buffer-equal-constant-time`, which reaches into `Buffer.SlowBuffer.prototype` — and `SlowBuffer` was finally removed from Node ≥22. Installed Node 20 LTS via nvm and bound the backend to it via PATH.
4. **Initialized the `realworld` git submodule.** The Angular frontend `@import`s shared CSS from a submodule that `bun install` doesn't pull in. Empty submodule → build error → blank page.
5. **Re-pointed the API interceptor.** The frontend ships pointing at `https://api.realworld.show/api`. One-line edit to `apiInterceptor` to hit `localhost:3000/api`.
6. **Auth was silently broken.** All authenticated requests came back 401 *"missing authorization credentials"*. The error handler was eating the real express-jwt message; once I logged it (`invalid signature`), the cause was clear: tokens were being signed with the `JWT_SECRET` from `.env` but verified with the hardcoded `'superSecret'` fallback. Prisma loads `.env` lazily on first query — so by the time the JWT middleware was *initialized* at module load, `process.env.JWT_SECRET` was still undefined. Adding `import 'dotenv/config'` at the top of `src/index.ts` fixes both sides.
7. **Empty global feed despite three articles in the DB.** `buildFindAllQuery` always pushed `{ author: { OR: [], AND: [] } }` into the where-clause. Prisma 2 used to silently drop empty `OR: []`; Prisma 4 interprets it as "match nothing". Patched both the article and tag services to skip the filter when the arrays are empty.
8. **Picked the wrong Gemini.** I'd configured `stepExecution: 'google/gemini-2.5-flash'` to save money. Gemini 3 introduced a new `thinking_level` request parameter that 2.5 Flash rejects with *"Thinking level is not supported for this model"*. Swapped the flow-execution slots back to `gemini-3-flash-preview` (which natively accepts the param) and kept `gemini-2.5-flash-lite` for the cheap-and-deterministic assertion-secondary + utility roles.

None of this is Passmark's fault. It's just the cost of self-hosting a years-old reference stack. The flip side is that all eight tests were *plain English* the whole time — none of them changed during the debugging.

## What it cost (LLM-side)

I ran Passmark with a single Google AI Studio key (free tier), routing every model slot to a Gemini variant since I didn't have an Anthropic key handy:

```ts
configure({
  ai: {
    models: {
      stepExecution:      'google/gemini-3-flash-preview',
      userFlowLow:        'google/gemini-3-flash-preview',
      userFlowHigh:       'google/gemini-3.1-pro-preview',
      assertionPrimary:   'google/gemini-3-flash-preview',
      assertionSecondary: 'google/gemini-2.5-flash-lite',
      assertionArbiter:   'google/gemini-3.1-pro-preview',
      utility:            'google/gemini-2.5-flash-lite',
    },
  },
});
```

This kills the cross-provider Claude/Gemini consensus, but uses two *different* Gemini models for primary vs. secondary so the dual-model assertion still has some variance. The full suite runs comfortably inside the free Gemini quota.

## Results

> Drop in numbers from `docs/runs/latest/index.md`.

| # | Test | Status | Duration |
|---|---|---|---|
| 01 | Anonymous browse | ✓ | TODO s |
| 02 | Signup | TODO | TODO s |
| 03 | Login/logout | TODO | TODO s |
| 04 | Create article | TODO | TODO s |
| 05 | Read + comment | TODO | TODO s |
| 06 | Update article | TODO | TODO s |
| 07 | Delete article | TODO | TODO s |
| 08 | Social actions | TODO | TODO s |

**First-run wall time: TODO**. Cached re-run: TODO.

## What I'd want next

- A "PR-style" run that diffs the Passmark cache between commits so you can see *which steps the AI had to re-resolve* after a UI change.
- A way to set per-test model overrides — slow tests like 08 could afford `gemini-3-pro` for the step-execution slot.
- Built-in Hashnode-style markdown export from the HTML report. (Hence this writeup script.)

## Try it

```bash
git clone https://github.com/TODO-your-handle/passmark-realworld
cd passmark-realworld && npm install && npx playwright install chromium
cp .env.example .env  # fill in your Google key
npm test
open docs/runs/latest/index.md
```

Repo: https://github.com/TODO-your-handle/passmark-realworld
Passmark: https://github.com/bug0inc/passmark

---

**Tags:** `#BreakingAppsHackathon`, `passmark`, `playwright`, `e2e-testing`, `ai`, `gemini`, `prisma`, `realworld`
