# WBC-UI2

[![npm version](https://badge.fury.io/js/wbc-ui2.svg)](https://www.npmjs.com/package/wbc-ui2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

WBC-UI2 is a dynamic and lightweight UI component library designed for Vue.js applications. It enables the creation, management, and transformation of UI elements using JavaScript or JSON objects. WBC-UI2 provides flexible and reactive components that integrate seamlessly with Vue, Vuetify, and other UI frameworks.

WBC-UI2 can be used independently or as part of **WBJS2** and **WB-Table2**, offering enhanced control over structured UI components and tables.

---

## Table of Contents

- [WBC-UI2](#wbc-ui2)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
    - [1. Import the Library](#1-import-the-library)
    - [2. Use Components in Your Application](#2-use-components-in-your-application)
  - [Configuration](#configuration)
  - [Examples](#examples)
    - [Dynamic UI with JSON](#dynamic-ui-with-json)
  - [Troubleshooting](#troubleshooting)
    - [Vue Not Found Error](#vue-not-found-error)
    - [Missing Styles](#missing-styles)
  - [License](#license)

---

## Features

- **Component-Based UI**: Create, control, and transform HTML, CSS, and JavaScript elements dynamically.
- **JSON & JavaScript Control**: Manage UI components entirely through JavaScript or JSON.
- **Reactive & Dynamic**: Components update automatically based on data changes.
- **Event & Backend Integration**: Supports event handling and backend interaction.
- **Extensible**: Works with external UI component libraries like Vuetify and BootstrapVue.
- **Minimal HTML/CSS Requirement**: Focus on logic without excessive markup.

---

## Installation

To install `wbc-ui2`, use npm:

```bash
npm install wbc-ui2
```

Ensure that Vue 2.7 is installed in your project:

```bash
npm install vue@2.7.16 vue-template-compiler@2.7.16
```

---

## Usage

### 1. Import the Library

In your `main.js` file, register WBC-UI2:

```javascript
import Vue from 'vue';
import App from './App.vue';
import * as WBC_ui2_plugin from 'wbc-ui2';

Vue.use(WBC_ui2_plugin);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
```

### 2. Use Components in Your Application

```vue
<template>
  <div>
    <WBC :item="{ tag: 'button', text: 'Click Me', on: { click: () => alert('Clicked!') } }" />
  </div>
</template>
```

---

## Configuration

You can customize WBC-UI2 globally:

```javascript
Vue.use(WBC_ui2_plugin, {
  uiFramework: 'vuetify', // or 'bootstrap'
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
  },
});
```

---

## Examples

### Dynamic UI with JSON

```vue
<template>
  <WBC :item="{
    tag: 'div',
    children: [
      { tag: 'h1', text: 'Hello, World!' },
      { tag: 'button', text: 'Click Me', on: { click: () => alert('Clicked!') } }
    ]
  }" />
</template>
```

---

## Troubleshooting

### Vue Not Found Error

Ensure Vue is correctly installed:

```bash
npm install vue@2.7.16 vue-template-compiler@2.7.16
```

### Missing Styles

Manually import Vuetify styles if needed:

```javascript
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
```

---

## License

WBC-UI2 is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

