import Vue from "vue";
import App from "./App.vue";
import router from "./router"; // Import the router
import store from "./store"; // Import the store

// import "github-markdown-css/github-markdown.css"; // Add this line
import "@/assets/css/markdown.css"; // Add this line

import hljs from "highlight.js";
import "highlight.js/styles/github.css"; // GitHub-like style

import vuetify from "./plugins/vuetify"; // Path to your Vuetify plugin
import "vuetify/dist/vuetify.min.css"; // Ensure you import the Vuetify CSS

import * as vuetifyModule from "vuetify/lib";
// global.vuetifyModule = vuetifyModule;

// import VueRouter from "vue-router";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import * as bootstrabModule from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "@mdi/font/css/materialdesignicons.min.css"; // Material Design Icons

import WBHtml from "./components/WBHtml.vue";
import WBLink from "./components/WBLink.vue";
import WBDataViewer from "./components/WBDataViewer.vue";
import WBAlert from "./components/WBAlert.vue";

import JsonViewer from "vue-json-viewer";
import MarkdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor"; // Import markdown-it-anchor

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: false, // Prevent line breaks from breaking tables
}).use(markdownItAnchor, {
  permalink: markdownItAnchor.permalink.headerLink({ safariReaderFix: true }),
  slugify: (s) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
});

import vueResource from "vue-resource";
import VueOfficeExcel from "@vue-office/excel";
import VueOfficeDocx from "@vue-office/docx";
import VueDocPreview from "vue-doc-preview";
import pdfvuer from "pdfvuer";

import VueCodemirror from "vue-codemirror";
import { codemirror } from "vue-codemirror";

import "codemirror/lib/codemirror.css";
// require more codemirror resource...
import "codemirror/mode/javascript/javascript.js";

import TurnDown from "turndown";

import html_ressources from "./globals/html_ressources";
import VueCookies from "vue-cookies";
import VueMoment from "vue-moment";
import moment from "moment-timezone";

import VueCryptojs from "vue-cryptojs";
import wbcWikiObj from "./globals/wbcWikiObj";
import Vuex from "vuex";

Vue.config.productionTip = false;

let languages = ["en", "fr", "ar"];

let WBC;

alert("hhhhhhhhhhhhhhh");
export function install(app, options = {}) {
  if (!app) {
    console.error("Vue is not available in install function");
    return;
  }

  app.directive("highlight", (el) => {
    const blocks = el.querySelectorAll("pre code");
    blocks.forEach((block) => {
      hljs.highlightElement(block);
    });
  });

  app.use(vuetify);
  // import TheModelMyAlertComp from "@/components/theComps/myAlertComp/TheModelMyAlertComp.vue";

  app.use(Vuex);
  // app.use(VueRouter);

  // Make BootstrapVue available throughout your project
  app.use(BootstrapVue);
  // Optionally install the BootstrapVue icon components plugin
  app.use(IconsPlugin);

  app.use(JsonViewer);
  app.use(VueCodemirror, {
    // optional default global options
    autofocus: true,
    disabled: false,
    indentWithTab: true,
    tabSize: 2,
    // ...
  });

  app.prototype.$md = md;

  app.use(VueCookies);
  app.use(VueMoment, {
    moment,
  });

  app.use(VueCryptojs);

  let wbcObj = {
    updated() {
      if (this.item_ instanceof Object) {
        // console.log('xxxxxxxxxxxxxxxxxxxxxyyyyyyyyyyyyyyyyyyyyy')
        if (this.item_?.updater) {
          this.item_.updater(this.itemAccessebility);
        }
      }
      if (this.item_ instanceof Object) {
        if (this.item_?.options) {
          this.item_.options.isValid = this.internalValueIsValid;
        }
        this.item_.asChild = () => this.itemAccessebility;
      }
    },
    render(h) {
      if (this.item instanceof Object) {
        // console.log('xxxxxxxxxxxxxxxxxxxxx', this.item?.tracker)
        if (typeof this.item?.tracker == "function") {
          this.item.tracker(this.itemAccessebility);
        }
      }

      // let finalRender = this.toWBC_(this.objLang(this.item,this.lang),h,this.children_,this.wrap_) || {};
      let finalRender =
        this.toWBC_(this.item_, h, this.children_, this.wrap_) || {};
      // let finalRender

      // // if (!finalRender) { return null }

      // if(this.item_?.output)
      //   {
      //     // alert('waw')
      //     // this.toWBC_(this.item_, h, this.children_, this.wrap_);

      //   finalRender =this.outputRender(h, this.item_)

      //   }
      //   else {

      //   finalRender =this.toWBC_(this.item_, h, this.children_, this.wrap_);
      // }

      // let mainToRender = this.toWBC_(el, h_, this.children_, this.wrap_);

      /* 
            let el = this.item_
            let h_ = h
            let mainToRender = finalRender
            if (el?.output) {
              let theOutput = this.clone(el?.output || {})
      
              let f = (val) => this.vNodes?.[val] || val
              let obj = this.transfObj(theOutput, f)
      
              //     mainToRender = h_('WBC', {
              //       keyy: `arr-key-${this.computedKey(el?.options?.key)}-${el.length}`,
              //       props: {
              //         item: obj,
              //       },
              //     })
      
      
                    let o = { raw: this.main }
                       this.project(theOutput, o)
                   mainToRender = theOutput 
      
      
      
              if (typeof theOutput == 'function') {
                // this.vNodes=vNodes
      
                // alert(111111)
      
                mainToRender = this.toWBC_(el.output(h_, this.itemAccessebility), h_);
                // mainToRender = h_('WBC', { props: { item: el.output(h_, this.itemAccessebility) }});
                // mainToRender = el.output(h_, this.itemAccessebility) 
                return mainToRender
              }
      
              else if (Array.isArray(theOutput)) {
      
                let obj = theOutput.map((e) => {
      
                  if (this.vNodes?.[`${e}`]) { return this.vNodes[`${e}`] }
                  // else { return e}
                  else {
                    return h_('WBC', {
                      keyy: `wbhtml-key-${this.computedKey(el?.options?.key)}-${el.length}`,
                      props: {
                        item: this.transfObj(e, f),
                      },
                    })
                  }
                })
                mainToRender = obj
      
      
      
                //  let f = (val) => {
                //    if (val == 'wbcProps') {
                //       return this.wbcProps(el, h_)
                //    }
                //    if (val == 'raw') {
                //      return this.main
                //    }
                //    return this.vNodes?.[val] || val
                //  }
                // let o = {...this.vNodes,raw:this.main}
                //   let obj = this.project(theOutput, o)
                // mainToRender = theOutput
      
                // mainToRender = h_('WBC', {
                //   keyy: `arr-key-${this.computedKey(el?.options?.key)}-${el.length}`,
                //   props: {
                //     item: this.transfObj(obj, f),
                //   },
                // })
      
      
              }
      
              else if (
                ['boolean', 'string', 'number'].includes(typeof theOutput)
              ) {
      
                if (theOutput.endsWith('Html')) {
                  alert(theOutput)
                  // let obj = this.transfObj(theOutput, f)
                  // mainToRender =  this.transfObj(theOutput, f)
                  mainToRender = h_('WBC', { props: { item: this.transfObj(el.output, f) } })
                  // mainToRender = h_('WBC', {
                  //   keyy: `arr-key-${this.computedKey(el?.options?.key)}-${el.length}`,
                  //   props: {
                  //     item: obj,
                  //   },
                  // })
      
      
                }
                else
                  if (this.vNodes?.[theOutput]) { mainToRender = this.vNodes?.[theOutput] }
                  else {
      
                    mainToRender = h_('WBC', {
                      keyy: `wbhtml-key-${this.computedKey(el?.options?.key)}-${el.length
                        }`,
                      props: {
                        item: this.transfObj(el.output, f),
                      },
                    });
                  }
              } else if (this.isPlainObject(theOutput)) {
                // alert('outputttttttttttt')
                // alert(theOutput)
      
                let obj = {}
                Object.entries(theOutput).forEach(([key, val]) => {
      
                  if (this.vNodes?.[`${val}`]) { obj[key] = this.vNodes[`${val}`] }
                  // else { obj[key] = e}
                  else {
                    obj[key] = h_('WBC', {
                      keyy: `wbhtml-key-${this.computedKey(el?.options?.key)}-${el.length}`,
                      props: {
                        item: this.transfObj(val, f),
                      },
                    })
                  }
                })
                //   alert(key)
      
                // let f = (val) => this.vNodes?.[val] || val
                // let obj = this.transfObj(theOutput, f)
      
                //   if (typeof val=='string' && this.vNodes?.[val]) {
                //     obj[key] = this.vNodes[val]
                //   }
                //   else { obj[key] = this.transfObj(theOutput, f) }
                // })
                // mainToRender=obj
      
      
                // console.log('objjjjjjjjjjjjj :>> ', obj);
                // let f = (val) => this.vNodes?.[val] || val
                // let obj = this.transfObj(theOutput, f)
      
                mainToRender = h_('WBC', {
                  keyy: `wbhtml-key-${this.computedKey(el?.options?.key)}-${el.length}`,
                  props: {
                    item: obj,
                  },
                });
      
              }
              else {
                alert(theOutput)
                let obj = this.transfObj(theOutput, f)
                // mainToRender =  this.transfObj(theOutput, f)
                // mainToRender = theOutput.endsWith('Html') ? h_('WBC', { props: { item: this.vNodes[theOutput] } }) : this.transfObj(theOutput, f)
                mainToRender = h_('WBC', {
                  keyy: `arr-key-${this.computedKey(el?.options?.key)}-${el.length}`,
                  props: {
                    item: obj,
                  },
                })
      
      
              }
      
            }
      
            finalRender=mainToRender */

      // 	if (typeof this.item_?.protected!='boolean') {
      // 		finalRender= h('WBC', {
      // 		/* keyy: `wbc-key-header-${this.computedKey(el?.options?.key)}`, */ props:
      // 		{ item: this.item_?.protected },
      // 	})

      // }
      // else if(this.item_?.protected===true){

      // 		let protectedContent = {
      // 		en: "Forbidden access",
      // fr:'Accès interdit',
      // ar:'الوصول ممنوع'
      // 	}
      // 	finalRender= h('WBC', {
      // 		/* keyy: `wbc-key-header-${this.computedKey(el?.options?.key)}`, */ props:
      // 			{ item: protectedContent },
      // 	})

      // }
      // let finalRender = this.toWBC_( h) || {};

      /* if (typeof this.item_?.output == 'function') {
          // alert(111111)
        	

          finalRender = this.item_.output(this.itemAccessebility, h);
        } */ /*  else if (outputArray) {
finalRender = h(
'VCard',
{},
outputArray.map(
(e) => VNs?.[e] || h('VCard', { class: 'red pa-10 ma-10' }, [`The output item "${e}" is not activated in options.`])
)
);
} */
      // return h('div',{},[finalRender,this.alert(h,...this.alertObjs)])
      // if(this.vNodes.alert){
      // return this.alert
      // return this.alert(99999,'ggggggggg',{comp:'li',a:'aaaaa'})(h)

      // return h('div', {on: { 'mousedown': this.handleMouseDown, mouseup: this.handleMouseUp } }, [finalRender])
      // // let VNs = this.mainRender(this.item_, h)||{};
      // let VNs = this.toWBC_(this.item_, h)||{};

      // // let finalRender = this.mainRender(this.item_,h);
      // // return h('li',{},[finalRender.main]).children
      // // return h('li',{},[finalRender.close]).children
      // // finalRender=h('li',['dddddddddddddd',this.mainRender(this.item_,h),this.itemSrc(this.item_,this.item0,h)])

      // let outputArray
      // if (this.item_?.output == 'all' || this.item_?.options?.mode == 'dev') { outputArray = Object.keys(VNs) }
      // else if (Array.isArray(this.item_?.output)) { outputArray = this.item_?.output }

      // if (this.item_?.options.mode == 'dev') {

      // 	finalRender = VNs.all
      // }
      // else if (typeof this.item_?.output == 'function') {
      // 	// alert(111111)
      // 	finalRender = this.item_.output(this.itemAccessebility, h);
      // } else if (outputArray) {
      // 	finalRender = h(
      // 		'VCard',
      // 		{},
      // 		outputArray.map(
      // 			(e) => VNs?.[e] || h('VCard', { class: 'red pa-10 ma-10' }, [`The output item "${e}" is not activated in options.`])
      // 		)
      // 	);
      // }

      // else { finalRender = VNs?.main }

      // console.log('finalRender :>> ', finalRender);
      if (Array.isArray(finalRender)) {
        // finalRender = h('span', [...finalRender.filter(e=>e!=null)]);
        finalRender = h(
          "span",
          finalRender
            .filter((e) => e)
            .map((e) => {
              return e?.$el?.children || e;
              return e;
            })
        );

        // return finalRender
      }

      // if ()) {
      if (this.select === true || this.isNonEmpty(this.alertObjs)) {
        // let nameEl=this.randomKey('',3).toLowerCase()

        let selectItemOptions = {
          // key: `key-${this.alertObjs.length}`,
          class: "pa-1 ma-1",
          style: {
            backgroundColor: this.rColor,
            border: "10px dashed black",
          },
          attrs: {
            title:
              "WBC " + `${this.nameEl}` + "===>" + this.isVnode(this.item_)
                ? "VNode"
                : JSON.stringify(this.item_),
          },
        };

        // finalRender = h('div', selectItemOptions, [this.nameEl, finalRender, h('JsonViewer', { props: { value: this.alertObjs } })]);
        finalRender = h("div", selectItemOptions, [
          `${this.isVnode(this.item_) ? "VNode:" : ""}${this.nameEl}=>`,
          finalRender,
          h("WBAlert", { props: { items: this.alertObjs } }),

          // h('WBAlert', { props: { items: this.alertObjs } })
        ]);
      }

      /* if (this.isNonEmpty(this.alertObjs))
        return h('div', [h('JsonViewer',{props:{value:['ssss','aaaa']}}),finalRender]);
      else
      */

      // return h('div', [this.vNodes.raw, this.vNodes.wbcProps,finalRender]);
      return finalRender;
      // return h('div',{},Object.keys(VNs).map(k=>(h('li',{class:"ma-1 pa-1"},[k,VNs[k]?.children||VNs[k]]))));
      // return Array.isArray(finalRender)?finalRender:[finalRender];
    },

    props: {
      item: {
        default: () => {
          return null;
        },
      },
      children: {
        default: () => {
          return null;
        },
      },
      wrap: {
        default: () => {
          return null;
        },
      },
      extKey: {
        default: () => {
          return "";
        },
      },
      wiki: {
        default: () => {
          return null;
        },
      },
      transform: {
        default: () => {
          return true;
        },
      },
    },
    data() {
      return {
        fileContent: null,

        main: null,
        internalValue: "888888888888",
        internalValueIsValid: null,
        menu: false,
        switch: false,
        hide: false,
        wbcItem: null,
        compMedia: null,
        mediaData: null,
        codeMirroMode: "text/html",
        media: null,
        // lg: this.lang,
        // keyy: this.randomKey(this.lang),
        // item0: {},
        item_: {},
        watch_: [],
        rColor: null,
        // selectItemOptions: null,
        mainItemTextArea: {
          class: "white",
          label: "Object/array to parse",
          rules: [],
          // keyy: 'main-item',
        },
        draggable: false,
        dragStartX: 0,
        dragStartY: 0,
        offsetX: 0,
        offsetY: 0,
        vNodes: {},
        // alert:[{comp:'ddd',a:'sss'},'aaaaaa','bbbbb']
        alertObjs: [],
        children_: null,
        extKey_: "",
        key_: 0,
        basekey: "0",
        wrap_: null,
        data: null,
        select: false,
        itemListeners: {},
        attrs: {},
        // rules: [],
        // cooks: {}

        // dive: true,
        nameEl: "",

        MarkdownIt: md,
        TurnDown: new TurnDown(),
        AsyncComponent: null,
        isComponentLoaded: false,
        refName: null,
      };
    },
    computed: {
      // ...Vuex.mapGetters(['urlServer', 'user', 'loggedIn', 'labels']),
      // ...Vuex.mapGetters(['urlServer', 'user', 'loggedIn', 'lg', 'labels']),
      itemMode: () => "itemMode",
      itemDisp: () => "itemDisp",
      itemProd: () => "itemProd",

      // itemLang() {

      // 	if (!Array.isArray(this.item_) && this.item_ instanceof Object) {
      // 		return this.item?.options?.lang || this.lang;
      // 	} else return this.lang;
      // 	/*  else if (this.lang_) {
      //             return this.lang_;
      //         }  */
      // },

      // itemLang:function(){
      // 	return this.objLang(this.item_,this.lang)

      // dive:function(){
      // 	if (this.item_ instanceof Object) {

      // 		return this.item_?.dive||false

      // }
      // return false
      // },
      // },
      // itemAccessebility: function () {return this.itemAccessebilityFn(this.item_)},
      // itemAccessebility: function () {
      // 	// let WBALERT = this?.WBAlert ? { wbAlert: this.WBAlert } : {};
      // 	return {
      // 		props: this.$props,
      // 		data: this.$data.item_,
      // 		data0: this.$data,
      // 		update: () => {
      // 			this.key_ += 1
      // 		},

      // 		ref: () => this.$refs.rawHtml,
      // 		isValid: () => this?.$refs?.rawHtml?.valid,

      // 		extData: { keyy: this.$data.extKey_, wrap: this.$data.wrap_, children: this.$data.children_ },
      // 		compKeyy: () => this.computedKey(),

      // 		// keyy:this.$data.key_,
      // 		vNodes: this.$data.vNodes,

      // 		// methods: {
      // 		// 	randomColor: this.randomColor,
      // 		// 	randomKeyy: this.randomKey,
      // 		// 	capitalizeWords: this.capitalizeWords,
      // 		// 	getRandomInt: this.getRandomInt,
      // 		// 	isVnode: this.isVnode,
      // 		// 	stringToJson: this.stringToJson,
      // 		// 	compFunc: this.compFunc,
      // 		// 	anyMatchInArray: this.anyMatchInArray,
      // 		// 	strToObj: this.strToObj,
      // 		// 	toTitleCase: this.toTitleCase,
      // 		// 	generalVal: this.generalVal,
      // 		// },
      // 		lg:{lang: this.lang,get: ()=>this?.$store?.state?.lg || 'en', set:(langage)=>{this.$store.commit('updateLang',langage)}},

      // 		user: this?.$store?.state?.user,
      // 		loggedIn: this?.$store?.state?.loggedIn || false,

      // 		queryData: this.queryData,
      // 		aes: {
      // 			enc: this.aesEnc,
      // 			dec: this.aesDec,
      // 		},
      // 		validators: {
      // 			...validators,
      // 		},
      // 		cookies: {
      // 			...VueCookies,
      // 			state:this.getCookies
      // 		},
      // 		storage:localStorage,
      // 		proto: app?.prototype || {},
      // 		routeParams: this?.$route?.params,
      // 		moment: this.$moment,
      // 		// $watch: this.$watch,
      // 		store: this.$store,
      // 		router: this.$router,
      // 		// options: this.$options,
      // 		vm: this,
      // 		// cls: app,
      // 		alert: this.alert,
      // 		// alertObjs:this.alertObjs
      // 	};

      // },
      itemAccessebility: function () {
        // console.log('vvvvvvvvvvvvvv', this, Vue, this.$data.item_, this.item_)
        // let vm=this.$refs?.[el?.options?.ref]
        // let WBALERT = this?.WBAlert ? { wbAlert: this.WBAlert } : {};
        return {
          props: this.$props,
          data: this.$data.item_,
          data0: this.$data,

          val: {
            set: (v) => (this.internalValue = v),
            get: () => this.internalValue,
          },

          hide: (v) => {
            this.$data.hide = v;
          },
          // set: (key, val) => { this.$data[key] = val },
          set: (val, key = "item_") => {
            this.$data[key] = val;
          },
          get: (key = "item_") => this.$data[key],

          update: () => {
            this.key_ += 1;
          },

          ref: () => this?.$refs[this.refName],
          refs: this?.$refs,
          // isValid: () => this?.$refs[this.refName]?.valid,
          // isValid: () => this.isNonEmpty(this.item_?.options?.val) ?this?.$refs[this.refName]?.valid:null ,
          isValid: this.$data.internalValueIsValid,
          isValidFn: () => this?.$refs[this.refName]?.valid,

          vm: this,
          // context:this,
          emit: this.$emit,

          update: () => {
            this.key_ += 1;
          },

          extData: {
            keyy: this.$data.extKey_,
            wrap: this.$data.wrap_,
            children: this.$data.children_,
          },
          compKeyy: () => this.computedKey(),

          // keyy:this.$data.key_,
          vNodes: this.$data.vNodes,
          // methods: {
          // 	randomColor: this.randomColor,
          // 	randomKeyy: this.randomKey,
          // 	capitalizeWords: this.capitalizeWords,
          // 	getRandomInt: this.getRandomInt,
          // 	isVnode: this.isVnode,
          // 	stringToJson: this.stringToJson,
          // 	compFunc: this.compFunc,
          // 	anyMatchInArray: this.anyMatchInArray,
          // 	strToObj: this.strToObj,
          // 	toTitleCase: this.toTitleCase,
          // 	generalVal: this.generalVal,
          // },
          lg: {
            lang: this.lang,
            get: () => this?.$store?.state?.lg || "en",
            set: (langage) => {
              this.$store.commit("updateLang", langage);
            },
          },

          user: this?.$store?.state?.user,
          loggedIn: this?.$store?.state?.loggedIn || false,

          queryData: this.queryData,
          aes: {
            enc: this.aesEnc,
            dec: this.aesDec,
          },
          validators: {
            ...(this.validators || {}),
          },
          cookies: {
            ...this.$cookies,
            state: this.getCookies || {},
          },
          storage: localStorage,
          proto: app?.prototype || {},
          routeParams: this?.$route?.params,
          moment: this.$moment,
          // MarkdownIt: this.MarkdownIt,
          // TurnDown: this.TurnDown,
          markdown: {
            md2Html: (v) => this.MarkdownIt.render(v),
            html2Md: (v) => this.TurnDown.turndown(v),
          },

          watch: this.$watch,
          store: this.$store,
          router: this.$router,
          // options: this.$options,
          // cls: app,
          // alert: (v=this.$data.item_)=>{

          // 	this.alertObjs.push(...Array.isArray(v)?v:[v])
          // 	this.select=true
          // },
          alert: (...v) => {
            if (v.length == 1) {
              if (v[0] == 0) {
                this.select = false;
                this.alertObjs = [];
              }
              // else if (v[0] == 'cls') { this.alertObjs = ['new'] }
              else {
                this.alertObjs.push(v);
              }
            } else if (v.length == 0) {
              this.alertObjs.push(this.$data.item_);
            } else {
              this.alertObjs.push(...(Array.isArray(v) ? v : [v]));
            }
            // this.select = true

            return this.alertObjs;
          },
          // alert: WBALERT,
          // alertObjs:this.alertObjs
        };
      },
      // computedKey() {

      // 	return `${this?.key_ || ''}-${this.baseKey || ''}-${this.item_?.options?.val?.length||''}`

      // 	// return `${this?.item_?.options?.key}`
      // },
      lang() {
        return this?.item_?.options?.lang || this?.$store?.state?.lg || "en";
      },
    },

    watch: {
      // $data.item_
      // 'item_.options.props.items': {
      // 'item_.options.props.items': {
      // 	handler(newValue, oldValue) {
      // 		alert('ddddddddddddddddddd')
      // 		console.log(newValue, oldValue)
      // 		this.key_+=1
      // 	},
      // 	deep: true,
      // },

      // 'item_'(newValue) {
      // 	console.log('zzzzzzzzzzzz',this.item_,this.$data.item_,)
      // 	alert('sssssssssssssssssssssss')
      // },
      // 'item_.options.rtl'(newValue) {

      // 		let dir = this.lang == 'ar'||(newValue===true) ? 'rtl' : 'ltr';
      // 		// if (!Array.isArray(el))
      // 		{
      // 			if (this.item_?.options?.props?.style?.[this.lang]) {
      // 				this.item_.options.style[this.lang].direction = dir;
      // 			} else if(this.item_?.options?.props?.style)
      // 			{
      // 				this.item_.options.style = {
      // 					...(this?.item_?.options?.style||{}),
      // 					direction: dir,
      // 				};
      // 			}
      // 		}

      // },

      // 'item_.options.html'(newValue) {
      // 	alert('html')
      // },
      "item_.options.val"(newValue) {
        // alert(55555555555555555)
        // let isInputLikeComponent = [
        // 	'input',
        // 	'checbox',
        // 	'radio',
        // 	'select',
        // 	'textarea',
        // 	'VTextField',
        // 	'VCheckbox',
        // 	'VTextarea',
        // 	'VSelect',
        // 	'VRadio',
        // 	'VSlider',
        // 	'VRangeSlider',
        // 	'VSwitch',
        // 	'VAutocomplete',
        // 	'VDatePicker',
        // 	'VColorPicker',
        // 	'VMenu',
        // 	'VRadioGroup',
        // 	'vTimePicker',
        // ].includes(this.item_?.comp);
        // this.item_.options.class='red'

        this.internalValue = newValue;

        // if (this?.item_?.options?.attrs) {
        //   this.item_.options.attrs.value = newValue;
        //   this.attrs.value = newValue
        // }
        // if(this?.item_?.options?.props){this.item.options.props.value=newValue;}
        // console.log('666666666666666',this.$refs,this.item_?.options?.ref)

        // if (newVal!=''&&this?.$refs[this.refName]?.lazyValue) {
        // // 	// alert(';lacaxuuuuuuu')
        // 	this.$refs[this.refName].lazyValue = newValue;
        // }
        // if (!this?.item_?.options?.props) {
        // this.item_.options.props = {};
        // this.item.options.props['value'] = newValue;
      },
      // if (this?.$refs?.rawHtml) {
      // 	// if (isInputLikeComponent) {
      // 	// 	//console.log(5555555555555555, this?.$refs?.rawHtml)
      // 	// 	// this.item_.options.props.value = newValue;
      // 	// 	this.$refs.rawHtml.lazyValue = newValue;
      // 	// 	}
      // 	if (typeof this?.$refs?.rawHtml?.lazyValue == 'boolean') { this.$refs.rawHtml.lazyValue = newValue; }
      // 	this.item_.options.isValid = this.$refs.rawHtml.valid
      // }
      // this.key_+=1
      // //console.log(4444444444444,this,this?.$parent?.item_?.options?.key)
      // if(this?.$parent?.item_?.options?.key)this.$parent.item_.options.key+=1
      // //console.log(555555555555555555,this,this?.$parent?.item_?.options?.key)
      // this.$emit('on-val-change', newValue);
      // alert(newValue+this.key_)
      // else{alert(1111111111111111)}
      // this.item_.options.props.value = newValue;
      // this.item_.options.domProps = { value: newValue };
      // if (this.item_?.options?.attrs)this.item_.options.attrs['checked'] = newValue||false;
      // if(this?.item_?.options?.key){this.item_.options.key+=1
      // }
      // this.item_.options.domProps={'value': newValue};
      // if(this.item_?.options?.props?.rules)
      // 		{
      // 			alert(888888888888888888+newValue)
      // 			alert(this.item_.options.props.rules)
      // 		// el.options,
      // 		this.wbcItem,
      // 		this.itemAccessebility,
      // 		// this.lg
      // 		newValue
      // 	);
      // rules=this.item_.options.props.rules.map(e=>{
      // 	if (e instanceof Function)
      // 	{
      // 		return e(this.itemAccessebility,newValue)
      // 	}
      // 	return true
      // })
      // this.item_.options.props.rules=rules
      // }
      // 		if(this.item_?.options?.props?.rules){
      // 			alert(1111111111111111111111111111)
      // 		this.item_.options['props'].rules=this.item_?.options?.props?.rules.map(ee=>this.generalVal(ee(this.itemAccessebility,this.lang),{},this.lang))
      // 		// el.options['props'].rules=this?.items_.options.props.rules.map(e=>{
      // 	// 	if(typeof e =='function')
      // 	// 	{
      // 	// 		return v=>e(this.itemAccessebility,v)
      // 	// 		// return this.generalVal(e(this.itemAccessebility,event),{},this.lang)
      // 	// 	}
      // 	// 	return return 'false'
      // 	// })
      // }
      // },
      // 	'item_.options.attrs.value'(newValue) {

      // 		// Do something with the new value when it changes

      // 		// this.item_.options.class='red'
      // 		// this.item.options.attrs={value:newValue};

      // },

      // '$refs?.rawHtml?.lazyValue'(newValue, oldValue) {
      // 	alert(this?.$refs?.rawHtml?.lazyValue)
      // 	if(this?.item?.options?.attrs){this.item.options.attrs.value=newValue;}
      // 	if(this?.item?.options?.props){this.item.options.props.value=newValue;}
      // 	if (this?.$refs?.rawHtml?.lazyValue) { this.$refs.rawHtml.lazyValue = newValue; }

      // },
      internalValue(newValue) {
        // alert(newValue)
        // this.internalValue= newValue
        if (this?.item_?.options) {
          this.item_.options.val = newValue;
        } else {
          this.item_ = newValue;
        }

        // if(this?.item?.options?.props){this.item.options.props.value=newValue;}
      },
      "item_.options.props.value"(newValue) {
        // alert(newValue)
        this.internalValue = newValue;
        this.item_.options.val = newValue;

        // 	// this.item_.options.domProps={value:newValue};
        // 	// if (this.item_?.options?.attrs)this.item_.options.attrs['checked'] =newValue||false;

        // 	// this.item_.options.domProps={'value': newValue};

        // 	// this.item_.options.val = newValue;
        // 	// this.item_.options.domProps={value:newValue};
        // 	// if (this.item_?.options?.attrs)this.item_.options.attrs['checked'] =newValue||false;

        // 	// this.item_.options.domProps={'value': newValue};

        // 	// this.item_.options.props.rules=this?.rules.map(e=>{
        // 	// 	if(typeof e =='function')
        // 	// 	{
        // 	// 		// alert(this.generalVal(e(this.itemAccessebility,newValue),{},this.lang))
        // 	// 		return this.generalVal(this.clone(e(this.itemAccessebility,newValue)),{})
        // 	// 	}
        // 	// 	return true
        // 	// })
      },

      // Watch for changes to the 'lg' property in the store's state
      // 'lg': {
      //   handler(newValue, oldValue) {
      //     alert(111111)
      //     // This function will be called whenever 'lg' changes
      //     // You can perform any actions or updates based on the new value
      //     // and the old value of 'lg'

      //   },
      //   immediate: true, // To trigger the handler immediately on initial mount
      // },

      // '$store.state.loggedIn'(newValue, oldValue) {},

      "$store.state.lg"(newValue, oldValue) {
        // alert('changed')
        // this.lg = newValue;
        this.$cookies.set("lg", newValue);
        this.key_ += 1;
        // if(this?.item_?.options){this.item_.options.rtl = (this.item_?.options?.rtl||(newValue=='ar'));}
        // if(this?.item_?.options){this.item_.options.rtl = newValue=='ar';}

        // this.wbcItem = this.toWBC(this.clone(this.item))
        // 	this.item_ = this.generalVal(
        // 		// el.options,
        // 		this.wbcItem,
        // 		this.itemAccessebility,
        // 		// this.lg
        // 		newValue
        // 	);

        // let dir;
        // 	if (this.item_?.options?.rtl===true) {dir ='rtl'}
        // 	else if (this.item_?.options?.rtl===false) {dir ='ltr'}
        // 	else dir = this.lang == 'ar'? 'rtl' : 'ltr';
        // 		if (this.item_?.options?.props?.style?.[this.lang]) {
        // 			this.item_.options.style[this.lang].direction = dir;
        // 		}
        // 		else if(this?.item_?.options?.style){this.item_.options.style.direction = dir;}
        // 		else{this.item_.options={style:{direction : dir}}}

        // this.item_ =  this.toWBC(this.item);
        // this.item_ = this.toWBC(this.clone(this.item))

        // if(this?.item_?.options?.key){this.item_.options.key+=1
        // }
        // else if(this?.item_?.options){
        // 	this.item_.options.key = this.randomKey('lg')
        // }
        // else{
        // 	this.item_.options={keyy: this.randomKey('lg')}

        // }
      },
      // 'item.comp'(newValue, oldValue) {
      // 	alert('ffffffffffffffff')
      // 	if( typeof newValue=='function' ){
      // 	this.item_ = this.toWBC(this.clone(this.item))
      // 	}
      // 	this.item_ = this.toWBC(this.clone(this.item))

      // },

      // 'item_.options.html'(newValue, oldValue) {
      // 	alert('ffffffffffffffff')
      // 	this.key_+=1

      // },

      // 'item'(newValue, oldValue) {
      // 	if(this?.item_?.options?.key){
      // 		this.item_.options.key+="_"
      // 		this.item_.options.key=this.item_.options.key.replace('__',"_")
      // 	}
      // 	else if(this?.item_?.options){
      // 		this.item_.options.key = this.randomKey('lg')
      // 	}
      // 	else{
      // 		this.item_.options={keyy: this.randomKey('lg')}

      // 	}

      // 	// this.item_=this.toWBC(this.clone(this.item))
      // 	this.item_=this.toWBC(this.item)

      // 	// this.lg = newValue;
      // 	// this.$cookies.set('lg', newValue);

      // 	// this.wbcItem = this.toWBC(this.clone(this.item0)),
      // 	// 	this.item_ = this.generalVal(
      // 	// 		// el.options,
      // 	// 		this.wbcItem,
      // 	// 		this.itemAccessebility,
      // 	// 		// this.lg
      // 	// 		newValue
      // 	// 	);

      // 	// this.item_ = this.toWBC(this.clone(this.item))

      // // this.item_ =  this.toWBC(newValue);

      // },
      // 	{
      // 		immediate: true, // To trigger the handler immediately on initial mount
      // 	}
      // );
    },
    methods: {
      // loadLocalFile(h_, el) {
      //   console.log("this.fileContent, el :>> ", el, this.fileContent);
      //   this.fileContent = null;
      //   fetch(el) // Fetch the file or API endpoint
      //     .then((response) => {
      //       console.log("response :>> ", response);
      //       const contentType = response.headers.get("Content-Type");
      //       console.log(
      //         "Response data:,el ",
      //         el,
      //         response,
      //         response?.data,
      //         response?.body,
      //         contentType
      //       );

      //       if (contentType.includes("application/json")) {
      //         // Parse the JSON data
      //         return response.json().then((data) => {
      //           this.fileContent = h_("WBDataViewer", {
      //             title: el,
      //             props: { value: data }, // Use the parsed JSON data
      //           });
      //         });
      //       } else if (contentType.includes("image/")) {
      //         console.log("this :>> ", this);
      //         this.fileContent = h_("img", {
      //           attrs: {
      //             src: el,
      //           },
      //           class: "container",
      //           style: {},
      //           ref: "rawHtml",
      //         });
      //         console.log("this.fileContent :>> ", this.fileContent);
      //       } else if (
      //         ["/html"].some((e) => contentType.includes(e)) &&
      //         el.includes("html") &&
      //         !el.includes("?src")
      //       ) {
      //         this.fileContent = h_("WBHtml", {
      //           ref: "rawHtml",
      //           props: { html: response.data },
      //         });
      //       } else if (
      //         el.toLowerCase().endsWith(".xlsx") ||
      //         el.toLowerCase().endsWith(".xls") ||
      //         contentType.includes("excel")
      //       ) {
      //         this.fileContent = h_("VueOfficeExcel", {
      //           props: {
      //             src: el,
      //           },
      //           class: "container",
      //           style: {},
      //           ref: "rawHtml",
      //         });
      //       } else if (
      //         el.toLowerCase().endsWith(".docx") ||
      //         el.toLowerCase().endsWith(".doc") ||
      //         contentType.includes("msword") ||
      //         contentType.includes("officedocument")
      //       ) {
      //         return response.text().then((data) => {
      //           this.fileContent = h_("WBHtml", {
      //             title: el,
      //             props: { html: data }, // Use the parsed JSON data
      //           });
      //         });
      //         // } else if (
      //         //   contentType.includes("application/doc") ||
      //         //   contentType.includes("officedocument")
      //         // ) {
      //         // console.log("doc,el :>> ", doc, el);
      //         // this.fileContent = h_("VueDocPreview", {
      //         //   props: {
      //         //     value: el,
      //         //   },
      //         //   class: "container",
      //         //   style: {},
      //         //   ref: "rawHtml",
      //         // });
      //         // this.fileContent = h_("VueOfficeExcel", {
      //         //   props: {
      //         //     src: el,
      //         //   },
      //         //   class: "container",
      //         //   style: {},
      //         //   ref: "rawHtml",
      //         // });
      //       } else if (contentType.includes("application/excel")) {
      //         this.fileContent = h_("VueOfficeExcel", {
      //           props: {
      //             src: el,
      //           },
      //           class: "container",
      //           style: {},
      //           ref: "rawHtml",
      //         });
      //       } else if (contentType.includes("application/pdf")) {
      //         alert("pdfffffffffffffffffffffffffffff");
      //         this.fileContent = h_("pdf", {
      //           props: {
      //             src: el,
      //           },
      //           class: "container",
      //           style: {},
      //           ref: "rawHtml",
      //         });
      //       } else {
      //         // return response.text().then((data) => {
      //         //   this.fileContent = h_("WBHtml", {
      //         //     title: el,
      //         //     props: { html: data }, // Use the parsed JSON data
      //         //   });
      //         // });

      //         this.fileContent = h_("VCM", {
      //           props: {
      //             value: JSON.stringify(data), // Ensure value is a string
      //             ref: "myCm",
      //             tabSize: 14,
      //             mode: "application/json",
      //             mode: contentType,
      //             theme: "default",
      //             options: {
      //               styleActiveLine: true,
      //               lineNumbers: true,
      //               line: true,
      //               foldGutter: true,
      //               styleSelectedText: true,
      //               matchBrackets: true,
      //               showCursorWhenSelecting: true,
      //               extraKeys: { Ctrl: "autocomplete" },
      //               hintOptions: {
      //                 completeSingle: !false,
      //               },
      //             },
      //           },
      //         });
      //       }
      //     })
      //     .catch((error) => {
      //       this.fileContent = h_("div", {
      //         attrs: {
      //           src: el,
      //           controls: true,
      //           frameborder: "0",
      //           allow: "autoplay; encrypted-media",
      //           allowfullscreen: true,
      //           allow:
      //             "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      //           referrerpolicy: "strict-origin-when-cross-origin",
      //         },
      //         class: "container white",
      //         style: {
      //           resize: "both",
      //           top: 0,
      //           left: 0,
      //           height: "100%",
      //           width: "100%",
      //           border: 0,
      //         },
      //         ref: "rawHtml",
      //       });
      //       console.error("Error:", error);
      //     });
      // },

      loadLocalFile(h_, el) {
        let a;
        if (el.startsWith("/") || el.startsWith("./") || el.startsWith("../")) {
          a = fetch(el); // Fetch the file or API endpoint
        } else {
          a = this.getUrlResponse(el); // Fetch the file or API endpoint
        }
        // fetch(el) // Fetch the file or API endpoint
        a.then((response) => {
          const contentType = response.headers.get("Content-Type");
          console.log(
            "Response data:,el ",
            el,
            response,
            response?.data,
            contentType
          );
          if (contentType.includes("application/json")) {
            // Parse the JSON data
            return response.json().then((data) => {
              this.fileContent = h_("WBDataViewer", {
                title: el,
                props: { value: data }, // Use the parsed JSON data
              });
            });
          } else if (contentType.includes("image/")) {
            console.log("this :>> ", this);
            this.fileContent = h_("img", {
              attrs: {
                src: el,
              },
              class: "container",
              style: {},
              ref: "rawHtml",
            });
            console.log("this.fileContent :>> ", this.fileContent);
          } else if (
            ["/html"].some((e) => contentType.includes(e)) &&
            el.includes("html") &&
            !el.includes("?src")
          ) {
            this.fileContent = h_("WBHtml", {
              ref: "rawHtml",
              props: { html: response.data },
            });
          } else if (
            el.toLowerCase().endsWith(".xlsx") ||
            el.toLowerCase().endsWith(".xls") ||
            contentType.includes("excel")
          ) {
            this.fileContent = h_("VueOfficeExcel", {
              props: {
                src: el,
              },
              class: "container",
              style: {},
              ref: "rawHtml",
            });
          } else if (
            el.toLowerCase().endsWith(".docx") ||
            el.toLowerCase().endsWith(".doc") ||
            contentType.includes("msword") ||
            contentType.includes("officedocument")
          ) {
            return response.text().then((data) => {
              this.fileContent = h_("WBHtml", {
                title: el,
                props: { html: data }, // Use the parsed JSON data
              });
            });
            // } else if (
            //   contentType.includes("application/doc") ||
            //   contentType.includes("officedocument")
            // ) {
            // console.log("doc,el :>> ", doc, el);
            // this.fileContent = h_("VueDocPreview", {
            //   props: {
            //     value: el,
            //   },
            //   class: "container",
            //   style: {},
            //   ref: "rawHtml",
            // });
            // this.fileContent = h_("VueOfficeExcel", {
            //   props: {
            //     src: el,
            //   },
            //   class: "container",
            //   style: {},
            //   ref: "rawHtml",
            // });
          } else if (contentType.includes("application/excel")) {
            this.fileContent = h_("VueOfficeExcel", {
              props: {
                src: el,
              },
              class: "container",
              style: {},
              ref: "rawHtml",
            });
          } else if (contentType.includes("application/pdf")) {
            // alert("pdfffffffffffffffffffffffffffff");
            this.fileContent = h_("pdf", {
              props: {
                src: el,
              },
              class: "container",
              style: {},
              ref: "rawHtml",
            });
          } else {
            // alert('code')
            this.fileContent = h_("VCM", {
              style: {
                // resize: 'both',
                // position: 'absolute',
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                //   border: 0,
              },

              class: "container",
              props: {
                value: response?.data || response,
                ref: "myCm",
                tabSize: 14,
                // mode: "text/css",
                mode: contentType,
                // mode: 'text/html',
                theme: "default",

                // lineNumbers: true,
                // line: true,

                // options: {
                //   lineWrapping: true, // Enable line wrapping
                //   viewportMargin: Infinity,
                //   //Codemirror options
                // }

                options: {
                  // tabSize: 4,
                  styleActiveLine: true,
                  lineNumbers: true,
                  line: true,
                  foldGutter: true,
                  styleSelectedText: true,
                  // keyMap: "sublime",
                  matchBrackets: true,
                  showCursorWhenSelecting: true,
                  // theme: "monokai",
                  extraKeys: { Ctrl: "autocomplete" },
                  hintOptions: {
                    completeSingle: !false,
                  },
                },
              },
              ref: "rawHtml",
            });

            // this.fileContent = h_('WBHtml', { props: { html: response.data } })
          }

          // else {
          //   this.fileContent = h_('WBHtml', { props: { html: response.data } })

          //   // this.fileContent = h_('iframe', {
          //   //   attrs: {
          //   //     title: el,
          //   //     src: el,
          //   //     controls: true,
          //   //     frameborder: "0",
          //   //     allow: "autoplay; encrypted-media",
          //   //     allowfullscreen: true,
          //   //     allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          //   //     referrerpolicy: "strict-origin-when-cross-origin"
          //   //   },
          //   //   class: 'container',
          //   //   style: {
          //   //     resize: 'both',
          //   //     //  position: 'absolute',
          //   //     top: 0,
          //   //     left: 0,
          //   //     height: '100%',
          //   //     width: '100%',
          //   //     border: 0,
          //   //   },
          //   //   ref: 'rawHtml',
          //   // })
          // }

          // console.log('contentTypeeeeeeeeee :>> ', contentType);
        }).catch((error) => {
          this.fileContent = h_("iframe", {
            attrs: {
              src: el,
              controls: true,
              frameborder: "0",
              allow: "autoplay; encrypted-media",
              allowfullscreen: true,
              allow:
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
              referrerpolicy: "strict-origin-when-cross-origin",
            },
            class: "container white",
            style: {
              resize: "both",
              // position: 'absolute',
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              border: 0,
            },
            ref: "rawHtml",
          });

          // console.error("Error:", error);
          // this.fileContent = el//h_('li',[el]); // Set the global variable to the error if it occurs
        });
      },
      // feetchFile() {
      //   // Fetch the file content
      //   fetch("@/public/pdf0.pdf")
      //     .then((response) => response.text())
      //     .then((data) => {
      //       this.fileContent = data; // Update the component's data
      //     })
      //     .catch((error) => {
      //       console.error("Error loading file:", error);
      //     });
      // },
      // handleInput(newValue) {
      // 	alert(newValue)
      // 	this.internalValue = newValue;
      // 	this.$emit('input', newValue);
      // },
      // itemAccessebilityFn: function (el) {
      // 	let vm=this.$refs?.[el?.options?.ref]
      // 	// let vm=this.$refs?.[el?.options?.ref]
      // 	// let WBALERT = this?.WBAlert ? { wbAlert: this.WBAlert } : {};
      // 	return {
      // 		// props: vm.?$props,
      // 		data: el,
      // 		// data0: vm.$data,
      // 		ref:()=> this.$refs?.[el?.options?.ref],
      // 		isValid: vm?.valid,
      // 		vm: vm,
      // 		context:this,
      // 		emit:vm?.$emit ,

      // 		update: () => {
      // 			this.key_ += 1
      // 		},

      // 		extData: { keyy: this.$data.extKey_, wrap: this.$data.wrap_, children: this.$data.children_ },
      // 		compKeyy: () => this.computedKey(),

      // 		// keyy:this.$data.key_,
      // 		vNodes: this.$data.vNodes,

      // 		// methods: {
      // 		// 	randomColor: this.randomColor,
      // 		// 	randomKeyy: this.randomKey,
      // 		// 	capitalizeWords: this.capitalizeWords,
      // 		// 	getRandomInt: this.getRandomInt,
      // 		// 	isVnode: this.isVnode,
      // 		// 	stringToJson: this.stringToJson,
      // 		// 	compFunc: this.compFunc,
      // 		// 	anyMatchInArray: this.anyMatchInArray,
      // 		// 	strToObj: this.strToObj,
      // 		// 	toTitleCase: this.toTitleCase,
      // 		// 	generalVal: this.generalVal,
      // 		// },
      // 		lg:{lang: this.lang,get: ()=>this?.$store?.state?.lg || 'en', set:(langage)=>{this.$store.commit('updateLang',langage)}},

      // 		user: this?.$store?.state?.user,
      // 		loggedIn: this?.$store?.state?.loggedIn || false,

      // 		queryData: this.queryData,
      // 		aes: {
      // 			enc: this.aesEnc,
      // 			dec: this.aesDec,
      // 		},
      // 		validators: {
      // 			...validators,
      // 		},
      // 		cookies: {
      // 			...VueCookies,
      // 			state:this.getCookies
      // 		},
      // 		storage:localStorage,
      // 		proto: app?.prototype || {},
      // 		routeParams: this?.$route?.params,
      // 		moment: this.$moment,
      // 		// $watch: this.$watch,
      // 		store: this.$store,
      // 		router: this.$router,
      // 		// options: this.$options,
      // 		// cls: app,
      // 		alert: this.alert,
      // 		// alertObjs:this.alertObjs
      // 	};

      // },

      options(el) {
        // console.log('oooooooooooooo',el)

        // el.options.ref=refName
        // el.ref = () => this?.$refs[refName]

        // if (options?.global) {
        // 					global[options?.global] = this.itemAccessebility;
        // 					global[options?.global + '_vm_context'] = this;

        // 				}

        let theOpts =
          el?.switch === true
            ? el?.hOptions || el?.options
            : el?.options || el?.hOptions;

        if (!theOpts) {
          return el;
        }

        theOpts = {
          ...theOpts,
          ...(this.menu
            ? theOpts?.menu?.activeOptions
            : theOpts?.menu?.active
            ? theOpts?.menu?.activeRootOptions
            : {}), //
        };

        // theOpts.props={...(theOpts?.props||{}),...(this.$refs?.[el?.options?.ref]()?.$props||{})}
        // this.$listners['click:append']=()=>alert(5555555555555555555)
        // console.log(9999999999999999999,this)

        let listenersObj = theOpts?.on || {};
        // let listenersObj = theOpts?.on || {};
        // let selectItemOptions

        /////////////////////props management //////////////////////////
        // theOpts.props={...(theOpts?.props||{}),...(theOpts?.props_||{})}
        // if(theOpts?.props){theOpts.props.value= theOpts?.val||theOpts.props.value}
        /////////////////////Rules management //////////////////////////

        let rules = [];

        if (Array.isArray(theOpts?.rules) /* && rules !== null */) {
          // alert('rules')

          rules = (theOpts?.rules || []).map((key) => {
            if (this.validators?.[key]) {
              return (v) => this.validators[key](v, { lg: this.lang });
            } else {
              return key;
            }
          });
        } else if (typeof theOpts?.rules == "object") {
          rules = Object.entries(theOpts?.rules).map(([key, val]) => {
            if (this.validators?.[key] && typeof val == "function") {
              return val;
            } else if (this.validators?.[key] && typeof val == "object") {
              return (v) => this.validators[key](v, val);
            } else {
              return (v) =>
                this.validators[key](v, { lg: this.lang, message: val });
            }
          });
        }

        if (!theOpts?.props) {
          theOpts.props = {};
        }

        if (rules.length >= 1) {
          theOpts.props.rules = rules;
        }

        /////////////////////attrs management //////////////////////////

        // theOpts.attrs={...(theOpts?.attrs||{}),...(this?.$attrs||{})}

        // theOpts.attrs = {...theOpts?.attrs,...this.$attrs,...(this.$refs[el?.options?.ref]?.$attrs||{})}
        // theOpts.attrs = {...theOpts?.attrs,...(this.$refs[el?.options?.ref]?.$listeners||{})}
        // Object.entries(theOpts?.attrs).map(([key, val]) => {attrs[key]=

        /////////////////////event Listeners management //////////////////////////

        // this.itemListeners={...(theOpts?.on||{})};

        if (/* el?.hComp||el?.hOptions|| */ typeof el?.switch == "boolean") {
          // customListeners.mouseover = (event) => {
          this.itemListeners[el?.switchEvent || "mouseenter"] = (event) => {
            // this.itemListeners.mousover = (event) => {

            // console.log(333333333333333333333333,event)
            // el.switch = true
            el.switch = !el.switch;
            // even.stopPropagation()

            // options=el.options
            // comp=comp
            // header=el.header
            // footer=el.footer

            // alert('ggggggggg')
          };
        } else {
          el.options = el[el?.switch || "options"];
        }
        // }

        // theOpts.on = this.itemListeners;

        return this.objLang(theOpts, this.lang);
        // options=this.objLang(options,this.lang),
      },
      comp(el) {
        let theComp =
          el?.switch === true ? el?.hComp || el?.comp : el?.comp || el?.hComp;
        if (typeof theComp == "string") {
          return theComp
            .replace("~", "")
            .replace("*", "")
            .replace("<", "")
            .replace(">", "");
        }
        return theComp;
      },
      globalHeaderVN(el, h_) {
        let header =
          el?.switch === true
            ? el?.hHeader || el?.header
            : el?.header || el?.hHeader;

        // console.log('header :>> ', header);
        if (!header) return null;
        return h_("WBC", {
          /* keyy: `wbc-key-header-${this.computedKey(el?.options?.key)}`, */ props:
            { item: header },
        });
        // return this.toWBC_(header,h_)
      },
      globalFooterVN(el, h_) {
        let footer =
          el?.switch === true
            ? el?.hFooter || el?.footer
            : el?.footer || el?.hFooter;
        if (!footer) return null;
        return h_("WBC", {
          /* keyy: `wbc-key-footer-${this.computedKey(el?.options?.key)}`, */ props:
            { item: footer },
        });
      },
      insideHeadersVN(el, h_) {
        let headers =
          el?.switch === true
            ? el?.hOptions?.headers || el?.options?.headers
            : el?.options?.headers || el?.hOptions?.headers;
        if (!headers) return null;
        return this.toWBC_(headers, h_);

        return h_("WBC", {
          /* key: `wbc-key-headers-${this.computedKey(el?.options?.key)}`, */ props:
            { item: headers },
        });
      },
      insideFootersVN(el, h_) {
        let footers =
          el?.switch === true
            ? el?.hOptions?.footers || el?.options?.footers
            : el?.options?.footers || el?.hOptions?.footers;
        if (!footers) return null;
        return this.toWBC_(footers, h_);
        return h_("WBC", {
          /* key: `wbc-key-footers-${this.computedKey(el?.options?.key)}`, */ props:
            { item: footers },
        });
      },

      // footers(el){
      // 	return el?.switch===true?el?.hOptions?.footers||el?.options?.footers:el?.options?.footers||el?.hOptions?.footers
      // },
      html(el) {
        if (!this.isPlainObject(el)) {
          return el;
        }
        return el?.switch === true
          ? el?.hOptions?.html || el?.options?.html
          : el?.options?.html || el?.hOptions?.html;
      },

      computedKey(key = "") {
        return `${key}-${this?.key_}-${this.baseKey || ""}-${
          this.item_?.options?.val?.length || ""
        }-${this.item_?.options?.float || ""}`;

        // return `${this?.item_?.options?.key}`
      },
      // itemListeners(options){
      // 	return {}
      // 	return options?.on||{}
      // },
      // itemListeners:function(el){
      // 	let listenersObj={...this.$listeners}

      // 	if (this.isPlainObject(el)){
      // 		listenersObj={
      // 			...this.$listeners,
      // 		... (el?.switch===true?el?.hOptions?.on||el?.options?.on:el?.options?.on||el?.hOptions?.on||{}),
      // 		// ...this.$parent.$listeners, // Access the parent component's $listeners
      // 		// ...(el?.options?.on||{}), // Merge with the listeners defined in this.obj.options.on
      // 		// ...this.$listeners, // Pass all listeners to the VMenu component
      // 	}

      // 	if (/* el?.hComp||el?.hOptions|| */typeof el?.switch=='boolean') {

      // 		// customListeners.mouseover = (event) => {
      // 		listenersObj[el?.switchEvent||'mouseenter'] = (event) => {
      // 		// listenersObj.mousover = (event) => {

      // 			// console.log(333333333333333333333333,event)
      // 			// el.switch = true
      // 			el.switch = !el.switch
      // 			// even.stopPropagation()

      // 			// options=el.options
      // 			// comp=comp
      // 			// header=el.header
      // 			// footer=el.footer

      // 			// alert('ggggggggg')

      // 		}
      // 		// listenersObj.mouseleave = (event) => {
      // 		// 	el.switch = !true
      // 		// 	// even.stopPropagation()

      // 		// 	// options=el.hOptions
      // 		// 	// comp=el.hComp
      // 		// 	// header=el.hHeader
      // 		// 	// footer=el.hFooter

      // 		// }
      // 	}
      // 	else{

      // 		el.options=el[el?.switch||'options']
      // 	}
      // 	}

      // 	// this.$store.state.propagation = [];

      // 		// listenersObj.mousedown= (event)=>{

      // 		// 		// alert(5555)

      // 		// 		// this.key_+=1

      // 		// 		let nameToDisp = typeof el?.options?.global == 'string' ? options?.global : ''

      // 		// 		if (event.button === 1) {
      // 		// 			let propagation = this.$store.state.propagation || [];

      // 		// 			if (event.altKey) {
      // 		// 				global[`el`] = this.itemAccessebility;
      // 		// 				alert('dddddddddddddddddd'+this?.select+this?.select)
      // 		// 				// Check if Ctrl key is pressed at the time of the click
      // 		// 				// if (event.ctrlKey) { }

      // 		// 				this.$store.state.propagation = []
      // 		// 				// this.alert(el)
      // 		// 				// event.stopPropagation(); // Prevent the click event from bubbling up
      // 		// 				this.select =!this?.select
      // 		// 				this.select =!this?.select

      // 		// 				// console.log('eeeeeeeeeee',el,event,nameToDisp.length,this.select)

      // 		// 				global[`el`] = this.itemAccessebility;
      // 		// 			}
      // 		// 			else if (event.shiftKey) {

      // 		// 				this.$store.state.propagation.forEach((e, i) => {

      // 		// 					delete global[`parent${i}`]
      // 		// 					// alert('pppppppppppp' + propagation)

      // 		// 				});// global['ele'] = propagation[propagation.length - 1];

      // 		// 				this.select = false
      // 		// 				this.select =false
      // 		// 				delete global['ele'];
      // 		// 				delete global['eles'];
      // 		// 			}

      // 		// 				// if (event.shiftKey)
      // 		// 				// {

      // 		// 				else
      // 		// 				{

      // 		// 					console.log(`WBC  ${propagation.length >= 1 ? `parent` : 'el'}${propagation.length >= 1 ? propagation.length:''} ${nameToDisp} ==> el :>>`, el);
      // 		// 					this.$store.state.propagation = [...propagation, this.itemAccessebility]

      // 		// 					propagation.push(this.itemAccessebility)
      // 		// 					propagation.forEach((e, i) => {
      // 		// 						if (i == 0) {
      // 		// 							global[`el`] = e;
      // 		// 							// el.options.style={...(el?.options?.style||{}),border:`10px solid black`}
      // 		// 							// el.options.class='pa-15 ma-15'

      // 		// 						}
      // 		// 						else {
      // 		// 							global[`parent${i}`] = e;
      // 		// 						}

      // 		// 					});// global['ele'] = propagation[propagation.length - 1];
      // 		// 					global['eles'] = propagation;
      // 		// 				}

      // 		// 		}

      // 		// }
      // 		// listenersObj.mouseup= (event)=>{

      // 		// 		// this.select = null
      // 		// 		if (event.button === 1) {
      // 		// 			this.$store.state.propagation = [];

      // 		// 			// event.stopPropagation(); // Prevent the click event from bubbling up

      // 		// 			// alert( selectItemOptions )
      // 		// 		}

      // 		// }

      // 		return listenersObj

      // },

      // itemAttrs:function(el){

      // 	let attrs={...(this?.$attrs||{})}

      // 	if(el instanceof Object ) {
      // 			attrs={...attrs,...(this?.$attrs||{})}
      // 		}
      // 	return attrs
      // },
      // itemRules:function(options){

      // 	let rules=[]

      // 	if (Array.isArray(options?.rules) /* && rules !== null */) {
      // 		// alert('rules')

      // 								rules = (options?.rules||[]).map(key => {

      // 									if (this.validators?.[key]) {
      // 										return v => this.validators[key](v, { lg: this.lang })
      // 									}
      // 									else {

      // 										return key
      // 									}
      // 								})
      // 							}

      // 							else if (typeof options?.rules == 'object' ) {

      // 								rules = Object.entries(options?.rules).map(([key, val]) => {
      // 									if (this.validators?.[key] && typeof val == 'function') {
      // 										return val
      // 									}
      // 									else if (this.validators?.[key] && typeof val == 'object') {
      // 										return v => this.validators[key](v, val)
      // 									}
      // 									else {
      // 										return v => this.validators[key](v, { lg: this.lang, message: val })

      // 									}
      // 								})
      // 							}

      // 							return rules
      // },
      // alert(...itemsProps) {
      // 	this.alertObjs = [...itemsProps];
      // 	// this.alertObjs = [...itemsProps]
      // },
      getCookies() {
        const cookieKeys = this.$cookies.keys();
        let cooks = {};
        // Fetch and set the values for each key
        cookieKeys.forEach((key) => {
          cooks[key] = this.$cookies.get(key);
        });
        return cooks;
      },
      handleMouseUp(event) {
        if (event.button === 1) {
          // this.$store.state.propagation = [];
          // this.select	=false
          // event.stopPropagation(); // Prevent the click event from bubbling up
          // alert( selectItemOptions )
        }
      },
      handleMouseDown(event) {
        // alert(5555)

        // this.key_+=1

        // let nameToDisp = typeof options?.global == 'string' ? options?.global : ''

        if (event.button === 1) {
          // let propagation = this.$store.state.propagation || [];

          if (event.altKey) {
            this.select = !this.select;
            // this.select=true
            // console.log('eeeeeeeeeee',el,event,nameToDisp.length)
            // Check if Ctrl key is pressed at the time of the click
            // if (event.ctrlKey) { }

            // this.$store.state.propagation = []
            event.stopPropagation(); // Prevent the click event from bubbling up
            // this.alert(el)
            // global[`el`] = this.itemAccessebility;
            // selectItemOptions = { class: 'pa-5 ma-5', style: { "backgroundColor": this.randomColor(), border: '2px dashed black' } }
            // selectItemOptions.attrs = { title: 'WBC ' + `${propagation.length >= 1 ? 'parent ' : ''}` + nameToDisp + '===>' + JSON.stringify(el) }
          }
          // else if (event.shiftKey) {

          // 	this.$store.state.propagation.forEach((e, i) => {

          // 		delete global[`parent${i}`]
          // 		// alert('pppppppppppp' + propagation)

          // 	});// global['ele'] = propagation[propagation.length - 1];

          // 	selectItemOptions = {}
          // 	delete global['ele'];
          // 	delete global['eles'];
          // }

          // if (event.shiftKey)
          // {

          // 		else {

          // 			console.log(`WBC  ${propagation.length >= 1 ? `parent` : 'el'}${propagation.length >= 1 ? propagation.length:''} ${nameToDisp} ==> el :>>`, el);
          // 			this.$store.state.propagation = [...propagation, this.itemAccessebility]

          // 			propagation.push(this.itemAccessebility)
          // 			propagation.forEach((e, i) => {
          // 				if (i == 0) {
          // 					global[`el`] = e;

          // 				}
          // 				else {
          // 					global[`parent${i}`] = e;
          // 				}

          // 			});// global['ele'] = propagation[propagation.length - 1];
          // 			global['eles'] = propagation;
          // 		}
        }
      },

      // compFunc,
      // randomKeyy: function (par, integer = 10000) {
      // 	let theKey = randomKey(par + '_key_', integer);
      // 	return theKey;
      // },
      // generalVal,
      // randomColor,

      aesEnc: (plaintext, key, iv) => aesEnc(plaintext, key, iv, app.CryptoJS),
      aesDec: (plaintext, key, iv) => aesDec(plaintext, key, iv, app.CryptoJS),
      // clone,
      // queryData,
      startDrag(event) {
        this.draggable = true;
        this.dragStartX = event.clientX;
        this.dragStartY = event.clientY;
      },
      doDrag(event, sensibility) {
        if (this.draggable) {
          this.offsetX = (event.clientX - this.dragStartX) * sensibility;
          this.offsetY = (event.clientY - this.dragStartY) * sensibility;
        }
      },
      endDrag() {
        this.draggable = false;
      },

      ////////////////htmlSrc: .....//////////////////
      // itemVns(el,h_, el0 = this.item0) {
      // 	let VN = {
      // 		// ...(this.mainRender(el)?{mainRender: this.mainRender(el)}:{}),
      // 		...(this.floatCloseDrag(el,h_)
      // 			? {
      // 					close: this.floatCloseDrag(el,h_),
      // 			  }
      // 			: {}),
      // 		...(this.float(el,h_)
      // 			? {
      // 					float: this.float(el,h_),
      // 			  }
      // 			: {}),
      // 		...(this.itemSrc(el0, el0,h_)
      // 			? {
      // 					itemSrc: this.itemSrc(el0, el0,h_),
      // 			  }
      // 			: {}),
      // 		...(this.wbcProps(el,h_)
      // 			? {
      // 					wbcProps: this.wbcProps(el,h_),
      // 			  }
      // 			: {}),
      // 		...(this.allOptions(el,h_)
      // 			? {
      // 					allOptions: this.allOptions(el,h_),
      // 			  }
      // 			: {}),
      // 		...(this.gAttrs(el,h_)
      // 			? {
      // 					gAttrs: this.gAttrs(el,h_),
      // 			  }
      // 			: {}),
      // 		...(this.hAttrs(el,h_)
      // 			? {
      // 					hAttrs: this.hAttrs(el,h_),
      // 			  }
      // 			: {}),
      // 		...(this.vProps(el,h_)
      // 			? {
      // 					vProps: this.vProps(el,h_),
      // 			  }
      // 			: {}),
      // 		...(this.htmlSrc(el,h_)
      // 			? {
      // 					htmlSrc: this.htmlSrc(el,h_),
      // 			  }
      // 			: {}),
      // 		...(this.wbcSrc(el,h_)
      // 			? {
      // 					wbcSrc: this.wbcSrc(el,h_),
      // 			  }
      // 			: {}),
      // 		...(this.wbcSyn(el,h_)
      // 			? {
      // 					wbcSyn: this.wbcSyn(el,h_),
      // 			  }
      // 			: {}),
      // 	};
      // 	return VN;
      // },
      ////////////////htmlSrc: .....//////////////////
      htmlSrc(el_, h_) {
        let el = this.generalVal(
          el_,
          this.itemAccessebility
          // this.lang
        );
        if (!el?.comp) {
          return null;
        }
        let htmlSrcDefault = {};
        if (!el?.options?.htmlSrc) {
          return null;
        } else if (el?.options?.htmlSrc === true) {
          htmlSrcDefault = {
            wrap: {
              comp: "VRow",
              options: {
                class: `container pa-5 ma-5`,
                style: {
                  backgroundColor: this.rColor,
                },
              },
            },
            title: {
              comp: "h2",
              options: {
                class: "pa-2 text-center",
              },
              // content: `${el.comp}- Tag (HTML Code source)`,
              content: `HTML Code source`,
            },
          };
        }
        let htmlSrcItemAttrs = Object.keys(el?.options || {});
        // if(el?.options?.mode != 'dev'){
        //   htmlSrcItemAttrs =htmlSrcItemAttrs.filter(e=>['wrap', 'key', 'class',
        //     'hide', 'load', 'html', 'props', 'ref', 'header', 'footer', 'style', 'val'
        // ].includes(e))
        // }

        htmlSrcItemAttrs = htmlSrcItemAttrs.sort().map((e) => {
          if (el.options[e])
            return h_(
              el.options.htmlSrc?.items?.comp ||
                htmlSrcDefault?.items?.comp ||
                "span",
              {
                ...(el.options.htmlSrc?.items?.options ||
                  htmlSrcDefault?.items?.options ||
                  {}),
              },
              [
                h_(
                  "span",
                  {
                    style: {
                      color: "#42b983",
                    },
                  },
                  ` :${e}=`
                ),
                `'${JSON.stringify(el.options[e])}'`,
              ]
            );
        });

        return [
          h_(
            el?.options?.htmlSrc?.title?.comp ||
              htmlSrcDefault?.title?.comp ||
              "h4",
            {
              ...(el?.options?.htmlSrc?.title?.options ||
                htmlSrcDefault?.title?.options ||
                {}),
            },
            el?.options?.htmlSrc?.title?.content ||
              htmlSrcDefault?.title?.content ||
              "HTML Code source"
          ),
          h_(
            el?.options?.htmlSrc?.wrap?.comp ||
              htmlSrcDefault?.wrap?.comp ||
              "VCard",
            {
              ...(el?.options?.htmlSrc?.wrap?.options ||
                htmlSrcDefault?.wrap?.options ||
                {}),
            },
            [
              h_("code", {}, [
                h_(
                  "span",
                  {
                    style: {
                      color: "#fc1e70",
                    },
                  },
                  ["<", el?.comp || "".replace("~", "")]
                ),
                // htmlSrcItemOption,
                htmlSrcItemAttrs,
                h_(
                  "span",
                  {
                    style: {
                      color: "#fc1e70",
                    },
                  },
                  ">"
                ),
                h_(
                  "span",
                  {
                    style: {
                      color: "#fc1e70",
                    },
                  },
                  ["</", el?.comp || "".replace("~", ""), ">"]
                ),
              ]),
            ]
          ),
        ];
      },

      ////////////////hAttrs: .....//////////////////
      hAttrs(el, h_) {
        let hAttrsDefault = {};
        if (!html_ressources.html_tags?.[el.comp]) {
          return null;
        }
        if (!el?.options?.hAttrs) {
          return null;
          // el = this.item_;
        } else if (el?.options?.hAttrs === true) {
          hAttrsDefault = {
            items: {
              wrap: {
                comp: "VCol",
                options: {
                  props: {
                    /* cols:'auto', */
                    sm: "12",
                    md: "6",
                    lg: "4",
                    xl: "3",
                  },
                },
              },
              options: {
                class: "container blue",
              },
            },
            wrap: {
              comp: "VRow",
              options: {
                class: `container pa-2 ma-2`,
                style: {
                  backgroundColor: this.rColor,
                },
              },
            },
            title: {
              comp: "h2",
              options: {
                class: "pa-2 text-center",
              },
              content: `"${el.comp}" - Attributes`,
            },
          };
        }

        let hAttrs = html_ressources.html_tags[el.comp].attrs;
        let hDesc = html_ressources.html_tags[el.comp].desc;
        let hType = html_ressources.html_tags[el.comp].type;
        let hBrowser = JSON.stringify(
          html_ressources.html_tags[el.comp].browser
        );
        console.log("hAttrs :>> ", hAttrs);
        // Object.keys(hAttrs).forEach(key => {
        //   this.item_.options.attrs[key]??= '';
        // })
        // console.log('hAttrs :>> ', );
        // el.options.attrs=
        // el = this.item_;
        let renderedItems = Object.keys(hAttrs).map((key) => {
          let attrsObj = {
            label: key,
            value: ["class"].includes(key)
              ? el?.options?.[key]
              : el?.options?.attrs?.[key] || "",
            title: hAttrs[key].desc,
          };

          try {
            let theValue = this.generalVal(
              el?.options?.attrs[key],
              this.itemAccessebility,
              this.lang
            );
            attrsObj["value"] = theValue;

            if (typeof theValue == "string") {
              attrsObj["value"] = `${theValue}`;
              attrsObj["hint"] = `${theValue}`;
            } else if (typeof theValue == "function") {
              attrsObj["value"] = theValue(this.itemAccessebility);
              attrsObj["hint"] = `${theValue}`;
            }
            if (typeof el?.options?.attrs?.[key] == "object") {
              attrsObj["value"] =
                typeof theValue == "object"
                  ? `${JSON.stringify(theValue)}`
                  : theValue;
              attrsObj["hint"] = `src=${JSON.stringify(
                el?.options?.attrs?.[key]
              )}`;
            } else {
              attrsObj["hint"] =
                typeof el?.options?.props?.[key] == "object"
                  ? `src=${JSON.stringify(el?.options?.props?.[key])}`
                  : el?.options?.props?.[key] ||
                    // 'Use js template mode for data types';
                    hAttrs[key].desc;
            }
            attrsObj["persistent-hint"] = true;
          } catch (error) {
            attrsObj["errorMessages"] = error.message;
            attrsObj["persistent-hint"] = true;
          }

          if (key != "hidden") {
            let aRenderedItem = h_(
              typeof el?.options?.attrs?.[key] == "boolean"
                ? "VCheckbox"
                : "VTextField",
              {
                props: {
                  // [key]: el?.options?.attrs?.[key]
                },
                ...(el?.options?.hAttrs?.items?.options ||
                  hAttrsDefault?.items?.options ||
                  {}),
                attrs: attrsObj /* {
									label: key,
									value: ['class'].includes(key)
										? el?.options?.[key]
										: el?.options?.attrs?.[key] || '',
									title: hAttrs?.[key]?.desc,
									hint: hAttrs?.[key]?.desc,
									'persistent-hint': true,
								} */,

                on: {
                  // input: (inputVal) => {
                  // 	el.options.attrs = {
                  // 		...el.options.attrs,
                  // 		[key]: inputVal,
                  // 	};
                  // 	// el.options.key += '_';
                  // 	// el.options.key = el.options.key.replace('__', '_');
                  // },
                  change: (inputVal) => {
                    // alert(inputVal)
                    // console.log('elrrrrrrrrrr :>> ', el);
                    el.options.attrs[key] = this.generalVal(
                      this.strToObj(inputVal),
                      this.itemAccessebility
                      // this.lg
                    );
                    // el.options.attrs = {
                    //   ...el.options.attrs,
                    //   [key]: this.generalVal(
                    //     this.strToObj(inputVal),
                    //     this.itemAccessebility
                    //     // this.lg
                    //   ),
                    //   // [key]: inputVal
                    // };
                    el.options.key = this.updateKey(el?.options?.key);

                    // el.options.key = el.options.key.replace('__', '_');
                  },
                  // update: (inputVal) => {
                  // 	el.options.attrs = {
                  // 		...el.options.attrs,
                  // 		[key]: inputVal,
                  // 	};
                  // 	// el.options.key += '_';
                  // 	// el.options.key = el.options.key.replace('__', '_');
                  // },
                },
              }
            );
            return h_(
              el?.options?.hAttrs?.items?.wrap.comp ||
                hAttrsDefault?.items?.wrap?.comp ||
                "div",
              {
                ...(el?.options?.hAttrs?.items?.wrap?.options ||
                  hAttrsDefault?.items?.wrap?.options),
              },
              [aRenderedItem]
            );
          }
        });

        return [
          h_(
            el?.options?.hAttrs?.title?.comp ||
              hAttrsDefault?.title?.comp ||
              "h4",
            {
              ...(el?.options?.hAttrs?.title?.options ||
                hAttrsDefault?.title?.options ||
                {}),
            },
            el?.options?.hAttrs?.title?.content ||
              hAttrsDefault?.title?.content ||
              "HTML Attributes"
          ),
          h_("div", {}, [h_("b", { class: "pa-1" }, "Description:"), hDesc]),
          h_("div", {}, [h_("b", { class: "pa-1" }, "Type:"), hType]),
          h_("div", {}, [h_("b", { class: "pa-1" }, "Browser:"), hBrowser]),
          h_(
            el?.options?.hAttrs?.wrap?.comp ||
              hAttrsDefault?.wrap?.comp ||
              "VRow",
            {
              ...(el?.options?.hAttrs?.wrap?.options ||
                hAttrsDefault?.wrap?.options ||
                {}),
            },
            [renderedItems]
          ),
        ];
      },
      ////////////////wbcSrc: .....//////////////////
      wbcSrc(el, h_) {
        let wbcSrcDefault = {};
        if (!el?.comp) {
          return null;
        }
        if (!el?.options?.wbcSrc) {
          return null;
        } else if (el?.options?.wbcSrc === true) {
          wbcSrcDefault = {
            wrap: {
              comp: "VRow",
              options: {
                class: `container pa-5 ma-5`,
                style: {
                  backgroundColor: this.rColor,
                },
              },
            },
            title: {
              comp: "h2",
              options: {
                class: "pa-2 text-center",
              },
              content: "WBC Code source",
            },
          };
        }

        let wbcItemToExcludes = [
          "mainRender",
          "close",
          "float",
          "allOptions",
          "wbcProps",
          "hAttrs",
          "vAttrs",
          "itemSrc",
          "htmlSrc",
          "wbcSrc",
          "vProps",
        ];
        let wbcSrcItemAttrs = Object.keys(el.options)
          .filter((e) => !wbcItemToExcludes.includes(e))
          .sort()
          .map((e) => {
            if (el.options[e])
              return h_(
                el.options.wbcSrc?.items?.comp ||
                  wbcSrcDefault?.items?.comp ||
                  "span",
                {
                  ...(el.options.wbcSrc?.items?.options ||
                    wbcSrcDefault?.items?.options ||
                    {}),
                },
                [
                  h_(
                    "span",
                    {
                      style: {
                        color: "#42b983",
                      },
                    },
                    ` :${e}=`
                  ),
                  `'${JSON.stringify(el.options[e])}' `,
                ]
              );
          });

        return [
          h_(
            el?.options?.wbcSrc?.title?.comp ||
              wbcSrcDefault?.title?.comp ||
              "div",
            {
              class: "container",
              ...(el?.options?.wbcSrc?.title?.options ||
                wbcSrcDefault?.title?.options ||
                {}),
            },
            el?.options?.wbcSrc?.title?.content ||
              wbcSrcDefault?.title?.content ||
              "Global Attributes"
          ),
          h_(
            el?.options?.wbcSrc?.wrap?.comp ||
              wbcSrcDefault?.wrap?.comp ||
              "VCard",
            {
              ...(el?.options?.wbcSrc?.wrap?.options ||
                wbcSrcDefault?.wrap?.options ||
                {}),
            },
            [
              h_(
                "code",
                {
                  class: "ma-5",
                },
                [
                  h_(
                    "span",
                    {
                      style: {
                        color: "#fc1e70",
                      },
                    },
                    ["<", el?.comp || "".replace("~", "")]
                  ),
                  // wbcSrcItemOption,
                  wbcSrcItemAttrs,
                  h_(
                    "span",
                    {
                      style: {
                        color: "#fc1e70",
                      },
                    },
                    ">"
                  ),
                  h_(
                    "span",
                    {
                      style: {
                        color: "#fc1e70",
                      },
                    },
                    ["</", el?.comp || "".replace("~", ""), ">"]
                  ),
                ]
              ),
            ]
          ),
        ];
      },

      ////////////////itemSrc: .....//////////////////
      itemSrc(el, el0, h_) {
        let itemSrcDefault = {};
        if (!el?.options?.itemSrc) {
          return null;
        } else if (el?.options?.itemSrc === true) {
          itemSrcDefault = {
            wrap: {
              comp: "VCol",
              options: {
                class: `container pa-5 ma-5`,
                style: {
                  backgroundColor: this.rColor,
                },
              },
            },
            title: {
              comp: "h2",
              options: {
                class: "pa-2 text-center",
              },
              content: "WBC Item",
            },
          };
        }

        return [
          h_(
            el?.options?.itemSrc?.title?.comp ||
              itemSrcDefault?.title?.comp ||
              "div",
            {
              ...(el?.options?.itemSrc?.title?.options ||
                itemSrcDefault?.title?.options ||
                {}),
            },
            el?.options?.itemSrc?.title?.content ||
              itemSrcDefault?.title?.content ||
              "WBC Item"
          ),

          h_(
            el?.options?.itemSrc?.wrap?.comp ||
              itemSrcDefault.wrap.comp ||
              "VRow",
            {
              ...(el?.options?.itemSrc?.wrap?.options ||
                itemSrcDefault?.wrap?.options ||
                {}),
            },
            [
              h_("code", [
                h_("VTextarea", {
                  props: {
                    value: JSON.stringify(el),
                  },
                  on: {
                    change: (val) => {
                      // alert(v)
                      this.mainItemTextArea.rules = [];
                      try {
                        let newEle = this.toWBC_(JSON.parse(val), h_);

                        // newEle.options.itemSrc=true

                        // newEle.options.mode=el.options.mode
                        // newEle.options.wbcProps=el.options.wbcProps
                        // let newEle=this.strToObj(e)
                        // newEle.options.wbcProps=el.options.wbcProps
                        // if(typeof newEle=='object'){
                        // 	newEle.output=el.output
                        // }
                        if (typeof el == "object") {
                          if (Array.isArray(newEle)) {
                            newEle.forEach((ee) => {
                              if (el?.output) {
                                ee.output = el.output;
                              }
                              if (el?.options?.mode) {
                                ee.options.mode = el.options.mode;
                              }

                              for (let key of [
                                "close",
                                "float",
                                "itemSrc",
                                "wbcProps",
                                "allOptions",
                                "gAttrs",
                                "hAttrs",
                                "vProps",
                                "htmlSrc",
                                "wbcSrc",
                                "wbcSyn",
                              ]) {
                                if (el?.options?.[key]) {
                                  ee.options[key] = el.options[key];
                                }
                              }
                            });
                          } else if (newEle instanceof Object) {
                            // newEle.output = 'all'
                            if (el?.output) {
                              newEle.output = el.output;
                            }
                            if (el?.options?.mode) {
                              newEle.options.mode = el.options.mode;
                            }

                            for (let key of [
                              "close",
                              "float",
                              "itemSrc",
                              "wbcProps",
                              "allOptions",
                              "gAttrs",
                              "hAttrs",
                              "vProps",
                              "htmlSrc",
                              "wbcSrc",
                              "wbcSyn",
                            ]) {
                              if (el?.options?.[key]) {
                                newEle.options[key] = el.options[key];
                              }
                            }
                          }
                          // if(el?.options?.mode){newEle.options.mode = el.options.mode}

                          // for (let key of ['close', 'float',
                          // 	'itemSrc', 'wbcProps',
                          // 	'allOptions', 'gAttrs',
                          // 	'hAttrs', 'vProps',
                          // 	'htmlSrc', 'wbcSrc',
                          // 	'wbcSyn']) {
                          // 	if (el?.options?.[key]) { newEle.options[key] = el.options[key] }
                          // }
                        }

                        this.item_ = newEle;
                      } catch (error) {
                        // alert('"' + val + '" can not be parsed: ' + error);
                        this.mainItemTextArea.rules = [
                          `"${val}" can not be parsed: ${error}`,
                        ];
                      }
                    },
                  },
                }),
              ]),

              this.mainItemTextArea.rules.length == 0
                ? h_("div", { props: {} }, [
                    h_("h4", {}, ["Converted WBC item:"]),
                    "JSON.stringify(el)",
                  ])
                : null,
              // h_('VCard',{props:{}},[JSON.stringify(el)]),
              h_("span", { class: "red--text" }, [this.mainItemTextArea.rules]),
            ]
          ),
        ];
      },

      ////////////////allOptions:  like:.....//////////////////
      vProps(el, h_) {
        let vPropsDefault = {};
        if (!vuetifyModule?.[el.comp]) {
          return null;
        }
        if (!el?.options?.vProps) {
          return null;
        } else if (el?.options?.vProps === true) {
          vPropsDefault = {
            items: {
              wrap: {
                comp: "VCol",
                options: {
                  props: {
                    /* cols:'auto', */
                    sm: "12",
                    md: "6",
                    lg: "4",
                    xl: "3",
                  },
                },
              },
              options: {
                class: "container blue",
              },
            },
            wrap: {
              comp: "VRow",
              options: {
                class: `container pa-5 ma-5`,
                style: {
                  backgroundColor: this.rColor,
                },
              },
            },
            title: {
              comp: "h2",
              options: {
                class: "pa-2 text-center",
              },
              content: `"${el.comp}" - Props`,
            },
          };
          // el.options.vProps = vPropsDefault
        }

        let vuetifyProps = vuetifyModule?.[el.comp]?.options?.props || {};
        el = this.item_;
        let renderedItems = Object.keys(vuetifyProps)
          .sort()
          .map((key) => {
            if (key != "hidden") {
              let propsObj = {
                label: key,
              };

              try {
                let theValue = this.generalVal(
                  el?.options?.props?.[key],
                  // eval(el?.options?.props?.[ key ]),
                  this.itemAccessebility,
                  this.lang
                );
                propsObj["value"] = theValue;

                if (typeof theValue == "string") {
                  propsObj["value"] = `${theValue}`;
                  // propsObj['hint']=`${theValue}`
                } else if (typeof theValue == "function") {
                  propsObj["value"] = theValue(this.itemAccessebility);
                  // propsObj['hint']=`${theValue}`
                } else if (typeof theValue == "object") {
                  propsObj["value"] = `${JSON.stringify(theValue)}`;
                  // propsObj['hint']=`${theValue}`
                }

                propsObj["hint"] = el?.options?.props?.[key]
                  ? `src=${JSON.stringify(el?.options?.props?.[key])}`
                  : "";
                // else {propsObj['hint']=typeof el?.options?.props?.[ key ]=='object'?`src=${JSON.stringify(el?.options?.props?.[ key ])}`:el?.options?.props?.[ key ]||'Use js template mode for data types'}
                propsObj["persistent-hint"] = true;
              } catch (error) {
                propsObj["errorMessages"] = error.message;
                propsObj["persistent-hint"] = true;
              }

              let aRenderedItem = h_(
                typeof el?.options?.[key] == "boolean"
                  ? "VCheckbox"
                  : "VTextField",
                {
                  ...(el.options.vProps?.items?.options ||
                    vPropsDefault?.items?.options ||
                    {}),
                  props: propsObj,
                  on: {
                    // input: (inputVal) => {
                    // 	el.options.props = {
                    // 		...el.options.props,
                    // 		[key]: inputVal,
                    // 	};
                    // 	// el.options.key += '_';
                    // 	// el.options.key = el.options.key.replace('__', '_');
                    // },
                    change: (inputVal_) => {
                      // alert(inputVal_)
                      let inputVal = inputVal_; // || false;

                      el.options.props[key] = inputVal;
                      if (key == "value") {
                        el.options.props["val"] = inputVal;
                      } else {
                        el.options.props[key] = this.generalVal(
                          this.strToObj(inputVal),
                          this.itemAccessebility
                          // this.lg
                        );
                      }

                      el.options.key += 1;
                      // el.options.key += '_';
                      // el.options.key = el.options.key.replace('__', '_');
                    },
                    // update: (inputVal) => {
                    // 	el.options.props = {
                    // 		...el.options.props,
                    // 		[key]: inputVal,

                    // 	};
                    // 	// el.options.key += '_';
                    // 	// el.options.key = el.options.key.replace('__', '_');
                    // },
                  },
                }
              );

              return h_(
                el?.options?.vProps?.items?.wrap?.comp ||
                  vPropsDefault?.items?.wrap?.comp ||
                  "div",
                {
                  ...(el?.options?.vProps?.items?.wrap?.options ||
                    vPropsDefault?.items?.wrap?.options ||
                    {}),
                },
                [aRenderedItem]
              );
            }
          });

        return [
          h_(
            el?.options?.vProps?.title?.comp ||
              vPropsDefault?.title?.comp ||
              "h4",
            {
              ...(el.options.vProps?.title?.options ||
                vPropsDefault?.title?.options ||
                {}),
            },
            el.options.vProps?.title?.content ||
              vPropsDefault?.title?.content ||
              "Component Attributes"
          ),
          h_(
            el?.options?.vProps?.wrap?.comp ||
              vPropsDefault?.wrap?.comp ||
              "VRow",
            {
              ...(el.options.vProps?.wrap?.options ||
                vPropsDefault?.wrap?.options ||
                {}),
            },
            [renderedItems]
          ),
        ];
      },

      ////////////////allOptions:  like:.....//////////////////
      allOptions(el, h_) {
        let allOptionsDefault = {};
        if (!el?.options?.allOptions) {
          return null;
        } else if (el?.options?.allOptions === true) {
          allOptionsDefault = {
            wrap: {
              comp: "VRow",
              options: {
                class: `container pa-5 ma-5`,
                style: {
                  backgroundColor: this.rColor,
                },
              },
            },
            items: {
              wrap: {
                comp: "VCol",
                options: {
                  props: {
                    cols: "auto",
                  },
                },
              },
              options: {
                class: "container blue",
              },
            },
            title: {
              comp: "h2",
              options: {
                class: "pa-2 h1 text-center",
              },
              content: "ALL Options",
            },
          };
        }

        let keysToExlude = [
          "main",
          "all",
          "itemSrc",
          "wbcProps",
          "allOptions",
          "gAttrs",
          "hAttrs",
          "vProps",
          "htmlSrc",
          "wbcSrc",
          "wbcSyn",
        ];
        el = this.item_;

        let renderedItems = Object.keys(el.options)
          .sort()
          .filter((e) => !keysToExlude.includes(e))
          .map((key) => {
            let allOptionsObj = {
              label: key,
              value: el.options[key],
            };
            // {en:"red",fr:"blue"}

            try {
              let theValue = this.generalVal(
                el?.options?.[key],
                this.itemAccessebility,
                this.lang
              );
              allOptionsObj["value"] = theValue;

              if (typeof theValue == "string") {
                allOptionsObj["value"] = `${theValue}`;
                // allOptionsObj['hint']=`${theValue}`
              } else if (typeof theValue == "function") {
                allOptionsObj["value"] = theValue(this.itemAccessebility);
                // allOptionsObj['hint']=`${theValue}`
              } else if (typeof theValue == "object") {
                allOptionsObj["value"] = `${JSON.stringify(theValue)}`;
              }
              allOptionsObj["hint"] = el?.options?.[key]
                ? `src=${JSON.stringify(el?.options?.[key])}`
                : "";
              // else {allOptionsObj['hint']=typeof el?.options?.[ key ]=='object'?`src=${JSON.stringify(el?.options?.[ key ])}`:el?.options?.[ key ]||'Use js template mode for data types'}
              allOptionsObj["persistent-hint"] = true;
            } catch (error) {
              allOptionsObj["errorMessages"] = error.message;
              allOptionsObj["persistent-hint"] = true;
            }

            let aRenderedItem = h_(
              typeof el.options[key] === "boolean" || !el.options?.[key]
                ? "VCheckbox"
                : /*  typeof el.options[key] === 'object'
									? 'VCard'
									:  */ "VTextField",
              {
                class: "container",
                ...(el.options.allOptions?.items?.options ||
                  allOptionsDefault.items?.options ||
                  {}),
                props: allOptionsObj /* {
									label: key,
									value: el.options[key],
									title:
										el.options?.[key]
											?.title /* hint: el.options[key].title, 'persistent-hint': true  }*/,
                on: {
                  // input: (inputVal) => {
                  // 	el.options[key] = inputVal;
                  // 	if (key == 'value') {
                  // 		el.options['val'] = inputVal;
                  // 	} else {
                  // 		el.options[key] = inputVal;
                  // 	}
                  // 	// el.options.key += '_';
                  // 	// el.options.key = el.options.key.replace('__', '_');
                  // },
                  change: (inputVal_) => {
                    let inputVal = inputVal_ || false;

                    el.options[key] = inputVal;
                    if (key == "value") {
                      el.options["val"] = inputVal;
                    } else {
                      el.options[key] = this.generalVal(
                        this.strToObj(inputVal),
                        this.itemAccessebility
                        // this.lg
                      );
                    }
                    // el.options.key += 1
                    // el.options.key += '_';
                    // el.options.key = el.options.key.replace('__', '_');
                  },
                  // update: (inputVal) => {
                  // 	el.options[key] =
                  // 		el.options[key].type == 'object'
                  // 			? this.toallOptions(inputVal)
                  // 			: inputVal;
                  // 	if (key == 'value') {
                  // 		el.options['val'] = inputVal;
                  // 	} else {
                  // 		el.options[key] = inputVal;
                  // 	}
                  // 	// el.options.key += '_';
                  // 	// el.options.key = el.options.key.replace('__', '_');
                  // },
                },
              },
              [h_("b", {}, key + ": "), JSON.stringify(el.options[key])]
            );
            // return aRenderedItem
            return h_(
              el?.options?.allOptions?.items?.wrap?.comp ||
                allOptionsDefault.items.wrap.comp ||
                "VRow",
              {
                ...(el?.options?.allOptions?.items?.wrap?.options ||
                  allOptionsDefault?.items?.wrap?.options),
              },
              [aRenderedItem]
            );
          });

        return [
          h_(
            el?.options?.allOptions?.title?.comp ||
              allOptionsDefault?.title?.comp ||
              "h4",
            {
              ...(el?.options?.allOptions?.title?.options ||
                allOptionsDefault?.title?.options ||
                {}),
            },
            el?.options?.allOptions?.title?.content ||
              allOptionsDefault?.title?.content ||
              "All options"
          ),
          h_(
            el.options.allOptions?.wrap?.comp ||
              allOptionsDefault.wrap?.comp ||
              "div",
            {
              ...(el?.options?.allOptions?.wrap?.options ||
                allOptionsDefault?.wrap?.options ||
                {}),
            },
            [renderedItems]
          ),
        ];
      },
      ////////////////gAttrs: like id, ...//////////////////
      gAttrs(el, h_) {
        if (!el?.options?.gAttrs) {
          return null;
        }
        let gAttrsDefault = {};

        if (el?.options?.gAttrs === true) {
          gAttrsDefault = {
            items: {
              wrap: {
                comp: "VCol",
                options: {
                  props: {
                    /* cols:'auto', */
                    sm: "12",
                    md: "6",
                    lg: "4",
                    xl: "3",
                  },
                },
              },
              options: {
                class: "container blue",
              },
            },
            wrap: {
              comp: "VRow",
              options: {
                class: `container pa-5 ma-5`,
                style: {
                  backgroundColor: this.rColor,
                },
              },
            },
            title: {
              comp: "h2",
              options: {
                class: "pa-2 h2 text-center",
              },
              content: "Global Attributes",
            },
          };
          // this.item_.options.gAttrs = gAttrsDefault
        }

        let gAttributes = html_ressources.global_attrs;

        let kys = [
          "accesskey",
          "class",
          "contenteditable",
          "data",
          "dir",
          "draggable",
          "id",
          "lang",
          "spellcheck",
          "style",
          "tabindex",
          "title",
          "translate",
        ];

        el = this.item_;
        let renderedItems = kys.map((key) => {
          let attrsObj = {
            label: key,
            value: ["class"].includes(key)
              ? el?.options?.[key]
              : el?.options?.attrs?.[key] || "",
            title: gAttributes[key].desc,
          };

          try {
            let theValue = this.generalVal(
              el?.options?.attrs?.[key],
              this.itemAccessebility,
              this.lang
            );
            attrsObj["value"] = theValue;

            if (typeof theValue == "string") {
              attrsObj["value"] = `${theValue}`;
              attrsObj["hint"] = `${theValue}`;
            } else if (typeof theValue == "function") {
              attrsObj["value"] = theValue(this.itemAccessebility);
              // attrsObj['hint'] = `${theValue}`;
            }
            if (typeof el?.options?.[key] == "object") {
              attrsObj["value"] =
                typeof theValue == "object"
                  ? `${JSON.stringify(theValue)}`
                  : theValue;
              // attrsObj['hint'] = `src=${JSON.stringify(el?.options?.[key])}`;
            } else {
              // attrsObj['hint'] =
              //   typeof el?.options?.props?.[key] == 'object'
              //     ? `src=${JSON.stringify(el?.options?.attrs?.[key])}`
              //     : el?.options?.attrs?.[key] || '';
            }
            attrsObj["persistent-hint"] = true;
          } catch (error) {
            attrsObj["errorMessages"] = error.message;
            attrsObj["persistent-hint"] = true;
          }
          attrsObj["hint"] = gAttributes[key].desc;
          if (key != "hidden") {
            let aRenderedItem = h_("VTextField", {
              props: {
                value:
                  typeof el?.options?.[key] == "object"
                    ? JSON.stringify(
                        el?.options?.[key] || el?.options?.attrs?.[key]
                      )
                    : el?.options?.[key] || el?.options?.attrs?.[key],
              },
              // props: {value:typeof el?.options?.attrs?.[key]=='object'?JSON.stringify(el?.options?.attrs?.[key]):el?.options?.attrs?.[key]},
              ...(el?.options?.gAttrs?.items?.options ||
                gAttrsDefault?.items?.options ||
                {}),
              attrs: attrsObj,
              /*  {
								label: key,
								value: ['class'].includes(key)
									? el?.options?.[key]
									: el?.options?.attrs?.[key] || '',
								title: gAttributes[key].desc,
								hint: gAttributes[key].desc,
								'persistent-hint': true,
							} */ on: {
                // input: (inputVal) => {
                // 	if (key == 'val') {
                // 		el.options['val'] = inputVal;
                // 		if (el?.options?.props?.value) { el.options.props.value = inputVal }
                // 	} else {
                // 		el.options = {
                // 			...el.options,
                // 			[key]: inputVal,
                // 		};
                // 	}
                // 	// el.options.key += '_';
                // 	// el.options.key = el.options.key.replace('__', '_');
                // },
                change: (inputVal) => {
                  // alert(key)
                  if (!el?.options?.attrs) {
                    el.options.attrs = {};
                  }
                  // el.options.attrs = {};
                  if (key == "class" || key == "style") {
                    el.options[key] = this.generalVal(
                      this.strToObj(inputVal),
                      this.itemAccessebility
                      // this.lg
                    );
                  }

                  if (typeof el?.options?.[key] != "boolean") {
                    el.options.key = this.updateKey(
                      el?.options?.key || this.randomKey("wbc")
                    );
                    // el?.options?.[key]=null
                  }
                  el.options.attrs[key] = this.generalVal(
                    this.strToObj(inputVal),
                    this.itemAccessebility
                    // this.lg
                  );

                  if (!el?.options?.key) {
                    el.options.key = this.randomKey("wbc");
                  }
                  // el.options.key = this.updateKey(el?.options?.key)

                  // 	if (el?.options?.props?.value) { el.options.props.value = inputVal }
                  // } else {
                  // 	el.options = {
                  // 		...el.options,
                  // 		[key]: this.generalVal(
                  // 			this.strToObj(inputVal),
                  // 			this.itemAccessebility,
                  // 			// this.lg
                  // 			) ,
                  // 	};
                  // }
                  // el.options.key += '_';
                  // el.options.key = el.options.key.replace('__', '_');
                },
                // update: (inputVal) => {
                // 	if (key == 'val') {
                // 		el.options['val'] = inputVal;
                // 		if (el?.options?.props?.value) { el.options.props.value = inputVal }
                // 	} else {
                // 		el.options = {
                // 			...el.options,
                // 			[key]: inputVal,
                // 		};
                // 	}
                // 	// el.options.key += '_';
                // 	// el.options.key = el.options.key.replace('__', '_');
                // },
              },
            });

            return h_(
              el?.options?.gAttrs?.items?.wrap?.comp ||
                gAttrsDefault?.items?.wrap?.comp,
              {
                ...(el?.options?.gAttrs?.items?.wrap?.options ||
                  gAttrsDefault?.items?.wrap?.options ||
                  {}),
              },
              [aRenderedItem]
            );
          }
        });

        return [
          h_(
            el?.options?.gAttrs?.title?.comp ||
              gAttrsDefault?.title?.comp ||
              "h4",
            {
              ...(el?.options?.gAttrs?.title?.options ||
                gAttrsDefault?.title?.options ||
                {}),
            },
            el?.options?.gAttrs?.title?.content || "Global Attributes"
          ),
          h_(
            el?.options?.gAttrs?.wrap?.comp ||
              gAttrsDefault?.wrap?.comp ||
              "div",
            {
              ...(el?.options?.gAttrs?.wrap?.options ||
                gAttrsDefault?.wrap?.options ||
                {}),
            },
            [renderedItems]
          ),
        ];
      },

      ////////////////wbcProps: wbc props like:{val,float,load, hide, class,...}//////////////////
      wbcProps(el, h_) {
        let wbcDefault = {};
        if (!el?.options?.wbcProps) {
          return null;
        }

        if (el?.options?.wbcProps === true) {
          wbcDefault = {
            wrap: {
              comp: "VRow",
              options: {
                class: `container pa-2 ma-2`,
                style: {
                  backgroundColor: this.rColor,
                },
              },
            },
            items: {
              wrap: {
                comp: "VCol",
                options: {
                  props: {
                    cols: "auto",
                  },
                },
              },
              options: {
                class: "container blue",
              },
            },
            title: {
              comp: "h2",
              options: {
                class: "pa-2 text-center",
              },

              content: "WBC PROPS",
            },
          };
          // this.item_.options.wbcProps = wbcDefault
        }

        let wbcPropsObj = {
          header: {
            title: "Specifies the element class",
            type: "text",
            comp: "VTextField",
          },
          footer: {
            title: "Specifies the element class",
            type: "text",
            comp: "VTextField",
          },
          class: {
            title: "Specifies the element class",
            type: "text",
            comp: "VTextField",
          },
          wrap: {
            title: "Wrap the element",
            type: "text",
            comp: "VTextField",
          },
          html: {
            title: "Default slot content",
            type: "text",
            comp: "VTextField",
          },
          val: {
            title: "Contains the main object Value",
            type: "text",
            comp: "VTextField",
          },
          headers: {
            title: "Specifies Element Headers (To be parsed)",
            type: "object",
            comp: "VTextField",
          },
          footers: {
            title: "Specifies Element footers (To be parsed)",
            type: "object",
            comp: "VTextField",
          },
          key: {
            title: "Specifies the key of the element",
            type: "text",
            comp: "VTextField",
          },
          global: {
            title:
              "Specifies the glabal name  of the corresponding wbc item element",
            type: "text",
            comp: "VTextField",
          },
          ref: {
            title: "Specifies component ref",
            type: "text",
            comp: "VTextField",
          },
          hide: {
            title: "Hide and show the element",
            type: "text",
            comp: "VCheckbox",
          },
          load: {
            title: "Specifies the elememt loader",
            type: "text",
            comp: "VCheckbox",
          },
          mode: {
            title: "Specifie the displaying mode of the element",
            type: "text",
            comp: "VTextField",
          },
          float: {
            title: "display the component in mode floating",
            type: "text",
            comp: "VCheckbox",
          },
        };
        // this.item_.options.class=this.wbcPropsPropsObj[0].props.val
        // el = this.item_;
        // let renderedItems = Object.keys(wbcPropsObj)
        let renderedItems = [
          "header",
          "footer",
          "class",
          "wrap",
          "html",
          "val",
          "headers",
          "footers",
          "key",
          "global",
          "ref",
          "hide",
          "load",
          "mode",
          "float",
        ]
          // .sort()
          .filter((e) => !["mode"].includes(e))
          .map((key) => {
            let aWbcPropsObj = {
              label: key,
              value: el.options[key],
              title: wbcPropsObj[key].title,
            };

            try {
              let theValue = this.generalVal(
                el?.options?.[key],
                this.itemAccessebility,
                this.lang
              );

              if (key == "header" || key == "footer") {
                el.options[key] = this.generalVal(
                  el?.[key],
                  this.itemAccessebility,
                  this.lang
                );
              }

              aWbcPropsObj["value"] = theValue;

              if (typeof theValue == "boolean") {
                // alert(theValue+typeof theValue)
                // aWbcPropsObj['value'] = `${theValue}`;
                aWbcPropsObj["value"] = el?.options?.[key];
                // aWbcPropsObj['hint']=`${theValue}`
              } else if (typeof theValue == "string") {
                aWbcPropsObj["value"] = `${theValue}`;
                // aWbcPropsObj['value'] = theValue;
                // aWbcPropsObj['hint']=`${theValue}`
              } else if (typeof theValue == "function") {
                aWbcPropsObj["value"] = theValue(this.itemAccessebility);
                // aWbcPropsObj['hint']=`${theValue}`
              } else if (typeof el?.options?.[key] == "object") {
                aWbcPropsObj["value"] = `${JSON.stringify(theValue)}`;
              }
              if (el?.options?.[key]) {
                aWbcPropsObj["hint"] = `src=${JSON.stringify(
                  el?.options?.[key]
                )}`;
              }

              // else {aWbcPropsObj['hint']=typeof el?.options?.props?.[ key ]=='object'?`src=${JSON.stringify(el?.options?.props?.[ key ])}`:el?.options?.props?.[ key ]||'Use js template mode for data types'}
              aWbcPropsObj["persistent-hint"] = true;
            } catch (error) {
              aWbcPropsObj["errorMessages"] = error.message;
              aWbcPropsObj["persistent-hint"] = true;
            }

            // alert(key)
            let aRenderedItem = h_(wbcPropsObj[key].comp, {
              ...(el?.options?.wbcProps?.items?.options ||
                wbcDefault?.items?.options ||
                {}),
              val: el.options[key],
              props: aWbcPropsObj /* {
								label: key,
								value: el.options[key],
								title: wbcPropsObj[key].title,
								hint: wbcPropsObj[key].title,
								'persistent-hint': true,
							} */,
              on: {
                // update: (inputVal_) => {
                //   let inputVal = inputVal_ || false;

                //   el.options[key] = inputVal;
                //   if (key == 'value') {
                //     el.options['val'] = inputVal;
                //   } else {
                //     el.options[key] = this.generalVal(
                //       this.strToObj(inputVal),
                //       this.itemAccessebility
                //       // this.lg
                //     );
                //   }
                //   // el.options.key += 1
                //   // el.options.key += '_';
                //   // el.options.key = el.options.key.replace('__', '_');
                // },
                change: (inputVal_) => {
                  let inputVal = inputVal_ || true;

                  el.options[key] = inputVal;
                  if (key == "header" || key == "footer") {
                    el[key] = inputVal_;

                    el.options[key] = this.generalVal(
                      this.strToObj(inputVal_),
                      this.itemAccessebility
                      // this.lg
                    );

                    // el.options.key += 1
                  } else if (key == "value") {
                    el.options["val"] = inputVal_;
                  } else {
                    el.options[key] = this.generalVal(
                      this.strToObj(inputVal_),
                      this.itemAccessebility
                      // this.lg
                    );
                  }

                  if (typeof el?.options?.[key] != "boolean") {
                    el.options.key = this.updateKey(
                      el?.options?.key || this.randomKey("wbc")
                    );
                    // el?.options?.[key]=null
                  }
                  if (!el?.options?.key) {
                    el.options.key = this.randomKey("wbc");
                  }

                  // el.options.key += 1
                  // el.options.key += '_';
                  // el.options.key = el.options.key.replace('__', '_');
                },
                // update: (inputVal) => {
                // 	if (key == 'val') {
                // 		el.options['val'] = inputVal;
                // 		if (el?.options?.props?.value) { el.options.props.value = inputVal }
                // 	} else {
                // 		el.options = {
                // 			...el.options,
                // 			[key]: inputVal,
                // 		};
                // 	}
                // 	// el.options.key += '_';
                // 	// el.options.key = el.options.key.replace('__', '_');
                // },
              },
            });
            // return aRenderedItem
            return h_(
              el?.options?.wbcProps?.items?.wrap?.comp ||
                wbcDefault?.items?.wrap?.comp ||
                "VCard",
              {
                ...(el?.options?.wbcProps?.items?.wrap?.options ||
                  wbcDefault?.items?.wrap?.options ||
                  {}),
              },
              [aRenderedItem]
            );
          });

        return [
          h_(
            el?.options?.wbcProps?.title?.comp ||
              wbcDefault?.title?.comp ||
              "h1",
            {
              ...(el?.options?.wbcProps?.title?.options ||
                wbcDefault?.title?.options ||
                {}),
              class: "pa-2 h1 text-center",
            },
            el?.options?.wbcProps?.title?.content ||
              wbcDefault?.title?.content ||
              "WBC Props"
          ),
          h_(
            el?.options?.wbcProps?.wrap?.comp ||
              wbcDefault?.wrap?.comp ||
              "div",
            {
              ...(el?.options?.wbcProps?.wrap?.options ||
                wbcDefault?.wrap?.options ||
                {}),
            },
            [renderedItems]
          ),
        ];
      },
      ////////////////mainRender: wrappped by float and closed by icon//////////////////

      ////////////////make window float//////////////////

      //////////////// float: display floating checkbox of main el//////////////////
      // float(el, h_) {

      //   console.log('el888888888888888 :>> ', el);
      //   // let floatDefault = {};
      //   if (el?.options?.float == null || el?.options?.float == undefined) {
      //     return null;
      //   } else {

      //     let e = {
      //       content: {
      //         comp: 'VIcon',
      //         options: {
      //           // class: 'pa-5 mt-15',
      //           // class: 'mt-10 pt-5',
      //           html: !el?.options?.float ? 'mdi-dock-window' : 'mdi-fullscreen-exit',
      //           headers: 'Float Output: ',
      //           // attrs: { title: 'Float Output' },
      //           on: {
      //             click: () => {
      //               alert(!el?.options?.float)
      //               el.options.float = !el.options.float//inputVal
      //               // el.options.key = this.updateKey(el?.options?.key)
      //             },
      //           },
      //           // },
      //         }
      //       },

      //       ...el?.options?.floatContent
      //     }

      //       ;

      //     return h_('WBC', { class: 'pt-15', props: { item: e } });
      //     // return h_(
      //     //   'VCheckbox',
      //     //   {
      //     //     // key: 'float-' + this.updateKey(el?.options?.key),
      //     //     props: {
      //     //       value: el?.options?.float||false,
      //     //       label: 'Float Output',
      //     //       'append-icon': el?.options?.float?'mdi-picture-in-picture-bottom-right':null
      //     //     },
      //     //     val: !el?.options?.float,
      //     //     on: {
      //     //       change: (inputVal) => {
      //     //         alert(inputVal)
      //     //         el?.options?.float = !el?.options?.float
      //     //       },
      //     //     },
      //     //   },
      //     //   // ['Ouvert/Fermer']
      //     // );

      //   }
      // },
      ////////////////make window float//////////////////

      //////////////// float: display floating checkbox of main el//////////////////

      ////////////////close//////////////////
      focusOn(el, h_, vnode = null) {
        if (!el) {
          return null;
        }
        // return h_('VContainer', {
        //   style: el?.options?.float
        //     ? {
        //       position: 'fixed',
        //       top: '3% ',
        //       left: '30%',
        //       'z-index': '10',
        //       height: 'auto',
        //       width: 'auto',
        //       padding: '0.8%',
        //       transform: `translate(${this.offsetX}px, ${this.offsetY}px)`,
        //       cursor: this.draggable ? 'grabbing' : 'grab',
        //       'background-color': '#FAFAFA',
        //       ...(el?.options?.mode == 'dev'
        //         ? { border: `5px dashed ${this.rColor}` }
        //         : {}),

        //     }
        //     : {},
        // }, [this.floatCloseDrag(el, h_), vnode, this.float(el,h_)]);

        let floatStyle = {
          position: "fixed",
          top: "13% ",
          left: "30%",
          "z-index": "10",
          height: "auto",
          width: "40%",
          padding: "1.8%",
          transform: `translate(${this.offsetX}px, ${this.offsetY}px)`,
          cursor: this.draggable ? "grabbing" : "grab",
          "background-color": "#FAFAFA",
          border: `5px dashed ${this.rColor}`,
          // Resizable properties
          resize: "both", // Enable both horizontal and vertical resizing
          overflow: "auto", // Makes the content scrollable, so resize works properly
        };

        // floatStyle = {}
        // let floatCloseDragVN= h_('WBC', { props: { item: this.floatCloseDrag(el, h_) } })

        let header = [
          "<~VRow|pa-2 mb-5 d-flex justify-end align-end>",
          this.float(el, h_),
        ];
        if (el?.options?.float) {
          header.push(this.drag(el, h_), this.close(el, h_));
        }

        let wbcFocusOnObj = {
          options: {
            // comp: 'VRow',

            class: "pa-15",

            key: `key-${el?.options?.float || "float"}`,
            // style: el?.options?.float
            //   ? floatStyle

            style: el?.options?.float
              ? floatStyle
              : { border: `5px dashed ${this.rColor}` },
          },
          content0: header,
          content1: vnode,
          // float:{
          // comp:'VContainer',
          // },

          ...(el?.options?.focusOnOptions || {}),
        };

        // if(el?.options?.float)
        // {wbcFocusOnObj.options.on = {
        //   mousedown: this.startDrag,
        //   mousemove: (v) => this.doDrag(v, 0.8),
        //   mouseup: this.endDrag,
        // }
        // }
        // else {

        //   wbcFocusOnObj.options.on = {}
        // }

        return h_("WBC", { props: { item: wbcFocusOnObj } });
      },

      float(el, h_) {
        if (typeof el?.options?.float != "boolean") {
          return null;
        }
        // if (el?.options?.mode == 'dev') {
        //   el.options.close = el?.options?.close || true;
        // }

        let floatIcon = {
          content: {
            comp: "VIcon",
            options: {
              attrs: { title: "Float Output" },
              class: " pa-2",

              // class: 'pa-2 mt-15',
              // class: 'mt-10 pt-5',
              html: !el?.options?.float
                ? "mdi-dock-window"
                : "mdi-fullscreen-exit",
              // headers: 'Float Output: ',
              // attrs: { title: 'Float Output' },
              on: {
                click: () => {
                  // alert(!el?.options?.float)
                  el.options.float = !el.options.float; //inputVal
                  // el.options.key = this.updateKey(el?.options?.key)
                },
              },
              // },
            },
          },
          ...el?.options?.floatContent,
        };

        return h_("WBC", { props: { item: floatIcon } });
      },
      close(el, h_) {
        if (typeof el?.options?.close != "boolean") {
          return null;
        }

        //
        let closeIcon = {
          content: {
            options: {
              comp: "VIcon",
              attrs: { title: "Close window" },
              class: " pa-2",
              html: "mdi-close-box-outline",
              on: {
                click: () => {
                  // alert('closed')
                  // el.options.headers='ddddddddddddddddddd'
                  el.options["hide"] = true;
                  el.options.close = false;
                },
              },
            },
          },
          ...el?.options?.closeContent,
        };
        return h_("WBC", { props: { item: closeIcon } });
      },
      drag(el, h_) {
        if (typeof el?.options?.drag != "boolean") {
          return null;
        }

        //////////////////////////////
        let on = {
          mousedown: this.startDrag,
          mousemove: (v) => this.doDrag(v, 0.8),
          mousleave: this.endDrag,
        };

        let dragIcon = {
          content: {
            comp: "VIcon",
            options: {
              attrs: { title: "Drag window" },
              class: " pa-2",
              // html: 'mdi-cursor-move',
              html: "mdi-drag",
              on: {
                // click: () => { alert(111111) },
                ...(el?.options?.drag ? on : {}),
              },
            },
          },
          ...el?.options?.dragContent,
        };

        return h_("WBC", { props: { item: dragIcon } });
      },

      //   // if (el?.options?.mode == 'dev') {
      //   //   el.options.gClose = el?.options?.gClose || true;
      //   // }

      //   if (!el || !el?.options?.gClose ) {
      //     return null;
      //   } else {
      //     el = this.item_;
      //     let wbcGCloseObj = {
      //       options: {
      //         class: ' mb-10 pb-5',
      //         // style: {
      //         //   display: 'block',
      //         //   // 'align-self': 'flex-top',
      //         //   margin: '-1%',
      //         //   float: 'right',
      //         // },
      //       },
      //       content: {
      //         comp: 'VIcon',
      //         options: {
      //           // class:'red',
      //           html: 'mdi-close-box',
      //           style: {
      //             display: 'block',
      //             // 'align-self': 'flex-top',
      //             margin: '-1%',
      //             float: 'right',
      //           },
      //           on: {
      //             click: () => {
      //               alert('closed')
      //               // el.options.headers='ddddddddddddddddddd'
      //               // el.options['hide'] = true;
      //               el.options.gClose = null;
      //             },
      //           },
      //         }
      //       },
      //       ...el?.options?.gCloseOptions || {}
      //     }
      //     return h_('WBC', { props: { item: wbcGCloseObj } });
      //   }
      // },

      //////////////////////////////
      ////////////////gClose//////////////////
      globalFocusOn(el, h_, vnode = null) {
        if (!el) {
          return null;
        }

        let header = [
          "<~VRow|pa-2 mb-5 d-flex justify-end align-end>",
          this.gFloat(el, h_) /* , this.gDrag(el, h_), this.gClose(el, h_) */,
        ];
        if (el?.options?.gFloat) {
          header.push(this.gDrag(el, h_), this.gClose(el, h_));
        }

        let headerVN = h_("WBC", { props: { item: header } });

        return h_(
          "VContainer",
          {
            style: el?.options?.gFloat
              ? {
                  position: "fixed",
                  top: "10% ",
                  left: "30%",
                  "z-index": "10",
                  height: "50%",
                  width: "50%",
                  padding: "0.8%",
                  transform: `translate(${this.offsetX}px, ${this.offsetY}px)`,
                  cursor: this.draggable ? "grabbing" : "grab",
                  "background-color": "#FAFAFA",
                  overflow: "auto", // This enables scrolling when content overflows
                  ...(el?.options?.mode == "dev"
                    ? { border: `5px dashed ${this.rColor}` }
                    : {}),
                }
              : {},
            ...(el?.options?.gFloatOptions || {}),
          },
          [headerVN, vnode]
        );
      },

      gFloat(el, h_) {
        if (typeof el?.options?.gFloat != "boolean") {
          return null;
        }

        let gFloatIcon = {
          content: {
            dive: true,
            comp: "VIcon",
            options: {
              attrs: { title: "float global window" },
              class: " font-weight-bold pa-2",
              props: { color: "black", large: true, dark: true },
              // class: 'pa-2 mt-15',
              // class: 'mt-10 pt-5',
              html:
                el?.options?.gFloat != true
                  ? "mdi-dock-window"
                  : "mdi-fullscreen-exit",
              // headers: 'gFloat Output: ',
              // attrs: { title: 'gFloat Output' },
              on: {
                click: (that, evt) => {
                  // alert(!el?.options?.gFloat)
                  el.options.gFloat = !el.options.gFloat; //inputVal
                  that.data.options.html =
                    el?.options?.gFloat != true
                      ? "mdi-dock-window"
                      : "mdi-fullscreen-exit";
                  // el.options.key = this.updateKey(el?.options?.key)
                },
              },
              // },
            },
            // tracker: that => {
            //   that.data.options.html = el?.options?.gFloat == true ? 'mdi-dock-window' : 'mdi-fullscreen-exit'
            // }
          },
          ...el?.options?.gFloatContent,
        };

        return h_("WBC", { props: { item: gFloatIcon } });
      },
      gClose(el, h_) {
        if (typeof el?.options?.gClose != "boolean") {
          return null;
        }

        if (!el || !el?.options?.gClose) {
          return null;
        }

        //
        let gCloseIcon = {
          content: {
            comp: "VIcon",
            options: {
              // class:'red',
              props: { color: "black", large: true, dark: true },
              html: "mdi-close-box",
              class: " pa-2",

              // style: {
              //   display: 'block',
              //   // 'align-self': 'flex-top',
              //   margin: '-1%',
              //   float: 'right',
              // },
              on: {
                click: () => {
                  // alert('closed')
                  // el.options.headers='ddddddddddddddddddd'
                  // el.options['hide'] = true;
                  el.options.gClose = null;
                },
              },
            },
          },
          ...el?.options?.gCloseContent,
        };
        return h_("WBC", { props: { item: gCloseIcon } });
      },
      gDrag(el, h_) {
        if (typeof el?.options?.gDrag != "boolean") {
          return null;
        }

        //////////////////////////////
        let on = {
          mousedown: this.startDrag,
          mousemove: (v) => this.doDrag(v, 0.8),
          mousleave: this.endDrag,
        };

        let gDragIcon = {
          content: {
            comp: "VIcon",
            options: {
              props: { color: "black", large: true, dark: true },
              attrs: { title: "Drag global window" },
              class: " pa-2",
              // html: 'mdi-cursor-move',
              html: "mdi-drag",
              on: {
                // click: () => { alert(111111) },
                ...(el?.options?.gDrag ? on : {}),
              },
            },
          },
          ...el?.options?.gDragContent,
        };

        return h_("WBC", { props: { item: gDragIcon } });
      },
      ///////////////////////////////////////////////////////////
      ////////////////wbcSyn: wbc component syntax//////////////////
      wbcSyn(el, h_) {
        let wbcSynDefault = {};
        if (!el.options?.wbcSyn) {
          return null;
        } else if (el?.options?.wbcSyn === true) {
          wbcSynDefault = {
            wrap: {
              comp: "VCol",
              options: {
                class: `container pa-5 ma-5`,
                style: {
                  backgroundColor: this.rColor,
                },
              },
            },
            title: {
              comp: "h2",
              options: {
                class: "pa-2 text-center",
              },
              content: "WBC Code source",
            },
          };
        }

        let wbcItemToExcludes = [
          "mainRender",
          "close",
          "float",
          "allOptions",
          "wbcProps",
          "hAttrs",
          "vAttrs",
          "itemSrc",
          "htmlSrc",
          "wbcSyn",
          "vProps",
        ];
        let wbcSynItemAttrs = Object.keys(el.options)
          .filter((e) => !wbcItemToExcludes.includes(e))
          .sort()
          .map((e) => {
            if (el.options[e])
              return h_(
                el.options.wbcSyn?.items?.comp ||
                  wbcSynDefault?.items?.comp ||
                  "span",
                {
                  ...(el.options.wbcSyn?.items?.options ||
                    wbcSynDefault?.items?.options ||
                    {}),
                },
                [
                  h_(
                    "span",
                    {
                      style: {
                        color: "#42b983",
                      },
                    },
                    ` :${e}=`
                  ),
                  `'${JSON.stringify(el.options[e])}' `,
                ]
              );
          });

        let ell = this.clone(el);

        if (options?.mode != "dev") {
          delete ell?.output;
          delete ell?.asChild;

          delete ell?.options?.itemSrc;
          delete ell?.options?.raw;
          delete ell?.options?.raw0;
          delete ell?.options?.allOptions;
          delete ell?.options?.gAttrs;
          delete ell?.options?.hAttrs;
          delete ell?.options?.vProps;
          delete ell?.options?.htmlSrc;
          delete ell?.options?.wbcSrc;
          delete ell?.options?.wbcSyn;
          delete ell?.options?.wbcProps;
          delete ell?.options?.globalHtml;
          delete ell?.options?.externalHtml;
          delete ell?.options?.linkHtml;
          delete ell?.options?.rawHtml;
          delete ell?.options?.mainHtml;
          delete ell?.options?.menuHtml;
          delete ell?.options?.wrapHtml;

          delete ell?.options?.all;
          delete ell?.options?.close;
          delete ell?.options?.closeContent;
          delete ell?.options?.float;
          delete ell?.options?.floatContent;
          delete ell?.options?.drag;
          delete ell?.options?.dragContent;
          delete ell?.options?.focusOnOptions;

          delete ell?.options?.externalHtml;
          delete ell?.options?.global;
          delete ell?.options?.isValid;
          delete ell?.options?.linkHtml;
          delete ell?.options?.mainHtml;
          delete ell?.options?.menuHtml;
          delete ell?.options?.mode;
        }

        return [
          h_(
            el.options?.wbcSyn?.title?.comp ||
              wbcSynDefault?.title?.comp ||
              "h4",
            {
              ...(el.options?.wbcSyn?.title?.options ||
                wbcSynDefault?.title?.options ||
                {}),
            },
            el.options?.wbcSyn?.title?.content ||
              wbcSynDefault?.title?.content ||
              "Global Attributes"
          ),
          h_(
            el.options?.wbcSyn?.wrap?.comp ||
              wbcSynDefault?.wrap?.comp ||
              "VCard",
            {
              ...(el.options?.wbcSyn?.wrap?.options ||
                wbcSynDefault?.wrap?.options ||
                {}),
            },
            [
              h_("VCard", {}, [
                h_("code", {}, [
                  h_(
                    "span",
                    {
                      style: {
                        color: "#fc1e70",
                      },
                    },
                    ["<WBC"]
                  ),
                  h_("span", {}, [`:item="item"`]),
                  // wbcSynItemAttrs,
                  h_(
                    "span",
                    {
                      style: {
                        color: "#fc1e70",
                      },
                    },
                    ">"
                  ),
                  h_(
                    "span",
                    {
                      style: {
                        color: "#fc1e70",
                      },
                    },
                    ["</WBC>"]
                  ),
                ]),
              ]),
              "Where item is given by:",
              h_("JsonViewer", {
                props: {
                  value: ell,
                },
              }),
            ]
          ),
        ];
      },

      toWBC_(el, h_, externalChildren, externalWrapperObj) {
        if (!this.isNonEmpty(el)) {
          return null;
        }

        // console.log('000000000000000000000000000',el)
        // throw new Error('This is an exception message');

        // toWBC_(h_) {

        // if (el instanceof Object) {

        // 	// if (el?.options) { el.options.isValid = this.internalValueIsValid; }

        // 	if (el?.tracker) {
        // 		// console.log('this.item_?.tracker',this.item_)
        // 		el.tracker(this.itemAccessebility);
        // 	}

        // }

        // let el=this.item_
        // let externalChildren =this.children_
        // let externalWrapperObj=this.wrap_

        // let el=this.objLang(el,this.lang)
        // let el=this.objLang(el,this.lang)
        // if(this.transform)
        // if(el?.dive)
        // {
        // 	el = this.generalVal(
        // 		el,
        // 		this.itemAccessebility,
        // 		// this.lg
        // 		this.lang
        // 		// lg
        // 	);
        // }

        let options;
        let comp;
        // let header
        // let hHeader
        // let footer
        // let hFooter
        // let headers
        // let footers
        let globalHeaderVN;
        let globalFooterVN;
        let insideHeadersVN;
        let insideFootersVN;
        // let insideFooters
        let html;
        let rules = [];
        // let customListeners = {};
        // let select=false

        let extChildren;
        let raw0;
        //

        /* toWBC_( h_) {
	
          let el=this.item_
          let externalChildren=this.children_
          let externalWrapperObj=this.wrap_ */

        // PROPAGATION FROM PARENT TO CHILD

        let main;

        if (typeof el == "function") {
          let vNodeToReturn;

          if (el?.length == 0) {
            // alert('function')
            // return h_(el)
            vNodeToReturn = h_(el);
          } else if (el?.length == 1) {
            vNodeToReturn = el(h_);
            // return el(h_)
          } else {
            vNodeToReturn = [
              h_("div", { class: "red--text" }, [
                "Function got more than 1 arguments (Expected 0 or 1 argument)",
                h_("div", {}, [el.toString()]),
              ]),
            ];
          }
          // 	else   if (el?.length == 0) {}

          return vNodeToReturn;
        }

        if (this.isVnode(el)) {
          main = el;
        } else if (["VSpacer", "VDivider"].includes(el)) {
          main = h_(el, {
            ref: "rawHtml",
          });
        } else if (typeof el == "string") {
          let theMediaArr = el.split("/");

          if (
            el.startsWith("/") ||
            el.startsWith("./") ||
            el.startsWith("../")
          ) {
            const mediaContexts = {
              images: require.context(
                "@/public",
                true,
                /\.(png|jpg|jpeg|gif|svg|apng|avif|tiff|webp|bmp|heic)$/
              ),
              audio: require.context(
                "@/public",
                true,
                /\.(mp3|wav|aiff|flac|m4a|ogg|aac|wma|ape|realaudio)$/
              ),
              video: require.context(
                "@/public",
                true,
                /\.(mp4|webm|ogg|mov|avi|mkv|flv|wmv)$/
              ),
              json: require.context("@/public", true, /\.json$/), // JSON files
              pdf: require.context("@/public", true, /\.pdf$/),
              html: require.context("@/public", true, /\.html$/),

              css: require.context("@/public", true, /\.css$/), // CSS files
              py: require.context("@/public", true, /\.py$/), // CSS files
              vue: require.context("@/public", true, /\.vue$/), // CSS files
              js: require.context("@/public", true, /\.(js|ts)$/), // CSS files
              txt: require.context("@/public", true, /\.txt$/), // CSS files
              md: require.context("@/public", true, /\.md$/), // CSS files
              office: require.context(
                "@/public",
                true,
                /\.(xls|doc|docx|xlsx|pptx)$/
              ), // Office files
            };

            function getMedia(type, src) {
              try {
                const context = mediaContexts[type];
                if (!context) {
                  throw new Error(`Media type "${type}" is not supported.`);
                }
                return context(src);
              } catch (error) {
                console.error(`Error loading ${type}: ${src}`, error);
                return ""; // Handle the error appropriately
              }
            }

            let source;
            ///////////////// Audio ////////////////////

            if (theMediaArr[theMediaArr.length - 1].startsWith("__")) {
              let contentType = "text/html";
              if (el.includes(".vue")) {
                source = getMedia("vue", el);
                contentType = "text/x-vue";
              } else if (el.includes(".py")) {
                source = getMedia("py", el);
                contentType = "text/x-python";
                // alert(source);
              } else if (el.includes(".js") || el.includes(".ts")) {
                source = getMedia("js", el);
                contentType = "text/javascsript";
              } else if (el.includes(".md")) {
                source = getMedia("md", el);
                contentType = "text/x-markdown";
              }
              // else
              else if (el.includes(".html") || el.includes(".css")) {
                source = getMedia("html", el);
                contentType = "text/html";
              }
              // else if (el.includes('.py')) {
              //                 contentType = 'text/x-python'
              //               }else
              // else if (el.includes('.py')) {
              //                 contentType = 'text/x-python'
              //               }else

              // alert(el)
              main = h_("VCM", {
                ref: "rawHtml",
                style: {
                  // resize: 'both',
                  // position: 'absolute',
                  top: 0,
                  left: 0,
                  width: "100%",
                  // height: "100%",
                  //   border: 0,
                },

                class: "container",
                props: {
                  value: source,
                  ref: "myCm",
                  // tabSize: 14,
                  // mode: "text/css",
                  // mode: 'text/html',
                  // mode: contentType,
                  // theme: "default",

                  // lineNumbers: true,
                  // line: true,

                  mode: contentType,
                  options: {
                    tabSize: 4,
                    styleActiveLine: true,
                    lineNumbers: true,
                    line: true,
                    foldGutter: true,
                    styleSelectedText: true,
                    // keyMap: "sublime",
                    matchBrackets: true,
                    showCursorWhenSelecting: true,
                    // theme: "monokai",
                    extraKeys: { Ctrl: "autocomplete" },
                    hintOptions: {
                      completeSingle: !false,
                    },
                  },
                },
              });
            } else if (el.includes(".txt")) {
              source = getMedia("txt", el);

              main = h_("WBHtml", {
                ref: "rawHtml",
                title: el,
                props: { html: `${source}` },
              }); // Set the global variable to the response data
            } else if (el.includes(".md")) {
              // alert(el)
              source = getMedia("md", el);

              main = h_(
                "div",
                {
                  class: "markdown-body",
                  directives: [
                    {
                      name: "highlight",
                      value: undefined,
                      modifiers: {},
                    },
                  ],
                  ref: "rawHtml",
                  title: el,
                },
                [
                  (main = h_("WBHtml", {
                    title: el,
                    props: { html: this.MarkdownIt.render(source) },
                  })),
                ]
              ); // Set the global variable to the response data
            } else if (el.includes(".html")) {
              source = getMedia("html", el);

              main = h_("WBHtml", {
                ref: "rawHtml",
                title: el,
                props: { html: source },
              }); // Set the global variable to the response data
            } else if (el.includes(".json")) {
              source = getMedia("json", el);

              main = h_("WBDataViewer", {
                ref: "rawHtml",
                title: el,
                props: { value: source },
              }); // Set the global variable to the response data
            } else if (
              [
                ".mp3",
                ".wav",
                ".aiff",
                ".flac",
                ".m4a",
                ".ogg",
                ".aac",
                ".wma",
                ".ape",
                ".realaudio",
              ].some((e) => theMediaArr[theMediaArr.length - 1].includes(e))
            ) {
              source = getMedia("audio", el);
              main = h_("audio", {
                attrs: {
                  title: source,
                  src: source,
                  controls: true,
                  autoplay: !true,
                },
                class: "container",
                style: {
                  // width: 'auto',
                  height: "revert",
                  width: "revert",
                  // backgroundColor:'red',
                },
                ref: "rawHtml",
              });
            } else if (
              // ['//www.youtube', '//youtube', '//www.youtu.be', '//youtu.be',].some(e => el.includes(e)) ||
              [
                ".apng",
                ".avif",
                ".ico",
                ".gif",
                ".tiff",
                ".webp",
                ".jpeg",
                ".png",
                ".webp",
                ".jpg",
                ".jpeg",
              ].some((e) => theMediaArr[theMediaArr.length - 1].includes(e))
            ) {
              source = getMedia("images", el);

              // source = require('@public/jpeg1.jpeg')
              // source = '/jpeg1.jpeg'

              // alert(source)
              // console.log('source :>> ',source,typeof source)

              // alert(source);
              let imgObj = {
                attrs: {
                  title: source,
                  src: source,
                },
                class: "container",
                // style:{width:'auto'},
                // ref: 'rawHtml',
              };

              if (source?.includes?.(".ico")) {
                imgObj.attrs.alt = "Icon";
              }

              main = h_("img", imgObj);
            } else if (
              [
                ".mp4",
                ".avi",
                ".mov",
                ".wmv",
                ".avchd",
                ".flv",
                ".f4v",
                ".swf",
                ".mkv",
                ".webm",
                ".html5",
                ".mpeg-2",
              ].some((e) => theMediaArr[theMediaArr.length - 1].includes(e))
            ) {
              source = getMedia("video", el);
              main = h_("video", {
                attrs: {
                  title: source,
                  src: source,
                  controls: true,
                  frameborder: "0",
                  allow: "autoplay; encrypted-media",
                  allowfullscreen: true,
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                  referrerpolicy: "strict-origin-when-cross-origin",
                },
                class: "container",
                // style:{width:'auto'},
                ref: "rawHtml",
              });
            }
            ////////////////////////////////////////
            // else if (
            //   [".pdf", ".Pdf"].some((e) =>
            //     theMediaArr[theMediaArr.length - 1].includes(e)
            //   )
            // ) {
            //   alert("pdffffffff");
            //   source = getMedia("pdf", el);
            //   // alert(source)

            //   main = h_("pdf", {
            //     props: {
            //       // src: 'https://pdfobject.com/pdf/sample.pdf',
            //       // src: require(el),
            //       // src: require("./pdf0.pdf"),
            //       // src: "./pdf0.pdf",
            //       // src: require("@public/cv0.pdf"),
            //       src: source,
            //       // src: "@/public/cv.pdf",
            //       // / cv0.pdf',
            //       // src: 'cv0.pdf',
            //     },
            //     // attrs:{src: '@/public/jpeg0.jpeg'},
            //     class: "container",
            //     style: {
            //       width: "auto",
            //       height: "800px",
            //       backgroundColor: "yellow",
            //     },
            //     ref: "rawHtml",
            //   });
            // }

            ////
            // else /* if (['/javascript', '/js', '/css', '/java', '/typescript', '/ts', '/cpp', '/xml', '/html','/php', '/bash', '/less', '/nginx', '/powershell', '/python', '/scss', '/shell', '/sql', '/yaml', '/ini'].some(e => contentType.includes(e))) */ {

            //   // console.log('el0 :>> ', el, source);

            //   source = getMedia('vue', el)

            //   main = h_('div', el+ ' is a non supported format')
            //   // main = h_('WBHtml', { props: { html: source } })

            // }

            ///////////////// office ////////////////////
            // else if (
            //   [".docx", ".Docx", ".doc", ".Doc"].some((e) =>
            //     theMediaArr[theMediaArr.length - 1].includes(e)
            //   )
            // ) {
            //   source = getMedia("office", el);
            //   alert("aaaa" + source);
            //   main = h_("VueOfficeDocx", {
            //     props: {
            //       // src: "@public/doc0.doc",
            //       src: source,
            //     },
            //     class: "container",
            //     style: {
            //       // position: 'absolute',
            //       top: 0,
            //       left: 0,
            //       // height: '100%',
            //       // width: '100%',
            //       // border: 0,
            //     },
            //     ref: "rawHtml",
            //   });
            // }
            else if (
              [
                ".xls",
                ".Xls",
                ".pdf",
                ".Pdf",
                ".doc",
                ".Doc",
                ".xlsx",
                "Xlsx",
              ].some((e) => theMediaArr[theMediaArr.length - 1].includes(e))
            ) {
              // source = getMedia("office", el);
              // alert(el);

              // this.feetchFile();

              // fetch("@/public/pdf0.pdf").then((response) => response.text());

              // el = "/jp0.jpg";
              // el = "/pdf0.pdf";
              // el = "/json0.json";
              // el = "/doc0.doc";
              // el = "/a.xls";
              // el = "/html0.html";
              // el = "/html1.html";

              // el = "/py0.py";

              // el = "/md0.md";
              // el = "/__md0.md";

              // el = "/__py0.py";
              // el = "/docx0.docx";
              // el = "/aaaa.xlsx";

              if (!this.fileContent) {
                this.loadLocalFile(h_, el.replace("./", "/wbc-ui2-files/"));
              }
              main = this.fileContent;
              // main = h_("li", this.fileContent);

              // main = h_("iframe", {
              //   attrs: {
              //     src: this.fileContent,
              //   },
              //   class: "container white",
              //   style: {
              //     // position: 'absolute',
              //     top: 0,
              //     left: 0,
              //     height: "100vh",
              //     width: "100vh",
              //     // border: 0,
              //   },
              //   ref: "rawHtml",
              // });
            }

            ///////////////// Videos ////////////////////
            //  source = getMedia('video', el)
            // main =  h_('video', {
            //   attrs: {
            //     title: source,
            //     src: source,
            //     controls: true,
            //     frameborder: "0",
            //     allow: "autoplay; encrypted-media",
            //     allowfullscreen: true,
            //     allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            //     referrerpolicy: "strict-origin-when-cross-origin"
            //   },
            //   class: 'container',
            //   // style:{width:'auto'},
            //   ref: 'rawHtml',
            // })
          } else if (el.startsWith("https://") || el?.startsWith?.("http://")) {
            if (
              [".docx", ".Docx"].some((e) =>
                theMediaArr[theMediaArr.length - 1].includes(e)
              )
            ) {
              main = h_("VueOfficeDocx", {
                props: {
                  src: el,
                },
                class: "container",
                style: {
                  // position: 'absolute',
                  top: 0,
                  left: 0,
                  // height: '100%',
                  // width: '100%',
                  // border: 0,
                },
                ref: "rawHtml",
              });
            } else if (
              [".xlsx", ".Xlsx"].some((e) =>
                theMediaArr[theMediaArr.length - 1].includes(e)
              )
            ) {
              main = h_("VueOfficeExcel", {
                props: {
                  src: el,
                },
                class: "container white",
                style: {
                  // position: 'absolute',
                  top: 0,
                  left: 0,
                  height: "100vh",
                  width: "100vh",
                  // border: 0,
                },
                ref: "rawHtml",
              });
            } else if (
              [".doc", ".xls", "md", "txt", "pptx", ".xls"].some((e) =>
                theMediaArr[theMediaArr.length - 1].includes(e)
              )
            ) {
              main = h_("VueDocPreview", {
                props: {
                  url: el,
                  type: "office",
                  // code: "css",
                  // height: "100%",
                },
                class: "container",
                style: {
                  // resize: 'both',
                  // position: 'absolute',
                  top: 0,
                  left: 0,
                  width: "100vh",
                  height: "100vh",
                  //   border: 0,
                },
                ref: "rawHtml",
              });
            } else if (
              [
                ".mp3",
                ".wav",
                ".aiff",
                ".flac",
                ".m4a",
                ".ogg",
                ".aac",
                ".wma",
                ".ape",
                ".realaudio",
              ].some((e) => theMediaArr[theMediaArr.length - 1].includes(e))
            ) {
              main = h_("audio", {
                attrs: {
                  title: el,
                  src: el,
                  controls: true,
                  autoplay: !true,
                },
                class: "container",
                style: {
                  // width: 'auto',
                  height: "revert",
                  width: "revert",
                  // backgroundColor:'red',
                },
                ref: "rawHtml",
              });
            } else if (
              [
                ".apng",
                ".avif",
                ".ico",
                ".gif",
                ".tiff",
                ".webp",
                ".jpeg",
                ".png",
                ".webp",
                ".jpg",
                ".jpeg",
              ].some((e) => theMediaArr[theMediaArr.length - 1].includes(e))
            ) {
              let imgObj = {
                attrs: {
                  title: el,
                  src: el,
                },
                class: "container",
                // style:{width:'auto'},
                ref: "rawHtml",
              };

              if (el.includes(".ico")) {
                imgObj.attrs.alt = "Icon";
              }

              main = h_("img", imgObj);
            } else if (
              [
                ".mp4",
                ".avi",
                ".mov",
                ".wmv",
                ".avchd",
                ".flv",
                ".f4v",
                ".swf",
                ".mkv",
                ".webm",
                ".html5",
                ".mpeg-2",
              ].some((e) => theMediaArr[theMediaArr.length - 1].includes(e))
            ) {
              main = h_("video", {
                attrs: {
                  title: el,
                  src: el,
                  controls: true,
                  frameborder: "0",
                  allow: "autoplay; encrypted-media",
                  allowfullscreen: true,
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                  referrerpolicy: "strict-origin-when-cross-origin",
                },
                class: "container",
                // style:{width:'auto'},
                ref: "rawHtml",
              });
            } else if (
              [
                "//www.youtube",
                "//youtube",
                "//www.youtu.be",
                "//youtu.be",
              ].some((e) => el.includes(e)) &&
              !el.includes("embed")
            ) {
              // alert('youtube')
              // alert(el.replace('.com/', '.com/embed/').replace('.be/', 'be.com/embed/'))
              main = h_("iframe", {
                class: "video-stream html5-main-video",
                attrs: {
                  title: el,
                  src: el
                    .replace(".com/", ".com/embed/")
                    .replace(".be/", "be.com/embed/"),
                  controls: true,
                  frameborder: "0",
                  allow: "autoplay; encrypted-media",
                  allowfullscreen: true,
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                  referrerpolicy: "strict-origin-when-cross-origin",
                },
                class: "container",
                // style:{width:'auto'},
                ref: "rawHtml",
              });
            } else {
              if (!this.mediaData) {
                // this.mediaData='aaaaaaaaaaaaaaaaaaaaa'
                // global.j=this.mediaData

                if (!this.fileContent) {
                  this.loadLocalFile(h_, el);
                }
                main = this.fileContent;

                // this.getUrlResponse(el)
                //   .then((response) => {
                //     const contentType = response.headers.get("Content-Type");
                //     console.log(
                //       "Response data:,el ",
                //       el,
                //       response,
                //       response?.data,
                //       contentType
                //     );
                //     if (contentType.includes("application/json")) {
                //       // alert('json')
                //       this.mediaData = h_("WBDataViewer", {
                //         title: el,
                //         props: { value: response?.data || response },
                //       }); // Set the global variable to the response data
                //     } else if (contentType.includes("image/")) {
                //       this.mediaData = h_("img", {
                //         attrs: {
                //           src: el,
                //         },
                //         class: "container",
                //         style: {
                //           /* width: 'auto' */
                //         },
                //         ref: "rawHtml",
                //       });
                //     } else if (contentType.includes("application/doc")) {
                //       // alert('docx' + el)
                //       this.mediaData = h_("VueDocPreview", {
                //         props: {
                //           value: el,
                //         },
                //         class: "container",
                //         style: {
                //           // resize: 'both',
                //           // // position: 'absolute',
                //           // top: 0,
                //           // left: 0,
                //           // height: '100%',
                //           // width: '100%',
                //           // border: 0,
                //         },
                //         ref: "rawHtml",
                //       });
                //     } else if (contentType.includes("application/excel")) {
                //       // alert('docx' + el)
                //       this.mediaData = h_("VueOfficeExcel", {
                //         props: {
                //           src: el,
                //         },
                //         class: "container",
                //         style: {
                //           // resize: 'both',
                //           // // position: 'absolute',
                //           // top: 0,
                //           // left: 0,
                //           // height: '100%',
                //           // width: '100%',
                //           // border: 0,
                //         },
                //         ref: "rawHtml",
                //       });
                //     } else if (contentType.includes("application/pdf")) {
                //       // alert('pdf' + el)
                //       // else if (contentType.includes('application/pdf')) {
                //       this.mediaData = h_("pdf", {
                //         props: {
                //           src: el,
                //         },
                //         class: "container",
                //         style: {
                //           // width: 'auto',
                //           // height: 'revert',
                //           // backgroundColor:'red',
                //         },
                //         ref: "rawHtml",
                //       });
                //       // }
                //       // this.mediaData = h_('VueOfficePdf', {
                //       //       props: {
                //       //         src: el,
                //       //       },
                //       //       class: 'container',
                //       //       style: {
                //       //         // resize: 'both',
                //       //         // // position: 'absolute',
                //       //         // top: 0,
                //       //         // left: 0,
                //       //         // height: '100%',
                //       //         // width: '100%',
                //       //         // border: 0,
                //       //       },
                //       //       ref: 'rawHtml',
                //       //     })
                //     } else if (
                //       ["/html"].some((e) => contentType.includes(e)) &&
                //       el.includes("html") &&
                //       !el.includes("?src")
                //     ) {
                //       this.mediaData = h_("WBHtml", {
                //         ref: "rawHtml",
                //         props: { html: response.data },
                //       });
                //       // Set the global variable to the response data
                //     } /* if (['/javascript', '/js', '/css', '/java', '/typescript', '/ts', '/cpp', '/xml', '/html','/php', '/bash', '/less', '/nginx', '/powershell', '/python', '/scss', '/shell', '/sql', '/yaml', '/ini'].some(e => contentType.includes(e))) */ else {
                //       // alert('code')
                //       this.mediaData = h_("VCM", {
                //         style: {
                //           // resize: 'both',
                //           // position: 'absolute',
                //           top: 0,
                //           left: 0,
                //           width: "100%",
                //           height: "100%",
                //           //   border: 0,
                //         },

                //         class: "container",
                //         props: {
                //           value: response?.data || response,
                //           ref: "myCm",
                //           tabSize: 14,
                //           // mode: "text/css",
                //           mode: contentType,
                //           // mode: 'text/html',
                //           theme: "default",

                //           // lineNumbers: true,
                //           // line: true,

                //           // options: {
                //           //   lineWrapping: true, // Enable line wrapping
                //           //   viewportMargin: Infinity,
                //           //   //Codemirror options
                //           // }

                //           options: {
                //             // tabSize: 4,
                //             styleActiveLine: true,
                //             lineNumbers: true,
                //             line: true,
                //             foldGutter: true,
                //             styleSelectedText: true,
                //             // keyMap: "sublime",
                //             matchBrackets: true,
                //             showCursorWhenSelecting: true,
                //             // theme: "monokai",
                //             extraKeys: { Ctrl: "autocomplete" },
                //             hintOptions: {
                //               completeSingle: !false,
                //             },
                //           },
                //         },
                //         ref: "rawHtml",
                //       });

                //       // this.mediaData = h_('WBHtml', { props: { html: response.data } })
                //     }

                //     // else {
                //     //   this.mediaData = h_('WBHtml', { props: { html: response.data } })

                //     //   // this.mediaData = h_('iframe', {
                //     //   //   attrs: {
                //     //   //     title: el,
                //     //   //     src: el,
                //     //   //     controls: true,
                //     //   //     frameborder: "0",
                //     //   //     allow: "autoplay; encrypted-media",
                //     //   //     allowfullscreen: true,
                //     //   //     allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                //     //   //     referrerpolicy: "strict-origin-when-cross-origin"
                //     //   //   },
                //     //   //   class: 'container',
                //     //   //   style: {
                //     //   //     resize: 'both',
                //     //   //     //  position: 'absolute',
                //     //   //     top: 0,
                //     //   //     left: 0,
                //     //   //     height: '100%',
                //     //   //     width: '100%',
                //     //   //     border: 0,
                //     //   //   },
                //     //   //   ref: 'rawHtml',
                //     //   // })
                //     // }

                //     // console.log('contentTypeeeeeeeeee :>> ', contentType);
                //   })
                //   .catch((error) => {
                //     this.mediaData = h_("iframe", {
                //       attrs: {
                //         src: el,
                //         controls: true,
                //         frameborder: "0",
                //         allow: "autoplay; encrypted-media",
                //         allowfullscreen: true,
                //         allow:
                //           "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                //         referrerpolicy: "strict-origin-when-cross-origin",
                //       },
                //       class: "container white",
                //       style: {
                //         resize: "both",
                //         // position: 'absolute',
                //         top: 0,
                //         left: 0,
                //         height: "100%",
                //         width: "100%",
                //         border: 0,
                //       },
                //       ref: "rawHtml",
                //     });
                //     console.error("Error:", error);
                //     // this.mediaData = el//h_('li',[el]); // Set the global variable to the error if it occurs
                //   });

                // main = this.mediaData
              }

              // else {

              // 	// this.getUrlResponse(el).then(response => {
              // 	// 	main = response; // Use the response data here
              // 	// }).catch(error => {
              // 	// 	console.error('Error:', error); // Handle any potential errors
              // 	// });

              // 	// Call the method and handle the response
              // 	// else {

              // 	// }

              // }

              // main = this.fileContent; // Set the global variable to the response data
            }

            // if (this.mediaData){
            // < iframe width = "1251" height = "834" src = "https://www.youtube.com/embed/U6uUNRt_grk?list=RDU6uUNRt_grk" title = "Adam Sarra Al Hani - أدم ساره الهاني أكذب عليك" frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy = "strict-origin-when-cross-origin" allowfullscreen > </>

            // <iframe width="560" height = "315" src = "https://www.youtube.com/embed/U6uUNRt_grk?list=RDU6uUNRt_grk&start_radio=1" frameborder = "0" allow = "autoplay; encrypted-media" allowfullscreen > </iframe>

            // }
            // ];
          } else if (
            typeof el === "string" &&
            el.startsWith("<") &&
            el.endsWith(">")
          ) {
            main = h_(el.replace("~", "").replace("<", "").replace(">", ""), {
              ref: "rawHtml",
            });
          } else {
            main = h_("WBHtml", {
              ref: "rawHtml",

              // key: `wbhtml-key-${this.computedKey('el')}-${el.length}`,
              props: {
                html: el,
              },
            });
          }
        } else if (typeof el == "boolean") {
          // main = h_('input', {
          // 	ref: 'rawHtml',
          // 	attrs: { type: 'checkbox', checked: el },
          // 	keyy: `bool-${this.computedKey(el)}-${Number(el)}`,
          // 	props: {
          // 		value: true,
          // 		label: 'Boolean',
          // 	},
          // 	on: {
          // 		change: (event) => {
          // 			// alert('aaaaaaaaaaaaa')
          // 			// console.log(event);
          // 			el = !el;
          // 		},
          // 	},
          // });
          main = h_("VCheckbox", {
            ref: "rawHtml",
            // attrs: { type: 'checkbox', checked: el },
            // key: `bool-${this.computedKey(el)}-${Number(el)}`,
            props: {
              value: el,
              // label: 'Boolean',
            },
            on: {
              change: (v) => {
                // alert('aaaaaaaaaaaaa' + el)
                console.log(v);
                el = !v;
                // el = event.target.value == 'on';
              },
            },
          });
        } else if (typeof el == "number") {
          main = h_(
            "span",
            {
              ref: "rawHtml" /* ,key: `int-${this.computedKey(el)}-${this.key_}` */,
            },
            [el]
          );
        } else if (Array.isArray(el)) {
          // console.log('elmmmmmmmmmmmm :>> ', el);

          // alert('11111111111')

          // if(typeof el[0]?.comp=='string' and el[0]?.comp.includes('~') ){
          // let v0
          //
          // console.log('aaaaaaaaaaaaaaaaaaa',el,el?.[0])
          /* if(el.length==1){
            main=h_('div',{class:'blue pa-15'},['level',this.toWBC_(el[0], h_)])
          }
          else if(Array.isArray(el?.[0])){
            console.log('bbbbbbbbbbbbbbbbbbbbb',el,el?.[0])
            // main=[h_('li',{class:'black'},[this.toWBC_(el[0], h_)]),this.toWBC_(el.length>1?el.slice(1):null,h_)]
            main=this.toWBC_([h_('li',{class:'black'},[this.toWBC_(el[0], h_)]),this.toWBC_(el.length>1?el.slice(1):null,h_)],h_)
            // main=h_('li',['main main content to adddddddddddddddd'])
          }
          else   */
          // console.log('---------------------',el)

          if (
            typeof el?.[0] === "string" &&
            el?.[0].startsWith("<") &&
            el?.[0].endsWith(">")
          ) {
            // console.log('---------------------0000000',el)
            let theTag;
            let theOptions;
            let theLink;

            let theTagSlip = el?.[0]
              .replace("<", "")
              .replace(">", "")
              .split("|");
            // console.log('---------------------',theTagSlip)
            // let theTag=el?.[0]
            theTag = theTagSlip?.[0].replace("<", "").replace(">", "");

            theOptions = this.strToObj(theTagSlip?.[1]);
            // console.log('---------------------111111',theOptions)
            if (!this.isNonEmpty(theOptions)) {
              theOptions = {};
            } else if (typeof theOptions == "string") {
              theOptions = { class: theOptions };
            }

            // let theTag=h_(el?.[0].replace('~','').replace('<','').replace('>',''))
            let e = {
              comp: theTag,
              options: theOptions,
            };

            // main=h_('a',{},[main])

            if (theTagSlip?.[2]) {
              e.options.to = this.strToObj(theTagSlip[2]);
            }

            // theTag='span'
            if (el?.[0]?.includes("~")) {
              main = h_(
                theTag.replace("~", ""),
                {
                  ...(theOptions || {}),
                  ref: "rawHtml",
                },
                [
                  // h_('WBC',{/* keyy: `wbc-key-nested0-${this.computedKey(el?.options?.key)}`, */props:{item:el.length>1?el.slice(1):null}})

                  this.toWBC_(el.length > 1 ? el.slice(1) : null, h_),
                ]
              );
            } else {
              /* let arrr = [];
              for (let k = 1; k < el.length; k++) {
                arrr.push(this.toWBC_(e, h_, el[k]) )
                
              }

              main =arrr */
              main = el.slice(1).map((item, i) => {
                // console.log('itemmmmmmmmmmmmm :>> ', item, h_('WBC', { props: {item:e} }));
                // e.footer=item
                // return h_('WBC',{key: `wbc-key-nested0-${this.computedKey(el?.options?.key)}`,props:{item:e,children:item}})
                return this.toWBC_(e, h_, item);
              });
            }

            // if(theTagSlip?.[2]){
            // 	// main=h_('a',{},[main])

            // 	main=h_('WBLink', {

            // 		props: {
            // 			to: this.strToObj(theTagSlip[2]),
            // 			html: this.toWBC_(main,h_),
            // 			style_: {},
            // 			attrs: {}
            // 		}
            // 	})

            // }

            // main=this.toWBC_(el[0], h_,el.length>1?el.slice(1):null)
          } else if (
            (typeof el?.[0]?.comp == "string" &&
              (el?.[0]?.comp?.includes("~") ||
                el?.[0]?.comp?.includes("*") ||
                (el?.[0]?.comp?.startsWith("<") &&
                  el?.[0]?.comp?.endsWith(">")))) ||
            (["nested", "herit", "adjacent"].includes(
              el?.[0]?.options?.disposition
            ) &&
              el?.[0]?.options?.hide)
          ) {
            // alert('9999999999999')

            let newArr = [];
            // let el0=el?.[0]
            let el0 = this.clone(el?.[0]);
            // el0.comp=el0.comp.replace('<','').replace('>','')

            let heritItem;

            if (
              el?.[0]?.options?.disposition == "nested" ||
              el?.[0]?.comp?.includes("~")
            ) {
              let theTag = el[0].comp
                .replace("<", "")
                .replace(">", "")
                .replace("~", "");
              //  let theTag = 'li'
              let theOptions = el[0]?.options || {};
              // el[0].comp=el[0].comp.replace('<','').replace('>','')
              // el[0].comp=el[0].comp.replace('~','')

              // v0=this.toWBC_(el[0], h_)
              //  newArr=this.toWBC_(el[0], h_,el.length>1?el.slice(1):null)
              //  newArr=h_('WBC',{keyy: `wbc-key-arr-${this.computedKey(el?.options?.key)}`,props:{item:el[0],children:el.length>1?el.slice(1):null}})

              newArr = h_(theTag, { ...(theOptions || {}) }, [
                // h_('WBC',{/* keyy: `wbc-key-nested0-${this.computedKey(el?.options?.key)}`, */props:{item:el.length>1?el.slice(1):null}})
                this.toWBC_(el?.[0]?.header, h_),
                this.toWBC_(el?.[0]?.options?.headers, h_),
                this.toWBC_(el?.[0]?.options?.html, h_),

                this.toWBC_(el.length > 1 ? el.slice(1) : null, h_),

                this.toWBC_(el?.[0]?.footer, h_),
                this.toWBC_(el?.[0]?.options?.footers, h_),
              ]);

              // if(el.length>1){ v0.children=[...(v0?.children||[]),this.toWBC_(el.slice(1), h_)]}
            } else if (
              el?.[0]?.options?.disposition == "herit" ||
              el0?.comp?.includes("*")
            ) {
              // alert('hhhhhhhhhhhhhhhhhhhh'+el?.[0]?.comp)
              el.slice(1).forEach((item, i) => {
                // el0.children=item

                // alert('**************'+item)
                if (this.isPlainObject(item)) {
                  //  let e= {
                  // 	...el0,
                  // 	...(item||{}),
                  // 	dive:true,
                  // 	// comp:el0.comp.replace('*','')
                  // 	options:this.mergeObjects(el0?.options||{},item?.options||{}),
                  // 	// },
                  //  }

                  let e = this.mergeObjects(el0, item);
                  // newArr.push(this.toWBC_(e,h_))
                  newArr.push(
                    h_("WBC", {
                      // key: `wbc-key-arr-${i}-${this.computedKey(el?.options?.key)}`,
                      props: { item: e },
                    })
                  );
                } else {
                  let e0 = {
                    ...el0,
                    // dive:true,
                    // comp:el0.comp.replace('*','')
                    options: {
                      ...(el0?.options || {}),
                      // footers:item,
                    },
                  };

                  // let e0 = { ...el0 };
                  e0.options.html = [e0?.options?.html, item];
                  ("el");
                  // e0.options.html = item;
                  // e0.options.html = [e0?.options?.html,item];
                  e0.comp = e0.comp
                    .replace("*", "")
                    .replace("<", "")
                    .replace(">", "");

                  // heritItem=this.toWBC_(e0,h_)
                  // heritItem=this.toWBC_(el0,h_,item)

                  newArr.push(
                    h_("WBC", {
                      // keyy: `wbc-key-arr-${this.computedKey(el?.options?.key)}`,
                      props: { item: e0 },
                    })
                  );
                  // newArr.push(this.toWBC_(e0,h_))
                }
              });
            } else if (
              el?.[0]?.options?.disposition == "adjacent" ||
              (el?.[0]?.comp?.startsWith("<") && el?.[0]?.comp?.endsWith(">"))
            ) {
              newArr = el.slice(1).map((item, i) => {
                // return h_('WBC', {
                // keyy: `wbc-key-arr-${i}-${this.computedKey( el?.options?.key )}`,
                // 	props: { item: el0, children: item },
                // });
                return this.toWBC_(el0, h_, item);
              });
            }
            // else{
            // 	el0.comp=el0.comp.replace('~','')
            // 	newArr=this.toWBC_(el0,h_,el.slice(1))
            // }
            main = newArr;
            // main=this.toWBC_(newArr,h_)
          }

          // }
          else {
            let v0 = h_("WBC", {
              ref: "rawHtml",
              // key: `wbc-child-${this.computedKey(el?.options?.key)}`,
              props: { item: el[0] },
            });
            // let rest = h_('WBC', {
            // 	key: `wbc-ext-child-${this.computedKey(el?.options?.key)}`,
            // 	props: { item: el.slice(1) }
            // })
            // main=[v0,rest]

            // let v0=el[0]
            // main = [v0, h_('WBC', { props: { item:el.length > 0 ? el.slice(1) : null } })];

            main = [v0, this.toWBC_(el.length > 0 ? el.slice(1) : null, h_)];
          }
        } else {
          extChildren = h_("WBC", {
            /* key: `wbc-ext-child-${this.computedKey(el?.options?.key)}`, */ props:
              { item: externalChildren },
          });
          // extChildren =this.toWBC_(externalChildren, h_)

          options = this.options(el);
          comp = this.comp(el);

          // header=this.globalHeaderVN(el,h_)
          // footer=this.globalFooterVN(el,h_)

          globalHeaderVN = this.globalHeaderVN(el, h_);
          // console.log('globalHeaderVN :>> ',el, globalHeaderVN);
          // globalHeaderVN = this.toWBC_(header, h_)
          globalFooterVN = this.globalFooterVN(el, h_);

          // globalFooterVN = this.toWBC_(footer, h_)

          // headers=this.insideHeadersVN(el,h_)
          // footers=this.footers(el)

          insideHeadersVN = this.insideHeadersVN(el, h_);
          insideFootersVN = this.insideFootersVN(el, h_);
          // headers =this.toWBC_(this.headers(el), h_)

          // insideFooters =h_('WBC',{key: `wbc-key-footers-${this.computedKey(el?.options?.key)}`,props:{item:footers}})
          // footers =this.toWBC_(this.footers(el), h_)

          // footers =h_('WBC',{keyy: `wbc-key-footers-${this.computedKey(el?.options?.key)}`,props:{item:options?.footers}})
          // // footers =this.toWBC_(options?.footers, h_)

          //#############//

          let InputLikeComponent = [
            "input",
            "checbox",
            "radio",
            "select",
            "textarea",
            "VTextField",
            "VCheckbox",
            "VTextarea",
            "VSelect",
            "VRadio",
            "VSlider",
            "VRangeSlider",
            "VSwitch",
            "VAutocomplete",
            "VDatePicker",
            "VColorPicker",
            "VMenu",
            "VRadioGroup",
            "vTimePicker",
          ];

          if (InputLikeComponent.includes(comp)) {
            // alert('inpuuuuuuuuuuuuuuuuuuuut')
            ////////////////////V-Model alernative: initialisons events ///////////////////////

            // if (!options?.on) {
            // 	customListeners = {};
            // }

            // el?.options?.val=this.$refs?.[el?.options?.ref]?.lazyValue
            // if(options?.attrs){options.attrs.value=this.$refs?.[el?.options?.ref]?.lazyValue;}
            // if(options?.props?.value){options.props.value=this.$refs?.[el?.options?.ref]?.lazyValue;}
            // if(options?.props?.value){options.props.value=this.$refs?.[el?.options?.ref]?.lazyValue;}

            // if (Array.isArray(options?.rules) /* && rules !== null */) {
            // 	alert('rules')

            // 							rules = options?.rules.map(key => {

            // 								if (this.validators?.[key]) {
            // 									return v => this.validators[key](v, { lg: this.lang })
            // 								}
            // 								else {

            // 									return key
            // 								}
            // 							})
            // 						}

            // 						else if (typeof options?.rules == 'object' ) {

            // 							rules = Object.entries(options.rules).map(([key, val]) => {
            // 								if (this.validators?.[key] && typeof val == 'function') {
            // 									return val
            // 								}
            // 								else if (this.validators?.[key] && typeof val == 'object') {
            // 									return v => this.validators[key](v, val)
            // 								}
            // 								else {
            // 									return v => this.validators[key](v, { lg: this.lang, message: val })

            // 								}
            // 							})
            // 						}

            // let updateInputValue=(event)=> {
            // 	if (typeof event == 'object' && event?.target) {
            // 		// alert('changed0')
            // 		if (event?.target?.type == 'checkbox') {

            // 			// this.item_.options['val'] = event?.target?.checked || false;
            // 			options.attrs['checked'] = event?.target?.checked || false;
            // 		}
            // 		options['val'] = event?.target?.value || event?.target?.checked || false;

            // 	}
            // 	else {
            // 		if (el?.hComp == 'VCheckbox') {
            // 			options['val'] = !options?.['val']||false;
            // 		}
            // 		else {
            // 			console.log(22222222222222222, event,this)
            // 			options['val'] = event || '';
            // 			// options.props.value=event
            // 			// options.isValid = this.$refs.rawHtml.valid;

            // 		}
            // 	}
            // 	if (options?.props){
            // 		options.props.value=options['val']
            // 	}
            // 	if (options?.attrs){
            // 		options.attrs.value=options['val']
            // 	}

            // }
            // options['val'] =this.$refs[el?.options?.ref]?.lazyValue||'tttttttt';

            this.itemListeners.input = (v) => {
              // alert('change00000 event occurred');
              this.internalValue = v;

              // this.internalValueIsValid = this?.$refs[this.refName]?.valid

              this.internalValueIsValid = this?.$refs[this.refName]?.validate(
                true,
                v
              );
              // console.log('change00000 event occurred', this?.$refs[this.refName], v, this.internalValueIsValid);

              // this.$emit('input', v);
            };
            // this.itemListeners.update =(v)=>{
            // 	// alert('updated')
            // 	this.internalValue= v
            // 	// this.$emit('update', v);
            // };
            // this.itemListeners.change =(v)=>{
            // 	// alert('chanf=ged')
            // 	this.internalValue= v
            // 	// this.$emit('change', v);
            // };

            // options.attrs={}

            // if(options?.props?.value){options.props.value=this.internalValue}
            // options.on.input = options?.on?.input || this.updateInputValue;
            // options.on.change = options?.on?.change || this.updateInputValue;
            // options.on.update = options?.on?.update || this.updateInputValue;
          }
          // if (InputLikeComponent.includes(el.hComp)) {
          // 	////////////////////V-Model alernative: initialisons events ///////////////////////

          /////////////////////////////////////////

          ////////////////////////////////////////////////////
          /////////////maniputation of main el ////////////////
          ////////////////////////////////////////////////////

          // let rules = options?.props?.rules

          // options.props.rules=rules

          /* if (!(comp||el.hComp)) {
            return null;
          }
          else */

          if (el?.protected) {
            let protectedContent = {
              comp: "VAlert",
              options: {
                // class:'red',
                html: `{
								en: "Forbidden access",
								fr:'Accès interdit',
								ar:'الوصول ممنوع'
								}`,
                props: {
                  type: "error",
                  variant: "outlined",
                  // width:'auto'
                },
              },
            };

            if (el?.protected === true) {
              main = h("WBC", {
                /* keyy: `wbc-key-header-${this.computedKey(el?.options?.key)}`, */ props:
                  { item: protectedContent },
              });
            } else if (el?.protected) {
              // protectedContent.options.html=el?.protected
              protectedContent = el?.protected;
            }

            main = h("WBC", {
              ref: "protectHtml",
              key: `wbc-key-header-${this.computedKey(el?.options?.key)}`,
              props: { item: protectedContent },
            });
          } else if (options?.hide || this.hide) {
            main = null;
          } else if (
            options?.load === true ||
            (typeof options?.load == "object" && options?.load?.active === true)
          ) {
            let loadDefaultComp = {
              comp: "VProgressCircular",
              options: {
                keyy: `load-${this.computedKey(el?.options?.key)}`,
                hide: false,
                // wrap:'VDialog',
                props: {
                  size: "60",
                  width: "3",
                  color: this.rColor /* 'yellow' */,
                  indeterminate: true,
                },
                html: "{en:'loading...',fr:'chargement...',ar:'تحميل...'}",
                ...(typeof options?.load?.options == "object"
                  ? options?.load?.options
                  : {}),
              },
            };
            // }

            // main = h_(loadDefaultComp.comp, {
            // 	...options,
            // 	...loadDefaultComp.options,
            // });

            // main = h_('VDialog',{class:'pa-15 ma-15',props:{value:true}},[h_('WBC',{props:{item:loadDefaultComp}})]);
            main = h_("WBC", {
              ref: "rawHtml",
              props: {
                item: [
                  "<~VRow|pa-2 ma-2 justify-center container>",
                  loadDefaultComp,
                ],
              },
            });
          }
          ////////////////
          else if (
            Object.keys(el).length > 0 &&
            languages.some((e) => Object.keys(el).includes(e))
          ) {
            main = h_("WBHtml", {
              ref: "rawHtml",

              // key: `wbhtml-key-${this.computedKey('el')}-${el.length}`,
              props: {
                html: el,
              },
            });
          } else if (Object.keys(el).length > 0 && !el?.comp) {
            // el=this.objLang(el,this.lang)

            // console.log('lllllllllllllll44444444444', el, comp);
            // this.raise(el,'a')

            let theHtml = [];
            let newObj1 = {
              comp: el?.options?.comp || "div",
              options: { ...(el?.options || {}) /* ,disposition:'nested' */ },
            };

            // let theComp='div'
            let wrapObj = el?.options?.wrap;

            // if (el?.options?.wrap instanceof Object && this.isNonEmpty(el?.options?.wrap)) {
            // 	wrapObj = el?.options?.wrap
            // 	// newObj1.comp = el?.options?.wrap?.comp
            // 	newObj1 = {...el?.options?.wrap}||{}
            // 	newObj1.options.disposition = 'nested'
            // 	// newObj1?.options.disposition??='nested'
            // 	// console.log('88888888888888',newObj1)

            // 	theComp = el?.options?.wrap.comp
            // 	theOptions = { ...el?.options, ...(el?.options?.wrap?.options||{}) }
            // }

            // newObj1.comp = '~div';
            // newObj1.options = el?.options || {};

            let keyToAvoid = [
              "comp",
              "output",
              "props",
              "options",
              "hOptions",
              "switch",
              "footer",
              "footers",
              "header",
              "headers",
              "hFooter",
              "header",
              "hHeader",
              "asChild",
              "wrap",
              "to",
              "disp",
              "mode",
              "prod",
              "key",
              "fStyle",
              "dive",
              "tbDive",
              "watch",
              "forward",
            ];

            Object.keys(el)
              .sort()
              .forEach((key) => {
                // theHtml[key] = el[key]
                if (!keyToAvoid.includes(key)) {
                  theHtml.push(el[key]);
                  // let el_i = this.toWBC_(el[key], h_)
                  // console.log('el_i :>> ', el_i);
                  // theHtml.push(...Array.isArray(el_i)?el_i:[el_i]);
                }
                // else {
                // 	newObj1[key] = el[key];
                // }
              });
            // if(!newObj1?.options?.html){
            // newObj1.options.html=theHtml
            // }
            // else if(Array.isArray(newObj1?.options?.html)){
            // 	newObj1.options.html.push(theHtml)
            // }
            // else{

            // 	newObj1.options.html = [newObj1.options.html,...html]
            // }

            // main = h_('WBC', {
            // 	keyy: `wbc-without-comp-${this.computedKey(el?.options?.key)}`,
            // 	props: { item: [newObj1, theHtml] },
            // });

            // main = h_(theComp, theOptions, [h_('WBC', { props: { item: theHtml }},)])

            if (wrapObj) {
              newObj1.comp = wrapObj?.options?.wrap?.comp || newObj1.comp;
              newObj1.options = {
                ...(newObj1?.options?.wrap?.options || {}),
                ...(newObj1?.options || {}),
              };

              delete newObj1.options.wrap;
              // newObj1.options.wrap=wrapObj
              // main = this.toWBC_(wrapObj,h_,this.toWBC_(newObj1, h_, theHtml))
            }
            // newObj1.options.html= theHtml

            // main = this.toWBC_(newObj1, h_)
            main = this.toWBC_(newObj1, h_, theHtml);

            // main = this.toWBC_(newObj1, h_)
            // console.log('main :>> ', main);
          } else if (Array.isArray(comp)) {
            // console.log(
            // 	'fffffffffffffffffffffffffjjjjjjjjjj',
            // 	el,
            // 	comp,
            // 	this.strToComps(comp)
            // );

            if (
              typeof comp == "string" &&
              (comp.includes("|") || comp.includes("+"))
            ) {
              comp = this.strToComps(comp);
            }

            // else

            // if (Array.isArray(comp)) {
            let newArr = [];
            // let newObj = {
            // 	// comp: 'div',
            // 	// options: options || {},
            // };
            // let footer = {};

            // 		if (typeof el?.comp?.[0] == 'string' && comp?.[0]?.includes('~')
            // 		) {

            // 			let theComp=el?.comp?.[0].replace('~',"")
            // 		newObj.comp=[theComp]
            // 		newObj.options={...(options||{}),...(el?.[theComp]?.options||{})}
            // 		newObj[theComp]=el[theComp]

            // 		// console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbb',this.toWBC_(newObj,h_))
            // 		footer={comp:comp.slice(1)}
            // 		comp.slice(1).filter(e=>e!=theComp).forEach(k=>{
            // 			console.log('ooooo',k,el[k])
            // 			footer[k.replace('~',"")]=el[k.replace('~',"")]
            // 		})

            // 		newObj.footer=footer
            // 		console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbb',el,theComp,footer,newObj)
            // 	el=newObj
            // 	alert('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
            // }

            // else
            // {

            // 	 newObj = {
            // 	comp: 'div',
            // 	options: options || {},
            // };
            // console.log('zzzzzzzzzzzzzzzzz',el,comp)

            //  Object.keys(el).filter(
            // 	(key) =>
            // 		![
            // 			'comp',
            // 			'props',
            // 			'options',
            // 			'oOptions',
            // 			'wrap',
            // 			'to',
            // 			'disp',
            // 			'mode',
            // 			'prod',
            // 			'key',
            // 			'fStyle',
            // 		].includes(key)
            // ).forEach(e=>{
            // 	itemObj[e]=el[e]
            // })

            comp.forEach((key, i) => {
              let itemObj = {};

              // console.log('llllllllllllllllllll', key, i);
              if (typeof key == "string") {
                itemObj =
                  el?.[key.replace("~", "")] ||
                  `<${key.replace("<", "").replace(">", "")}>`;
                // if (key.includes('~') && itemObj?.options) {
                // 	itemObj.options.disposition = 'nested';
                // }
              } else if (Array.isArray(key)) {
                // console.log('vbbbbbbbbbbbbbbbbbbbb', key);
                let keyArrObj = {
                  comp: key,
                };

                this.flattenArray(key).forEach((k) => {
                  if (Object.keys(el).includes(k)) {
                    keyArrObj[k] = el[k];
                  }
                });
                // itemObj={
                // 		comp:'div',
                // 		header:'ddddddddddddddd',
                // 		options:{
                // 				class:'grey pa-15',
                // 				html:keyArrObj
                // 			},
                // 			// ...keyArrObj
                // 		}
                itemObj = h_("WBC", {
                  keyy: `wbc-flat-arr-${this.computedKey(el?.options?.key)}`,
                  props: { item: keyArrObj },
                });
                // itemObj=this.toWBC_(keyArrObj, h_)
              } else {
                itemObj = key;
              }

              newArr.push(itemObj);
            });
            // .forEach((key, i) => {
            // 	// console.log('wwwwwwwwwwwwwwwwww',key)
            // 	if (typeof key == 'string') { footer[`${key}_${i}`] = el?.[key] || h_(key) }

            // 	if (Array.isArray(key)) {
            // 		// console.log('yyyyyyyyyyyy',key)
            // 		footer[`key_${i}`] = { ...el, comp: this.strToComps(key) }
            // 	}
            // });
            // newObj.footer = footer
            // }

            // el = newArr
            // main=h_('li','vvvvvvvvvvvvvvvvvv')
            // console.log('zzzzzzzzzzzzzzzzz',el,comp,newArr)

            main = h_("WBC", {
              ref: "arrHtml",
              keyy: `wbc-flat-arr-${this.computedKey(el?.options?.key)}`,
              props: { item: newArr },
            });
            // main=this.toWBC_(newArr, h_)

            // }

            // if (typeof el === 'function') {
            // 	alert('fffffffffffffffffffffffff')

            // 	let theComp = el;
            // 	theComp()
            // 		.then((e) => {
            // 			let wb = e?.default || e?.name || 'noNameComp0';
            // 			app.component(wb.name, wb);
            // 			// WBC_.component(wb.name, wb);

            // 			wbcObj.components[wb.name] = wb;
            // 			comp = wb.name;
            // 			options.props = {
            // 				...(wb.props || {}),
            // 				...options.props,
            // 			};

            // 		})
            // 		.catch((error) => {
            // 			// Handle import errors here

            // 		});

            // 	// return objFunc;
            // }
          } else if (typeof comp === "function" && comp.length == 0) {
            let theComp = comp;
            theComp()
              .then((e) => {
                let wb = e?.default || e?.name || {};
                app.component(wb.name, wb);
                // WBC_.component(wb.name, wb);
                wbcObj.components[wb.name] = wb;
                comp = wb.name;
                options.props = {
                  ...(wb.props || {}),
                  ...options.props,
                };
              })
              .catch((error) => {
                // Handle import errors here
                //console.error('Error importing component:', error);
              });

            // options.key+=1
            // return objFunc;
          } else {
            let innerHtml;
            let elHtml;

            let hInnerHtml;

            let html = this.html(el);

            if (
              typeof options?.html ==
                "object" /* && (options?.html.comp||options?.html.hComp) */ ||
              typeof options?.html == "function" ||
              options?.html?.startsWith?.("https://") ||
              options?.html?.startsWith?.("http://") ||
              options?.html?.startsWith("/") ||
              options?.html?.startsWith("./") ||
              options?.html?.startsWith("../") ||
              this.isVnode(options?.html) ||
              ["VSpacer", "VDivider"].includes(options?.html)
            ) {
              innerHtml = h_("WBC", {
                keyy: `wbc-key-inner-html-${this.computedKey(
                  el?.options?.key
                )}`,
                props: { item: html },
              });
              // innerHtml=this.toWBC_(html, h_)
            } else {
              elHtml = html;
              // console.log('el htmmmmmmmmmmmmmmmmmmml',elHtml)
              innerHtml = h_("WBHtml", {
                keyy: `wbhtml-key-${elHtml?.length}-${this.computedKey(
                  el?.options?.key
                )}`,

                props: {
                  html: elHtml,
                },
              });
            }

            if (comp == "MD") {
              // main = h_('div', {
              //   ...options,
              //   on: {
              //     click: () => {
              //       console.log('ttttttttttttttttt',this)
              //     alert('rendered')
              //       console.log('markdownittttttttttttttt',  this.MarkdownIt.render(options?.props?.source));
              //       console.log('turnDownittttttttttt',  this.TurnDown.turndown(options?.props?.source));
              //       // alert(this.$refs.VMD.render(options?.props?.source));

              //   },
              // },

              // },
              // [
              //     insideHeadersVN,
              //     innerHtml?.children || innerHtml,
              //     h_('VMD',
              //       {
              //         ...options?.VMDOptions||{},
              //         props: {
              //           ...options?.props || {}, ...options?.VMDOptions?.props || {}, source: options?.props?.source,
              //           on: this.itemListeners,
              //           attrs: this.attrs,
              //       },
              //     },
              //       [

              //         // innerHtml?.children || innerHtml,

              //         ...Object.entries(options?.slots || {}).map(
              //           ([slotName, slotVal]) =>
              //             h_('template', { slot: slotName }, [
              //               h_('WBC', {
              //                 keyy: `key-slots-${slotName}-${this.computedKey(
              //                   el?.options?.key
              //                 )}`,
              //                 props: { item: slotVal },
              //               }),
              //             ])
              //         ),

              //       ]
              //     ),
              //     // extChildren,
              //     insideFootersVN,
              //   ]
              // );
              main = h_(
                "div",
                // options,
                {
                  // ref: 'MDHtml',
                  ref: "rawHtml",
                  class: "markdown-body " + options?.class || "",
                  directives: [
                    {
                      name: "highlight",
                      value: undefined,
                      modifiers: {},
                    },
                  ],
                  ...options,
                  // ...(this.objLang(options,this.lang) ),
                  // ...(el.switch===true?el?.hoptions:{}),
                  // props:{...(options?.props||{}),rules:this.itemRules(options)},
                  // attrs:this.$refs[el?.options?.ref]?.$listeners||{},
                  // attrs:{...this.itemAttrs(el)},
                  // on:{...(this.$refs[el?.options?.ref]?.$listeners||{})},
                  // // attrs:{...(this.$refs[el?.options?.ref]?.$attrs||{})},
                  // attrs:{...this.$attrs,...(this.$refs[el?.options?.ref]?.$attrs||{}),...(options?.attrs||{})},
                  // on:{...(this.$refs[el?.options?.ref]?.$listeners||{}),...(options?.on||{})},
                  // on:{...this.itemListeners(el),...(this.$refs[el?.options?.ref]?.$listeners||{})},
                  on: this.itemListeners,
                  // attrs: this.attrs

                  // keyy:`main-key-${this.computedKey(el?.options?.key)}`,
                },
                [
                  // return h_('span',main)

                  // main = [globalHeaderVN,headers, main,footers,globalFooterVN]
                  // header,

                  // el?.switch===true?hInnerHtml?.children || hInnerHtml:innerHtml?.children || innerHtml,
                  insideHeadersVN,
                  innerHtml?.children || innerHtml,

                  h_(
                    "div",
                    {
                      ...(options?.MDOptions || {}),
                    },
                    [
                      h_("WBHtml", {
                        props: {
                          html: `${this.MarkdownIt.render(options?.src || "")}`,
                        },
                      }),
                    ]
                  ),

                  ...Object.entries(options?.slots || {}).map(
                    ([slotName, slotVal]) =>
                      h_("template", { slot: slotName }, [
                        h_("WBC", {
                          keyy: `key-slots-${slotName}-${this.computedKey(
                            el?.options?.key
                          )}`,
                          props: { item: slotVal },
                        }),
                      ])
                  ),
                  // ...Object.entries(options?.slots || {}).map(([slotName, slotVal]) => h_('template', { slot: slotName }, [this.toWBC_(slotVal,h_)])),

                  // el.switch===true?hFooter:footer,
                  extChildren,
                  insideFootersVN,
                  // footer
                ]
              );
            } else if (comp == "VCM") {
              let defaultVCMOptions = {
                tabSize: 4,
                styleActiveLine: true,
                lineNumbers: true,
                line: true,
                foldGutter: true,
                styleSelectedText: true,
                // keyMap: "sublime",
                matchBrackets: true,
                showCursorWhenSelecting: true,
                // theme: "monokai",
                extraKeys: { Ctrl: "autocomplete" },
                hintOptions: {
                  completeSingle: false,
                },
              };

              main = h(
                "VContainer",
                {
                  // ref: 'VCMHtml',
                  ref: "rawHtml",

                  ...options,
                  // class: ' pa-15',
                },
                [
                  insideHeadersVN,
                  innerHtml?.children || innerHtml,
                  h_(
                    "VCM",
                    {
                      ...(options?.VCMOptions || {}),
                      props: {
                        // mode: 'text/javascript',
                        mode: "text/html",
                        // ...
                        options: options?.props?.options || defaultVCMOptions,
                        // ...options?.VCMOptions?.props || {},
                        value: options?.props?.value,
                      },
                      // on: this.itemListeners,
                      // attrs: this.attrs,
                      // on: { input:options?.VCMOptions?.on?.input },
                    },
                    [
                      // innerHtml?.children || innerHtml,

                      ...Object.entries(options?.slots || {}).map(
                        ([slotName, slotVal]) =>
                          h_("template", { slot: slotName }, [
                            h_("WBC", {
                              keyy: `key-slots-${slotName}-${this.computedKey(
                                el?.options?.key
                              )}`,
                              props: { item: slotVal },
                            }),
                          ])
                      ),
                    ]
                  ),
                  // h_('VSelect', {
                  //   props: {
                  //     items: [
                  //       'text/html',
                  //       'text/x-vue',
                  //       'text/x-python',
                  //       'text/javascsript',
                  //       'text/x-markdown',
                  //       'text/html',
                  //       'text/x-python',
                  //     ],
                  //     value: this.codeMirroMode
                  //   },
                  //   on: {
                  //     change:(val)=> {
                  //       alert(val)
                  //       this.codeMirroMode =val
                  //     }
                  //   }
                  // }),
                  // extChildren,
                  insideFootersVN,
                ]
              );
            } else if (comp == "VIcon") {
              main = h_(
                "span",
                {
                  // ref: 'raw0Html',
                  ref: "rawHtml",
                },
                [
                  insideHeadersVN,
                  h_(
                    comp,
                    {
                      ref: "iconHtml",
                      ...options,
                      // ...(el.switch===true?el?.hOptions:{}),
                      // props:{...(options?.props||{}),rules:this.itemRules},
                      // attrs:this.itemAttrs(el),
                      // on:{},
                      on: this.itemListeners,
                      // attrs: this.attrs,
                      keyy: `icon-${this.computedKey(el?.options?.key)}`,
                    },
                    [
                      options?.html,

                      // this.objLang( options?.html, this.lang ),
                    ]
                  ),
                  // footers
                  // el.switch===true?hFooter:footer,
                  // hFooter:footer,
                  extChildren,
                  insideFootersVN,
                ]
              );
            } else {
              raw0 = h_(
                comp,
                {
                  ref: "rawHtml",
                  ...options,
                  // ...this.objLang(options,this.lang),
                  // ...(el.switch===true?el?.hOptions:{}),
                  // props:{...(options?.props||{}),rules:this.itemRules},
                  // attrs:this.itemAttrs,
                  on: this.itemListeners,
                  // attrs: this.attrs,
                  keyy: `key-raw0-${this.computedKey(el?.options?.key)}`,
                },
                [
                  // headers,
                  el?.switch === true
                    ? hInnerHtml?.children || hInnerHtml
                    : innerHtml?.children || innerHtml,
                  // innerHtml?.children || innerHtml,

                  ...Object.entries(options?.slots || {}).map(
                    ([slotName, slotVal]) =>
                      h_("template", { slot: slotName }, [
                        h_("WBC", {
                          keyy: `key-slots-${slotName}-${this.computedKey(
                            el?.options?.key
                          )}`,
                          props: { item: slotVal },
                        }),
                      ])
                  ),
                  // ...Object.entries(options?.slots || {}).map(([slotName, slotVal]) => h_('template', { slot: slotName }, [this.toWBC_(slotVal,h_)])),
                  // footers
                ]
              );

              // let optionLg= this.objLang({...options},this.lang),
              // console.log('tttttttttttt',this.$refs[el?.options?.ref]?.$listeners)

              this.vNodes.raw0 = raw0;

              main = h_(
                comp,
                // options,
                {
                  // ref: 'mainHtml',
                  ref: "rawHtml",
                  ...options,
                  // ...(this.menu||options?.menu?.active)?(options?.menu?.activeRootOptions||options?.menu?.activeOptions ):{} ,

                  // ...(this.objLang(options,this.lang) ),
                  // ...(el.switch===true?el?.hoptions:{}),
                  // props:{...(options?.props||{}),rules:this.itemRules(options)},
                  // attrs:this.$refs[el?.options?.ref]?.$listeners||{},
                  // attrs:{...this.itemAttrs(el)},
                  // on:{...(this.$refs[el?.options?.ref]?.$listeners||{})},
                  // // attrs:{...(this.$refs[el?.options?.ref]?.$attrs||{})},
                  // attrs:{...this.$attrs,...(this.$refs[el?.options?.ref]?.$attrs||{}),...(options?.attrs||{})},
                  // on:{...(this.$refs[el?.options?.ref]?.$listeners||{}),...(options?.on||{})},
                  // on:{...this.itemListeners(el),...(this.$refs[el?.options?.ref]?.$listeners||{})},
                  on: this.itemListeners,
                  // attrs: this.attrs

                  // keyy:`main-key-${this.computedKey(el?.options?.key)}`,
                },
                [
                  // return h_('span',main)

                  // main = [globalHeaderVN,headers, main,footers,globalFooterVN]
                  // header,

                  // el?.switch===true?hInnerHtml?.children || hInnerHtml:innerHtml?.children || innerHtml,
                  insideHeadersVN,
                  innerHtml?.children || innerHtml,

                  ...Object.entries(options?.slots || {}).map(
                    ([slotName, slotVal]) =>
                      h_("template", { slot: slotName }, [
                        h_("WBC", {
                          keyy: `key-slots-${slotName}-${this.computedKey(
                            el?.options?.key
                          )}`,
                          props: { item: slotVal },
                        }),
                      ])
                  ),
                  // ...Object.entries(options?.slots || {}).map(([slotName, slotVal]) => h_('template', { slot: slotName }, [this.toWBC_(slotVal,h_)])),

                  // el.switch===true?hFooter:footer,
                  extChildren,
                  insideFootersVN,
                  // footer

                  /* this.toWBC_(this.toWBC(loadDefaultComp))|| */
                ]
              );
            }

            // return main

            if (externalWrapperObj) {
              main = h_(
                externalWrapperObj.comp,
                {
                  ref: "externalHtml",
                  ...externalWrapperObj.options,
                },
                [main]
              );
            }

            if (options?.to) {
              main = h_("WBLink", {
                ref: "linkHtml",
                props: {
                  to: options?.to,
                  style_: {},
                  attrs: {},
                  html: main,
                },
              });
            }
          }
          // }

          // if(!(footer&&header)){
          // 	main=[header,main,footer]
          // }

          // console.log('globalFooterVN , globalHeaderVN',globalFooterVN , globalHeaderVN)
          if (globalFooterVN || globalHeaderVN) {
            main = h_(
              "div",
              {
                ref: "globalHtml",
                key: el?.switch,
              },
              [globalHeaderVN, main, globalFooterVN]
            );
          }

          if (options?.menu) {
            // 		alert(1111)

            // 		main=h_('VMenu', {
            //     // key: `{i}-{this?.filter_?.filteredCol}`,

            //     // ref: `menu-{i}`, // rawHtml to the menu
            //     // props: {
            //     //   offsetY: true,
            //     //   closeOnContentClick: !true,
            //     //   contentClass: 'grey',
            //     //   closeDelay: 10,
            //     // },
            //     // ...(this?.filter_?.colFiltMenu || {})

            //   }, [
            //     h_('template', { slot: 'activator' }, [main
            //     ]),
            // 	'sssssssssssssssssss'
            //     // h_('VListItem', [h_('WBC', {
            //     //   class: 'mb-5',
            //     //   props: { item: 'colFiltedObjContent' }
            //     // })])

            //   ])
            // 	}

            let defaultMenuOptions = {
              props: {
                // value:options.menu.visibility, /* your model for controlling the menu visibility */,
                value: false /* your model for controlling the menu visibility */,
                offsetY: true,
                closeOnContentClick: !true,
                //   contentClass: 'yellow',
                closeDelay: 10,
              },
            };

            let activeOptions = options?.menu?.activeOptions;
            this.menu = this.$refs[`menuHtml`]?.isActive || false;

            // if(this?.$refs?.[`menu`]?.isActive)
            // this.$refs[`menuHtml`]={isActive : this.menu}

            const vuetifyComponentsWithActivatorSlot = [
              "VMenu",
              "VDialog",
              "VTooltip",
              "VHover",
              "VDropdown",
              "VDatePicker",
              "VExpansionPanel",
              "VBottomSheet",
            ];

            // if (typeof options?.menu?.active != 'boolean') {
            //   options?.menu?.active=true
            // }

            if (
              vuetifyComponentsWithActivatorSlot.includes(options?.menu?.comp)
            ) {
              main = h_(
                options?.menu?.comp,
                {
                  ref: "menuHtml",

                  // ref: `menu`,
                  // ...(options?.menu?.options || defaultMenuOptions),
                  ...(this.menu?.active
                    ? options?.menu?.options
                    : options?.menu?.activeOptions),
                },
                [
                  // h_('span', { }, [
                  h_("template", { slot: "activator" }, [
                    h_(
                      options?.comp || "VCard",
                      {
                        // key: this?.$refs?.[`menu`]?.isActive+this.menu,
                        // ...(this.$refs[`menuHtml`]?.isActive?options?.menu?.activeOptions:{}),
                        // ...(this.menu ? options?.menu?.activeOptions : {/* class:'black' */ }),
                        ...(this.menu
                          ? options?.menu?.activeRootOptions
                          : options?.menu?.options),
                        on: {
                          [options?.menu?.event || "click"]: () => {
                            (this.$refs[`menuHtml`].isActive =
                              !this.$refs[`menuHtml`].isActive), // Toggle the menu
                              // console.log(333333333, options?.menu, this.$refs[`menuHtml`], this.$refs[`menuHtml`].isActive, this.menu, options?.menu?.options.props.value)
                              (this.menu = !this.menu);
                            this.$refs[`menuHtml`].isActive = this.menu;
                            // options.menu.options.props.value = !options?.menu?.options.props.value

                            // if (typeof this.menu == 'boolean') { options.menu.hide = !options?.menu?.hide }
                          },
                          // click: () => that.$refs[`menuHtml`].isActive = !that.$refs[`menuHtml`].isActive, // Toggle the menu
                        },
                      },
                      [main]
                    ),
                  ]),
                  h_("WBC", {
                    // class:'yellow',
                    props: { item: options?.menu.content },
                  }),
                  // options?.menu?.hide ? h_('WBC', { props: { item: options?.menu?.content } }) : null,
                ]
              );
            } else {
              // this.menu == options?.menu?.active||false

              main = h_(
                options?.menu?.comp || "div",
                {
                  // ref: `menu`,
                  ...(!options?.menu?.active
                    ? options?.menu?.options
                    : options?.menu?.activeOptions),
                  // ...options?.menu?.options||{},
                },
                [
                  h_(
                    options?.comp || "div",
                    {
                      // key: this?.$refs?.[`menu`]?.isActive+this.menu,
                      ...(options?.menu?.active
                        ? options?.menu?.activeRootOptions
                        : {}),

                      on: {
                        [options?.menu?.event || "click"]: () => {
                          // alert('aaaa'+options?.menu?.active)
                          options.menu.active = !options?.menu?.active;
                          this.key_ = (`${this.key_}` + "_").replace(
                            "___",
                            "_"
                          );

                          // if (options?.menu?.active == 'undefined')
                          // {
                          // options.menu.active = false

                          // }
                        },
                      },
                    },
                    [main]
                  ),
                  options?.menu?.active
                    ? h_("WBC", { props: { item: options?.menu?.content } })
                    : null,
                ]
              );
            }
          }

          // this.vNodes.main = main;

          if (el.options?.global) {
            global[el.options?.global] = this.itemAccessebility;
            global[el.options?.global + "_vm_context"] = this;
            global[el.options?.global + "_vn"] = main;
          }
        }

        if (options?.wrap) {
          let theWrapOptions;
          let theWrapHeader;
          let theWrapFooter;
          let theWrapOptionsHeaders;
          let theWrapOptionsFooters;

          let theWrap = options.wrap;

          if (typeof options?.wrap == "string") {
            theWrap = options?.wrap;
          } else if (options?.wrap instanceof Object) {
            theWrap = options?.wrap.comp || null;
            theWrapOptions = options?.wrap?.options || {};

            theWrapOptionsHeaders = h_("WBC", {
              item: options?.wrap?.options?.headers,
            });
            theWrapOptionsFooters = h_("WBC", {
              item: options?.wrap?.options?.footers,
            });

            theWrapHeader = h_("WBC", { item: options?.wrap?.header });
            theWrapFooter = h_("WBC", { item: options?.wrap?.footer });

            // theWrapHeader = options?.wrap?.header ;
            // theWrapFooter = options?.wrap?.footer ;
          }

          main = h_(
            theWrap,
            {
              ref: "wrapHtml",
              ...(theWrapOptions || {}),
            },
            [
              theWrapHeader,
              theWrapOptionsHeaders,
              main,
              theWrapOptionsFooters,
              theWrapFooter,
            ]
          );
        }

        // this.vNodes= {
        //   main: main,
        //   header: globalHeaderVN,
        //   footer: globalFooterVN,
        //   headers: insideHeadersVN,
        //   footers: insideHeadersVN,

        // }

        // return main

        // main=main?.children||main

        ////////////////////////////////////////////////////
        /////////////beautify the main el ////////////////
        ////////////////////////////////////////////////////

        // let vNodes={}

        let raw = main;

        // if (headers || footers) {
        // 	let mainList = [globalHeaderVN]
        // 	if (headers) {
        // 		mainList.push(headers)
        // 		// vNodes.headers=headers
        // 	}
        // 	mainList.push(main)
        // 	if (footers) {
        // 		mainList.push(footers)
        // 		// vNodes.footers=footers
        // 		// vNodes.footers=footers
        // 	}

        // 	main = mainList
        // }
        // else {
        // 	main = [globalHeaderVN,headers, main,footers]
        // }

        // main = [globalHeaderVN,headers, main,footers,globalFooterVN]

        // main.push(globalFooterVN)

        // main=[globalHeaderVN, main,globalFooterVN]
        // if(el.switch===true)
        // 	{
        // 		main.push(hFooter)}
        // 	else{
        // 		main.push(footer)
        // 	}

        // if (el?.switch) {
        // 	main = h_('div', {  }, main)
        // }
        // main=[headers,main,footers]

        // console.log('vnodeeeeeeeeeeeeeeeeeeeee',main)
        // this.vNodes['htmlHtml'] = h_('WBC', {
        //   props: { item: h => this.toVCM(h, this.html(el) || 'aaaaaaaaaaaaa') }
        // });

        let mainToRender = main;

        if (
          typeof options?.close == "boolean" ||
          typeof options?.float == "boolean" ||
          typeof options?.drag == "boolean"
        ) {
          //  this.vNodes.focusOn = this.focusOn(el, h_, main);
          main = this.focusOn(el, h_, main);
        }

        this.vNodes.main = main;

        if (!el?.output && options?.mode != "dev") {
          mainToRender = main;
        } else {
          // let outputArray = ['main'];

          // this.vNodes.main = main;

          // if (options?.mode == 'dev')
          {
            options.raw = options?.raw || true;
            options.raw0 = options?.raw0 || true;
            options.close = options?.close || true;
            (options.float = options?.float || false), // { fixed: !true, dispBtn: true };
              (options.drag = options?.drag || false),
              (options.gFloat = options?.gFloat || false), // { fixed: !true, dispBtn: true };
              (options.wbcProps = options?.wbcProps || true);
            options.itemSrc = options?.itemSrc || true;
            options.allOptions = options?.allOptions || true;
            options.gAttrs = options?.gAttrs || true;
            options.hAttrs = options?.hAttrs || true;
            options.vProps = options?.vProps || true;
            options.htmlSrc = options?.htmlSrc || true;
            options.wbcSrc = options?.wbcSrc || true;
            options.wbcSyn = options?.wbcSyn || true;
            // options.focusOn = options?.focusOn || false;
            // options.rawHtml = options?.rawHtml || true;
            [
              "rawHtml",
              "mainHtml",
              "externalHtml",
              "linkHtml",
              "globalHtml",
              "menuHtml",
              "wrapHtml",
            ]
              // Object.keys(this.$refs).
              .forEach((e) => {
                options[e] = options?.[e] || true;
              });
            // options.all =options?.all||true;
          }

          // this.vNodes['mainHtml'] = h_('WBC', {
          //   props: { item: this.toVCM(h_, this.$refs?.[this.refName]?.outerHTML) }
          // });

          this.vNodes["mainHtml"] = this.toVCM(
            h_,
            this.$refs?.[this.refName]?.outerHTML
          );

          let ell = this.clone(el);
          if (options?.mode != "dev") {
            delete ell?.output;
            delete ell?.asChild;

            delete ell?.options?.itemSrc;
            delete ell?.options?.raw;
            delete ell?.options?.raw0;
            delete ell?.options?.allOptions;
            delete ell?.options?.gAttrs;
            delete ell?.options?.hAttrs;
            delete ell?.options?.vProps;
            delete ell?.options?.htmlSrc;
            delete ell?.options?.wbcSrc;
            delete ell?.options?.wbcSyn;
            delete ell?.options?.wbcProps;
            delete ell?.options?.globalHtml;
            delete ell?.options?.externalHtml;
            delete ell?.options?.linkHtml;
            delete ell?.options?.rawHtml;
            delete ell?.options?.mainHtml;
            delete ell?.options?.menuHtml;
            delete ell?.options?.wrapHtml;

            delete ell?.options?.all;
            delete ell?.options?.close;
            delete ell?.options?.closeContent;
            delete ell?.options?.float;
            delete ell?.options?.floatContent;
            delete ell?.options?.drag;
            delete ell?.options?.dragContent;
            delete ell?.options?.focusOnOptions;

            delete ell?.options?.externalHtml;
            delete ell?.options?.global;
            delete ell?.options?.isValid;
            delete ell?.options?.linkHtml;
            delete ell?.options?.mainHtml;
            delete ell?.options?.menuHtml;
            delete ell?.options?.mode;
          }

          this.vNodes["mainData"] = h_("JsonViewer", {
            title: ell,
            props: { value: ell },
          });

          this.vNodes["mainData_"] = h_("WBDataViewer", {
            title: ell,
            props: { value: ell },
          });

          this.vNodes["htmlData"] = h_("JsonViewer", {
            title: ell,
            props: { value: ell?.options?.html },
          });

          this.vNodes["htmlData_"] = h_("WBDataViewer", {
            title: ell,
            props: { value: ell?.options?.html },
          });

          this.vNodes["mainCode"] = this.toVCM(h_, ell);
          this.vNodes["htmlCode"] = this.toVCM(h_, ell?.options?.html);

          [
            "rawHtml",
            "externalHtml",
            "linkHtml",
            "globalHtml",
            "menuHtml",
            "wrapHtml",
          ]
            // Object.keys(this.$refs)
            .forEach((e) => {
              if (e == "mainHtml") {
                this.vNodes[e] = h_("WBC", {
                  props: {
                    item: (h) =>
                      this.toVCM(h, this.$refs?.[this.refName]?.outerHTML),
                  },
                });
              } else if (e == "rawHtml") {
                this.vNodes[e] = h_("WBC", {
                  props: {
                    item: (h) =>
                      this.toVCM(h, this.$refs?.["rawHtml"]?.outerHTML),
                  },
                });
              } else {
                this.vNodes[e] = (h) =>
                  this.toVCM(h, this.$refs?.[e]?.outerHTML);
                // this.vNodes[e] = h_('WBC', {
                //   props: { item: h => this.toVCM(h, this.$refs?.[this.refName]?.outerHTML) }
                // })
              }
            });

          if (globalHeaderVN) {
            this.vNodes.header = globalHeaderVN;
            // outputArray.push('header');
          }
          if (globalFooterVN) {
            this.vNodes.footer = globalFooterVN;
            // outputArray.push('footer');
          }
          if (insideHeadersVN) {
            this.vNodes.headers = insideHeadersVN;
            // outputArray.push('headers');
          }
          if (insideFootersVN) {
            this.vNodes.footers = insideFootersVN;
            // outputArray.push('footers');
          }
          // if (hHeader) {
          // 	this.vNodes.hHeader = hHeader
          // outputArray.push('hHeader')
          // }
          // if (hFooter) {
          // 	this.vNodes.hFooter = hFooter
          // outputArray.push('hFooter')
          // }

          if (extChildren) {
            this.vNodes.extChildren = extChildren;
            // outputArray.push('extChildren');
          }

          if (options?.raw0) {
            this.vNodes.raw0 = raw0;
            // this.vNodes.raw0Html = h => h('VCM', { props: { value: this.$refs?.raw0Html?.outerHTML } })
            // this.vNodes.raw0Html = h => this.toVCM(h, this.$refs?.raw0Html?.outerHTML)

            // outputArray.push('raw0');
          }

          if (options?.raw) {
            this.vNodes.raw = raw;
            // outputArray.push('raw');
          }

          if (options?.close) {
            // this.vNodes.close = close;
            this.vNodes.close = this.close(el, h_);
            // outputArray.push('close');
          }

          if (options?.float || typeof options?.float === "boolean") {
            // let float = this.close.float(el,h_);
            this.vNodes.float = this.float(el, h_);
            // outputArray.push('float');
          }
          if (options?.drag || typeof options?.drag === "boolean") {
            // let float = this.close.float(el,h_);
            this.vNodes.drag = this.drag(el, h_);
            // outputArray.push('float');
          }

          if (options?.gFloat || typeof options?.gFloat === "boolean") {
            let gFloat = this.gFloat(el, h_);
            this.vNodes.gFloat = gFloat;
            // outputArray.push('float');
          }

          if (options?.wbcProps) {
            let wbcProps = this.wbcProps(el, h_);
            this.vNodes.wbcProps = wbcProps;
            // outputArray.push('wbcProps');
          }

          if (options?.gAttrs) {
            let gAttrs = this.gAttrs(el, h_);
            this.vNodes.gAttrs = gAttrs;
            // outputArray.push('gAttrs');
          }

          if (options?.allOptions) {
            let allOptions = this.allOptions(el, h_);
            this.vNodes.allOptions = allOptions;
            // outputArray.push('allOptions');
          }

          if (options?.itemSrc) {
            let itemSrc = this.itemSrc(el, el, h_);
            this.vNodes.itemSrc = itemSrc;
            // outputArray.push('itemSrc');
          }

          if (options?.hAttrs) {
            let hAttrs = this.hAttrs(el, h_);
            if (hAttrs) this.vNodes.hAttrs = hAttrs;
            // outputArray.push('hAttrs');
          }

          if (options?.vProps) {
            let vProps = this.vProps(el, h_);
            if (vProps) {
              this.vNodes.vProps = vProps;
              // outputArray.push('vProps');
            }
          }

          if (options?.htmlSrc) {
            let htmlSrc = this.htmlSrc(el, h_);
            if (htmlSrc) {
              this.vNodes.htmlSrc = htmlSrc;
              // outputArray.push('htmlSrc');
            }
          }

          if (options?.wbcSrc) {
            let wbcSrc = this.wbcSrc(el, h_);
            if (wbcSrc) {
              this.vNodes.wbcSrc = wbcSrc;
              // outputArray.push('wbcSrc');
            }
          }

          if (options?.wbcSyn) {
            let wbcSyn = this.wbcSyn(el, h_);
            this.vNodes.wbcSyn = wbcSyn;
            // outputArray.push('wbcSyn');
          }
          // if (options?.focusOn) {
          //   let focusOn = this.focusOn(el, h_,mainToRender);
          //   this.vNodes.focusOn = focusOn;
          //   // outputArray.push('focusOn');
          // }

          let all;

          if (options?.all) {
            let allObj = [];

            allObj = Object.keys(this.vNodes).map((e) => {
              if (this.vNodes?.[e] && e != "all") {
                return h_(
                  "VCard",
                  {
                    class: "  pa-10 ma-2  ",
                    style: {
                      border: `1px solid black `,
                    },
                  },
                  [
                    h_("h4", { class: " ma-5 text-right" }, [e]),
                    e.endsWith("Html")
                      ? h_("WBC", { props: { item: this.vNodes[e] } })
                      : this.vNodes[e],
                    // h_(
                    //   'div',
                    //   {},
                    //   Array.isArray(this.vNodes[e])
                    //     ? this.vNodes[e]
                    //     : [this.vNodes[e]]
                    // ),
                  ]
                );
              }
            });

            all = h_(
              "VCard",
              {
                class: ` ma-15 pa-15`,
                style: {
                  border: `10px dashed black`,
                  backgroundColor: `${this.rColor}`,
                },
              },
              [
                h_("h2", { class: "text-center" }, [
                  `${el?.name || ""} Component Properties`,
                ]),
                allObj,
              ]
            );

            this.vNodes.all = all;
            // outputArray.push('all');
          }

          // if (options?.mode == 'dev') {
          //   outputArray = ['all'];
          // }
          // else if (el?.output == 'all') {

          // 	alert(333+el?.output)
          // 	outputArray = Object.keys(vNodes) }
          // else if (Array.isArray(el?.output)) { outputArray = el?.output }

          // return mainToRender

          // let theOutput = this.clone(el?.output || {})

          if (el?.output) {
            let theOutput = el?.output || {};
            // console.log('theOutput00000 :>> ', theOutput);
            // let theOutput = el?.output || {}

            let outputWBCObj;
            let obj;

            // if (typeof theOutput == 'function') {
            //   // this.vNodes=vNodes

            //   obj = el.output(h_, this.itemAccessebility);el?.output
            //   // alert(111111)

            //   // mainToRender = this.toWBC_(el.output(h_, this.itemAccessebility), h_);
            //   // mainToRender = h_('WBC', { props: { item: el.output(h_, this.itemAccessebility) }});
            //   // mainToRender = el.output(h_, this.itemAccessebility)
            //   // return mainToRender
            // }
            // else

            let f = (val) => this.vNodes?.[`${val}`] || val;

            obj = this.transfObj(theOutput, f);

            outputWBCObj = {
              comp: "span",
              // dive:true,
              options: {
                ref: "reference",
                class: "yellow",
                key: `output-obj${this.computedKey(el?.options?.key)}-${
                  el.length
                }`,
                html: obj, //that.data.opotions.html
              },
              watch: [
                [
                  (that) => {
                    return that.data.options.html;
                  },
                  (that, newVal, oldVal) => {
                    // alert("changed");
                    that.data.options.class = "green";
                    that.data.options.key += 1;
                  },
                  { deep: true },
                ],
              ],
              tracker: (that) => {
                // that.data.options.html = [this.vNodes["main"], ['<VCard|yellow pa-15>', this.vNodes["main"], this.vNodes['mainHtml'], this.vNodes['wbcProps']]]
                that.data.options.html = obj;
              },
            };

            mainToRender = h_("WBC", { props: { item: outputWBCObj } });
          }
        }

        if (options?.gClose === null) {
          mainToRender = null;
        } else if (
          typeof options?.gClose == "boolean" ||
          typeof options?.gFloat == "boolean" ||
          typeof options?.g == "boolean"
        ) {
          //  this.vNodes.focusOn = this.focusOn(el, h_, main);
          mainToRender = this.globalFocusOn(el, h_, mainToRender);
        }

        return mainToRender;
        // return h_('div', {...(selectItemOptions||{}),on: { 'mousedown': this.handleMouseDown, mouseup: this.handleMouseUp } }, [mainToRender])
      },

      strToComps(str) {
        if (typeof str !== "string") {
          return str;
        } else {
          const result = [];
          let currentLevel = result;
          let currentStr = "";
          let bracketCount = 0;

          for (let i = 0; i < str.length; i++) {
            const char = str[i];

            if (char === "|" && bracketCount === 0) {
              if (currentStr.length > 0) {
                currentLevel.push(currentStr);
                currentStr = "";
              }
              currentLevel.push([]);
              currentLevel = currentLevel[currentLevel.length - 1];
            } else if (char === "+" && bracketCount === 0) {
              if (currentStr.length > 0) {
                currentLevel.push(currentStr);
                currentStr = "";
              }
            } else if (char === "(") {
              bracketCount++;
              currentStr += char;
            } else if (char === ")") {
              bracketCount--;
              currentStr += char;
            } else {
              currentStr += char;
            }
          }

          if (currentStr.length > 0) {
            currentLevel.push(currentStr);
          }
          return result;
        }
      },
      updateInputValue(event) {
        // alert('changed')

        // //console.log(88888888888888888888,event)

        if (typeof event == "object" && event?.target) {
          // alert('changed0')
          if (event?.target?.type == "checkbox") {
            // this.item_.options['val'] = event?.target?.checked || false;
            this.item_.options.attrs["checked"] =
              event?.target?.checked || false;
          }
          // else {
          // 	// this.item_.options['val'] =(typeof this.item.options['val']=='boolean')? !this.item.options['val']:event;
          // 	if (event?.target?.value) { this.item_.options['val'] = event.target.value; }
          // 	// this.item_.options.props['value'] =(typeof this.item.options['val']=='boolean')? !this.item.options['value']:event;
          // 	else this.item_.options.props['value'] = event;
          // }
          this.item_.options["val"] =
            event?.target?.value || event?.target?.checked || false;
        } else {
          if (this?.item_?.comp == "VCheckbox") {
            // alert('checked')
            // alert(v)
            // console.log(22222222222222222, event)

            // if (this?.item_?.options?.props){
            // this.item_.options.props['value'] = !this.item_.options.props['value'];
            // }
            // this.$refs.rawHtml.lazyValue = !this.$refs.rawHtml.lazyValue;
            this.item_.options["val"] = !this?.item_?.options?.["val"] || false;

            // alert(this.item_.options['val']+999999)
            // this.item_.options.attrs['checked'] = event?.target?.checked || false;
          } else {
            // alert(event + 'changed1')

            //console.log('zzzzzzzzzzzzzzzzzzz',this.$refs.rawHtml)
            this.item_.options["val"] = event || "";
            // this.$refs.rawHtml.lazyValue = event || '';
            // if (this?.item_?.options?.props) {
            // 	this.item_.options.props['value'] = event || '';

            // }
            // this.item_.options.isValid = this.$refs.rawHtml.valid;
          }

          // this.item_.options.props.rules=[this.item_.options.props.rules[0](this.itemAccessebility,event)]
          // rules.push(e(this.itemAccessebility,this.lang))

          // this.item_.options['val'] =(typeof this.item.options['val']=='boolean')? !this.item.options['val']:event||false;
          // this.item_.options.props['value'] =(typeof this.item.options['val']=='boolean')? !this.item.options['value']:event||false;
        }
      },

      // updateObjectParseIt(val, el ) {

      // 	let theItemToEval;
      // 	try {
      // 		// theItemToEval = strToObj(val);
      // 		el = strToObj(val);
      // 	} catch (error) {
      // 		alert('"' + val + '" can not be parsed: ' + error);
      // 		// this.mainItemTextArea.rules = [
      // 			// `"${val}" can not be parsed: ${error}`,
      // 		// ];
      // 	}
      // 	// return theItemToEval
      // },

      async getUrlResponse(el) {
        console.log("el :>> ", el);
        let responseData = null;

        try {
          const response = await this.$http.get(el);
          // const contentType = response.headers.get('Content-Type');
          return response;
          // if (contentType) {
          // 	console.log('contentType :>> ', response,el, contentType);
          // 	if (contentType.includes('/json')) {
          // 		responseData = response.data; // Assuming response.data is the JSON
          // 	} else if (contentType.startsWith('image/')) {
          // 		responseData = 'image';
          // 	} else if (contentType.startsWith('video/')) {
          // 		responseData = 'video';
          // 	}
          // }
        } catch (error) {
          // console.error("Error fetching media type:", error);

          return error;
        }

        return responseData; // Return the response data or null if an error occurred
      },
      // Assuming 'fetchData' is an async method in your Vue instance
      // async fetchData(el) {
      // 	return await this.getUrlResponse(el);
      // }

      //
      toVCM(h, src) {
        if (!src) {
          return "empty code";
        }
        let htmlCode = src;
        htmlCode = JSON.stringify(this.clone(src));
        if (typeof src == "string") {
          htmlCode = src
            ?.replace(/<span.*?>(.*?)<\/span>/g, "$1") // Keep innerHTML of span
            // .replace(/<span.*?>|<\/span>/g, "") // Remove all span tags
            ?.replace(/<!--.*?-->/g, "");
        }
        // else if (this.isPlainObject(src)){
        // }

        return h(
          "VContainer",
          {
            class: "grey  ",
            style: {
              resize: "both",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              border: 0,
            },
          },
          [
            h(
              "a",
              {
                on: {
                  click: () => {
                    // alert("Content copied");
                    this.copyToClipboard(htmlCode);
                  },
                },
              },
              ["Copy"]
            ),
            h("VCM", {
              // style: { border: '1px solid black', padding: '5px', backgroundColor: 'red', display: 'block' },
              tabSize: 4,
              mode: "text/html",

              props: {
                value: this.clone(htmlCode),
                options: {
                  tabSize: 4,
                  lineWrapping: true, // Enable line wrapping
                  viewportMargin: Infinity,
                  styleActiveLine: true,
                  lineNumbers: true,
                  line: true,
                  foldGutter: true,
                  styleSelectedText: true,
                  // keyMap: "sublime",
                  matchBrackets: true,
                  showCursorWhenSelecting: true,
                  // theme: "monokai",
                  extraKeys: { Ctrl: "autocomplete" },
                  hintOptions: {
                    completeSingle: !false,
                  },
                },
              },
              style: {
                border: "1px solid #eee",
                "font-family": "monospace",
                height: "300px",
              },
            }),
          ]
        );
      },
      //     outputRender(h_, el) {

      //       let mainToRender = this.toWBC_(el, h_, this.children_, this.wrap_);
      //       return mainToRender

      //       // this.vNodes.main = mainToRender;

      //       // this.vNodes.header = this.globalHeaderVN(el, h_);

      //       // this.vNodes.footer = this.globalFooterVN(el, h_);

      //       // this.vNodes.headers = this.insideHeadersVN(el, h_);
      //       // this.vNodes.footers = this.insideFootersVN(el, h_);

      //       // ['rawHtml', 'mainHtml', 'externalHtml', 'linkHtml', 'globalHtml', 'menuHtml', 'wrapHtml']
      //       //   // Object.keys(this.$refs)
      //       //   .forEach(e => {
      //       //     if(e=='mainHtml'){
      //       //       this.vNodes[e] = h => this.toVCM(h, this.$refs?.[this.refName]?.outerHTML)
      //       //     }
      //       //     else{
      //       //       this.vNodes[e] = h => this.toVCM(h, this.$refs?.[e]?.outerHTML)
      //       //     }

      //       //   })

      //       // {
      //       //   let close = this.floatCloseDrag(el, h_);
      //       //   this.vNodes.close = close;
      //       //   // outputArray.push('close');
      //       // }

      //       // {
      //       //   let float = this.float(el, h_);
      //       //   this.vNodes.float = float;
      //       //   // outputArray.push('float');
      //       // }

      //       // {
      //       //   let wbcProps = this.wbcProps(el, h_);
      //       //   this.vNodes.wbcProps = wbcProps;
      //       //   // outputArray.push('wbcProps');
      //       // }

      //       // {
      //       //   let gAttrs = this.gAttrs(el, h_);
      //       //   this.vNodes.gAttrs = gAttrs;
      //       //   // outputArray.push('gAttrs');
      //       // }

      //       // {
      //       //   let allOptions = this.allOptions(el, h_);
      //       //   this.vNodes.allOptions = allOptions;
      //       //   // outputArray.push('allOptions');
      //       // }

      //       // {
      //       //   let itemSrc = this.itemSrc(el, el, h_);
      //       //   this.vNodes.itemSrc = itemSrc;
      //       //   // outputArray.push('itemSrc');
      //       // }

      //       // {
      //       //   let hAttrs = this.hAttrs(el, h_);
      //       //   if (hAttrs) this.vNodes.hAttrs = hAttrs;
      //       //   // outputArray.push('hAttrs');
      //       // }

      //       // {
      //       //   let vProps = this.vProps(el, h_);
      //       //   if (vProps) {
      //       //     this.vNodes.vProps = vProps;
      //       //     // outputArray.push('vProps');
      //       //   }
      //       // }

      //       // {
      //       //   let htmlSrc = this.htmlSrc(el, h_);
      //       //   if (htmlSrc) {
      //       //     this.vNodes.htmlSrc = htmlSrc;
      //       //     // outputArray.push('htmlSrc');
      //       //   }
      //       // }

      //       // {
      //       //   let wbcSrc = this.wbcSrc(el, h_);
      //       //   if (wbcSrc) {
      //       //     this.vNodes.wbcSrc = wbcSrc;
      //       //     // outputArray.push('wbcSrc');
      //       //   }
      //       // }

      //       // {
      //       //   let wbcSyn = this.wbcSyn(el, h_);
      //       //   this.vNodes.wbcSyn = wbcSyn;
      //       //   // outputArray.push('wbcSyn');
      //       // }

      //       let theOutput = this.clone(el?.output || {})
      //       console.log('theOutput00000 :>> ', theOutput);
      //       // let theOutput = el?.output || {}

      //       let f = (val) => this.vNodes?.[`${val}`] || val

      //       let obj = this.transfObj(theOutput, f)

      //       console.log('theOutput11111 :>> ', obj);

      //       mainToRender = this.toWBC_(obj, h_);

      //       // mainToRender =h_('div',[ h_('WBC', {
      //       //   keyy: `arr-key-${this.computedKey(el?.options?.key)}-${el.length}`,
      //       //   props: {
      //       //     item: obj,
      //       //   },
      //       // })])
      //       return mainToRender

      //       // if (this.isPlainObject(theOutput)) {
      //       //   theOutput = Object.keys(theOutput).sort().map(key=>theOutput[key])
      //       // }
      //  /*      let o = { raw: this.main }
      //           this.project(theOutput, o)
      //           mainToRender = theOutput */

      //       if (typeof theOutput == 'function') {
      //         // this.vNodes=vNodes

      //         // alert(111111)

      //         mainToRender = this.toWBC_(el.output(h_, this.itemAccessebility), h_);
      //         // mainToRender = h_('WBC', { props: { item: el.output(h_, this.itemAccessebility) }});
      //         // mainToRender = el.output(h_, this.itemAccessebility)
      //         return mainToRender
      //       }

      //       // else if(true){
      //       //             let f = (val) => this.vNodes?.[`${val}`] || val

      //       //   return this.toWBC_(this.transfObj(theOutput, f), h_)
      //       // }

      //       else if (Array.isArray(theOutput)) {

      //         // let arr = []
      //         // for (let e of theOutput) {
      //         //   alert(e)
      //         //   console.log('etttttttttttttttttttttt :>> ', e);
      //         //   if (this.vNodes?.[e]) { arr.push(this.vNodes[e]) }
      //         // }
      //         // return arr
      //         // return [this.vNodes["main"], this.vNodes['mainHtml'],this.vNodes['wbcProps'],]

      //         // return h_('WBC', {
      //         //   keyy: `wbhtml-key-${this.computedKey(el?.options?.key)}-${el.length}`,
      //         //   props: {
      //         //     item: this.transfObj(e, f),
      //         //   },
      //         // })

      //         let obj = theOutput.map((e) => {

      //           if (this.vNodes?.[`${e}`]) { return this.vNodes[`${e}`] }
      //           else if (typeof e == 'string') { return e }
      //           else {
      //             return this.toWBC_(this.transfObj(e, f), h_)
      //             // return h_('WBC', {
      //             //   keyy: `wbhtml-key-${this.computedKey(el?.options?.key)}-${el.length}`,
      //             //   props: {
      //             //     item: this.transfObj(e, f),
      //             //   },
      //             // })
      //           }
      //         })
      //         mainToRender = obj

      //         //  let f = (val) => {
      //         //    if (val == 'wbcProps') {
      //         //       return this.wbcProps(el, h_)
      //         //    }
      //         //    if (val == 'raw') {
      //         //      return this.main
      //         //    }
      //         //    return this.vNodes?.[val] || val
      //         //  }
      //         // let o = {...this.vNodes,raw:this.main}
      //         //   let obj = this.project(theOutput, o)
      //         // mainToRender = theOutput

      //         // mainToRender = h_('WBC', {
      //         //   keyy: `arr-key-${this.computedKey(el?.options?.key)}-${el.length}`,
      //         //   props: {
      //         //     item: this.transfObj(obj, f),
      //         //   },
      //         // })

      //       }

      //       else if (
      //         ['boolean', 'string', 'number'].includes(typeof theOutput)
      //       ) {

      //         if (theOutput.endsWith('Html')) {
      //           alert(theOutput)
      //           // let obj = this.transfObj(theOutput, f)
      //           // mainToRender =  this.transfObj(theOutput, f)
      //           mainToRender = h_('WBC', { props: { item: this.transfObj(el.output, f) } })
      //           // mainToRender = h_('WBC', {
      //           //   keyy: `arr-key-${this.computedKey(el?.options?.key)}-${el.length}`,
      //           //   props: {
      //           //     item: obj,
      //           //   },
      //           // })

      //         }
      //         else
      //           if (this.vNodes?.[theOutput]) { mainToRender = this.vNodes?.[theOutput] }
      //           else {

      //             mainToRender = h_('WBC', {
      //               keyy: `wbhtml-key-${this.computedKey(el?.options?.key)}-${el.length
      //                 }`,
      //               props: {
      //                 item: this.transfObj(el.output, f),
      //               },
      //             });
      //           }
      //       } else if (this.isPlainObject(theOutput)) {

      //         // return h_('WBC', { props: { item: { comp: 'li', options: { html: [this.vNodes?.main, this.vNodes?.wbcProps] } } } })
      //           // alert('outputttttttttttt')
      //           // alert(theOutput)

      //         let obj = {}
      //         Object.entries(theOutput).forEach(([key, val]) => {

      //           if (this.vNodes?.[`${val}`]) { obj[key] = this.vNodes[`${val}`] }
      //           // else { obj[key] = e}
      //           else {
      //             obj[key] = this.toWBC_(transfObj(val, f), h_)
      //             // obj[key] = h_('WBC', { props: { item: this.transfObj(val, f) } })
      //             // obj[key] = h_('WBC', {
      //             //   keyy: `wbhtml-key-${this.computedKey(el?.options?.key)}-${el.length}`,
      //             //   props: {
      //             //     item: this.transfObj(val, f),
      //             //   },
      //             // })
      //           }
      //         })
      //             //   alert(key)

      //             // let f = (val) => this.vNodes?.[val] || val
      //             // let obj = this.transfObj(theOutput, f)

      //           //   if (typeof val=='string' && this.vNodes?.[val]) {
      //           //     obj[key] = this.vNodes[val]
      //           //   }
      //           //   else { obj[key] = this.transfObj(theOutput, f) }
      //           // })
      //           // mainToRender=obj

      //           // console.log('objjjjjjjjjjjjj :>> ', obj);
      //           // let f = (val) => this.vNodes?.[val] || val
      //           // let obj = this.transfObj(theOutput, f)

      //           // mainToRender = h_('WBC', { props: { item: obj } })
      //           // let theOutputt=this.clone(el?.output || {})
      //           // let o = this.vNodes
      //           // this.project(theOutputt, o)
      //           // mainToRender = theOutputt

      //         // mainToRender =obj
      //         mainToRender =this.toWBC_( obj ,h_)
      //         // mainToRender =h_('WBC', { props: { item: obj } }))

      //           // mainToRender = h_('WBC', {
      //           //   keyy: `wbhtml-key-${this.computedKey(el?.options?.key)}-${el.length }`,
      //           //   props: {
      //           //     item: obj,
      //           //   },
      //           // });

      //       }
      //       else {
      //         alert(theOutput)
      //         let obj = this.transfObj(theOutput, f)
      //         // mainToRender =  this.transfObj(theOutput, f)
      //         // mainToRender = theOutput.endsWith('Html') ? h_('WBC', { props: { item: this.vNodes[theOutput] } }) : this.transfObj(theOutput, f)
      //         mainToRender = h_('WBC', {
      //           keyy: `arr-key-${this.computedKey(el?.options?.key)}-${el.length}`,
      //           props: {
      //             item: obj,
      //           },
      //         })

      //       }
      //         //  else if (theOutput) {
      //         //   mainToRender = h_(
      //         //     'VCard',
      //         //     {},
      //         //     theOutput.map(
      //         //       (e) =>
      //         //         this.vNodes?.[e] ||
      //         //         h_('VCard', { class: 'red pa-10 ma-10' }, [
      //         //           `The output item "${e}" is not activated in options.`,
      //         //         ])
      //         //     )
      //         //   );app
      //         // }
      //       return mainToRender

      //     }

      updateKey(key) {
        if (key?.includes("_")) {
          return key.replace("_", "-");
        } else if (key?.includes("-")) {
          return key.replace("-", "_");
        } else if (key) {
          return key + "_";
        } else {
          return this.randomKey("key");
        }
      },
    },

    components: {
      // WBHtml,
      // WBLink,
      // JsonViewer,
      // WBDataViewer,
      // // VueOfficePdf,
      // VueOfficeExcel,
      // VueOfficeDocx,
      // VueDocPreview,
      // pdfvuer,
      // VCM: codemirror,
      // WBAlert,
      ...(options?.components || {}),

      // ...vuetifyModule,
      // 		'RouterView':app.options.components.RouterView,
      // 'RouterLink':app.options.components.RouterLink
    },
    vuetify: options?.vuetify || vuetify,
    router: options?.router || router,
    store: options?.store || store,

    // beforeUpdate()  {
    // 	if (this.item instanceof Object) {
    // 		console.log('sssssssssssssssssssssssssssssssssssssss', this.item, this.item?.tracker)
    // 		if (this.item?.tracker) {
    // 			// console.log('this.item?.tracker',this.item)
    // 			this.item.tracker(this.itemAccessebility);
    // 		}
    // 	}
    // },
    //  on:{'update:item_.options.props.value': (newValue) => {
    // 	alert(8888888888888888888)
    //     // this.content = newValue;
    //   }},
    mounted() {
      // this.alertObjs=this.item_

      // 'mousedown': , mouseup: this.handleMouseUp
      this.$el.addEventListener("mousedown", this.handleMouseDown);
      this.$el.addEventListener("mouseup", this.handleMouseUp);

      // this.item_ = this.toWBC(this.item)
      // this.item_ = this.clone(this.item)
      // this.item_ = this.item

      // if(this.dive)
      // {
      // 	this.item_ = this.generalVal(
      // 		this.item_,
      // 		this.itemAccessebility,
      // 		// this.lg
      // 		this.lang
      // 		// lg
      // 		);
      // 	}
      // else {
      // 	this.item_ = this.item
      // }

      // this.item_.options.props['value'] = newValue;

      // this.item.options.attrs={value:newValue};

      // rules=this.generalVal(this.clone(this?.item_?.options?.props?.rules||[]),{},this.lang)

      // this.item_=this.toWBC(this.clone(this.item))
      // this.wbcItem=this.toWBC(this.clone(this.item)),
      // this.item0 = this.item;
      // this.item_ = this.toWBC(this.clone(this.item));
      // this.item_ =  this.toWBC(this.item);

      // this.item_ = this.generalVal(
      // 	this.wbcItem,
      // 	this.itemAccessebility,
      // 	// this.lg
      // 	// this.lang
      // 	this.lang
      // );

      // //console.log(this.extKey)
      this.extKey_ = this.extKey;
      this.baseKey = `${this?.extKey_ || ""}-${
        this?.$store?.state?.loggedIn ? 1 : 0
      }-${this.randomKey(`${this.lang}`)}-`;

      this.wrap_ = this?.wrap
        ? {
            comp: this.wrap?.comp || this.wrap,
            options: this.wrap?.options || {},
          }
        : null;
      // //console.log('eeeeeeeeeeeeee',this.extKey,this.extKey_,this.wrap_)

      this.children_ = this.children;

      // this.children_ = this.generalVal(
      // 	this.children || null,
      // 	this.itemAccessebility,
      // 	this.lang
      // )

      // if (this.item_ instanceof Object) {
      if (this.isPlainObject(this.item_)) {
        if (this.item_?.options) {
          this.internalValue = this?.item_?.options?.val;
        }

        this.baseKey += this?.item_?.options?.key || "";

        // if (this.item_.options?.hAttrs){
        //   let hAttrs = html_ressources.html_tags[this.item_.comp].attrs;
        //   // this.item_.options.attrs = { ...this.item_.options?.attrs || {} }
        //   Object.keys(hAttrs).forEach(key => {
        //     this.item_.options.attrs[key] ??= '';
        //   })
        // }

        // this.dive=this.item_?.dive

        // if (this?.item_?.options?.props) {
        // // 	this.item_.options.props.value = this.item_.options?.val;
        // 	this.item_.options.val=this.item_.options.props.value ;
        // }
        // if (this?.item_?.options) {
        // }

        // if (!this?.item_?.options?.val) { this.item_.options.val = this.item_?.options_?.props?.value || '' }
        if (typeof this.item_?.options?.props?.value == "boolean") {
          // this.item_.options.val = this.item_.options.props.value;
          this.item_.options.props.value = this.item_.options.val;
        }

        // if(this.item_.options&&!this.item_?.options?.key){
        // 	//console.log(5555555555555,this.item_)
        // 	this.item_.options['key']=`${this?.extKey||this.randomKey('obj')}-${this.key_}`

        // }

        // if (this.item_?.options) {
        // 	this.item_.options.ref = 'rawHtml'
        // 	this.item_.ref = () => this?.$refs?.rawHtml

        // }

        // if (options?.key) {

        // 	this.baseKey += `-${options?.key}`

        // }

        let dir;
        if (this.item_?.options?.rtl === true) {
          dir = "rtl";
        } else if (this.item_?.options?.rtl === false) {
          dir = "ltr";
        } else dir = this.lang == "ar" ? "rtl" : "ltr";

        if (this.item_?.options?.props?.style?.[this.lang]) {
          this.item_.options.style[this.lang].direction = dir;
        } else if (this.item_?.options?.style) {
          this.item_.options.style.direction = dir;
        } else if (this.item_?.options) {
          this.item_.options.style = { direction: dir };
        }

        if (this.item_?.options?.global) {
          global[this.item_.options?.global] = this.itemAccessebility;
          global[this.item_.options?.global + "_vmvuetif"] = this;
        }

        if (this.item_?.init) {
          // console.log('this.item_?.init',this.item_)

          // alert('init   999999999999999999')
          this.item_.init(this.itemAccessebility);
        }

        // let dir;
        // if (this.item_?.options?.rtl===true) {dir ='rtl'}
        // else if (this.item_?.options?.rtl===false) {dir ='ltr'}
        // else dir = this.lang == 'ar'? 'rtl' : 'ltr';

        // 	if (this.item_?.options?.props?.style?.[this.lang]) {
        // 		this.item_.options.style[this.lang].direction = dir;
        // 	}
        // 	else if(this?.item_?.options?.style){this.item_.options.style.direction = dir;}
        // 	else if(this?.item_?.options){this.item_.options.style={direction : dir} }
      } else {
        this.internalValue = this.item_;
      }

      // this.item_ = this.generalVal(
      // 	this.wbcItem,
      // 	this.itemAccessebility,
      // 	// this.lg
      // 	// this.lang
      // 	this.lang
      // );

      this.rColor = this?.item?.rColor || this.randomColor();
      // this.select = null;

      // float:!true,
      // itemSrc:true,
      // all:true,
      // gAttrs:true,
      // itemSrc:true,
      // wbcSyn:true,
      // wbcSrc:true,
      // htmlSrc:true,
      // allOptions:true,
      // gAttrs:true,
      // wbcProps: true,
      // vProps: true,
      // raw: true,
      // main: true,
      // headers: true,
      // footers: true,
      // wrappedRaw: true,

      // this.$store.watch(
      // 	() => this.lang,"vue": "^2.7.16"
      // 	(newValue, oldValue) => {
      // 		// this.lg = newValue;
      // 		this.$cookies.set('lg', newValue);

      // 		this.wbcItem = this.toWBC(this.clone(this.item0)),
      // 			this.item_ = this.generalVal(
      // 				// options,
      // 				this.wbcItem,
      // 				this.itemAccessebility,
      // 				// this.lg
      // 				// this.lang
      // 				this.lang
      // 			);
      // 	},
      // 	{
      // 		immediate: true, // To trigger the handler immediately on initial mount
      // 	}
      // );
    },
    created() {
      this.nameEl =
        this?.item_?.options?.global || this.randomKey("", 3).toLowerCase();
      global[this.nameEl] = this.itemAccessebility;

      // Get all cookie keys

      // Fetch and set the values for each key

      // if(this.transform)
      // {
      // 	this.item_ = this.generalVal(
      // 		this.item,
      // 		this.itemAccessebility,
      // 		// this.lg
      // 		this.lang
      // 		// lg
      // 		);
      // 	}
      // else {
      // 	this.item_ = this.item
      // }

      // this.item_ = this.generalVal(this.item,this.itemAccessebility)

      this.item_ = this.item;

      this.wiki_ = this.wiki;
      ///////////////////////////////////////////
      if (this.wiki) {
        if (this.wiki.includes(",")) {
          this.item_ = this.wiki.split(",").map((e) => wbcWikiObj?.[e]);
        } else {
          let wiki = wbcWikiObj?.[this.wiki_];
          this.item_ = wiki || this.item;
        }
      }
      ///////////////////////////////////////////

      if (this.item_?.dive) {
        this.item_ = this.generalVal(
          this.item_,
          this.itemAccessebility,
          // this.lg
          this.lang
          // lg
        );
      }

      if (this.isPlainObject(this.item_)) {
        this.itemListeners = this?.item_?.options?.on || {};
        // this.attrs = this?.item_?.options?.attrs || {}

        // if (this.item_?.init) {
        // 	// console.log('this.item_?.init',this.item_)

        // 	// alert('init   999999999999999999')
        // 	this.item_.init(this.itemAccessebility);
        // }

        this.refName = "main_" + this.randomKey("", 3).toLowerCase();
        // let refName='rawHtml'
        if (this.item_?.options && !this.item_?.options?.ref) {
          this.item_.options.ref = this.refName;
        }
        this.item_.asChild = () => this.itemAccessebility;

        // this.item_.options.ref ??='rawHtml'
        // this.item_.ref = () => this?.$refs[this.item_?.options?.ref]
      }

      // this.item0 = this.item;
      // this.wbcItem = this.toWBC(this.clone(this.item0));
      // this.item_ = this.item0;

      // this.item_ = this.generalVal(
      // 	this.wbcItem,
      // 	this.itemAccessebility,
      // 	// this.lg
      // 	// this.lang
      // 	// this.lang
      // );

      // this.item_.options.props['value']=this?.item_?.options?.val||false

      // if(this?.item?.options?.val){ this.item.options.val=this.item?.options?.props?.value||'' }

      //  if(this.item_?.options?.props?.value){this.item_.options.val=this.item_.options.props.value;}

      //         this.$watch(
      //             // 'item_.options.props',
      //                 // thiss=>thiss.item_,
      //                 thiss=>{

      //                     return thiss?._data?.item_?.options?.html
      //                 },
      //         function (newVal, oldVal) {
      //             // alert(99999999999)

      //             // alert('changed fromggggg ' + oldVal + ' to ' + newVal);
      //             // newVal.options.key=this.randomKey('auto');
      //             this.item_.options.key = this.randomKey('attr')
      //         },
      // // { deep: true }

      //     )
      //                  this.$watch(
      //             // 'item_.options.props',
      //                 // thiss=>thiss.item_,
      //                 thiss=>{

      //                     return thiss?._data?.item_?.options?.lang
      //                 },
      //         function (newVal, oldVal) {
      //             // alert(88888888)

      //             // alert('changed fromggggg ' + oldVal + ' to ' + newVal);
      //             // newVal.options.key=this.randomKey('auto');
      //             this.item_.options.key = this.randomKey('attr')
      //         },
      // // { deep: true }

      //     )

      // debugger;

      // console.log('ffffffffffffffffffffffffff',this.item)

      // this.watch_ = this.generalVal(
      // 	this.item?.watch,
      // 	this.itemAccessebility,
      // 	// this.lg
      // 	// this.lang
      // 	// lg
      // );

      for (let aWatch of this.item_?.watch || []) {
        // console.log('ffffffffffffffffffffffffff0000000',this.item,aWatch)
        // console.log('ffffffffffffffffffffffffff1111111',aWatch[0])
        // aWatch[0]=(a)=>aWatch[0](this.itemAccessebility);
        let theWatched;
        let aWatch_func = (newVal, oldVal) =>
          aWatch[1](this.itemAccessebility, newVal, oldVal);
        // let aWatch_func =  aWatch[1];
        if (aWatch[0] instanceof Function) {
          theWatched = () => aWatch[0](this.itemAccessebility);
          // this.$watch(()=> aWatch[0](this.itemAccessebility),aWatch_func,...aWatch.slice(2));
        } else if (typeof aWatch[0] == "string") {
          theWatched = "itemAccessebility." + aWatch[0];
          // this.$watch('itemAccessebility.'+aWatch[0],...aWatch.slice(1));
        } else if (Array.isArray(aWatch[0])) {
          theWatched = () =>
            aWatch[0].map((e) => {
              if (e instanceof Function) {
                return e(this.itemAccessebility);
              } else if (typeof e == "string") {
                // console.log('ffffffffffffffffffffffffff2222222',this.itemAccessebility,e)
                return eval("this.itemAccessebility." + e);
              }
            });
        }
        this.$watch(theWatched, aWatch_func, ...aWatch.slice(2));
        // this.$watch( ...aWatch);
      }

      // this.$watch(
      // 	(v) => {
      // 		console.log('kkkkkkkkkkkkkkkkk', v, v.$data.item_, v.item_)
      // 		// if(['string','number','boolean'].includes(typeof v.$data.item_)||Array.isArray(v.$data.item_))
      // 			return v?.item_?.options
      // 	},
      // 	function (newValue, oldValue) {
      // 		alert('main main content to addddddddddddddddg')

      // 		// this.item_ = this.toWBC(this.clone(newValue))
      // 			// (this.item_ = this.generalVal(

      // 			// 	this.wbcItem,
      // 			// 	this.itemAccessebility,
      // 			// 	// this.lg
      // 			// 	this.lang
      // 			// ));
      // 	},
      // 	{ deep: true }
      // );

      // this.$store.watch(
      // 	(v) => {
      // 		if (Array.isArray(v.item_)) {
      // 			alert(v.item_)
      // 			return JSON.stringify(v.item_)
      // 		}
      // 	},
      // 	(newValue, oldValue) => {
      // 		alert('hhhhhhhhhhhhhhhhhhhhhhhhhhhhh')

      // 	},
      // 	{
      // 		immediate: true, // To trigger the handler immediately on initial mount
      // 	}
      // )
    },
  };

  app.component("WBHtml", WBHtml);
  app.component("WBLink", WBLink);
  app.component("JsonViewer", JsonViewer);
  app.component("WBDataViewer", WBDataViewer);
  // app.component("// VueOfficePdf",VueOfficePdf);
  app.component("VueOfficeExcel", VueOfficeExcel);
  app.component("VueOfficeDocx", VueOfficeDocx);
  app.component("VueDocPreview", VueDocPreview);
  app.component("pdf", pdfvuer);
  app.component("WBAlert", WBAlert);
  app.component("VCM", codemirror);

  let WBC_ = app.extend(wbcObj);

  app.component("WBC", WBC_);

  console.log(
    "app.component :>> ",
    app?.components,
    app,
    app?.$options,
    WBC_?.components,
    WBC_?.$options,
    WBC_?.$options?.components
  );
  Object.assign(app.prototype, methodsObj); // Updates obj1 with properties from o

  Object.assign(app.options.components, WBC_.options.components); // Updates obj1 with properties from o

  WBC = WBC_;
}

if (process.env.NODE_ENV !== "production") {
  // Vue.component("WBC", WBC);
  install(Vue, { vuetify, router, store /*components, vuetifyModule */ });

  global.Vue = Vue;
  let v = new Vue({
    router, // Add the router
    store, // Add the store
    vuetify,
    render: (h) => h(App),
  });
  global.v = v;
  v.$mount("#app");

  // // Highlight code blocks after mounting
  // Vue.prototype.$hljs = hljs;
  // Vue.directive("highlight", (el) => {
  //   const blocks = el.querySelectorAll("pre code");
  //   blocks.forEach((block) => {
  //     hljs.highlightElement(block);
  //   });
  // });
}

import * as methodsObj from "./globals/variables";

export default {
  ...methodsObj,
  install,
  WBC,
  WBHtml,
  WBLink,
  WBDataViewer,
  WBAlert,
  JsonViewer,
  MarkdownIt,
  vueResource,
  VueOfficeExcel,
  VueOfficeDocx,
  VueDocPreview,
  VueCodemirror,
  TurnDown,
  bootstrabModule,
  vuetifyModule,
  VueCookies,
  VueMoment,
  VueCryptojs,
};
