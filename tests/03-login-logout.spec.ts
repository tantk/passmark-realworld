import { test, expect } from '@playwright/test';
import { runSteps } from 'passmark';

const BASE = process.env.REALWORLD_BASE_URL ?? 'http://localhost:4200';

test.describe('Log in / log out', () => {
  test('user can log out, then log back in with the same credentials', async ({ page }) => {
    test.setTimeout(180_000);
    const email = `u{{run.shortid}}@conduit.test`;
    const password = 'Passw0rd!{{run.shortid}}';
    const username = 'user-{{run.shortid}}';

    await runSteps({
      page,
      userFlow: 'Auth: register, log out, then log back in',
      steps: [
        { description: `Navigate to ${BASE}` },
        { description: 'Click the Sign up link in the header' },
        { description: 'Fill the Username field', data: { value: username } },
        { description: 'Fill the Email field', data: { value: email } },
        { description: 'Fill the Password field', data: { value: password } },
        {
          description: 'Click the Sign up submit button',
          waitUntil: 'The header shows the new user is signed in',
        },
        {
          description: 'Click the Settings link in the header',
          waitUntil: 'The settings page is visible',
        },
        {
          description: 'Click the "Or click here to logout" button at the bottom of the settings page',
          waitUntil: 'The header once again shows Sign in / Sign up links',
        },
        { description: 'Click the Sign in link in the header' },
        { description: 'Fill the Email field on the sign in form', data: { value: email } },
        { description: 'Fill the Password field on the sign in form', data: { value: password } },
        {
          description: 'Click the Sign in submit button',
          waitUntil: 'The header shows the signed-in state with the username visible',
        },
      ],
      assertions: [
        { assertion: 'After the final sign-in, the header shows the username link (signed-in state)' },
        { assertion: 'The header no longer shows "Sign in" or "Sign up" links after logging back in' },
      ],
      test,
      expect,
    });
  });
});
