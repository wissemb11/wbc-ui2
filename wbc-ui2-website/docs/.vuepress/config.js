// module.exports = {
//   title: "WBC-UI2 Documentation",
//   description: "A Vue.js UI Component Library",
//   base: "/wbc-ui2/#", // Matches your GitHub Pages deployment path
//   themeConfig: {
//     nav: [
//       { text: "Home", link: "/" },
//       { text: "Docs0", link: "0_wbc_ui2_setup_overview" },
//       { text: "Docs1", link: "1-wbc-ui2-integration-options" },
//       { text: "GitHub", link: "https://github.com/wissemb11/wbc-ui2" },
//       { text: "Demo", link: "https://wbc-ui2-demo-app.vercel.app" }, // Optional
//     ],
//     // sidebar: [
//     //   "0_wbc_ui2_setup_overview",
//     //   "1-wbc-ui2-integration-options",
//     //   // "/2_wbc-ui2-getting-started/",
//     //   // "/3_wbc-ui2-components/",
//     //   // "/4_wbc-ui2-configuration/",
//     //   // "/5_wbc-ui2-advanced-usage/",
//     //   // "/6_wbc-ui2-tutorials/",
//     //   // "/7_wbc-ui2-faq/",
//     //   // "/8_wbc-ui2-contributing/",
//     //   // "/9_wbc-ui2-changelog/",
//     //   // "/10_wbc-ui2-api-reference/",
//     // ],
//     sidebar: [
//       { text: "Home", link: "/" },
//       // { text: "Docs0", link: "0_wbc_ui2_setup_overview" },
//       // { text: "Docs1", link: "1-wbc-ui2-integration-options" },
//       { text: "GitHub", link: "https://github.com/wissemb11/wbc-ui2" },
//       { text: "Demo", link: "https://wbc-ui2-demo-app.vercel.app" }, // Optional
//     ],
//   },
// };

// module.exports = {
//   title: "WBC-UI2 Documentation",
//   description: "A Vue.js UI Component Library",
//   base: "/wbc-ui2/", // Matches your GitHub Pages deployment path
//   themeConfig: {
//     nav: [
//       { text: "Home", link: "/" },
//       { text: "Docs0", link: "/0_wbc_ui2_setup_overview" },
//       { text: "Docs1", link: "/1-wbc-ui2-integration-options" },
//       { text: "GitHub", link: "https://github.com/wissemb11/wbc-ui2" },
//       { text: "Demo", link: "https://wbc-ui2-demo-app.vercel.app" }, // Optional
//     ],
//     sidebar: [
//       {
//         title: "Guide", // Group title
//         collapsable: !false, // Make the group non-collapsible
//         children: [
//           // { title: "Home", path: "/" }, // Home page
//           { title: "Setup Overview", path: "/0_wbc_ui2_setup_overview" },
//           {
//             title: "Integration Options",
//             path: "1-wbc-ui2-integration-options",
//           },
//         ],
//       },
//     ],
//   },
// };

import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

import { webpackBundler } from "@vuepress/bundler-webpack";

export default defineUserConfig({
  // Required: Specify the theme
  theme: defaultTheme({
    navbar: [
      { text: "Home", link: "/", className: "custom-home" },
      { text: "Docs0", link: "/0_wbc-ui2-setup-overview" },
      { text: "Docs1", link: "/1_wbc-ui2-integration-options" },
      { text: "GitHub", link: "https://github.com/wissemb11/wbc-ui2" },
      { text: "Demo", link: "https://wbc-ui2-demo-app.vercel.app" },
    ],
    sidebar: [
      { text: "Home", link: "/", className: "custom-home" },
      {
        text: "Guide",
        children: [
          { text: "Setup Overview", link: "/0_wbc-ui2-setup-overview" },
          {
            text: "Integration Options",
            link: "/1_wbc-ui2-integration-options",
          },
        ],
      },
    ],
  }),

  // Optional: Specify the bundler (default is vite)
  bundler: webpackBundler(), // Use Webpack bundler

  // Other configurations
  title: "WBC-UI2 Documentation",
  description: "A Vue.js UI Component Library",
  base: "/wbc-ui2/",
});
