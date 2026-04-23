# author can delete their article and it disappears from their profile feed

- **Status:** `passed`
- **Duration:** 146.1s
- **File:** `tests/07-delete-article.spec.ts`
- **Retries used:** 0

## Passmark log

- `qYFvcJ` **START ** Navigate to http://localhost:4200
- `qYFvcJ` **REASON** Taking a snapshot before starting the navigation step as per instructions.


- `qYFvcJ` **REASON** Navigating to the URL specified in the current step.


- `qYFvcJ` **END   ** Navigate to http://localhost:4200
- `Gw0V2Z` **START ** Click the Sign up link in the header
- `Gw0V2Z` **REASON** Taking a snapshot to locate the 'Sign up' link in the header.


- `Gw0V2Z` **REASON** Clicking the 'Sign up' link as per the current step.


- `Gw0V2Z` **REASON** Waiting for the navigation to the Sign up page to complete.


- `Gw0V2Z` **END   ** Click the Sign up link in the header
- `gGiCbn` **START ** Fill the Username field
- `gGiCbn` **REASON** Taking a snapshot to locate the Username field.


- `gGiCbn` **REASON** Filling the Username field with the provided value.


- `gGiCbn` **REASON** The Username field has been successfully filled with the provided value, as verified by the latest snapshot.


- `gGiCbn` **END   ** Fill the Username field
- `U5OXra` **START ** Fill the Email field
- `U5OXra` **REASON** Taking a snapshot to locate the Email field.


- `U5OXra` **REASON** Filling the Email field with the provided data.


- `U5OXra` **END   ** Fill the Email field
- `x8Q2-F` **START ** Fill the Password field
- `x8Q2-F` **REASON** Taking a snapshot to locate the Password field.


- `x8Q2-F` **REASON** Filling the Password field with the provided value.


- `x8Q2-F` **END   ** Fill the Password field
- `PSeqIT` **START ** Click the Sign up submit button
- `PSeqIT` **REASON** Taking a snapshot to locate the 'Sign up submit button'.


- `PSeqIT` **REASON** Clicking the 'Sign up' button to complete the registration process.


- `PSeqIT` **REASON** Waiting for the registration to process and the page to transition.


- `PSeqIT` **REASON** The 'Sign up submit button' was clicked, and the page has successfully transitioned to the home page where the 'New Article' link is visible, indicating a successful registration and login.


- `PSeqIT` **END   ** Click the Sign up submit button
- `aB0G1r` **START ** Click the New Article link in the header
- `aB0G1r` **REASON** Taking a snapshot to locate the 'New Article' link in the header.


- `aB0G1r` **REASON** Clicking the 'New Article' link as per the current step.


- `aB0G1r` **REASON** Waiting for the editor page to load after clicking 'New Article'.


- `aB0G1r` **REASON** The 'New Article' link was clicked successfully, and the page has navigated to the editor view as expected.


- `aB0G1r` **END   ** Click the New Article link in the header
- `kq8lRY` **START ** Fill the Article Title field
- `kq8lRY` **REASON** Taking a snapshot to identify the "Article Title" field and its current state.


- `kq8lRY` **REASON** Filling the Article Title field with the provided data.


- `kq8lRY` **END   ** Fill the Article Title field
- `6QBLFI` **START ** Fill the "What's this article about?" field
- `6QBLFI` **REASON** Taking a snapshot to identify the "What's this article about?" field.


- `6QBLFI` **REASON** Filling the "What's this article about?" field as per the current step.


- `6QBLFI` **REASON** The current step "Fill the 'What's this article about?' field" has been successfully executed and verified in the snapshot.


- `6QBLFI` **END   ** Fill the "What's this article about?" field
- `tdn758` **START ** Fill the body field
- `tdn758` **REASON** Taking a snapshot to identify the body field and its current state.


- `tdn758` **REASON** Filling the body field with the provided text.


- `tdn758` **REASON** The body field has been successfully filled with the provided text, and the state is reflected in the snapshot. Stopping as per instructions.


- `tdn758` **END   ** Fill the body field
- `ZNdoiQ` **START ** Click the Publish Article button
- `ZNdoiQ` **REASON** Taking a snapshot to locate the 'Publish Article' button.


- `ZNdoiQ` **REASON** Clicking the 'Publish Article' button as per the current step.


- `ZNdoiQ` **REASON** Waiting for the article to be published and the page to transition to the article view.


- `ZNdoiQ` **END   ** Click the Publish Article button
- `FNyoPN` **START ** Click the Delete Article button on the article page
- `FNyoPN` **REASON** Taking a snapshot to locate the 'Delete Article' button on the article page.


- `FNyoPN` **REASON** Clicking the 'Delete Article' button to delete the current article as per the step description.


- `FNyoPN` **REASON** Waiting for the deletion to process and the page to redirect.


- `FNyoPN` **REASON** The 'Delete Article' button was clicked, and the page redirected to the home page, confirming the article was deleted. The current step is complete.


- `FNyoPN` **END   ** Click the Delete Article button on the article page
- `sXTOQK` **START ** Click the username link in the header to open the profile page
- `sXTOQK` **REASON** Taking a snapshot to locate the username link in the header.


- `sXTOQK` **REASON** Clicking the username link to navigate to the profile page as per the current step.


- `sXTOQK` **REASON** Waiting for the profile page to load after clicking the username link.


- `sXTOQK` **REASON** The username link was clicked and the profile page has loaded successfully.


- `sXTOQK` **END   ** Click the username link in the header to open the profile page
- `xaMilM` **START ** Starting assertion verification
- `xaMilM` **REASON** Verifying assertion: No article card with the title "Doomed article" is visible on the profile page — the "My Articles" tab shows no such article or shows the "No articles are here... yet." empty state
- `xaMilM` **REASON** 

The screenshot and accessibility snapshot both indicate that there are no articles displayed on the profile page. The text 'No articles are here... yet.' is visible, confirming the absence of any article cards, including one titled 'Doomed article'.

[Assertion ✅ passed]
- `xaMilM` **END   ** Successfully verified assertion
- `O-hSG8` **START ** Starting assertion verification
- `O-hSG8` **REASON** Verifying assertion: The current URL is no longer the deleted article's page
- `O-hSG8` **REASON** 

The current page displays the profile of 'deleter-JS53njGfU' and indicates 'No articles are here... yet.' This implies that any previously viewed article, if it belonged to this user, is no longer present or accessible on this profile page. Therefore, the current URL is not ...
- `O-hSG8` **END   ** Successfully verified assertion

## Attachments

- trace -> `../../../test-results/07-delete-article-Delete-a-2a2e8-ars-from-their-profile-feed-chromium/trace.zip`
