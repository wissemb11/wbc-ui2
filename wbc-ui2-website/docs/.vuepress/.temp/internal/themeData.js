export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"Home\",\"link\":\"/\",\"className\":\"custom-home\"},{\"text\":\"Docs0\",\"link\":\"/0_wbc-ui2-setup-overview\"},{\"text\":\"Docs1\",\"link\":\"/1_wbc-ui2-integration-options\"},{\"text\":\"GitHub\",\"link\":\"https://github.com/wissemb11/wbc-ui2\"},{\"text\":\"Demo\",\"link\":\"https://wbc-ui2-demo-app.vercel.app\"}],\"sidebar\":[{\"text\":\"Home\",\"link\":\"/\",\"className\":\"custom-home\"},{\"text\":\"Guide\",\"children\":[{\"text\":\"Setup Overview\",\"link\":\"/0_wbc-ui2-setup-overview\"},{\"text\":\"Integration Options\",\"link\":\"/1_wbc-ui2-integration-options\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
