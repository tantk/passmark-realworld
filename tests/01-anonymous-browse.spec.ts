import { test, expect } from '@playwright/test';
import { runSteps } from 'passmark';

const BASE = process.env.REALWORLD_BASE_URL ?? 'http://localhost:4200';

test.describe('Anonymous browsing', () => {
  test('homepage global feed lists articles', async ({ page }) => {
    test.setTimeout(90_000);
    await runSteps({
      page,
      userFlow: 'Anonymous: browse homepage global feed',
      steps: [
        { description: `Navigate to ${BASE}` },
        {
          description: 'Click the Global Feed tab',
          waitUntil: 'At least one article preview is visible',
        },
      ],
      assertions: [
        { assertion: 'The header shows the Conduit brand name' },
        {
          assertion:
            'The global feed lists at least one article card showing a title, an author name, and a date',
        },
        { assertion: 'A list of popular tags is visible in the sidebar' },
      ],
      test,
      expect,
    });
  });
});
