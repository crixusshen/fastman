/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.fastman=t():e.fastman=t()}(this,function(){return function(e){function t(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var a={};return t.m=e,t.c=a,t.i=function(e){return e},t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=12)}({12:function(e,t,a){"use strict";$(function(){function e(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,n=e.getDate()<10?"0"+e.getDate():e.getDate(),o=e.getHours()<10?"0"+e.getHours():e.getHours(),i=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),s=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds(),r=e.getMilliseconds()<100?"0"+(e.getMilliseconds()<10?"00"+e.getMilliseconds():e.getMilliseconds()):e.getMilliseconds(),d=parseInt(1e3*Math.random());return d=d<100?d<10?"00"+d:"0"+d:d,t+a+n+o+i+s+r+d}function t(){fastman&&fastman.onNavigateBar({title:"微信支付",rightButtonTitle:"切换环境",onRightButtonPress:n,isShowBackButton:!0})}function a(e){window.selectedVal=e,$("#currentEnv").text(e),i()}function n(){$.actionSheet({actions:[{text:"sit",value:"sit",onClick:function(e){a(e)}},{text:"dev",value:"dev",onClick:function(e){a(e)}}]})}function o(t){$.loadingToast({showStatus:"show",text:"支付请求中"}),$.http({scene:window.selectedVal,funcNo:"IF096103",params:{requestNo:e(),productNo:t.productNo,specId:t.specId,quantity:1,paymentType:2,protTypeCode:t.protTypeCode,needSignFlag:!0,productName:t.productName},success:function(e,t,a){$.checkLoginState(e.payload.code)?($.loadingToast({showStatus:"hide"}),0==e.payload.code?wxPay({appId:e.payload.data.wechatPayWay.appId,partnerId:e.payload.data.wechatPayWay.partnerId,prePayId:e.payload.data.wechatPayWay.prePayId,noncestr:e.payload.data.wechatPayWay.noncestr,timestamp:e.payload.data.wechatPayWay.timestamp,package:e.payload.data.wechatPayWay.package,sign:e.payload.data.wechatPayWay.sign}):$.dialog({text:e.payload.info})):$.loadingToast({showStatus:"hide"})},error:function(e,t,a){$.dialog({text:"支付商品时出现错误"}),$.loadingToast({showStatus:"hide"})}})}function i(){$.http({scene:window.selectedVal,funcNo:"IF096102",success:function(e,t,a){$("#productListPanel").empty().append(e.payload.data.specList.map(function(t,a){var n='<div class="weui-form-preview">\n                <div class="weui-form-preview__hd">\n                    <div class="weui-form-preview__item">\n                        <label class="weui-form-preview__label">付款金额</label>\n                        <em class="weui-form-preview__value">¥'+t.salePrice+'</em>\n                    </div>\n                </div>\n                <div class="weui-form-preview__bd">\n                    <div class="weui-form-preview__item">\n                        <label class="weui-form-preview__label">商品</label>\n                        <span class="weui-form-preview__value">微信测试支付商品</span>\n                    </div>\n                </div>\n                <div class="weui-form-preview__bd">\n                    <div class="weui-form-preview__item">\n                        <label class="weui-form-preview__label">规格参数</label>\n                        <span class="weui-form-preview__value">'+t.specName+'</span>\n                    </div>\n                </div>\n                <div class="weui-form-preview__ft">\n                    <a class="weui-form-preview__btn weui-form-preview__btn_warn wxpay'+t.specId+'" href="javascript:">立即支付</a>\n                </div>\n            </div>';return $(document).off("click",".wxpay"+t.specId),$(document).on("click",".wxpay"+t.specId,function(){o($(this).data(s))}),$(n).find(".wxpay"+t.specId).data(s,{productNo:e.payload.data.productNo,specId:t.specId,protTypeCode:e.payload.data.protTypeCode,productName:e.payload.data.productName}).end()}))},error:function(e,t,a){$.dialog({text:"查询商品时出现错误"})}})}var s="prodData";a("dev"),fastman.ready(function(){t(),fastman.onViewWillAppear(function(){i()}),$.oauth()})})}})});