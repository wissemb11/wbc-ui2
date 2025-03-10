<template>
  <div id="apppp">
    <WBC :item="selectLang"></WBC>

    BOOTSTRAP:
    <WBC :item="{ en: 'english text', fr: 'texte francais', ar: 'النص ' }"></WBC>
    BOOTSTRAP: <WBC :item="BButtonLgang"></WBC>

    <p>**********</p>

    <WBC :item="item"></WBC>

    <div>
      <h1>Exmple of a Bootstrap Button multi-langage</h1>
      <h4>source:</h4>
      &lt; WBC :item={{ BButtonLgang }}> &lt; /WBC>
      <h4>output:</h4>
      <WBC :item="BButtonLgang"></WBC>
    </div>
    <div>
      <h1>Exmple of a WBC Object with multi-langage</h1>
      <h4>source:</h4>
      &lt; WBC :item={{ wbcObj }}> &lt; /WBC>
      <h4>output:</h4>
      <WBC :item="wbcObj"></WBC>
    </div>
    <div>
      <h1>Exmple of a multi-langage list</h1>
      <h4>source:</h4>
      &lt; WBC :item={{ arrayItemLg }}> &lt; /WBC>
      <h4>output:</h4>
      <WBC :item="arrayItemLg"></WBC>
    </div>
    <div>
      <h1>Exmple of a multi-langage WBC Nested Object</h1>
      <h4>source:</h4>
      &lt; WBC :item={{ nestedObj }}> &lt; /WBC>
      <h4>output:</h4>
      <WBC :item="nestedObj"></WBC>
    </div>
  </div>
</template>

<script>
// import { WBC } from "wbc-ui2";
// console.log(WBC);

export default {
  name: "WBCLangage",
  data() {
    return {
      selectLang: {
        dive: true,
        comp: "VSelect",
        footer: [
          {
            en: `h1__The selected langage is English (en)`,
            fr: `h1__La langue sélectionnée est française (FR)`,
            ar: "h1__اللغة المختارة هي العربية (AR)",
          },
        ],

        options: {
          key: (that) => `key-${that.lg.lang}`,
          props: {
            label: (that) => ({
              en: "Select Langage",
              fr: "Sélectionner la langue",
              ar: "اختر اللغة",
            }),
            items: [
              { text: "English", value: "en" },
              { text: "Français", value: "fr" },
              { text: "العربية", value: "ar" },
            ],
            "item-text": (v) => v.text,
          },
          on: {
            change: (that) => (v) => {
              alert(v);
              alert(that);
              console.log(that);
              that.lg.set(v);
              that.update();
            },
          },
        },
      },
      nestedObj: {
        options: { class: "red pa-5" },
        a0: {
          en: "div__level0_0|grey pa-5 ma-2__white--text",
          fr: "li__Niveau0_0|ma-2 purple__",
          ar: "VCard__مستوى0_0|ma-1 brown__",
        },
        a1: {
          en: "div__level0_1|grey pa-5 ma-2__white--text",
          fr: "li__Niveau0_1|ma-2 purple__",
          ar: "VCard__مستوى0_1|ma-1 brown__",
        },

        a2: {
          options: { class: "blue pa-5" },
          a20: {
            en: "div__level1_0|grey pa-5 ma-2__white--text",
            fr: "li__Niveau1_0|ma-2 purple__",
            ar: "VCard__مستوى1_0|ma-1 brown__",
          },
          a21: {
            en: "div__level1_1|grey pa-5 ma-2__white--text",
            fr: "li__Niveau1_1|ma-2 purple__",
            ar: "VCard__مستوى1_1|ma-1 brown__",
          },
          html: {
            en: "div__level1_html|grey pa-5 ma-2__white--text",
            fr: "li__Niveau1_html|ma-2 purple__",
            ar: "VCard__مستوى1_html|ma-1 brown__",
          },
          a22: {
            options: { class: "yellow pa-5" },
            a220: {
              en: "div__level2_0|grey pa-5 ma-2__white--text",
              fr: "li__Niveau2_0|ma-2 purple__",
              ar: "VCard__مستوى2_0|ma-1 brown__",
            },
            a221: {
              en: "div__level2_1|grey pa-5 ma-2__white--text",
              fr: "li__Niveau2_1|ma-2 purple__",
              ar: "VCard__مستوى2_1|ma-1 brown__",
            },
            a223: {
              en: "div__level2_3|grey pa-5 ma-2__white--text",
              fr: "li__Niveau2_3|ma-2 purple__",
              ar: "VCard__مستوى2_3|ma-1 brown__",
            },
            a222: {
              options: { class: "green pa-5" },

              a2210: {
                en: "div__level3_0|grey pa-5 ma-2__white--text",
                fr: "li__Niveau3_0|ma-2 purple__",
                ar: "VCard__مستوى3_0|ma-1 brown__",
              },
              a2211: {
                en: "div__level3_1|grey pa-5 ma-2__white--text",
                fr: "li__Niveau3_1|ma-2 purple__",
                ar: "VCard__مستوى3_1|ma-1 brown__",
              },
              a2213: {
                en: "div__level3_3|grey pa-5 ma-2__white--text",
                fr: "li__Niveau3_3|ma-2 purple__",
                ar: "VCard__مستوى3_3|ma-1 brown__",
              },
              a2212: {
                options: { class: "pink pa-5" },
                a22110: {
                  en: "div__level4_0|grey pa-5 ma-2__white--text",
                  fr: "li__Niveau4_0|ma-2 purple__",
                  ar: "VCard__مستوى4_0|ma-1 brown__",
                },
                a22111: {
                  en: "div__level4_1|grey pa-5 ma-2__white--text",
                  fr: "li__Niveau4_1|ma-2 purple__",
                  ar: "VCard__مستوى4_1|ma-1 brown__",
                },
                a22113: {
                  en: "div__level4_3|grey pa-5 ma-2__white--text",
                  fr: "li__Niveau4_3|ma-2 purple__",
                  ar: "VCard__مستوى4_3|ma-1 brown__",
                },
                a22112: {
                  options: { class: "brown pa-5" },

                  a221100: {
                    en: "div__level5_0|grey pa-5 ma-2__white--text",
                    fr: "li__Niveau5_0|ma-2 purple__",
                    ar: "VCard__مستوى5_0|ma-1 brown__",
                  },
                  a221101: {
                    en: "div__level5_1|grey pa-5 ma-2__white--text",
                    fr: "li__Niveau5_1|ma-2 purple__",
                    ar: "VCard__مستوى5_1|ma-1 brown__",
                  },
                },
              },
            },
          },
        },
        a3: { en: "div__level0_3|grey pa-5 ma-2__white--text" },
      },
      arrayItemLg: [
        "<~ol>",
        "<li>",
        { en: "item 0", fr: "element 0", ar: "عنصر 0" },
        { en: "item 1", fr: "element 1", ar: "عنصر 1" },
        { en: "item 2", fr: "element 2", ar: "عنصر 2" },
        { en: "item 3", fr: "element 3", ar: "عنصر 3" },
        { en: "item 4", fr: "element 4", ar: "عنصر 4" },
        { en: "item 5", fr: "element 5", ar: "عنصر 5" },
        { en: "item 6", fr: "element 6", ar: "عنصر 6" },
        { en: "item 7", fr: "element 7", ar: "عنصر 7" },
        [
          "<BButton>",
          { en: "button 0", fr: "bouton 0", ar: "زر 0" },
          [
            "<BButton>",
            { en: "button 1", fr: "bouton 1", ar: "زر 1" },
            ["<BButton>", { en: "button 2", fr: "bouton 2", ar: "زر 2" }],
          ],
        ],
      ],

      wbcObj: [
        "<ol|red>",
        {
          comp: "li",
          options: {
            class: "success pa-5",
            html: {
              en: "English content",
              ar: "محتوى اللغة الإنجليزية",
              fr: "Contenu anglais",
            },
          },
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
      BButtonLgang: {
        comp: "BButton",
        header: {
          en: "div__The Header of the bootstrap button",
          fr: "div__L'en-tête du bouton bootstrap",
          ar: "div__رأس زر bootstrap",
        },
        footer: {
          en: "div__The Footer of the bootstrap button",
          fr: "div__Le pied de page du bouton bootstrap",
          ar: "div__تذييل زر bootstrap",
        },
        options: {
          // class: (that) => ({ en: " pa-15 red", ar: "yellow pa-10", fr: "green pa-12" }),
          props: {
            // variant: "danger",
          },
          html: {
            en: "English Dynamyc BootStrap Button",
            fr: "Bouton de bootstrap Dynamyc français",
            ar: "زر bootstrap العربي Dynamyc",
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

<style></style>
