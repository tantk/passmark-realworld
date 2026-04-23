# user can log out, then log back in with the same credentials

- **Status:** `passed`
- **Duration:** 65.0s
- **File:** `tests/03-login-logout.spec.ts`
- **Retries used:** 0

## Passmark log

- `Olcoj-` **START ** Navigate to http://localhost:4200
- `Olcoj-` **REASON** Taking a fresh snapshot before starting the step as per instructions.


- `Olcoj-` **REASON** Navigating to the application URL as specified in the current step.


- `Olcoj-` **END   ** Navigate to http://localhost:4200
- `mIo6Jc` **START ** Click the Sign up link in the header
- `4QwPQE` **START ** Fill the Username field
- `UfHkKX` **START ** Fill the Email field
- `JJCouh` **START ** Fill the Password field
- `udMzOQ` **START ** Click the Sign up submit button
- `udMzOQ` **REASON** Taking a snapshot to locate the 'Sign up' submit button.


- `udMzOQ` **REASON** Clicking the 'Sign up' button to complete the registration step.


- `udMzOQ` **REASON** Waiting for the registration to process and the page to redirect.


- `udMzOQ` **REASON** The 'Sign up' button was clicked, and the page has successfully redirected to the home page with the user logged in (as evidenced by the 'Settings' link and username in the header). The current step is complete.


- `udMzOQ` **END   ** Click the Sign up submit button
- `J7atI5` **START ** Click the Settings link in the header
- `qhv2SY` **START ** Click the "Or click here to logout" button at the bottom of the settings page
- `x-PhTQ` **START ** Click the Sign in link in the header
- `x-PhTQ` **REASON** Taking a snapshot to locate the 'Sign in' link in the header.


- `x-PhTQ` **REASON** Clicking the 'Sign in' link to proceed to the login page as per the current step.


- `x-PhTQ` **REASON** Taking a fresh snapshot to verify if the navigation to the sign-in page occurred.


- `x-PhTQ` **END   ** Click the Sign in link in the header
- `Cf0SAh` **START ** Fill the Email field on the sign in form
- `r1QYJn` **START ** Fill the Password field on the sign in form
- `IkgYLW` **START ** Click the Sign in submit button
- `IkgYLW` **REASON** Taking a snapshot to locate the 'Sign in' submit button.


- `IkgYLW` **REASON** Clicking the 'Sign in' button to complete the login process.


- `IkgYLW` **REASON** Waiting for the login process to complete and the page to navigate.


- `IkgYLW` **REASON** The 'Sign in' button was clicked, and the page successfully navigated to the home page in a logged-in state, completing the step.


- `IkgYLW` **END   ** Click the Sign in submit button
- `1Jq-I1` **START ** Starting assertion verification
- `1Jq-I1` **REASON** Verifying assertion: After the final sign-in, the header shows the username link (signed-in state)
- `1Jq-I1` **REASON** 

The header contains a link to 'user-9prpwu4W7', which indicates the user is signed in and this is their username link.

[Assertion ✅ passed]
- `1Jq-I1` **END   ** Successfully verified assertion
- `CnUBtG` **START ** Starting assertion verification
- `CnUBtG` **REASON** Verifying assertion: The header no longer shows "Sign in" or "Sign up" links after logging back in
- `CnUBtG` **REASON** 

The accessibility snapshot shows that after logging in, the header contains links for 'Home', 'New Article', 'Settings', and the user's profile ('user-9prpwu4W7'). The 'Sign in' and 'Sign up' links are not present, which aligns with the assertion that they are no longer visi...
- `CnUBtG` **END   ** Successfully verified assertion

## Attachments

- trace -> `../../../test-results/03-login-logout-Log-in-log-29ed9-n-with-the-same-credentials-chromium/trace.zip`
