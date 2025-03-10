export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/0_wbc-ui2-setup-overview.html", { loader: () => import(/* webpackChunkName: "0_wbc-ui2-setup-overview.html" */"/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/wbc-ui2-website/docs/.vuepress/.temp/pages/0_wbc-ui2-setup-overview.html.js"), meta: {"title":"WBC-UI2 Setup Overview"} }],
  ["/1_wbc-ui2-integration-options.html", { loader: () => import(/* webpackChunkName: "1_wbc-ui2-integration-options.html" */"/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/wbc-ui2-website/docs/.vuepress/.temp/pages/1_wbc-ui2-integration-options.html.js"), meta: {"title":"WBC-UI2 Integration Options"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/wbc-ui2-website/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Welcome to WBC-UI2 Documentation"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/wbc-ui2-website/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
