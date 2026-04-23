import { test, expect } from '@playwright/test';
import { runSteps } from 'passmark';

const BASE = process.env.REALWORLD_BASE_URL ?? 'http://localhost:4200';

test.describe('Delete article', () => {
  test('author can delete their article and it disappears from their profile feed', async ({ page }) => {
    test.setTimeout(180_000);
    const title = 'Doomed article {{run.shortid}}';

    await runSteps({
      page,
      userFlow: 'Articles: delete an existing article',
      steps: [
        { description: `Navigate to ${BASE}` },
        { description: 'Click the Sign up link in the header' },
        { description: 'Fill the Username field', data: { value: 'deleter-{{run.shortid}}' } },
        { description: 'Fill the Email field', data: { value: '{{run.email}}' } },
        { description: 'Fill the Password field', data: { value: 'Passw0rd!{{run.shortid}}' } },
        { description: 'Click the Sign up submit button', waitUntil: 'The user is signed in' },
        { description: 'Click the New Article link in the header' },
        { description: 'Fill the Article Title field', data: { value: title } },
        { description: 'Fill the "What\'s this article about?" field', data: { value: 'This article will be deleted' } },
        { description: 'Fill the body field', data: { value: 'Body text for the delete-article test.' } },
        {
          description: 'Click the Publish Article button',
          waitUntil: 'The published article page is visible with the title as the heading',
        },
        {
          description: 'Click the Delete Article button on the article page',
          waitUntil: 'The user is redirected away from the article page (for example, to the home feed)',
        },
        {
          description: 'Click the username link in the header to open the profile page',
          waitUntil: 'The profile page for the current user is visible',
        },
      ],
      assertions: [
        { assertion: `No article card with the title "Doomed article" is visible on the profile page — the "My Articles" tab shows no such article or shows the "No articles are here... yet." empty state` },
        { assertion: 'The current URL is no longer the deleted article\'s page' },
      ],
      test,
      expect,
    });
  });
});
