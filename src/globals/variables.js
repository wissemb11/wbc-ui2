import { Http } from "vue-resource";

// let todayy = new Date('2021-09-06');
let today = new Date();

// today = todayy;
// alert(new Date().NextDay(1));
let todayISO = today.toISOString(),
  todayStr = todayISO.slice(0, 10),
  vuetifyColorList = [
    "red",
    "red lighten-5",
    "red lighten-4",
    "red lighten-3",
    "red lighten-2",
    "red lighten-1",
    "red darken-1",
    "red darken-2",
    "red darken-3",
    "red darken-4",
    "red accent-1",
    "red accent-2",
    "red accent-3",
    "red accent-4",
    "pink",
    "pink lighten-5",
    "pink lighten-4",
    "pink lighten-3",
    "pink lighten-2",
    "pink lighten-1",
    "pink darken-1",
    "pink darken-2",
    "pink darken-3",
    "pink darken-4",
    "pink accent-1",
    "pink accent-2",
    "pink accent-3",
    "pink accent-4",
    "purple",
    "purple lighten-5",
    "purple lighten-4",
    "purple lighten-3",
    "purple lighten-2",
    "purple lighten-1",
    "purple darken-1",
    "purple darken-2",
    "purple darken-3",
    "purple darken-4",
    "purple accent-1",
    "purple accent-2",
    "purple accent-3",
    "purple accent-4",
    "deep-purple",
    "deep-purple lighten-5",
    "deep-purple lighten-4",
    "deep-purple lighten-3",
    "deep-purple lighten-2",
    "deep-purple lighten-1",
    "deep-purple darken-1",
    "deep-purple darken-2",
    "deep-purple darken-3",
    "deep-purple darken-4",
    "deep-purple accent-1",
    "deep-purple accent-2",
    "deep-purple accent-3",
    "deep-purple accent-4",
    "indigo",
    "indigo ",
    "indigo lighten-5",
    "indigo lighten-4",
    "indigo lighten-3",
    "indigo lighten-2",
    "indigo lighten-1",
    "indigo darken-1",
    "indigo darken-2",
    "indigo darken-3",
    "indigo darken-4",
    "indigo accent-1",
    "indigo accent-2",
    "indigo accent-3",
    "indigo accent-4",
    "blue",
    "blue ",
    "blue lighten-5",
    "blue lighten-4",
    "blue lighten-3",
    "blue lighten-2",
    "blue lighten-1",
    "blue darken-1",
    "blue darken-2",
    "blue darken-3",
    "blue darken-4",
    "blue accent-1",
    "blue accent-2",
    "blue accent-3",
    "blue accent-4",
    "light-blue",
    "light-blue ",
    "light-blue lighten-5",
    "light-blue lighten-4",
    "light-blue lighten-3",
    "light-blue lighten-2",
    "light-blue lighten-1",
    "light-blue darken-1",
    "light-blue darken-2",
    "light-blue darken-3",
    "light-blue darken-4",
    "light-blue accent-1",
    "light-blue accent-2",
    "light-blue accent-3",
    "light-blue accent-4",
    "cyan",
    "cyan ",
    "cyan lighten-5",
    "cyan lighten-4",
    "cyan lighten-3",
    "cyan lighten-2",
    "cyan lighten-1",
    "cyan darken-1",
    "cyan darken-2",
    "cyan darken-3",
    "cyan darken-4",
    "cyan accent-1",
    "cyan accent-2",
    "cyan accent-3",
    "cyan accent-4",
    "teal",
    "teal ",
    "teal lighten-5",
    "teal lighten-4",
    "teal lighten-3",
    "teal lighten-2",
    "teal lighten-1",
    "teal darken-1",
    "teal darken-2",
    "teal darken-3",
    "teal darken-4",
    "teal accent-1",
    "teal accent-2",
    "teal accent-3",
    "teal accent-4",
    "green",
    "green ",
    "green lighten-5",
    "green lighten-4",
    "green lighten-3",
    "green lighten-2",
    "green lighten-1",
    "green darken-1",
    "green darken-2",
    "green darken-3",
    "green darken-4",
    "green accent-1",
    "green accent-2",
    "green accent-3",
    "green accent-4",
    "light-green",
    "light-green ",
    "light-green lighten-5",
    "light-green lighten-4",
    "light-green lighten-3",
    "light-green lighten-2",
    "light-green lighten-1",
    "light-green darken-1",
    "light-green darken-2",
    "light-green darken-3",
    "light-green darken-4",
    "light-green accent-1",
    "light-green accent-2",
    "light-green accent-3",
    "light-green accent-4",
    "lime",
    "lime ",
    "lime lighten-5",
    "lime lighten-4",
    "lime lighten-3",
    "lime lighten-2",
    "lime lighten-1",
    "lime darken-1",
    "lime darken-2",
    "lime darken-3",
    "lime darken-4",
    "lime accent-1",
    "lime accent-2",
    "lime accent-3",
    "lime accent-4",
    "yellow",
    "yellow ",
    "yellow lighten-5",
    "yellow lighten-4",
    "yellow lighten-3",
    "yellow lighten-2",
    "yellow lighten-1",
    "yellow darken-1",
    "yellow darken-2",
    "yellow darken-3",
    "yellow darken-4",
    "yellow accent-1",
    "yellow accent-2",
    "yellow accent-3",
    "yellow accent-4",
    "amber",
    "amber ",
    "amber lighten-5",
    "amber lighten-4",
    "amber lighten-3",
    "amber lighten-2",
    "amber lighten-1",
    "amber darken-1",
    "amber darken-2",
    "amber darken-3",
    "amber darken-4",
    "amber accent-1",
    "amber accent-2",
    "amber accent-3",
    "amber accent-4",
    "orange",
    "orange ",
    "orange lighten-5",
    "orange lighten-4",
    "orange lighten-3",
    "orange lighten-2",
    "orange lighten-1",
    "orange darken-1",
    "orange darken-2",
    "orange darken-3",
    "orange darken-4",
    "orange accent-1",
    "orange accent-2",
    "orange accent-3",
    "orange accent-4",
    "deep-orange",
    "deep-orange ",
    "deep-orange lighten-5",
    "deep-orange lighten-4",
    "deep-orange lighten-3",
    "deep-orange lighten-2",
    "deep-orange lighten-1",
    "deep-orange darken-1",
    "deep-orange darken-2",
    "deep-orange darken-3",
    "deep-orange darken-4",
    "deep-orange accent-1",
    "deep-orange accent-2",
    "deep-orange accent-3",
    "deep-orange accent-4",
    "brown",
    "brown ",
    "brown lighten-5",
    "brown lighten-4",
    "brown lighten-3",
    "brown lighten-2",
    "brown lighten-1",
    "brown darken-1",
    "brown darken-2",
    "brown darken-3",
    "brown darken-4",
    "blue-grey",
    "blue-grey ",
    "blue-grey lighten-5",
    "blue-grey lighten-4",
    "blue-grey lighten-3",
    "blue-grey lighten-2",
    "blue-grey lighten-1",
    "blue-grey darken-1",
    "blue-grey darken-2",
    "blue-grey darken-3",
    "blue-grey darken-4",
    "grey",
    "grey ",
    "grey lighten-5",
    "grey lighten-4",
    "grey lighten-3",
    "grey lighten-2",
    "grey lighten-1",
    "grey darken-1",
    "grey darken-2",
    "grey darken-3",
    "grey darken-4",
    "shades",
    "black",
    "white",
    "transparent",
  ],
  colorLibelle = [
    "red",
    "pink",
    "purple",
    "indigo",
    "blue",
    "cyan",
    "teal",
    "green",
    "lime",
    "yellow",
    "amber",
    "orange",
    "brown",
    "grey",
    "shades",
    "white",
  ];

let randomColor = function () {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// let randomKey = (par, integer = 1000) => {
let randomKey = function (par, integer = 1000) {
  let max = 90,
    min = 65;
  let nb1 = Math.floor(Math.random() * (max - min) + min),
    nb2 = Math.floor(Math.random() * (max - min) + min),
    nb = Math.floor(Math.random() * integer);
  return `${par}${String.fromCharCode(nb1, nb2)}${nb}`;
};
let capitalizeWords = (v) =>
  ` ${v}`
    .replace(/_/g, " ")
    .replace(/ ./g, (str) => str.toUpperCase())
    .trim();
// let getRandomInt = function (max) {
// 	return Math.floor(Math.random() * max);
// };

let isVnode = function (x) {
  if (
    typeof x === "object" &&
    x?.hasOwnProperty("context") &&
    x?.hasOwnProperty("tag")
  ) {
    return true;
  } else {
    return false;
  }
};
let isDate = function (d) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (d.match(regex) === null) {
    return false;
  }

  const date = new Date(d);

  const timestamp = date.getTime();

  if (typeof timestamp !== "number" || Number.isNaN(timestamp)) {
    return false;
  }

  return date.toISOString().startsWith(d);
};

let getRandomInt = function (min = 0, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

let stringToJson = function (input) {
  // console.log("999999999999", input, typeof input);
  if (typeof input == "object") {
    return [input];
  }
  // input = JSON.parse(JSON.stringify(input));
  var result = [];

  //replace leading and trailing [], if present

  // console.log(888888888888888888888888888888888,input)
  input = input.replace(/^\[/, "");
  input = input.replace(/\]$/, "");

  //change the delimiter to

  input = input.replace(/},{/g, "};;;{");
  // preserve newlines, etc - use valid JSON
  //https://stackoverflow.com/questions/14432165/uncaught-syntaxerror-unexpected-token-with-json-parse
  input = input.replace(/\\n/g, "\\n");
  input = input
    .replace(/NaN/g, "null")

    .replace(/\\'/g, "\\'")
    .replace(/\\"/g, '\\"')
    .replace(/\\&/g, "\\&")
    .replace(/\\r/g, "\\r")
    .replace(/\\t/g, "\\t")
    .replace(/\\b/g, "\\b")
    .replace(/\\f/g, "\\f");
  // remove non-printable and other non-valid JSON chars
  // input = input.replace(/[\u0000-\u0019]+/g, "");
  input = input.replace("\x00", "");
  input = input.replace("\x19", "");

  let inputs = input.split(";;;");
  inputs.forEach((element) => {
    if (element !== "") {
      // console.log(99999999999999999, element);
      try {
        // statements
        result.push(JSON.parse(element));
      } catch (e) {
        // statements
        // console.log(element);
        // console.log(e);
      }
    }
  });
  return result;
};

let compFunc = function (obj = {}) {
  let theComp = {
    comp: obj?.comp || "div",
    // comp: "VProgressLinear",
    props: {
      color: "grey",
      indeterminate: true,
      size: "50",
      class: "m-50 p-50",
      html: "[[loading...|transparent]]",
      ...obj,
    },
    wrap: obj.wrap || "div",
  };

  return theComp;
};
let isIterable = function (obj) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === "function";
};

let strToObj = function (input) {
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
};

let getAttrs = function (o) {
  console.log(Object.keys(o?.__proto__ || {}));
  let funcProperties_0Args = Object.keys({
    ...o,
    ...(o?.__proto__ || {}),
  }).filter((e) => typeof o[e] === "function" && o[e].length === 0);
  let funcProperties_moreArgs = Object.keys({
    ...o,
    ...(o?.__proto__ || {}),
  }).filter((e) => typeof o[e] === "function" && o[e].length > 0);
  let boolProperties = Object.keys({ ...o, ...(o?.__proto__ || {}) }).filter(
    (e) => typeof o[e] === "boolean"
  );
  let stringProperties = Object.keys({ ...o, ...(o?.__proto__ || {}) }).filter(
    (e) => typeof o[e] === "string"
  );
  let numberProperties = Object.keys({ ...o, ...(o?.__proto__ || {}) }).filter(
    (e) => typeof o[e] === "number"
  );
  let arrayProperties = Object.keys({ ...o, ...(o?.__proto__ || {}) }).filter(
    (e) => Array.isArray(o[e])
  );
  let objectProperties = Object.keys({ ...o, ...(o?.__proto__ || {}) }).filter(
    (e) =>
      typeof o[e] === "object" &&
      !Array.isArray(o[e]) &&
      o[e] !== null &&
      o[e] !== undefined
  );

  console.log(
    "\n================boolProperties=",
    boolProperties,
    "================\n"
  );
  boolProperties.forEach((k) => {
    let separteurProp = "=".repeat(10) + k + "-".repeat(10);
    console.log(separteurProp);
    console.log(`o[${k}]=`, o[k]);
  });
  console.log(
    "\n================stringProperties=",
    stringProperties,
    "================\n"
  );
  stringProperties.forEach((k) => {
    let separteurProp = "_".repeat(10) + k + "-".repeat(10);
    console.log(separteurProp);
    console.log(`o[${k}]=`, o[k]);
  });
  console.log(
    "\n================numberProperties=",
    numberProperties,
    "================\n"
  );
  numberProperties.forEach((k) => {
    let separteurProp = "+".repeat(10) + k + "-".repeat(10);
    console.log(separteurProp);
    console.log(`o[${k}]=`, o[k]);
  });
  console.log(
    "\n================arrayProperties=",
    arrayProperties,
    "================\n"
  );
  arrayProperties.forEach((k) => {
    let separteurProp = "%".repeat(10) + k + "-".repeat(10);
    console.log(separteurProp);
    console.log(`o[${k}]=`, o[k]);
  });
  console.log(
    "\n================objectProperties=",
    objectProperties,
    "================\n"
  );
  objectProperties.forEach((k) => {
    let separteurProp = "&".repeat(10) + k + "-".repeat(10);
    console.log(separteurProp);
    console.log(`o[${k}]=`, o[k]);
  });
  // 	console.log('\n================funcProperties_0Args=', funcProperties_0Args, '================\n');
  // 	nonFuncProperties.forEach((k) => {
  // 		let separteurProp = "-".repeat(10) + k + "-".repeat(10);

  // 		console.log(separteurProp);
  // 		try {

  // 			console.log(`o[${k}]=`, o[k]);
  // 		} catch (error) {
  // console.log(`o[${k}]=`, error);

  // 		}

  // 	});
  console.log(
    "\n================funcProperties_0Args=",
    funcProperties_0Args,
    "================\n"
  );
  funcProperties_0Args.forEach((k) => {
    let separateurFunc = "*".repeat(10) + k + "*".repeat(10);
    if (typeof o[k] === "function") {
      console.log(separateurFunc);

      try {
        console.log(`o['${k}']()=`, o[k]());
      } catch (error) {
        console.log(`o['${k}']()=`, error);
      }
      console.log(`src o['${k}']()=`, o[k].toString());
    }
  });
  console.log(
    "\n================funcProperties_moreArgs=",
    funcProperties_moreArgs,
    "================\n"
  );
  funcProperties_moreArgs.forEach((k) => {
    {
      let separateurFunc = "*".repeat(10) + k + "*".repeat(10);
      console.log(separateurFunc);
      console.log(`o[${k}] takes ${o[k].length} arguments`);

      try {
        console.log(`====> o['${k}']()=`, o[k]());
      } catch (error) {
        console.log(`o['${k}']()=`, error);
      }
      console.log(`src o['${k}']()=`, o[k].toString());
    }
  });
};
let anyMatchInArray = function (target, toMatch) {
  "use strict";

  var found, targetMap, i, j, cur;

  found = false;
  targetMap = {};

  for (i = 0, j = target.length; i < j; i++) {
    cur = target[i];
    targetMap[cur] = true;
  }
  for (i = 0, j = toMatch.length; !found && i < j; i++) {
    cur = toMatch[i];
    found = !!targetMap[cur];
  }

  return found;
};

let queryData = function ({
  obj_request,
  encFn = null,
  decFn = null,
  cacheName = null /* ,cacheObj=null */,
}) {
  let aColor = randomColor();
  if (!obj_request || Object.keys(obj_request).length === 0) return null;
  let {
    data,
    url,
    head,
    method = "get",
    actions = [],
    // ...extra_obj
  } = obj_request;
  let theEncriptedSentData = data;
  if (encFn && typeof encFn == "function") {
    theEncriptedSentData = encFn(obj_request);
  }

  // console.log(
  // 	'vvvvvvvvvvvvvvvvvvnnnnnnnnnnn',
  // 	cacheName,
  // 	obj_request,
  // 	cacheObj,
  // 	!cacheObj
  // );

  let promise;
  let fromCach;

  let theEncriptedSentDataObj = theEncriptedSentData;
  // if (cacheName)
  // if(!cacheObj){
  if (
    localStorage.getItem(`${cacheName}_query`) == theEncriptedSentData &&
    localStorage.getItem(`${cacheName}_resp`)
  ) {
    alert(`THE SAMMMMMMMMMMMMMMMMMMMMMMME as ${cacheName}_query`);
    fromCach = `From Cache "${cacheName}_query" instead of `;
    promise = new Promise((resolve, reject) => {
      resolve({ body: localStorage.getItem(`${cacheName}_resp`) }),
        reject("error");
    });
  } else {
    theEncriptedSentDataObj = {
      body: theEncriptedSentData,
    };

    // let urlServer = this.urlServer + url;
    let urlServer = url;

    promise = Http[method](urlServer, theEncriptedSentDataObj, head); // a promise
    if (cacheName) {
      localStorage.setItem(`${cacheName}_query`, theEncriptedSentData);
      promise.then((response) => {
        localStorage.setItem(`${cacheName}_resp`, response.body);
      });
    }
  }
  // }

  // else {
  // 	console.log(
  // 		'caachhhhhhhhhhhhhhhhe',
  // 		cacheName,
  // 		`${cacheName}_query`,
  // 		cacheObj,
  // 		cacheObj[`${cacheName}_query`],
  // 		cacheObj?.[`${cacheName}_resp`],
  // 		cacheObj?.login_query
  // 	);

  // if (
  // 	cacheObj?.[`${cacheName}_query`] == theEncriptedSentData &&
  // 	cacheObj?.[`${cacheName}_resp`]
  // ) {
  // 	alert('THE SAMMMMMMMMMMMMMMMMMMMMMMME as stored cache');
  // 	fromCach = 'From Stored Cache instead of';
  // 	promise = new Promise((resolve, reject) => {
  // 		resolve({ body: cacheObj[`${cacheName}_resp`] }), reject('error');
  // 	});
  // } else {
  // 	theEncriptedSentDataObj = {
  // 		body: theEncriptedSentData,
  // 	};

  // 	// let urlServer = this.urlServer + url;
  // 	let urlServer = url;

  // 	promise = Http[method](urlServer, theEncriptedSentDataObj, head); // a promise
  // 	if (cacheName) {
  // 		cacheObj[`${cacheName}_query`] = theEncriptedSentData;
  // 		promise.then((response) => {
  // 			cacheObj[`${cacheName}_resp`] = response.body;
  // 		});
  // 	}
  // }
  // }

  console.log(
    `%c__________${cacheName || ""}_query__Request: ${
      fromCach || ""
    }  ${url}___(${method})__________\n`,
    `background-color:${aColor};color:blue;font-size:20px;`
  );
  console.log(
    `%c***** theSentData WITHOUT ENCRIPTION as obj:*****\n`,
    `background-color:${aColor};color:blue;font-size:15px;`,
    data
  );
  console.log(
    "%c***** theSentData WITH ENCRIPTION: Full Data sent to server*****\n",
    `background-color:${aColor};color:blue;font-size:15px;`,
    { theEncriptedSentDataObj, url, method }
  );
  console.log(
    `%c***** theSentData as str:*****\n`,
    `background-color:${aColor};color:blue;font-size:15px;`,
    JSON.stringify(data)
  );
  console.log(
    `%c____________________End__________Request____________________`,
    `background-color:${aColor};color:blue;font-size:15px;`
  );

  for (let aRespAction of actions) {
    promise = promise
      .then((response) => {
        let theResp = response;
        // alert('resolved');
        console.log("resolved");

        if (decFn && typeof decFn == "function") {
          theResp = decFn(response, obj_request);
        }

        data = stringToJson(theResp)[0];

        console.log(
          `%c\n\n\n__________${cacheName || ""}_Response__: ${
            fromCach || ""
          } ${url}___(${method})__________\n`,
          `background-color:${aColor};color:green;font-size:20px;`,
          "response from server",
          response
        );

        response["data"] = data;

        console.log(
          "%c========>decrypted response from server",
          `background-color:${aColor};color:green;font-size:10px;`,
          response
        );
        console.log(
          "%c__________End__________",
          `background-color:${aColor};color:green;font-size:20px;`
        );
        return response;
        //  return Promise.resolve(response); // Return a promise
      })
      .then(aRespAction?.[0])
      .catch((error) => {
        console.log(
          `%c\n\n__________Failed response: ${
            fromCach || ""
          } ${url}___(${method})__________\n========>`,
          `background-color:${aColor};color:red;font-size:20px;`,
          "fail response",
          error
        );
        console.log(
          "%c__________End__________",
          `background-color:${aColor};color:red;font-size:20px;`
        );
        if (error?.status == 401 && error?.data?.detail) {
          alert(error?.data?.detail);
        }
        // return error;
        return Promise.reject(error); // Return a promise
      })
      .catch(aRespAction?.[1]);
  }

  return promise;
};

// let clone = function (obj) {
//   // Handle the 3 simple types, and null or undefined
//   if (null == obj || "object" != typeof obj) return obj;

//   // Handle Date
//   if (obj instanceof Date) {
//     var copy = new Date();
//     copy.setTime(obj.getTime());
//     return copy;
//   }

//   // Handle Array
//   if (obj instanceof Array) {
//     var copy = [];
//     for (var i = 0, len = obj.length; i < len; i++) {
//       copy[i] = clone(obj[i]);
//     }
//     return copy;
//   }

//   // Handle Object

//   // console.log('tttttttttt', attr,typeof obj,obj,isVnode)

//   if (obj == {} || obj?._isVue || obj?.$options || isVnode) {
//     return { ...obj };
//   } else if (obj instanceof Object) {
//     var copy = {};
//     for (var attr in obj) {
//       // console.log('tttttttttt', attr,typeof obj,obj)
//       if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
//     }
//     return copy;
//   }

//   throw new Error("Unable to copy obj! Its type isn't supported.");
// };

let clone = function (obj, visited = new WeakMap()) {
  // Handle the 3 simple types, and null or undefined
  if (null == obj || typeof obj !== "object") return obj;

  // If obj is a Vue instance or contains internal Vue properties, skip cloning and return a message
  if (
    obj._isVue ||
    obj.$options ||
    obj.__v_isVNode ||
    obj._scope ||
    obj._effects ||
    obj.vm
  ) {
    return "vue object cannot be cloned"; // Return a string for Vue components or objects with internal Vue properties
  }

  // Handle Date
  if (obj instanceof Date) {
    const copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  if (Array.isArray(obj)) {
    const copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = clone(obj[i], visited);
    }
    return copy;
  }

  // Handle Object (deep cloning)
  if (visited.has(obj)) {
    return visited.get(obj); // Prevent infinite loops for circular references
  }

  // Mark the object as visited
  const copy = {};
  visited.set(obj, copy); // Mark this object to prevent circular reference

  // Clone the object's properties
  for (let attr in obj) {
    // Safely check if the property belongs to the object itself (and not its prototype)
    if (Object.prototype.hasOwnProperty.call(obj, attr)) {
      // Clone each property recursively
      copy[attr] = clone(obj[attr], visited);
    }
  }

  return copy;
};

let excludeList = [
  // 'item-text',
  // 'itemText',
  // 'item-value',
  // 'itemValue',
  //  'item-to',
  // 'itemTo',
  // 'to',
  "error",
  "lang",
  // 'comp',
  "val",
  // 'value',
  "txt",
  "json",
  "blob",
  "text",
  // 'alert',
  // "init",
  // 'tracker',
  // 'items',
  // 'hover',
  "encFn",
  "decFn",

  "resolved",
  "owners",
  // "output",
  // "output_",
  "filter",
  "alert",
  // 'rules',
  // 'watch',
  // 'children',
  "context",
  // 'rules',
];

// let generalVal = function (
// 	obj,
// 	thiss = {},
// 	lg = '_en',
// 	listToExclude = excludeList
// ) {

// 	if (!(obj instanceof Object) ||(obj instanceof Object&& Object.keys(obj).length==0)|| obj === null) {
// 		return obj;
// 	}

// 	// else if (typeof obj === 'function') {
// 	// 	if (obj.length >= 2) {
// 	// 		const originalVV = obj; // store the original function in a temporary variable
// 	// 		obj= (...rest) => {
// 	// 			return originalVV(thiss, ...rest);
// 	// 		};

// 	// 		// obj= (...rest)=>{obj(thiss,...rest)}
// 	// 	} /* else if (obj.length === 1) {
// 	// 		let newVal = obj(thiss);
// 	// 		if (newVal instanceof Object) {
// 	// 			if (newVal.hasOwnProperty(lg)) {
// 	// 				obj= newVal[lg];
// 	// 			} else {
// 	// 				obj= generalVal(newVal, thiss, lg, listToExclude);
// 	// 			}
// 	// 		} else {
// 	// 			obj= newVal;
// 	// 		}
// 	// 	}
// 	// 	*/
// 	// }

// 	else if (Array.isArray(obj)) {
// 		obj.forEach((item, index) => {
// 			if (
// 				typeof item === 'object' &&
// 				item !== null &&
// 				!Array.isArray(item) &&
// 				typeof item !== 'function' &&
// 				item.hasOwnProperty(lg)
// 			) {
// 				obj[index] = item[lg];
// 			} else {
// 				// console.log('9999999999999888888',item, index,generalVal(item, thiss, lg, listToExclude))
// 				obj[index] = generalVal(item, thiss, lg, listToExclude);
// 			}
// 		});
// 	}

// 	else if(obj instanceof Object) {
// 		if (obj.hasOwnProperty(lg)) {
// 			obj = obj[lg];
// 			return obj;
// 		} else {
// 			// console.log('ffffffffffffff',obj)
// 			for (const [key, value] of Object.entries(obj)) {
// 				// console.log('ggggggggggggggg', key, value,lg);
// 				if (
// 					typeof value === 'object' &&
// 					value !== null &&
// 					!Array.isArray(value) &&
// 					typeof value !== 'function'
// 					&& value.hasOwnProperty(lg)
// 					) {
// 						// console.log(key, value,lg);
// 					obj[key] = value?.[lg];
// 				} else if (!listToExclude.includes(key)) {
// 					// console.log('bbbbbbbbbbbbbbbbbbbbb',key, value)
// 					if (typeof value === 'function') {
// 						if (value.length >= 2) {
// 							const originalV = value; // store the original function in a temporary variable
// 							obj[key] = (...rest) => {
// 								return originalV(thiss, ...rest);
// 							};

// 							// obj[key] = (...rest)=>{value(thiss,...rest)}
// 						} else if (value.length === 1) {
// 							let newVal = value(thiss);
// 							if (newVal instanceof Object) {
// 								if (newVal.hasOwnProperty(lg)) {
// 									obj[key] = newVal[lg];
// 								} else {
// 									obj[key] = generalVal(newVal, thiss, lg, listToExclude);
// 								}
// 							} else {
// 								obj[key] = newVal;
// 							}
// 						}
// 					} else {
// 						obj[key] = generalVal(value, thiss, lg, listToExclude);
// 					}

// 				}
// 				else {
// 					// console.log(key, value,lg);
// 				obj[key] =value;
// 			}
// 			}
// 		}
// 	}

// 	// else if (typeof obj === 'function') {
// 	// 	if (obj.length >= 2) {
// 	// 		// console.log(77777777777,obj.toString())

// 	// 		const originalF = obj; // store the original function in a temporary variable
// 	// 		obj = (...rest) => {
// 	// 			return originalF(thiss, ...rest);
// 	// 		};

// 	// 		//   obj = (...rest)=>{obj(thiss,...rest)}
// 	// 		// console.log(88888888,obj.toString(),obj(thiss,55))
// 	// 	} else if (obj.length === 1) {
// 	// 		obj = obj(thiss);
// 	// 	} else if (obj.length === 0) {
// 	// 		obj = obj();
// 	// 	} else if (obj instanceof Object) {
// 	// 		if (obj.hasOwnProperty(lg)) {
// 	// 			obj = obj[lg];
// 	// 		} else {
// 	// 			obj = generalVal(obj, thiss, lg, listToExclude);
// 	// 		}
// 	// 	} /*  else {
//     //   return obj;
//     // }  */
// 	// 	return obj;
// 	// }

// 	return obj;
// };

let generalVal = function (
  obj,
  thiss = {},
  lg = "_en",
  listToExclude = excludeList
) {
  if (
    !(obj instanceof Object) ||
    (obj instanceof Object && Object.keys(obj).length == 0) ||
    !obj ||
    (Array.isArray(obj) && obj.length == 0) ||
    isEmpty(obj) ||
    isVnode(obj)
  ) {
    return obj;
  } else if (typeof obj === "function") {
    if (obj.length >= 1) {
      const originalVV = obj; // store the original function in a temporary variable
      return (...rest) => {
        return originalVV(thiss, ...rest);
      };
      // obj= (...rest)=>{obj(thiss,...rest)}
    } else {
      return obj;
    }

    /* else if (obj.length === 1) {
			let newVal = obj(thiss);
			if (newVal instanceof Object) {
				if (newVal.hasOwnProperty(lg)) {
					obj= newVal[lg];
				} else {
					obj= generalVal(newVal, thiss, lg, listToExclude);
				}
			} else {
				obj= newVal;
			}
		} */
  } else if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      if (!listToExclude.includes(obj[i])) {
        obj[i] = generalVal(obj[i], thiss, lg, listToExclude);
      }
    }
    return obj;

    // let arr=[]
    // for (let item of obj){
    // 		arr.push(generalVal(item, thiss, lg, listToExclude))
    // 	}
    // return arr
    // return obj.map((item, index) => generalVal(item, thiss, lg, listToExclude))
    // obj.forEach((item, index) => {
    // 	if (
    // 		typeof item === 'object' &&
    // 		item !== null &&
    // 		!Array.isArray(item) &&
    // 		typeof item !== 'function' &&
    // 		item.hasOwnProperty(lg)
    // 	) {
    // 		obj[index] = item[lg];
    // 	} else {
    // 		// console.log('9999999999999888888',item, index,generalVal(item, thiss, lg, listToExclude))
    // 		obj[index] = generalVal(item, thiss, lg, listToExclude);
    // 	}
    // });
  }

  // else if(obj instanceof Object && obj.hasOwnProperty(lg)) {
  // 	return obj[lg];
  // }
  else if (obj instanceof Object) {
    let obj_ = obj;
    // let obj_=clone(obj)
    // if (obj.hasOwnProperty(lg)) {
    // 	obj_ = obj_[lg];
    // 	// return obj;
    // } else {
    // console.log('ffffffffffffff', obj_, Object.entries(obj_));
    for (const [key, value] of Object.entries(obj_)) {
      // console.log('ggggggggggggggg', key, value);
      /* if (
					typeof value === 'object' &&
					value !== null &&
					!Array.isArray(value) &&
					typeof value !== 'function' 
					&& value.hasOwnProperty(lg)
					) {
						// console.log(key, value,lg);
					obj_[key] = value?.[lg];
				} else  */ if (!listToExclude.includes(key)) {
        // console.log('bbbbbbbbbbbbbbbbbbbbb',key, value)
        if (typeof value === "function") {
          if (value.length >= 2) {
            const originalV = value; // store the original function in a temporary variable
            obj_[key] = (...rest) => {
              return originalV(thiss, ...rest);
            };

            // obj_[key] = (...rest)=>{value(thiss,...rest)}
          } else if (value.length === 1) {
            let newVal = value(thiss);
            if (newVal instanceof Object) {
              if (newVal.hasOwnProperty(lg)) {
                obj_[key] = newVal[lg];
              } else {
                obj_[key] = generalVal(newVal, thiss, lg, listToExclude);
              }
            } else {
              obj_[key] = newVal;
            }
          }
        } else {
          obj_[key] = generalVal(value, thiss, lg, listToExclude);
        }
      } else {
        // console.log(key, value,lg);
        obj_[key] = value;
      }
    }
    // }
    return obj_;
  }

  // else if (typeof obj === 'function') {
  // 	if (obj.length >= 2) {
  // 		// console.log(77777777777,obj.toString())

  // 		const originalF = obj; // store the original function in a temporary variable
  // 		obj = (...rest) => {
  // 			return originalF(thiss, ...rest);
  // 		};

  // 		//   obj = (...rest)=>{obj(thiss,...rest)}
  // 		// console.log(88888888,obj.toString(),obj(thiss,55))
  // 	} else if (obj.length === 1) {
  // 		obj = obj(thiss);
  // 	} else if (obj.length === 0) {
  // 		obj = obj();
  // 	} else if (obj instanceof Object) {
  // 		if (obj.hasOwnProperty(lg)) {
  // 			obj = obj[lg];
  // 		} else {
  // 			obj = generalVal(obj, thiss, lg, listToExclude);
  // 		}
  // 	} /*  else {
  //   return obj;
  // }  */
  // 	return obj;
  // }

  return obj;
};

let objLang = function (obj, lg) {
  if (
    ![
      "number",
      "string",
      "boolean",
      "object",
      "undefined",
      "function",
    ].includes(typeof obj)
  ) {
    console.log("objjjjjjjjjjjjjzzzzz", obj, typeof obj);
  }
  if (
    !(obj instanceof Object) ||
    typeof obj === "function" ||
    (obj instanceof Object && Object.keys(obj).length == 0) ||
    obj === null ||
    obj === undefined ||
    obj === NaN ||
    (obj instanceof Object &&
      (obj._isVue ||
        obj.$options ||
        obj.__v_isVNode ||
        obj._scope ||
        obj._effects ||
        obj.vm))
  ) {
    return obj;
  } else if (Array.isArray(obj)) {
    // console.log('obj :>> ', obj);
    return obj.map((item, index) => {
      return objLang(item, lg);
    });
  } else if (obj instanceof Object && obj.hasOwnProperty(lg)) {
    return objLang(obj[lg], lg);
  } else if (obj instanceof Object) {
    if (obj == {} || obj?._isVue || obj?.$options) {
      return obj;
    } else {
      // return obj;

      let obj_ = { ...obj };
      // console.log(
      // 	'objjjjjjjjjjjjjj',
      // 	obj,
      // 	obj == {},
      // 	lg,
      // 	obj_,
      // 	Object.entries(obj_),
      // 	Object.keys(obj_),
      // 	Object.values(obj_)
      // );
      for (const [key, value] of Object.entries(obj_)) {
        if (!key) {
          console.log("objjjjjjjjjjjjjj", key, value);
          obj_[key] = objLang(value, lg);
        }
      }
      return obj_;
    }
  }
};
let flattenArray = function (arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};
let formatToStr = function (inputString) {
  if (typeof inputString != "string") return inputString;

  return inputString
    .replace(/[_-]/g, " ") // Replace underscores and hyphens with spaces
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert a space between lowercase and uppercase letters
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // Insert a space between consecutive uppercase and lowercase
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
    .replace(/\s+/g, " "); // Replace multiple spaces with a single space
};
let copyToClipboard = function (text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

// let transfObj = function (o, f) {
//   if (Array.isArray(o)) {
//     // If o is an array, apply f to each element recursively
//     return o.map((item) => transfObj(item, f));
//   } else if (typeof o === "object" && o !== null) {
//     // If o is an object, recursively apply f to its values
//     let result = {};
//     for (let key in o) {
//       if (o.hasOwnProperty(key)) {
//         result[key] = transfObj(o[key], f);
//       }
//     }
//     return result;
//   } else {
//     // If o is not an object (i.e., a primitive value), apply f to it
//     return f(o);
//   }
// };
let camelToKebab = function (str) {
  return (
    str
      // Step 1: Convert only the first character to lowercase
      .replace(/^([A-Z])/, (match) => match.toLowerCase())
      // Step 2: Add a hyphen before uppercase letters and convert them to lowercase
      .replace(/([a-z])([A-Z])/g, "$1-$2")
  );
};

let stringify = (o) => {
  const cleanFunctionString = (fn) => fn.toString().replace(/\s+/g, " ").trim(); // Remove newlines and extra spaces

  if (typeof o === "function") {
    return cleanFunctionString(o);
  }
  if (typeof o !== "object" || o === null) {
    return JSON.stringify(o);
  }

  const recursivelyStringify = (obj) => {
    const result = Array.isArray(obj) ? [] : {};
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "function") {
        result[key] = cleanFunctionString(value);
      } else if (typeof value === "object" && value !== null) {
        result[key] = recursivelyStringify(value);
      } else {
        result[key] = value;
      }
    }
    return result;
  };

  return JSON.stringify(recursivelyStringify(o));
};

let parse = (input) => {
  const recursivelyParse = (value) => {
    if (typeof value === "string") {
      try {
        // Try parsing as JSON; if it fails, assume it's a function
        return JSON.parse(value);
      } catch {
        // If parsing fails, assume it's a function string and evaluate it
        return eval(`(${value})`);
      }
    } else if (typeof value === "object" && value !== null) {
      if (Array.isArray(value)) {
        return value.map(recursivelyParse);
      } else {
        const result = {};
        for (const [key, val] of Object.entries(value)) {
          result[key] = recursivelyParse(val);
        }
        return result;
      }
    }
    return value; // Return primitive values as is
  };

  return recursivelyParse(input);
};

let transfObj = (o_, f) => {
  let o = clone(o_);
  // Helper function to check if an object is empty
  const isEmpty = (value) => {
    return (
      value && typeof value === "object" && Object.keys(value).length === 0
    );
  };

  // Helper function to check if it's a VNode (assuming a "tag" property is the distinguishing feature)
  const isVnode = (value) => {
    return value && value.hasOwnProperty("tag");
  };

  // Check if o is a function, empty, or a VNode
  if (typeof o === "function") {
    return o; // If o is a function, return it as is
  }

  if (isEmpty(o) || isVnode(o)) {
    return o; // If o is an empty object or a VNode, return it as is
  }

  // If o is an array, recursively apply transfObj to each element
  if (Array.isArray(o)) {
    for (let i = 0; i < o.length; i++) {
      o[i] = transfObj(o[i], f);
    }
  }
  // If o is an object (but not empty), recursively apply transfObj to each property
  else if (typeof o === "object" && o !== null) {
    for (let key in o) {
      if (o.hasOwnProperty(key)) {
        o[key] = transfObj(o[key], f); // Recurse into object properties
      }
    }
  }
  // If o is a primitive value, apply the function f to it
  else {
    return f(o); // Apply f to the primitive value (string, number, etc.)
  }

  return o; // Return the modified object or array
};

let project = function (obj, objPro) {
  // Helper function to check if an object is empty
  const isEmpty = (value) => {
    return (
      value && typeof value === "object" && Object.keys(value).length === 0
    );
  };

  // Helper function to check if it's a VNode (simplified check for example purposes)
  const isVnode = (value) => {
    return value && value.hasOwnProperty("tag");
  };

  // Helper function to handle primitive types, functions, arrays, and objects
  const transformValue = (value, objPro) => {
    // If it's a function, return it as is
    if (typeof value === "function") {
      return value;
    }

    // If it's an empty object, return it as is
    if (isEmpty(value)) {
      return value;
    }

    // If it's a VNode (simplified check), return it as is
    if (isVnode(value)) {
      return value;
    }

    // If the value is an object or array, recurse into it
    if (typeof value === "object" && value !== null) {
      if (Array.isArray(value)) {
        // If it's an array, map through the elements
        return value.map((item) => transformValue(item, objPro));
      } else {
        // If it's an object, recurse into its properties
        return project(value, objPro); // Recursion will modify obj by reference
      }
    }

    // If the value is a simple type and exists in objPro, return its mapped value
    if (objPro && objPro.hasOwnProperty(value)) {
      return objPro[value];
    }

    // Otherwise, return the value itself (if it's a primitive and not found in objPro)
    return value;
  };

  // Main traversal of obj
  if (Array.isArray(obj)) {
    // If obj is an array, process each element
    for (let i = 0; i < obj.length; i++) {
      obj[i] = transformValue(obj[i], objPro); // Modify the array element directly
    }
  } else if (typeof obj === "object" && obj !== null) {
    // If obj is an object, recurse into its properties
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        obj[key] = transformValue(obj[key], objPro); // Modify the object property directly
      }
    }
  } else {
    // If obj is a primitive, directly transform (if it's a key in objPro)
    obj = transformValue(obj, objPro); // Direct modification of primitive
  }

  return obj;
  // Since obj is passed by reference, no need to return anything
};

let getObjectDepth = function (obj) {
  // alert(JSON.stringify(obj))
  let maxDepth = 0;
  /* if (
		obj === null ||
		obj === {} ||
		obj === undefined ||
		typeof obj !== 'object' ||
		typeof obj == 'function' ||
		!obj
	) {
		return 0;
	} else  */ if (
    		typeof obj === 'object' &&
		!Array.isArray(obj) &&
		obj !== null &&
		!(obj instanceof Function)
    // !isNonEmpty(obj)
  ) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] != {}) {
        // console.log("getObjectDepth :>> ", key, obj, obj[key], typeof obj[key]);
        const depth = getObjectDepth(obj[key]);
        maxDepth = Math.max(maxDepth, depth);
      }
    }
  }

  return maxDepth + 1; // Add 1 to account for the current level
};
function isPlainObject(variable) {
  return (
    typeof variable === "object" &&
    !Array.isArray(variable) &&
    variable !== null &&
    !(variable instanceof Function)
  );
}
// function mergeObjects(obj1, obj2) {
//     for (let key in obj2) {
//         if (obj2.hasOwnProperty(key)) {
//             if (typeof obj2[key] === 'object' && obj2[key] !== null) {
//                 // If the property in obj2 is an object itself, recursively merge it
//                 obj1[key] = mergeObjects(obj1[key] || {}, obj2[key]);
//             } else {
//                 // Otherwise, directly assign the property from obj2 to obj1
//                 obj1[key] = obj2[key];
//             }
//         }
//     }
//     return obj1;
// };

function mergeObjects(obj1, obj2) {
  // Create a new object to hold the merged properties
  const mergedObj = {};

  // Merge properties from obj1 into the new object
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (typeof obj1[key] === "object" && obj1[key] !== null) {
        mergedObj[key] = mergeObjects(obj2?.[key] || {}, obj1[key]); // Recursively merge nested objects
      } else {
        mergedObj[key] = obj1[key];
      }
    }
  }

  // Merge properties from obj2 into the new object
  for (let key in obj2) {
    // console.log('zzzzzzzzzzzzzzzzz',obj2,key)
    if (obj2.hasOwnProperty(key)) {
      if (typeof obj2[key] === "object" && obj2[key] !== null) {
        mergedObj[key] = mergeObjects(obj1?.[key] || {}, obj2[key]); // Recursively merge nested objects
      } else {
        mergedObj[key] = obj2[key];
      }
    }
  }

  // Return the merged object
  return mergedObj;
}
function isPromise(value) {
  return (
    value &&
    typeof value === "object" &&
    typeof value.then === "function" &&
    typeof value.catch === "function"
  );
}

function isDynamicImport(value) {
  // Check if value is a function
  if (typeof value === "function") {
    try {
      // Call the function and check if it returns a promise
      const result = value();
      if (
        result &&
        typeof result.then === "function" &&
        typeof result.catch === "function"
      ) {
        return true;
      }
    } catch (error) {
      // Handle any error that occurs when calling the function
      return false;
    }
  }
  return false;
}

function isEmpty(value) {
  return (
    value == null ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim() === "") ||
    (value instanceof Set && value.size === 0)
  );
}
// Convert minutes to hours and minutes format using Date class
function minsToHours(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (mins == 0) {
    return `${hours}h`;
  }
  return `${hours}h ${mins}m`;
}

function isNonEmpty(value) {
  // Check if the value is not null or undefined
  if (value == null) {
    return false;
  }

  // Check if the value is an empty array
  if (Array.isArray(value) && value.length === 0) {
    return false;
  }

  // Check if the value is an empty object
  if (typeof value === "object" && Object.keys(value).length === 0) {
    return false;
  }

  // Check if the value is an empty string
  if (typeof value === "string" && value.trim() === "") {
    return false;
  }

  // Check if the value is another sequence (e.g., empty Set, empty Map, etc.)
  if (value instanceof Set && value.size === 0) {
    return false;
  }

  // Add more checks for other sequence types if needed

  // If none of the above conditions are met, the value is considered not empty
  return true;
}

let raise = function (...el) {
  let bkColor = randomColor();
  // let fColor=randomColor()
  let fColor = "white";

  let sep = `${"*".repeat(80)}`;
  let style = `color:${fColor};background-color:${bkColor};font-size:1.5em;font-weight:bold`;
  console.log(
    // `%c${'*'.repeat(40)}\n`,`color:green;background-color:yellow;font-size:1.5em;font-weight:bold`
    `%c${sep}\n${JSON.stringify(el)}\n${sep}\n`,
    `\n${style}`
  );
  if (
    el.length > 1 &&
    typeof el[el.length - 1] == "string" &&
    el[el.length - 1].includes(">>")
  ) {
    console.log(
      `${el?.[el.length - 1].replace(">>", "")} :>> `,
      ...el.slice(0, el.length - 1)
    );
    console.log(sep);

    throw new Error(el[el.length - 1]);
  } else {
    console.log(`${el?.[el.length - 1]} :>> `, ...el);
    console.log(sep);
  }
};

let titleCase = function (aString) {
  if (typeof aString != "string") return aString;
  return aString
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
  // let items=reverse()
};

let toTitleCase = function (aString) {
  // console.log("999999999999", aString, typeof aString);
  if (typeof aString == "object" || !aString) {
    return "";
  }
  var i, j, str, lowers, uppers;
  str = aString.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });

  // Certain minor words should be left lowercase unless
  // they are the first or last words in the string
  lowers = [
    "A",
    "An",
    "The",
    "And",
    "But",
    "Or",
    "For",
    "Nor",
    "As",
    "At",
    "By",
    "For",
    "From",
    "In",
    "Into",
    "Near",
    "Of",
    "On",
    "Onto",
    "To",
    "With",
  ];
  for (i = 0, j = lowers.length; i < j; i++)
    str = str.replace(
      new RegExp("\\s" + lowers[i] + "\\s", "g"),
      function (txt) {
        return txt.toLowerCase();
      }
    );

  // Certain words such as initialisms or acronyms should be left uppercase
  uppers = ["Id", "Tv"];
  for (i = 0, j = uppers.length; i < j; i++)
    str = str.replace(
      new RegExp("\\b" + uppers[i] + "\\b", "g"),
      uppers[i].toUpperCase()
    );

  return str;
};

let aesEnc = function (plaintext, key, iv, CryptoJS) {
  key = CryptoJS.enc.Utf8.parse(key);
  iv = CryptoJS.enc.Utf8.parse(iv);
  let srcs = CryptoJS.enc.Utf8.parse(plaintext);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.ciphertext.toString();
};

let aesDec = function (ciphertext, key, iv, CryptoJS) {
  key = CryptoJS.enc.Utf8.parse(key);
  iv = CryptoJS.enc.Utf8.parse(iv);
  let hex_string = CryptoJS.enc.Hex.parse(ciphertext);
  let srcs = CryptoJS.enc.Base64.stringify(hex_string);
  let decrypt0 = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  let decrypt = decrypt0.toString(CryptoJS.enc.Utf8);
  return decrypt.toString();
};
let validators = {
  required(v, o = {}) {
    o.lg ??= "en";
    o.message ??= {
      en: "This field is required.",
      fr: "Ce champ est requis.",
      ar: "هذه الخانة مطلوبه.",
    };

    return (
      (v && v.length != 0) || o.message?.[o.lg] || JSON.stringify(o.message)
    );
  },
  banned(v, o = {}) {
    // o.banned=['aaa','bbb']
    o.lg ??= "en";
    o.message ??= {
      en: `"${v}" is banned`,
      fr: `"${v}" est interdite`,
      ar: `"${v}" محظور`,
    };

    if (Array.isArray(o.banned))
      return (
        !o.banned.includes(v) || o.message?.[o.lg] || JSON.stringify(o.message)
      );
    else if (typeof o.banned == "string")
      return o.banned != v || o.message?.[o.lg] || JSON.stringify(o.message);
    else return true;
  },
  includes(v, o = {}) {
    // o.containingValues,
    (o.lg ??= "en"),
      (o.message ??= {
        en: `"${v}" does not contian "${o.containingValues}"`,
        fr: `"${v}" ne contient pas "${o.containingValues}"`,
        ar: `"${v}" لا يحتوي على "${o.containingValues}"`,
      });
    if (Array.isArray(o.containingValues))
      return (
        o.containingValues.every((e) => v.includes(e)) ||
        o.message?.[o.lg] ||
        JSON.stringify(o.message)
      );
    else if (typeof o.containingValues == "string")
      return (
        (v && v.includes(o.containingValues)) ||
        o.message?.[o.lg] ||
        JSON.stringify(o.message)
      );
    else return true;
  },
  excludes(v, o = {}) {
    // o.containingValues,
    (o.lg ??= "en"),
      (o.message ??= {
        en: `"${v}" must not contain "${o.containingValues}"`,
        fr: `"${v}" ne doivent pas contenir "${o.containingValues}"`,
        ar: `"${v}" يجب ألا تحتوي  "${o.containingValues}"`,
      });
    if (Array.isArray(o.containingValues))
      return (
        o.containingValues.every((e) => !v.includes(e)) ||
        o.message?.[o.lg] ||
        JSON.stringify(o.message)
      );
    else if (typeof o.containingValues == "string")
      return (
        !v.includes(o.containingValues) ||
        o.message?.[o.lg] ||
        JSON.stringify(o.message)
      );
    else return true;
  },
  username(v, o = {}) {
    (o.lg ??= "en"),
      (o.message ??= {
        en: "Only letters, numbers and underscore are allowed.",
        fr: "Seules les lettres, les chiffres et le soulignement sont autorisés",
        ar: "فقط الحروف والأرقام والأحرف السفلية مسموح بها",
      });
    return (
      /^[a-zA-Z0-9_]+$/.test(v) ||
      o.message?.[o.lg] ||
      JSON.stringify(o.message)
    );
  },
  maxLength(v, o = {}) {
    o.len ??= 25;
    o.lg ??= "en";
    o.message ??= {
      en: `Max ${o.len} characters allowed.`,
      fr: `Au maximum ${o.len} caractères sont autorisés.`,
      ar: `الحد الأقصى المسموح به من الأحرف ${o.len}.`,
    };

    return (
      (v && v.length <= o.len) || o.message?.[o.lg] || JSON.stringify(o.message)
    );
  },

  minLength(v, o = {}) {
    o.len ??= 4;
    o.lg ??= "en";
    o.message ??= {
      en: `Min ${o.len} characters allowed.`,
      fr: `Au minimum ${o.len} caractères sont autorisés.`,
      ar: `الحد الأدنى المسموح به من الأحرف ${o.len}.`,
    };

    return (
      (v && v.length >= o.len) || o.message?.[o.lg] || JSON.stringify(o.message)
    );
  },
  upperCharNb(v, o = {}) {
    (o.len ??= 1),
      (o.lg ??= "en"),
      (o.message ??= {
        en: `At least ${o.len} Uppercase letter is needed.`,
        fr: `Au moins ${o.len} lettre majuscule est nécessaire.`,
        ar: `مطلوب على الأقل  ${o.len} حرف كبير.`,
      });

    if (v) {
      // console.log('iiiiiiiiiiiiiiii',o,v)
      var upper_len = JSON.stringify(v).match(/[A-Z]/g);
      if (upper_len) {
        return (
          v &&
          (upper_len.length >= o.len ||
            o.message?.[o.lg] ||
            JSON.stringify(o.message))
        );
      } else {
        return v && (o.message?.[o.lg] || JSON.stringify(o.message));
      }
    } else {
      return true;
    }
  },

  lowerCharNb(v, o = {}) {
    (o.len ??= 1),
      (o.lg ??= "en"),
      (o.message ??= {
        en: `At least ${o.len} lowercase letter is needed.`,
        fr: `Au moins ${o.len}  lettre minuscule est nécessaire.`,
        ar: `مطلوب على الأقل  ${o.len} حرف صغير.`,
      });

    if (v) {
      var lower_len = JSON.stringify(v).match(/[a-z]/g);
      if (lower_len) {
        return (
          lower_len.length >= o.len ||
          o.message?.[o.lg] ||
          JSON.stringify(o.message)
        );
      } else {
        return o.message?.[o.lg] || JSON.stringify(o.message);
      }
    } else {
      return true;
    }
  },

  specialCharNb(v, o = {}) {
    (o.len ??= 1),
      (o.lg ??= "en"),
      (o.message ??= {
        en: `At least ${o.len} special characters is needed.`,
        fr: `Au moins ${o.len} caractère spécial est nécessaire.`,
        ar: `مطلوب ما لا يقل عن ${o.len} حرف خاص`,
      });

    if (v) {
      var special_len = JSON.stringify(v).match(
        /[@#$%^&*()_+\-=[\]{}!`;':"\\|,.<>/?]/g
      );
      // console.log(
      //   "sppppppppppppppppppp",
      //   v,
      //   o,
      //   special_len,
      //   special_len.length
      // );
      if (special_len) {
        return (
          special_len.length - 2 >= o.len ||
          o.message?.[o.lg] ||
          JSON.stringify(o.message)
        );
      } else {
        return o.message?.[o.lg] || JSON.stringify(o.message);
      }
    } else {
      return true;
    }
  },

  digitCharNb(v, o = {}) {
    (o.len ??= 1),
      (o.lg ??= "en"),
      (o.message ??= {
        en: `At least ${o.len} digit is needed.`,
        fr: `Au moins ${o.len} chiffre est nécessaire.`,
        ar: `مطلوب ما لا يقل عن ${o.len} رقم.`,
      });

    if (v) {
      var digit_len = JSON.stringify(v).match(/[1-9]/g);
      if (digit_len) {
        return (
          digit_len.length >= o.len ||
          o.message?.[o.lg] ||
          JSON.stringify(o.message)
        );
      } else {
        return o.message?.[o.lg] || JSON.stringify(o.message);
      }
    } else {
      return true;
    }
  },

  isValidDate(v, o = {}) {
    (o.lg ??= "en"),
      (o.message ??= {
        en: `"${v}" is not a valid date.`,
        fr: `"${v}" n'est pas une date valide`,
        ar: `"${v}" ليس تاريخًا صالحًا.`,
      });

    let cond = false;
    // Assumes s is "yyyy-mm-dd"
    // if(v)
    // {
    if (!/^\d\d\d\d-\d\d\-\d\d$/.test(v) || !/^\d\d\d\d|\d\d\|\d\d$/.test(v)) {
      return o.message?.[o.lg] || JSON.stringify(o.message);
    }
    const parts = v.split("-").map((p) => parseInt(p, 10));
    parts[0] -= 1;
    const d = new Date(parts[0], parts[1], parts[2]);
    cond =
      d.getMonth() === parts[1] &&
      d.getDate() === parts[2] &&
      d.getFullYear() === parts[0];
    // }
    return cond || o.message?.[o.lg] || JSON.stringify(o.message);
  },
  email(v, o = {}) {
    o.lg ??= "en";
    o.message ??= {
      en: `"${v}" Invalid email address format.`,
      fr: `"${v}" Format d'adresse e-mail non valide.`,
      ar: `"${v}" شكل عنوان البريد الإلكتروني غير صالح.`,
    };
    return (
      /^\w+([.\-+]?\w+)*\+*@\w+([.-]?\w+)*(\.\w{2,24})+$/.test(v) ||
      o.message?.[o.lg] ||
      JSON.stringify(o.message)
    );
  },

  usernameOrEmail(v, o = {}) {
    o.lg ??= "en";
    o.message ??= {
      en: `"${v}" Invalid "username/email address" format.`,
      fr: `"${v}" Format d'adresse "nom d'utilisateur/e-mail" non valide.`,
      ar: `"${v}" شكل "اسم المستخدم/البريد الإلكتروني" غير صالح.`,
    };
    return (
      /^[a-zA-Z0-9_]+$/.test(v) ||
      /^\w+([.\-+]?\w+)*\+*@\w+([.-]?\w+)*(\.\w{2,24})+$/.test(v) ||
      o.message?.[o.lg] ||
      JSON.stringify(o.message)
    );
  },

  phone(v, o = {}) {
    (o.lg ??= "en"),
      (o.message ??= {
        en: `"${v}" Invalid phone number format.`,
        fr: `"${v}" Format de numéro de téléphone non valide`,
        ar: `"${v}" تنسيق رقم الهاتف غير صالح`,
      });
    return (
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(v) ||
      o.message?.[o.lg] ||
      JSON.stringify(o.message)
    );
  },
  matches(v, o = {}) {
    // o.target='targetValue'
    o.lg ??= "en";
    o.message ??= {
      en: "fields don't matches",
      fr: "Les champs ne correspondent pas",
      ar: "الحقول لا تطابق",
    };
    if (o?.target)
      return v == o?.target || o.message?.[o.lg] || JSON.stringify(o.message);
    return true;
  },
};

export {
  today,
  todayISO,
  todayStr,
  vuetifyColorList,
  colorLibelle,
  randomColor,
  randomKey,
  capitalizeWords,
  getRandomInt,
  stringToJson,
  compFunc,
  isIterable,
  anyMatchInArray,
  strToObj,
  camelToKebab,
  getAttrs,
  toTitleCase,
  titleCase,
  raise,
  isNonEmpty,
  isEmpty,
  isDynamicImport,
  isPromise,
  minsToHours,
  flattenArray,
  mergeObjects,
  isPlainObject,
  getObjectDepth,
  copyToClipboard,
  transfObj,
  stringify,
  parse,
  project,
  formatToStr,
  // eventFoncArgRecursive,
  generalVal,
  objLang,
  queryData,
  clone,
  aesEnc,
  aesDec,
  isVnode,
  isDate,
  validators,
  Http,
};
