/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.fastman=t():e.fastman=t()}(this,function(){return webpackJsonpfastman([16],{219:function(e,t,n){e.exports=n(96)},96:function(e,t,n){"use strict";function o(e,t){return"previous"===e?void 0:t}Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){return{model:{previous:JSON.parse(localStorage.getItem("fastman-persist-state"))},actions:{saveSessionState:function(e){localStorage.setItem("fastman-persist-state",JSON.stringify(e,o))}},readies:[function(e,t,n){window.addEventListener("unload",function(){t.saveSessionState()})}]}};t.Persist=s}},[219])});