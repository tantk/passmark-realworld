# new user can register and lands in the signed-in state

- **Status:** `passed`
- **Duration:** 84.3s
- **File:** `tests/02-signup.spec.ts`
- **Retries used:** 0

## Passmark log

- `TflKt8` **START ** Navigate to http://localhost:4200
- `TflKt8` **REASON** Taking a snapshot before starting the navigation step as per instructions.


- `TflKt8` **REASON** Navigating to the application URL as specified in the current step.


- `TflKt8` **END   ** Navigate to http://localhost:4200
- `NqibfL` **START ** Click the Sign up link in the header
- `NqibfL` **REASON** Taking a snapshot to locate the 'Sign up' link in the header.


- `NqibfL` **REASON** Clicking the 'Sign up' link to proceed to the registration page.


- `NqibfL` **REASON** Waiting for the registration page to load after clicking 'Sign up'.


- `NqibfL` **REASON** The 'Sign up' link was clicked and the registration page has loaded successfully.


- `NqibfL` **END   ** Click the Sign up link in the header
- `xa45Wr` **START ** Fill the Username field
- `xa45Wr` **REASON** Taking a snapshot to locate the Username field.


- `xa45Wr` **REASON** Typing the username into the Username field.


- `xa45Wr` **REASON** The Username field has been successfully filled with the provided value, as verified by the latest snapshot.


- `xa45Wr` **END   ** Fill the Username field
- `IihuMT` **START ** Fill the Email field
- `IihuMT` **REASON** Taking a snapshot to locate the Email field.


- `IihuMT` **REASON** Typing the email address into the Email field.


- `IihuMT` **REASON** The Email field has been successfully filled with the provided data.


- `IihuMT` **END   ** Fill the Email field
- `hQfvnh` **START ** Fill the Password field
- `hQfvnh` **REASON** Taking a snapshot to locate the Password field.


- `hQfvnh` **REASON** Filling the Password field with the provided value.


- `hQfvnh` **REASON** The Password field has been successfully filled, and the state is reflected in the snapshot. Stopping as per instructions.


- `hQfvnh` **END   ** Fill the Password field
- `3iF4Mi` **START ** Click the Sign up submit button
- `3iF4Mi` **REASON** Taking a snapshot to locate the 'Sign up' submit button.


- `3iF4Mi` **REASON** Clicking the 'Sign up' button to complete the registration process.


- `3iF4Mi` **REASON** Waiting for the registration process to complete and potentially redirect to the home page.


- `3iF4Mi` **REASON** The 'Sign up' button was clicked, and the registration was successful as evidenced by the redirection to the home page and the presence of the user profile link in the navigation bar.


- `3iF4Mi` **END   ** Click the Sign up submit button
- `xO3Hrl` **START ** Starting assertion verification
- `xO3Hrl` **REASON** Verifying assertion: The header no longer shows "Sign in" or "Sign up" links
- `xO3Hrl` **REASON** 

The header navigation links 'Home', 'New Article', 'Settings', and the user profile link are visible. The 'Sign in' and 'Sign up' links are not present in the header, which aligns with the assertion.

[Assertion ✅ passed]
- `xO3Hrl` **END   ** Successfully verified assertion
- `ECxWk8` **START ** Starting assertion verification
- `ECxWk8` **REASON** Verifying assertion: The header shows the new username linking to their profile
- `ECxWk8` **REASON** 

The header contains a link with the text 'user-7E1htT-K_' which is an image and text, and it links to '/profile/user-7E1htT-K_', indicating it's the user's profile. This matches the assertion that the header shows the new username linking to their profile.

[Assertion ✅ passed]
- `ECxWk8` **END   ** Successfully verified assertion
- `MYXfJc` **START ** Starting assertion verification
- `MYXfJc` **REASON** Verifying assertion: A "New Article" link is visible in the header, indicating an authenticated session
- `MYXfJc` **REASON** 

The accessibility snapshot shows a link with the text 'New Article' in the navigation section, which is consistent with an authenticated session.

[Assertion ✅ passed]
- `MYXfJc` **END   ** Successfully verified assertion

## Attachments

- trace -> `../../../test-results/02-signup-Sign-up-new-user-90818-ands-in-the-signed-in-state-chromium/trace.zip`
