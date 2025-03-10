# temp-vue2-wbc2-cli

[![npm version](https://badge.fury.io/js/wbc-ui2.svg)](https://www.npmjs.com/package/wbc-ui2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**temp-vue2-wbc2-cli** is a simple Vue CLI template showcasing the `WBC-UI2` library’s `WBC` micro-component. Built on Vue.js 2.7, this project demonstrates how to integrate `WBC-UI2` for dynamic, JS/JSON-driven UI development with support for diverse file types (PDFs, fonts, Office files, Markdown, etc.). Pre-injected with `vue-router`, `vuex`, and `vuetify`, it’s a lightweight starting point for responsive applications. The `WBC` component is also compatible with `WBJS2` and `WB-Table2` for advanced functionality.

---

## Table of Contents

1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Usage](#usage)
6. [Examples](#examples)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

---

## Features

- **WBC Micro-Component**: Generate UIs dynamically using JS/JSON with `WBC-UI2`.
- **File Type Support**: Handles PDFs, fonts, Office files (Word, Excel, PowerPoint), Markdown, and more.
- **Pre-Injected Modules**: `vue-router`, `vuex`, and `vuetify` included via `WBC-UI2`—no manual setup needed.
- **Vue CLI Simplicity**: Quick setup with CLI commands (`serve`, `build`).
- **Responsive Design**: Built-in `vuetify` styling for mobile-friendly layouts.
- **Extensible**: Compatible with `WBJS2` and `WB-Table2` for advanced use cases.

---

## Project Structure

temp-vue2-wbc2-cli/
├── public/
│   ├── index.html
│   └── sample.pdf
├── src/
│   ├── components/
│   │   └── ExampleComponent.vue
│   ├── router/
│   │   └── index.js
│   ├── store/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
├── package.json
├── vue.config.js
└── README.md


> **Note**: Place static files (e.g., `index.html`, `sample.pdf`) in `public/`. Vue CLI uses `public/index.html` as the app’s entry template.

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/wissemb11/temp-vue2-wbc2-cli.git
   cd temp-vue2-wbc2-cli
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the App**:
   ```bash
   npm run serve
   ```

> **Note**: Ensure `wbc-ui2` is installed locally (e.g., via `file:../.` if linked) or from npm (`npm install wbc-ui2`).

---

## Configuration

### vue.config.js

The `vue.config.js` file is customized to support a wide range of file types for use with `WBC-UI2`:

```javascript
module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/temp-vue2-wbc2-cli/' : '/',
  transpileDependencies: ['wbc-ui2'],
  chainWebpack: (config) => {
    // Add vuetify-loader plugin for Vuetify compatibility
    config.plugin('vuetify-loader').use(require('vuetify-loader/lib/plugin'));

    // Rule for .vue files
    config.module
      .rule('vue')
      .test(/\\.vue`/)
      .exclude.add(/__.*\\.vue`/)
      .end()
      .use('vue-loader')
      .loader('vue-loader')
      .end();

    // Rule for raw .vue/js/ts files
    config.module
      .rule('raw-vue')
      .test(/__.*\\.(vue|js|ts)`/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();

    // Fonts (eot, woff, woff2, ttf, svg)
    config.module
      .rule('fonts')
      .test(/\\.(eot|woff|woff2|ttf|svg)`/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'fonts/[name].[hash][ext]',
      });

    // PDFs
    config.module
      .rule('pdf')
      .test(/\\.pdf`/)
      .use('file-loader')
      .loader('file-loader')
      .end();

    // JavaScript
    config.module
      .rule('js')
      .test(/\\.js`/)
      .exclude.add(/node_modules/)
      .end()
      .use('babel-loader')
      .loader('babel-loader')
      .options({
        presets: ['@babel/preset-env'],
      });

    // HTML, TXT, Python files
    config.module
      .rule('html')
      .test(/\\.(html|txt|py)`/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();

    // Office files (Word, Excel, PowerPoint)
    config.module
      .rule('office-files')
      .test(/\\.(doc|xls|ppt|docx|xlsx|pptx)`/)
      .use('file-loader')
      .loader('file-loader')
      .end();

    // Markdown
    config.module
      .rule('markdown')
      .test(/\\.md`/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  },
};
```

#### Additional Dependencies
Install these loaders for the above configuration:
```bash
npm install --save-dev vuetify-loader file-loader raw-loader babel-loader @babel/preset-env
```

---

## Usage

### Start the Development Server
Run the app locally:
```bash
npm run serve
```

### Build for Production
Generate a production build:
```bash
npm run build
```

### Customize
- Modify `src/main.js` to pass custom modules to `WBC-UI2` if needed (e.g., override `vuetify` version).
- Add routes in `src/router/index.js` or state in `src/store/index.js`.

---

## Examples

### Dynamic Button with Store Integration
```vue
<template>
  <div>
    <h1>{{ `store.getters.getMessage }}</h1>
    <WBC :item="{ comp: 'v-btn', options: { props: { color: 'primary' }, html: 'Update Message', on: { click: updateMessage } } }"></WBC>
  </div>
</template>

<script>
export default {
  methods: {
    updateMessage() {
      this.`store.dispatch('setMessage', 'Message Updated!');
    }
  }
};
</script>
```

### Render a PDF
```vue
<template>
  <WBC :item="'./sample.pdf'"></WBC>
</template>
```

### Display Markdown
```vue
<template>
  <WBC :item="'# Hello from Markdown!'"></WBC>
</template>
```

---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repo: [https://github.com/wissemb11/temp-vue2-wbc2-cli](https://github.com/wissemb11/temp-vue2-wbc2-cli).
2. Create a feature/bugfix branch.
3. Submit a pull request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

## License

Released under the [MIT License](LICENSE).

---

## Contact

- **Author**: Wissem Boughamoura
- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **GitHub**: [@wissemb11](https://github.com/wissemb11)
- **Homepage**: [https://wissemb11.github.io/temp-vue2-wbc2-cli](https://wissemb11.github.io/temp-vue2-wbc2-cli)
- **Tutorial**: [https://example.com/wbc-ui2-tutorial](https://example.com/wbc-ui2-tutorial)
