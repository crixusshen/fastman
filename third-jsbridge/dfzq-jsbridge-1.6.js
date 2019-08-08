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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by dfzq on 2017/7/31.
 */

/**
 * 末尾补.0
 * @param num 原始值
 * @param n   位数最大的值
 * @returns {*}
 */
var padZero = function padZero(num, n) {
    var len = num.split('.').length;
    while (len < n) {
        num = num + '.0';
        len++;
    }
    return num;
};

/**
 * 获取APP版本号
 * @param _
 * @returns {*}
 */
var getVersion = function getVersion(_) {
    var groups = navigator.userAgent.toLowerCase().match(/DFYJ\/([\d.]+)/i);
    if (!groups) {
        return undefined;
    } else {
        return groups[1];
    }
};

/**
 * 比较手机系统版本，arg1 > arg2, return 1; arg1 == arg2, return 0; arg1 < arg2, return -1
 * @param compareVersion
 * @returns {number}
 */
var _compareVersion = function _compareVersion(a, b) {
    // 补.0操作
    var _as = a.split('.');
    var _bs = b.split('.');
    var max = Math.max(_as.length, _bs.length);
    a = padZero(a, max);
    b = padZero(b, max);

    var as = a.split('.');
    var bs = b.split('.');
    if (a === b) return 0;

    for (var i = 0; i < as.length; i++) {
        var x = parseInt(as[i]);
        if (!bs[i]) return 1;
        var y = parseInt(bs[i]);
        if (x < y) return -1;
        if (x > y) return 1;
    }
    return -1;
};

/**
 * 比较APP版本，比compareVersion大则返回1，否则返回-1；相等返回0；
 * @param compareVersion
 * @returns {number}
 */
var compareVersion = function compareVersion(_compareVersion2) {
    // 获取当前版本号
    var currentVersion = getVersion();
    if (!currentVersion) {
        return 1;
    } else {
        return _compareVersion(currentVersion, _compareVersion2);
    }
};

exports.getVersion = getVersion;
exports.compareVersion = compareVersion;
exports._compareVersion = _compareVersion;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onLoginEnhance = exports.onViewWillAppear = exports.onWxPay = exports.onNavigateBar = exports.onNavigateNativeTo = exports.onReq = exports.onNavigateBack = exports.onNavigateTo = exports.onShare = exports.onLogin = exports.oauth = exports.ready = exports.isFromAndroid = exports.isFromIOS = exports.isFromWeiXin = exports.isFromApp = undefined;

var _util = __webpack_require__(0);

var _core = __webpack_require__(1);

var _version = __webpack_require__(3);

var _log = __webpack_require__(2);

/**
 * Created by dfzq on 2017/8/17.
 * dfzq jsbridge-sdk
 * v1.0 : 支持ready, oauth, onLogin, onShare, onNavigateTo, onNavigateBack指令
 * v1.1 : 支持onReq, isFromApp指令，并规范了相关success, fail闭包的消息输出结构
 * v1.2 : 支持onNavigateNativeTo，onNavigate指令，同时新增onApiRequest兼容性处理
 * v1.3 : 修复IOS缩略图尺寸过大(小于32kb)导致无法微博分享的bug
 * v1.4 : 增加微信支付、视图出现回调函数
 * v1.5 : 增加onLoginEnhance 登录加强版 支持资金账号登录
 * v1.6 : 增加开发者模式，同时增加isFromIOS和isFromAndroid指令
 */
var isRegisterOk = false;

// 空函数
var noop = function noop() {};

// 区分设备系统
var ua = navigator.userAgent;
var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);

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

// 是否来自于iOS
var isFromIOS = function isFromIOS() {
  return !!(ipad || iphone || ipod);
};

// 是否来自于Android
var isFromAndroid = function isFromAndroid() {
  return !!android;
};

/**
 * 初始化桥接
 * @param callback 成功回调
 */
var ready = function ready() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;


  (0, _core.ready)(callback);
};

/**
 * 启动授权
 * APP：走refreshToken授权模式，获取token和vtDeviceId
 * @param callback 回调函数处理
 * @constructor
 */
var oauth = function oauth(options) {

  // 默认值
  var defaultOptions = {
    success: noop,
    fail: noop
  };
  options = (0, _util._extends)({}, defaultOptions, options);

  if (isFromApp()) {
    // 首先建立js桥接模式
    if (!isRegisterOk) {
      isRegisterOk = true;

      if (WebViewJavascriptBridge) {
        (0, _log.log)("oauth start");
        WebViewJavascriptBridge.callHandler('refreshToken', {}, function (response) {
          if (typeof response == 'string') {
            response = JSON.parse(response);
          }

          // 成功处理
          if (response.code == '0') {
            (0, _log.log)("oauth successful:" + JSON.stringify(response));
            var AppAuthorize = {};
            // 为APP授权模块标志授权标识token和虚拟设备ID
            AppAuthorize.token = response.token;
            AppAuthorize.vtDeviceId = response.vtDeviceId;

            if (typeof options.success === 'function') {
              var payload = (0, _core.wrapOkPayload)(AppAuthorize);
              options.success(payload);
            }
          }
          // 失败处理
          else {
              (0, _log.log)("oauth failure:" + JSON.stringify(response));
              if (typeof options.fail === 'function') {
                var error = (0, _core.wrapNotOkPayload)(-1, '桥接程序建立失败');
                options.fail(error);
              }
            }

          isRegisterOk = false;
          (0, _log.log)("oauth end");
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
  var defaultOptions = {
    success: noop,
    fail: noop
  };
  options = (0, _util._extends)({}, defaultOptions, options);

  if (isFromApp()) {
    (0, _core.onRequest)('2', '', options.success, options.fail);
  } else {
    blankPage();
  }
};

/**
 * [onLoginEnhance 打开加强版原生登录视图]
 * @param  {[type]} options [{
 *  fundtype: string 3集中交易  6融资融券 18期权  多个时用逗号相隔 3,6,18
 *  success:function(res){ 登录之后的回调函数
 *  res.isLogin bool 是否登录成功
 *  res.bizSysId 3集中交易  6融资融券 18期权 表示登录成功之后的账号类型
 *  }
 * }]
 * @return {[type]}         [description]
 */
var onLoginEnhance = function onLoginEnhance(options) {
  var defaultOptions = {
    success: noop,
    fail: noop
  };
  options = (0, _util._extends)({}, defaultOptions, options);
  options.type = "1";
  if (isFromApp()) {
    (0, _core.onRequest)('1', options, options.success, options.fail);
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

    // 微博分享的缩略图必须小于32kb，目前ios没有做限制，因此采用一张默认图片来代替从而保证可以正常进行微博分享
    if (options.channel == '3' && (ipad || iphone || ipod)) {
      options.thumbImageUrl = defaultOptions.thumbImageUrl;
    }

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
  var defaultOptions = {
    title: '',
    uri: '',
    success: noop,
    fail: noop
  };
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
  var defaultOptions = {
    title: '',
    uri: '',
    success: noop,
    fail: noop
  };
  options = (0, _util._extends)({}, defaultOptions, options);

  if (isFromApp()) {
    options.complete = options.success;
    (0, _core.onBack)(options);
  } else {
    blankPage();
  }
};

/**
 * 第三方接口调用请求
 * @param functionNo    功能号
 * @param options
 */
var onReq = function onReq(functionNo, options) {
  // 默认值
  var defaultOptions = {
    success: noop,
    fail: noop
  };
  options = (0, _util._extends)({}, defaultOptions, options);

  if (isFromApp()) {
    (0, _core.onApiRequest)(functionNo, options, options.success, options.fail);
  } else {
    blankPage();
  }
};

/**
 * 使用schema协议实现原生页面跳转。
 * @param _
 */
var onNavigateNativeTo = function onNavigateNativeTo(options) {

  // 默认值
  var defaultOptions = {
    url: '',
    success: noop,
    fail: noop
  };
  options = (0, _util._extends)({}, defaultOptions, options);

  // >=3.2.6使用dfyj20170811://dl，<3.2.6使用dfyj://dl
  var $versionCompare = (0, _version.compareVersion)('3.2.6');
  if ($versionCompare >= 0 && options.url != '') {
    options.url = options.url.replace('dfyj://dl', 'dfyj20170811://dl');
  }

  if (isFromApp()) {
    (0, _core.onDynamicLink)(options);
  } else {
    blankPage();
  }
};

/**
 * 设置导航头
 * @param options
 */
var onNavigateBar = function onNavigateBar(options) {

  // 默认值
  var defaultOptions = {
    title: '',
    type: '0',
    rightButtonTitle: '',
    onRightButtonPress: noop,
    isShowBackButton: true,
    success: noop,
    fail: noop
  };
  options = (0, _util._extends)({}, defaultOptions, options);

  if (isFromApp()) {
    if (options.onRightButtonPress != noop) {
      if (WebViewJavascriptBridge) {
        WebViewJavascriptBridge.registerHandler("onRightButtonPress", options.onRightButtonPress);
      }
    }

    (0, _core.onNavigationBar)(options);
  } else {
    blankPage();
  }
};

/**
 * 微信支付
 * @param appId 微信开放平台审核通过的应用APPID
 * @param partnerId 商家向财付通申请的商家id
 * @param prePayId 预支付订单
 * @param noncestr 随机串，防重发
 * @param timestamp 时间戳，防重发
 * @param package 商家根据财付通文档填写的数据和签名
 * @param sign 商家根据微信开放平台文档对数据做的签名
 */
var onWxPay = function onWxPay(options) {
  // 默认值
  var defaultOptions = {
    //
    appId: "",
    // 商家向财付通申请的商家id
    partnerId: "",
    // 预支付订单
    prePayId: "",
    // 随机串，防重发
    noncestr: "",
    // 时间戳，防重发
    timestamp: "",
    // 商家根据财付通文档填写的数据和签名
    package: "Sign=WXPay",
    // 商家根据微信开放平台文档对数据做的签名
    sign: ""
  };
  options = (0, _util._extends)({}, defaultOptions, options);

  if (isFromApp()) {
    (0, _core.onRequest)('5', {
      appId: options.appId,
      partnerId: options.partnerId,
      prePayId: options.prePayId,
      noncestr: options.noncestr,
      timestamp: options.timestamp,
      package: options.package,
      sign: options.sign
    }, options.success, options.fail);
  } else {
    blankPage();
  }
};

/**
 * 视图出现时（通常是当前视图被某个视图盖在了底层，当上面的视图消失后）触发
 * @param callback 需要回调处理的函数实现
 */
var onViewWillAppear = function onViewWillAppear(callback) {
  if (typeof callback == 'function') {
    if (isFromApp()) {
      (0, _log.log)('pageWillAppear->{}');
      // 只能作用于authReady模式下，如果是noAuthReady可直接使用框架自身提供的pageWillAppear事件
      (0, _core.pageWillAppear)(function () {
        if (document.readyState[0] !== "l") {
          (0, _log.log)('pageWillAppear<-{DOMContentReady:yes}');
          callback();
        } else {
          document.addEventListener("DOMContentLoaded", function () {
            (0, _log.log)('pageWillAppear<-{DOMContentLoaded:yes}');
            callback();
          });
        }
      });
    } else {
      blankPage();
    }
  }
};

exports.isFromApp = isFromApp;
exports.isFromWeiXin = isFromWeiXin;
exports.isFromIOS = isFromIOS;
exports.isFromAndroid = isFromAndroid;
exports.ready = ready;
exports.oauth = oauth;
exports.onLogin = onLogin;
exports.onShare = onShare;
exports.onNavigateTo = onNavigateTo;
exports.onNavigateBack = onNavigateBack;
exports.onReq = onReq;
exports.onNavigateNativeTo = onNavigateNativeTo;
exports.onNavigateBar = onNavigateBar;
exports.onWxPay = onWxPay;
exports.onViewWillAppear = onViewWillAppear;
exports.onLoginEnhance = onLoginEnhance;

/***/ })
/******/ ]);
});
//# sourceMappingURL=dfzq-jsbridge-1.6.js.map