<template><div><h1 id="using-vue-in-markdown" tabindex="-1"><a class="header-anchor" href="#using-vue-in-markdown"><span>Using Vue in Markdown</span></a></h1>
<h2 id="browser-api-access-restrictions" tabindex="-1"><a class="header-anchor" href="#browser-api-access-restrictions"><span>Browser API Access Restrictions</span></a></h2>
<p>Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the <a href="https://ssr.vuejs.org/en/universal.html" target="_blank" rel="noopener noreferrer">universal code requirements</a>. In short, make sure to only access Browser / DOM APIs in <code v-pre>beforeMount</code> or <code v-pre>mounted</code> hooks.</p>
<p>If you are using or demoing components that are not SSR friendly (for example containing custom directives), you can wrap them inside the built-in <code v-pre>&lt;ClientOnly&gt;</code> component:</p>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2>
</div></template>


