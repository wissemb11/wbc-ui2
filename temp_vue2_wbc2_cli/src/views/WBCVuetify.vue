<template>
  <div>
    <WBC :item="links"></WBC>
    <h1>"vuetify": "^2.7.0"</h1>

    <VBtn color="success">text</VBtn>
    <VBtn class="yellow pa-15">text</VBtn>

    gggggggggggggggggg

    <div class="red pa-15 red">VBtn</div>
    <VBtn class="red pa-15 red">VBtn</VBtn>

    <!-- <BAlert variant="danger" show>BALERT</BAlert> -->

    <v-btn class="primary"> Test Button </v-btn>
    <v-btn class="pa-15 ma-15 red-text"> Test Button </v-btn>

    <VBtn class="red pa-15 red">VBtn</VBtn>

    <h1>vuetifiy components as WbC components</h1>
  </div>
</template>

<script>
// import { WBC } from "wbc-ui2";
// console.log(WBC);

export default {
  name: "WBCVuetify",
  data() {
    return {
      links:{
        0:' More example on: [[li__w-learn.org|red|http://w-learn.org/vuetify/VBtn',
      },
      karim: {
        a: "fffff",

        aa: {
          html: "gggg",
          aa: {
            b: "fff",
            c: {
              c0: "c0000",
              cc: {
                d: {
                  dd: "dfgdfgdf",
                },
              },
            },
          },
        },
      },
      karim: [
        "<~ol>",
        "<li>",
        "fffff",
        "fffff",
        "fffff",
        "fffff",
        "fffff",
        "fffff",
        "fffff",
        "fffff",
      ],
      karim: [
        "<~ol>",
        "<li>",
        "fffff",
        "fffff",
        "fffff",
        "fffff",
        "fffff",
        "fffff",
        "fffff",
        "fffff",
        ["<BButton>", "aaaa", ["<BButton>", "aaaa", ["<BButton>", "aaaa"]]],
      ],
      karim: {
        comp: "li",
        header: "tttttttttttttttt",
        footer: {
          // karim:['<~ol>','<li>','fffff','fffff','fffff','fffff','fffff','fffff','fffff','fffff',],
          // karim:['<~ol>','<li>','fffff','fffff','fffff','fffff','fffff','fffff','fffff','fffff',['<BButton>','aaaa',['<BButton>','aaaa',['<BButton>','aaaa']]]],
          karim: {
            comp: "li",
            header: "tttttttttttttttt",
            footer: "tttttttttttttttt",
            options: {
              headers: "div__headers||uuuuu",
              footers: "div__footers||lllllll",
              html: [
                "<~ol>",
                "<li>",
                "uuuuuuuuuuu",
                "uuuuuuuuuuu",
                "uuuuuuuuuuu",
                "uuuuuuuuuuu",
                "uuuuuuuuuuu",
                "uuuuuuuuuuu",
                "uuuuuuuuuuu",
                "uuuuuuuuuuu",
                ["<BButton>", "aaaa", ["<BButton>", "aaaa", ["<BButton>", "aaaa"]]],
              ],
              style: { backgroundColor: "yellow" },
              on: {
                click: () => alert("hi"),
              },
            },
          },
          options: {
            headers: "div__headers||uuuuu",
            footers: "div__footers||lllllll",
            html: [
              "<~ol>",
              "<li>",
              "fffff",
              "fffff",
              "fffff",
              "fffff",
              "fffff",
              "fffff",
              "fffff",
              "fffff",
              ["<BButton>", "aaaa", ["<BButton>", "aaaa", ["<BButton>", "aaaa"]]],
            ],
            style: { backgroundColor: "red" },
            on: {
              click: () => alert("hi"),
            },
          },
        },
        item: [
          "<ol|red>",
          {
            comp: "li",
            options: { class: "warning", html: "aaaaaaaaaaaaaaaaaaaggggggggggggggg" },
          },
          {
            comp: "VIcon",
            options: {
              class: "pa-15 warning",
              html: "mdi-tennis",
              style: { backgroundColor: "red" },
            },
          },
        ],

        itemBootStrap: {
          comp: "BButton",
          options: {
            props: {
              variant: "danger",
            },
            html: "Dynamyc BootStrap Button",
          },
        },
      },
    };
  },
  components: {
    //WBC
  },
};
</script>

<style>
#apppp {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  padding: 30px;
}
</style>
