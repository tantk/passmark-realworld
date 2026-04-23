# signed-in user can publish a new article with title, body, and tags

- **Status:** `passed`
- **Duration:** 165.2s
- **File:** `tests/04-create-article.spec.ts`
- **Retries used:** 0

## Passmark log

- `VRkx1i` **START ** Navigate to http://localhost:4200
- `VRkx1i` **REASON** Taking a snapshot before starting the navigation step as per instructions.


- `VRkx1i` **REASON** Navigating to the application URL as specified in the current step.


- `VRkx1i` **END   ** Navigate to http://localhost:4200
- `FuChe4` **START ** Click the Sign up link in the header
- `FuChe4` **REASON** Taking a snapshot to locate the 'Sign up' link in the header.


- `FuChe4` **REASON** Clicking the 'Sign up' link to proceed to the registration page as per the current step.


- `FuChe4` **REASON** Waiting for the navigation to the Sign up page to complete.


- `FuChe4` **REASON** The 'Sign up' link was clicked and the application has navigated to the registration page, as confirmed by the URL and the 'Sign up' heading in the snapshot.


- `FuChe4` **END   ** Click the Sign up link in the header
- `DNsHqh` **START ** Fill the Username field
- `DNsHqh` **REASON** Taking a snapshot to identify the Username field and its current state.


- `DNsHqh` **REASON** Filling the Username field with the provided value.


- `DNsHqh` **REASON** The Username field has been successfully filled with 'author-ilxVDUzhP', as verified by the latest snapshot.


- `DNsHqh` **END   ** Fill the Username field
- `DeKTh_` **START ** Fill the Email field
- `DeKTh_` **REASON** Taking a snapshot to locate the Email field.


- `DeKTh_` **REASON** Typing the email address into the Email field as per the current step.


- `DeKTh_` **REASON** The Email field has been successfully filled with 'Marlene72@gmail.com', and the snapshot confirms the state.


- `DeKTh_` **END   ** Fill the Email field
- `-jXuzv` **START ** Fill the Password field
- `-jXuzv` **REASON** Taking a snapshot to locate the Password field.


- `-jXuzv` **REASON** Filling the Password field with the provided value.


- `-jXuzv` **END   ** Fill the Password field
- `o4DA8b` **START ** Click the Sign up submit button
- `o4DA8b` **REASON** Taking a snapshot to locate the 'Sign up' submit button.


- `o4DA8b` **REASON** Clicking the 'Sign up' button to complete the registration process.


- `o4DA8b` **REASON** Waiting for the registration to process and the page to transition.


- `o4DA8b` **REASON** The 'Sign up' submit button was clicked, and the page has successfully transitioned to the authenticated state (Home page with 'New Article' link visible). The current step is complete.


- `o4DA8b` **END   ** Click the Sign up submit button
- `bYW4f2` **START ** Click the New Article link in the header
- `bYW4f2` **REASON** Taking a snapshot to locate the 'New Article' link in the header.


- `bYW4f2` **REASON** Clicking the 'New Article' link to proceed to the article creation page.


- `bYW4f2` **REASON** Waiting for the editor page to load after clicking 'New Article'.


- `bYW4f2` **REASON** The 'New Article' link was clicked and the editor page has loaded successfully.


- `bYW4f2` **END   ** Click the New Article link in the header
- `wez1Ri` **START ** Fill the Article Title field
- `wez1Ri` **REASON** Taking a snapshot to identify the Article Title field and its current state.


- `wez1Ri` **REASON** Filling the Article Title field with the provided value.


- `wez1Ri` **REASON** The Article Title field has been successfully filled with the provided value, and the state is reflected in the snapshot.


- `wez1Ri` **END   ** Fill the Article Title field
- `sS-xRM` **START ** Fill the "What's this article about?" field
- `sS-xRM` **REASON** Taking a snapshot to locate the "What's this article about?" field.


- `sS-xRM` **REASON** Filling the "What's this article about?" field with the provided data.


- `sS-xRM` **REASON** The "What's this article about?" field has been successfully filled and verified in the snapshot. Current step is complete.


- `sS-xRM` **END   ** Fill the "What's this article about?" field
- `ewNz8x` **START ** Fill the body / "Write your article (in markdown)" field
- `ewNz8x` **REASON** Taking a snapshot to identify the "Write your article (in markdown)" field.


- `ewNz8x` **REASON** Filling the article body field with the provided markdown content.


- `ewNz8x` **END   ** Fill the body / "Write your article (in markdown)" field
- `sX_EJN` **START ** Add the tag "passmark" to the Enter tags field and press Enter
- `sX_EJN` **REASON** Taking a snapshot to locate the "Enter tags" field.


- `sX_EJN` **REASON** Typing "passmark" into the tags field.


- `sX_EJN` **REASON** undefined


- `sX_EJN` **REASON** Checking if the tag "passmark" was successfully added and where it is displayed.


- `sX_EJN` **REASON** undefined


- `sX_EJN` **REASON** The tag "passmark" was successfully added and is reflected in the snapshot.


- `sX_EJN` **END   ** Add the tag "passmark" to the Enter tags field and press Enter
- `XBdruB` **START ** Add the tag "regression" to the Enter tags field and press Enter
- `XBdruB` **REASON** Taking a snapshot to locate the 'Enter tags' field.


- `XBdruB` **REASON** Typing 'regression' into the tags field.


- `XBdruB` **REASON** undefined


- `XBdruB` **REASON** Verifying if the 'regression' tag was added.


- `XBdruB` **REASON** The tag 'regression' has been successfully added and is visible in the snapshot. Step complete.


- `XBdruB` **END   ** Add the tag "regression" to the Enter tags field and press Enter
- `5RJcLs` **START ** Click the Publish Article button
- `5RJcLs` **REASON** Taking a snapshot to locate the 'Publish Article' button.


- `5RJcLs` **REASON** Clicking the 'Publish Article' button to complete the article creation process.


- `5RJcLs` **REASON** Waiting for the article to be published and the page to redirect.


- `5RJcLs` **REASON** The 'Publish Article' button was clicked, and the page redirected to the newly created article, confirming success.


- `5RJcLs` **END   ** Click the Publish Article button
- `qijBiw` **START ** Starting assertion verification
- `qijBiw` **REASON** Verifying assertion: The article page heading displays the published title containing "Passmark drive-by"
- `qijBiw` **REASON** 

The heading on the article page clearly displays "Passmark drive-by ilxVDUzhP", which matches the assertion that the article title contains "Passmark drive-by".

[Assertion ✅ passed]
- `qijBiw` **END   ** Successfully verified assertion
- `TrFzzt` **START ** Starting assertion verification
- `TrFzzt` **REASON** Verifying assertion: The article body text is visible on the page
- `TrFzzt` **REASON** 

The article body text, which includes the paragraph 'This article exists purely to validate the create-article flow. Shortid: ilxVDUzhP.', is clearly visible on the page.

[Assertion ✅ passed]
- `TrFzzt` **END   ** Successfully verified assertion
- `AQ9VW5` **START ** Starting assertion verification
- `AQ9VW5` **REASON** Verifying assertion: Both tags "passmark" and "regression" are visible on the article page
- `AQ9VW5` **REASON** 

The screenshot clearly shows two tags, 'passmark' and 'regression', displayed below the article description. The accessibility snapshot also confirms the presence of these tags within a list element.

[Assertion ✅ passed]
- `AQ9VW5` **END   ** Successfully verified assertion
- `En2Bnk` **START ** Starting assertion verification
- `En2Bnk` **REASON** Verifying assertion: The author name "author-" (prefix) is shown as the article author
- `En2Bnk` **REASON** 

The author name 'author-ilxVDUzhP' is clearly displayed as the article author in multiple locations on the page, fulfilling the assertion.

[Assertion ✅ passed]
- `En2Bnk` **END   ** Successfully verified assertion

## Attachments

- trace -> `../../../test-results/04-create-article-Create-a-c7e96-le-with-title-body-and-tags-chromium/trace.zip`
