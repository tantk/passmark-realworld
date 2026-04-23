import { test, expect } from '@playwright/test';
import { runSteps } from 'passmark';

const BASE = process.env.REALWORLD_BASE_URL ?? 'http://localhost:4200';

test.describe('Sign up', () => {
  test('new user can register and lands in the signed-in state', async ({ page }) => {
    test.setTimeout(120_000);
    await runSteps({
      page,
      userFlow: 'Signup: register a new account',
      steps: [
        { description: `Navigate to ${BASE}` },
        { description: 'Click the Sign up link in the header' },
        { description: 'Fill the Username field', data: { value: 'user-{{run.shortid}}' } },
        { description: 'Fill the Email field', data: { value: '{{run.email}}' } },
        { description: 'Fill the Password field', data: { value: 'Passw0rd!{{run.shortid}}' } },
        {
          description: 'Click the Sign up submit button',
          waitUntil: 'The header shows a link to the new user profile instead of the Sign in/Sign up links',
        },
      ],
      assertions: [
        { assertion: 'The header no longer shows "Sign in" or "Sign up" links' },
        { assertion: 'The header shows the new username linking to their profile' },
        { assertion: 'A "New Article" link is visible in the header, indicating an authenticated session' },
      ],
      test,
      expect,
    });
  });
});
