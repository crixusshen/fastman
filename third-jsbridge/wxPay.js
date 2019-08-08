/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fastman"] = factory();
	else
		root["fastman"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by dfzq on 2018/2/13.
 */
$(function () {

    // dom-cache key
    var DATAKEY = 'prodData';
    // 当前环境，默认dev
    setCurrentEnv('dev');

    // 生成请求流水号
    function requestNo() {
        var date = new Date();
        var y = date.getFullYear(),
            m = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
            d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
            h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
            min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
            s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds(),
            ss = date.getMilliseconds() < 100 ? '0' + (date.getMilliseconds() < 10 ? '00' + date.getMilliseconds() : date.getMilliseconds()) : date.getMilliseconds(),
            r = parseInt(Math.random() * 1000);
        r = r < 100 ? r < 10 ? '00' + r : '0' + r : r;
        var result = y + m + d + h + min + s + ss + r;
        return result;
    }

    // 设置导航
    function setNavigateBar() {
        if (fastman) {
            fastman.onNavigateBar({
                title: '微信支付', // 导航标题
                rightButtonTitle: '切换环境', // 右侧按钮文字
                onRightButtonPress: changeEnv, // 右侧按钮点击事件，不定义则不会触发点击
                isShowBackButton: true // 是否显示后退按钮，默认true(即显示)
            });
        }
    }

    // 设置环境
    function setCurrentEnv(env) {
        window.selectedVal = env;
        $('#currentEnv').text(env);
        // 切换了环境需要重新刷新当前环境下的商品列表
        queryProductList();
    }

    // 改变环境
    function changeEnv() {
        $.actionSheet({
            actions: [{
                text: "sit",
                value: "sit",
                onClick: function onClick(v) {
                    setCurrentEnv(v);
                }
            }, {
                text: "dev",
                value: "dev",
                onClick: function onClick(v) {
                    setCurrentEnv(v);
                }
            }]
        });
    }

    // 支付绑定事件
    function bindPayEvent(cache) {
        $.loadingToast({
            showStatus: 'show',
            text: '支付请求中'
        });
        $.http({
            scene: window.selectedVal,
            funcNo: 'IF096103',
            params: {
                requestNo: requestNo(),
                productNo: cache.productNo,
                specId: cache.specId,
                quantity: 1,
                paymentType: 2,
                protTypeCode: cache.protTypeCode,
                needSignFlag: true,
                productName: cache.productName
            },
            success: function success(data, textStatus, jqXHR) {
                if ($.checkLoginState(data.payload.code)) {
                    $.loadingToast({
                        showStatus: 'hide'
                    });

                    if (data.payload.code == 0) {
                        // 发送微信支付指令通知
                        wxPay({
                            appId: data.payload.data.wechatPayWay.appId,
                            partnerId: data.payload.data.wechatPayWay.partnerId,
                            prePayId: data.payload.data.wechatPayWay.prePayId,
                            noncestr: data.payload.data.wechatPayWay.noncestr,
                            timestamp: data.payload.data.wechatPayWay.timestamp,
                            package: data.payload.data.wechatPayWay.package,
                            sign: data.payload.data.wechatPayWay.sign
                        });
                    } else {
                        $.dialog({
                            text: data.payload.info
                        });
                    }
                } else {
                    $.loadingToast({
                        showStatus: 'hide'
                    });
                }
            },
            error: function error(XMLHttpRequest, textStatus, errorThrown) {
                $.dialog({
                    text: '支付商品时出现错误'
                });

                $.loadingToast({
                    showStatus: 'hide'
                });
            }
        });
    }

    // 支付测试商品列表查询
    function queryProductList() {
        $.http({
            scene: window.selectedVal,
            funcNo: 'IF096102',
            success: function success(data, textStatus, jqXHR) {
                $('#productListPanel').empty().append(data.payload.data.specList.map(function (item, i) {
                    var productHTML = '<div class="weui-form-preview">\n' + '                <div class="weui-form-preview__hd">\n' + '                    <div class="weui-form-preview__item">\n' + '                        <label class="weui-form-preview__label">付款金额</label>\n' + '                        <em class="weui-form-preview__value">¥' + item.salePrice + '</em>\n' + '                    </div>\n' + '                </div>\n' + '                <div class="weui-form-preview__bd">\n' + '                    <div class="weui-form-preview__item">\n' + '                        <label class="weui-form-preview__label">商品</label>\n' + '                        <span class="weui-form-preview__value">微信测试支付商品</span>\n' + '                    </div>\n' + '                </div>\n' + '                <div class="weui-form-preview__bd">\n' + '                    <div class="weui-form-preview__item">\n' + '                        <label class="weui-form-preview__label">规格参数</label>\n' + '                        <span class="weui-form-preview__value">' + item.specName + '</span>\n' + '                    </div>\n' + '                </div>\n' + '                <div class="weui-form-preview__ft">\n' + '                    <a class="weui-form-preview__btn weui-form-preview__btn_warn wxpay' + item.specId + '" href="javascript:">立即支付</a>\n' + '                </div>\n' + '            </div>';

                    // 绑定支付按钮操作
                    $(document).off('click', '.wxpay' + item.specId);
                    $(document).on('click', '.wxpay' + item.specId, function () {
                        bindPayEvent($(this).data(DATAKEY));
                    });

                    return $(productHTML).find('.wxpay' + item.specId).data(DATAKEY, {
                        productNo: data.payload.data.productNo,
                        specId: item.specId,
                        protTypeCode: data.payload.data.protTypeCode,
                        productName: data.payload.data.productName
                    }).end();
                }));
            },
            error: function error(XMLHttpRequest, textStatus, errorThrown) {
                $.dialog({
                    text: '查询商品时出现错误'
                });
            }
        });
    }

    fastman.ready(function () {
        // 设置导航
        setNavigateBar();

        // 每次页面出现时重新刷新商品列表
        fastman.onViewWillAppear(function () {
            queryProductList();
        });

        // 建立oauth，一旦首次建立成功后会执行一次onViewWillAppear指令，随后便是通过客户端自身的生命周期函数来触发onViewWillAppear指令
        $.oauth();
    });
});

/***/ })

/******/ });
});
//# sourceMappingURL=wxPay.js.map