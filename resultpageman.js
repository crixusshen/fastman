/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.fastman=e():t.fastman=e()}(this,function(){return webpackJsonpfastman([30],{197:function(t,e,u){t.exports=u(78)},78:function(t,e,u){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ResultPage=void 0;var o=u(53),n=function(t){return t&&t.__esModule?t:{default:t}}(o),s=function(t){var e=t.text,u=void 0===e?"暂无信息":e,o=t.subtext,s=t.imgurl,a=t.buttons,i="[object Array]"==Object.prototype.toString.call(a)&&a.length>0;return(0,n.default)("div",{class:"ui-result-page"},s?(0,n.default)("img",{src:s,class:"ui-result-page-img"}):void 0,(0,n.default)("div",{class:"text"},u),o?(0,n.default)("div",{class:"subtext"},o):void 0,i?(0,n.default)("div",{class:"ui-btn-wrap"},a.map(function(t,e){return(0,n.default)("button",{class:t.type?"ui-btn "+t.type:"ui-btn",onclick:t.handler},t.text||"确定")})):void 0)};e.ResultPage=s}},[197])});