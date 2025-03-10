<template><div><h1 id="wbc-ui2-integration-options" tabindex="-1"><a class="header-anchor" href="#wbc-ui2-integration-options"><span>WBC-UI2 Integration Options</span></a></h1>
<p>This document explains the various ways to integrate the <code v-pre>wbc-ui2</code> library into a root application. The library, built with Vue.js and outputting both UMD and ESM formats via <code v-pre>npm run build</code> into the <code v-pre>dist</code> folder (<code v-pre>dist/wbc-ui2.umd.js</code> and <code v-pre>dist/wbc-ui2.esm.js</code>), is highly versatile. It supports integration through classic imports, module bundlers, CDNs, and direct <code v-pre>&lt;script&gt;</code> tags.</p>
<hr>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<p>Your <code v-pre>npm run build</code> command generates a UMD/ESM module, making <code v-pre>wbc-ui2</code> compatible with multiple integration methods. Below are the supported approaches, each with examples and setup details based on your <code v-pre>package.json</code> and <code v-pre>vue.config.js</code> configuration.</p>
<hr>
<h2 id="_1-classic-method-local-or-npm-import" tabindex="-1"><a class="header-anchor" href="#_1-classic-method-local-or-npm-import"><span>1. Classic Method (Local or npm Import)</span></a></h2>
<p>This method works for Vue 2 apps without a module bundler or when referencing built files directly.</p>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App.vue"</span><span class="token punctuation">;</span></span>
<span class="line">Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> WBC_ui2_plugin <span class="token keyword">from</span> <span class="token string">"../../src/main"</span><span class="token punctuation">;</span> <span class="token comment">// Local dev path</span></span>
<span class="line"><span class="token comment">// OR</span></span>
<span class="line"><span class="token comment">// import * as WBC_ui2_plugin from "wbc-ui2"; // After installing via npm</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>WBC_ui2_plugin<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Register the plugin with options (if any)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works"><span>How It Works</span></a></h3>
<ul>
<li><strong>Local Path</strong>: <code v-pre>../../src/main</code> is valid during development if <code v-pre>main.js</code> exports your plugin logic (e.g., an <code v-pre>install</code> method for <code v-pre>Vue.use</code>).</li>
<li><strong>Published Module</strong>: After <code v-pre>npm run build</code>, <code v-pre>dist/wbc-ui2.umd.js</code> is the entry point (per <code v-pre>&quot;main&quot;: &quot;dist/wbc-ui2.umd.js&quot;</code> in <code v-pre>package.json</code>). When published to npm as <code v-pre>wbc-ui2</code>, the import resolves to this UMD file.</li>
<li><strong>Requirement</strong>: <code v-pre>src/main.js</code> must export an object with an <code v-pre>install</code> method, e.g.:<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// src/main.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./components/MyComponent.vue'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token constant">WBCUI2</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'wbc-button'</span><span class="token punctuation">,</span> MyComponent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token constant">WBCUI2</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li><strong>Compatibility</strong>: Fully supported once published or installed locally.</li>
</ul>
<hr>
<h2 id="_2-using-module-bundlers-webpack-rollup-vite" tabindex="-1"><a class="header-anchor" href="#_2-using-module-bundlers-webpack-rollup-vite"><span>2. Using Module Bundlers (Webpack, Rollup, Vite)</span></a></h2>
<p>Modern JavaScript projects with bundlers can use the ESM (<code v-pre>dist/wbc-ui2.esm.js</code>) or UMD (<code v-pre>dist/wbc-ui2.umd.js</code>) outputs.</p>
<h3 id="example-with-webpack-vite" tabindex="-1"><a class="header-anchor" href="#example-with-webpack-vite"><span>Example with Webpack/Vite</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// main.js in the root app</span></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token constant">WBCUI2</span> <span class="token keyword">from</span> <span class="token string">'wbc-ui2'</span><span class="token punctuation">;</span> <span class="token comment">// Resolves to dist/wbc-ui2.esm.js or dist/wbc-ui2.umd.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'wbc-ui2/dist/styles.css'</span><span class="token punctuation">;</span> <span class="token comment">// Include styles if extracted separately</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">WBCUI2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>`<span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setup" tabindex="-1"><a class="header-anchor" href="#setup"><span>Setup</span></a></h3>
<ol>
<li>Install the library:<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> wbc-ui2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>Ensure the root app includes <code v-pre>vue</code> and <code v-pre>vuetify</code> as dependencies (externals in your build).</li>
<li>The bundler chooses <code v-pre>dist/wbc-ui2.esm.js</code> (ESM-compatible tools like Vite) or <code v-pre>dist/wbc-ui2.umd.js</code> (CommonJS/UMD compatibility).</li>
</ol>
<h3 id="configuration-notes" tabindex="-1"><a class="header-anchor" href="#configuration-notes"><span>Configuration Notes</span></a></h3>
<ul>
<li><strong>Externals</strong>: <code v-pre>vue.config.js</code> marks <code v-pre>vue</code> and <code v-pre>vuetify</code> as externals:<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">vue</span><span class="token operator">:</span> <span class="token string">"Vue"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">vuetify</span><span class="token operator">:</span> <span class="token string">"Vuetify"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>The root app must provide these.</li>
<li><strong>Styles</strong>: Import <code v-pre>dist/styles.css</code> if <code v-pre>MiniCssExtractPlugin</code> extracts styles.</li>
</ul>
<h3 id="compatibility" tabindex="-1"><a class="header-anchor" href="#compatibility"><span>Compatibility</span></a></h3>
<ul>
<li>Supported for modern (ESM) and legacy (UMD) bundlers.</li>
</ul>
<hr>
<h2 id="_3-cdn-unpkg-or-jsdelivr" tabindex="-1"><a class="header-anchor" href="#_3-cdn-unpkg-or-jsdelivr"><span>3. CDN (unpkg or jsDelivr)</span></a></h2>
<p>The UMD build (<code v-pre>dist/wbc-ui2.umd.js</code>) can be served via a CDN.</p>
<h3 id="example-with-unpkg" tabindex="-1"><a class="header-anchor" href="#example-with-unpkg"><span>Example with unpkg</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/vuetify@2.7.2/dist/vuetify.min.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/wbc-ui2@1.0.0/dist/styles.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- Use your components, e.g., &lt;wbc-button> --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/vue@2.7.16/dist/vue.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/vuetify@2.7.2/dist/vuetify.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/wbc-ui2@1.0.0/dist/wbc-ui2.umd.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">WBCUI2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Global variable from UMD</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">vuetify</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Vuetify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'&lt;div>&lt;wbc-button>Click Me&lt;/wbc-button>&lt;/div>'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setup-1" tabindex="-1"><a class="header-anchor" href="#setup-1"><span>Setup</span></a></h3>
<ol>
<li>Publish to npm (<code v-pre>npm publish</code>).</li>
<li>Use a CDN:
<ul>
<li>unpkg: <code v-pre>https://unpkg.com/wbc-ui2@1.0.0/dist/wbc-ui2.umd.js</code></li>
<li>jsDelivr: <code v-pre>https://cdn.jsdelivr.net/npm/wbc-ui2@1.0.0/dist/wbc-ui2.umd.js</code></li>
</ul>
</li>
<li>Include <code v-pre>vue</code> and <code v-pre>vuetify</code> via CDN (externals).</li>
</ol>
<h3 id="configuration-notes-1" tabindex="-1"><a class="header-anchor" href="#configuration-notes-1"><span>Configuration Notes</span></a></h3>
<ul>
<li><strong>UMD Output</strong>: <code v-pre>libraryTarget: &quot;umd&quot;</code> and <code v-pre>library: &quot;wbc-ui2&quot;</code> expose <code v-pre>WBCUI2</code> globally.</li>
<li><strong>Global Object</strong>: <code v-pre>globalObject: 'typeof self !== &quot;undefined&quot; ? self : this'</code> ensures browser/Node.js compatibility.</li>
</ul>
<h3 id="compatibility-1" tabindex="-1"><a class="header-anchor" href="#compatibility-1"><span>Compatibility</span></a></h3>
<ul>
<li>Fully supported with CDNs.</li>
</ul>
<hr>
<h2 id="_4-direct-script-tag-local-file" tabindex="-1"><a class="header-anchor" href="#_4-direct-script-tag-local-file"><span>4. Direct <code v-pre>&lt;script&gt;</code> Tag (Local File)</span></a></h2>
<p>Use the built file directly without a CDN.</p>
<h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/path/to/vuetify.min.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/dist/styles.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- Use your components --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/path/to/vue.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/path/to/vuetify.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/dist/wbc-ui2.umd.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">WBCUI2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">vuetify</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Vuetify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'&lt;div>&lt;wbc-button>Click Me&lt;/wbc-button>&lt;/div>'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setup-2" tabindex="-1"><a class="header-anchor" href="#setup-2"><span>Setup</span></a></h3>
<ul>
<li>Serve <code v-pre>dist/wbc-ui2.umd.js</code> and <code v-pre>dist/styles.css</code> after <code v-pre>npm run build</code>.</li>
<li>Include <code v-pre>vue</code> and <code v-pre>vuetify</code> scripts beforehand.</li>
</ul>
<h3 id="compatibility-2" tabindex="-1"><a class="header-anchor" href="#compatibility-2"><span>Compatibility</span></a></h3>
<ul>
<li>Supported due to UMD build design.</li>
</ul>
<hr>
<h2 id="_5-other-ways" tabindex="-1"><a class="header-anchor" href="#_5-other-ways"><span>5. Other Ways</span></a></h2>
<h3 id="global-registration-in-a-non-vue-project" tabindex="-1"><a class="header-anchor" href="#global-registration-in-a-non-vue-project"><span>Global Registration in a Non-Vue Project</span></a></h3>
<p>Use components in a non-Vue app with vanilla JS:</p>
<ul>
<li>Load via <code v-pre>&lt;script&gt;</code> or CDN.</li>
<li>Access components via <code v-pre>WBCUI2</code> (e.g., <code v-pre>WBCUI2.components.MyComponent</code>).</li>
</ul>
<h4 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2"><span>Example</span></a></h4>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/dist/wbc-ui2.umd.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">WBCUI2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Access plugin object</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Requires <code v-pre>main.js</code> to export additional utilities.</li>
</ul>
<hr>
<h2 id="documentation-update" tabindex="-1"><a class="header-anchor" href="#documentation-update"><span>Documentation Update</span></a></h2>
<p>Update your <code v-pre>README.md</code> with these options:</p>
<p><code v-pre>markdown</code></p>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2>
<h3 id="via-npm-module-bundlers" tabindex="-1"><a class="header-anchor" href="#via-npm-module-bundlers"><span>Via npm (Module Bundlers)</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> wbc-ui2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token constant">WBCUI2</span> <span class="token keyword">from</span> <span class="token string">'wbc-ui2'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'wbc-ui2/dist/styles.css'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">WBCUI2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="via-cdn" tabindex="-1"><a class="header-anchor" href="#via-cdn"><span>Via CDN</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/vue@2.7.16/dist/vue.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/vuetify@2.7.2/dist/vuetify.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/wbc-ui2@1.0.0/dist/wbc-ui2.umd.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">WBCUI2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="via-script-tag" tabindex="-1"><a class="header-anchor" href="#via-script-tag"><span>Via Script Tag</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/dist/wbc-ui2.umd.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">WBCUI2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</div></template>


