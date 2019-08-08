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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by dfzq on 2018/2/13.
 */
var _templateTempDiv = document.createElement('div');

/*
    环境变量，根据当前脚本的参数env来区分获取
 */
var Config = {
    // 开发环境，采用代理模式访问
    '0': {
        // 服务器域
        domain: '',
        // 接口路径，同时也是本地调试模式下的代理地址，具体见server.js中的配置
        path: '/message/transport',
        // 接口版本号
        ver: '3.5.0',
        // 渠道
        channel: '3'
    },
    // 打包测试环境
    '1': {
        domain: 'http://itest.dfzq.com.cn',
        path: '/message/transport',
        ver: '3.5.0',
        channel: '3'
    }

    /**
     * 获取当前的js文件的路径
     * @param jsname js脚本名称
     * @returns {*}
     */
};function getJsPath(jsname) {
    var js = document.scripts;
    var jsPath = "";
    for (var i = js.length; i > 0; i--) {
        if (js[i - 1].src.indexOf(jsname) > -1) {
            return js[i - 1].src;
        }
    }
    return jsPath;
}

/**
 * 获取js文件后面的参数
 * @param jspath js脚本src地址
 * @param parm 参数名
 * @returns {*}
 */
function getParam(jspath, parm) {
    var urlparse = jspath.split("\?");
    var parms = urlparse[1].split("&");
    var values = {};
    for (var i = 0; i < parms.length; i++) {
        var pr = parms[i].split("=");
        if (pr[0] == parm) return pr[1];
    }
    return "";
}

$.extend({
    /**
     * 弹出框
     * @param option.title 标题
     * @param option.text 描述
     * @param option.click 点击回调
     *
     * $.dialog({
     *    title: 'xxx',
     *    text: 'xxx',
     *    onClick: function(){},
     * })
     */
    dialog: function dialog(option) {
        option = $.extend({}, {
            title: '提示',
            text: '',
            onClick: function onClick() {}
        }, option);
        // 定义字符串模板
        var dialogHTML = '<div id="dialog" class="js_dialog" style="display: none;">\n' + '        <div class="weui-mask"></div>\n' + '        <div class="weui-dialog">\n' + '            <div class="weui-dialog__hd"><strong class="weui-dialog__title"></strong></div>\n' + '            <div class="weui-dialog__bd"></div>\n' + '            <div class="weui-dialog__ft">\n' + '                <a id="certain" href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">确定</a>\n' + '            </div>\n' + '        </div>\n' + '    </div>';
        _templateTempDiv.innerHTML = dialogHTML;
        // jq实例
        var dialog = $(_templateTempDiv).children();
        // 标题
        dialog.find('.weui-dialog__title').text(option.title);
        // 描述
        dialog.find('.weui-dialog__bd').text(option.text);
        $('body').append(dialog[0]);

        $(dialog[0]).fadeIn('fast');

        // 绑定关闭事件
        $(dialog[0]).on('click', '.weui-dialog__btn', function () {
            if (option.onClick && typeof option.onClick === 'function') {
                option.onClick();
            }
            $(this).parents('.js_dialog').fadeOut('fast', function () {
                $(this).remove();
            });
        });
    },

    /**
     * 操作表
     * @param option.actions {Array} 每个actionItems对象
     * {
     *    text: 'xxx',  描述标题
     *    value: 'xxx',  对应的值，用于逻辑处理
     *    onClick: function(value){},  点击事件回调，同时将定义的value返回
     * }
     * @param option.title 标题
     *
     * $.actionSheet({
     *    title: 'xxxxx',
     *    actions: [
     *       {
     *          text: 'xxx',
     *          value: 'xxx',
     *          onClick: function(value){},
     *       },
     *       ...
     *    ],
     * })
     */
    actionSheet: function actionSheet(option) {
        option = $.extend({}, {
            actions: [],
            title: ''
        }, option);

        if (option.actions.length == 0) {
            return;
        }

        // 隐藏该组件
        function hideActionSheet() {
            $('#iosActionsheet').removeClass('weui-actionsheet_toggle');
            $('#iosMask').fadeOut('fast', function () {
                $(this).remove();
                $('#iosActionsheet').remove();
                $(document).off();
            });
        }

        var actionSheetHTML = '<div class="weui-actionsheet" id="iosActionsheet">\n' + '            <div class="weui-actionsheet__title">\n' + '                <p class="weui-actionsheet__title-text">' + option.title + '</p>\n' + '            </div>\n' + '            <div class="weui-actionsheet__menu">\n' + '            </div>\n' + '            <div class="weui-actionsheet__action">\n' + '                <div class="weui-actionsheet__cell" id="iosActionsheetCancel">取消</div>\n' + '            </div>\n' + '        </div>';
        _templateTempDiv.innerHTML = actionSheetHTML;

        var actionSheet = $(_templateTempDiv).children();
        // 标题处理
        if (!option.title) {
            actionSheet.find('.weui-actionsheet__title').remove();
        }
        // 注入cell
        actionSheet.find('.weui-actionsheet__menu').empty().append(option.actions.map(function (item, i) {
            var actionItem = '<div class="weui-actionsheet__cell actionsheet__menuitem' + i + '">' + item.text + '</div>';
            // 防穿透
            $(document).on("touchstart", ".actionsheet__menuitem" + i, function () {
                if (typeof item.onClick === 'function') {
                    item.onClick(item.value);
                    hideActionSheet();
                }
            });
            return $(actionItem)[0];
        }));
        $('body').append(actionSheet[0]);

        var maskHTML = '<div class="weui-mask" id="iosMask" style="display: none;"></div>';
        var $mask = $(maskHTML);
        $mask.on('click', hideActionSheet);
        $('#iosActionsheetCancel').on('click', hideActionSheet);
        $('body').append($mask[0]);

        $(actionSheet[0]).addClass('weui-actionsheet_toggle');
        $mask.fadeIn('fast');
    },

    /**
     * 加载弹出式提示
     * @param option.showStatus "show" | "hide"
     * @param option.text 描述
     */
    loadingToast: function loadingToast(option) {
        option = $.extend({}, {
            showStatus: 'show',
            text: '数据加载中'
        }, option);

        var loadingToastHTML = '<div id="loadingToast">\n' + '        <div class="weui-mask_transparent"></div>\n' + '        <div class="weui-toast">\n' + '            <i class="weui-loading weui-icon_toast"></i>\n' + '            <p class="weui-toast__content">' + option.text + '</p>\n' + '        </div>\n' + '    </div>';
        var $loadingToast = $(loadingToastHTML);

        if ($('body').find('#loadingToast').length == 0 && option.showStatus == 'show') {
            $('body').append($loadingToast);
            $loadingToast.fadeIn('fast');
        } else {
            $('body').find('#loadingToast').fadeOut('fast');
            $('body').find('#loadingToast').remove();
        }
    },

    /**
     * 接口代理调用
     * @param option.scene 接口对应的环境，跟随APP的环境来定义
     * @param option.funcNo 功能号
     * @param option.params 接口输入参数，对象类型
     * @param option.success 成功回调
     * @param option.error 失败回调
     *
     * $.http({
     *    scene: 'sit',
     *    funcNo: 'IF096103',
     *    params: {
     *       orderNo: 'xxxxxxx',
     *    },
     *    success: function(data, textStatus, jqXHR){
     *       // data 可能是 xmlDoc, jsonObj, html, text, 等等...
     *       this; // 调用本次AJAX请求时传递的options参数
     *    },
     *    error: function(XMLHttpRequest, textStatus, errorThrown){
     *       // 通常 textStatus 和 errorThrown 之中
     *       // 只有一个会包含信息
     *       this; // 调用本次AJAX请求时传递的options参数
     *    },
     * })
     */
    http: function http(option) {
        option = $.extend({}, {
            scene: 'sit',
            funcNo: '',
            params: {},
            success: function success() {},
            error: function error() {}
        }, option);

        if (!option.funcNo) {
            alert('请定义功能号');
            return;
        }

        // 获取当前脚本的src
        var jsSrc = getJsPath('tools.js');
        // 获取该脚本src中定义的env，从而获取对应的环境变量
        var env = getParam(jsSrc, 'env');
        // 获取对应的环境变量对象
        var configuration = Config[env];

        // 代理请求
        $.ajax(configuration.domain + configuration.path, {
            type: 'POST',
            crossDomain: true,
            contentType: 'application/json',
            data: JSON.stringify({
                "target": "http://itest.dfzq.com.cn/api/gateway?func=" + option.funcNo + "&scene=" + option.scene,
                "header": {
                    "funcNo": option.funcNo,
                    "ver": configuration.ver,
                    "channel": configuration.channel,
                    "token": window.token,
                    "vtDeviceId": window.vtDeviceId
                },
                "payload": option.params
            }),
            success: option.success,
            error: option.error
        });
    },

    /**
     * 检查登录状态，返回boolean值来区分是否登录，true代表已登录，false代表未登录
     * @param code 错误码
     *
     * $.checkLoginState(3000)
     */
    checkLoginState: function checkLoginState(code) {
        var isServerSessionExpired = code >= 3000 && code <= 3019 || code === 3030 || code === 10026 || code === 5200 || code === 3111;
        if (isServerSessionExpired) {
            if (fastman) {
                fastman.onLogin({
                    success: function success(res) {
                        window.token = res.token;
                        window.vtDeviceId = res.vtDeviceId;
                    }
                });
                return false;
            }
        } else {
            return true;
        }
    },

    /**
     * 建立oauth授权
     * @param option.success 成功授权回调
     * @param option.error 成功授权回调
     */
    oauth: function oauth(option) {
        option = $.extend({}, {
            success: function success() {},
            error: function error() {}
        }, option);

        if (fastman) {
            fastman.oauth({
                success: function success(res) {
                    // 由于oauth成功后会自动发送一次onViewWillAppear指令，因此onViewWillAppear指令不应该在内部实现，应放在外部
                    window.token = res.token;
                    window.vtDeviceId = res.vtDeviceId;
                },
                fail: function fail(err) {
                    alert(err.info);
                }
            });
        } else {
            option.success();
        }
    }
});

/***/ })

/******/ });
});
//# sourceMappingURL=tools.js.map