import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: () => import("@/views/Home.vue"), name: "Home" },
  {
    path: "/about",
    component: () => import("@/views/About.vue"),
    name: "About",
  },
  {
    path: "/wbc",
    component: () => import("@/views/WBC.vue"),
    name: "WBC",
  },
  {
    path: "/wbc/methods",
    component: () => import("@/views/WBCMethods.vue"),
    name: "WBCMethods",
  },
  {
    path: "/wbc/ext-comps",
    component: () => import("@/views/WBCExternalComponents.vue"),
    name: "WBCExternalComponents",
  },
  {
    path: "/wbc/ext-modules",
    component: () => import("@/views/WBCExternalModules.vue"),
    name: "WBCExternalModules",
  },
  {
    path: "/wbc/files/local",
    component: () => import("@/views/WBCLocalFiles.vue"),
    name: "WBCLocalFiles",
  },
  {
    path: "/wbc/urls",
    component: () => import("@/views/WBCUrls.vue"),
    name: "WBCUrls",
  },
  {
    path: "/wbc/bootstrap",
    component: () => import("@/views/WBCBootstrap.vue"),
    name: "WBCBootstrap",
  },
  {
    path: "/wbc/vuetify",
    component: () => import("@/views/WBCVuetify.vue"),
    name: "WBCVuetify",
  },
  ,
  {
    path: "/wbc/manage/files",
    component: () => import("@/views/WBCManageFiles.vue"),
    name: "WBCManageFiles",
  },
  {
    path: "/wbc/langage",
    component: () => import("@/views/WBCLangage.vue"),
    name: "WBCLangage",
  },
  {
    path: "/wbc/dynamic",
    component: () => import("@/views/DynamicWBC.vue"),
    name: "DynamicWBC",
  },
];

const router = new VueRouter({
  mode: "history",
  // mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.NODE_ENV === "production" ? "/wbc-ui2/" : "/", // Adjust this to match your subdirectory
//   routes,
// });

export default router;
