<template>
  <div>
    <h1>"bootstrap-vue": "^2.22.0"-"bootstrap": "^4.6.2"</h1>

    <BButton variant="primary">
      Notifications <BBadge variant="light">4</BBadge>
    </BButton>

    <BAlert show>Default Alert</BAlert>

    <BAlert variant="success" show>Success Alert</BAlert>

    <BAlert v-model="showDismissibleAlert" variant="danger" dismissible>
      Dismissible Alert!
    </BAlert>

    <b-row>
      <b-col md="auto">
        <b-calendar @context="onContext" locale="en-US"></b-calendar>
      </b-col>
      <b-col>
        <p>
          Value: <b>'{{ value }}'</b>
        </p>
        <p class="mb-0">Context:</p>
        <pre class="small">{{ context }}</pre>
      </b-col>
    </b-row>

    <div class="red">Button</div>
    <b-button>Button</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button>

    <h1>bootstrap components as WbC components</h1>
    ddddddddddddd ttttttttttttttttyyyy
    <WBC :item="itemBootStrap"></WBC>
    <WBC item="BButton__to Google|yellow pa-1|https://google.com"></WBC>
    <WBC
      :item="[
        '<BCard|pink pa-1 ma-1 text-center>',
        'BCard component 1',
        'BCard component 2',
        'BCard component 3',
        'BCard component 4',
        'BCard component 5',
      ]"
    ></WBC>

    <WBC
      :item="[
        '<~ol>',
        '<li>',
        'BButton__to Google|yellow pa-1|https://google.com',
        'BButton__to Google|yellow pa-1|https://google.com',
      ]"
    ></WBC>
    <WBC :item="{ comp: 'BCalendar', options: {} }"></WBC>
  </div>
</template>

<script>
// import { WBC } from "wbc-ui2";
// console.log(WBC);

export default {
  name: "WBCBootstrap",
  data() {
    return {
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
          comp: "b-button",
          options: {
            props: {
              variant: "danger",
            },
            html: "Dynamyc BootStrap Button",
          },
        },
      },
      itemBootStrap: {
        comp: "b-button",
        options: {
          props: {
            variant: "danger",
          },
          html: "Dynamyc BootStrap Button",
        },
      },
    };
  },
  components: {
    //WBC
  },
};
</script>

<style></style>
