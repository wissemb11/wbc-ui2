# Vuetify 2.7 CLI Template

This is a minimal starter template for building applications with Vuetify 2.7 and Vue.js 2 using Vue CLI's `vue.config.js` for customization.

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- `Vuetify 2.7`: Fully integrated with Vuetify for Material Design components.
- `Vue Router`: Basic routing setup with Home and About pages.
- `Vuex`: State management included (optional).
- `ESLint`: Code quality checks with configurable rules.
- `SCSS Support`: Ready to use SCSS for global styles.
- Minimal Setup: Lightweight and easy to extend.

---

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- `Node.js`: Version 12 or higher (recommended: v16.x). You can download it from [here](https://nodejs.org/).
- `npm` or `yarn`: Comes bundled with Node.js.
- `Vue CLI`: Install it globally if not already installed:
  ```
  npm install -g @vue/cli
  ```

---

## Getting Started

Follow these steps to set up and run the project locally:

1. `Clone the Repository`:
   ```
   git clone https://github.com/wissemb11/vuetify-2.7-vue-config-cli-template.git
   cd vuetify-2.7-template
   ```

2. `Install Dependencies`:
   ```
   npm install
   ```

3. `Run the Development Server`:
   ```
   npm run serve
   ```
   Open your browser and navigate to [http://localhost:8080](http://localhost:8080).

4. `Build for Production`:
   To build the project for production, run:
   ```
   npm run build
   ```

---

## Project Structure

Here`s an overview of the project structure:

```
vuetify-2.7-template/
├── node_modules/          # Project dependencies               
├── src/                   # Source code
│   ├── assets/            # Global styles and assets
│   ├── components/        # Reusable Vue components
│   ├── plugins/           # Plugin configurations (e.g., Vuetify)
│   ├── router/            # Vue Router configuration
│   ├── store/             # Vuex store configuration
│   ├── public/            # Static assets
│   ├── views/             # Page-level components (Home, About)
│   ├── App.vue            # Root component
│   └── main.js            # Entry point
├── .eslintrc.js           # ESLint configuration
├── babel.config.js        # Babel configuration
├── package.json           # Project metadata and dependencies
├── vue.config.js          # Vue CLI configuration
└── README.md              # This file
```

---

## Customization

### Adding New Pages
To add a new page:
1. Create a new `.vue` file in the `src/views/` directory.
2. Register the route in `src/router/index.js`.

Example:
```
// src/router/index.js
const routes = [
  { path: '/new-page', component: () => import('`@/views/NewPage.vue`'), name: 'NewPage' }
];
```

### Modifying Vuetify Theme
Edit the theme settings in `src/plugins/vuetify.js`:
```
export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  }
});
```

### Disabling ESLint
If you don`t need ESLint, disable it in `vue.config.js`:
```
module.exports = {
  lintOnSave: false
};
```

---

## Contributing

Feel free to fork this repository and submit pull requests with improvements or bug fixes. For major changes, please open an issue first to discuss what you`d like to change.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Vuetify](https://vuetifyjs.com/) - Material Design framework for Vue.js.
- [Vue CLI](https://cli.vuejs.org/) - Opinionated scaffolding for Vue.js projects.
