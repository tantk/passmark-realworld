# homepage global feed lists articles

- **Status:** `passed`
- **Duration:** 27.7s
- **File:** `tests/01-anonymous-browse.spec.ts`
- **Retries used:** 0

## Passmark log

- `IjLNZD` **START ** Navigate to http://localhost:4200
- `IjLNZD` **REASON** Taking an initial snapshot before navigating to the target URL.


- `IjLNZD` **REASON** Navigating to the application URL as specified in the current step.


- `IjLNZD` **END   ** Navigate to http://localhost:4200
- `U2kkJl` **START ** Click the Global Feed tab
- `KfBGC8` **START ** Starting assertion verification
- `KfBGC8` **REASON** Verifying assertion: The header shows the Conduit brand name
- `KfBGC8` **REASON** 

The header clearly displays the brand name 'Conduit' in the top left corner of the page, as confirmed by both the screenshot and the accessibility snapshot.

[Assertion ✅ passed]
- `KfBGC8` **END   ** Successfully verified assertion
- `sJqSXD` **START ** Starting assertion verification
- `sJqSXD` **REASON** Verifying assertion: The global feed lists at least one article card showing a title, an author name, and a date
- `sJqSXD` **REASON** 

The screenshot clearly shows multiple articles listed under the 'Global Feed' section. Each article card displays a title (e.g., 'Welcome to Conduit — article 3'), an author name ('demo-author'), and a date ('April 22, 2026'), fulfilling all conditions of the assertion.

[As...
- `sJqSXD` **END   ** Successfully verified assertion
- `fvuRrN` **START ** Starting assertion verification
- `fvuRrN` **REASON** Verifying assertion: A list of popular tags is visible in the sidebar
- `fvuRrN` **REASON** 

The screenshot clearly shows a section labeled 'Popular Tags' in the sidebar, followed by a list of tags including 'intro', 'welcome', and 'demo'. The accessibility snapshot also confirms the presence of a 'Popular Tags' heading and associated links for these tags.

[Asserti...
- `fvuRrN` **END   ** Successfully verified assertion

## Attachments

- trace -> `../../../test-results/01-anonymous-browse-Anonym-a4807--global-feed-lists-articles-chromium/trace.zip`
