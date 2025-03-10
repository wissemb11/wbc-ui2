const path = require("path");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpackRules = require("./webpack.rules.js");

module.exports = {
  lintOnSave: false,
  transpileDependencies: ["vuetify"],

  // Dynamically set outputDir based on a custom mode

  outputDir:
    process.env.BUILD_MODE === "local"
      ? "dist-local"
      : process.env.NODE_ENV === "app"
      ? "dist-app"
      : "dist",

  publicPath:
    process.env.VUE_APP_PUBLIC_PATH ||
    (process.env.NODE_ENV === "production"
      ? "/wbc-ui2/"
      : process.env.NODE_ENV === "app"
      ? "/"
      : "/"),

  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      /*    return {
        output: {
          filename: "[name].[contenthash].js", // Unique filenames for JS chunks
          chunkFilename: "[name].[contenthash].js", // Unique filenames for async chunks
          library: "wbc-ui2", // Library name
          libraryExport: "default", // Export the default module
          libraryTarget: "umd", // Universal Module Definition (UMD)
          globalObject: 'typeof self !== "undefined" ? self : this', // Ensure compatibility with different environments
        },
        externals: {
          vue: "Vue", // Externalize Vue
          vuetify: "Vuetify", // Externalize Vuetify
        },
        optimization: {
          splitChunks: {
            chunks: "all", // Split all chunks
          },
          runtimeChunk: false, // Disable runtime chunk
        },
        resolve: {
          alias: {
            // If using the runtime only build
            vue$: "vue/dist/vue.runtime.esm.js", // 'vue/dist/vue.runtime.common.js' for webpack 1
            // Or if using full build of Vue (runtime + compiler)
            // vue$: 'vue/dist/vue.esm.js'      // 'vue/dist/vue.common.js' for webpack 1
          },
        },
        plugins: [
          new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css", // Unique filenames for CSS chunks
          }),
          new VuetifyLoaderPlugin(), // Add VuetifyLoaderPlugin here
          new CopyWebpackPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, "src/public"), // Source directory
                to: path.resolve(__dirname, "dist/public"), // Output directory
              },
            ],
          }),
        ],
      };
 */
      /*       return {
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
      ]
    }; */
      return {
        output: {
          filename: "[name].js",
          chunkFilename: "[name].js",
          library: "wbc-ui2",
          libraryExport: "default",
          libraryTarget: "umd",
          globalObject: 'typeof self !== "undefined" ? self : this',
        },
        externals: {
          vue: "Vue",
          vuetify: "Vuetify",
        },
        optimization: {
          splitChunks: false,
          runtimeChunk: false,
        },
        resolve: {
          alias: {
            vue$: "vue/dist/vue.runtime.esm.js",
          },
        },
        plugins: [
          new VuetifyLoaderPlugin(),
          new MiniCssExtractPlugin({
            filename: "styles.css",
          }),
        ],
      };
    } else {
      return {
        devServer: {
          hot: true,
          port: 8080,
          static: {
            directory: path.resolve(__dirname, "src/public"),
            publicPath: "/wbc-ui2-files/",
          },
        },
      };
    }
  },
  chainWebpack: (config) => {
    // if (process.env.NODE_ENV === "production") {
    //   config.plugins.delete("copy");
    // }
    // Object.values(webpackRules).forEach((rule) => {
    //   config.module
    //     .rule(rule.test.toString())
    //     .test(rule.test)
    //     .use(rule.use[0].loader)
    //     .loader(rule.use[0].loader)
    //     .options(rule.use[0].options || {});
    // });

    // config.module
    //   .rule("vue")
    //   .test(/\.vue$/)
    //   .exclude.add(/__.*\.vue$/)
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

    // config.module
    //   .rule("pdf")
    //   .test(/\.pdf$/)
    //   .use("file-loader")
    //   .loader("file-loader")
    //   .end();

    // config.module
    //   .rule("office-files")
    //   .test(/\.(doc|xls|ppt|docx|xlsx|pptx)$/)
    //   .use("file-loader")
    //   .loader("file-loader")
    //   .end();

    // config.module
    //   .rule("html")
    //   .test(/\.(html|txt|py|php)$/)
    //   .use("raw-loader")
    //   .loader("raw-loader")
    //   .end();

    // config.module
    //   .rule("markdown")
    //   .test(/\.md$/)
    //   .use("raw-loader")
    //   .loader("raw-loader")
    //   .end();

    if (process.env.NODE_ENV === "production") {
      config.plugins.delete("copy");
    }

    // Inject webpackRules one by one
    Object.keys(webpackRules).forEach((ruleName) => {
      const rule = webpackRules[ruleName];
      const chainRule = config.module.rule(ruleName).test(rule.test);

      if (rule.exclude) {
        chainRule.exclude.add(rule.exclude).end();
      }

      rule.use.forEach((useConfig) => {
        if (typeof useConfig === "string") {
          chainRule.use(useConfig).loader(useConfig).end();
        } else {
          chainRule
            .use(useConfig.loader)
            .loader(useConfig.loader)
            .options(useConfig.options || {})
            .end();
        }
      });
    });
  },
};
