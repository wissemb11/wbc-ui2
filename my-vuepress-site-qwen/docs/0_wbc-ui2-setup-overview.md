# WBC-UI2 Setup Overview

This document provides an overview of the `wbc-ui2` project based on its `package.json` and `vue.config.js` files, as well as the commands provided. It includes a breakdown of the configuration, observations, and suggestions for improvement.

---

## Overview of the Project

- **Project Name**: `wbc-ui2`
- **Purpose**: A lightweight UI component library built with Vue.js, Vuetify, and Bootstrap.
- **Output Formats**: 
  - A UMD/ESM module for use in other apps (`dist` folder).
  - A standalone app for local testing (`dist-local`) or deployment (`dist-app`).
- **Key Features**: 
  - Reusable, customizable components.
  - JSON-driven UI, DOM manipulation, and backend integration.
  - Support for file previews (PDF, Office files, Markdown, etc.).
- **Deployment**: Hosted on GitHub Pages.

---

## `package.json` Breakdown

### Key Fields

1. **Dependencies**:
   - Core: `vue`, `vuetify`, `bootstrap`, `vue-router`, `vuex`.
   - Utilities: `vue-cookies`, `vue-cryptojs`, `moment-timezone`.
   - File Previews: `@vue-office/docx`, `@vue-office/excel`, `pdfvuer`.
   - Code/Markdown: `vue-codemirror`, `markdown-it`, `turndown`.
   - JSON Viewer: `vue-json-viewer`.

2. **Dev Dependencies**:
   - Build Tools: `@vue/cli-service`, `vue-loader`, `sass-loader`, `babel-loader`.
   - Plugins: `vuetify-loader`, `mini-css-extract-plugin`, `copy-webpack-plugin`.

3. **Scripts**:
   - `serve`: Runs a development server with hot reloading.
   - `build`: Builds a UMD/ESM module into `dist`.
   - `build:local`: Builds a standalone app into `dist-local` for local testing.
   - `build:app`: Builds a standalone app into `dist-app` for deployment.
   - `deploy`: Deploys `dist-app` to GitHub Pages.

4. **Engines**:
   - Requires Node.js `>=14.0.0` and npm `>=6.0.0`.

5. **Files**:
   - Includes `dist`, `README.md`, `LICENSE`, `CHANGELOG.md`, and `packages.json` (likely a typo for `package.json`).

### Observations

- **`packages.json` in `files`**: Did you mean `package.json`? If so, this is a minor typo and might not affect functionality, but it’s worth correcting for clarity.
- **Side Effects**: Specified `*.css` and `*.scss` as side effects, which is good for tree-shaking optimization in module builds.

---

## `vue.config.js` Breakdown

This file customizes the Vue CLI’s Webpack configuration based on the build mode or environment.

### Key Configurations

1. **Dynamic `outputDir`**:
   - `dist` (default for `npm run build`).
   - `dist-local` (for `npm run build:local`).
   - `dist-app` (for `npm run build:app`).

2. **Dynamic `publicPath`**:
   - `/wbc-ui2/` in production (for module builds).
   - `/` for app builds or local testing.
   - Customizable via `VUE_APP_PUBLIC_PATH`.

3. **Production Build (Module)**:
   - Outputs UMD library (`wbc-ui2`) with `vue` and `vuetify` as externals.
   - Disables chunk splitting for a single-file output.
   - Uses `MiniCssExtractPlugin` to extract CSS into `styles.css`.

4. **App/Local Build**:
   - Outputs a single `bundle.js` file.
   - Copies files from `src/public` to `wbc-ui2-files` in the output directory.
   - Includes source maps for debugging.

5. **Development Server**:
   - Runs on port 8080 with hot reloading.
   - Serves static files from `src/public` at `/wbc-ui2-files/`.

6. **Module Rules**:
   - Handles Vue files, JS (with Babel), PDFs, Office files, HTML, Markdown, etc., using appropriate loaders (`file-loader`, `raw-loader`).

### Observations

- **Flexibility**: The conditional logic for `outputDir` and `publicPath` is well-implemented, allowing switching between module and app builds seamlessly.
- **Externals**: Excluding `vue` and `vuetify` in the production module build is a good choice for a library, assuming consumers provide these dependencies.
- **Source Maps**: Enabled only in app/local builds, which makes sense for debugging without bloating the module build.

---

## Commands Explained

1. **`npm run serve`**:
   - Starts a development server with hot reloading on `localhost:8080`.
   - Uses the config under `devServer` in `vue.config.js`.

2. **`npm run build`**:
   - Builds a UMD/ESM module into `dist`.
   - Runs `clean-dist.js` afterward (presumably to tidy up the output).

3. **`npm run build:local`**:
   - Sets `BUILD_MODE=local` and `VUE_APP_PUBLIC_PATH=/`.
   - Builds a standalone app into `dist-local`.
   - Can be served locally (e.g., `serve -s dist-local`).

4. **`npm run build:app`**:
   - Sets `BUILD_MODE=app` and `VUE_APP_PUBLIC_PATH=/wbc-ui2/`.
   - Builds a standalone app into `dist-app`.

5. **`npm run deploy`**:
   - Uses `gh-pages` to deploy the `dist-app` folder to GitHub Pages.

---

## Validation and Suggestions

### Everything Looks Solid, But…

1. **Typo in `files`**:
   - Change `"packages.json"` to `"package.json"` in `package.json`.

2. **`clean-dist.js`**:
   - Referenced in the `build` script, but not provided. Ensure it works as expected (e.g., removing unnecessary files from `dist`).

3. **Version Consistency**:
   - Some dependencies (e.g., `vue@2.7.16`, `vuetify@2.7.2`) are pinned to specific versions. Ensure compatibility with newer versions if updating, especially since Vue 2 is in maintenance mode (EOL was Dec 31, 2023).

4. **Node Version**:
   - `node >=14.0.0` is fine, but Node 14 reached EOL in April 2023. Consider bumping to `>=16.0.0` or higher for security updates (e.g., Node 18 or 20, active as of March 2025).

5. **Deployment Path**:
   - `publicPath` for `build:app` is `/wbc-ui2/`, matching the GitHub Pages URL (`https://wissemb11.github.io/wbc-ui2/`). This is correct, but double-check that `gh-pages` publishes correctly with this base path.

---