/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.fastman=t():e.fastman=t()}(this,function(){return webpackJsonpfastman([20],{208:function(e,t,n){e.exports=n(86)},86:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(9);t.default=function(e,t){if(void 0===t&&(t=!0),"string"==typeof e&&e.indexOf("<")>=0){var n=document.createElement("div");if(n.innerHTML=e.trim(),!(n.childNodes.length>0))return!1;e=n.childNodes[0],t&&e.classList.add("remove-on-close"),$(o.defaults.modalContainer).append(e)}return e=$(e),0!==e.length&&(e.show(),e.find(".content").scroller("refresh"),e.find("."+o.defaults.viewClass).length>0&&$.sizeNavbars(e.find("."+o.defaults.viewClass)[0]),(0,o.openModal)(e),e[0])}}},[208])});