/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.fastman=t():e.fastman=t()}(this,function(){return webpackJsonpfastman([17],{217:function(e,t,n){e.exports=n(94)},94:function(e,t,n){"use strict";function o(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return{model:{eventEmitter:{events:[],onceEvents:[]}},actions:{eventEmitter:{on:function(e,t,n,o){e.eventEmitter.events[t.eventName]=e.eventEmitter.events[t.eventName]||[],e.eventEmitter.events[t.eventName].push(t.callback)},once:function(e,t,n,o){e.eventEmitter.onceEvents[t.eventName]=e.eventEmitter.onceEvents[t.eventName]||[],e.eventEmitter.onceEvents[t.eventName].push(t.callback)},emit:function(e,t,n,r){var v,i,a=t.eventName,c=o(t,["eventName"]),f=e.eventEmitter.events[a];if(f)for(v=0,i=f.length;v<i;v++)f[v](c);var s,m,u=e.eventEmitter.onceEvents[a];if(u)for(s=0,m=u.length;s<m;s++)u.shift()(c)}}}}};t.default=r}},[217])});