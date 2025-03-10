# temp-vue2-wbc2-cli

[![npm version](https://badge.fury.io/js/wbc-ui2.svg)](https://www.npmjs.com/package/wbc-ui2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**temp-vue2-wbc2-cli** is a simple Vue 2.7 template showcasing the `WBC-UI2` library’s `WBC` micro-component. Built on Vue.js 2.7, this project demonstrates how to integrate `WBC-UI2` for dynamic, JS/JSON-driven UI development with support for diverse file types (images, audio, video, PDFs, Office files, Markdown, etc.). Pre-injected with `vue-router`, `vuex`, and `vuetify`, it’s a lightweight starting point for responsive applications. The `WBC` component is also compatible with `WBJS2` and `WB-Table2` for advanced functionality.

---

## Table of Contents

1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Usage](#usage)
6. [Examples](#examples)
7. [Troubleshooting](#troubleshooting)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

---

## Features

- **WBC Micro-Component**: Generate UIs dynamically using JS/JSON with `WBC-UI2`.
- **File Type Support**: Handles images, audio, video, PDFs, Office files (Word, Excel, PowerPoint), Markdown, and more.
- **Pre-Injected Modules**: `vue-router`, `vuex`, and `vuetify` included via `WBC-UI2`—no manual setup needed.
- **Webpack Simplicity**: Quick setup with `webpack serve` and `webpack build`.
- **Responsive Design**: Built-in `vuetify` styling for mobile-friendly layouts.
- **Extensible**: Compatible with `WBJS2` and `WB-Table2` for advanced use cases.

---

## Project Structure

```
temp-vue2-wbc2-cli/
├── src/
│   ├── public/
│   │   ├── index.html
│   │   └── sample.pdf
│   ├── components/
│   │   └── ExampleComponent.vue
│   ├── router/
│   │   └── index.js
│   ├── store/
│   │   └── index.js
│   ├── views/
│   │   ├── Home.vue
│   │   └── About.vue
│   ├── App.vue
│   └── main.js
├── package.json
├── webpack.config.js
└── README.md
```

> **Note**: Static files (e.g., `index.html`, `sample.pdf`) are in `src/public/`, not the root `public/`.

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

### webpack.config.js

The `webpack.config.js` file is customized to support a wide range of file types and a custom static file path:

```javascript
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].[contenthash].js',
      publicPath: isProduction ? '/temp-vue2-wbc2-cli/' : '/',
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: { '@': path.resolve(__dirname, 'src') },
    },
    module: {
      rules: [
        { test: /\\.vue`/, exclude: /__.*\\.vue`/, loader: 'vue-loader' },
        { test: /__.*\\.(vue|js|ts)`/, loader: 'raw-loader' },
        { test: /\\.js`/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } },
        { test: /\\.css`/, use: ['style-loader', 'css-loader'] },
        { test: /\\.s[ac]ss`/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\\.(eot|woff|woff2|ttf|svg)`/, use: { loader: 'file-loader', options: { name: 'fonts/[name].[hash][ext]' } } },
        { test: /\\.(png|jpg|jpeg|gif|svg|apng|avif|tiff|webp|bmp|heic)`/, use: { loader: 'file-loader', options: { name: 'images/[name].[hash][ext]', esModule: false } } },
        { test: /\\.(mp4|webm|ogg|mov|avi|mkv|flv|wmv)`/, use: { loader: 'file-loader', options: { name: 'videos/[name].[hash][ext]', esModule: false } } },
        { test: /\\.(mp3|wav|aiff|flac|m4a|ogg|aac|wma|ape|realaudio)`/, use: { loader: 'file-loader', options: { name: 'audio/[name].[hash][ext]', esModule: false } } },
        { test: /\\.pdf`/, use: { loader: 'file-loader', options: { name: 'pdfs/[name].[hash][ext]', esModule: false } } },
        { test: /\\.(html|txt|py)`/, use: 'raw-loader' },
        { test: /\\.(doc|xls|ppt|docx|xlsx|pptx)`/, use: 'file-loader' },
        { test: /\\.md`/, use: 'raw-loader' },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new VuetifyLoaderPlugin(),
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/public/index.html'), filename: 'index.html' }),
      new DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development'),
          BASE_URL: JSON.stringify(isProduction ? '/temp-vue2-wbc2-cli/' : '/'),
        },
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'src/public'),
        publicPath: '/wbc-ui2-files/',
      },
      hot: true,
      port: 8080,
      historyApiFallback: true,
    },
    optimization: { splitChunks: { chunks: 'all' } },
  };
};
```

#### Additional Dependencies
Install these for Webpack:
```bash
npm install --save-dev vue-loader vuetify-loader html-webpack-plugin webpack webpack-cli webpack-dev-server file-loader raw-loader babel-loader @babel/preset-env css-loader style-loader sass sass-loader
```

#### Development Server Configuration
Static files from `src/public/` are served under `/wbc-ui2-files/` in development:
```javascript
devServer: {
  static: {
    directory: path.resolve(__dirname, 'src/public'),
    publicPath: '/wbc-ui2-files/',
  },
  hot: true,
  port: 8080,
  historyApiFallback: true,
},
```
Note: Imported files (e.g., PDFs, images) use `file-loader` paths (e.g., `/pdfs/...`) based on `output.publicPath`.

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

### Display an Image
```vue
<template>
  <WBC :item="'./kitchen.jpeg'"></WBC>
</template>
```

### Play Audio
```vue
<template>
  <WBC :item="'./0.mp3'"></WBC>
</template>
```

---

## Troubleshooting

### Error: HtmlWebpackPlugin Can't Resolve 'src/public/index.html'
- **Cause**: The `src/public/index.html` file is missing or misplaced.
- **Solution**: Ensure `src/public/index.html` exists:
  ```bash
  mkdir -p src/public && echo '<!DOCTYPE html><html><head><title>WBC-UI2 Template</title></head><body><div id=\"app\"></div></body></html>' > src/public/index.html
  ```

### Error: Uncaught ReferenceError: process is not defined in router
- **Cause**: `src/router/index.js` uses `process.env.BASE_URL`, which wasn’t defined.
- **Solution**: Updated `webpack.config.js` to define `process.env.BASE_URL`:
  ```javascript
  new DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development'),
      BASE_URL: JSON.stringify(isProduction ? '/temp-vue2-wbc2-cli/' : '/'),
    },
  }),
  ```

### Error: Image/Audio/Video/PDF src Shows [object Module]
- **Cause**: Webpack 5’s `file-loader` returns an ES Module, but `wbc-ui2` expects a URL string.
- **Solution**: Set `esModule: false` in `file-loader` options for media and PDF rules:
  ```javascript
  {
    test: /\\.pdf`/,
    use: {
      loader: 'file-loader',
      options: {
        name: 'pdfs/[name].[hash][ext]',
        esModule: false,
      },
    },
  },
  ```
  Apply similarly to image, audio, and video rules.

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
