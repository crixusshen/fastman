/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.fastman=e():t.fastman=e()}(this,function(){return webpackJsonpfastman([18],{212:function(t,e,i){t.exports=i(87)},87:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.closeTip=e.tip=void 0;var s=i(30),n={content:"",stayTime:1e3,type:"info",extraclass:"",callback:function(){}},o=function(t,e,i){var s=this;this.element=$(t),this._isFromTpl=i,this.elementHeight=$(t).height(),this.option=$.extend(n,e),$(t).css({"-webkit-transform":"translateY(-"+this.elementHeight+"px)"}),setTimeout(function(){$(t).css({"-webkit-transition":"all .5s"}),s.show()},20)};o.prototype={show:function(){var t=this;t.element.trigger($.Event("tips:show")),this.element.css({"-webkit-transform":"translateY(0px)"}),t.option.stayTime>0&&setTimeout(function(){t.hide()},t.option.stayTime)},hide:function(){var t=this;t.element.trigger($.Event("tips:hide")),this.element.css({"-webkit-transform":"translateY(-"+this.elementHeight+"px)"}),setTimeout(function(){t._isFromTpl&&t.element.remove()},500)}};var a=function(t){return n.extraclass="",(0,s.adaptObject)(void 0,n,t,'<div class="ui-poptips ui-poptips-<%=type%>"><div class="ui-poptips-cnt <%=extraclass%>"><%=content%></div></div>',o,"tips")},r=function(t){var e=$(t);e.css({"-webkit-transform":"translateY(-"+e.height()+"px)"}),setTimeout(function(){e.length&&e.remove()},500)};e.tip=a,e.closeTip=r}},[212])});