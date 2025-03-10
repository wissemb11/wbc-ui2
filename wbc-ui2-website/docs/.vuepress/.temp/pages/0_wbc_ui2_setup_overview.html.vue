<template><div><h1 id="wbc-ui2-setup-overview" tabindex="-1"><a class="header-anchor" href="#wbc-ui2-setup-overview"><span>WBC-UI2 Setup Overview</span></a></h1>
<p>This document provides an overview of the <code v-pre>wbc-ui2</code> project based on its <code v-pre>package.json</code> and <code v-pre>vue.config.js</code> files, as well as the commands provided. It includes a breakdown of the configuration, observations, and suggestions for improvement.</p>
<hr>
<h2 id="overview-of-the-project" tabindex="-1"><a class="header-anchor" href="#overview-of-the-project"><span>Overview of the Project</span></a></h2>
<ul>
<li><strong>Project Name</strong>: <code v-pre>wbc-ui2</code></li>
<li><strong>Purpose</strong>: A lightweight UI component library built with Vue.js, Vuetify, and Bootstrap.</li>
<li><strong>Output Formats</strong>:
<ul>
<li>A UMD/ESM module for use in other apps (<code v-pre>dist</code> folder).</li>
<li>A standalone app for local testing (<code v-pre>dist-local</code>) or deployment (<code v-pre>dist-app</code>).</li>
</ul>
</li>
<li><strong>Key Features</strong>:
<ul>
<li>Reusable, customizable components.</li>
<li>JSON-driven UI, DOM manipulation, and backend integration.</li>
<li>Support for file previews (PDF, Office files, Markdown, etc.).</li>
</ul>
</li>
<li><strong>Deployment</strong>: Hosted on GitHub Pages.</li>
</ul>
<hr>
<h2 id="package-json-breakdown" tabindex="-1"><a class="header-anchor" href="#package-json-breakdown"><span><code v-pre>package.json</code> Breakdown</span></a></h2>
<h3 id="key-fields" tabindex="-1"><a class="header-anchor" href="#key-fields"><span>Key Fields</span></a></h3>
<ol>
<li>
<p><strong>Dependencies</strong>:</p>
<ul>
<li>Core: <code v-pre>vue</code>, <code v-pre>vuetify</code>, <code v-pre>bootstrap</code>, <code v-pre>vue-router</code>, <code v-pre>vuex</code>.</li>
<li>Utilities: <code v-pre>vue-cookies</code>, <code v-pre>vue-cryptojs</code>, <code v-pre>moment-timezone</code>.</li>
<li>File Previews: <code v-pre>@vue-office/docx</code>, <code v-pre>@vue-office/excel</code>, <code v-pre>pdfvuer</code>.</li>
<li>Code/Markdown: <code v-pre>vue-codemirror</code>, <code v-pre>markdown-it</code>, <code v-pre>turndown</code>.</li>
<li>JSON Viewer: <code v-pre>vue-json-viewer</code>.</li>
</ul>
</li>
<li>
<p><strong>Dev Dependencies</strong>:</p>
<ul>
<li>Build Tools: <code v-pre>@vue/cli-service</code>, <code v-pre>vue-loader</code>, <code v-pre>sass-loader</code>, <code v-pre>babel-loader</code>.</li>
<li>Plugins: <code v-pre>vuetify-loader</code>, <code v-pre>mini-css-extract-plugin</code>, <code v-pre>copy-webpack-plugin</code>.</li>
</ul>
</li>
<li>
<p><strong>Scripts</strong>:</p>
<ul>
<li><code v-pre>serve</code>: Runs a development server with hot reloading.</li>
<li><code v-pre>build</code>: Builds a UMD/ESM module into <code v-pre>dist</code>.</li>
<li><code v-pre>build:local</code>: Builds a standalone app into <code v-pre>dist-local</code> for local testing.</li>
<li><code v-pre>build:app</code>: Builds a standalone app into <code v-pre>dist-app</code> for deployment.</li>
<li><code v-pre>deploy</code>: Deploys <code v-pre>dist-app</code> to GitHub Pages.</li>
</ul>
</li>
<li>
<p><strong>Engines</strong>:</p>
<ul>
<li>Requires Node.js <code v-pre>&gt;=14.0.0</code> and npm <code v-pre>&gt;=6.0.0</code>.</li>
</ul>
</li>
<li>
<p><strong>Files</strong>:</p>
<ul>
<li>Includes <code v-pre>dist</code>, <code v-pre>README.md</code>, <code v-pre>LICENSE</code>, <code v-pre>CHANGELOG.md</code>, and <code v-pre>packages.json</code> (likely a typo for <code v-pre>package.json</code>).</li>
</ul>
</li>
</ol>
<h3 id="observations" tabindex="-1"><a class="header-anchor" href="#observations"><span>Observations</span></a></h3>
<ul>
<li><strong><code v-pre>packages.json</code> in <code v-pre>files</code></strong>: Did you mean <code v-pre>package.json</code>? If so, this is a minor typo and might not affect functionality, but it’s worth correcting for clarity.</li>
<li><strong>Side Effects</strong>: Specified <code v-pre>*.css</code> and <code v-pre>*.scss</code> as side effects, which is good for tree-shaking optimization in module builds.</li>
</ul>
<hr>
<h2 id="vue-config-js-breakdown" tabindex="-1"><a class="header-anchor" href="#vue-config-js-breakdown"><span><code v-pre>vue.config.js</code> Breakdown</span></a></h2>
<p>This file customizes the Vue CLI’s Webpack configuration based on the build mode or environment.</p>
<h3 id="key-configurations" tabindex="-1"><a class="header-anchor" href="#key-configurations"><span>Key Configurations</span></a></h3>
<ol>
<li>
<p><strong>Dynamic <code v-pre>outputDir</code></strong>:</p>
<ul>
<li><code v-pre>dist</code> (default for <code v-pre>npm run build</code>).</li>
<li><code v-pre>dist-local</code> (for <code v-pre>npm run build:local</code>).</li>
<li><code v-pre>dist-app</code> (for <code v-pre>npm run build:app</code>).</li>
</ul>
</li>
<li>
<p><strong>Dynamic <code v-pre>publicPath</code></strong>:</p>
<ul>
<li><code v-pre>/wbc-ui2/</code> in production (for module builds).</li>
<li><code v-pre>/</code> for app builds or local testing.</li>
<li>Customizable via <code v-pre>VUE_APP_PUBLIC_PATH</code>.</li>
</ul>
</li>
<li>
<p><strong>Production Build (Module)</strong>:</p>
<ul>
<li>Outputs UMD library (<code v-pre>wbc-ui2</code>) with <code v-pre>vue</code> and <code v-pre>vuetify</code> as externals.</li>
<li>Disables chunk splitting for a single-file output.</li>
<li>Uses <code v-pre>MiniCssExtractPlugin</code> to extract CSS into <code v-pre>styles.css</code>.</li>
</ul>
</li>
<li>
<p><strong>App/Local Build</strong>:</p>
<ul>
<li>Outputs a single <code v-pre>bundle.js</code> file.</li>
<li>Copies files from <code v-pre>src/public</code> to <code v-pre>wbc-ui2-files</code> in the output directory.</li>
<li>Includes source maps for debugging.</li>
</ul>
</li>
<li>
<p><strong>Development Server</strong>:</p>
<ul>
<li>Runs on port 8080 with hot reloading.</li>
<li>Serves static files from <code v-pre>src/public</code> at <code v-pre>/wbc-ui2-files/</code>.</li>
</ul>
</li>
<li>
<p><strong>Module Rules</strong>:</p>
<ul>
<li>Handles Vue files, JS (with Babel), PDFs, Office files, HTML, Markdown, etc., using appropriate loaders (<code v-pre>file-loader</code>, <code v-pre>raw-loader</code>).</li>
</ul>
</li>
</ol>
<h3 id="observations-1" tabindex="-1"><a class="header-anchor" href="#observations-1"><span>Observations</span></a></h3>
<ul>
<li><strong>Flexibility</strong>: The conditional logic for <code v-pre>outputDir</code> and <code v-pre>publicPath</code> is well-implemented, allowing switching between module and app builds seamlessly.</li>
<li><strong>Externals</strong>: Excluding <code v-pre>vue</code> and <code v-pre>vuetify</code> in the production module build is a good choice for a library, assuming consumers provide these dependencies.</li>
<li><strong>Source Maps</strong>: Enabled only in app/local builds, which makes sense for debugging without bloating the module build.</li>
</ul>
<hr>
<h2 id="commands-explained" tabindex="-1"><a class="header-anchor" href="#commands-explained"><span>Commands Explained</span></a></h2>
<ol>
<li>
<p><strong><code v-pre>npm run serve</code></strong>:</p>
<ul>
<li>Starts a development server with hot reloading on <code v-pre>localhost:8080</code>.</li>
<li>Uses the config under <code v-pre>devServer</code> in <code v-pre>vue.config.js</code>.</li>
</ul>
</li>
<li>
<p><strong><code v-pre>npm run build</code></strong>:</p>
<ul>
<li>Builds a UMD/ESM module into <code v-pre>dist</code>.</li>
<li>Runs <code v-pre>clean-dist.js</code> afterward (presumably to tidy up the output).</li>
</ul>
</li>
<li>
<p><strong><code v-pre>npm run build:local</code></strong>:</p>
<ul>
<li>Sets <code v-pre>BUILD_MODE=local</code> and <code v-pre>VUE_APP_PUBLIC_PATH=/</code>.</li>
<li>Builds a standalone app into <code v-pre>dist-local</code>.</li>
<li>Can be served locally (e.g., <code v-pre>serve -s dist-local</code>).</li>
</ul>
</li>
<li>
<p><strong><code v-pre>npm run build:app</code></strong>:</p>
<ul>
<li>Sets <code v-pre>BUILD_MODE=app</code> and <code v-pre>VUE_APP_PUBLIC_PATH=/wbc-ui2/</code>.</li>
<li>Builds a standalone app into <code v-pre>dist-app</code>.</li>
</ul>
</li>
<li>
<p><strong><code v-pre>npm run deploy</code></strong>:</p>
<ul>
<li>Uses <code v-pre>gh-pages</code> to deploy the <code v-pre>dist-app</code> folder to GitHub Pages.</li>
</ul>
</li>
</ol>
<hr>
<h2 id="validation-and-suggestions" tabindex="-1"><a class="header-anchor" href="#validation-and-suggestions"><span>Validation and Suggestions</span></a></h2>
<h3 id="everything-looks-solid-but" tabindex="-1"><a class="header-anchor" href="#everything-looks-solid-but"><span>Everything Looks Solid, But…</span></a></h3>
<ol>
<li>
<p><strong>Typo in <code v-pre>files</code></strong>:</p>
<ul>
<li>Change <code v-pre>&quot;packages.json&quot;</code> to <code v-pre>&quot;package.json&quot;</code> in <code v-pre>package.json</code>.</li>
</ul>
</li>
<li>
<p><strong><code v-pre>clean-dist.js</code></strong>:</p>
<ul>
<li>Referenced in the <code v-pre>build</code> script, but not provided. Ensure it works as expected (e.g., removing unnecessary files from <code v-pre>dist</code>).</li>
</ul>
</li>
<li>
<p><strong>Version Consistency</strong>:</p>
<ul>
<li>Some dependencies (e.g., <code v-pre>vue@2.7.16</code>, <code v-pre>vuetify@2.7.2</code>) are pinned to specific versions. Ensure compatibility with newer versions if updating, especially since Vue 2 is in maintenance mode (EOL was Dec 31, 2023).</li>
</ul>
</li>
<li>
<p><strong>Node Version</strong>:</p>
<ul>
<li><code v-pre>node &gt;=14.0.0</code> is fine, but Node 14 reached EOL in April 2023. Consider bumping to <code v-pre>&gt;=16.0.0</code> or higher for security updates (e.g., Node 18 or 20, active as of March 2025).</li>
</ul>
</li>
<li>
<p><strong>Deployment Path</strong>:</p>
<ul>
<li><code v-pre>publicPath</code> for <code v-pre>build:app</code> is <code v-pre>/wbc-ui2/</code>, matching the GitHub Pages URL (<code v-pre>https://wissemb11.github.io/wbc-ui2/</code>). This is correct, but double-check that <code v-pre>gh-pages</code> publishes correctly with this base path.</li>
</ul>
</li>
</ol>
<hr>
</div></template>


