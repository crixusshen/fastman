/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(o,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.fastman=t():o.fastman=t()}(this,function(){return webpackJsonpfastman([18],{210:function(o,t,e){o.exports=e(35)},35:function(o,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.closeToast=t.toast=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},f=e(9),i=function(o,t,e){if("object"===(void 0===o?"undefined":n(o))){var i=o,s=i.text,c=void 0===s?"":s,u=i.duration,a=void 0===u?2e3:u,r=i.extraclass,d=void 0===r?"":r;o=c,t=a,e=d}else"number"!=typeof t&&(e=t,t=2e3);var p=$('<div class="modal toast '+(e||"")+'">'+o+"</div>").appendTo(document.body);return(0,f.openModal)(p,function(){setTimeout(function(){(0,f.closeModal)(p)},t||2e3)}),p},s=function(o){(0,f.closeModal)(o)};t.toast=i,t.closeToast=s}},[210])});