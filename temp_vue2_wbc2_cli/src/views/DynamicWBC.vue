<template>
  <div id="apppp">
    Each property can be seen as a function of the itemAcessebility of the component
    itself, where the function propserty is executed while the component is mounted (or
    created or initiated).
    <br />
    The structure of the itemaccessibility is:
    <pr>
      { aes : {enc: ƒ, dec: ƒ} alert : ƒ alert() compKeyy : ƒ compKeyy() cookies :
      {install: ƒ, config: ƒ, get: ƒ, set: ƒ, remove: ƒ, …} data : {__ob__: Observer}
      data0 : {…} emit : ƒ (event) extData : {keyy: '', wrap: null, children: null} get :
      ƒ () hide : ƒ hide(v) isValid : null isValidFn : ƒ isValidFn() lg : {lang: 'en',
      get: ƒ, set: ƒ} loggedIn : false markdown : {md2Html: ƒ, html2Md: ƒ} moment : ƒ
      hooks() props : {…} proto : {_init: ƒ, $set: ƒ, $delete: ƒ, $watch: ƒ, $on: ƒ, …}
      queryData : ƒ queryData(_ref) ref : ƒ ref() refs : {rawHtml: undefined} routeParams
      : {} router : VueRouter {app: Vue, apps: Array(72), options: {…}, beforeHooks:
      Array(0), resolveHooks: Array(0), …} set : ƒ (val) storage : Storage
      {-walletlink:https://www.walletlink.org:EIP6963ProviderUUID:
      '2edeaa78-d54e-4828-b32f-67ccc548e7f9', loglevel: 'ERROR', length: 2} store : Store
      {_committing: false, _actions: {…}, _actionSubscribers: Array(0), _mutations: {…},
      _wrappedGetters: {…}, …} update : ƒ update() user : undefined vNodes : {raw0: VNode,
      main: VNode, __ob__: Observer} val : {set: ƒ, get: ƒ} validators : {required: ƒ,
      banned: ƒ, includes: ƒ, excludes: ƒ, username: ƒ, …} vm : VueComponent {_uid: 95,
      _isVue: true, __v_skip: true, _scope: EffectScope, $options: {…}, …} watch : ƒ
      (expOrFn, cb, options) }
    </pr>

    <h1>Dynamic mode is activated when the property 'dive: true'</h1>

    <div>
      <h1>Exmple of a Dynamic item</h1>
      <h4>source:</h4>
      &lt; WBC :item={{ stringify(item) }}> &lt; /WBC>
      <h4>output:</h4>
      <WBC :item="item"></WBC>
    </div>

    <div>
      <h1>Exmple of a Selecting a langage for the app</h1>
      <h4>source:</h4>
      &lt; WBC :item= '{{ stringify(selectLang) }}' > &lt; /WBC>
      <h4>output:</h4>
      <WBC :item="selectLang"></WBC>
    </div>
  </div>
</template>

<script>
// import { WBC } from "wbc-ui2";
// console.log(WBC);

export default {
  name: "DynamicWBC",
  data() {
    return {
      item: {
        comp: "div",
        dive: true,
        options: {
          html: (that) => {
            console.log("that", that);
            let text =
              "h5__This a dynamic text in terms of the langage and stored as a cookie (with name 'cookie0'). The component is Dynamic due the property 'dive: true' in the item object|red";
            that.cookies.set("cookie0", text);
            return text;
          },
        },
      },
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
    };
  },
  components: {
    //WBC
  },
};
</script>

<style></style>
