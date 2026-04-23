# signed-in user can publish a new article with title, body, and tags

- **Status:** `passed`
- **Duration:** 114.7s
- **File:** `tests/04-create-article.spec.ts`
- **Retries used:** 0

## Passmark log

- `exhHvT` **START ** Navigate to http://localhost:4200
- `exhHvT` **REASON** Taking a snapshot before starting the navigation step as per instructions.


- `exhHvT` **REASON** Navigating to the application URL as specified in the current step.


- `exhHvT` **END   ** Navigate to http://localhost:4200
- `XqsVd_` **START ** Click the Sign up link in the header
- `XqsVd_` **REASON** Taking a snapshot to locate the 'Sign up' link in the header.


- `XqsVd_` **REASON** Clicking the 'Sign up' link to proceed to the registration page as per the current step.


- `XqsVd_` **REASON** Waiting for the registration page to load after clicking 'Sign up'.


- `XqsVd_` **REASON** The 'Sign up' link was clicked and the registration page has loaded successfully. The current step is complete.


- `XqsVd_` **END   ** Click the Sign up link in the header
- `t6dc-V` **START ** Fill the Username field
- `fogKop` **START ** Fill the Email field
- `EVsGMY` **START ** Fill the Password field
- `cFhpH4` **START ** Click the Sign up submit button
- `cFhpH4` **REASON** Taking a snapshot to locate the 'Sign up' submit button.


- `cFhpH4` **REASON** Clicking the 'Sign up' button to complete the registration process.


- `cFhpH4` **REASON** Waiting for the registration to process and the page to transition.


- `cFhpH4` **REASON** The 'Sign up' button was clicked successfully, and the user is now authenticated as evidenced by the 'New Article' link and username appearing in the header. The current step is complete.


- `cFhpH4` **END   ** Click the Sign up submit button
- `iFaMvT` **START ** Click the New Article link in the header
- `iFaMvT` **REASON** Taking a snapshot to locate the 'New Article' link in the header.


- `iFaMvT` **REASON** Clicking the 'New Article' link as per the current step.


- `iFaMvT` **REASON** Checking if the page has navigated to the editor after clicking 'New Article'.


- `iFaMvT` **REASON** The 'New Article' link was clicked successfully, and the page has navigated to the editor as expected.


- `iFaMvT` **END   ** Click the New Article link in the header
- `rlUWrq` **START ** Fill the Article Title field
- `lS-s5t` **START ** Fill the "What's this article about?" field
- `bJ4eX0` **START ** Fill the body / "Write your article (in markdown)" field
- `oPhOqV` **START ** Add the tag "passmark" to the Enter tags field and press Enter
- `oPhOqV` **REASON** Taking a snapshot to locate the "Enter tags" field.


- `oPhOqV` **REASON** Typing "passmark" into the tags field.


- `oPhOqV` **REASON** undefined


- `oPhOqV` **REASON** Verifying if the tag "passmark" was added to the list.


- `oPhOqV` **REASON** undefined


- `oPhOqV` **REASON** The tag "passmark" has been successfully added to the article.


- `oPhOqV` **END   ** Add the tag "passmark" to the Enter tags field and press Enter
- `atWYri` **START ** Add the tag "regression" to the Enter tags field and press Enter
- `atWYri` **REASON** Taking a snapshot to locate the 'Enter tags' field.


- `atWYri` **REASON** Typing 'regression' into the tags field as per the current step.


- `atWYri` **REASON** undefined


- `atWYri` **REASON** The tag 'regression' has been successfully added to the article tags list. The current step is complete.


- `atWYri` **END   ** Add the tag "regression" to the Enter tags field and press Enter
- `YJ2K2b` **START ** Click the Publish Article button
- `YJ2K2b` **REASON** Taking a snapshot to locate the 'Publish Article' button.


- `YJ2K2b` **REASON** Clicking the 'Publish Article' button to complete the article creation process.


- `YJ2K2b` **REASON** Waiting for the article to be published and the page to redirect.


- `YJ2K2b` **REASON** The 'Publish Article' button was clicked, and the application redirected to the newly created article page, confirming success.


- `YJ2K2b` **END   ** Click the Publish Article button
- `XEirfC` **START ** Starting assertion verification
- `XEirfC` **REASON** Verifying assertion: The article page heading displays the published title containing "Passmark drive-by"
- `XEirfC` **REASON** 

The heading element with ref=e277 clearly displays the text 'Passmark drive-by I04zfAaaU', which matches the assertion that the article page heading displays the published title containing 'Passmark drive-by'.

[Assertion ✅ passed]
- `XEirfC` **END   ** Successfully verified assertion
- `FI87ro` **START ** Starting assertion verification
- `FI87ro` **REASON** Verifying assertion: The article body text is visible on the page
- `FI87ro` **REASON** 

The article body text 'This article exists purely to validate the create-article flow. Shortid: I04zfAaaU.' is clearly visible on the page, both in the screenshot and the accessibility snapshot.

[Assertion ✅ passed]
- `FI87ro` **END   ** Successfully verified assertion
- `UA5-Fl` **START ** Starting assertion verification
- `UA5-Fl` **REASON** Verifying assertion: Both tags "passmark" and "regression" are visible on the article page
- `UA5-Fl` **REASON** 

The accessibility snapshot clearly shows two list items with the text 'passmark' and 'regression' within the article content, indicating they are visible on the page.

[Assertion ✅ passed]
- `UA5-Fl` **END   ** Successfully verified assertion
- `p9I5al` **START ** Starting assertion verification
- `p9I5al` **REASON** Verifying assertion: The author name "author-" (prefix) is shown as the article author
- `p9I5al` **REASON** 

The accessibility snapshot clearly shows the author's name 'author-I04zfAaaU' displayed as the article author in multiple locations on the page, fulfilling the assertion's requirement.

[Assertion ✅ passed]
- `p9I5al` **END   ** Successfully verified assertion

## Attachments

- trace -> `../../../test-results/04-create-article-Create-a-c7e96-le-with-title-body-and-tags-chromium/trace.zip`
