/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.fastman=n():t.fastman=n()}(this,function(){return webpackJsonpfastman([6],{0:function(t,n){t.exports=function(){throw new Error("define cannot be used indirect")}},1:function(t,n){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e},20:function(t,n,e){"use strict";var r;!function(o){void 0!==(r=function(t){function n(){if(f.length)throw f.shift()}function r(t){var n;n=u.length?u.pop():new o,n.task=t,i(n)}function o(){this.task=null}var i=e(22),u=[],f=[],c=i.makeRequestCallFromTimer(n);return o.prototype.call=function(){try{this.task.call()}catch(t){r.onerror?r.onerror(t):(f.push(t),c())}finally{this.task=null,u[u.length]=this}},r}.call(n,e,n,t))&&(t.exports=r)}(e(0))},21:function(t,n,e){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(i){void 0!==(r=function(t){function n(){}function r(t){try{return t.then}catch(t){return _=t,m}}function i(t,n){try{return t(n)}catch(t){return _=t,m}}function u(t,n,e){try{t(n,e)}catch(t){return _=t,m}}function f(t){if("object"!==o(this))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._deferredState=0,this._state=0,this._value=null,this._deferreds=null,t!==n&&v(t,this)}function c(t,e,r){return new t.constructor(function(o,i){var u=new f(n);u.then(o,i),l(t,new h(e,r,u))})}function l(t,n){for(;3===t._state;)t=t._value;if(f._onHandle&&f._onHandle(t),0===t._state)return 0===t._deferredState?(t._deferredState=1,void(t._deferreds=n)):1===t._deferredState?(t._deferredState=2,void(t._deferreds=[t._deferreds,n])):void t._deferreds.push(n);a(t,n)}function a(t,n){y(function(){var e=1===t._state?n.onFulfilled:n.onRejected;if(null===e)return void(1===t._state?s(n.promise,t._value):d(n.promise,t._value));var r=i(e,t._value);r===m?d(n.promise,_):s(n.promise,r)})}function s(t,n){if(n===t)return d(t,new TypeError("A promise cannot be resolved with itself."));if(n&&("object"===(void 0===n?"undefined":o(n))||"function"==typeof n)){var e=r(n);if(e===m)return d(t,_);if(e===t.then&&n instanceof f)return t._state=3,t._value=n,void p(t);if("function"==typeof e)return void v(e.bind(n),t)}t._state=1,t._value=n,p(t)}function d(t,n){t._state=2,t._value=n,f._onReject&&f._onReject(t,n),p(t)}function p(t){if(1===t._deferredState&&(l(t,t._deferreds),t._deferreds=null),2===t._deferredState){for(var n=0;n<t._deferreds.length;n++)l(t,t._deferreds[n]);t._deferreds=null}}function h(t,n,e){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof n?n:null,this.promise=e}function v(t,n){var e=!1,r=u(t,function(t){e||(e=!0,s(n,t))},function(t){e||(e=!0,d(n,t))});e||r!==m||(e=!0,d(n,_))}var y=e(20),_=null,m={};return f._onHandle=null,f._onReject=null,f._noop=n,f.prototype.then=function(t,e){if(this.constructor!==f)return c(this,t,e);var r=new f(n);return l(this,new h(t,e,r)),r},f.prototype.done=function(t,n){(arguments.length?this.then.apply(this,arguments):this).then(null,function(t){setTimeout(function(){throw t},0)})},f}.call(n,e,n,t))&&(t.exports=r)}(e(0))},22:function(t,n,e){"use strict";(function(r){var o;!function(r){void 0!==(o=function(t){function n(t){i.length||(o(),u=!0),i[i.length]=t}function e(){for(;f<i.length;){var t=f;if(f+=1,i[t].call(),f>c){for(var n=0,e=i.length-f;n<e;n++)i[n]=i[n+f];i.length-=f,f=0}}i.length=0,f=0,u=!1}function r(t){return function(){function n(){clearTimeout(e),clearInterval(r),t()}var e=setTimeout(n,0),r=setInterval(n,50)}}var o,i=[],u=!1,f=0,c=1024,l=void 0!==l?l:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},a=l.MutationObserver||l.WebKitMutationObserver;return o="function"==typeof a?function(t){var n=1,e=new a(t),r=document.createTextNode("");return e.observe(r,{characterData:!0}),function(){n=-n,r.data=n}}(e):r(e),n.requestFlush=o,n.makeRequestCallFromTimer=r,n}.call(n,e,n,t))&&(t.exports=o)}(e(0))}).call(n,e(1))},226:function(t,n,e){t.exports=e(5)},5:function(t,n,e){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(i){void 0!==(r=function(t){function n(t){var n=new r(r._noop);return n._state=1,n._value=t,n}var r=e(21),i=n(!0),u=n(!1),f=n(null),c=n(void 0),l=n(0),a=n("");return r.resolve=function(t){if(t instanceof r)return t;if(null===t)return f;if(void 0===t)return c;if(!0===t)return i;if(!1===t)return u;if(0===t)return l;if(""===t)return a;if("object"===(void 0===t?"undefined":o(t))||"function"==typeof t)try{var e=t.then;if("function"==typeof e)return new r(e.bind(t))}catch(t){return new r(function(n,e){e(t)})}return n(t)},r.all=function(t){var n=Array.prototype.slice.call(t);return new r(function(t,e){function i(f,c){if(c&&("object"===(void 0===c?"undefined":o(c))||"function"==typeof c)){if(c instanceof r&&c.then===r.prototype.then){for(;3===c._state;)c=c._value;return 1===c._state?i(f,c._value):(2===c._state&&e(c._value),void c.then(function(t){i(f,t)},e))}var l=c.then;if("function"==typeof l){return void new r(l.bind(c)).then(function(t){i(f,t)},e)}}n[f]=c,0==--u&&t(n)}if(0===n.length)return t([]);for(var u=n.length,f=0;f<n.length;f++)i(f,n[f])})},r.reject=function(t){return new r(function(n,e){e(t)})},r.race=function(t){return new r(function(n,e){t.forEach(function(t){r.resolve(t).then(n,e)})})},r.promise=function(t){return new r(t)},r.attempt=function(t){for(var n=0,e=arguments.length-1,r=new Array(e);n<e;++n)r[n]=arguments[n+1];try{return this.resolve(t.apply(this,r))}catch(t){return this.reject(t)}},r.prototype.otherwise=function(t){return this.then(null,t)},r}.call(n,e,n,t))&&(t.exports=r)}(e(0))}},[226])});