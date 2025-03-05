"use strict";
(self["webpackChunkwbc_ui2"] = self["webpackChunkwbc_ui2"] || []).push([["src_views_DynamicWBC_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/DynamicWBC.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/DynamicWBC.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// import { WBC } from "wbc-ui2";
// console.log(WBC);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DynamicWBC",
  data: function data() {
    return {
      item: {
        comp: "div",
        dive: true,
        options: {
          html: function html(that) {
            console.log("that", that);
            var text = "h5__This a dynamic text in terms of the langage and stored as a cookie (with name 'cookie0'). The component is Dynamic due the property 'dive: true' in the item object|red";
            that.cookies.set("cookie0", text);
            return text;
          }
        }
      },
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
      }
    };
  },
  components: {
    //WBC
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/DynamicWBC.vue?vue&type=template&id=6027ff73":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/DynamicWBC.vue?vue&type=template&id=6027ff73 ***!
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
  }, [_vm._v(" Each property can be seen as a function of the itemAcessebility of the component itself, where the function propserty is executed while the component is mounted (or created or initiated). "), _c("br"), _vm._v(" The structure of the itemaccessibility is: "), _c("pr", [_vm._v(" { aes : {enc: ƒ, dec: ƒ} alert : ƒ alert() compKeyy : ƒ compKeyy() cookies : {install: ƒ, config: ƒ, get: ƒ, set: ƒ, remove: ƒ, …} data : {__ob__: Observer} data0 : {…} emit : ƒ (event) extData : {keyy: '', wrap: null, children: null} get : ƒ () hide : ƒ hide(v) isValid : null isValidFn : ƒ isValidFn() lg : {lang: 'en', get: ƒ, set: ƒ} loggedIn : false markdown : {md2Html: ƒ, html2Md: ƒ} moment : ƒ hooks() props : {…} proto : {_init: ƒ, $set: ƒ, $delete: ƒ, $watch: ƒ, $on: ƒ, …} queryData : ƒ queryData(_ref) ref : ƒ ref() refs : {rawHtml: undefined} routeParams : {} router : VueRouter {app: Vue, apps: Array(72), options: {…}, beforeHooks: Array(0), resolveHooks: Array(0), …} set : ƒ (val) storage : Storage {-walletlink:https://www.walletlink.org:EIP6963ProviderUUID: '2edeaa78-d54e-4828-b32f-67ccc548e7f9', loglevel: 'ERROR', length: 2} store : Store {_committing: false, _actions: {…}, _actionSubscribers: Array(0), _mutations: {…}, _wrappedGetters: {…}, …} update : ƒ update() user : undefined vNodes : {raw0: VNode, main: VNode, __ob__: Observer} val : {set: ƒ, get: ƒ} validators : {required: ƒ, banned: ƒ, includes: ƒ, excludes: ƒ, username: ƒ, …} vm : VueComponent {_uid: 95, _isVue: true, __v_skip: true, _scope: EffectScope, $options: {…}, …} watch : ƒ (expOrFn, cb, options) } ")]), _c("h1", [_vm._v("Dynamic mode is activated when the property 'dive: true'")]), _c("div", [_c("h1", [_vm._v("Exmple of a Dynamic item")]), _c("h4", [_vm._v("source:")]), _vm._v(" < WBC :item=" + _vm._s(_vm.stringify(_vm.item)) + "> < /WBC> "), _c("h4", [_vm._v("output:")]), _c("WBC", {
    attrs: {
      item: _vm.item
    }
  })], 1), _c("div", [_c("h1", [_vm._v("Exmple of a Selecting a langage for the app")]), _c("h4", [_vm._v("source:")]), _vm._v(" < WBC :item= '" + _vm._s(_vm.stringify(_vm.selectLang)) + "' > < /WBC> "), _c("h4", [_vm._v("output:")]), _c("WBC", {
    attrs: {
      item: _vm.selectLang
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./src/views/DynamicWBC.vue":
/*!**********************************!*\
  !*** ./src/views/DynamicWBC.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DynamicWBC_vue_vue_type_template_id_6027ff73__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DynamicWBC.vue?vue&type=template&id=6027ff73 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/DynamicWBC.vue?vue&type=template&id=6027ff73");
/* harmony import */ var _DynamicWBC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DynamicWBC.vue?vue&type=script&lang=js */ "./src/views/DynamicWBC.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
  _DynamicWBC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DynamicWBC_vue_vue_type_template_id_6027ff73__WEBPACK_IMPORTED_MODULE_2__.render,
  _DynamicWBC_vue_vue_type_template_id_6027ff73__WEBPACK_IMPORTED_MODULE_2__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/DynamicWBC.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/DynamicWBC.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/views/DynamicWBC.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_41_use_0_node_modules_vue_cli_service_lib_config_vue_loader_v15_resolve_compat_vue_loader_js_vue_loader_options_DynamicWBC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!../../node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./DynamicWBC.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/DynamicWBC.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_41_use_0_node_modules_vue_cli_service_lib_config_vue_loader_v15_resolve_compat_vue_loader_js_vue_loader_options_DynamicWBC_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);
//# sourceMappingURL=src_views_DynamicWBC_vue-legacy.js.map