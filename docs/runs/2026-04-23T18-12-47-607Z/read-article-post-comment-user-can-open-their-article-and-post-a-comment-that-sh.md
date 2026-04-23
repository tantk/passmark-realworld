# user can open their article and post a comment that shows under the article

- **Status:** `passed`
- **Duration:** 91.8s
- **File:** `tests/05-read-article-comments.spec.ts`
- **Retries used:** 0

## Passmark log

- `AQ54-R` **START ** Navigate to http://localhost:4200
- `AQ54-R` **REASON** Taking a snapshot before starting the navigation step to check the initial state.


- `AQ54-R` **REASON** Navigating to the application URL as specified in the current step.


- `AQ54-R` **END   ** Navigate to http://localhost:4200
- `DaRO7z` **START ** Click the Sign up link in the header
- `DaRO7z` **REASON** Taking a snapshot to locate the 'Sign up' link in the header.


- `DaRO7z` **REASON** Clicking the 'Sign up' link as per the current step.


- `DaRO7z` **REASON** Waiting for the registration page to load after clicking 'Sign up'.


- `DaRO7z` **END   ** Click the Sign up link in the header
- `Rc5Twm` **START ** Fill the Username field
- `nqwlPv` **START ** Fill the Email field
- `m61i-w` **START ** Fill the Password field
- `jTqN_U` **START ** Click the Sign up submit button
- `jTqN_U` **REASON** Taking a snapshot to locate the 'Sign up' submit button.


- `jTqN_U` **REASON** Clicking the 'Sign up' button to complete the registration process.


- `jTqN_U` **REASON** Waiting for the registration to process and the page to redirect.


- `jTqN_U` **REASON** The 'Sign up' button was clicked, and the page successfully redirected to the home page, showing the 'New Article' link as expected. The step is complete.


- `jTqN_U` **END   ** Click the Sign up submit button
- `Gf2RRm` **START ** Click the New Article link in the header
- `Gf2RRm` **REASON** Taking a snapshot to locate the 'New Article' link in the header.


- `Gf2RRm` **REASON** Clicking the 'New Article' link as per the current step.


- `Gf2RRm` **REASON** Waiting for the editor page to load after clicking 'New Article'.


- `Gf2RRm` **REASON** The 'New Article' link was clicked successfully, and the page has navigated to the editor, as evidenced by the presence of the 'Article Title' textbox and the updated URL.


- `Gf2RRm` **END   ** Click the New Article link in the header
- `H0Ixwf` **START ** Fill the Article Title field
- `SaNXjU` **START ** Fill the "What's this article about?" field
- `YF8ROv` **START ** Fill the body field
- `mqS09X` **START ** Click the Publish Article button
- `mqS09X` **REASON** Taking a snapshot to locate the 'Publish Article' button.


- `mqS09X` **REASON** Clicking the 'Publish Article' button to submit the article.


- `mqS09X` **REASON** Waiting for the article to be published and the page to navigate.


- `mqS09X` **END   ** Click the Publish Article button
- `UgUzfH` **START ** Fill the Write a comment textarea
- `ZeleVF` **START ** Click the Post Comment button
- `ZeleVF` **REASON** Taking a snapshot to locate the 'Post Comment' button.


- `ZeleVF` **REASON** Clicking the 'Post Comment' button to submit the comment.


- `ZeleVF` **REASON** Waiting for the comment to be posted and the UI to update.


- `ZeleVF` **REASON** The 'Post Comment' button was clicked and the comment is now visible on the page, indicating the action was successful.


- `ZeleVF` **END   ** Click the Post Comment button
- `Ju1-97` **START ** Starting assertion verification
- `Ju1-97` **REASON** Verifying assertion: The full article body text is displayed above the comments section
- `Ju1-97` **REASON** 

The screenshot clearly shows the article body text 'Full article body written for the read-article + comment regression test.' positioned above the comment input field and the 'Post Comment' button, fulfilling the assertion's condition.

[Assertion ✅ passed]
- `Ju1-97` **END   ** Successfully verified assertion
- `YXQCq6` **START ** Starting assertion verification
- `YXQCq6` **REASON** Verifying assertion: A comment containing "Drive-by comment" is visible in the comments list
- `YXQCq6` **REASON** 

The accessibility snapshot clearly shows a paragraph with the text "Drive-by comment sTON8jOky — regression test." which matches the assertion.

[Assertion ✅ passed]
- `YXQCq6` **END   ** Successfully verified assertion
- `L-Lo1G` **START ** Starting assertion verification
- `L-Lo1G` **REASON** Verifying assertion: The comment shows the author name "reader-" (prefix) as the commenter
- `L-Lo1G` **REASON** 

The assertion states that the comment shows the author name 'reader-' as the commenter. The accessibility snapshot shows a comment with the author name 'reader-sTON8jOky', which starts with the prefix 'reader-'. Therefore, the assertion passes.

[Assertion ✅ passed]
- `L-Lo1G` **END   ** Successfully verified assertion

## Attachments

- trace -> `../../../test-results/05-read-article-comments-R-06b5f-hat-shows-under-the-article-chromium/trace.zip`
