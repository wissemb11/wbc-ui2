"use strict";
(self["webpackChunkwbc_ui2"] = self["webpackChunkwbc_ui2"] || []).push([["src_views_WBCLangage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/WBCLangage.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/WBCLangage.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// import { WBC } from "wbc-ui2";
// console.log(WBC);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WBCLangage",
  data: function data() {
    return {
      selectLang: {
        dive: true,
        comp: "VSelect",
        footer: [{
          en: "h1__The selected langage is English (en)",
          fr: "h1__La langue s\xE9lectionn\xE9e est fran\xE7aise (FR)",
          ar: "h1__اللغة المختارة هي العربية (AR)"
        }],
        options: {
          key: function key(that) {
            return "key-".concat(that.lg.lang);
          },
          props: {
            label: function label(that) {
              return {
                en: "Select Langage",
                fr: "Sélectionner la langue",
                ar: "اختر اللغة"
              };
            },
            items: [{
              text: "English",
              value: "en"
            }, {
              text: "Français",
              value: "fr"
            }, {
              text: "العربية",
              value: "ar"
            }],
            "item-text": function itemText(v) {
              return v.text;
            }
          },
          on: {
            change: function change(that) {
              return function (v) {
                alert(v);
                alert(that);
                console.log(that);
                that.lg.set(v);
                that.update();
              };
            }
          }
        }
      },
      nestedObj: {
        options: {
          class: "red pa-5"
        },
        a0: {
          en: "div__level0_0|grey pa-5 ma-2__white--text",
          fr: "li__Niveau0_0|ma-2 purple__",
          ar: "VCard__مستوى0_0|ma-1 brown__"
        },
        a1: {
          en: "div__level0_1|grey pa-5 ma-2__white--text",
          fr: "li__Niveau0_1|ma-2 purple__",
          ar: "VCard__مستوى0_1|ma-1 brown__"
        },
        a2: {
          options: {
            class: "blue pa-5"
          },
          a20: {
            en: "div__level1_0|grey pa-5 ma-2__white--text",
            fr: "li__Niveau1_0|ma-2 purple__",
            ar: "VCard__مستوى1_0|ma-1 brown__"
          },
          a21: {
            en: "div__level1_1|grey pa-5 ma-2__white--text",
            fr: "li__Niveau1_1|ma-2 purple__",
            ar: "VCard__مستوى1_1|ma-1 brown__"
          },
          html: {
            en: "div__level1_html|grey pa-5 ma-2__white--text",
            fr: "li__Niveau1_html|ma-2 purple__",
            ar: "VCard__مستوى1_html|ma-1 brown__"
          },
          a22: {
            options: {
              class: "yellow pa-5"
            },
            a220: {
              en: "div__level2_0|grey pa-5 ma-2__white--text",
              fr: "li__Niveau2_0|ma-2 purple__",
              ar: "VCard__مستوى2_0|ma-1 brown__"
            },
            a221: {
              en: "div__level2_1|grey pa-5 ma-2__white--text",
              fr: "li__Niveau2_1|ma-2 purple__",
              ar: "VCard__مستوى2_1|ma-1 brown__"
            },
            a223: {
              en: "div__level2_3|grey pa-5 ma-2__white--text",
              fr: "li__Niveau2_3|ma-2 purple__",
              ar: "VCard__مستوى2_3|ma-1 brown__"
            },
            a222: {
              options: {
                class: "green pa-5"
              },
              a2210: {
                en: "div__level3_0|grey pa-5 ma-2__white--text",
                fr: "li__Niveau3_0|ma-2 purple__",
                ar: "VCard__مستوى3_0|ma-1 brown__"
              },
              a2211: {
                en: "div__level3_1|grey pa-5 ma-2__white--text",
                fr: "li__Niveau3_1|ma-2 purple__",
                ar: "VCard__مستوى3_1|ma-1 brown__"
              },
              a2213: {
                en: "div__level3_3|grey pa-5 ma-2__white--text",
                fr: "li__Niveau3_3|ma-2 purple__",
                ar: "VCard__مستوى3_3|ma-1 brown__"
              },
              a2212: {
                options: {
                  class: "pink pa-5"
                },
                a22110: {
                  en: "div__level4_0|grey pa-5 ma-2__white--text",
                  fr: "li__Niveau4_0|ma-2 purple__",
                  ar: "VCard__مستوى4_0|ma-1 brown__"
                },
                a22111: {
                  en: "div__level4_1|grey pa-5 ma-2__white--text",
                  fr: "li__Niveau4_1|ma-2 purple__",
                  ar: "VCard__مستوى4_1|ma-1 brown__"
                },
                a22113: {
                  en: "div__level4_3|grey pa-5 ma-2__white--text",
                  fr: "li__Niveau4_3|ma-2 purple__",
                  ar: "VCard__مستوى4_3|ma-1 brown__"
                },
                a22112: {
                  options: {
                    class: "brown pa-5"
                  },
                  a221100: {
                    en: "div__level5_0|grey pa-5 ma-2__white--text",
                    fr: "li__Niveau5_0|ma-2 purple__",
                    ar: "VCard__مستوى5_0|ma-1 brown__"
                  },
                  a221101: {
                    en: "div__level5_1|grey pa-5 ma-2__white--text",
                    fr: "li__Niveau5_1|ma-2 purple__",
                    ar: "VCard__مستوى5_1|ma-1 brown__"
                  }
                }
              }
            }
          }
        },
        a3: {
          en: "div__level0_3|grey pa-5 ma-2__white--text"
        }
      },
      arrayItemLg: ["<~ol>", "<li>", {
        en: "item 0",
        fr: "element 0",
        ar: "عنصر 0"
      }, {
        en: "item 1",
        fr: "element 1",
        ar: "عنصر 1"
      }, {
        en: "item 2",
        fr: "element 2",
        ar: "عنصر 2"
      }, {
        en: "item 3",
        fr: "element 3",
        ar: "عنصر 3"
      }, {
        en: "item 4",
        fr: "element 4",
        ar: "عنصر 4"
      }, {
        en: "item 5",
        fr: "element 5",
        ar: "عنصر 5"
      }, {
        en: "item 6",
        fr: "element 6",
        ar: "عنصر 6"
      }, {
        en: "item 7",
        fr: "element 7",
        ar: "عنصر 7"
      }, ["<BButton>", {
        en: "button 0",
        fr: "bouton 0",
        ar: "زر 0"
      }, ["<BButton>", {
        en: "button 1",
        fr: "bouton 1",
        ar: "زر 1"
      }, ["<BButton>", {
        en: "button 2",
        fr: "bouton 2",
        ar: "زر 2"
      }]]]],
      wbcObj: ["<ol|red>", {
        comp: "li",
        options: {
          class: "success pa-5",
          html: {
            en: "English content",
            ar: "محتوى اللغة الإنجليزية",
            fr: "Contenu anglais"
          }
        }
      }, {
        comp: "VIcon",
        options: {
          class: "pa-15 warning",
          html: "mdi-tennis",
          style: {
            backgroundColor: "red"
          }
        }
      }],
      BButtonLgang: {
        comp: "BButton",
        header: {
          en: "div__The Header of the bootstrap button",
          fr: "div__L'en-tête du bouton bootstrap",
          ar: "div__رأس زر bootstrap"
        },
        footer: {
          en: "div__The Footer of the bootstrap button",
          fr: "div__Le pied de page du bouton bootstrap",
          ar: "div__تذييل زر bootstrap"
        },
        options: {
          // class: (that) => ({ en: " pa-15 red", ar: "yellow pa-10", fr: "green pa-12" }),
          props: {
            // variant: "danger",
          },
          html: {
            en: "English Dynamyc BootStrap Button",
            fr: "Bouton de bootstrap Dynamyc français",
            ar: "زر bootstrap العربي Dynamyc"
          }
        }
      }
    };
  },
  components: {
    //WBC
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/WBCLangage.vue?vue&type=template&id=716f211a":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/WBCLangage.vue?vue&type=template&id=716f211a ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "apppp"
    }
  }, [_c("WBC", {
    attrs: {
      item: _vm.selectLang
    }
  }), _vm._v(" BOOTSTRAP: "), _c("WBC", {
    attrs: {
      item: {
        en: "english text",
        fr: "texte francais",
        ar: "النص "
      }
    }
  }), _vm._v(" BOOTSTRAP: "), _c("WBC", {
    attrs: {
      item: _vm.BButtonLgang
    }
  }), _c("p", [_vm._v("**********")]), _c("WBC", {
    attrs: {
      item: _vm.item
    }
  }), _c("div", [_c("h1", [_vm._v("Exmple of a Bootstrap Button multi-langage")]), _c("h4", [_vm._v("source:")]), _vm._v(" < WBC :item=" + _vm._s(_vm.BButtonLgang) + "> < /WBC> "), _c("h4", [_vm._v("output:")]), _c("WBC", {
    attrs: {
      item: _vm.BButtonLgang
    }
  })], 1), _c("div", [_c("h1", [_vm._v("Exmple of a WBC Object with multi-langage")]), _c("h4", [_vm._v("source:")]), _vm._v(" < WBC :item=" + _vm._s(_vm.wbcObj) + "> < /WBC> "), _c("h4", [_vm._v("output:")]), _c("WBC", {
    attrs: {
      item: _vm.wbcObj
    }
  })], 1), _c("div", [_c("h1", [_vm._v("Exmple of a multi-langage list")]), _c("h4", [_vm._v("source:")]), _vm._v(" < WBC :item=" + _vm._s(_vm.arrayItemLg) + "> < /WBC> "), _c("h4", [_vm._v("output:")]), _c("WBC", {
    attrs: {
      item: _vm.arrayItemLg
    }
  })], 1), _c("div", [_c("h1", [_vm._v("Exmple of a multi-langage WBC Nested Object")]), _c("h4", [_vm._v("source:")]), _vm._v(" < WBC :item=" + _vm._s(_vm.nestedObj) + "> < /WBC> "), _c("h4", [_vm._v("output:")]), _c("WBC", {
    attrs: {
      item: _vm.nestedObj
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./src/views/WBCLangage.vue":
/*!**********************************!*\
  !*** ./src/views/WBCLangage.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WBCLangage_vue_vue_type_template_id_716f211a__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WBCLangage.vue?vue&type=template&id=716f211a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/WBCLangage.vue?vue&type=template&id=716f211a");
/* harmony import */ var _WBCLangage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WBCLangage.vue?vue&type=script&lang=js */ "./src/views/WBCLangage.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
  _WBCLangage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _WBCLangage_vue_vue_type_template_id_716f211a__WEBPACK_IMPORTED_MODULE_2__.render,
  _WBCLangage_vue_vue_type_template_id_716f211a__WEBPACK_IMPORTED_MODULE_2__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/WBCLangage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/WBCLangage.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/views/WBCLangage.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_41_use_0_node_modules_vue_cli_service_lib_config_vue_loader_v15_resolve_compat_vue_loader_js_vue_loader_options_WBCLangage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!../../node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./WBCLangage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/WBCLangage.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_41_use_0_node_modules_vue_cli_service_lib_config_vue_loader_v15_resolve_compat_vue_loader_js_vue_loader_options_WBCLangage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
//# sourceMappingURL=src_views_WBCLangage_vue.js.map