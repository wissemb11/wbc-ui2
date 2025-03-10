import { CodeTabs } from "/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/my-vuepress-site-qwen/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/my-vuepress-site-qwen/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/my-vuepress-site-qwen/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
