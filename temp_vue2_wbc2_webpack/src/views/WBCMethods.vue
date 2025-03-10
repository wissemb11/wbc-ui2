<template>
  <div id="apppp">
    <h1>WBC methods</h1>
    [ "$cookies", "Http", "aesDec", "aesEnc", "anyMatchInArray", "camelToKebab",
    "capitalizeWords", "clone", "colorLibelle", "compFunc", "copyToClipboard",
    "flattenArray", "formatToStr", "generalVal", "getAttrs", "getObjectDepth",
    "getRandomInt", "isDate", "isDynamicImport", "isEmpty", "isIterable", "isNonEmpty",
    "isPlainObject", "isPromise", "isVnode", "mergeObjects", "minsToHours", "objLang",
    "parse", "project", "queryData", "raise", "randomColor", "randomKey", "strToObj",
    "stringToJson", "stringify", "titleCase", "toTitleCase", "today", "todayISO",
    "todayStr", "transfObj", "validators", "vuetifyColorList", "$inspect" ]
    <h1>Uses Examples of WBC methods</h1>
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
  </div>
</template>

<script>
// import { WBC } from "wbc-ui2";
// console.log(WBC);

export default {
  name: "WBCMethods",
  data() {
    return {};
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
