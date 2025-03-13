# WBC-UI2

[![npm version](https://badge.fury.io/js/wbc-ui2.svg)](https://www.npmjs.com/package/wbc-ui2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**WBC-UI2** is a modern, lightweight UI component library built with Vue.js 2.7. It provides reusable, customizable components like `<WBC>` to accelerate web application development. With Vuetify and Bootstrap integration, it ensures a responsive, consistent experience across devices. WBC-UI2 powers tools like `WBJS2` (view management) and `WB-Table2` (data visualization), offering dynamic UI generation and more.

---

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Examples](#examples)
5. [Troubleshooting](#troubleshooting)
6. [Contributing](#contributing)
7. [License](#license)

---

## Features

- **Dynamic UI Generation**: Build UIs programmatically with JS/JSON objects via `<WBC>`.
- **Framework Hybridity**: Seamlessly mix Vuetify and Bootstrap styles.
- **File Handling**: Embed local files (e.g., images, PDFs) or remote URLs.
- **Backend Communication**: `<WBC>` connects directly to backend services.
- **Storage & Cookies**: Manage cookies and local storage within components.
- **Component Watching**: `<WBC>` monitors itself and nearby components for changes.
- **Multi-Language Support**: Display content in multiple languages.
- **Markdown Rendering**: Render Markdown text effortlessly.

> **Explore More**: There’s much more to discover in `WBC-UI2`—check out the [full docs](https://wbc-ui.com)!

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

> **Note**: Requires Vue 2.7:
>
> ```bash
> npm install vue@2.7.16 vue-template-compiler@2.7.16
> ```

---

## Usage

### 1. Import the Library

In your `main.js`, register `WBC-UI2`:

```javascript
import Vue from 'vue';
import App from './App.vue';
import * as WBC_ui2_plugin from 'wbc-ui2';

Vue.config.productionTip = false;
Vue.use(WBC_ui2_plugin);

new Vue({
  render: h => h(App),
}).mount('#app');
```

### 2. Use Components

The `<WBC>` component uses an `item` prop to create dynamic UIs:

---

## Examples

### Basic Button
A styled Bootstrap button:

```javascript
let button = new Button
```

```vue
<template>
  <WBC :item="{ comp: 'b-button', options: { props: { variant: 'danger' }, html: 'Danger Button' } }" />
</template>
```

### Mixed Content Card
Combine Bootstrap and Vuetify:

[[li__fdfsdfsdf|red]]
[[li__fdfsdfsdf/|red]]

[[
```html 
<template> 
<WBC :item="[ '<~BCard  pink pa-1>', 'BButton_ _View File yellow pa-1 https://example.com', './document.pdf' ]" /> 
</template> 
```
]]

[[
### Multi-Language Text
Display multilingual content:
]]
[[
```html
<template>
  <WBC :item="{
    comp: 'div',
    options: { html: { en: 'Hello', fr: 'Bonjour', ar: 'مرحبا' } }
  }">
  </WBC>
</template>
```
]]
[[

### Dynamic Select
Interactive dropdown with `dive: true`:

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
  }" />
</template>
```

> **Tip**: `dive: true` enables runtime updates for dynamic behavior.

### File Examples
Embed local or remote content:

- **Local Image**: `<WBC item="./jp0.jpg" />`
- **Local PDF**: `<WBC item="./cv.pdf" />`
- **Remote Video**: `<WBC item="https://youtu.be/aMkKs4l-dI0" />`

### Styled HTML with `<WBHTml>`
Render styled Markdown-like HTML:

]]

```vue
<template>
  <WBHTml html="li_ _stylish html of md text, classes and link && red pa-5 && https://example.com" />
</template>
```

Equivalent to:

```html
<li class="red pa-5"><a href="https://example.com">stylish html of md text, classes and link</a></li>
```

Compare with `<WBLink>`:

```vue
<template>
  <WBLink href="https://example.com">WBLink</WBLink>
</template>
```

---

## Troubleshooting

### "Module not found: Vue"
- **Solution**: Install Vue 2.7:
  ```bash
  npm install vue@2.7.16 vue-template-compiler@2.7.16
  ```

### Missing Styles
- **Solution**: Add to `main.js`:
  ```javascript
  import 'vuetify/dist/vuetify.min.css';
  import '@mdi/font/css/materialdesignicons.css';
  ```

---

## License

`WBC-UI2` is released under the [MIT License](https://wbc-ui.com/license). Free to use, modify, and distribute.

---

## Contact

I’m Wissem Boughamoura, the founder of `WBC-UI2`. Reach out with questions or feedback:

- **Email**: [wissemb1@gmail.com](mailto:wissemb1@gmail.com)
- **LinkedIn**: [linkedin.com/in/wissem-boughamoura](https://linkedin.com/in/wissem-boughamoura)
- **Website**: [wi-bg.com](https://wi-bg.com)
- **GitHub**: [@wissemb11](https://github.com/wissemb11)

---

## Acknowledgments

- [Vue.js](https://vuejs.org/) - Reactive framework.
- [Vuetify](https://vuetifyjs.com/) - UI components and theming.
- [Bootstrap](https://getbootstrap.com/) - Design utilities.

Ready to build? Start with these examples and dive into the [full docs at wbc-ui.com](https://wbc-ui.com)!