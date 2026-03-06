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

## GitHub Pages setup (recommended for this repo)

This repository keeps the app under `text-tools/`, so the included workflow deploys that folder directly to GitHub Pages.

### 1) Push these files to GitHub

Make sure your repo includes:

- `text-tools/` (app files)
- `.github/workflows/deploy-pages.yml` (deployment workflow)

### 2) Enable GitHub Pages to use Actions

In your GitHub repository:

1. Go to **Settings → Pages**.
2. Under **Build and deployment**:
   - **Source**: `GitHub Actions`

### 3) Trigger deployment

- Push to `main` (deployment runs automatically), **or**
- Go to **Actions → Deploy Text Tools to GitHub Pages → Run workflow**.

### 4) Open your site

After deployment finishes, your app will be available at:

- `https://<your-username>.github.io/<your-repo-name>/`

GitHub also shows the exact URL in:

- **Settings → Pages**
- Workflow run summary (`deploy-pages` step output)

## Optional: Deploy without Actions

If you prefer the branch/folder method, copy `text-tools/*` into repository root or `docs/` and configure Pages to deploy from that location.

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
