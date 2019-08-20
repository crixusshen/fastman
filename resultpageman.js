/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.fastman=t():e.fastman=t()}(this,function(){return webpackJsonpfastman([11],{199:function(e,t,n){e.exports=n(77)},34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n,s;for(o=[],r=arguments.length;r-- >2;)i.push(arguments[r]);for(;i.length;)if(Array.isArray(u=i.pop()))for(r=u.length;r--;)i.push(u[r]);else null!=u&&!0!==u&&!1!==u&&("number"==typeof u&&(u+=""),n="string"==typeof u,n&&s?o[o.length-1]+=u:(o.push(u),s=n));if("function"==typeof e){if(new e(t,o).render)return new e(t,o).render();throw new Error("view class must define render function.")}return{tag:e,data:t||{},children:o}};var r,u,o,i=[]},77:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ResultPage=void 0;var r=n(34),u=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(e){var t=e.text,n=void 0===t?"暂无信息":t,r=e.subtext,o=e.imgurl,i=e.buttons,s="[object Array]"==Object.prototype.toString.call(i)&&i.length>0;return(0,u.default)("div",{class:"ui-result-page"},o?(0,u.default)("img",{src:o,class:"ui-result-page-img"}):void 0,(0,u.default)("div",{class:"text"},n),r?(0,u.default)("div",{class:"subtext"},r):void 0,s?(0,u.default)("div",{class:"ui-btn-wrap"},i.map(function(e,t){return(0,u.default)("button",{class:e.type?"ui-btn "+e.type:"ui-btn",onclick:e.handler},e.text||"确定")})):void 0)};t.ResultPage=o}},[199])});