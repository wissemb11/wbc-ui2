(self["webpackChunkwbc_ui2"] = self["webpackChunkwbc_ui2"] || []).push([["src_views_WBCExternalComponents_vue"],{

/***/ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/WBCExternalComponents.vue?vue&type=style&index=0&id=e69b27e2&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/WBCExternalComponents.vue?vue&type=style&index=0&id=e69b27e2&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_vue_cli_service_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#ext-comps {\n  font-family: \"Avenir\", Helvetica, Arial, sans-serif;\n  text-align: center;\n  color: #2c3e50;\n  padding: 30px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/WBCExternalComponents.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/WBCExternalComponents.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import { WBC } from "wbc-ui2";
// console.log(WBC);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "WBCExternalComponents",
  data: function data() {
    return {
      excelFile: null
    };
  },
  components: {
    //WBC
  },
  methods: {
    handleFileUpload: function handleFileUpload(event) {
      var file = event.target.files[0];
      if (!file) return;

      // Set the file for rendering
      this.excelFile = file;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/WBCExternalComponents.vue?vue&type=template&id=e69b27e2":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/WBCExternalComponents.vue?vue&type=template&id=e69b27e2 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      id: "ext-comps"
    }
  }, [_c("h1", [_vm._v("WBC External Components")]), _c("h1", [_vm._v("JsonViewer : ƒ VueComponent(options)")]), _c("h1", [_vm._v("VCM : ƒ VueComponent(options)")]), _c("h1", [_vm._v("VueDocPreview : ƒ VueComponent(options)")]), _c("h1", [_vm._v("VueOfficeDocx : ƒ VueComponent(options)")]), _c("h1", [_vm._v("VueOfficeExcel : ƒ VueComponent(options)")]), _c("h1", [_vm._v("Excel files")]), _c("div", [_c("input", {
    attrs: {
      type: "file",
      accept: ".xls, .xlsx"
    },
    on: {
      change: _vm.handleFileUpload
    }
  }), _vm._v(' <VueOfficeExcel :src="excelFile" v-if="excelFile"> '), _vm.excelFile ? _c("VueOfficeExcel", {
    attrs: {
      src: _vm.excelFile
    }
  }) : _vm._e()], 1), _c("div", [_vm._v(' <VueOfficeExcel src="https://exinfm.com/excel%20files/cash_flow_model.xls" v-if="excelFile" /VueOfficeExcel> '), _c("VueOfficeExcel", {
    attrs: {
      value: "https://exinfm.com/excel%20files/cash_flow_model.xls"
    }
  })], 1), _c("h1", [_vm._v("WBAlert : ƒ VueComponent(options)")]), _c("h1", [_vm._v("WBC : ƒ VueComponent(options)")]), _c("h1", [_vm._v("WBDataViewer : ƒ VueComponent(options)")]), _c("h1", [_vm._v("WBHtml : ƒ VueComponent(options)")]), _c("h1", [_vm._v("WBLink : ƒ VueComponent(options)")]), _c("h1", [_vm._v("codemirror : ƒ VueComponent(options)")]), _c("h1", [_vm._v("pdf : ƒ VueComponent(options)")])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/WBCExternalComponents.vue?vue&type=style&index=0&id=e69b27e2&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/WBCExternalComponents.vue?vue&type=style&index=0&id=e69b27e2&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./WBCExternalComponents.vue?vue&type=style&index=0&id=e69b27e2&lang=css */ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/WBCExternalComponents.vue?vue&type=style&index=0&id=e69b27e2&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("1dd6ea29", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/WBCExternalComponents.vue":
/*!*********************************************!*\
  !*** ./src/views/WBCExternalComponents.vue ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WBCExternalComponents_vue_vue_type_template_id_e69b27e2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WBCExternalComponents.vue?vue&type=template&id=e69b27e2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/WBCExternalComponents.vue?vue&type=template&id=e69b27e2");
/* harmony import */ var _WBCExternalComponents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WBCExternalComponents.vue?vue&type=script&lang=js */ "./src/views/WBCExternalComponents.vue?vue&type=script&lang=js");
/* harmony import */ var _WBCExternalComponents_vue_vue_type_style_index_0_id_e69b27e2_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WBCExternalComponents.vue?vue&type=style&index=0&id=e69b27e2&lang=css */ "./src/views/WBCExternalComponents.vue?vue&type=style&index=0&id=e69b27e2&lang=css");
/* harmony import */ var _node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js */ "./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _WBCExternalComponents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  _WBCExternalComponents_vue_vue_type_template_id_e69b27e2__WEBPACK_IMPORTED_MODULE_3__.render,
  _WBCExternalComponents_vue_vue_type_template_id_e69b27e2__WEBPACK_IMPORTED_MODULE_3__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/WBCExternalComponents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/WBCExternalComponents.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/views/WBCExternalComponents.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_41_use_0_node_modules_vue_cli_service_lib_config_vue_loader_v15_resolve_compat_vue_loader_js_vue_loader_options_WBCExternalComponents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!../../node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./WBCExternalComponents.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-41.use[0]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/WBCExternalComponents.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_41_use_0_node_modules_vue_cli_service_lib_config_vue_loader_v15_resolve_compat_vue_loader_js_vue_loader_options_WBCExternalComponents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/WBCExternalComponents.vue?vue&type=style&index=0&id=e69b27e2&lang=css":
/*!*****************************************************************************************!*\
  !*** ./src/views/WBCExternalComponents.vue?vue&type=style&index=0&id=e69b27e2&lang=css ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_cli_service_lib_config_vue_loader_v15_resolve_compat_vue_loader_js_vue_loader_options_WBCExternalComponents_vue_vue_type_style_index_0_id_e69b27e2_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./WBCExternalComponents.vue?vue&type=style&index=0&id=e69b27e2&lang=css */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/cli-service/lib/config/vue-loader-v15-resolve-compat/vue-loader.js??vue-loader-options!./src/views/WBCExternalComponents.vue?vue&type=style&index=0&id=e69b27e2&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_cli_service_lib_config_vue_loader_v15_resolve_compat_vue_loader_js_vue_loader_options_WBCExternalComponents_vue_vue_type_style_index_0_id_e69b27e2_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_cli_service_lib_config_vue_loader_v15_resolve_compat_vue_loader_js_vue_loader_options_WBCExternalComponents_vue_vue_type_style_index_0_id_e69b27e2_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_cli_service_lib_config_vue_loader_v15_resolve_compat_vue_loader_js_vue_loader_options_WBCExternalComponents_vue_vue_type_style_index_0_id_e69b27e2_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_cli_service_lib_config_vue_loader_v15_resolve_compat_vue_loader_js_vue_loader_options_WBCExternalComponents_vue_vue_type_style_index_0_id_e69b27e2_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ })

}]);
//# sourceMappingURL=src_views_WBCExternalComponents_vue-legacy.js.map