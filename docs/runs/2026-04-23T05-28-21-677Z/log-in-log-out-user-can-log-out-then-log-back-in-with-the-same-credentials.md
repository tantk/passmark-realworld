# user can log out, then log back in with the same credentials

- **Status:** `passed`
- **Duration:** 130.4s
- **File:** `tests/03-login-logout.spec.ts`
- **Retries used:** 0

## Passmark log

- `fQLo1e` **START ** Navigate to http://localhost:4200
- `fQLo1e` **REASON** Navigating to the application URL as specified in the current step.


- `fQLo1e` **END   ** Navigate to http://localhost:4200
- `hs6Ckr` **START ** Click the Sign up link in the header
- `hs6Ckr` **REASON** Taking a snapshot to locate the 'Sign up' link in the header.


- `hs6Ckr` **REASON** Clicking the 'Sign up' link to proceed to the registration page as per the current step.


- `hs6Ckr` **REASON** Checking if the page has transitioned to the registration page after clicking 'Sign up'.


- `hs6Ckr` **REASON** The current step 'Click the Sign up link in the header' has been successfully executed and verified.


- `hs6Ckr` **END   ** Click the Sign up link in the header
- `NSQ8TN` **START ** Fill the Username field
- `NSQ8TN` **REASON** Taking a snapshot to locate the Username field.


- `NSQ8TN` **REASON** Typing the username into the Username field as per the current step.


- `NSQ8TN` **END   ** Fill the Username field
- `yoJwh6` **START ** Fill the Email field
- `yoJwh6` **REASON** Taking a snapshot to identify the Email field and its current state.


- `yoJwh6` **REASON** Filling the Email field with the provided value.


- `yoJwh6` **END   ** Fill the Email field
- `bijoj6` **START ** Fill the Password field
- `bijoj6` **REASON** Taking a snapshot to locate the Password field.


- `bijoj6` **REASON** Filling the Password field with the provided value.


- `bijoj6` **END   ** Fill the Password field
- `yy8zLi` **START ** Click the Sign up submit button
- `yy8zLi` **REASON** Taking a snapshot to locate the 'Sign up' submit button.


- `yy8zLi` **REASON** Clicking the 'Sign up' button to complete the registration step.


- `yy8zLi` **REASON** Waiting for the registration to process and the page to transition.


- `yy8zLi` **REASON** The 'Sign up' button was clicked, and the page has successfully transitioned to the logged-in state (Home page with 'Settings' link visible), confirming the step is complete.


- `yy8zLi` **END   ** Click the Sign up submit button
- `rFHM7n` **START ** Click the Settings link in the header
- `rFHM7n` **REASON** Taking a snapshot to locate the 'Settings' link in the header.


- `rFHM7n` **REASON** Clicking the 'Settings' link as per the current step.


- `rFHM7n` **REASON** Waiting for the settings page to load.


- `rFHM7n` **REASON** The 'Settings' link was clicked, and the application has navigated to the settings page as verified by the URL and the 'Your Settings' heading. Current step completed.


- `rFHM7n` **END   ** Click the Settings link in the header
- `eFIlN4` **START ** Click the "Or click here to logout" button at the bottom of the settings page
- `eFIlN4` **REASON** Taking a snapshot to locate the "Or click here to logout" button on the settings page.


- `eFIlN4` **REASON** Clicking the logout button as per the current step.


- `eFIlN4` **REASON** Checking if the logout was successful. The previous snapshot still showed user links in the header.


- `eFIlN4` **END   ** Click the "Or click here to logout" button at the bottom of the settings page
- `c6MUIh` **START ** Click the Sign in link in the header
- `c6MUIh` **REASON** Taking a snapshot to locate the 'Sign in' link in the header.


- `c6MUIh` **REASON** Clicking the 'Sign in' link to proceed to the login page as per the current step.


- `c6MUIh` **REASON** Waiting for the login page to load after clicking the 'Sign in' link.


- `c6MUIh` **REASON** The 'Sign in' link was clicked and the login page has loaded successfully.


- `c6MUIh` **END   ** Click the Sign in link in the header
- `zoTvFU` **START ** Fill the Email field on the sign in form
- `zoTvFU` **REASON** Taking a snapshot to identify the Email field on the sign-in form.


- `zoTvFU` **REASON** Filling the Email field with the provided value.


- `zoTvFU` **REASON** The Email field has been successfully filled with the provided value, as verified by the snapshot.


- `zoTvFU` **END   ** Fill the Email field on the sign in form
- `7J5RGn` **START ** Fill the Password field on the sign in form
- `7J5RGn` **REASON** Taking a snapshot to locate the Password field on the sign-in form.


- `7J5RGn` **REASON** Filling the Password field with the provided value.


- `7J5RGn` **REASON** The Password field has been successfully filled, and the state is reflected in the snapshot.


- `7J5RGn` **END   ** Fill the Password field on the sign in form
- `TJqDbn` **START ** Click the Sign in submit button
- `TJqDbn` **REASON** Taking a snapshot to locate the 'Sign in' submit button.


- `TJqDbn` **REASON** Clicking the 'Sign in' button to complete the login process.


- `TJqDbn` **REASON** Waiting for the login process to complete and the page to navigate.


- `TJqDbn` **END   ** Click the Sign in submit button
- `6WU92T` **START ** Starting assertion verification
- `6WU92T` **REASON** Verifying assertion: After the final sign-in, the header shows the username link (signed-in state)
- `6WU92T` **REASON** 

The accessibility snapshot shows a link with the text 'user-FQDU5JZxl' which is present in the header, indicating a signed-in state.

[Assertion ✅ passed]
- `6WU92T` **END   ** Successfully verified assertion
- `vdvjWu` **START ** Starting assertion verification
- `vdvjWu` **REASON** Verifying assertion: The header no longer shows "Sign in" or "Sign up" links after logging back in
- `vdvjWu` **REASON** 

The accessibility snapshot shows that after logging in, the header now displays links for 'New Article', 'Settings', and the user's profile ('user-FQDU5JZxl'), instead of 'Sign in' and 'Sign up'. This confirms the assertion.

[Assertion ✅ passed]
- `vdvjWu` **END   ** Successfully verified assertion

## Attachments

- trace -> `../../../test-results/03-login-logout-Log-in-log-29ed9-n-with-the-same-credentials-chromium/trace.zip`
