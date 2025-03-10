<template>
  <div id="apppp">
    BOOTSTRAP: <WBC :item="itemBootStrap"></WBC>

    <WBC item="li__aaaaaa| pa-5 red|link"></WBC>
    <div class="pa-5">green div</div>

    pppppppppppp
    <WBHtml html="yyyyyyyyyyyy"></WBHtml>
    <WBC item="li__aaaaaaaaaaaaaaaa|red|dsfsdfsd"></WBC>
    <WBC item="VCard__aaaaaaaaaaaaaaaa|red|dsfsdfsd"></WBC>
    55555
    <WBC :item="['<li|blue pa-5>', 'VCard__aaaaaaaaaaaaaaaa |pink | dsfsdfsd']"></WBC>
    <WBC :item="item"></WBC>
    88888
    <VBtn color="success">text</VBtn>
    <VBtn class="yellow pa-15">text</VBtn>

    gggggggggggggggggg

    <div class="red pa-15 red">VBtn</div>
    <VBtn class="red pa-15 red">VBtn</VBtn>

    <!-- <BAlert variant="danger" show>BALERT</BAlert> -->

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
        <b-calendar v-model="value" @context="onContext" locale="en-US"></b-calendar>
      </b-col>
      <b-col>
        <p>
          Value: <b>'{{ value }}'</b>
        </p>
        <p class="mb-0">Context:</p>
        <pre class="small">{{ context }}</pre>
      </b-col>
    </b-row>

    ./ppppppppppdf0.pdf:<WBC item="./pdf0.pdf"></WBC>

    <WBC :item="itemBootStrap"></WBC>
    <div class="red">Button</div>
    <b-button>Button</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button>
    ddddddddddddd ttttttttttttttttyyyy
    <v-btn class="primary"> Test Button </v-btn>
    <v-btn class="pa-15 ma-15 red-text"> Test Button </v-btn>

    <VBtn class="red pa-15 red">VBtn</VBtn>

    <WBC item="aaaaaaaaaaaaaaa|red|ddddddddddddddd"></WBC>
    fffffffffffffffffffffffff ./doc0.docx:
    <WBC
      item="https://demo.computaxonline.com/Tax/GeneralInfo/TamplateFile/ShHelp.doc"
    ></WBC>
    ./doc0.docx:
    <WBC item="https://exinfm.com/excel%20files/cash_flow_model.xls"></WBC> ./doc0.docx:
    <WBC
      item="https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_640.jpg"
    ></WBC>
    ./doc0.docx:
    <WBC
      item="https://501351981.github.io/vue-office/examples/dist/static/test-files/test.docx"
    ></WBC>

    ./doc0.doc: <WBC item="./doc0.doc"></WBC> ./docx0.docx:
    <WBC item="./docx0.docx"></WBC>

    ./aaaa.xlsx: <WBC item="./aaaa.xlsx"></WBC> WBHtml :<WBHtml
      html="aaaaaaaaaaaaaaaaaa|red|tttttttttttt"
    ></WBHtml>
    <!-- ./pdf0.pdf:<pdf src="./pdf0.pdf"></pdf> -->
    <pdf src="https://pdfobject.com/pdf/sample.pdf" />
    ./index.html: <WBC item="./index.html"></WBC> ./html0.html:
    <WBC item="./html0.html"></WBC> ./indexxx.html:
    <WBC item="./indexxx.html"></WBC> ./kitchen.jpeg:
    <WBC item="./kitchen.jpeg"></WBC> ./gif0.gif:
    <WBC item="./gif0.gif"></WBC> ./jpeg1.jpeg: <WBC item="./jpeg1.jpeg"></WBC>

    <WBC item="./__py0.py"></WBC>
    ./jp0.jpg: <WBC item="./jp0.jpg"></WBC> ./__md0.md:
    <WBC item="./__md0.md"></WBC> ./__ts0.ts: <WBC item="./__ts0.ts"></WBC> ./__tss0.ts:
    <WBC item="./__tss0.ts"></WBC> ./__vue0.vue:
    <WBC item="./__vue0.vue"></WBC> ./__php0.php:
    <WBC item="./__php0.php"></WBC> ./__ts0.js: <WBC item="./__ts0.js"></WBC> ./__py0.py:
    <WBC item="./__py0.py"></WBC> ./mp4_0.mp4: <WBC item="./mp4_0.mp4"></WBC> ./txt0.txt:
    <WBC item="./txt0.txt"></WBC>

    ./json0.json: <WBC item="./json0.json"></WBC> ./files/json0.json:
    <WBC item="./files/json0.json"></WBC>

    ./files/md1.md: <WBC item="./md1.md"></WBC> ./a.xls:
    <WBC item="./a.xls"></WBC> ./1.mp3: <WBC item="./1.mp3"></WBC> ./files/1.mp3:
    <WBC item="./files/1.mp3"></WBC> ./0.mp3: <WBC item="./0.mp3"></WBC> ./files/0.mp3:
    <WBC item="./files/0.mp3"></WBC>

    ./0.mp4: <WBC item="./0.mp4"></WBC> ./files/0.mp4:
    <WBC item="./files/0.mp4"></WBC> ./jp0.jpg <WBC item="./jp0.jpg"></WBC>
    <WBC item="./html0.html"></WBC>
    ./__html0.html:__html0.html <WBC item="./__html0.html"></WBC>
    rrrrrrrrrrrrrrrrrrrrr
    <VBtn class="red">VBtn</VBtn>
    <p>**********</p>
    <VCard class="red" dark>VCard</VCard>
    <p>**********</p>
    --------------------------
    <VCard class="red">VCard</VCard>
    <p>**********</p>
    ddddddddddddddddd

    <WBC item="aaaaaaaaaaaaaaa|blue|ffff"></WBC>
    <p>**********</p>
    <VIcon>mdi-tennis</VIcon>
    <p>**********</p>

    <WBC :item="item"></WBC>
    <JsonViewer :value="['sssssssssssssss']"></JsonViewer>
    <!-- <WBDataViewer value="aaaaaaaaaaaaaaa"></WBDataViewer> -->
    <WBHtml html="hhhhhhhhhhhhhhhhhh|red|ddddd"></WBHtml>

    ssssssssssssssssssssssssssssss
    <!-- <WBC item="./aaaa.xlsx"></WBC> -->
    <WBC
      item="http://study.wi-bg.com/files/2023-2024/Session%205%20-%20%20Sequence%20part%202%20-%20A.U.%2023-24%20.html"
    ></WBC>
    <WBC
      item="http://study.wi-bg.com/files/2023-2024/Session%203%20-%20%20Functions%20-%20A.U.%2023-24%20.py"
    ></WBC>
    <WBC
      item="http://study.wi-bg.com/files/2023-2024/Session%202%20-%20%20Input%20check%20%20-%20A.U.%2023-24%20.pdf"
    ></WBC>
    <WBC item="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"></WBC>
    <WBC item="https://youtu.be/aMkKs4l-dI0?list=RDaMkKs4l-dI0"></WBC>
    {{ randomColor() }}

    <!-- <p>WBC====> {{WBC?.()}}</p>
    <p>WBHtml====> {{WBHtml?.()}}</p>
    <p>WBLink====> {{WBLink?.()}}</p> -->
    <!-- <p>WBDataViewer====> {{WBDataViewer?.()}}</p> -->
    <!-- <p>WBAlert====> {{WBAlert?.()}}</p> -->

    <p>randomColor?.() ====> {{ randomColor?.() }}</p>

    <p>randomKey?.("baseKey") ====> {{ randomKey?.("baseKey") }}</p>
    <p>
      getRandomInt entre 10 et getRandomInt?.(10, 20) ====> {{ getRandomInt?.(10, 20) }}
    </p>
    <p>
      camelToKebab of camelToKebab?.("WbcUiComponentJS") ====>
      {{ camelToKebab?.("WbcUiComponentJS") }}
    </p>
    -->
    <p>isVnodea:10====> {{ isVnode?.({ a: 10 }) }}</p>
    <p>isDate 'isDate?.'sdfasdfsa'====> {{ isDate?.("sdfasdfsa") }}</p>
    <p>isDate '2025-01-isDate?.'2025-01-01'====> {{ isDate?.("2025-01-01") }}</p>
    <p>isDate '2025-55-isDate?.'2025-55-01'====> {{ isDate?.("2025-55-01") }}</p>
    <p>
      stringToJson of `{"a": stringToJson?.(`{"a":10}`) }`====>
      {{ stringToJson?.(`{"a":10}`) }}
    </p>
    <p>compFunc?.("ali baba") ====> {{ compFunc?.("ali baba") }}</p>
    <p>
      anyMatchInArray?.(["1", 2, 3], "1")===>{{ anyMatchInArray?.(["1", 2, 3], "1") }}
    </p>
    <p>strToObj(`{a:10}`) ====> {{ strToObj(`{a:10}`) }}</p>
    <p>
      capitalizeWords?.("this an example of sentence") ====>
      {{ capitalizeWords?.("this an example of sentence") }}
    </p>

    <p>
      toTitleCase?.("this an example of sentence") ====>
      {{ toTitleCase?.("this an example of sentence") }}
    </p>
    <p>
      titleCase?.("this an example of sentence") ====>
      {{ titleCase?.("this an example of sentence") }}
    </p>
    -->
    <p>raise?.({}) ====> {{ raise?.({}) }}</p>

    <p>isNonEmpty({}) ====> {{ isNonEmpty({}) }}</p>
    <p>isNonEmpty([]) ====> {{ isNonEmpty([]) }}</p>
    <p>isNonEmpty({a:10}) ====> {{ isNonEmpty({ a: 10 }) }}</p>
    <p>isNonEmpty('aaaa') ====> {{ isNonEmpty("aaaa") }}</p>
    <p>isNonEmpty([1]) ====> {{ isNonEmpty([1]) }}</p>

    <p>isEmpty({}) ====> {{ isEmpty({}) }}</p>
    <p>isEmpty([]) ====> {{ isEmpty([]) }}</p>
    <p>isEmpty({a:10}) ====> {{ isEmpty({ a: 10 }) }}</p>
    <p>isEmpty('aaaa') ====> {{ isEmpty("aaaa") }}</p>
    <p>isEmpty([1]) ====> {{ isEmpty([1]) }}</p>

    <p>isDynamicImport?.() ====> {{ isDynamicImport?.() }}</p>
    <p>isPromise?.() ====> {{ isPromise?.() }}</p>
    <p>minsToHours?.(999) ====> {{ minsToHours?.(999) }}</p>
    <p>flattenArray?.() ====> {{ flattenArray?.([1, 2, 3]) }}</p>
    <p>
      mergeObjects?.() ====> {{ mergeObjects?.({ a: 10, b: 20 }, { a: 100, c: 200 }) }}
    </p>
    <p>isPlainObject?.({a:10,b:20}) ====> {{ isPlainObject?.({ a: 10, b: 20 }) }}</p>
    <p>isPlainObject?.(()=>1) ====> {{ isPlainObject?.(() => 1) }}</p>
    <p>isPlainObject?.(null) ====> {{ isPlainObject?.(null) }}</p>
    <p>isPlainObject?.([]) ====> {{ isPlainObject?.([]) }}</p>
    <p>getObjectDepth?.() ====> {{ getObjectDepth?.() }}</p>
    <p>
      copyToClipboard?.('copied text') : the callBack of an event ====>
      {{ copyToClipboard?.("copied text") }}
    </p>
    <p>stringify?.({a:1,f:()=>1}) ====> {{ stringify?.({ a: 1, f: () => 1 }) }}</p>
    <p>parse?.({"a":1,"f":"() => 1"}) ====> {{ parse?.({ a: 1, f: "() => 1" }) }}</p>

    <WBC :item="karim"></WBC>
  </div>
</template>

<script>
// import { WBC } from "wbc-ui2";
// console.log(WBC);

export default {
  name: "App",
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
