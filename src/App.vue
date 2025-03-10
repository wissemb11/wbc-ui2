<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list>
        <v-list-item v-for="(item, i) in menuItems" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My Vuetify App</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <div class="markdown-body" v-highlight>
        <pre><code class="language-javascript">
        console.log("Hello, world!");
      </code></pre>
      </div>
      <v-btn class="green" to="/about" tag="router-link"> Go to About Page </v-btn>

      <v-btn class="green" to="/" tag="router-link"> Go to Home Page </v-btn>

      <v-btn class="green" to="/wbc" tag="router-link"> Go to wbc Page </v-btn>

      <v-container>
        <!-- <WBC :item="links0"></WBC> -->
        <v-btn class="blue" to="/wbc/vuetify" tag="router-link"> wbc vuetify </v-btn>

        <v-btn class="blue" to="/wbc/bootstrap" tag="router-link"> wbc bootstrap </v-btn>

        <v-btn class="blue" to="/wbc/files/local" tag="router-link">
          wbc local files
        </v-btn>

        <v-btn class="blue" to="/wbc/urls" tag="router-link"> wbc urls </v-btn>

        <v-btn class="blue" to="/wbc/methods" tag="router-link"> wbc methods </v-btn>
        <v-btn class="blue" to="/wbc/ext-comps" tag="router-link">
          wbc external components
        </v-btn>
        <v-btn class="blue" to="/wbc/ext-modules" tag="router-link">
          wbc external modules
        </v-btn>
        <v-btn class="blue" to="/wbc/manage/files" tag="router-link">
          Manage Files
        </v-btn>
        <v-btn class="blue" to="/wbc/langage" tag="router-link"> WBC langages </v-btn>
        <v-btn class="blue" to="/wbc/dynamic" tag="router-link"> DynamicWBC</v-btn>

        <router-view />
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }} My Vuetify App</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      menuItems: [
        { title: "Home", icon: "mdi-home", to: "/" },
        { title: "About", icon: "mdi-information", to: "/about" },
        {
          title: "wbc urls",
          icon: "mdi-link-variant", // Represents URLs/links
          to: "/wbc/urls",
          tag: "router-link",
        },
        {
          title: "wbc methods",
          icon: "mdi-function", // Represents methods/functions
          to: "/wbc/methods",
          tag: "router-link",
        },
        {
          title: "wbc external components",
          icon: "mdi-puzzle", // Represents external components/pieces
          to: "/wbc/ext-comps",
          tag: "router-link",
        },
        {
          title: "wbc external modules",
          icon: "mdi-cube-outline", // Represents modules/packages
          to: "/wbc/ext-modules",
          tag: "router-link",
        },
        {
          title: "Manage Files",
          icon: "mdi-folder-multiple", // Represents file management
          to: "/wbc/manage/files",
          tag: "router-link",
        },
        {
          title: "WBC langages",
          icon: "mdi-code-tags", // Represents programming languages
          to: "/wbc/langage",
          tag: "router-link",
        },
        {
          title: "DynamicWBC",
          icon: "mdi-autorenew", // Represents dynamic or changing content
          to: "/wbc/dynamic",
          tag: "router-link",
        },
      ],
      // excelFile: null, // Stores the uploaded Excel file
      // links0: {
      //   0: " Github: [[li__w-learn.org|red|http://w-learn.org/vuetify/VBtn",
      //   1: " official site: [[li__w-learn.org|red|http://w-learn.org/vuetify/VBtn",
      //   3: " satandbox: [[li__w-learn.org|red|http://w-learn.org/",
      //   2: " More example on: [[li__w-learn.org|red|http://w-learn.org/vuetify/VBtn",
      // },
      // karim: {
      //   drawer: false,
      //   menuItems: [
      //     { title: "Home", icon: "mdi-home", to: "/" },
      //     { title: "About", icon: "mdi-information", to: "/about" },
      //   ],
      //   item: [
      //     "<ol|red>",
      //     {
      //       comp: "li",
      //       // output: ["all"],
      //       options: {
      //         class: "warning",
      //         html: "aaaaaaaaaaaaaaaaaaaggggggggggggggg",
      //         mode: "dev",
      //         mode: "dev",
      //         all: true,
      //         rtl: false,
      //         float: !false,
      //         main: true,
      //         close: true,
      //         itemSrc: true,
      //         raw: true,
      //         raw0: true,
      //         allOptions: true,
      //         gAttrs: true,
      //         hAttrs: true,
      //         vProps: true,
      //         htmlSrc: true,
      //         wbcSrc: true,
      //         wbcSyn: true,
      //       },
      //     },
      //     {
      //       comp: "VIcon",
      //       options: {
      //         class: "pa-15 warning",
      //         html: "mdi-tennis",
      //         style: { backgroundColor: "red" },
      //       },
      //     },
      //   ],
      //   itemBootStrap: {
      //     comp: "BButton",
      //     options: {
      //       props: {
      //         variant: "danger",
      //       },
      //       html: "Dynamyc BootStrap Button",
      //     },
      //   },
      // },
    };
  },
  methods: {
    //   handleFileUpload(event) {
    //     const file = event.target.files[0];
    //     if (!file) return;
    //     // Set the file for rendering
    //     this.excelFile = file;
    //   },
  },
};
</script>

<style scoped>
/* Add custom styles here */
</style>
