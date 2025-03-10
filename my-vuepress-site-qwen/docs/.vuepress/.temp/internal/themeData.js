export const themeData = JSON.parse("{\"logo\":\"/logo.png\",\"head\":[[\"link\",{\"rel\":\"stylesheet\",\"href\":\"https://use.fontawesome.com/releases/v5.15.4/css/all.css\"}]],\"navbar\":[{\"text\":\"Home\",\"link\":\"/\",\"className\":\"custom-home\"},{\"text\":\"Docs0\",\"link\":\"/0_wbc-ui2-setup-overview\"},{\"text\":\"Docs1\",\"link\":\"/1_wbc-ui2-integration-options\"},{\"text\":\"GitHub\",\"link\":\"https://github.com/wissemb11/wbc-ui2\"},{\"text\":\"Demo\",\"link\":\"https://wbc-ui2-demo-app.vercel.app\"}],\"sidebar\":[{\"text\":\"🚀 Getting Started\",\"link\":\"/guide/getting-started\",\"activeMatch\":\"^/guide/\"},{\"text\":\"📚 Documentation\",\"children\":[{\"text\":\"Guide\",\"link\":\"/guide/\"},{\"text\":\"API Reference\",\"link\":\"/api/\"}]},{\"text\":\"GitHub\",\"link\":\"https://github.com/your-repo\",\"target\":\"_blank\"},{\"text\":\"Home\",\"link\":\"/\",\"className\":\"custom-home\"},{\"text\":\"Installation\",\"link\":\"/installation\"},{\"text\":\"Guide\",\"link\":\"/guide\"},{\"text\":\"Guide\",\"children\":[{\"text\":\"childChild\",\"collapsed\":true,\"children\":[{\"text\":\"Setup Overview1\",\"link\":\"/0_wbc-ui2-setup-overview\",\"children\":[{\"text\":\"Setup Overview\",\"link\":\"/0_wbc-ui2-setup-overview\"},{\"text\":\"Integration Options\",\"link\":\"/1_wbc-ui2-integration-options\"}]},{\"text\":\"Integration Options\",\"link\":\"/1_wbc-ui2-integration-options\"}]},{\"text\":\"Setup Overview\",\"link\":\"/0_wbc-ui2-setup-overview\"},{\"text\":\"Integration Options\",\"link\":\"/1_wbc-ui2-integration-options\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
