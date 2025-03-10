// /**
//  * Client app enhancement file.
//  *
//  * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
//  */

// export default ({
//   Vue, // the version of Vue being used in the VuePress app
//   options, // the options for the root Vue instance
//   router, // the router instance for the app
//   siteData // site metadata
// }) => {
//   // ...apply enhancements for the site.
// }

// if (typeof global === "undefined") {
//   window.global = window;
// }

import JsonViewer from "vue-json-viewer";

// Import JsonViewer as a Vue.js plugin

alert("aaaaaaaaaaaa");
// Import your WBC-ui2 plugin
// import * as WBC_ui2_plugin from "../../../src/main";
import * as WBC_ui2_plugin from "wbc-ui2/src/main";
// import { WBC } from "../../../src/main";
// import { WBC } from "wbc-ui2";
// console.log("WBC :>> ", WBC);
// console.log("WBC_ui2_plugin :>> ", WBC_ui2_plugin);

// Dynamically import components using Webpack's require.context
let components = require.context("./components", true, /\.vue$/);

components["JsonViewer"] = JsonViewer;
// components["WBC"] = WBC;

export default ({ Vue }) => {
  // Use the WBC-ui2 plugin
  Vue.use(WBC_ui2_plugin);
  // Vue.component(WBC, WBC);

  Vue.use(JsonViewer);

  // Register each component dynamically
  components.keys().forEach((filePath) => {
    const componentConfig = components(filePath);
    const componentName = filePath
      .split("/")
      .pop() // Get the filename (e.g., "CustomLink.vue")
      .replace(/\.vue$/, ""); // Remove ".vue" extension

    // Register the component globally using its default export
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
};
