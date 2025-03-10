readme_content = """
# WBC-UI2

[![npm version](https://badge.fury.io/js/wbc-ui2.svg)](https://www.npmjs.com/package/wbc-ui2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**WBC-UI2** is a lightweight Vue.js 2.7 library built around the `WBC` micro-component—a dynamic, reusable tool that generates, controls, and transforms HTML, CSS, and JavaScript using JS or JSON objects. Designed for flexibility, it integrates seamlessly with Vuetify and Bootstrap, offering a fast, programmatic way to build responsive UIs. As a standalone module, `WBC-UI2` also serves as the foundation for tools like `WBJS2` (view management) and `WB-Table2` (data visualization).

---

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Configuration](#configuration)
5. [Examples](#examples)
6. [Troubleshooting](#troubleshooting)
7. [Contributing](#contributing)
8. [License](#license)

---

## Features

- **WBC Micro-Component**: A single, powerful component for generating UIs programmatically.
- **JS/JSON-Driven**: Define layouts, styles, and behavior with minimal markup.
- **Vuetify & Bootstrap Integration**: Leverage advanced styling and components from both frameworks.
- **Dynamic Rendering**: Supports events and real-time updates with `DynamicWBC` mode (`dive: true`).
- **Content Support**: Renders local files (e.g., images, PDFs), online URLs, and Markdown.
- **Multi-Language Ready**: Displays content in multiple languages (e.g., English, French, Arabic).
- **Lightweight & Compatible**: Optimized for Vue 2.7, usable in `WBJS2` and `WB-Table2`.

---

## Installation

Install `WBC-UI2` via npm or Yarn:

```bash
npm install wbc-ui2
```

Or with Yarn:

```bash
yarn add wbc-ui2
```

> **Note**: Requires Vue 2.7. Install it if not already in your project:
>
> ```bash
> npm install vue@2.7.16 vue-template-compiler@2.7.16
> ```

---

## Usage

### 1. Import the Library

In your main entry file (e.g., `main.js`), import and register `WBC-UI2`:

```javascript
import Vue from 'vue';
import App from './App.vue';
import WBCUI2 from 'wbc-ui2';

Vue.config.productionTip = false;
Vue.use(WBCUI2);

new Vue({
  render: h => h(App),
}).`mount('#app');
```

### 2. Use the `WBC` Component

Use the `WBC` component in your Vue templates with the `item` prop:

```vue
<template>
  <div>
    <WBC :item="{ comp: 'v-btn', options: { props: { color: 'primary' }, html: 'Click Me' } }"></WBC>
  </div>
</template>
```

---

## Configuration

### Customize Vuetify Theme

Override the default Vuetify theme during registration:

```javascript
import Vue from 'vue';
import WBCUI2 from 'wbc-ui2';

Vue.use(WBCUI2, {
  vuetifyOptions: {
    theme: {
      dark: true,
      themes: {
        light: {
          primary: '#1976D2',
          secondary: '#424242',
        },
        dark: {
          primary: '#3f51b5',
          secondary: '#424242',
        },
      },
    },
  },
});
```

### Include Styles

Ensure Vuetify and Material Design Icons styles are loaded:

```javascript
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
```

---

## Examples

### Basic Button
```vue
<template>
  <WBC :item="{ comp: 'b-button', options: { props: { variant: 'danger' }, html: 'Danger Button' } }"></WBC>
</template>
```

### Mixed Content Card
```vue
<template>
  <WBC :item="[
    '<~BCard|pink pa-1>',
    'BButton__View File|yellow pa-1|https://example.com',
    './document.pdf'
  ]"></WBC>
</template>
```

### Multi-Language Text
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

### Dynamic Select
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

---

## Troubleshooting

### Issue: "Module not found: Vue"
- **Cause**: `WBC-UI2` requires Vue as a peer dependency.
- **Solution**: Install Vue 2.7:
  ```bash
  npm install vue@2.7.16 vue-template-compiler@2.7.16
  ```

### Issue: Missing Styles
- **Cause**: Vuetify or icon fonts aren’t loaded.
- **Solution**: Import in `main.js`:
  ```javascript
  import 'vuetify/dist/vuetify.min.css';
  import '@mdi/font/css/materialdesignicons.css';
  ```

---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository on [GitHub](https://github.com/[your-username]/wbc-ui2).
2. Create a branch for your feature or fix.
3. Submit a pull request with your changes.

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

---

## License

`WBC-UI2` is released under the [MIT License](LICENSE). Free to use, modify, and distribute in personal and commercial projects.

---

## Contact

- **Author**: Wissem Boughamoura
- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **GitHub**: [@wissemb11](https://github.com/wissemb11)
- **npm**: [wbc-ui2](https://www.npmjs.com/package/wbc-ui2)

---

## Acknowledgments

- [Vue.js](https://vuejs.org/) - Reactive and modular front-end framework.
- [Vuetify](https://vuetifyjs.com/) - Powerful UI components and theming.
- [Bootstrap](https://getbootstrap.com/) - Responsive design and utilities.

Thank you for using `WBC-UI2`! This module can be extended in projects like `WBJS2` and `WB-Table2` for advanced functionality.
"""