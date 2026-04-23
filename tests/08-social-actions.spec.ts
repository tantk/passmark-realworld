import { test, expect } from '@playwright/test';
import { runSteps } from 'passmark';

const BASE = process.env.REALWORLD_BASE_URL ?? 'http://localhost:4200';

test.describe('Social actions', () => {
  test('user can favorite their own article, comment, and edit their profile bio', async ({ page }) => {
    test.setTimeout(240_000);
    const title = 'Social test article {{run.shortid}}';
    const newBio = 'Updated bio for regression test {{run.shortid}}';
    const commentText = 'Self-posted comment {{run.shortid}}';

    await runSteps({
      page,
      userFlow: 'Social: favorite, comment, and edit profile',
      steps: [
        { description: `Navigate to ${BASE}` },
        { description: 'Click the Sign up link in the header' },
        { description: 'Fill the Username field', data: { value: 'social-{{run.shortid}}' } },
        { description: 'Fill the Email field', data: { value: '{{run.email}}' } },
        { description: 'Fill the Password field', data: { value: 'Passw0rd!{{run.shortid}}' } },
        { description: 'Click the Sign up submit button', waitUntil: 'The user is signed in' },

        { description: 'Click the New Article link in the header' },
        { description: 'Fill the Article Title field', data: { value: title } },
        { description: 'Fill the "What\'s this article about?" field', data: { value: 'Synopsis for the social actions test' } },
        { description: 'Fill the body field', data: { value: 'Article body used to test favorite, comment, and profile edit.' } },
        {
          description: 'Click the Publish Article button',
          waitUntil: 'The article page is open with the title as the heading',
        },

        {
          description: 'Click the Favorite Article button on the article page (the button with the heart icon that includes the word Favorite)',
          waitUntil: 'The Favorite button shows an incremented count (e.g. "Favorite Article (1)" or the filled-heart variant)',
        },

        { description: 'Fill the Write a comment textarea', data: { value: commentText } },
        {
          description: 'Click the Post Comment button',
          waitUntil: 'The posted comment appears in the comments list below the article',
        },

        {
          description: 'Click the Settings link in the header',
          waitUntil: 'The settings page is visible with fields for URL of profile picture, Your Name, Short bio, Email, and Password',
        },
        { description: 'Clear the Short bio field and type the new bio', data: { value: newBio } },
        {
          description: 'Click the Update Settings button',
          waitUntil: 'The profile page for the current user is visible',
        },
      ],
      assertions: [
        { assertion: 'The Favorite Article button on the article shows a count of at least 1 (the article has been favorited)' },
        { assertion: `A comment containing "Self-posted comment" is visible under the article` },
        { assertion: `The profile page displays the updated bio text containing "Updated bio for regression test"` },
      ],
      test,
      expect,
    });
  });
});
