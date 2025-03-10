import Vue from "vue";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";
import "vuetify/dist/vuetify.min.css"; // Ensure Vuetify CSS is imported

Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: "mdi",
    // iconfont: 'mdiSvg'
  },
  theme: {
    themes: {
      light: {},
      dark: {
        primary: colors.indigo.base,
      },
    },
  },
  breakpoint: {
    mobileBreakpoint: "sm", // Ensure mobileBreakpoint is defined
  },
};

export default new Vuetify(opts);
