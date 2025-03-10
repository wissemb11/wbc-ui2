export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/0_wbc-ui2-setup-overview.html", { loader: () => import(/* webpackChunkName: "0_wbc-ui2-setup-overview.html" */"/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/my-vuepress-site-qwen/docs/.vuepress/.temp/pages/0_wbc-ui2-setup-overview.html.js"), meta: {"title":"WBC-UI2 Setup Overview"} }],
  ["/1_wbc-ui2-integration-options.html", { loader: () => import(/* webpackChunkName: "1_wbc-ui2-integration-options.html" */"/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/my-vuepress-site-qwen/docs/.vuepress/.temp/pages/1_wbc-ui2-integration-options.html.js"), meta: {"title":"WBC-UI2 Integration Options"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/my-vuepress-site-qwen/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/guide.html", { loader: () => import(/* webpackChunkName: "guide.html" */"/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/my-vuepress-site-qwen/docs/.vuepress/.temp/pages/guide.html.js"), meta: {"title":"Guide"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/my-vuepress-site-qwen/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Welcome to My Project"} }],
  ["/index0.html", { loader: () => import(/* webpackChunkName: "index0.html" */"/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/my-vuepress-site-qwen/docs/.vuepress/.temp/pages/index0.html.js"), meta: {"title":"Welcome to My VuePress Site 🎉"} }],
  ["/installation.html", { loader: () => import(/* webpackChunkName: "installation.html" */"/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/my-vuepress-site-qwen/docs/.vuepress/.temp/pages/installation.html.js"), meta: {"title":"Installation"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/my-vuepress-site-qwen/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Introduction"} }],
  ["/guide/using-vue.html", { loader: () => import(/* webpackChunkName: "guide_using-vue.html" */"/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/my-vuepress-site-qwen/docs/.vuepress/.temp/pages/guide/using-vue.html.js"), meta: {"title":"Using Vue in Markdown"} }],
  ["/guide000/getting-started.html", { loader: () => import(/* webpackChunkName: "guide000_getting-started.html" */"/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/my-vuepress-site-qwen/docs/.vuepress/.temp/pages/guide000/getting-started.html.js"), meta: {"title":"Getting Started"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/my-vuepress-site-qwen/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
