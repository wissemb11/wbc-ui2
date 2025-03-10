# WBC-UI2

[![`npm version`](https://badge.fury.io/js/wbc-ui2.svg)](https://www.npmjs.com/package/wbc-ui2)
[![`License: MIT`](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

WBC-UI2 is a modern, lightweight UI component library built with Vue.js 2.7. It provides a collection of reusable, customizable components designed to accelerate web application development. Built with Vuetify and Bootstrap, it ensures a responsive and consistent user experience across devices.

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

- **Dynamic Component Generation**: Build HTML/CSS/JS components programmatically using JS/JSON objects.
- **Framework Hybridity**: Seamlessly integrate Bootstrap and Vuetify components for flexible styling.
- **File Handling**: Easily embed local files (images, PDFs, documents) or remote URLs.
- **Multilingual Support**: Display content in multiple languages dynamically.
- **Utility Methods**: Over 30 built-in methods for common tasks like encryption, date validation, and data manipulation.
- **Markdown Support**: Render markdown text directly within components.
- **Dynamic Behavior**: Use ``dive: true`` to execute runtime functions for advanced interactivity.
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
<template>
  <WBC :item="{
    comp: 'b-button',
    options: {
      props: { variant: 'primary' },
      html: 'Primary Button'
    }
  }"/>
</template>
```

---

## Configuration

### 1. Customize Vuetify Theme

The library initializes Vuetify with a default light theme. To customize the theme, override the settings in your root application:

```
import Vue from 'vue';
import * as WBC_ui2_plugin from 'wbc-ui2';

Vue.use(WBC_ui2_plugin, {
  theme: {
    dark: true, // Enable dark mode
    themes: {
      light: {
        primary: '#1976D2', // Custom primary color
        secondary: '#424242',
      },
      dark: {
        primary: '#3f51b5', // Custom dark mode primary color
        secondary: '#424242',
      },
    },
  },
});
```

### 2. Include Styles and Fonts

Ensure that Vuetify's styles and fonts are included in your project. The library automatically imports the following:

- **Vuetify CSS**: `vuetify/dist/vuetify.min.css`
- **Material Design Icons**: @`mdi/font/css/materialdesignicons.css`

If these styles are missing, explicitly import them in your `main.js`:

```
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
```

---

## Examples

### Example 1: Using a Custom Component

Here’s an example of using the `WBLink` component from the library:

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

### Example 2: Combining Vuetify and wbc-ui2 Components

You can combine Vuetify components with custom components from the library:

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

### Example 3: File Viewer

Embed local files or external URLs:

```
<!-- Local Image -->
<WBC :item="{ comp: 'img', props: { src: './public/logo.png' } }"/>

<!-- YouTube Embed -->
<WBC :item="{ comp: 'iframe', props: { src: 'https://youtu.be/dQw4w9WgXcQ' } }"/>
```

### Example 4: Multilingual Support

Display content in multiple languages dynamically:

```
<WBC :item="{
  html: { en: 'English Text', fr: 'Texte français', ar: 'العربية' },
  options: {
    props: { label: 'Select Language' },
    items: ['en', 'fr', 'ar']
  }
}"/>
```

### Example 5: Dynamic Components

Use ``dive: true`` to execute runtime functions:

```
<WBC :item="{
  comp: 'div',
  dive: true,
  options: {
    html: 'h5__This is a dynamic text based on language|red',
    ref: 'main_br2',
    style: { direction: 'ltr' }
  },
  asChild: 'function () { return this.itemAccessebility; }'
}"/>
```

---

## Troubleshooting

### Common Issues and Solutions

#### Issue 1: Module not found: Error: Can't resolve 'Vue'

**Cause**: The `wbc-ui2` library treats Vue as an external dependency (`externals: { vue: 'Vue' }` in `vue.config.js`). If the consuming application does not provide the correct version of Vue, this error occurs.

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

## Utility Methods

WBC-UI2 includes over 30 utility methods for common tasks:

- **Random Color**: Generate random hex colors.
- **Date Validation**: Check if a string is a valid date.
- **String Parsing**: Convert JSON strings to objects.
- **Data Manipulation**: Flatten arrays, merge objects, etc.

Example Usage:

```
const color = WBC.randomColor(); // #F6D7AF
const data = WBC.stringToJson('{"name":"John"}'); // Parses JSON strings
```

---

## External Components

The library includes external components for extended functionality:

- **JsonViewer**: Display JSON data in a readable format.
- **VueOfficeExcel**: Render Excel files.
- **VueDocPreview**: Preview documents.
- **pdfvuer**: Display PDF files.

Example:

```
<VueOfficeExcel src="https://exinfm.com/excel%20files/cash_flow_model.xls" v-if="excelFile"/>
```

---

## External Modules

The library injects commonly used modules into your Vue app automatically:

- **Router**: Vue Router for navigation.
- **Store**: Vuex for state management.
- **Crypto**: VueCryptojs for encryption.
- **Moment**: VueMoment for date handling.

No need to install these separately when using `wbc-ui2`.

---

## License

`wbc-ui2` is released under the [MIT License](LICENSE). You are free to use, modify, and distribute this library in both personal and commercial projects.

---

## Contact

For questions, feedback, or support, feel free to reach out:

- Author: Wissem Boughamoura
- Email: [wissem.boughamoura@example.com](mailto:wissem.boughamoura@example.com)
- GitHub: [@wissemb11](https://github.com/wissemb11)

---

## Acknowledgments

- [Vuetify](https://vuetifyjs.com/) - For powerful UI components and theming.
- [Bootstrap](https://getbootstrap.com/) - For enhancing responsiveness and design consistency.
- [Vue.js](https://vuejs.org/) - For enabling reactive and modular front-end development.

Thank you for using `wbc-ui2`!
