/*!
 * 
 *   kiingo-api v1.0.2
 *   https://github.com/rosshartmann/kiingo-api-javascript-sdk
 *
 *   Copyright (c) Ross Hartmann and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MyLibrary=t():e.MyLibrary=t()}(self,(()=>(()=>{var e={669:(e,t,r)=>{e.exports=r(609)},448:(e,t,r)=>{"use strict";var n=r(867),o=r(26),i=r(372),a=r(327),s=r(97),u=r(109),c=r(985),f=r(61),l=r(874),p=r(263);e.exports=function(e){return new Promise((function(t,r){var h,y=e.data,d=e.headers,b=e.responseType;function v(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}n.isFormData(y)&&delete d["Content-Type"];var m=new XMLHttpRequest;if(e.auth){var g=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(g+":"+w)}var O=s(e.baseURL,e.url);function j(){if(m){var n="getAllResponseHeaders"in m?u(m.getAllResponseHeaders()):null,i={data:b&&"text"!==b&&"json"!==b?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:n,config:e,request:m};o((function(e){t(e),v()}),(function(e){r(e),v()}),i),m=null}}if(m.open(e.method.toUpperCase(),a(O,e.params,e.paramsSerializer),!0),m.timeout=e.timeout,"onloadend"in m?m.onloadend=j:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(j)},m.onabort=function(){m&&(r(f("Request aborted",e,"ECONNABORTED",m)),m=null)},m.onerror=function(){r(f("Network Error",e,null,m)),m=null},m.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(f(t,e,n.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",m)),m=null},n.isStandardBrowserEnv()){var P=(e.withCredentials||c(O))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;P&&(d[e.xsrfHeaderName]=P)}"setRequestHeader"in m&&n.forEach(d,(function(e,t){void 0===y&&"content-type"===t.toLowerCase()?delete d[t]:m.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(m.withCredentials=!!e.withCredentials),b&&"json"!==b&&(m.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&m.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(h=function(e){m&&(r(!e||e&&e.type?new p("canceled"):e),m.abort(),m=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h))),y||(y=null),m.send(y)}))}},609:(e,t,r)=>{"use strict";var n=r(867),o=r(849),i=r(321),a=r(185);var s=function e(t){var r=new i(t),s=o(i.prototype.request,r);return n.extend(s,i.prototype,r),n.extend(s,r),s.create=function(r){return e(a(t,r))},s}(r(546));s.Axios=i,s.Cancel=r(263),s.CancelToken=r(972),s.isCancel=r(502),s.VERSION=r(288).version,s.all=function(e){return Promise.all(e)},s.spread=r(713),s.isAxiosError=r(268),e.exports=s,e.exports.default=s},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,r)=>{"use strict";var n=r(263);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,r)=>{"use strict";var n=r(867),o=r(327),i=r(782),a=r(572),s=r(185),u=r(875),c=u.validators;function f(e){this.defaults=e,this.interceptors={request:new i,response:new i}}f.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&u.assertOptions(r,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var i,f=[];if(this.interceptors.response.forEach((function(e){f.push(e.fulfilled,e.rejected)})),!o){var l=[a,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(f),i=Promise.resolve(t);l.length;)i=i.then(l.shift(),l.shift());return i}for(var p=t;n.length;){var h=n.shift(),y=n.shift();try{p=h(p)}catch(e){y(e);break}}try{i=a(p)}catch(e){return Promise.reject(e)}for(;f.length;)i=i.then(f.shift(),f.shift());return i},f.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,r){return this.request(s(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){f.prototype[e]=function(t,r,n){return this.request(s(n||{},{method:e,url:t,data:r}))}})),e.exports=f},782:(e,t,r)=>{"use strict";var n=r(867);function o(){this.handlers=[]}o.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},97:(e,t,r)=>{"use strict";var n=r(793),o=r(303);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},61:(e,t,r)=>{"use strict";var n=r(481);e.exports=function(e,t,r,o,i){var a=new Error(e);return n(a,t,r,o,i)}},572:(e,t,r)=>{"use strict";var n=r(867),o=r(527),i=r(502),a=r(546),s=r(263);function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s("canceled")}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return u(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},185:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){t=t||{};var r={};function o(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function i(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:o(void 0,e[r]):o(e[r],t[r])}function a(e){if(!n.isUndefined(t[e]))return o(void 0,t[e])}function s(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:o(void 0,e[r]):o(void 0,t[r])}function u(r){return r in t?o(e[r],t[r]):r in e?o(void 0,e[r]):void 0}var c={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||i,o=t(e);n.isUndefined(o)&&t!==u||(r[e]=o)})),r}},26:(e,t,r)=>{"use strict";var n=r(61);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},527:(e,t,r)=>{"use strict";var n=r(867),o=r(546);e.exports=function(e,t,r){var i=this||o;return n.forEach(r,(function(r){e=r.call(i,e,t)})),e}},546:(e,t,r)=>{"use strict";var n=r(867),o=r(16),i=r(481),a=r(874),s={"Content-Type":"application/x-www-form-urlencoded"};function u(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,f={transitional:a,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(c=r(448)),c),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)||t&&"application/json"===t["Content-Type"]?(u(t,"application/json"),function(e,t,r){if(n.isString(e))try{return(t||JSON.parse)(e),n.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||f.transitional,r=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,a=!r&&"json"===this.responseType;if(a||o&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(a){if("SyntaxError"===e.name)throw i(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){f.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){f.headers[e]=n.merge(s)})),e.exports=f},874:e=>{"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},288:e=>{e.exports={version:"0.26.1"}},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},327:(e,t,r)=>{"use strict";var n=r(867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var a=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},268:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}},985:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},16:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},109:(e,t,r)=>{"use strict";var n=r(867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,a={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([r]):a[t]?a[t]+", "+r:r}})),a):a}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},875:(e,t,r)=>{"use strict";var n=r(288).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var i={};o.transitional=function(e,t,r){function o(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,n,a){if(!1===e)throw new Error(o(n," has been removed"+(t?" in "+t:"")));return t&&!i[n]&&(i[n]=!0,console.warn(o(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,a)}},e.exports={assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),o=n.length;o-- >0;){var i=n[o],a=t[i];if(a){var s=e[i],u=void 0===s||a(s,i,e);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==r)throw Error("Unknown option "+i)}},validators:o}},867:(e,t,r)=>{"use strict";var n=r(849),o=Object.prototype.toString;function i(e){return Array.isArray(e)}function a(e){return void 0===e}function s(e){return"[object ArrayBuffer]"===o.call(e)}function u(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function f(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:s,isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===o.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&s(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isPlainObject:c,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:f,isStream:function(e){return u(e)&&f(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===o.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):i(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)l(arguments[n],r);return t},extend:function(e,t,r){return l(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(n),r.d(n,{AssociationsItem:()=>f,AssociationsPartOfSpeechCategory:()=>a,AssociationsRequest:()=>re,AssociationsResponse:()=>m,KiingoAPI:()=>J,PartOfSpeechModel:()=>te,PartOfSpeechTaggerLabel:()=>P,PartOfSpeechTaggerRequest:()=>ce,PartOfSpeechTaggerResponse:()=>L,PartOfSpeechTaggerSentence:()=>R,PartOfSpeechTaggerToken:()=>S,WordRelationshipType:()=>i});var t=new(function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var r,n,o;return r=t,(n=[{key:"initializeObjFromData",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=Object.assign.apply(Object,[{}].concat(r));return this.extendMissingValues(e,o)}},{key:"extendMissingValues",value:function(){var e=this;if(arguments.length<=1)return arguments.length<=0?void 0:arguments[0];for(var t=function(t,r){e.foreach(r,(function(r,n,o){return e.hasValue(t[n])||(t[n]=r),!0}))},r=arguments.length-1;r>0;r--){var n=r<0||arguments.length<=r?void 0:arguments[r],o=r-1<0||arguments.length<=r-1?void 0:arguments[r-1];t(o,n)}return arguments.length<=0?void 0:arguments[0]}},{key:"isUndefined",value:function(e){return void 0===e}},{key:"isDefined",value:function(e){return!this.isUndefined(e)}},{key:"hasValue",value:function(e){return null!==e&&this.isDefined(e)}},{key:"hasValueAndLength",value:function(e){return this.hasValue(e)&&this.isDefined(e.length)&&e.length>0}},{key:"isArray",value:function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{key:"getProperties",value:function(e){return Object.keys(e)}},{key:"foreach",value:function(e,t){if(this.isArray(e)){var r=t,n=e;for(a=0;a<n.length;a++)if(!1===r(e[a],a))return}else for(var o=t,i=this.getProperties(e),a=0;a<i.length;a++){var s=i[a];if(!1===o(e[s],s,a))return}}},{key:"select",value:function(e,t){var r=[];return this.foreach(e,(function(e,n,o){return o++,r.push(t?t(e,n,o):e),!0})),r}}])&&e(r.prototype,n),o&&e(r,o),Object.defineProperty(r,"prototype",{writable:!1}),t}());function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i,a,s=function(){function e(r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);t.initializeObjFromData(this,{},r||{})}var r,n,i;return r=e,(n=[{key:"hasErrors",value:function(){return this.errors&&this.errors.length>0}}])&&o(r.prototype,n),i&&o(r,i),Object.defineProperty(r,"prototype",{writable:!1}),e}();function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}!function(e){e.Related="Related",e.Synonym="Synonym",e.Antonym="Antonym",e.Context="Context",e.Hypernym="Hypernym",e.Hyponym="Hyponym",e.Holonym="Holonym",e.Meronym="Meronym"}(i||(i={})),function(e){e.Noun="Noun",e.Verb="Verb",e.Adjective="Adjective",e.Adverb="Adverb",e.Interjection="Interjection",e.Article="Article",e.Plural="Plural",e.Conjunction="Conjunction",e.Preposition="Preposition",e.Unknown="Unknown",e.Phrase="Phrase",e.Abbreviation="Abbreviation"}(a||(a={}));var f=c((function e(r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);t.initializeObjFromData(this,{},r||{})}));function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v(e);if(t){var o=v(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}function d(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var r,n,o,i=y(a);function a(e){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),r=i.call(this,e);return t.initializeObjFromData(b(r),{},e||{}),r.items=t.select(r.items||[],(function(e){return new f(e)})),r}return r=a,n&&p(r.prototype,n),o&&p(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r}(s),g=r(669),w=r.n(g);function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t,r){return t&&O(e.prototype,t),r&&O(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var P=j((function e(r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);t.initializeObjFromData(this,{},r||{})}));function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t,r){return t&&E(e.prototype,t),r&&E(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var S=x((function e(r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);t.initializeObjFromData(this,{},r||{}),this.labels=t.select(this.labels||[],(function(e){return new P(e)}))}));function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t,r){return t&&T(e.prototype,t),r&&T(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var R=A((function e(r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);t.initializeObjFromData(this,{},r||{}),this.tokens=t.select(this.tokens||[],(function(e){return new S(e)}))}));function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=D(e);if(t){var o=D(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return U(this,r)}}function U(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(a,e);var r,n,o,i=N(a);function a(e){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),r=i.call(this,e);return t.initializeObjFromData(B(r),{},e||{}),r.sentences=t.select(r.sentences||[],(function(e){return new R(e)})),r}return r=a,n&&C(r.prototype,n),o&&C(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r}(s);function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e,t,r){return t&&q(e.prototype,t),r&&q(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var I,M=z((function e(){F(this,e)}));!function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE"}(I||(I={}));var H=function(e,t,r,n){var o="https://api.kiingo.com/v1"+t;n||(n=new M),e===I.GET||r||(r={});var i={"Content-Type":"application/json",Accept:"application/json"};if(n.headers&&(i=Object.assign(i,n.headers)),e===I.GET&&r){var a=encodeURIComponent(JSON.stringify(r));o+="?".concat(a),r=null}var u={method:e,url:o,data:r,headers:i,json:!0};return w()(u).then((function(e){var t=e.data;if(t){var r=new s(t);if(r.badRequest||r.forbidden||r.notAuthorized||r.tooManyRequests||r.hasErrors())throw{response:e};return r}return t})).catch((function(e){if(e.isAxiosError&&(!e.response||!e.response.data||!e.response.data.errors||e.response.data.errors.length<=0))throw console.log("Network Error when calling the Kiingo API."),console.log(e),e;if(!e.response)throw console.log("Network error when calling the Kiingo API. No response received."),console.log(e),e;throw e}))},V=function(e){if(!t.hasValueAndLength(e.apiKey))throw new Error("Kiingo API must first be initialized with a valid API key.");if(!t.hasValueAndLength(e.secretKey))throw new Error("Kiingo API must first be initialized with a valid secret key.");var r=new M;return r.headers={"x-api-key":e.apiKey,"x-secret-key":e.secretKey},r},J=function(){function e(){var t,r,n,o=this;F(this,e),n=function(e,t){return o.apiKey=e,o.secretKey=t,!0},(r="initialize")in(t=this)?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}return z(e,[{key:"getAssociations",value:function(e){var t=V(this);return H(I.GET,"/associations",e,t).then((function(e){return new m(e)}))}},{key:"tagPartsOfSpeech",value:function(e){var t=V(this);return H(I.POST,"/pos-tagger",e,t).then((function(e){return new L(e)}))}}]),e}();function K(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function G(e,t,r){return t&&K(e.prototype,t),r&&K(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var W=G((function e(r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);t.initializeObjFromData(this,{},r||{})}));function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=ee(e);if(t){var o=ee(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Z(this,r)}}function Z(e,t){if(t&&("object"===X(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var te,re=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Q(e,t)}(i,e);var t,r,n,o=Y(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,null)).text=e,t}return t=i,r&&$(t.prototype,r),n&&$(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(W);function ne(e){return(ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ae(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=ue(e);if(t){var o=ue(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return se(this,r)}}function se(e,t){if(t&&("object"===ne(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function(e){e.unknown="unknown",e.standard="standard",e.fast="fast"}(te||(te={}));var ce=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ie(e,t)}(i,e);var t,r,n,o=ae(i);function i(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,null)).text=e,r.model=t,r}return t=i,r&&oe(t.prototype,r),n&&oe(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(W)})(),n})()));
//# sourceMappingURL=index.js.map