/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.fastman=o():t.fastman=o()}(this,function(){return webpackJsonpfastman([29],{200:function(t,o,e){t.exports=e(78)},78:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=e(11);o.default=function(t,o,e,i){if("function"==typeof o)e=o,o=void 0;else if("object"===(void 0===t?"undefined":n(t))){var f=t.text,s=void 0===f?"":f,u=t.title,d=void 0===u?l.defaults.modalTitle:u,r=t.allowClose,a=void 0!==r&&r,c=t.onClick;return(0,l.modal)({text:s,title:d,buttons:[{text:l.defaults.modalButtonOk,bold:!0,onClick:c}],isClose:a,extraClass:"remove-on-close"})}return(0,l.modal)({text:t||"",title:void 0===o?l.defaults.modalTitle:o,buttons:[{text:l.defaults.modalButtonOk,bold:!0,onClick:e}],isClose:i||!1,extraClass:"remove-on-close"})}}},[200])});