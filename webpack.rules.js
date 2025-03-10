// wbc-ui2/webpack-rules.js
const webpackRules = {
  vue: {
    test: /\.vue$/,
    exclude: /__.*\.vue$/,
    use: ["vue-loader"],
  },
  rawVue: {
    test: /__.*\.(vue|js|ts)$/,
    use: ["raw-loader"],
  },
  js: {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
  pdf: {
    test: /\.pdf$/,
    use: ["file-loader"],
  },
  officeFiles: {
    test: /\.(doc|xls|ppt|docx|xlsx|pptx)$/,
    use: ["file-loader"],
  },
  html: {
    test: /\.(html|txt|py|php)$/,
    use: ["raw-loader"],
  },
  markdown: {
    test: /\.md$/,
    use: ["raw-loader"],
  },
};

module.exports = webpackRules;
