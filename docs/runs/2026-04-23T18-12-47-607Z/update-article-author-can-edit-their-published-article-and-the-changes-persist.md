# author can edit their published article and the changes persist

- **Status:** `passed`
- **Duration:** 101.0s
- **File:** `tests/06-update-article.spec.ts`
- **Retries used:** 0

## Passmark log

- `9j78pv` **START ** Navigate to http://localhost:4200
- `9j78pv` **REASON** Taking a snapshot before navigating to the URL as per instructions.


- `9j78pv` **REASON** Navigating to the application URL as specified in the current step.


- `9j78pv` **END   ** Navigate to http://localhost:4200
- `FYoQaV` **START ** Click the Sign up link in the header
- `FYoQaV` **REASON** Taking a snapshot to locate the 'Sign up' link in the header.


- `FYoQaV` **REASON** Clicking the 'Sign up' link as per the current step.


- `FYoQaV` **REASON** Waiting for the registration page to load after clicking 'Sign up'.


- `FYoQaV` **REASON** The 'Sign up' link was clicked, and the registration page is now displayed. The current step is complete.


- `FYoQaV` **END   ** Click the Sign up link in the header
- `G2zKdg` **START ** Fill the Username field
- `2IXXtI` **START ** Fill the Email field
- `nYqLCi` **START ** Fill the Password field
- `httiC5` **START ** Click the Sign up submit button
- `httiC5` **REASON** Taking a snapshot to locate the 'Sign up submit' button.


- `httiC5` **REASON** Clicking the 'Sign up' button to complete the registration process as per the current step.


- `httiC5` **REASON** Waiting for the registration to process and the page to navigate.


- `httiC5` **REASON** The 'Sign up' button was clicked successfully, and the page has navigated to the home page where the 'New Article' link is visible, indicating a successful registration/login. The current step is complete.


- `httiC5` **END   ** Click the Sign up submit button
- `L5PqQ-` **START ** Click the New Article link in the header
- `L5PqQ-` **REASON** Taking a snapshot to locate the 'New Article' link in the header.


- `L5PqQ-` **REASON** Clicking the 'New Article' link as per the current step.


- `L5PqQ-` **REASON** Waiting for the editor page to load after clicking 'New Article'.


- `L5PqQ-` **REASON** The current step 'Click the New Article link in the header' has been successfully executed and verified.


- `L5PqQ-` **END   ** Click the New Article link in the header
- `Wz3W_S` **START ** Fill the Article Title field
- `ERsvqt` **START ** Fill the "What's this article about?" field
- `etmqbB` **START ** Fill the body field
- `wdRfhN` **START ** Click the Publish Article button
- `wdRfhN` **REASON** Taking a snapshot to locate the 'Publish Article' button.


- `wdRfhN` **REASON** Clicking the 'Publish Article' button to save the changes to the article.


- `wdRfhN` **REASON** Waiting for the article to be published and the page to redirect.


- `wdRfhN` **END   ** Click the Publish Article button
- `bXfFQc` **START ** Click the Edit Article button (pencil icon) on the article page
- `bXfFQc` **REASON** Taking a snapshot to locate the 'Edit Article' button (pencil icon) on the article page.


- `bXfFQc` **REASON** Clicking the 'Edit Article' button to proceed to the editor page as per the current step.


- `bXfFQc` **REASON** Waiting for the navigation to the editor page to complete after clicking 'Edit Article'.


- `bXfFQc` **END   ** Click the Edit Article button (pencil icon) on the article page
- `jmRitE` **START ** Clear the Article Title field and type the updated title
- `rXVh1k` **START ** Clear the body field and type the updated body
- `apWMmt` **START ** Click the Publish Article button to save the edits
- `apWMmt` **REASON** Taking a snapshot to locate the 'Publish Article' button.


- `apWMmt` **REASON** Clicking the 'Publish Article' button to save the edits as per the current step.


- `apWMmt` **REASON** Waiting for the article to be published and the page to redirect.


- `apWMmt` **REASON** The 'Publish Article' button was clicked, and the page redirected to the updated article, confirming the edits were saved.


- `apWMmt` **END   ** Click the Publish Article button to save the edits
- `0H2Wsv` **START ** Starting assertion verification
- `0H2Wsv` **REASON** Verifying assertion: The article heading now shows the updated title containing "Updated title" (not "Original title")
- `0H2Wsv` **REASON** 

The heading of the article clearly displays "Updated title kUzOaJOXt", which matches the assertion's requirement that the updated title contains "Updated title" and not "Original title".

[Assertion ✅ passed]
- `0H2Wsv` **END   ** Successfully verified assertion
- `z1jvgE` **START ** Starting assertion verification
- `z1jvgE` **REASON** Verifying assertion: The article body shows the updated body text, not the original body text
- `z1jvgE` **REASON** 

The assertion states that the article body shows the updated text. The snapshot shows the paragraph element with the text 'This body has been rewritten for the update-article test kUzOaJOXt.', which matches the updated body text. Therefore, the assertion passed.

[Assertion ...
- `z1jvgE` **END   ** Successfully verified assertion

## Attachments

- trace -> `../../../test-results/06-update-article-Update-a-e4509-cle-and-the-changes-persist-chromium/trace.zip`
