# WBC-UI2

[![npm version](https://badge.fury.io/js/wbc-ui2.svg)](https://www.npmjs.com/package/wbc-ui2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**WBC-UI2** is a modern, lightweight UI component library built with Vue.js 2.7. It provides reusable, customizable components like `<WBC>` to accelerate web application development. With Vuetify and Bootstrap integration, it ensures a responsive, consistent experience across devices. `WBC-UI2` powers tools like `WBJS2` (view management) and `WB-Table2` (data visualization), offering dynamic UI generation, Markdown support, and file embedding.

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

- **Dynamic UI Generation**: Build UIs programmatically with JS/JSON via `<WBC>`.
- **Framework Hybridity**: Mix Vuetify and Bootstrap styles seamlessly.
- **File Embedding**: Embed local files (e.g., images, PDFs, code) or remote URLs effortlessly.
- **Markdown Support**: Render Markdown content or files directly with `<WBC>`.
- **Backend Communication**: `<WBC>` connects to backend services.
- **Storage & Cookies**: Manage cookies and local storage within components.
- **Component Watching**: `<WBC>` monitors itself and nearby components.
- **Multi-Language Support**: Display content in multiple languages.

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

The `<WBC>` component uses an `item` prop to create dynamic UIs, render Markdown, or embed files:

---

## Examples

### Basic Button
A styled Bootstrap button:

```vue
<template>
  <WBC :item="{ comp: 'b-button', options: { props: { variant: 'danger' }, html: 'Danger Button' } }" />
</template>
```

### Markdown Content
Render Markdown directly:

- **Simple Markdown**:
  ```vue
  <WBC item="MD__# this a title with markdown" />
  ```
  Output: `# this a title with markdown`

- **Markdown Array**:
  ```vue
  <WBC :item="['<MD>', '# this a title with markdown', 'markdown section 1', 'markdown section 2']" />
  ```
  Output: A Markdown snippet with a title and sections.

- **Styled Markdown**:
  ```vue
  <WBC :item="{ comp: 'MD', options: { class: 'error pa-15', html: '### li__a li tag html in markdown code', on: { click: () => alert('clicked on markdown snippet') } } }" />
  ```
  Output: A styled Markdown list item with a click event.

> **Tip**: For complex nested objects or arrays, see the [docs](https://wbc-ui.com) for `<WBC>` logic.

### Markdown File
Embed a Markdown file from the `public` folder:

```vue
<WBC item="./fileName.md" />
```

Mix with components:

```vue
<WBC :item="['<~ol>', '<li>', 'item1', 'BButton__item2 is a bootstrap button', 'VCard__item3 is a red vuetify VCard|red|https://google.com', './fileName.md']" />
```
Output: An ordered list with text, a Bootstrap button, a red Vuetify card, and Markdown file content.

### File Embedding
Embed various file types from the `public` folder:

- **Image**: `<WBC item="./jp0.jpg" />`
- **Audio**: `<WBC item="./1.mp3" />`
- **Video**: `<WBC item="./mp4_0.mp4" />`
- **PDF**: `<WBC item="./cv.pdf" />`
- **Code (e.g., Python)**: `<WBC item="./__py0.py" />`

> **Supported Formats**: jpg, gif, jpeg, mp3, mp4, json, txt, html, md, doc, docx, pdf, py, ts, vue, php, js.

### Multi-Language Text
Display multilingual content:

```vue
<template>
  <WBC :item="{ comp: 'div', options: { html: { en: 'Hello', fr: 'Bonjour', ar: 'مرحبا' } } }" />
</template>
```

### Dynamic Select
Interactive dropdown with `dive: true`:

```vue
<template>
  <WBC :item="{ dive: true, comp: 'VSelect', options: { props: { label: 'Select Language', items: [{ text: 'English', value: 'en' }, { text: 'Français', value: 'fr' }, { text: 'العربية', value: 'ar' }] } } }" />
</template>
```

> **Tip**: `dive: true` enables runtime updates.

### Styled HTML with `<WBHTml>`
Render styled Markdown-like HTML:

```vue
<template>
  <WBHTml html="li__stylish html of md text, classes and link|red pa-5|https://example.com" />
</template>
```
Output: `<li class="red pa-5"><a href="https://example.com">stylish html of md text, classes and link</a></li>`

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

## Contributing

Contributions are welcome! To get involved:
1. Fork the repository: [github.com/wissemb11/wbc-ui2](https://github.com/wissemb11/wbc-ui2)
2. Create a branch for your changes
3. Submit a pull request

See [CONTRIBUTING.md](https://wbc-ui.com/contributing) for details.

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
