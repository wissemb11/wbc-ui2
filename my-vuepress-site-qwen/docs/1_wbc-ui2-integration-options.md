# WBC-UI2 Integration Options

This document explains the various ways to integrate the `wbc-ui2` library into a root application. The library, built with Vue.js and outputting both UMD and ESM formats via `npm run build` into the `dist` folder (`dist/wbc-ui2.umd.js` and `dist/wbc-ui2.esm.js`), is highly versatile. It supports integration through classic imports, module bundlers, CDNs, and direct `<script>` tags.


---

## Overview

Your `npm run build` command generates a UMD/ESM module, making `wbc-ui2` compatible with multiple integration methods. Below are the supported approaches, each with examples and setup details based on your `package.json` and `vue.config.js` configuration.

---

## 1. Classic Method (Local or npm Import)

This method works for Vue 2 apps without a module bundler or when referencing built files directly.

### Example
```javascript
import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;

import * as WBC_ui2_plugin from "../../src/main"; // Local dev path
// OR
// import * as WBC_ui2_plugin from "wbc-ui2"; // After installing via npm

Vue.use(WBC_ui2_plugin, {}); // Register the plugin with options (if any)

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

### How It Works
- **Local Path**: `../../src/main` is valid during development if `main.js` exports your plugin logic (e.g., an `install` method for `Vue.use`).
- **Published Module**: After `npm run build`, `dist/wbc-ui2.umd.js` is the entry point (per `"main": "dist/wbc-ui2.umd.js"` in `package.json`). When published to npm as `wbc-ui2`, the import resolves to this UMD file.
- **Requirement**: `src/main.js` must export an object with an `install` method, e.g.:
  ```javascript
  // src/main.js
  import { MyComponent } from './components/MyComponent.vue';

  const WBCUI2 = {
    install(Vue, options) {
      Vue.component('wbc-button', MyComponent);
    }
  };

  export default WBCUI2;
  ```
- **Compatibility**: Fully supported once published or installed locally.

---

## 2. Using Module Bundlers (Webpack, Rollup, Vite)

Modern JavaScript projects with bundlers can use the ESM (`dist/wbc-ui2.esm.js`) or UMD (`dist/wbc-ui2.umd.js`) outputs.

### Example with Webpack/Vite
```javascript
// main.js in the root app
import Vue from 'vue';
import App from './App.vue';
import WBCUI2 from 'wbc-ui2'; // Resolves to dist/wbc-ui2.esm.js or dist/wbc-ui2.umd.js
import 'wbc-ui2/dist/styles.css'; // Include styles if extracted separately

Vue.use(WBCUI2);

new Vue({
  render: h => h(App),
}).`mount('#app');
```

### Setup
1. Install the library:
   ```bash
   npm install wbc-ui2
   ```
2. Ensure the root app includes `vue` and `vuetify` as dependencies (externals in your build).
3. The bundler chooses `dist/wbc-ui2.esm.js` (ESM-compatible tools like Vite) or `dist/wbc-ui2.umd.js` (CommonJS/UMD compatibility).

### Configuration Notes
- **Externals**: `vue.config.js` marks `vue` and `vuetify` as externals:
  ```javascript
  externals: {
    vue: "Vue",
    vuetify: "Vuetify",
  }
  ```
  The root app must provide these.
- **Styles**: Import `dist/styles.css` if `MiniCssExtractPlugin` extracts styles.

### Compatibility
- Supported for modern (ESM) and legacy (UMD) bundlers.

---

## 3. CDN (unpkg or jsDelivr)

The UMD build (`dist/wbc-ui2.umd.js`) can be served via a CDN.

### Example with unpkg
```html
<!DOCTYPE html>
<html>
<head>
  <link href="https://unpkg.com/vuetify@2.7.2/dist/vuetify.min.css" rel="stylesheet">
  <link href="https://unpkg.com/wbc-ui2@1.0.0/dist/styles.css" rel="stylesheet">
</head>
<body>
  <div id="app">
    <!-- Use your components, e.g., <wbc-button> -->
  </div>

  <script src="https://unpkg.com/vue@2.7.16/dist/vue.min.js"></script>
  <script src="https://unpkg.com/vuetify@2.7.2/dist/vuetify.min.js"></script>
  <script src="https://unpkg.com/wbc-ui2@1.0.0/dist/wbc-ui2.umd.js"></script>
  <script>
    Vue.use(WBCUI2); // Global variable from UMD

    new Vue({
      vuetify: new Vuetify(),
      el: '#app',
      template: '<div><wbc-button>Click Me</wbc-button></div>',
    });
  </script>
</body>
</html>
```

### Setup
1. Publish to npm (`npm publish`).
2. Use a CDN:
   - unpkg: `https://unpkg.com/wbc-ui2@1.0.0/dist/wbc-ui2.umd.js`
   - jsDelivr: `https://cdn.jsdelivr.net/npm/wbc-ui2@1.0.0/dist/wbc-ui2.umd.js`
3. Include `vue` and `vuetify` via CDN (externals).

### Configuration Notes
- **UMD Output**: `libraryTarget: "umd"` and `library: "wbc-ui2"` expose `WBCUI2` globally.
- **Global Object**: `globalObject: 'typeof self !== "undefined" ? self : this'` ensures browser/Node.js compatibility.

### Compatibility
- Fully supported with CDNs.

---

## 4. Direct `<script>` Tag (Local File)

Use the built file directly without a CDN.

### Example
```html
<!DOCTYPE html>
<html>
<head>
  <link href="/path/to/vuetify.min.css" rel="stylesheet">
  <link href="/dist/styles.css" rel="stylesheet">
</head>
<body>
  <div id="app">
    <!-- Use your components -->
  </div>

  <script src="/path/to/vue.min.js"></script>
  <script src="/path/to/vuetify.min.js"></script>
  <script src="/dist/wbc-ui2.umd.js"></script>
  <script>
    Vue.use(WBCUI2);

    new Vue({
      vuetify: new Vuetify(),
      el: '#app',
      template: '<div><wbc-button>Click Me</wbc-button></div>',
    });
  </script>
</body>
</html>
```

### Setup
- Serve `dist/wbc-ui2.umd.js` and `dist/styles.css` after `npm run build`.
- Include `vue` and `vuetify` scripts beforehand.

### Compatibility
- Supported due to UMD build design.

---

## 5. Other Ways

### Global Registration in a Non-Vue Project
Use components in a non-Vue app with vanilla JS:
- Load via `<script>` or CDN.
- Access components via `WBCUI2` (e.g., `WBCUI2.components.MyComponent`).

#### Example
```html
<script src="/dist/wbc-ui2.umd.js"></script>
<script>
  console.log(WBCUI2); // Access plugin object
</script>
```
- Requires `main.js` to export additional utilities.

---

## Documentation Update

Update your `README.md` with these options:

```markdown```
## Installation

### Via npm (Module Bundlers)
```bash
npm install wbc-ui2
```
```javascript
import Vue from 'vue';
import WBCUI2 from 'wbc-ui2';
import 'wbc-ui2/dist/styles.css';

Vue.use(WBCUI2);
new Vue({ ... });
```

### Via CDN
```html
<script src="https://unpkg.com/vue@2.7.16/dist/vue.min.js"></script>
<script src="https://unpkg.com/vuetify@2.7.2/dist/vuetify.min.js"></script>
<script src="https://unpkg.com/wbc-ui2@1.0.0/dist/wbc-ui2.umd.js"></script>
<script>
  Vue.use(WBCUI2);
  new Vue({ ... });
</script>
```

### Via Script Tag
```html
<script src="/dist/wbc-ui2.umd.js"></script>
<script>
  Vue.use(WBCUI2);
  new Vue({ ... });
</script>
```

---
