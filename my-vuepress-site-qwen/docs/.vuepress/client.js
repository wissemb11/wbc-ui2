// import { defineClientConfig } from "@vuepress/client";
// import CustomLink from "./components/CustomLink.vue";
// import DemoComponent from "./components/demo-component.vue";
// import TestComponent from "./components/TestComponent.vue";
// import OtherComponent from "./components/OtherComponent.vue";
// import Bar from "./components/Foo/Bar.vue"; // Nested component

// export default defineClientConfig({
//   enhance({ app }) {
//     // Register components globally
//     app.component("CustomLink", CustomLink);
//     app.component("DemoComponent", DemoComponent);
//     app.component("TestComponent", TestComponent);
//     app.component("OtherComponent", OtherComponent);
//     app.component("FooBar", Bar); // Register nested component as FooBar
//   },
//   setup() {
//     // Optional: Add client-side setup logic if needed
//   },
//   rootComponents: [], // Optional: Add root components if needed
// });

import * as WBC_ui2_plugin from "../../../src/main";
console.log("WBC_ui2_plugin :>> ", WBC_ui2_plugin);
// import { WBC } from "../../../src/main";
// import { WBC } from "wbc-ui2";

import { defineClientConfig } from "@vuepress/client";

// Dynamically import all .vue files from the components directory
const components = import.meta.glob("./components/**/*.vue", { eager: true });

export default defineClientConfig({
  enhance({ app }) {
    // app.component("WBC", WBC);

    app.use(WBC_ui2_plugin);
    // Register each component dynamically
    Object.entries(components).forEach(([path, module]) => {
      // Extract the component name from the file path
      const componentName = path
        .split("/")
        .pop() // Get the filename (e.g., "CustomLink.vue")
        .replace(/\.vue$/, ""); // Remove ".vue" extension

      // Register the component globally using its default export
      app.component(componentName, module.default);
    });
  },
  setup() {
    // Optional: Add client-side setup logic if needed
  },
  rootComponents: [],
});
