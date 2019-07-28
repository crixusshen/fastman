/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.fastman=t():e.fastman=t()}(this,function(){return webpackJsonpfastman([14],{17:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.compareVersion=function(e,t){var n=e.split("."),r=t.split(".");if(e===t)return 0;for(var o=0;o<n.length;o++){var f=parseInt(n[o]);if(!r[o])return 1;var i=parseInt(r[o]);if(f<i)return-1;if(f>i)return 1}return-1}},224:function(e,t,n){e.exports=n(17)}},[224])});