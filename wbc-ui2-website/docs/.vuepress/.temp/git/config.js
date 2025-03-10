import { Contributors } from "/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/wbc-ui2-website/node_modules/@vuepress/plugin-git/lib/client/components/Contributors.js";
import { Changelog } from "/home/wissemb11/Allprojects/my_data/web_dev/global_frontend/src/myProducts/myPackages/1.0.0/wbc-ui2/next/wbc-ui2-website/node_modules/@vuepress/plugin-git/lib/client/components/Changelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", Contributors);
    app.component("GitChangelog", Changelog);
  },
};
