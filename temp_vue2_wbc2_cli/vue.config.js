const wbcUi2Config = require("wbc-ui2/vue.config.js"); // Import the library's vue.config.js
module.exports = {
  outputDir: "dist",
  publicPath:
    process.env.NODE_ENV === "production" ? "/temp-vue2-wbc2-cli/" : "/",
  transpileDependencies: ["wbc-ui2"],
  chainWebpack: (config) => {
    // Inject wbc-ui2 Webpack rules
    Object.values(webpackRules).forEach((rule) => {
      config.module
        .rule(rule.test.toString())
        .test(rule.test)
        .use(rule.use[0].loader)
        .loader(rule.use[0].loader)
        .options(rule.use[0].options || {});
    });

    // Define extra rules for the root app
    config.module
      .rule("csv")
      .test(/\.csv$/)
      .use("csv-loader")
      .loader("csv-loader");

    config.module
      .rule("yaml")
      .test(/\.ya?ml$/)
      .use("yaml-loader")
      .loader("yaml-loader");
    // Add vuetify-loader plugin for Vuetify compatibility
    // config.plugin("vuetify-loader").use(require("vuetify-loader/lib/plugin"));
    // // Rule for other .vue files to use vue-loader
    // config.module
    //   .rule("vue")
    //   .test(/\.vue$/)
    //   .exclude.add(/__.*\.vue$/) // exclude files starting with "__"
    //   .end()
    //   .use("vue-loader")
    //   .loader("vue-loader")
    //   .end();
    // config.module
    //   .rule("raw-vue")
    //   .test(/__.*\.(vue|js|ts)$/)
    //   .use("raw-loader")
    //   .loader("raw-loader")
    //   .end();
    // // Rule for handling font files
    // config.module
    //   .rule("fonts")
    //   .test(/\.(eot|woff|woff2|ttf|svg)$/)
    //   .use("file-loader")
    //   .loader("file-loader")
    //   .options({
    //     name: "fonts/[name].[hash][ext]", // Output fonts to the 'dist/fonts' directory
    //   });
    // // Rule for pdf files
    // config.module
    //   .rule("pdf")
    //   .test(/\.pdf$/)
    //   .use("file-loader")
    //   .loader("file-loader")
    //   .end();
    // // Rule for `.js` files
    // config.module
    //   .rule("js")
    //   .test(/\.js$/)
    //   .exclude.add(/node_modules/)
    //   .end()
    //   .use("babel-loader")
    //   .loader("babel-loader")
    //   .options({
    //     presets: ["@babel/preset-env"],
    //   });
    // // Rule for `.html` files
    // config.module
    //   .rule("html")
    //   .test(/\.(html|txt|py)$/)
    //   .use("raw-loader")
    //   .loader("raw-loader")
    //   .end();
    // // Process Word, Excel, PowerPoint files
    // config.module
    //   .rule("office-files")
    //   .test(/\.(doc|xls|ppt|docx|xlsx|pptx)$/)
    //   .use("file-loader")
    //   .loader("file-loader")
    //   .end();
    // // Rule for `.html` files
    // config.module
    //   .rule("html")
    //   .test(/\.(html|txt|py)$/)
    //   .use("raw-loader")
    //   .loader("raw-loader")
    //   .end();
    // // Rule for `.md` files
    // config.module
    //   .rule("markdown")
    //   .test(/\.md$/)
    //   .use("raw-loader")
    //   .loader("raw-loader")
    //   .end();
  },
};
