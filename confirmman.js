/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.fastman=o():t.fastman=o()}(this,function(){return webpackJsonpfastman([25],{203:function(t,o,e){t.exports=e(80)},80:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=e(11);o.default=function(t,o,e,i,f,u){if("function"==typeof o)f&&(u=f),i&&(f=i),e&&(i=e),e=o,o=void 0;else if("object"===(void 0===t?"undefined":n(t))){var a=t.text,d=void 0===a?"":a,c=t.title,s=void 0===c?l.defaults.modalTitle:c,r=t.onCancelClick,m=t.onOkClick,p=t.okText,y=void 0===p?l.defaults.modalButtonOk:p,b=t.cancelText,x=void 0===b?l.defaults.modalButtonCancel:b;return(0,l.modal)({text:d,title:s,buttons:[{text:x,onClick:r},{text:y,bold:!0,onClick:m}],extraClass:"remove-on-close"})}return(0,l.modal)({text:t||"",title:void 0===o?l.defaults.modalTitle:o,buttons:[{text:u||l.defaults.modalButtonCancel,onClick:i},{text:f||l.defaults.modalButtonOk,bold:!0,onClick:e}],extraClass:"remove-on-close"})}}},[203])});