# WBC-UI2 Template

[![`npm version`](https://badge.fury.io/js/wbc-ui2.svg)](https://www.npmjs.com/package/wbc-ui2)
[![`License: MIT`](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This template demonstrates how to use `WBC-UI2`, a powerful Vue.js 2.7 component library that simplifies web development by allowing you to define HTML/CSS/JS components dynamically using JS/JSON objects. It seamlessly integrates Bootstrap and Vuetify, supports local/remote files, and includes utility methods for common tasks.

---

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Configuration](#configuration)
5. [Examples](#examples)
6. [Troubleshooting](#troubleshooting)
7. [License](#license)
8. [Contact](#contact)

---

## Features

- **Dynamic Component Generation**: Define HTML/CSS/JS components programmatically using JS/JSON objects.
- **Framework Hybridity**: Combine Bootstrap and Vuetify components for flexible styling.
- **File Handling**: Easily embed local files (images, PDFs, documents) or remote URLs.
- **Multilingual Support**: Display content in multiple languages dynamically.
- **Utility Methods**: Over 30 built-in methods for tasks like encryption, date validation, and data manipulation.
- **External Components**: Includes external components like JsonViewer, VueOfficeExcel, and more.
- **Vue 2.7 Compatibility**: Fully compatible with Vue 2.7 and its ecosystem.

---

## Installation

To install `wbc-ui2`, use npm or yarn:

```
npm install wbc-ui2
```

Or, using Yarn:

```
yarn add wbc-ui2
```

> **Note**: Ensure that you have Vue 2.7 installed in your project:
>
> ```
> npm install vue@2.7.16 vue-template-compiler@2.7.16
> ```

---

## Usage

### 1. Import the Library

In your main entry file (e.g., `main.js`), import and register the `wbc-ui2` library:

```
import Vue from 'vue';
import App from './App.vue';
import * as WBC_ui2_plugin from 'wbc-ui2';

Vue.config.productionTip = false;

// Use the wbc-ui2 plugin
Vue.use(WBC_ui2_plugin);

new Vue({
  render: (h) => h(App),
}).`mount('#app');
```

### 2. Use Components in Your Application

Once the library is registered, you can use its components in your Vue templates:

```
<WBC :item="{
  comp: 'b-button',
  options: {
    props: { variant: 'primary' },
    html: 'Primary Button'
  }
}"/>
```

---

## Configuration

To support advanced file types (PDFs, Office documents, Markdown, etc.), configure your project's `vue.config.js`:

```
module.exports = {
  outputDir: "dist",
  publicPath: process.env.NODE_ENV === "production" ? "/temp-vue2-wbc2-cli/" : "/",
  transpileDependencies: ["wbc-ui2"],
  chainWebpack: (config) => {
    // Add vuetify-loader for Vuetify compatibility
    config.plugin("vuetify-loader").use(require("vuetify-loader/lib/plugin"));

    // Rule for handling .vue files
    config.module
      .rule("vue")
      .test(/\.vue`/)
      .exclude.add(/__.*\.vue`/) // Exclude files starting with "__"
      .end()
      .use("vue-loader")
      .loader("vue-loader");

    // Rule for raw-loading special files
    config.module
      .rule("raw-vue")
      .test(/__.*\.(vue|js|ts)`/)
      .use("raw-loader")
      .loader("raw-loader");

    // Rule for font files
    config.module
      .rule("fonts")
      .test(/\.(eot|woff|woff2|ttf|svg)`/)
      .use("file-loader")
      .loader("file-loader")
      .options({ name: "fonts/[name].[hash][ext]" });

    // Rule for PDF files
    config.module
      .rule("pdf")
      .test(/\.pdf`/)
      .use("file-loader")
      .loader("file-loader");

    // Rule for JavaScript files
    config.module
      .rule("js")
      .test(/\.js`/)
      .exclude.add(/node_modules/)
      .end()
      .use("babel-loader")
      .loader("babel-loader")
      .options({ presets: ["@babel/preset-env"] });

    // Rule for HTML, TXT, and Python files
    config.module
      .rule("html")
      .test(/\.(html|txt|py)`/)
      .use("raw-loader")
      .loader("raw-loader");

    // Rule for Office files (Word, Excel, PowerPoint)
    config.module
      .rule("office-files")
      .test(/\.(doc|xls|ppt|docx|xlsx|pptx)`/)
      .use("file-loader")
      .loader("file-loader");

    // Rule for Markdown files
    config.module
      .rule("markdown")
      .test(/\.md`/)
      .use("raw-loader")
      .loader("raw-loader");
  },
};
```

---

## Examples

### Example 1: Dynamic Bootstrap Button

```
<WBC :item="{
  comp: 'b-button',
  options: {
    props: { variant: 'danger' },
    class: 'pa-1', // Mix Bootstrap and Vuetify classes
    html: 'Dynamic Button'
  }
}"/>
```

### Example 2: Mixing Vuetify and Bootstrap Components

```
<WBC :item="{
  comp: 'v-card',
  options: {
    class: 'pa-4',
    children: [
      { comp: 'b-card-title', html: 'Hybrid Card' },
      { comp: 'b-card-text', html: 'Bootstrap inside Vuetify' }
    ]
  }
}"/>
```

### Example 3: Embedding Local Files

```
<!-- Local Image -->
<WBC :item="{ comp: 'img', props: { src: './public/logo.png' } }"/>

<!-- Local PDF -->
<WBC :item="{ comp: 'iframe', props: { src: './public/documents/report.pdf' }, style: { width: '100%', height: '600px' } }"/>
```

### Example 4: Embedding Remote Content

```
<!-- YouTube Embed -->
<WBC :item="{ comp: 'iframe', props: { src: 'https://youtu.be/aMkKs4l-dI0?list=RDaMkKs4l-dI0' } }"/>

<!-- Online Excel File -->
<WBC :item="{ comp: 'VueOfficeExcel', props: { src: 'https://exinfm.com/excel%20files/cash_flow_model.xls' } }"/>
```

### Example 5: Multilingual Support

```
<WBC :item="{
  comp: 'v-btn',
  options: {
    props: { color: 'primary' },
    html: { en: 'English Button', fr: 'Bouton français', ar: 'زر عربي' }
  }
}"/>
```

---

## Troubleshooting

### Common Issues and Solutions

#### Issue 1: Module not found: Error: Can't resolve 'Vue'

**Cause**: The `wbc-ui2` library treats Vue as an external dependency (`externals: { vue: 'Vue' }` in `vue.config.js`).

**Solution**:
1. Ensure the root app installs the correct version of Vue:
   ```
   npm install vue@2.7.16 vue-template-compiler@2.7.16
   ```
2. Verify the `peerDependencies` in the library's `package.json`:
   ```
   "peerDependencies": {
     "vue": "^2.7.16"
   }
   ```

#### Issue 2: Missing Styles or Fonts

**Cause**: The root app may not include Vuetify's CSS or font files.

**Solution**:
- Explicitly import Vuetify's CSS and Material Design Icons in the root app's `main.js`:
  ```
  import 'vuetify/dist/vuetify.min.css';
  import '@mdi/font/css/materialdesignicons.css';
  ```

---

## Built-in Utility Methods

`WBC-UI2` includes over 30 utility methods for common tasks:

- `randomColor?.`() ====> `#F6D7AF`
- `randomKey?.("baseKey")` ====> `baseKeyUO107`
- `getRandomInt?.(10, 20)` ====> `14`
- `camelToKebab?.("WbcUiComponentJS")` ====> `wbc-Ui-Component-JS`
- `isDate?.('2025-01-01')` ====> `true`
- `stringToJson?.(`{"a":10}`)` ====> `{ "a": 10 }`
- `capitalizeWords?.("this an example of sentence")` ====> `This An Example Of Sentence`

---

## External Components

The library includes external components for extended functionality:

- `JsonViewer`: Render JSON data.
- `VueOfficeExcel`: Display Excel files.
- `VueDocPreview`: Preview documents.
- `pdfvuer`: Display PDF files.

Example:

```
<VueOfficeExcel src="https://exinfm.com/excel%20files/cash_flow_model.xls" v-if="excelFile"/>
```

---

## License

`WBC-UI2` is released under the [MIT License](LICENSE). You are free to use, modify, and distribute this library in both personal and commercial projects.

---

## Contact

For questions, feedback, or support, feel free to reach out:

- Author: Wissem Boughamoura
- Email: [wissem.boughamoura@example.com](mailto:wissem.boughamoura@example.com)
- GitHub: [@wissemb11](https://github.com/wissemb11)

---

## Acknowledgments

- [Vuetify](https://vuetifyjs.com/) - For providing powerful UI components and theming.
- [Bootstrap](https://getbootstrap.com/) - For enhancing responsiveness and design consistency.
- [Vue.js](https://vuejs.org/) - For enabling reactive and modular front-end development.

Thank you for using `WBC-UI2`!