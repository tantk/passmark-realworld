import { test, expect } from '@playwright/test';
import { runSteps } from 'passmark';

const BASE = process.env.REALWORLD_BASE_URL ?? 'http://localhost:4200';

test.describe('Update article', () => {
  test('author can edit their published article and the changes persist', async ({ page }) => {
    test.setTimeout(180_000);
    const originalTitle = 'Original title {{run.shortid}}';
    const updatedTitle = 'Updated title {{run.shortid}}';
    const updatedBody = 'This body has been rewritten for the update-article test {{run.shortid}}.';

    await runSteps({
      page,
      userFlow: 'Articles: edit an existing article',
      steps: [
        { description: `Navigate to ${BASE}` },
        { description: 'Click the Sign up link in the header' },
        { description: 'Fill the Username field', data: { value: 'editor-{{run.shortid}}' } },
        { description: 'Fill the Email field', data: { value: '{{run.email}}' } },
        { description: 'Fill the Password field', data: { value: 'Passw0rd!{{run.shortid}}' } },
        { description: 'Click the Sign up submit button', waitUntil: 'The user is signed in' },
        { description: 'Click the New Article link in the header' },
        { description: 'Fill the Article Title field', data: { value: originalTitle } },
        { description: 'Fill the "What\'s this article about?" field', data: { value: 'Pre-edit synopsis' } },
        { description: 'Fill the body field', data: { value: 'Original body text before the edit.' } },
        {
          description: 'Click the Publish Article button',
          waitUntil: 'The published article page is visible with the original title as the heading',
        },
        {
          description: 'Click the Edit Article button (pencil icon) on the article page',
          waitUntil: 'The article editor form is visible with the previously entered title and body pre-filled',
        },
        { description: 'Clear the Article Title field and type the updated title', data: { value: updatedTitle } },
        { description: 'Clear the body field and type the updated body', data: { value: updatedBody } },
        {
          description: 'Click the Publish Article button to save the edits',
          waitUntil: 'The article page reloads with the updated title shown as the heading',
        },
      ],
      assertions: [
        { assertion: `The article heading now shows the updated title containing "Updated title" (not "Original title")` },
        { assertion: 'The article body shows the updated body text, not the original body text' },
      ],
      test,
      expect,
    });
  });
});
