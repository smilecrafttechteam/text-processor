# Text Tools

Text Tools is a frontend-only web application for converting, formatting, cleaning, and encoding text directly in the browser.

## Features

- Large input and output text areas
- Case conversions:
  - lowercase
  - UPPERCASE
  - Sentence case
  - Title Case
  - Capitalized Case
  - Toggle Case
  - camelCase
  - PascalCase
  - snake_case
  - kebab-case
  - CONSTANT_CASE
- Text cleanup:
  - Remove extra spaces
  - Trim lines
  - Remove empty lines
  - Normalize whitespace
- Line tools:
  - Sort lines A-Z
  - Sort lines Z-A
  - Reverse lines
  - Remove duplicate lines
  - Number lines
- Formatting tools:
  - Add prefix to each line
  - Add suffix to each line
  - Wrap each line in quotes
- Encoding utilities:
  - Base64 encode / decode
  - URL encode / decode
- Slug generator (`Hello World Example` → `hello-world-example`)
- Clipboard and utility actions:
  - Paste input
  - Copy output
  - Clear text
  - Download output as `.txt`
- Live text statistics:
  - Character count
  - Word count
  - Line count
  - Estimated reading time
- Responsive, mobile-friendly UI
- Light and dark mode support (auto-detect + manual toggle)
- 100% offline/browser-based (no backend, no external APIs)

## Local usage

1. Open `index.html` directly in a modern browser, or serve the folder with a static file server.
2. Paste/type text in the input area.
3. Click any tool button to transform text.
4. View/edit the result in the output area and copy/download as needed.

## Deploy to GitHub Pages

### Option A: Deploy root of a repository

1. Push the `text-tools` folder contents to your repository root (or keep this folder and configure accordingly).
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, select:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/ (root)` if files are at root, or `/docs` if you place files in `docs`.
4. Save and wait for deployment.
5. Open the published URL shown in GitHub Pages settings.

### Option B: Deploy from `/docs`

1. Copy these files into a `docs/` directory in your repo.
2. Commit and push.
3. In **Settings → Pages**, set source to your branch and folder to `/docs`.
4. Save and open the generated Pages URL.

## Project structure

```text
text-tools/
  index.html
  styles.css
  script.js
  js/
    caseConverters.js
    textUtils.js
    lineTools.js
    encoders.js
```
