# author can delete their article and it disappears from their profile feed

- **Status:** `passed`
- **Duration:** 102.5s
- **File:** `tests/07-delete-article.spec.ts`
- **Retries used:** 0

## Passmark log

- `4--aKC` **START ** Navigate to http://localhost:4200
- `4--aKC` **REASON** Navigating to the application URL as specified in the current step.


- `4--aKC` **END   ** Navigate to http://localhost:4200
- `ws9mg2` **START ** Click the Sign up link in the header
- `ws9mg2` **REASON** Taking a snapshot to locate the 'Sign up' link in the header.


- `ws9mg2` **REASON** Clicking the 'Sign up' link as per the current step.


- `ws9mg2` **REASON** Taking a fresh snapshot to verify if the page has navigated to the registration form.


- `ws9mg2` **END   ** Click the Sign up link in the header
- `gPJmOJ` **START ** Fill the Username field
- `7x79MP` **START ** Fill the Email field
- `ZnYbIz` **START ** Fill the Password field
- `DxUocm` **START ** Click the Sign up submit button
- `DxUocm` **REASON** Taking a snapshot to locate the 'Sign up' submit button.


- `DxUocm` **REASON** Clicking the 'Sign up' button to complete the registration process as per the current step.


- `DxUocm` **REASON** Waiting for the registration to complete and the page to navigate.


- `DxUocm` **REASON** The 'Sign up' button was clicked successfully, and the page has navigated to the home page where the 'New Article' link is visible, indicating a successful registration and login. The current step is complete.


- `DxUocm` **END   ** Click the Sign up submit button
- `7t6MT7` **START ** Click the New Article link in the header
- `7t6MT7` **REASON** Taking a snapshot to locate the 'New Article' link in the header.


- `7t6MT7` **REASON** Clicking the 'New Article' link as per the current step.


- `7t6MT7` **REASON** Waiting for the editor page to load after clicking 'New Article'.


- `7t6MT7` **REASON** The 'New Article' link was clicked successfully, and the page has navigated to the editor view as expected.


- `7t6MT7` **END   ** Click the New Article link in the header
- `CNUf40` **START ** Fill the Article Title field
- `e_hxkJ` **START ** Fill the "What's this article about?" field
- `0ghHyH` **START ** Fill the body field
- `Mgm5Ec` **START ** Click the Publish Article button
- `Mgm5Ec` **REASON** Taking a snapshot to locate the 'Publish Article' button.


- `Mgm5Ec` **REASON** Clicking the 'Publish Article' button as per the current step.


- `Mgm5Ec` **REASON** Waiting for the article to be published and the page to transition.


- `Mgm5Ec` **END   ** Click the Publish Article button
- `F7w-HW` **START ** Click the Delete Article button on the article page
- `F7w-HW` **REASON** Taking a snapshot to locate the 'Delete Article' button.


- `F7w-HW` **REASON** Clicking the 'Delete Article' button as per the current step.


- `F7w-HW` **REASON** Waiting for the deletion to process and redirect.


- `F7w-HW` **REASON** The 'Delete Article' button was clicked, and the page redirected to the home page, indicating success. Stopping as per instructions.


- `F7w-HW` **END   ** Click the Delete Article button on the article page
- `lxZugu` **START ** Click the username link in the header to open the profile page
- `lxZugu` **REASON** Taking a snapshot to locate the username link in the header.


- `lxZugu` **REASON** Clicking the username link to navigate to the profile page as per the current step.


- `lxZugu` **REASON** Waiting for the profile page to load after clicking the username link.


- `lxZugu` **REASON** The username link was clicked and the profile page has successfully loaded, as verified by the URL and page content.


- `lxZugu` **END   ** Click the username link in the header to open the profile page
- `CjPbqt` **START ** Starting assertion verification
- `CjPbqt` **REASON** Verifying assertion: No article card with the title "Doomed article" is visible on the profile page — the "My Articles" tab shows no such article or shows the "No articles are here... yet." empty state
- `CjPbqt` **REASON** 

The assertion states that no article card with the title "Doomed article" is visible on the profile page. The provided snapshot and screenshot clearly show the text "No articles are here... yet." under the "My Posts" tab, indicating that there are no articles displayed. Ther...
- `CjPbqt` **END   ** Successfully verified assertion
- `eguiFZ` **START ** Starting assertion verification
- `eguiFZ` **REASON** Verifying assertion: The current URL is no longer the deleted article's page
- `eguiFZ` **REASON** 

The current page displays the profile of 'deleter-Nsi1Mp0xe' and indicates 'No articles are here... yet.' This implies that the user is on a profile page and not on a specific article page, let alone a deleted one. The URL in the snapshot also confirms this, showing '/profil...
- `eguiFZ` **END   ** Successfully verified assertion

## Attachments

- trace -> `../../../test-results/07-delete-article-Delete-a-2a2e8-ars-from-their-profile-feed-chromium/trace.zip`
