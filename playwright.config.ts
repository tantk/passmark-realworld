import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

// Load AFTER dotenv so passmark sees REDIS_URL / GOOGLE_GENERATIVE_AI_API_KEY
// at module-eval time. Static `import` would hoist above dotenv.config().
require('./passmark.setup');

export default defineConfig({
  testDir: './tests',
  timeout: 120_000,
  expect: { timeout: 15_000 },
  fullyParallel: false,
  retries: 0,
  workers: 1,
  reporter: [
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    ['list'],
    ['json', { outputFile: 'playwright-report/results.json' }],
    ['./reporters/passmark-md-reporter.ts'],
  ],
  use: {
    baseURL: process.env.REALWORLD_BASE_URL ?? 'http://localhost:4200',
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 30_000,
    navigationTimeout: 30_000,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
