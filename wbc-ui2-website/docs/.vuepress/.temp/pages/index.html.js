import comp from "/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/wbc-ui2-website/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Welcome to WBC-UI2 Documentation\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Quick Links\",\"slug\":\"quick-links\",\"link\":\"#quick-links\",\"children\":[]},{\"level\":2,\"title\":\"Get Involved\",\"slug\":\"get-involved\",\"link\":\"#get-involved\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"readme.md\"}")
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
