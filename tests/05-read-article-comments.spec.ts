import { test, expect } from '@playwright/test';
import { runSteps } from 'passmark';

const BASE = process.env.REALWORLD_BASE_URL ?? 'http://localhost:4200';

test.describe('Read article + post comment', () => {
  test('user can open their article and post a comment that shows under the article', async ({ page }) => {
    test.setTimeout(180_000);
    const commentText = 'Drive-by comment {{run.shortid}} — regression test.';

    await runSteps({
      page,
      userFlow: 'Articles: read article and post a comment',
      steps: [
        { description: `Navigate to ${BASE}` },
        { description: 'Click the Sign up link in the header' },
        { description: 'Fill the Username field', data: { value: 'reader-{{run.shortid}}' } },
        { description: 'Fill the Email field', data: { value: '{{run.email}}' } },
        { description: 'Fill the Password field', data: { value: 'Passw0rd!{{run.shortid}}' } },
        {
          description: 'Click the Sign up submit button',
          waitUntil: 'The user is signed in',
        },
        { description: 'Click the New Article link in the header' },
        { description: 'Fill the Article Title field', data: { value: 'Readable article {{run.shortid}}' } },
        { description: 'Fill the "What\'s this article about?" field', data: { value: 'Synopsis for the read-article test' } },
        { description: 'Fill the body field', data: { value: 'Full article body written for the read-article + comment regression test.' } },
        {
          description: 'Click the Publish Article button',
          waitUntil: 'The article page is open with a Comments section visible below the body',
        },
        { description: 'Fill the Write a comment textarea', data: { value: commentText } },
        {
          description: 'Click the Post Comment button',
          waitUntil: 'The posted comment appears in the comments list below the article',
        },
      ],
      assertions: [
        { assertion: 'The full article body text is displayed above the comments section' },
        { assertion: `A comment containing "Drive-by comment" is visible in the comments list` },
        { assertion: 'The comment shows the author name "reader-" (prefix) as the commenter' },
      ],
      test,
      expect,
    });
  });
});
