# homepage global feed lists articles

- **Status:** `passed`
- **Duration:** 27.6s
- **File:** `tests/01-anonymous-browse.spec.ts`
- **Retries used:** 0

## Passmark log

- `Dur_Ff` **START ** Navigate to http://localhost:4200
- `Dur_Ff` **REASON** Taking a snapshot before starting the navigation step as per instructions.


- `Dur_Ff` **REASON** Navigating to the application URL as specified in the current step.


- `Dur_Ff` **END   ** Navigate to http://localhost:4200
- `yUWrOA` **START ** Click the Global Feed tab
- `UUlQXn` **START ** Starting assertion verification
- `UUlQXn` **REASON** Verifying assertion: The header shows the Conduit brand name
- `UUlQXn` **REASON** 

The header clearly displays the 'Conduit' brand name, both as a logo/link in the top left and as a prominent heading in the main content area.

[Assertion ✅ passed]
- `UUlQXn` **END   ** Successfully verified assertion
- `MjjZod` **START ** Starting assertion verification
- `MjjZod` **REASON** Verifying assertion: The global feed lists at least one article card showing a title, an author name, and a date
- `MjjZod` **REASON** 

The global feed is displayed and contains multiple article cards. Each card shows a title (e.g., 'Social two-user article kxYKXg-rs'), an author name (e.g., 'alice-kxYKXg-rs'), and a date (e.g., 'April 23, 2026'). Therefore, the assertion passes.

[Assertion ✅ passed]
- `MjjZod` **END   ** Successfully verified assertion
- `oiCd3h` **START ** Starting assertion verification
- `oiCd3h` **REASON** Verifying assertion: A list of popular tags is visible in the sidebar
- `oiCd3h` **REASON** 

The screenshot clearly shows a section labeled 'Popular Tags' in the sidebar, followed by a list of tags such as 'regression', 'intro', 'passmark', 'welcome', and 'demo'. The accessibility snapshot also confirms the presence of these tags under a 'Popular Tags' heading.

[As...
- `oiCd3h` **END   ** Successfully verified assertion

## Attachments

- trace -> `../../../test-results/01-anonymous-browse-Anonym-a4807--global-feed-lists-articles-chromium/trace.zip`
