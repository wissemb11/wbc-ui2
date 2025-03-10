# WBC-UI2

[![npm version](https://badge.fury.io/js/wbc-ui2.svg)](https://www.npmjs.com/package/wbc-ui2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

WBC-UI2 is a modern, lightweight UI component library built with Vue.js 2.7. It provides a collection of reusable, customizable components designed to accelerate web application development. Built with Vuetify and Bootstrap, it ensures a responsive and consistent user experience across devices.

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
- **Material Design Icons**: `@mdi/font/css/materialdesignicons.css`

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

#### Issue 3: TypeScript Errors

**Cause**: TypeScript cannot resolve `.vue` files or lacks necessary type definitions.

**Solution**:
1. Add a `shims-vue.d.ts` file in the `src` directory:
   ```typescript
   declare module '*.vue' {
     import Vue from 'vue';
     export default Vue;
   }
   ```
2. Update the `tsconfig.json` to include `.vue` files:
   ```json
   {
     "include": [
       "src/**/*.ts",
       "src/**/*.tsx",
       "src/**/*.vue"
     ]
   }
   ```

---

## Development Setup

### Folder Structure

```
wbc-ui2/
├── dist/ # Built output (UMD bundle)
├── src/ # Source code
│ ├── components/ # Vue components
│ │ ├── WBLink.vue
│ │ ├── WBDataViewer.vue
│ │ └── WBAlert.vue
│ ├── main.js # Entry point for the library
│ └── plugins/ # Optional: Plugin files (e.g., Vuetify setup)
├── test-app/ # Root app for testing the module
│ ├── src/
│ │ ├── App.vue
│ │ └── main.js
│ ├── package.json # Package configuration for the root app
│ └── vue.config.js # Webpack configuration for the root app
├── package.json # Package configuration for the library
├── README.md # Documentation
├── tsconfig.json # TypeScript configuration
├── vue.config.js # Webpack configuration for the library
└── .gitignore # Ignore unnecessary files in Git
```

### Build Process

1. Build the library:
   ```bash
   cd wbc-ui2
   npm run build
   ```
2. Start the test application:
   ```bash
   cd test-app
   npm run serve
   ```

---

## Library Configuration (`vue.config.js`)

```javascript
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  outputDir: 'dist',
  configureWebpack: {
    output: {
      filename: 'wbc-ui2.umd.js', // Main library output
      chunkFilename: '[name].[hash].js', // Avoid conflicts in chunk files
      library: 'wbc-ui2',
      libraryExport: 'default',
      libraryTarget: 'umd',
      globalObject: 'typeof self !== "undefined" ? self : this',
    },
    externals: {
      vue: 'Vue', // Treat Vue as an external dependency
    },
    resolve: {
      extensions: ['.ts', '.js', '.vue'], // Support .ts, .js, and .vue files
      alias: {
        '@': path.resolve(__dirname, 'src'), // Alias for the src directory
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'wbc-ui2.css', // Extract CSS into a separate file
      }),
    ],
  },
  chainWebpack: (config) => {
    config.optimization.splitChunks(false);
    config.optimization.runtimeChunk(false);

    // Rule for handling .ts files
    config.module
      .rule('ts')
      .test(/\.ts`/)
      .use('ts-loader')
      .loader('ts-loader')
      .options({
        appendTsSuffixTo: [/\.vue`/], // Handle .vue files with embedded TypeScript
      });

    // Rule for handling .vue files
    config.module
      .rule('vue')
      .test(/\.vue`/)
      .use('vue-loader')
      .loader('vue-loader');

    // Rule for handling CSS files
    config.module
      .rule('css')
      .test(/\.css`/)
      .use('style-loader')
      .loader('style-loader')
      .end()
      .use('css-loader')
      .loader('css-loader')
      .end()
      .use('postcss-loader')
      .loader('postcss-loader');

    // Rule for handling SCSS files
    config.module
      .rule('scss')
      .test(/\.scss`/)
      .use('style-loader')
      .loader('style-loader')
      .end()
      .use('css-loader')
      .loader('css-loader')
      .end()
      .use('sass-loader')
      .loader('sass-loader');

    // Rule for handling font files
    config.module
      .rule('fonts')
      .test(/\.(eot|woff|woff2|ttf|svg)`/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'fonts/[name].[hash][ext]',
      });

    // Rule for handling image files
    config.module
      .rule('images')
      .test(/\.(png|jpg|jpeg|gif|svg|apng|avif|tiff|webp|bmp|heic)`/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'images/[name].[hash][ext]',
      });

    // Add vuetify-loader plugin for Vuetify compatibility
    config.plugin('vuetify-loader').use(require('vuetify-loader/lib/plugin'));
  },
};
```

---

## Root Application Configuration (`vue.config.js`)

```javascript
module.exports = {
  transpileDependencies: ['wbc-ui2'], // Ensure the library is properly transpiled
};
```

---

## TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "es5", // Ensure compatibility with older browsers
    "module": "esnext", // Use ESNext module format
    "strict": true, // Enable strict type-checking
    "esModuleInterop": true, // Allow interoperability with CommonJS modules
    "forceConsistentCasingInFileNames": true, // Enforce consistent casing
    "skipLibCheck": true, // Skip type checking for .d.ts files
    "sourceMap": true, // Generate source maps
    "moduleResolution": "node", // Resolve modules using Node.js resolution algorithm
    "resolveJsonModule": true, // Allow importing JSON files
    "allowSyntheticDefaultImports": true, // Allow default imports from modules without default exports
    "baseUrl": "./", // Base directory for resolving non-relative module names
    "paths": {
      "@/*": ["src/*"] // Alias for the 'src' directory
    }
  },
  "include": [
    "src/**/*.ts", // Include all TypeScript files in 'src'
    "src/**/*.tsx", // Include TSX files (if applicable)
    "src/**/*.vue" // Include Vue files with embedded TypeScript
  ],
  "exclude": [
    "node_modules", // Exclude third-party libraries
    "dist" // Exclude the build output directory
  ]
}
```

---

## Contributing

 Contributions are welcome! If you'd like to contribute to `wbc-ui2`, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure all tests pass.
4. Submit a pull request detailing your changes.

For more details, see the [Contribution Guidelines](CONTRIBUTING.md).

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