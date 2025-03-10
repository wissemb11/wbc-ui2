import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;

import * as WBC_ui2_plugin from "../../src/main";
// import * as WBC_ui2_plugin from "wbc-ui2";
Vue.use(WBC_ui2_plugin, {});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
