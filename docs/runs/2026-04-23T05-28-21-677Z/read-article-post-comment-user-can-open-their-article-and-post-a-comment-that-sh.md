# user can open their article and post a comment that shows under the article

- **Status:** `passed`
- **Duration:** 148.1s
- **File:** `tests/05-read-article-comments.spec.ts`
- **Retries used:** 0

## Passmark log

- `x-CeqG` **START ** Navigate to http://localhost:4200
- `x-CeqG` **REASON** Taking a snapshot before starting the navigation step to check the initial state.


- `x-CeqG` **REASON** Navigating to the application URL as specified in the current step.


- `x-CeqG` **END   ** Navigate to http://localhost:4200
- `z4DNSH` **START ** Click the Sign up link in the header
- `z4DNSH` **REASON** Taking a snapshot to locate the 'Sign up' link in the header.


- `z4DNSH` **REASON** Clicking the 'Sign up' link to proceed to the registration page as per the current step.


- `z4DNSH` **REASON** Waiting for the registration page to load after clicking 'Sign up'.


- `z4DNSH` **REASON** The 'Sign up' link was clicked and the registration page has loaded successfully. The current step is complete.


- `z4DNSH` **END   ** Click the Sign up link in the header
- `pFuXTP` **START ** Fill the Username field
- `pFuXTP` **REASON** Taking a snapshot to locate the Username field.


- `pFuXTP` **REASON** Filling the Username field with the provided value.


- `pFuXTP` **REASON** The Username field has been successfully filled with 'reader-UCBh5Pp7L' as verified by the snapshot.


- `pFuXTP` **END   ** Fill the Username field
- `RBS3l5` **START ** Fill the Email field
- `RBS3l5` **REASON** Taking a snapshot to locate the Email field.


- `RBS3l5` **REASON** Filling the Email field with the provided data.


- `RBS3l5` **END   ** Fill the Email field
- `XW7KJm` **START ** Fill the Password field
- `XW7KJm` **REASON** Taking a snapshot to locate the password field.


- `XW7KJm` **REASON** Typing the password into the password field.


- `XW7KJm` **REASON** The password field has been filled successfully, and the state is reflected in the snapshot.


- `XW7KJm` **END   ** Fill the Password field
- `iVHdSV` **START ** Click the Sign up submit button
- `iVHdSV` **REASON** Taking a snapshot to locate the 'Sign up' submit button.


- `iVHdSV` **REASON** Clicking the 'Sign up' button to complete the registration process.


- `iVHdSV` **REASON** Waiting for the registration to process and the page to transition.


- `iVHdSV` **REASON** The 'Sign up' button was clicked, and the page has successfully transitioned to the home page with the user logged in, as evidenced by the 'New Article' link and username in the header.


- `iVHdSV` **END   ** Click the Sign up submit button
- `puviuH` **START ** Click the New Article link in the header
- `puviuH` **REASON** Taking a snapshot to locate the 'New Article' link in the header.


- `puviuH` **REASON** Clicking the 'New Article' link as per the current step.


- `puviuH` **REASON** Waiting for the editor page to load after clicking 'New Article'.


- `puviuH` **END   ** Click the New Article link in the header
- `mi6eJR` **START ** Fill the Article Title field
- `mi6eJR` **REASON** Taking a snapshot to identify the "Article Title" field and its current state.


- `mi6eJR` **REASON** Filling the Article Title field with the provided value.


- `mi6eJR` **REASON** The Article Title field has been successfully filled with the provided value, as verified by the latest snapshot.


- `mi6eJR` **END   ** Fill the Article Title field
- `ZnUFLg` **START ** Fill the "What's this article about?" field
- `ZnUFLg` **REASON** Taking a snapshot to locate the "What's this article about?" field.


- `ZnUFLg` **REASON** Filling the "What's this article about?" field with the provided synopsis.


- `ZnUFLg` **END   ** Fill the "What's this article about?" field
- `d-2rdN` **START ** Fill the body field
- `d-2rdN` **REASON** Taking a snapshot to identify the body field for the article.


- `d-2rdN` **REASON** Filling the article body field with the provided text.


- `d-2rdN` **END   ** Fill the body field
- `RA4C6k` **START ** Click the Publish Article button
- `RA4C6k` **REASON** Taking a snapshot to locate the 'Publish Article' button.


- `RA4C6k` **REASON** Clicking the 'Publish Article' button to complete the current step.


- `RA4C6k` **REASON** Waiting for the article to be published and the page to transition.


- `RA4C6k` **REASON** The 'Publish Article' button was clicked, and the page has successfully transitioned to the article view where the 'Write a comment' textarea is visible, confirming the action was successful.


- `RA4C6k` **END   ** Click the Publish Article button
- `mzMF5o` **START ** Fill the Write a comment textarea
- `mzMF5o` **REASON** Taking a snapshot to locate the "Write a comment" textarea.


- `mzMF5o` **REASON** Typing the comment into the textarea as per the current step.


- `mzMF5o` **REASON** The "Write a comment" textarea has been successfully filled with the provided data, as reflected in the latest snapshot.


- `mzMF5o` **END   ** Fill the Write a comment textarea
- `1u5pxh` **START ** Click the Post Comment button
- `1u5pxh` **REASON** Taking a snapshot to locate the 'Post Comment' button.


- `1u5pxh` **REASON** Clicking the 'Post Comment' button to submit the comment.


- `1u5pxh` **REASON** Waiting for the comment to be posted and the UI to update.


- `1u5pxh` **END   ** Click the Post Comment button
- `fSOBGq` **START ** Starting assertion verification
- `fSOBGq` **REASON** Verifying assertion: The full article body text is displayed above the comments section
- `fSOBGq` **REASON** 

The screenshot clearly shows the article body text 'Full article body written for the read-article + comment regression test.' is displayed above the comments section, which includes a textbox for writing a comment and a 'Post Comment' button.

[Assertion ✅ passed]
- `fSOBGq` **END   ** Successfully verified assertion
- `abNNBt` **START ** Starting assertion verification
- `abNNBt` **REASON** Verifying assertion: A comment containing "Drive-by comment" is visible in the comments list
- `abNNBt` **REASON** 

The accessibility snapshot shows a paragraph with the text 'Drive-by comment UCBh5Pp7L — regression test.' which matches the assertion.

[Assertion ✅ passed]
- `abNNBt` **END   ** Successfully verified assertion
- `kJq85g` **START ** Starting assertion verification
- `kJq85g` **REASON** Verifying assertion: The comment shows the author name "reader-" (prefix) as the commenter
- `kJq85g` **REASON** 

The assertion states that the comment shows the author name 'reader-' as the commenter. The snapshot shows a comment with the author name 'reader-UCBh5Pp7L', which starts with 'reader-'. Therefore, the assertion passes.

[Assertion ✅ passed]
- `kJq85g` **END   ** Successfully verified assertion

## Attachments

- trace -> `../../../test-results/05-read-article-comments-R-06b5f-hat-shows-under-the-article-chromium/trace.zip`
