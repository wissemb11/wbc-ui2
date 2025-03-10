<script>
import WBLink from "./WBLink.vue";
import JsonViewer from "vue-json-viewer";

import { generalVal, objLang } from "../globals/variables";

import vuetify from "../plugins/vuetify";
import * as vuetifyModule from "vuetify/lib";

// import Vuex from 'vuex';

// // import VueOfficePdf from '@vue-office/pdf'
// import VueOfficeExcel from '@vue-office/excel'
// import VueOfficeDocx from '@vue-office/docx'

import MarkdownIt from "markdown-it";
// import TurnDown from "turndown";

export default {
  name: "WBHtml",
  props: {
    html: null,
  },

  data() {
    return {
      MarkdownIt: new MarkdownIt(),
    };
  },

  render(h) {
    let wbhtmlToRender = this.mainRender(this.html, h);
    if (Array.isArray(wbhtmlToRender)) {
      return h("span", { key: `${this.html}` }, [wbhtmlToRender]);
    } else {
      return this.mainRender(this.html, h);
    }
  },
  methods: {
    mainRender(item, h) {
      // console.log("ellllllllllllllllllllll000000000000 :>> ", item);
      let el0 = this.objLang(this.strToObj(item), this?.$store?.state?.lg);
      // console.log(
      //   "11111111111111111111",
      //   item,
      //   typeof item,
      //   this.strToObj(item),
      //   typeof this.strToObj(item)
      // );
      // console.log('dddddddddddddddd',el0)
      let el = this.styling(el0);
      // let el = this.styling(item);

      // let el=item
      if (!el) {
        return null;
      } else if (["string", "number", "boolean"].includes(typeof el)) {
        // let vn = h('span', {
        //     domProps: {
        //         innerHTML: this.strToObj(el)
        //     }
        // })

        // alert(el);
        return h("span", {
          domProps: {
            innerHTML: this.strToObj(el),
          },
        }).children;
      } else if (Array.isArray(el)) {
        // let el_=el.filter(e=>e?.[0]!='')
        let finalOutputVn = [];

        el.forEach((el_) => {
          // for (let el_ of el) {
          let outputVn = [];

          // console.log("aHtml :>> ", el_);
          for (let aHtml of el_?.[1] || []) {
            // console.log(66666, html)
            // let aHtml=html?.[1]?.[0]||'ffffffffffffff'

            let layout;
            let layoutWrap;
            let link = this.strToObj(aHtml?.[2]);
            let theHtml = aHtml[0];
            let theWrap;

            if (aHtml[0].includes("__")) {
              theWrap = aHtml[0].split("__")[0];
              theHtml = aHtml[0].split("__")[1];
            }

            if (aHtml?.[1] && aHtml?.[1]?.includes("__")) {
              layoutWrap = this.strToObj(aHtml[1].split("__")?.[0]);
              layout = this.strToObj(aHtml[1].split("__")[1]);
            } else {
              layoutWrap = {};
              layout = this.strToObj(aHtml?.[1] || {});
            }

            if (typeof layout == "string") {
              // alert(layout);
              layout = {
                class: layout,
              };
            }
            if (typeof layoutWrap == "string") {
              layoutWrap = {
                class: layoutWrap,
              };
            }

            if (["", "null", "undefined"].includes(aHtml[0])) {
              return h("div", {}, ["null"]);
            } else {
              let theOutputVn; /* = this.strToObj(theHtml) */

              if (theWrap == "MD" && typeof theHtml == "string") {
                // theHtml = h("div", {
                //   // ...layoutWrap,
                //   ...layout,
                //   domProps: {
                //     // innerHTML: this.MarkdownIt.render(theHtml)
                //     innerHTML: this.objLang(
                //       this.strToObj(this.MarkdownIt.render(theHtml)),
                //       this?.$store?.state?.lg
                //     ),
                //   },
                // });

                theHtml = this.MarkdownIt.render(theHtml);
              }

              if (this.isNonEmpty(link)) {
                theOutputVn = h("WBLink", {
                  // ...layout,
                  ...(theWrap == "MD"
                    ? {
                        ...layout,
                        class: "markdown-body " + layout?.class || "",
                        directives: [
                          {
                            name: "highlight",
                            value: undefined,
                            modifiers: {},
                          },
                        ],
                      }
                    : layout),

                  props: {
                    to: this.strToObj(aHtml[2]),
                    html: theHtml,
                    style_: {},
                    attrs_: {},
                    // children: theHtml,
                  },
                });
              } else {
                if (layout) {
                  theOutputVn = h("span", {
                    ...layout,
                    domProps: {
                      innerHTML: this.objLang(
                        this.strToObj(theHtml),
                        this?.$store?.state?.lg
                      ),
                    },
                  });
                } else {
                  theOutputVn = this.objLang(
                    this.strToObj(theHtml),
                    this?.$store?.state?.lg
                  );
                }

                // console.log("theOutputVn", theOutputVn);
              }

              if (theWrap) {
                outputVn.push(
                  h(
                    theWrap == "MD" ? "div" : theWrap,
                    {
                      ...(theWrap == "MD"
                        ? {
                            ...layout,
                            class: "markdown-body " + layout?.class || "",
                            directives: [
                              {
                                name: "highlight",
                                value: undefined,
                                modifiers: {},
                              },
                            ],
                          }
                        : {}),
                      ...layoutWrap,
                      // ...layout,
                    },
                    [theOutputVn]
                  )
                );
              } else {
                outputVn.push(theOutputVn);
              }
            }
          }

          let wrapTag = "span",
            wrapOptions = {},
            wrapLink = null;
          if (typeof el_[0] == "string") {
            [wrapTag, wrapOptions, wrapLink] = el_[0].split("|");
          }

          let wrapOptionsObj = this.strToObj(wrapOptions);
          if (typeof wrapOptionsObj == "string") {
            wrapOptionsObj = {
              class: wrapOptionsObj,
            };
          }
          if (wrapLink) {
            outputVn = h("WBLink", {
              // ...wrapOptionsObj,
              props: {
                to: this.strToObj(wrapLink),
                html: outputVn,
                style_: {},
                attrs_: {},
              },
            });
          }
          let thewrapVn = h(wrapTag, { ...wrapOptionsObj }, [outputVn]);
          // console.log('ggggggggggggggggg',thewrapVn)
          // thewrapVn =h(wrapTag,{...wrapOptionsObj},outputVn)

          finalOutputVn.push(...(thewrapVn?.children || thewrapVn));
        });
        // return h('span', {}, [finalOutputVn])
        return finalOutputVn;
      } else if (typeof el == "object") {
        // console.log(321233333333333333333333,el)
        let ele = this.objLang(el, this?.$store?.state?.lg);

        return this.mainRender(this.styling(ele), h);
        /*  h('WBHtml', {
													props: {
														html: this.objLang(el,this?.$store?.state?.lg)
													}
												} )*/
      }
    },
    generalVal,
    objLang,
    strToObj(input) {
      if (typeof input === "string") {
        try {
          return JSON.parse(input);
        } catch {
          try {
            return eval(`(${input})`);
          } catch {
            return input;
            return eval(input);
          }
        }
      } else {
        return input;
      }
    },
    styling(el) {
      let el_ = el;
      if (typeof el !== "string") return `${JSON.stringify(el)}`;
      if (typeof el == "string" && el.indexOf("[[") == 0) {
        el = "{{li}}" + el;
      }
      if (typeof el == "string" && el.indexOf("[[") != 0 && el[el.length - 1] != "]]") {
        el = "{{span}}[[" + el + "]]";
      }
      if (
        typeof el == "string" &&
        (el.includes("[[") ||
          el.includes("]]") ||
          el.includes("|") ||
          el.includes("{{") ||
          el.includes("}}")) &&
        (el[0] != "{" || el[el.length - 1] != "}")
      ) {
        // let el_= [...el]
        el_ = el
          .split("{{")
          .filter((eee) => !!eee)
          .map((ee) =>
            ee.split("}}").map((ee) => {
              if (!(ee.includes("[[") || ee.includes("]]"))) {
                return ee;
              }
              return ee
                .replace(/\[\[/g, "**")
                .replace(/\]\]/g, "**")
                .split("**")
                .filter((eee) => !!eee)
                .map((h) => h.split("|"));
            })
          );
        // el_ = el.split('#').map(ee=>ee.replace(/\[\[/g, "**")
        //     .replace(/\]\]/g, "**")
        //     // .split("**")
        //     // .map((h) => h.split("|"))
        //     );
      }
      // return el_;
      return this.strToObj(el_);
    },
  },
  computed: {
    // ...Vuex.mapGetters(['urlServer', 'user', 'loggedIn', 'lg', 'labels']),
  },
  components: {
    JsonViewer,
    ...vuetifyModule,
    vuetify,
    WBLink,
  },
  mounted() {
    // console.log('rrrrrrrrrrrrrrrrrrr',this,this.$router,this.$store)
  },
};
</script>
