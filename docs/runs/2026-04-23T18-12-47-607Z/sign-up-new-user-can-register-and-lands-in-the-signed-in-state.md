# new user can register and lands in the signed-in state

- **Status:** `passed`
- **Duration:** 51.1s
- **File:** `tests/02-signup.spec.ts`
- **Retries used:** 0

## Passmark log

- `8oMUMN` **START ** Navigate to http://localhost:4200
- `8oMUMN` **REASON** Taking a snapshot before starting the navigation step as per instructions.


- `8oMUMN` **REASON** Navigating to the specified URL as per the current step.


- `8oMUMN` **END   ** Navigate to http://localhost:4200
- `GV3Q51` **START ** Click the Sign up link in the header
- `GV3Q51` **REASON** Taking a snapshot to locate the 'Sign up' link in the header.


- `GV3Q51` **REASON** Clicking the 'Sign up' link to proceed with the registration flow.


- `GV3Q51` **REASON** Checking if the page has navigated to the registration form after clicking 'Sign up'.


- `GV3Q51` **END   ** Click the Sign up link in the header
- `VdlRdI` **START ** Fill the Username field
- `_2gR7i` **START ** Fill the Email field
- `ptJBYU` **START ** Fill the Password field
- `VgVsnQ` **START ** Click the Sign up submit button
- `VgVsnQ` **REASON** Taking a snapshot to locate the 'Sign up' submit button.


- `VgVsnQ` **REASON** Clicking the 'Sign up' button to complete the registration process.


- `VgVsnQ` **REASON** Waiting for the registration to process and the page to redirect.


- `VgVsnQ` **REASON** The 'Sign up' button was clicked, and the user has been successfully redirected to the home page, indicating a successful registration.


- `VgVsnQ` **END   ** Click the Sign up submit button
- `-StZru` **START ** Starting assertion verification
- `-StZru` **REASON** Verifying assertion: The header no longer shows "Sign in" or "Sign up" links
- `-StZru` **REASON** 

The header navigation shows links for 'Home', 'New Article', 'Settings', and a user profile, but not 'Sign in' or 'Sign up'. This indicates the user is logged in and these links are no longer present.

[Assertion ✅ passed]
- `-StZru` **END   ** Successfully verified assertion
- `c0mQtA` **START ** Starting assertion verification
- `c0mQtA` **REASON** Verifying assertion: The header shows the new username linking to their profile
- `c0mQtA` **REASON** 

The header contains a link with the text 'user-7buuTf1n_' which links to the user's profile, fulfilling the assertion.

[Assertion ✅ passed]
- `c0mQtA` **END   ** Successfully verified assertion
- `ixndEs` **START ** Starting assertion verification
- `ixndEs` **REASON** Verifying assertion: A "New Article" link is visible in the header, indicating an authenticated session
- `ixndEs` **REASON** 

The accessibility snapshot clearly shows a link with the text 'New Article' in the navigation section, which is consistent with an authenticated session.

[Assertion ✅ passed]
- `ixndEs` **END   ** Successfully verified assertion

## Attachments

- trace -> `../../../test-results/02-signup-Sign-up-new-user-90818-ands-in-the-signed-in-state-chromium/trace.zip`
