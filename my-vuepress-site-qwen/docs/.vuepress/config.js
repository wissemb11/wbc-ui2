const path = require("path");

module.exports = {
  // Basic config
  base: "/",
  title: "My VuePress Site",
  description: "A VuePress 1.x template with styled sidebar",

  // Head configuration (meta tags, favicons, etc.)
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: "/icons/apple-touch-icon-152x152.png" },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
      },
    ],
  ],

  // Theme configuration
  themeConfig: {
    logo: "/logo.png",

    // Navbar configuration
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs0", link: "/0_wbc-ui2-setup-overview" },
      { text: "Docs1", link: "/1_wbc-ui2-integration-options" },
      { text: "GitHub", link: "https://github.com/wissemb11/wbc-ui2" },
      { text: "Demo", link: "https://wbc-ui2-demo-app.vercel.app" },
    ],

    // Sidebar configuration
    sidebar: {
      "/guide/": [
        {
          title: "🚀 Getting Started",
          path: "/guide/getting-started",
        },
        {
          title: "📚 Documentation",
          collapsable: true,
          children: [
            { title: "Guide", path: "/guide/" },
            { title: "API Reference", path: "/api/" },
          ],
        },
        {
          title: "GitHub",
          path: "https://github.com/your-repo",
        },
      ],
      "/": [
        { title: "Home", path: "/" },
        { title: "Installation", path: "/installation" },
        {
          title: "Guide",
          collapsable: true,
          children: [
            {
              title: "Setup Overview1",
              collapsable: true,
              children: [
                { title: "Setup Overview", path: "/0_wbc-ui2-setup-overview" },
                {
                  title: "Integration Options",
                  path: "/1_wbc-ui2-integration-options",
                },
              ],
            },
            {
              title: "Integration Options",
              path: "/1_wbc-ui2-integration-options",
            },
          ],
        },
      ],
    },

    // Optional: Add a search box
    search: true,
    searchMaxSuggestions: 10,
  },

  // Plugins configuration
  plugins: [
    "@vuepress/search", // Enable the built-in search plugin
  ],
  configureWebpack: {
    node: {
      process: true, // Polyfill `process`
      global: true, // Polyfill `global`
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "/"), // Point `@` to the root directory
      },
    },
  },
  // chainWebpack(config) {
  //   config.module
  //     .rule("vue")
  //     .test(/\.vue$/)
  //     .exclude.add(/__.*\.vue$/)
  //     .end()
  //     .use("vue-loader")
  //     .loader("vue-loader")
  //     .end();

  //   config.module
  //     .rule("raw-vue")
  //     .test(/__.*\.(vue|js|ts)$/)
  //     .use("raw-loader")
  //     .loader("raw-loader")
  //     .end();

  //   config.module
  //     .rule("js")
  //     .test(/\.js$/)
  //     .exclude.add(/node_modules/)
  //     .end()
  //     .use("babel-loader")
  //     .loader("babel-loader")
  //     .options({
  //       presets: ["@babel/preset-env"],
  //     });

  //   config.module
  //     .rule("pdf")
  //     .test(/\.pdf$/)
  //     .use("file-loader")
  //     .loader("file-loader")
  //     .end();

  //   config.module
  //     .rule("office-files")
  //     .test(/\.(doc|xls|ppt|docx|xlsx|pptx)$/)
  //     .use("file-loader")
  //     .loader("file-loader")
  //     .end();

  //   config.module
  //     .rule("html")
  //     .test(/\.(html|txt|py|php)$/)
  //     .use("raw-loader")
  //     .loader("raw-loader")
  //     .end();

  //   config.module
  //     .rule("markdown")
  //     .test(/\.md$/)
  //     .use("raw-loader")
  //     .loader("raw-loader")
  //     .end();
  // },
};
