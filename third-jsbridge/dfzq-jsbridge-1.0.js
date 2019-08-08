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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by dfzq on 2017/4/13.
 */
/**
 * 获取绝对路径
 * @param url
 */
var getAbsoluteUrl = function getAbsoluteUrl(url) {
    var link = document.createElement('a');
    link.setAttribute('href', url);
    var absoluteUrl = link.href;
    link = null;
    return absoluteUrl;
};

/**
 * 属性继承
 * @type {*}
 * @private
 */
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            // 源对象中是否存在对象键值
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

/**
 * 判断是否为空
 * @param str {string} 需要判断的值
 * @returns {boolean}
 */
var isEmpty = function isEmpty(str) {
    return !(str != null && (!!str.length ? true : str.length > 0));
};

exports.getAbsoluteUrl = getAbsoluteUrl;
exports._extends = _extends;
exports.isEmpty = isEmpty;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onApiRequest = exports.pageWillAppear = exports.onRequest = exports.onDynamicLink = exports.subscribeNotify = exports.onNotify = exports.onPushView = exports.onNavigationBar = exports.onRefresh = exports.onBack = exports.ready = exports.wrapNotOkPayload = exports.wrapOkPayload = undefined;

var _util = __webpack_require__(0);

var _log = __webpack_require__(2);

// 区分设备系统
/**
 * Created by dfzq on 2017/4/13.
 */
var ua = navigator.userAgent;
var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
var isFromApp = !!ua.toLowerCase().match(/DFYJ/i);

// 初始化桥接对象
var init = function init(bridge) {
  bridge.init(function (message, responseCallback) {
    if (responseCallback) responseCallback(data);
  });

  return bridge;
};

/**
 * 初始化桥接对象
 * connectWebViewJavascriptBridge
 * @param callback
 */
var ready = function ready(callback) {
  var __cb___ = function __cb___(__bridge___) {
    (0, _log.log)('ready end');
    callback(__bridge___);
  };

  if (isFromApp) {
    if (ipad || iphone || ipod) {
      // 新版本兼容IOS
      if (window.WebViewJavascriptBridge) {
        (0, _log.log)('ready sync start');
        return __cb___(WebViewJavascriptBridge);
      }
      (0, _log.log)('ready async start(push)');
      if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(__cb___);
      }
      (0, _log.log)('ready async start(iframe)');
      window.WVJBCallbacks = [__cb___];
      var WVJBIframe = document.createElement('iframe');
      WVJBIframe.style.display = 'none';
      WVJBIframe.src = 'https://__bridge_loaded__';
      document.documentElement.appendChild(WVJBIframe);
      setTimeout(function () {
        document.documentElement.removeChild(WVJBIframe);
      }, 0);
    } else if (android) {
      // 旧版本兼容Android
      if (window.WebViewJavascriptBridge) {
        (0, _log.log)('ready sync start');
        __cb___(init(WebViewJavascriptBridge));
      } else {
        (0, _log.log)('ready async start');
        document.addEventListener('WebViewJavascriptBridgeReady', function () {
          // 以异步形式加载
          __cb___(init(WebViewJavascriptBridge));
        }, false);
      }
    } else {
      (0, _log.log)('other platform ready sync start');
      __cb___();
    }
  } else {
    (0, _log.log)('non app ready sync start');
    __cb___();
  }
};

// 空函数
var noop = function noop() {};

/**
 * 成功消息体的包装
 * @param payload 成功对象
 */
// const wrapOkPayload = (payload = {}) => ({
//     error: false,
//     info: 'ok',
//     payload: payload,
// })
var wrapOkPayload = function wrapOkPayload() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return payload;
};

/**
 * 失败消息体的包装
 * @param info 错误描述
 */
var wrapNotOkPayload = function wrapNotOkPayload() {
  var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
  var info = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'error';
  return {
    // error: true,
    code: code,
    info: info
  };
};

/**
 * APP WebView后退，后退到栈的最外层
 * @param options
 */
var onBack = function onBack(options) {
  // 默认配置
  var _options = {
    complete: noop
  };
  // 复制
  _options = (0, _util._extends)({}, _options, options);

  (0, _log.log)('onBack->' + JSON.stringify(_options));
  WebViewJavascriptBridge.callHandler('back', _options, function (response) {
    (0, _log.log)('onBack<-' + JSON.stringify(response));
    _options.complete(response);
  });
};

/**
 * APP WebView刷新
 * @param options
 */
var onRefresh = function onRefresh(options) {
  var _options = {
    complete: noop
  };
  _options = (0, _util._extends)({}, _options, options);

  (0, _log.log)('onRefresh->' + JSON.stringify(_options));
  WebViewJavascriptBridge.callHandler('refresh', _options, function (response) {
    (0, _log.log)('onRefresh<-' + JSON.stringify(response));
    _options.complete(response);
  });
};

/**
 * 设置原生导航条
 * @param options
 * {
 *    "title": "xxxxx",
 *    "type": "0"       // 0-默认 1-切换类
 * }
 */
var onNavigationBar = function onNavigationBar(options) {
  var _options = {
    complete: noop
  };
  _options = (0, _util._extends)({}, _options, options);

  (0, _log.log)('onNavigationBar->' + JSON.stringify(_options));
  WebViewJavascriptBridge.callHandler('navigationBar', _options, function (response) {
    (0, _log.log)('onNavigationBar<-' + JSON.stringify(response));
    _options.complete(response);
  });
};

/**
 * 打开一个新的webview
 * @param options
 * {
 *    "title": "xxxxx",      // 导航名称，如果html设置title，以html为主
 *    "uri": "xxxxxxx",      // webview请求的路由地址，目前只支持http协议，今后可支持shema协议
 *    "locktype": 0,         // 0-不需要手势密码；1-手势密码锁屏；2-资金账号锁屏；
 * }
 */
var onPushView = function onPushView(options) {
  var _options = {
    title: ''
  };
  _options = (0, _util._extends)({}, _options, options);

  if (!!_options.uri) {
    if (_options.uri.indexOf('http') != -1 || _options.uri.indexOf('https') != -1) {} else {
      _options.uri = (0, _util.getAbsoluteUrl)(_options.uri);
    }
  }

  (0, _log.log)('onPushView->' + JSON.stringify(_options));
  WebViewJavascriptBridge.callHandler('pushView', _options, function (response) {
    (0, _log.log)('onPushView<-' + JSON.stringify(response));
  });
};

/**
 * 原生页面将要出现时触发的事件
 * @param callback
 */
var pageWillAppear = function pageWillAppear(callback) {
  if (typeof callback == 'function') WebViewJavascriptBridge.registerHandler("pageWillAppear", callback);
};

/**
 * H5发送通知给客户端
 * @param options
 */
var onNotify = function onNotify(options) {
  var _options = {
    type: 'javascriptNotify'
  };
  _options = (0, _util._extends)({}, _options, options);

  (0, _log.log)('onNotify->' + JSON.stringify(_options));
  WebViewJavascriptBridge.callHandler('notify', _options, function (response) {
    (0, _log.log)('onNotify<-' + JSON.stringify(response));
  });
};

/**
 * H5注册通知，由客户端进行通知
 * @param type  事件类型名称
 * @param callback  回调处理
 */
var notifyQueue = {};
var subscribeNotify = function subscribeNotify(type, callback) {
  if (typeof callback == 'function') {
    //回调函数存在队列中
    notifyQueue[type] = callback;
    var _type = type;
    if (_type == 'sae_video') {
      _type = 'notify';
    }

    (0, _log.log)('subscribeNotify->' + type);
    WebViewJavascriptBridge.registerHandler(_type, function (data) {
      (0, _log.log)('subscribeNotify<-' + JSON.stringify(data));
      // //获取data.type才是H5定义的type
      // if (Object.prototype.toString.call(data).toLocaleLowerCase() == '[object String]'.toLocaleLowerCase()) {
      //   data = JSON.parse(data);
      // }
      if (notifyQueue[_type]) {
        notifyQueue[_type](data);
      }
    });
  }
};

/**
 * 调用Schema Url
 * @param options
 */
var onDynamicLink = function onDynamicLink(options) {
  var _options = {
    url: ''
  };
  _options = (0, _util._extends)({}, _options, options);

  (0, _log.log)('onDynamicLink->' + JSON.stringify(_options));
  WebViewJavascriptBridge.callHandler('dynamicLink', _options, function (response) {
    (0, _log.log)('onDynamicLink<-' + JSON.stringify(response));
  });
};

// 存储Request指令订阅Handlers
var requestHandlerMap = {};
// 是否注册了Request指令订阅Handlers
var requestHandlerRegisterFlag = false;

/**
 * 调用Request指令（通常作用在一些原生和客户端之间比较特殊的操作）
 * @param operationType     操作指令（见文档）
 * @param payloadOptions    消息体结构
 */
var onRequest = function onRequest(operationType, payloadOptions, okCallBack, notOkCallBack) {
  var _options = {
    type: !operationType ? '1' : operationType,
    payload: !payloadOptions ? {} : payloadOptions
  };

  requestHandlerMap[operationType + '-ok'] = typeof okCallBack === 'function' ? okCallBack : noop;
  requestHandlerMap[operationType + '-notok'] = typeof notOkCallBack === 'function' ? notOkCallBack : noop;

  // IOS同步回调处理
  (0, _log.log)('onRequest->' + JSON.stringify(_options));
  WebViewJavascriptBridge.callHandler('request', _options, function (response) {

    if (typeof response == 'string') {
      response = JSON.parse(response);
    }

    (0, _log.log)('onRequest<-' + JSON.stringify(response));
    if (response.error || response.error === 'true') {
      if (typeof notOkCallBack === 'function') {
        requestHandlerMap[operationType + '-notok'](wrapNotOkPayload(-1, response.info));
      }
    } else {
      if (typeof okCallBack === 'function') {
        // 防止安卓指令调用成功同步进入的控制
        if (ipad || iphone || ipod || response.payload) {
          requestHandlerMap[operationType + '-ok'](wrapOkPayload(response.payload));
        }
      }
    }
  });

  if (!requestHandlerRegisterFlag) {
    // Android异步回调处理
    WebViewJavascriptBridge.registerHandler('request', function (response) {

      if (typeof response == 'string') {
        response = JSON.parse(response);
      }

      if (response.error || response.error === 'true') {
        if (typeof requestHandlerMap[operationType + '-notok'] === 'function') {
          requestHandlerMap[operationType + '-notok'](wrapNotOkPayload(-1, response.info));
        }
      } else {
        if (typeof requestHandlerMap[operationType + '-ok'] === 'function') {
          requestHandlerMap[operationType + '-ok'](wrapOkPayload(response.payload));
        }
      }
    });
    requestHandlerRegisterFlag = true;
  }
};

/**
 * 提供给第三方调用中台接口的函数
 * @param functionNo        中台功能号
 * @param payloadOptions    中台消息体
 * @param okCallBack        成功回调函数
 * @param notOkCallBack     失败回调函数
 */
var onApiRequest = function onApiRequest(functionNo, payloadOptions, okCallBack, notOkCallBack) {

  if ((0, _util.isEmpty)(functionNo)) {
    throw new Error('functionNo is required ...');
  } else {
    var _options = {
      funcId: functionNo,
      payload: !payloadOptions ? {} : payloadOptions
    };
  }

  (0, _log.log)('onApiRequest->' + JSON.stringify(_options));
  WebViewJavascriptBridge.callHandler('apiRequest', _options, function (response) {
    (0, _log.log)('onApiRequest<-' + JSON.stringify(response));

    if (typeof response == 'string') {
      response = JSON.parse(response);
    }

    // 2017-12-26:对脚本逻辑做兼容，IOS认为业务异常和系统异常response.error都是true，ANDROID认为业务异常和业务成功时response.error是false,而系统异常response.error是true

    // IOS认为业务异常和系统异常response.error都是true,业务成功response.error是false
    if (ipad || iphone || ipod) {

      if (response.error || response.error === 'true') {
        // 接口业务异常
        if (response.payload) {
          if (typeof notOkCallBack === 'function') {
            notOkCallBack(wrapNotOkPayload(response.payload.code, response.payload.info));
          }
        }
        // 客户端自身应用级别错误（ios不给payload字段）
        else {
            if (typeof notOkCallBack === 'function') {
              notOkCallBack(wrapNotOkPayload(-1, response.info));
            }
          }
      } else {
        if (typeof okCallBack === 'function') {
          var re = {};
          if (response.payload) {
            if (typeof response.payload.data == 'string') {
              re = JSON.parse(response.payload.data);
            } else {
              re = response.payload.data;
            }
          }

          okCallBack(wrapOkPayload(re));
        }
      }
    }
    // ANDROID认为业务异常和业务成功时response.error是false,而系统异常response.error是true
    else {

        if (response.error || response.error === 'true') {
          if (typeof notOkCallBack === 'function') {
            notOkCallBack(wrapNotOkPayload(-1, response.info));
          }
        } else {
          var _re = {};
          if (typeof response.payload.data == 'string') {
            _re = JSON.parse(response.payload.data);
          } else {
            _re = response.payload.data ? response.payload.data : {};
          }

          // 业务异常
          if (response.payload.code != '0') {
            if (typeof notOkCallBack === 'function') {
              notOkCallBack(wrapNotOkPayload(response.payload.code, response.payload.info));
            }
          }
          // 业务成功
          else {
              if (typeof okCallBack === 'function') {
                okCallBack(wrapOkPayload(_re));
              }
            }
        }
      }
  });
};

exports.wrapOkPayload = wrapOkPayload;
exports.wrapNotOkPayload = wrapNotOkPayload;
exports.ready = ready;
exports.onBack = onBack;
exports.onRefresh = onRefresh;
exports.onNavigationBar = onNavigationBar;
exports.onPushView = onPushView;
exports.onNotify = onNotify;
exports.subscribeNotify = subscribeNotify;
exports.onDynamicLink = onDynamicLink;
exports.onRequest = onRequest;
exports.pageWillAppear = pageWillAppear;
exports.onApiRequest = onApiRequest;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by dfzq on 2019/6/22.
 */
var log = function log(str) {
  var _d = new Date();
  console.log(_d.toLocaleTimeString() + ' ' + _d.getMilliseconds() + ":" + str);
};

exports.log = log;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onNavigateBack = exports.onNavigateTo = exports.onShare = exports.onLogin = exports.oauth = exports.ready = undefined;

var _util = __webpack_require__(0);

var _core = __webpack_require__(1);

/**
 * Created by dfzq on 2017/8/17.
 */
var isRegisterOk = false;

// 空函数
var noop = function noop() {};

/**
 * 成功消息体的包装
 * @param payload 成功对象
 */
var wrapOkPayload = function wrapOkPayload() {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return {
        error: false,
        info: 'ok',
        payload: payload
    };
};

/**
 * 失败消息体的包装
 * @param info 错误描述
 */
var wrapNotOkPayload = function wrapNotOkPayload() {
    var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'error';
    return {
        error: true,
        info: info
    };
};

// blankPage
var blankPage = function blankPage() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '请在东方赢家财富版客户端打开链接';

    var bHtml = document.createElement('div');
    bHtml.style.cssText = 'display:table;position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;background:white;z-index:99999;';
    bHtml.innerHTML = '<div style="display:table-cell;vertical-align: middle;text-align: center;">' + message + '</div>';

    document.body.appendChild(bHtml);
};

// 是否来自于APP
var isFromApp = function isFromApp() {
    return !!navigator.userAgent.toLowerCase().match(/DFYJ/i);
};

// 是否来自于微信
var isFromWeiXin = function isFromWeiXin() {
    return !!navigator.userAgent.toLowerCase().match(/MicroMessenger/i);
};

/**
 * 初始化桥接
 * @param callback 成功回调
 */
var ready = function ready() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;


    if (isFromApp()) {
        (0, _core.ready)(callback);
    } else {
        blankPage();
    }
};

/**
 * 启动授权
 * APP：走refreshToken授权模式，获取token和vtDeviceId
 * @param callback 回调函数处理
 * @constructor
 */
var oauth = function oauth(options) {

    // 默认值
    var defaultOptions = { success: noop, fail: noop };
    options = (0, _util._extends)({}, defaultOptions, options);

    if (isFromApp()) {
        // 首先建立js桥接模式
        if (!isRegisterOk) {
            isRegisterOk = true;

            if (WebViewJavascriptBridge) {
                WebViewJavascriptBridge.callHandler('refreshToken', {}, function (response) {
                    if (typeof response == 'string') {
                        response = JSON.parse(response);
                    }

                    // 成功处理
                    if (response.code == '0') {
                        var AppAuthorize = {};
                        // 为APP授权模块标志授权标识token和虚拟设备ID
                        AppAuthorize.token = response.token;
                        AppAuthorize.vtDeviceId = response.vtDeviceId;

                        if (typeof options.success === 'function') {
                            var payload = wrapOkPayload(AppAuthorize);
                            options.success(payload);
                        }
                    }
                    // 失败处理
                    else {
                            if (typeof options.fail === 'function') {
                                var error = wrapNotOkPayload('桥接程序建立失败');
                                options.fail(error);
                            }
                        }

                    isRegisterOk = false;
                });
            }
        }
    } else {
        blankPage();
    }
};

/**
 * 打开原生登录视图
 * @param _
 */
var onLogin = function onLogin(options) {

    // 默认值
    var defaultOptions = { success: noop, fail: noop };
    options = (0, _util._extends)({}, defaultOptions, options);

    if (isFromApp()) {
        (0, _core.onRequest)('2', '', options.success, options.fail);
    } else {
        blankPage();
    }
};

/**
 * 分享
 * @param channel 渠道类型，"1":微信好友 "2":微信朋友圈 "3":新浪微博 "4":qq好友
 * @param title 分享标题名称
 * @param description 分享摘要信息
 * @param thumbImageUrl 缩略图片地址，需要压缩到32kb
 * @param link 跳转地址
 * @param ext 扩展字段
 */
var onShare = function onShare(options) {

    // 默认值
    var defaultOptions = {
        channel: '1',
        title: '',
        description: '',
        thumbImageUrl: 'http://wxs.dfzq.com.cn/fileRes/new_download/images/new_pic.jpg',
        link: '',
        ext: '',
        success: noop,
        fail: noop
    };
    options = (0, _util._extends)({}, defaultOptions, options);

    if (isFromApp()) {
        (0, _core.onRequest)('4', {
            channel: options.channel,
            title: options.title,
            description: options.description,
            thumbImageUrl: options.thumbImageUrl,
            link: options.link,
            ext: options.ext
        }, options.success, options.fail);
    } else {
        blankPage();
    }
};

/**
 * 保留当前页面，跳转到应用内的某个页面，使用onNavigateBack可以返回到原页面。
 * @param _
 */
var onNavigateTo = function onNavigateTo(options) {

    // 默认值
    var defaultOptions = { title: '', uri: '', success: noop, fail: noop };
    options = (0, _util._extends)({}, defaultOptions, options);

    if (isFromApp()) {
        (0, _core.onPushView)(options);
    } else {
        blankPage();
    }
};

/**
 * 关闭当前页面，返回上一页面或多级页面。
 * @param _
 */
var onNavigateBack = function onNavigateBack(options) {

    // 默认值
    var defaultOptions = { title: '', uri: '', success: noop, fail: noop };
    options = (0, _util._extends)({}, defaultOptions, options);

    if (isFromApp()) {
        options.complete = options.success;
        (0, _core.onBack)(options);
    } else {
        blankPage();
    }
};

exports.ready = ready;
exports.oauth = oauth;
exports.onLogin = onLogin;
exports.onShare = onShare;
exports.onNavigateTo = onNavigateTo;
exports.onNavigateBack = onNavigateBack;

/***/ })
/******/ ]);
});
//# sourceMappingURL=dfzq-jsbridge-1.0.js.map