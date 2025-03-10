// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment(state) {
//       state.count++;
//     }
//   },
//   actions: {
//     increment({ commit }) {
//       commit('increment');
//     }
//   },
//   getters: {
//     doubleCount: (state) => state.count * 2
//   }
// });

import Vue from "vue";
import Vuex from "vuex";
// import TheModelMyAlertComp from "@/components/theComps/myAlertComp/TheModelMyAlertComp.vue";

Vue.use(Vuex);

const state = {
  lg: "en",
};
const mutations = {
  updateLang: (state, v) => {
    state.lg = v;
  },
};
const getters = {
  lg: (state) => state.lg,
};
const actions = {
  setLang: (store, v) => {
    if (Vue.$cookies.get("lg")) {
      store.commit("updateLang", v);
    } else {
      store.commit("updateLang", "en");
      Vue.$cookies.set("lg", "en");
    }
  },
};

let store = new Vuex.Store({
  state: state,
  getters: getters,
  mutations,
  actions,
  modules: {},
});
// console.log("Vuex", Vuex);
// global.Vuex = Vuex;
// global.s = store;

export default store;
