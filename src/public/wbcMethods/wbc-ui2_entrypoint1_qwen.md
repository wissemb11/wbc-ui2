readme = """# WBC-UI2

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

- **Reusable Components**: A set of pre-built Vue components for common UI elements.
- **Vuetify Integration**: Seamless integration with Vuetify for advanced styling and theming.
- **Bootstrap Compatibility**: Includes Bootstrap styles for additional flexibility.
- **Lightweight**: Optimized for performance and minimal bundle size.
- **Customizable**: Easily customize themes, icons, and other configurations.
- **Vue 2.7 Support**: Fully compatible with Vue 2.7 and its ecosystem.

---

## Installation

To install `wbc-ui2`, use npm or yarn:

```bash
npm install wbc-ui2
```

Or, using Yarn:

```bash
yarn add wbc-ui2
```

> **Note**: Ensure that you have Vue 2.7 installed in your project:
>
> ```bash
> npm install vue@2.7.16 vue-template-compiler@2.7.16
> ```

---

## Usage

### 1. Import the Library

In your main entry file (e.g., `main.js`), import and register the `wbc-ui2` library:

```javascript
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

```vue
<template>
  <div id="app">
    <!-- WBC-UI2 Component -->
    <WBLink href="https://example.com">Visit Example</WBLink>
    <!-- Vuetify Component -->
    <v-btn color="primary">Primary Button</v-btn>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
```

---

## Configuration

### 1. Customize Vuetify Theme

The library initializes Vuetify with a default light theme. To customize the theme, override the settings in your root application:

```javascript
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

```javascript
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
```

---

## Examples

### Example 1: Using a Custom Component

Here’s an example of using the `WBLink` component from the library:

```vue
<template>
  <div>
    <WBLink href="https://example.com" target="_blank">Visit Example</WBLink>
  </div>
</template>
```

### Example 2: Combining Vuetify and wbc-ui2 Components

You can combine Vuetify components with custom components from the library:

```vue
<template>
  <div>
    <!-- Vuetify Button -->
    <v-btn color="primary">Primary Button</v-btn>
    <!-- wbc-ui2 Component -->
    <WBAlert type="success">This is a success alert!</WBAlert>
  </div>
</template>
```

---

## Troubleshooting

### Common Issues and Solutions

#### Issue 1: Module not found: Error: Can't resolve 'Vue'

**Cause**: The `wbc-ui2` library treats Vue as an external dependency (`externals: { vue: 'Vue' }` in `vue.config.js`). If the consuming application does not provide the correct version of Vue, this error occurs.

**Solution**:
1. Ensure the root app installs the correct version of Vue:
   ```bash
   npm install vue@2.7.16 vue-template-compiler@2.7.16
   ```
2. Verify the `peerDependencies` in the library's `package.json`:
   ```json
   "peerDependencies": {
     "vue": "^2.7.16"
   }
   ```

#### Issue 2: Missing Styles or Fonts

**Cause**: The root app may not include Vuetify's CSS or font files.

**Solution**:
- Explicitly import Vuetify's CSS and Material Design Icons in the root app's `main.js`:
  ```javascript
  import 'vuetify/dist/vuetify.min.css';
  import '@mdi/font/css/materialdesignicons.css';
  ```

---

## Features Overview

WBC-UI2 offers the following key capabilities:

1. **Dynamic Component Generation**: Build HTML/CSS/JS components programmatically using JS/JSON objects.
2. **Framework Hybridity**: Combine Bootstrap and Vuetify components seamlessly.
3. **File Handling**: Easily integrate local files (images, PDFs, documents) or remote URLs.
4. **Multilingual Support**: Display content in multiple languages dynamically.
5. **Utility Methods**: Over 30 built-in methods for common tasks like encryption, date validation, and data manipulation.
6. **External Components**: Includes external components like JsonViewer, VueOfficeExcel, and more.
7. **Automatic Injection of Modules**: Router, store, vuetify, and other modules are automatically injected into the Vue app.

---

## File Integration Examples

### Local Files

Place files in the `public` folder and reference them using relative paths starting with `./` or `../`:

- **Image Files**:
  ```vue
  <WBC item="./jp0.jpg"></WBC>
  ```

- **PDF Files**:
  ```vue
  <WBC item="./cv.pdf"></WBC>
  ```

- **Markdown Files**:
  ```vue
  <WBC item="./md0.md"></WBC>
  ```

- **HTML Files**:
  ```vue
  <WBC item="./html0.html"></WBC>
  ```

### Remote Content

Integrate online files by specifying URLs:

- **Excel File**:
  ```vue
  <WBC item="https://exinfm.com/excel%20files/cash_flow_model.xls"></WBC>
  ```

- **YouTube Video**:
  ```vue
  <WBC item="https://youtu.be/aMkKs4l-dI0?list=RDaMkKs4l-dI0"></WBC>
  ```

---

## Multilingual Support

Display content in multiple languages dynamically:

```vue
<WBC :item="{
  comp: 'v-btn',
  options: {
    props: { color: 'primary' },
    html: { en: 'English Button', fr: 'Bouton français', ar: 'زر عربي' }
  }
}"></WBC>
```

---

## Utility Methods

WBC-UI2 provides over 30 utility methods for simplifying common tasks:

| Method Name          | Description                                                                 | Example Input                                | Example Output         |
|----------------------|-----------------------------------------------------------------------------|---------------------------------------------|------------------------|
| `randomColor?`       | Generates a random hex color.                                               | -                                           | `#F6D7AF`             |
| `randomKey?`         | Generates a unique key based on the provided base string.                   | `"baseKey"`                                | `"baseKeyUO107"`      |
| `getRandomInt?`      | Returns a random integer between two numbers.                               | `(10, 20)`                                 | `14`                  |
| `camelToKebab?`      | Converts camelCase strings to kebab-case.                                   | `"WbcUiComponentJS"`                       | `"wbc-Ui-Component-JS"` |
| `capitalizeWords?`   | Capitalizes the first letter of each word in a string.                       | `"this an example of sentence"`             | `"This An Example Of Sentence"` |
| `toTitleCase?`       | Converts a string to title case (capitalizes only the first word).           | `"this an example of sentence"`             | `"This an Example of Sentence"` |
| `titleCase?`         | Converts a string to full title case (capitalizes all words).                | `"this an example of sentence"`             | `"This An Example Of Sentence"` |
| `flattenArray?`      | Flattens a nested array into a single-level array.                          | `[1, [2, [3]]]`                           | `[1, 2, 3]`          |
| `mergeObjects?`      | Merges multiple objects into one.                                           | `({a: 10}, {b: 20}, {c: 30})`            | `{a: 10, b: 20, c: 30}` |
| `isDate?`           | Checks if a string is a valid date.                                          | `"2025-01-01"`                            | `true`                |
| `isEmpty?`          | Checks if a value is empty (null, undefined, empty string, array, object).   | `{}`                                        | `true`                |
| `isNonEmpty?`       | Opposite of `isEmpty?`. Checks if a value is non-empty.                      | `{a: 10}`                                  | `true`                |
| `isPlainObject?`    | Checks if a value is a plain object (not an array or function).              | `{a: 10, b: 20}`                          | `true`                |
| `isPromise?`        | Checks if a value is a Promise.                                              | `new Promise(() => {});`                   | `true`                |
| `stringToJson?`     | Parses a JSON string into an object.                                          | ``{"a":10}``                               | `{ "a": 10 }`        |
| `stringify?`        | Converts an object to a JSON string, including functions.                    | `{a: 1, f: () => 1}`                      | `{"a":1,"f":"function f() { return 1; }"}` |
| `copyToClipboard?`  | Copies text to the clipboard.                                                | `"Copied Text!"`                           | -                     |

---

## External Components

The library includes external components for extended functionality:

- `JsonViewer`: Render JSON data.
- `VueOfficeExcel`: Display Excel files.
- `VueDocPreview`: Preview documents.
- `pdfvuer`: Display PDF files.

Example:

```vue
<VueOfficeExcel src="https://exinfm.com/excel%20files/cash_flow_model.xls" v-if="excelFile"/>
```

---

## External Modules

The library automatically injects commonly used modules into your Vue app:

- `router`: Vue Router for navigation.
- `store`: Vuex for state management.
- `crypto`: VueCryptojs for encryption.
- `moment`: VueMoment for date handling.

No need to install these separately when using `wbc-ui2`.

---

## License

`wbc-ui2` is released under the [MIT License](LICENSE). You are free to use, modify, and distribute this library in both personal and commercial projects.

---

## Contact

For questions, feedback, or support, feel free to reach out:

- Author: Wissem Boughamoura
- Email: [your-email@example.com](mailto:your-email@example.com)
- GitHub: [@wissemb11](https://github.com/wissemb11)

---

## Acknowledgments

- [Vuetify](https://vuetifyjs.com/) - For providing powerful UI components and theming.
- [Bootstrap](https://getbootstrap.com/) - For enhancing the library's responsiveness and design consistency.
- [Vue.js](https://vuejs.org/) - For enabling reactive and modular front-end development.

Thank you for using `wbc-ui2`!
"""