import comp from "/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/my-vuepress-site-qwen/docs/.vuepress/.temp/pages/guide.html.vue"
const data = JSON.parse("{\"path\":\"/guide.html\",\"title\":\"Guide\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"guide.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
