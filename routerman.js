/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.fastman=e():t.fastman=e()}(this,function(){return webpackJsonpfastman([7],{131:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=e.getUrlFragment=function(t){var e=t.indexOf("#");return-1===e?"/":t.slice(e+1)},o=e.getAbsoluteUrl=function(t){var e=document.createElement("a");e.setAttribute("href",t);var a=e.href;return e=null,a},i=e.getBaseUrl=function(t){var e=t.indexOf("#");return-1===e?t.slice(0):t.slice(0,e)};e.toUrlObject=function(t){var e=o(t);return{base:i(e),full:e,original:t,fragment:r(t)}},e.supportStorage=function(){var t="ob.router.storage.ability";try{return sessionStorage.setItem(t,t),sessionStorage.removeItem(t),!0}catch(t){return!1}}},222:function(t,e,a){t.exports=a(50)},50:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(131),o=a(54);window.CustomEvent||(window.CustomEvent=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),a},window.CustomEvent.prototype=window.Event.prototype);var i={pageLoadStart:"pageLoadStart",pageLoadCancel:"pageLoadCancel",pageLoadError:"pageLoadError",pageLoadComplete:"pageLoadComplete",pageAnimationStart:"pageAnimationStart",pageAnimationEnd:"pageAnimationEnd",beforePageRemove:"beforePageRemove",pageRemoved:"pageRemoved",beforePageSwitch:"beforePageSwitch",pageInit:"pageInitInternal"},n={sectionGroupClass:"page-group",curPageClass:"page-current",visiblePageClass:"page-visible",pageClass:"page"},s={leftToRight:"from-left-to-right",rightToLeft:"from-right-to-left"},c=window.history,l=function(){this.sessionNames={currentState:"dfzq.router.currentState",maxStateId:"dfzq.router.maxStateId"},this._init(),this.xhr=null,this.vdoms={},this.hash2ViewId={},this.popstateFlag=!1};l.prototype._init=function(){this.$view=$("body"),this.cache={};var t=$(document),e=location.href;this._saveDocumentIntoCache(t,e);var a,o=(r.toUrlObject(e),t.find("."+n.pageClass)),i=t.find("."+n.curPageClass),s=i.eq(0);if(i.length||(i=o.eq(0)),i.attr("id")||i.attr("id",null==c.state?this._generateRandomId():c.state.pageId),s.length&&s.attr("id")!==i.attr("id")?(s.removeClass(n.curPageClass),i.addClass(n.curPageClass)):i.addClass(n.curPageClass),a=i.attr("id"),null===c.state){var l={id:this._getNextStateId(),url:r.toUrlObject(e),pageId:a};c.replaceState(l,"",e),this._saveAsCurrentState(l),this._incMaxStateId()}},l.prototype.load=function(t,e){this._switchToSection(t)},l.prototype.forward=function(){c.forward()},l.prototype.back=function(){c.back()},l.prototype.loadPage=l.prototype.load,l.prototype._switchToSection=function(t){var e=t.path,a=t.match;if(e){var r,o=this._getCurrentSection();if(r=this.hash2ViewId[a]?$("#"+this.hash2ViewId[a]):this.$view.find("."+n.pageClass).eq(-1),o!==r){this._animateSection(o,r,s.rightToLeft);var i;r.attr("id")?i=r.attr("id"):(i=this._generateRandomId(),r.attr("id",i)),this.hash2ViewId[a]=i,this._pushNewState("#"+e,i)}}},l.prototype._switchToDocument=function(t,e,a,o){var i=r.toUrlObject(t).base;e&&delete this.cache[i];var n=this.cache[i],s=this;n?this._doSwitchDocument(t,a,o):this._loadDocument(t,{success:function(e){try{s._parseDocument(t,e),s._doSwitchDocument(t,a,o)}catch(e){location.href=t}},error:function(){location.href=t}})},l.prototype._doSwitchDocument=function(t,e,a){void 0===e&&(e=!0);var o,s=r.toUrlObject(t),c=this.$view.find("."+n.sectionGroupClass),l=$($("<div></div>").append(this.cache[s.base].$content).html()),u=l.find("."+n.pageClass),p=l.find("."+n.curPageClass);s.fragment&&(o=l.find("#"+s.fragment)),o&&o.length?p=o.eq(0):p.length||(p=u.eq(0)),p.attr("id")||p.attr("id",this._generateRandomId());var h=this._getCurrentSection();h.trigger(i.beforePageSwitch,[h.attr("id"),h]),u.removeClass(n.curPageClass),p.addClass(n.curPageClass),this.$view.prepend(l),this._animateDocument(c,l,p,a),e&&this._pushNewState(t,p.attr("id"))},l.prototype._isTheSameDocument=function(t,e){return r.toUrlObject(t).base===r.toUrlObject(e).base},l.prototype._loadDocument=function(t,e){this.xhr&&this.xhr.readyState<4&&(this.xhr.onreadystatechange=function(){},this.xhr.abort(),this.dispatch(i.pageLoadCancel)),this.dispatch(i.pageLoadStart),e=e||{};var a=this;this.xhr=$.ajax({url:t,success:$.proxy(function(t,a,r){var o=$("<html></html>");o.append(t),e.success&&e.success.call(null,o,a,r)},this),error:function(t,r,o){e.error&&e.error.call(null,t,r,o),a.dispatch(i.pageLoadError)},complete:function(t,r){e.complete&&e.complete.call(null,t,r),a.dispatch(i.pageLoadComplete)}})},l.prototype._parseDocument=function(t,e){if(!e.find("."+n.sectionGroupClass).length)throw new Error("missing router view mark: "+n.sectionGroupClass);this._saveDocumentIntoCache(e,t)},l.prototype._saveDocumentIntoCache=function(t,e){var a=r.toUrlObject(e).base,o=$(t);this.cache[a]={$doc:o,$content:o.find("."+n.sectionGroupClass)}},l.prototype._getLastState=function(){var t=sessionStorage.getItem(this.sessionNames.currentState);try{t=JSON.parse(t)}catch(e){t=null}return t},l.prototype._saveAsCurrentState=function(t){sessionStorage.setItem(this.sessionNames.currentState,JSON.stringify(t))},l.prototype._getNextStateId=function(){var t=sessionStorage.getItem(this.sessionNames.maxStateId);return t?parseInt(t,10)+1:1},l.prototype._incMaxStateId=function(){sessionStorage.setItem(this.sessionNames.maxStateId,this._getNextStateId())},l.prototype._animateDocument=function(t,e,a,r){var o=a.attr("id"),s=t.find("."+n.curPageClass);s.addClass(n.visiblePageClass).removeClass(n.curPageClass),a.trigger(i.pageAnimationStart,[o,a]),this._animateElement(t,e,r),t.animationEnd(function(){s.removeClass(n.visiblePageClass),$(window).trigger(i.beforePageRemove,[t]),t.remove(),$(window).trigger(i.pageRemoved)}),e.animationEnd(function(){a.trigger(i.pageAnimationEnd,[o,a]),a.trigger(i.pageInit,[o,a])})},l.prototype._animateSection=function(t,e,a){var r=e.attr("id");t.isBack=a!==s.rightToLeft,t.trigger(i.beforePageSwitch,[t.attr("id"),t]),t.removeClass(n.curPageClass),e.addClass(n.curPageClass),e.isBack=a!==s.rightToLeft,$('[data-toggle="scroller"]').not(".native-scroll").not(".javascript-scroll").scroller({type:"native"}),e.trigger(i.pageAnimationStart,[r,e]),this._animateElement(t,e,a);var o=!0;for(var c in this.hash2ViewId)if(this.hash2ViewId[c]===r){o=!1;break}e.animationEnd(function(){e.trigger(i.pageAnimationEnd,[r,e]),o&&e.trigger(i.pageInit,[r,e])})},l.prototype._animateElement=function(t,e,a){void 0===a&&(a=s.rightToLeft);var r,i,n=["page-from-center-to-left","page-from-center-to-right","page-from-right-to-center","page-from-right-to-center-compatible","page-from-left-to-center"].join(" ");switch(a){case s.rightToLeft:r="page-from-center-to-left",i=$.device.ios&&o._compareVersion($.device.osVersion,"10.0.0")>=0&&o._compareVersion($.device.osVersion,"11.0.0")<0?"page-from-right-to-center-compatible":"page-from-right-to-center";break;case s.leftToRight:r="page-from-center-to-right",i="page-from-left-to-center";break;default:r="page-from-center-to-left",i=$.device.ios&&o._compareVersion($.device.osVersion,"10.0.0")>=0&&o._compareVersion($.device.osVersion,"11.0.0")<0?"page-from-right-to-center-compatible":"page-from-right-to-center"}t.removeClass(n).addClass(r),e.removeClass(n).addClass(i),t.animationEnd(function(){t.removeClass(n)}),e.animationEnd(function(){e.removeClass(n)})},l.prototype._getCurrentSection=function(){return this.$view.find("."+n.curPageClass).eq(0)},l.prototype._back=function(t,e){var a=$("#"+t.pageId);if(a.length){var r=this._getCurrentSection();this._animateSection(r,a,s.leftToRight),this._saveAsCurrentState(t)}else location.href=t.url.full},l.prototype._forward=function(t,e){if(this._isTheSameDocument(t.url.full,e.url.full)){var a=$("#"+t.pageId);if(a.length){var r=this._getCurrentSection();this._animateSection(r,a,s.rightToLeft),this._saveAsCurrentState(t)}else location.href=t.url.base}else this._saveDocumentIntoCache($(document),e.url.full),this._switchToDocument(t.url.full,!1,!1,s.rightToLeft),this._saveAsCurrentState(t)},l.prototype._onPopState=function(t,e){var a=t.state;if(a&&a.pageId){var r=this._getLastState();if(!r)return void console.error;a.id!==r.id&&(a.id<r.id?this._back(a,r):this._forward(a,r),this.hash2ViewId[e]=a.pageId)}},l.prototype._pushNewState=function(t,e){var a={id:this._getNextStateId(),pageId:e,url:r.toUrlObject(t)};c.pushState(a,"",t),this._saveAsCurrentState(a),this._incMaxStateId()},l.prototype._generateRandomId=function(){return"page-"+ +new Date},l.prototype.dispatch=function(t){var e=new CustomEvent(t,{bubbles:!0,cancelable:!0});window.dispatchEvent(e)},e.Router=l,e.Util=r,e.routerConfig=n,e.EVENTS=i},54:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e){for(var a=t.split(".").length;a<e;)t+=".0",a++;return t},o=function(t){var e=navigator.userAgent.toLowerCase().match(/DFYJ\/([\d.]+)/i);return e?e[1]:void 0},i=function(t,e){var a=t.split("."),o=e.split("."),i=Math.max(a.length,o.length);t=r(t,i),e=r(e,i);var n=t.split("."),s=e.split(".");if(t===e)return 0;for(var c=0;c<n.length;c++){var l=parseInt(n[c]);if(!s[c])return 1;var u=parseInt(s[c]);if(l<u)return-1;if(l>u)return 1}return-1},n=function(t){var e=o();return e?i(e,t):1};e.getVersion=o,e.compareVersion=n,e._compareVersion=i}},[222])});