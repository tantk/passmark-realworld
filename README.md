# passmark-realworld

Passmark AI regression test suite targeting the [Conduit / RealWorld](https://github.com/gothinkster/realworld) reference app. Built for the [Breaking Apps Hackathon](https://hashnode.com/hackathons/breaking-things).

## What this is

- **Passmark** writes end-to-end tests in plain English on top of Playwright. First run uses an LLM to resolve steps; subsequent runs replay cached Playwright actions at native speed. Auto-heals when the UI drifts. Assertions are verified by two models (Anthropic + Google) with a tiebreaker.
- **RealWorld ("Conduit")** is the canonical full-stack CRUD reference app — a Medium clone with auth, articles CRUD, comments, favorites, following, tags.

The goal: cover the full CRUD surface + social features in natural-language tests, and write up the experience on Hashnode.

## Prerequisites (Ubuntu)

- **Node.js 20+** — `curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt install -y nodejs`
- **Docker + Docker Compose** — for self-hosting the RealWorld stack
- **API key** — Google Generative AI (`GOOGLE_GENERATIVE_AI_API_KEY`). This project ships a Google-only model override in `passmark.setup.ts`, so Anthropic is not required. To use the default Claude+Gemini cross-provider consensus, delete that file and add `ANTHROPIC_API_KEY`.

## Setup

### 1. Install this project

```bash
cd passmark-realworld
npm install
npx playwright install --with-deps chromium
cp .env.example .env
# edit .env and fill in your API keys
```

### 2. Stand up a self-hosted RealWorld stack

The RealWorld repo lists dozens of frontend/backend impls. For the fastest path, pick a Node backend + Angular frontend. Suggested:

- **Backend:** `node-express-prisma` — `git clone https://github.com/gothinkster/node-express-prisma-v1-official-app.git` (or any listed Node impl)
- **Frontend:** `angular-ngrx-nx-realworld-example-app` — `git clone https://github.com/stonecoldpat/angular-realworld-example-app`

Run the backend on port 3000 and the frontend on port 4200. Confirm `http://localhost:4200` serves the app and `http://localhost:3000/api/articles` returns JSON.

> **Tip:** if either port is taken, update `REALWORLD_BASE_URL` / `REALWORLD_API_URL` in `.env` accordingly.

### 3. (Optional) Redis step cache

Dramatically speeds up re-runs. First run populates; subsequent runs replay cached Playwright actions without calling the LLM.

```bash
docker run -d -p 6379:6379 --name passmark-redis redis:7-alpine
# then in .env:
# REDIS_URL=redis://localhost:6379
```

## Running tests

```bash
npm test                 # headless, all tests
npm run test:headed      # watch them run (needs a display; skip on headless server)
npm run report           # open the HTML report after a run
```

On a headless Ubuntu server, after the run:

```bash
# view the report locally
npx playwright show-report --host 0.0.0.0
# then on your laptop:
# ssh -L 9323:localhost:9323 user@server
# open http://localhost:9323
```

Or rsync the reports down:

```bash
rsync -av user@server:~/passmark-realworld/playwright-report/ ./report/
open ./report/index.html
```

For a single-failure deep-dive, grab `test-results/<test>/trace.zip` and drop it onto <https://trace.playwright.dev> — the trace viewer is a static client-side web app.

## Test plan

| # | Flow | Status |
|---|---|---|
| 01 | Anonymous browse global feed | scaffolded |
| 02 | Sign up new user | scaffolded |
| 03 | Log in / log out | scaffolded |
| 04 | Create article (tags, body) | scaffolded |
| 05 | Read article + comments | scaffolded |
| 06 | Update (edit) article | scaffolded |
| 07 | Delete article | scaffolded |
| 08 | Two-user social: B favorites/follows/comments on A; B edits profile | scaffolded |

Each test is one `runSteps()` call with plain-English `steps` + `assertions`.

## Repo layout

```
passmark-realworld/
├── package.json
├── playwright.config.ts
├── passmark.setup.ts     # Google-only model routing (overrides Claude default)
├── .env.example
├── .gitignore
├── reporters/
│   └── passmark-md-reporter.ts   # writes per-test markdown into docs/runs/
├── docs/
│   ├── writeup.md                # Hashnode submission template
│   └── runs/                     # one folder per run, latest/ symlink
├── tests/
│   ├── 01-anonymous-browse.spec.ts
│   ├── 02-signup.spec.ts
│   ├── 03-login-logout.spec.ts
│   ├── 04-create-article.spec.ts
│   ├── 05-read-article-comments.spec.ts
│   ├── 06-update-article.spec.ts
│   ├── 07-delete-article.spec.ts
│   └── 08-social-actions.spec.ts
└── README.md
```

## Debugging a failing test

1. Check the HTML report — screenshots + video are attached on failure.
2. Open the trace — `test-results/<test-name>/trace.zip` → <https://trace.playwright.dev>.
3. Re-run a single test with `--debug`: `npx playwright test tests/01-anonymous-browse.spec.ts --debug`.
4. For Passmark-specific flakiness, set `bypassCache: true` on the failing step to force re-resolution.
