# WBC-UI2

[![`npm version`](https://badge.fury.io/js/wbc-ui2.svg)](https://www.npmjs.com/package/wbc-ui2)
[![`License: MIT`](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**WBC-UI2** is a lightweight Vue.js 2.7 library built around the `WBC` micro-component—a dynamic, reusable tool that generates, controls, and transforms HTML, CSS, JavaScript, DOM, and Vuetify using JS or JSON objects. Designed for flexibility, it integrates seamlessly with Vuetify and Bootstrap, offering a fast, programmatic way to build responsive UIs.

As a standalone module, **WBC-UI2** serves as the foundation for tools like **WBJS2** (view management) and **WB-Table2** (data visualization).

---

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Configuration](#configuration)
5. [Examples](#examples)
6. [Advanced Examples](#advanced-examples)
7. [Troubleshooting](#troubleshooting)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

---

## Features

- **Reusable Components**: A set of pre-built Vue components for common UI elements.
- **Vuetify Integration**: Seamless integration with Vuetify for advanced styling and theming.
- **Bootstrap Compatibility**: Includes Bootstrap styles for additional flexibility.
- **Lightweight**: Optimized for performance and minimal bundle size.
- **Customizable**: Easily customize themes, icons, and other configurations.
- **Vue 2.7 Support**: Fully compatible with Vue 2.7 and its ecosystem.
- **Markdown Rendering**: Render Markdown content dynamically with support for local files and URLs.
- **File Embedding**: Embed various file types (images, PDFs, videos, Excel sheets, etc.) effortlessly.
- **Backend Communication**: Communicate with backend services directly through component properties.
- **Cookie Management**: Manage cookies and storage within components.
- **Dynamic Behavior**: Supports real-time updates and asynchronous actions via the `dive: true` property.

---

## Installation

Install **WBC-UI2** via npm or Yarn:

```bash
npm install wbc-ui2
```

Or, using Yarn:

```bash
yarn add wbc-ui2
```

> **Note**: Ensure Vue 2.7 is installed in your project:
>
> ```bash
> npm install vue@2.7.16 vue-template-compiler@2.7.16
>```
---

## Usage

### 1. Import the Library

In your main entry file (e.g., `main.js`), import and register **WBC-UI2**:

```javascript
import Vue from 'vue';
import App from './App.vue';
import * as WBC_ui2_plugin from 'wbc-ui2';

Vue.config.productionTip = false;

// Use the WBC-UI2 plugin
Vue.use(WBC_ui2_plugin);

new Vue({
  render: (h) => h(App),
}).`mount('#app');
```

### 2. Use the `WBC` Component

Use the `WBC` component in your Vue templates with the `item` prop:

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

### Customize Vuetify Theme

Override the default Vuetify theme during registration:

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

### Include Styles and Fonts

Ensure Vuetify and Material Design Icons styles are loaded:

```javascript
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
```

---

## Examples

### Basic Button

Render a simple button:

```vue
<template>
   <WBC :item="{ comp: 'b-button', options: { props: { variant: 'danger' }, html: 'Danger Button' } }"></WBC>
</template>
```

### Mixed Content Card

Combine Bootstrap and Vuetify components:

```vue
<template>
   <WBC :item="[
    '<~BCard|pink pa-1 ma-1 text-center>',
    'BCard component 1||link1',
    'BCard component 2||link2',
    './document.pdf'
  ]"></WBC>
</template>
```

### Multi-Language Text

Display content in multiple languages:

```vue
<template>
   <WBC :item="{
    comp: 'div',
    options: {
      html: { en: 'Hello', fr: 'Bonjour', ar: 'مرحبا' }
    }
  }"></WBC>
</template>
```

---

## Advanced Examples

### 1. Dynamic Language Selection

Create a dropdown menu for selecting languages:

```vue
<template>
   <WBC :item="{
    dive: true,
    comp: 'VSelect',
    options: {
      props: {
        label: 'Select Language',
        items: [
          { text: 'English', value: 'en' },
          { text: 'Français', value: 'fr' },
          { text: 'العربية', value: 'ar' }
        ]
      }
    }
  }"></WBC>
</template>
```

### 2. Embedding Local Files

Embed an image from the `public` folder:

```html
<h1>Image File</h1>
<WBC item="./jp0.jpg"></WBC>
```

Embed a Markdown file:

```html
<h1>Markdown File</h1>
<WBC item="./md0.md"></WBC>
```

### 3. Embedding Remote Content

Integrate online files by specifying URLs:

- Embed a YouTube video:
  ```html
  <WBC item="https://youtu.be/aMkKs4l-dI0?list=RDaMkKs4l-dI0"></WBC>
  ```

- Display an Excel sheet:
  ```html
  <WBC item="https://exinfm.com/excel%20files/cash_flow_model.xls"></WBC>
  ```

- Show a remote PDF:
  ```html
  <WBC item="http://study.wi-bg.com/files/2023-2024/Session%202%20-%20%20Input%20check%20%20-%20A.U.%2023-24%20.pdf"></WBC>
  ```

---

## Troubleshooting

### Common Issues and Solutions

#### Issue 1: "Module not found: Vue"

**Cause**: **WBC-UI2** requires Vue as a peer dependency.

**Solution**:
1. Install Vue 2.7:
   ```bash
   npm install vue@2.7.16 vue-template-compiler@2.7.16
   ```
2. Verify `peerDependencies` in the library's `package.json`:
   ```json
   "peerDependencies": {
     "vue": "^2.7.16"
   }
   ```

#### Issue 2: Missing Styles

**Cause**: Vuetify or icon fonts aren’t loaded.

**Solution**:
Explicitly import Vuetify's CSS and Material Design Icons in the root app's `main.js`:
```javascript
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository on GitHub.
2. Create a branch for your feature or fix.
3. Submit a pull request detailing your changes.

For more details, see the [Contribution Guidelines](CONTRIBUTING.md).

---

## License

**WBC-UI2** is released under the [MIT License](LICENSE). Free to use, modify, and distribute in personal and commercial projects.

---

## Contact

For questions, feedback, or support, feel free to reach out:

- **Author**: Wissem Boughamoura  
- **Email**: [wissemb11@gmail.com](mailto:wissemb11@gmail.com)  
- **GitHub**: [@wissemb11](https://github.com/wissemb11)  
- **LinkedIn**: [linkedin.com/in/wissem-boughamoura](https://linkedin.com/in/wissem-boughamoura)  
- **Website**: [wi-bg.com](https://wi-bg.com)

---

## External Resources

- **Official Site**: [wbc-ui.com](https://wbc-ui.com)  
- **Framework Documentation**: [wbjs.net](https://wbjs.net)  
- **Interactive Demo**: [w-learn.org](https://w-learn.org)  
- **GitHub Repository**: [https://github.com/wissemb11/wbc-ui2](https://github.com/wissemb11/wbc-ui2)  
- **Live Demo**: [https://wissemb11.github.io/wbc-ui2/](https://wissemb11.github.io/wbc-ui2/)  


---

## Acknowledgments

- [Vue.js](https://vuejs.org/) - Reactive framework.
- [Vuetify](https://vuetifyjs.com/) - UI components and theming.
- [Bootstrap](https://getbootstrap.com/) - Design utilities.

Ready to build? Start with these examples and dive into the [full docs at wbc-ui.com](https://wbc-ui.com)!

Thank you for using **WBC-UI2**!