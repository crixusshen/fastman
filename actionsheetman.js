/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(o,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.fastman=n():o.fastman=n()}(this,function(){return webpackJsonpfastman([29],{197:function(o,n,e){o.exports=e(79)},79:function(o,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e(9),a=document.createElement("div");n.default=function(o){var n,e,l,c=o;c=c||[],c.length>0&&!$.isArray(c[0])&&(c=[c]);for(var i,d="",s=0;s<c.length;s++)for(var r=0;r<c[s].length;r++){0===r&&(d+='<div class="actions-modal-group">');var f=c[s][r],u=f.label?"actions-modal-label":"actions-modal-button";f.bold&&(u+=" actions-modal-button-bold"),f.color&&(u+=" color-"+f.color),f.bg&&(u+=" bg-"+f.bg),f.disabled&&(u+=" disabled"),d+='<span class="'+u+'">'+f.text+"</span>",r===c[s].length-1&&(d+="</div>")}return i='<div class="actions-modal">'+d+"</div>",a.innerHTML=i,n=$(a).children(),$(t.defaults.modalContainer).append(n[0]),e=".actions-modal-group",l=".actions-modal-button",n.find(e).each(function(o,e){var a=o;$(e).children().each(function(o,e){var i,d=o,s=c[a][d];$(e).is(l)&&(i=$(e)),i&&i.on("click",function(o){!1!==s.close&&(0,t.closeModal)(n),s.onClick&&s.onClick(n,o)})})}),(0,t.openModal)(n),n[0]}}},[197])});