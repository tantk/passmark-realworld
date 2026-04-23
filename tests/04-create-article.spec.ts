import { test, expect } from '@playwright/test';
import { runSteps } from 'passmark';

const BASE = process.env.REALWORLD_BASE_URL ?? 'http://localhost:4200';

test.describe('Create article', () => {
  test('signed-in user can publish a new article with title, body, and tags', async ({ page }) => {
    test.setTimeout(180_000);
    const title = 'Passmark drive-by {{run.shortid}}';
    const description = 'A short synopsis written for regression testing';
    const body = 'This article exists purely to validate the create-article flow. Shortid: {{run.shortid}}.';

    await runSteps({
      page,
      userFlow: 'Articles: create a new article as an authenticated user',
      steps: [
        { description: `Navigate to ${BASE}` },
        { description: 'Click the Sign up link in the header' },
        { description: 'Fill the Username field', data: { value: 'author-{{run.shortid}}' } },
        { description: 'Fill the Email field', data: { value: '{{run.email}}' } },
        { description: 'Fill the Password field', data: { value: 'Passw0rd!{{run.shortid}}' } },
        {
          description: 'Click the Sign up submit button',
          waitUntil: 'The user is signed in and the header shows a New Article link',
        },
        {
          description: 'Click the New Article link in the header',
          waitUntil: 'The editor form with Article Title, What\'s this article about, Write your article, and Enter tags fields is visible',
        },
        { description: 'Fill the Article Title field', data: { value: title } },
        { description: 'Fill the "What\'s this article about?" field', data: { value: description } },
        { description: 'Fill the body / "Write your article (in markdown)" field', data: { value: body } },
        { description: 'Add the tag "passmark" to the Enter tags field and press Enter' },
        { description: 'Add the tag "regression" to the Enter tags field and press Enter' },
        {
          description: 'Click the Publish Article button',
          waitUntil: 'The published article page is visible with the title as a heading',
        },
      ],
      assertions: [
        { assertion: `The article page heading displays the published title containing "Passmark drive-by"` },
        { assertion: 'The article body text is visible on the page' },
        { assertion: 'Both tags "passmark" and "regression" are visible on the article page' },
        { assertion: 'The author name "author-" (prefix) is shown as the article author' },
      ],
      test,
      expect,
    });
  });
});
