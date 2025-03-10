const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/main.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "js/[name].[contenthash].js",
      publicPath: isProduction ? "/" : "/",
      clean: true,
    },
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    module: {
      rules: [
        { test: /\.vue$/, exclude: /__.*\.vue$/, loader: "vue-loader" },
        { test: /__.*\.(vue|js|ts)$/, loader: "raw-loader" },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env"] },
          },
        },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        {
          test: /\.s[ac]ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg)$/,
          use: {
            loader: "file-loader",
            options: { name: "fonts/[name].[hash][ext]" },
          },
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|apng|avif|tiff|webp|bmp|heic)$/,
          use: {
            loader: "file-loader",
            options: { name: "images/[name].[hash][ext]", esModule: false },
          },
        },
        {
          test: /\.(mp4|webm|ogg|mov|avi|mkv|flv|wmv)$/,
          use: {
            loader: "file-loader",
            options: { name: "videos/[name].[hash][ext]", esModule: false },
          },
        },
        {
          test: /\.(mp3|wav|aiff|flac|m4a|ogg|aac|wma|ape|realaudio)$/,
          use: {
            loader: "file-loader",
            options: { name: "audio/[name].[hash][ext]", esModule: false },
          },
        },
        {
          test: /\.pdf$/,
          use: {
            loader: "file-loader",
            options: { name: "pdfs/[name].[hash][ext]", esModule: false },
          },
        },
        { test: /\.(html|txt|py)$/, use: "raw-loader" },
        { test: /\.(doc|xls|ppt|docx|xlsx|pptx)$/, use: "file-loader" },
        { test: /\.md$/, use: "raw-loader" },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new VuetifyLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/public/index.html"),
        filename: "index.html",
      }),
      new DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(isProduction ? "production" : "development"),
          BASE_URL: JSON.stringify(isProduction ? "/" : "/"),
        },
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, "src/public"),
        publicPath: "/wbc-ui2-files/",
      },
      hot: true,
      port: 8080,
      historyApiFallback: true,
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  };
};
