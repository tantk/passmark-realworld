import { test, expect } from '@playwright/test';
import { runSteps } from 'passmark';

const BASE = process.env.REALWORLD_BASE_URL ?? 'http://localhost:4200';

test.describe('Social actions (two-user)', () => {
  test('user B can favorite, follow, and comment on A\'s article; B can edit own profile bio', async ({ page }) => {
    test.setTimeout(540_000);
    const title = 'Social two-user article {{run.shortid}}';
    const commentText = 'Nice piece, agree completely {{run.shortid}}';
    const newBio = 'Updated bio for regression test {{run.shortid}}';
    const alice = 'alice-{{run.shortid}}';
    const bob = 'bob-{{run.shortid}}';
    const emailA = 'alice-{{run.shortid}}@conduit.test';
    const emailB = 'bob-{{run.shortid}}@conduit.test';
    const passA = 'Passw0rdA-{{run.shortid}}';
    const passB = 'Passw0rdB-{{run.shortid}}';

    // ------------------------------------------------------------------
    // Phase 1: Alice signs up + publishes. Bob signs up, visits the
    // article, favorites it, follows Alice, and posts a comment. Assertions
    // run at the end of the phase while we're still on Alice's article.
    // ------------------------------------------------------------------
    await runSteps({
      page,
      userFlow: 'Social ph1: Alice creates; Bob favorites/follows/comments',
      steps: [
        // Alice: signup
        { description: `Navigate to ${BASE}` },
        { description: 'Click the Sign up link in the header' },
        { description: 'Fill the Username field', data: { value: alice } },
        { description: 'Fill the Email field', data: { value: emailA } },
        { description: 'Fill the Password field', data: { value: passA } },
        { description: 'Click the Sign up submit button', waitUntil: 'Alice is signed in (header shows her username)' },

        // Alice: publish article
        { description: 'Click the New Article link in the header' },
        { description: 'Fill the Article Title field', data: { value: title } },
        { description: 'Fill the "What\'s this article about?" field', data: { value: 'Synopsis for the two-user social test' } },
        { description: 'Fill the body field', data: { value: 'Body text for the two-user social actions regression test.' } },
        {
          description: 'Click the Publish Article button',
          waitUntil: 'The published article page is open with the title as the heading',
          extract: { as: 'articleUrl', prompt: 'the current full URL in the address bar (Alice\'s just-published article page)' },
        },

        // Alice: logout
        { description: 'Click the Settings link in the header', waitUntil: 'The settings page is visible' },
        {
          description: 'Click the "Or click here to logout" button at the bottom of the settings page',
          waitUntil: 'The header once again shows Sign in / Sign up links (Alice is logged out)',
        },

        // Bob: signup
        { description: 'Click the Sign up link in the header' },
        { description: 'Fill the Username field', data: { value: bob } },
        { description: 'Fill the Email field', data: { value: emailB } },
        { description: 'Fill the Password field', data: { value: passB } },
        { description: 'Click the Sign up submit button', waitUntil: 'Bob is signed in (header shows his username)' },

        // Bob: visit Alice's article
        {
          description: 'Navigate to {{run.articleUrl}}',
          waitUntil: 'Alice\'s article page is open with its title as the heading',
          data: { value: '{{run.articleUrl}}' },
        },

        // Bob: favorite
        {
          description: 'Click the Favorite Article button near the article heading (the button with the heart icon labeled "Favorite Article" or "Favorite Post")',
          waitUntil: 'The favorite count next to the button has incremented to at least 1, or the button has switched to a filled-heart / active state',
        },

        // Bob: follow Alice
        {
          description: 'Click the "+ Follow" button next to Alice\'s username at the top of the article',
          waitUntil: 'The follow button now reads "Unfollow" (or similar), indicating Bob is following Alice',
        },

        // Bob: comment
        { description: 'Fill the Write a comment textarea', data: { value: commentText } },
        {
          description: 'Click the Post Comment button',
          waitUntil: 'The posted comment appears in the comments list below the article',
        },
      ],
      assertions: [
        { assertion: 'The Favorite Article button on Alice\'s article shows a count of at least 1 (Bob has favorited it)' },
        { assertion: 'The follow button next to Alice\'s username reads "Unfollow" (or the active-follow state), indicating Bob is following Alice' },
        { assertion: 'A comment containing "Nice piece, agree completely" is visible under Alice\'s article, attributed to Bob' },
      ],
      test,
      expect,
    });

    // ------------------------------------------------------------------
    // Phase 2: same browser session, Bob is still signed in. Edit profile
    // bio then navigate to his profile so the assertion can see the
    // updated bio.
    // ------------------------------------------------------------------
    await runSteps({
      page,
      userFlow: 'Social ph2: Bob edits his profile bio',
      steps: [
        {
          description: 'Click the Settings link in the header',
          waitUntil: 'The settings page is visible with fields for URL of profile picture, Your Name, Short bio, Email, and Password',
        },
        { description: 'Clear the Short bio field and type the new bio', data: { value: newBio } },
        // No waitUntil: this Angular build gives no visible signal after
        // submit, so any condition polls forever. Trust the click.
        { description: 'Click the Update Settings button' },
        {
          description: 'Click Bob\'s username link in the header to open his profile page',
          waitUntil: 'Bob\'s profile page is visible with his username as the heading',
        },
      ],
      assertions: [
        { assertion: 'The current page is Bob\'s profile and displays the updated bio text containing "Updated bio for regression test"' },
      ],
      test,
      expect,
    });
  });
});
