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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Plugin;
/**
 * Created by dfzq on 2017/4/7.
 */
var passGuard = null;

// // 设备检测
// var isIpad = window.navigator.appVersion.match(/iPad/gi);
// var isIPhone = window.navigator.appVersion.match(/iphone/gi);
// var isSMT800UCPAD = window.navigator.appVersion.match(/SM-T800/gi);
// var isAndroidUC = window.navigator.appVersion.match(/UCBrowser/gi);
// var isLenovoA890e360 = window.navigator.appVersion.match(/Lenovo A890e/gi) && window.navigator.appVersion.match(/360 Aphone Browser/gi);
// var isHuaWeiD26070 = window.navigator.appVersion.match(/HUAWEI D2-6070/gi) && window.navigator.appVersion.match(/LieBaoFast/gi);
// var isFirst = true;
//
// // 安卓系统中需要resize操作
// function resize() {
//     var value = 0;
//     var clientValue = 0;
//     var height = screen.height;
//     var width = screen.width;
//     var clientHeight = document.documentElement.clientHeight;
//     var clientWidth = document.documentElement.clientWidth;
//     var dpr = window.devicePixelRatio;
//     switch (window.orientation) {
//         case 0:
//         case 180:
//             if (isSMT800UCPAD) {
//                 value = Math.max(height, width);
//                 clientValue = Math.max(clientHeight, clientWidth);
//                 if (!isIpad && !isIPhone) {
//                     if (value / dpr >= clientValue && clientWidth != width) {
//                         value = value / dpr;
//                     }
//                 }
//             } else {
//                 value = Math.min(height, width);
//                 clientValue = Math.min(clientHeight, clientWidth);
//                 if (!isIpad && !isIPhone) {
//                     if (Math.ceil(value / dpr) >= clientValue && clientHeight != height) {
//                         value = value / dpr;
//                     }
//                 }
//             }
//             break;
//         case -90:
//         case 90:
//             if (isSMT800UCPAD) {
//                 value = Math.min(height, width);
//                 clientValue = Math.min(clientHeight, clientWidth);
//                 if (!isIpad && !isIPhone) {
//                     if (value / dpr >= clientValue && clientHeight != height) {
//                         value = value / dpr;
//                     }
//                 }
//             } else if (isLenovoA890e360 || isHuaWeiD26070) {
//                 value = Math.max(height, width);
//                 clientValue = Math.max(clientHeight, clientWidth);
//                 if (!isIpad && !isIPhone) {
//                     if (value / dpr >= clientValue && clientWidth != width) {
//                         value = value / dpr - 100;
//                     }
//                 }
//             } else {
//                 value = Math.max(height, width);
//                 clientValue = Math.max(clientHeight, clientWidth);
//                 if (!isIpad && !isIPhone) {
//                     if (Math.ceil(value / dpr) >= clientValue && clientWidth != width) {
//                         value = value / dpr;
//                     }
//                 }
//             }
//             break;
//         default:
//             value = width;
//             break;
//     }
//     window.remFontSize = value / 16;
//     document.documentElement.style.fontSize = value / 16 + "px";
//     try {
//         var T = document.getElementById(kb.settings.id + "_kb").querySelectorAll(".keyboardEle");
//         for (var i = 0; i < T.length; i++) {
//             $(T[i]).removeClass("active").removeClass("active2");
//         }
//     } catch (e) {
//     }
// };
// addClassByUa();
// function addClassByUa() {
//     if (isIpad) {
//         document.querySelector('html').className = 'ua-ipad';
//     }
// };
//
// var isAndroid = window.navigator.appVersion.match(/android/gi);
//
// // 安卓中的处理
// if (isAndroid && isAndroidUC) {
//     var b = null;
//     window.addEventListener("orientationchange", function () {
//         isFirst = false;
//         clearTimeout(b), b = setTimeout(resize, 300);
//     }, !1);
//     var isFirefox = navigator.userAgent.match(/Firefox/gi);
//     if (isFirefox) {
//         window.addEventListener("resize", function () {
//             clearTimeout(b), b = setTimeout(resize, 300);
//         }, !1);
//     }
//     resize();
// }
// // 非安卓系统的处理
// else {
//     ;
//     (function (win, lib) {
//         var doc = win.document;
//         var docEl = doc.documentElement;
//         var metaEl = doc.querySelector('meta[name="viewport"]');
//         var flexibleEl = doc.querySelector('meta[name="flexible"]');
//         var dpr = 0;
//         var scale = 0;
//         var tid;
//         var flexible = lib.flexible || (lib.flexible = {});
//         if (metaEl) {
//             console.warn('将根据已有的meta标签来设置缩放比例');
//             var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
//             if (match) {
//                 scale = parseFloat(match[1]);
//                 dpr = parseInt(1 / scale);
//             }
//         } else if (flexibleEl) {
//             var content = flexibleEl.getAttribute('content');
//             if (content) {
//                 var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
//                 var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
//                 if (initialDpr) {
//                     dpr = parseFloat(initialDpr[1]);
//                     scale = parseFloat((1 / dpr).toFixed(2));
//                 }
//                 if (maximumDpr) {
//                     dpr = parseFloat(maximumDpr[1]);
//                     scale = parseFloat((1 / dpr).toFixed(2));
//                 }
//             }
//         }
//         if (!dpr && !scale) {
//             var isAndroid = win.navigator.appVersion.match(/android/gi);
//             var isIPhone = win.navigator.appVersion.match(/iphone/gi);
//             var devicePixelRatio = win.devicePixelRatio;
//             if (isIPhone) {
//                 if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
//                     dpr = 3;
//                 } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
//                     dpr = 2;
//                 } else {
//                     dpr = 1;
//                 }
//             } else {
//                 dpr = 1;
//             }
//             scale = 1 / dpr;
//         }
//         docEl.setAttribute('data-dpr', dpr);
//         if (!metaEl) {
//             metaEl = doc.createElement('meta');
//             metaEl.setAttribute('name', 'viewport');
//             metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
//             if (docEl.firstElementChild) {
//                 docEl.firstElementChild.appendChild(metaEl);
//             } else {
//                 var wrap = doc.createElement('div');
//                 wrap.appendChild(metaEl);
//                 doc.write(wrap.innerHTML);
//             }
//         }
//         function refreshRem() {
//             var width = docEl.getBoundingClientRect().width;
//             var rem = width / 16;
//             docEl.style.fontSize = rem + 'px';
//             flexible.rem = win.rem = rem;
//         };
//         win.addEventListener('resize', function () {
//             console.log(docEl.getBoundingClientRect().width);
//             clearTimeout(tid);
//             tid = setTimeout(refreshRem, 300);
//         }, false);
//         win.addEventListener('pageshow', function (e) {
//             console.log('pageshow');
//             if (e.persisted) {
//                 clearTimeout(tid);
//                 tid = setTimeout(refreshRem, 300);
//             }
//         }, false);
//         // 进行垃圾回收
//         win.addEventListener('pagehide', function (e) {
//             console.log('pagehide');
//             if (passGuard != null) {
//                 for (var F = 0; F < passGuard.G.length; F++) {
//                     window.clearInterval(passGuard.G[F]);
//                 }
//             }
//         }, false);
//         // if (doc.readyState === 'complete') {
//         //     console.log('complete');
//         //     doc.body.style.fontSize = 12 * dpr + 'px';
//         // } else {
//         //     doc.addEventListener('DOMContentLoaded', function (e) {
//         //         console.log('DOMContentLoaded');
//         //         doc.body.style.fontSize = 12 * dpr + 'px';
//         //     }, false);
//         // }
//         refreshRem();
//         flexible.dpr = win.dpr = dpr;
//         flexible.refreshRem = refreshRem;
//         flexible.rem2px = function (d) {
//             var val = parseFloat(d) * this.rem;
//             if (typeof d === 'string' && d.match(/rem$/)) {
//                 val += 'px';
//             }
//             return val;
//         };
//         flexible.px2rem = function (d) {
//             var val = parseFloat(d) / this.rem;
//             if (typeof d === 'string' && d.match(/px$/)) {
//                 val += 'rem';
//             }
//             return val;
//         }
//     })(window, window['lib'] || (window['lib'] = {}));
// }

;(function (win, lib) {
    // 进行垃圾回收
    win.addEventListener('pagehide', function (e) {
        //console.log('pagehide');
        if (passGuard != null) {
            for (var F = 0; F < passGuard.G.length; F++) {
                window.clearInterval(passGuard.G[F]);
            }
        }
    }, false);
})(window, window['lib'] || (window['lib'] = {}));

// 构建keyBoard构造函数
function keyBoard(options) {
    this.settings = {
        "id": "",
        "aW": 0,
        "pressStatus": 0,
        "kbType": 0,
        "pg": {},
        "odd": 1,
        "status": 0
    };
    if (options != undefined) {
        this.settings = options;
    }
};
keyBoard.prototype.generate = function (passGuardInstance) {
    passGuard = passGuardInstance;
    this.settings.id = new Date().getTime();
    var kb = '';
    var keyActive = false;
    var firstPress = true;
    var _this = this;
    var startTime;
    var header = '<div class="keyboard-header ui-border-t"><i class="icon-dfzq"></i><h6>东方证券安全键盘</h6><i class="icon-keyboard-down keyboardEle" data-value="关闭键盘" data-name="6"></i></div>';

    // 键盘类型,0:全键盘;1:纯数字键盘,默认值0
    if (this.settings.kbType == 0) {
        kb = '<div id="' + this.settings.id + '_kb" class="keyboard-box" style="-webkit-user-select: none;-moz-user-select: none; visibility:hidden;">\
            ' + (this.settings.header ? header : '') + '\
            <div class="keyboard-chinese">\
                <div class="row1">\
                    <div class="english">\
                        <div class="white-52-78 keyboardEle" data-value="q" data-name="0">q</div>\
                        <div class="white-52-78 keyboardEle" data-value="w" data-name="0">w</div>\
                        <div class="white-52-78 keyboardEle" data-value="e" data-name="0">e</div>\
                        <div class="white-52-78 keyboardEle" data-value="r" data-name="0">r</div>\
                        <div class="white-52-78 keyboardEle" data-value="t" data-name="0">t</div>\
                        <div class="white-52-78 keyboardEle" data-value="y" data-name="0">y</div>\
                        <div class="white-52-78 keyboardEle" data-value="u" data-name="0">u</div>\
                        <div class="white-52-78 keyboardEle" data-value="i" data-name="0">i</div>\
                        <div class="white-52-78 keyboardEle" data-value="o" data-name="0">o</div>\
                        <div class="white-52-78 keyboardEle last52-78" data-value="p" data-name="0">p</div>\
                    </div>\
                    <div class="number" style="display:none;">\
                        <div class="white-52-78 keyboardEle" data-value="1" data-name="0">1</div>\
                        <div class="white-52-78 keyboardEle" data-value="2" data-name="0">2</div>\
                        <div class="white-52-78 keyboardEle" data-value="3" data-name="0">3</div>\
                        <div class="white-52-78 keyboardEle" data-value="4" data-name="0">4</div>\
                        <div class="white-52-78 keyboardEle" data-value="5" data-name="0">5</div>\
                        <div class="white-52-78 keyboardEle" data-value="6" data-name="0">6</div>\
                        <div class="white-52-78 keyboardEle" data-value="7" data-name="0">7</div>\
                        <div class="white-52-78 keyboardEle" data-value="8" data-name="0">8</div>\
                        <div class="white-52-78 keyboardEle" data-value="9" data-name="0">9</div>\
                        <div class="white-52-78 keyboardEle" data-value="0" data-name="0">0</div>\
                    </div>\
                    <div class="mark" style="display:none;">\
                        <div class="white-52-78 keyboardEle" data-value="[" data-name="0">[</div>\
                        <div class="white-52-78 keyboardEle" data-value="]" data-name="0">]</div>\
                        <div class="white-52-78 keyboardEle" data-value="{" data-name="0">{</div>\
                        <div class="white-52-78 keyboardEle" data-value="}" data-name="0">}</div>\
                        <div class="white-52-78 keyboardEle" data-value="#" data-name="0">#</div>\
                        <div class="white-52-78 keyboardEle" data-value="%" data-name="0">%</div>\
                        <div class="white-52-78 keyboardEle" data-value="^" data-name="0">^</div>\
                        <div class="white-52-78 keyboardEle" data-value="*" data-name="0">*</div>\
                        <div class="white-52-78 keyboardEle" data-value="+" data-name="0">+</div>\
                        <div class="white-52-78 keyboardEle" data-value="=" data-name="0">=</div>\
                    </div>\
                </div>\
                <div class="row2">\
                    <div class="english">\
                        <div class="white-52-78 keyboardEle" data-value="a" data-name="0">a</div>\
                        <div class="white-52-78 keyboardEle" data-value="s" data-name="0">s</div>\
                        <div class="white-52-78 keyboardEle" data-value="d" data-name="0">d</div>\
                        <div class="white-52-78 keyboardEle" data-value="f" data-name="0">f</div>\
                        <div class="white-52-78 keyboardEle" data-value="g" data-name="0">g</div>\
                        <div class="white-52-78 keyboardEle" data-value="h" data-name="0">h</div>\
                        <div class="white-52-78 keyboardEle" data-value="j" data-name="0">j</div>\
                        <div class="white-52-78 keyboardEle" data-value="k" data-name="0">k</div>\
                        <div class="white-52-78 keyboardEle" data-value="l" data-name="0">l</div>\
                    </div>\
                    <div class="number" style="display:none;">\
                        <div class="white-52-78 keyboardEle" data-value="-" data-name="0">-</div>\
                        <div class="white-52-78 keyboardEle" data-value="/" data-name="0">/</div>\
                        <div class="white-52-78 keyboardEle" data-value=":" data-name="0">:</div>\
                        <div class="white-52-78 keyboardEle" data-value=";" data-name="0">;</div>\
                        <div class="white-52-78 keyboardEle" data-value="(" data-name="0">(</div>\
                        <div class="white-52-78 keyboardEle" data-value=")" data-name="0">)</div>\
                        <div class="white-52-78 keyboardEle" data-value="$" data-name="0">$</div>\
                        <div class="white-52-78 keyboardEle" data-value="&" data-name="0">&</div>\
                        <div class="white-52-78 keyboardEle" data-value="@" data-name="0">@</div>\
                        <div class="white-52-78 keyboardEle" data-value="\\\"" data-name="0">"</div>\
                    </div>\
                    <div class="mark" style="display:none;">\
                        <div class="white-52-78 keyboardEle" data-value="_" data-name="0">_</div>\
                        <div class="white-52-78 keyboardEle" data-value="\\" data-name="0">/\</div>\
                        <div class="white-52-78 keyboardEle" data-value="|" data-name="0">|</div>\
                        <div class="white-52-78 keyboardEle" data-value="~" data-name="0">~</div>\
                        <div class="white-52-78 keyboardEle" data-value="<" data-name="0"><</div>\
                        <div class="white-52-78 keyboardEle" data-value=">" data-name="0">></div>\
                        <div class="white-52-78 keyboardEle" data-value="$" data-name="0">$</div>\
                        <div class="white-52-78 keyboardEle" data-value="&" data-name="0">&</div>\
                        <div class="white-52-78 keyboardEle" data-value="@" data-name="0">@</div>\
                        <div class="white-52-78 keyboardEle" data-value="`" data-name="0">`</div>\
                    </div>\
                </div>\
                <div class="row3">\
                    <div class="english">\
                        <div class="gray-72-78 shift-72-78 keyboardEle" data-value="大小写" data-name="1"><i class="icon-keyboard-caps"></i><i class="icon-keyboard-caps-active"></i></div>\
                        <div class="white-52-78 keyboardEle keyboardEle" data-value="z" data-name="0">z</div>\
                        <div class="white-52-78 keyboardEle keyboardEle" data-value="x" data-name="0">x</div>\
                        <div class="white-52-78 keyboardEle keyboardEle" data-value="c" data-name="0">c</div>\
                        <div class="white-52-78 keyboardEle keyboardEle" data-value="v" data-name="0">v</div>\
                        <div class="white-52-78 keyboardEle keyboardEle" data-value="b" data-name="0">b</div>\
                        <div class="white-52-78 keyboardEle keyboardEle" data-value="n" data-name="0">n</div>\
                        <div class="white-52-78 keyboardEle keyboardEle" data-value="m" data-name="0">m</div>\
                    </div>\
                    <div class="number" style="display:none;">\
                        <div class="gray-72-78 keyboardEle" data-value="切换符号键盘" data-name="2">#+=</div>\
                        <div class="white-78-78 keyboardEle" data-value="." data-name="0">.</div>\
                        <div class="white-78-78 keyboardEle" data-value="," data-name="0">,</div>\
                        <div class="white-78-78 keyboardEle" data-value="?" data-name="0">?</div>\
                        <div class="white-78-78 keyboardEle" data-value="!" data-name="0">!</div>\
                        <div class="white-78-78 keyboardEle" data-value="\'" data-name="0">\'</div>\
                    </div>\
                    <div class="mark" style="display:none;">\
                        <div class="gray-72-78 keyboardEle" data-value="切换数字键盘" data-name="3">123</div>\
                        <div class="white-78-78 keyboardEle" data-value="." data-name="0">.</div>\
                        <div class="white-78-78 keyboardEle" data-value="," data-name="0">,</div>\
                        <div class="white-78-78 keyboardEle" data-value="?" data-name="0">?</div>\
                        <div class="white-78-78 keyboardEle" data-value="!" data-name="0">!</div>\
                        <div class="white-78-78 keyboardEle" data-value="\'" data-name="0">\'</div>\
                    </div>\
                    <div class="gray-72-78 del-72-78 keyboardEle" data-value="回删" data-name="4"><i class="icon-keyboard-delete"></i></div>\
                </div>\
                <div class="row4">\
                    <div class="english">\
                        <div class="gray-148-78 keyboardEle" data-value="切换数字键盘" data-name="3">.?123</div>\
                    </div>\
                    <div class="number" style="display:none;">\
                        <div class="gray-148-78 keyboardEle" data-value="切换英文键盘" data-name="5">ABC</div>\
                    </div>\
                    <div class="mark" style="display:none;">\
                        <div class="gray-148-78 keyboardEle" data-value="切换英文键盘" data-name="5">ABC</div>\
                    </div>\
                    <div class="white-308-78 keyboardEle" data-value=" " data-name="0">space</div>\
                    <div class="gray-148-78 keybord-196-94 keyboardEle" data-value="提交键盘" data-name="7">确定</div>\
                </div>\
            </div>\
        </div>';
    } else {
        kb = '<div id="' + this.settings.id + '_kb" class="keyboard-box" style="visibility:hidden;">\
            ' + (this.settings.header ? header : '') + '\
            <ul class="keyboard-tel">\
            	<div class="row1 ui-border-t">\
                <li class="white-196-94 keyboardEle ui-border-r" data-value="1" data-name="0">1</li>\
                <li class="white-196-94 keyboardEle ui-border-r" data-value="2" data-name="0">2</li>\
                <li class="white-196-94 keyboardEle" data-value="3" data-name="0">3</li>\
                </div>\
                <div class="row1 ui-border-t">\
                <li class="white-196-94 keyboardEle ui-border-r" data-value="4" data-name="0">4</li>\
                <li class="white-196-94 keyboardEle ui-border-r" data-value="5" data-name="0">5</li>\
                <li class="white-196-94 keyboardEle" data-value="6" data-name="0">6</li>\
                </div>\
                <div class="row1 ui-border-t">\
                <li class="white-196-94 keyboardEle ui-border-r" data-value="7" data-name="0">7</li>\
                <li class="white-196-94 keyboardEle ui-border-r" data-value="8" data-name="0">8</li>\
                <li class="white-196-94 keyboardEle" data-value="9" data-name="0">9</li>\
                </div>\
                <div class="row1 ui-border-t">\
                <li class="gray-196-94 keybord-196-94 keyboardEle ui-border-r" data-value="' + (this.settings.carrySpot ? '.' : ' ') + '" data-name="0">' + (this.settings.carrySpot ? '.' : '') + '</li>\
                <li class="white-196-94 keyboardEle ui-border-r" data-value="0" data-name="0">0</li>\
                <li class="gray-196-94 del-196-94 keyboardEle" data-value="回删" data-name="4"><i class="icon-keyboard-delete"></i></li>\
                </div>\
            </ul>\
        </div>';
    }
    // 只有在document的readyState还是Loading的时候有效，否则readyState为complete时就会覆盖整个document
    //document.write(kb);
    // 使用jquery来更正
    $('body').append(kb);

    if (this.settings.kbType == 0) {
        $(".keyboard-chinese")[0].ontouchstart = function (e) {
            var h = e.target.className;
            if (h.indexOf("row1") > -1 || h.indexOf("row2") > -1 || h.indexOf("row3") > -1 || h.indexOf("row4") > -1) {
                e.preventDefault();
                return false;
            }
        };
    } else if (this.settings.kbType == 1) {}
    var T = document.getElementById(this.settings.id + "_kb").querySelectorAll(".keyboardEle");
    // 当前原型体
    var k = this;
    var O = [];
    for (var i = 0; i < T.length; i++) {
        // 为每一个按钮声明tap事件（部分安卓机型存在点击不灵敏的问题）
        $(T[i]).on("tap", function (bv) {
            if (keyActive && !firstPress) {
                return;
            }
            var event = -1;
            var name = this.getAttribute('data-name');
            var key = this.getAttribute('data-value');
            // 触发所定义的代理Event
            var self = k.jq();

            // 键盘隐藏
            if (name == "6") {
                event = 1;
            }
            // 删除
            else if (name == "4") {
                    event = 2;
                }
                // 数字键盘唤醒
                else if (name == "3") {
                        event = 4;
                    }
                    // 英文键盘唤醒
                    else if (name == "5") {
                            event = 5;
                        }
                        // 全键盘唤醒
                        else if (name == "2") {
                                event = 6;
                            }
                            // 未知类型
                            else if (name == "1") {
                                    event = 7;
                                }
                                // 提交键盘
                                else if (name == "7") {
                                        event = 8;
                                    }
                                    // 普通按钮点击
                                    else {
                                            event = 0;
                                        }
            if (k.settings.aW == 2 && event == 0) {
                var aQ = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
                aQ = k.randArray(aQ, bS);
                var english = document.getElementById(k.settings.id + "_kb").querySelectorAll(".row1 .english .keyboardEle,.row2 .english .keyboardEle,.row3 .english .white-52-78");
                for (var j = 0; j < english.length; j++) {
                    english[j].innerHTML = aQ[j];
                    english[j].setAttribute('data-value', aQ[j]);
                }
            }
            if (key == " ") {
                return;
            }

            // 键盘点击前
            if (name != '6' && name != '1') self.trigger($.Event("keyboard:pressing"));
            // 产生混淆值，同时显示文本框
            k.preCallBack(event, key.charCodeAt() ^ k.settings.odd);
            // 键盘点击后
            if (name != '6' && name != '1') self.trigger($.Event("keyboard:pressed"));

            // 键盘提交
            if (name == '7') {
                self.trigger($.Event("keyboard:submit"));
            }

            var bS = false;
            var R = 0;
            if ($(".shift-72-78").hasClass('active2') || $(".shift-72-78").hasClass('active')) {
                bS = true;
            } else {
                bS = false;
            }
            if (!$(".shift-72-78").hasClass('active2') && !$(".shift-72-78").hasClass('active')) {
                R = 0;
            } else if ($(".shift-72-78").hasClass('active2')) {
                R = 1;
            } else if ($(".shift-72-78").hasClass('active')) {
                R = 2;
            }
            if (name == "1") {
                if (R == 0) {
                    $(this).addClass('active2');
                    $(".english").removeClass("low");
                    $(".english").addClass("upp");
                    $(".english .white-52-78").each(function () {
                        var val = $(this).attr("data-value");
                        $(this).attr("data-value", val.toUpperCase());
                    });
                } else {
                    $(this).removeClass('active2');
                    $(this).removeClass('active');
                    $(".english").removeClass("upp");
                    $(".english").addClass("low");
                    $(".english .white-52-78").each(function () {
                        var val = $(this).attr("data-value");
                        $(this).attr("data-value", val.toLowerCase());
                    });
                }
            } else {
                if (R != 2) {
                    $(".shift-72-78").removeClass('active2');
                    $(".shift-72-78").removeClass('active');
                }
                if ($(".shift-72-78").hasClass('active2') || $(".shift-72-78").hasClass('active')) {
                    $(".english").removeClass("low");
                    $(".english").addClass("upp");
                    $(".english .white-52-78").each(function () {
                        var val = $(this).attr("data-value");
                        $(this).attr("data-value", val.toUpperCase());
                    });
                } else {
                    $(".english").removeClass("upp");
                    $(".english").addClass("low");
                    $(".english .white-52-78").each(function () {
                        var val = $(this).attr("data-value");
                        $(this).attr("data-value", val.toLowerCase());
                    });
                }
                $(this).removeClass('active');
            }
        });
        // 按键状态,0:按下、抬起按键无变化;1:按下、抬起按键的颜色变化,默认值0
        if (k.settings.pressStatus == 1) {
            var ae = 0;
            var ab = 0;
            var aY = false;
            var delInter;
            // 按钮着色状态下开始按下时触发
            T[i].ontouchstart = function (e) {
                // 2017-12-26 解决IOS8第二次点击自动触发原生键盘的BUG
                var input = document.getElementById(k.settings.pg.settings.id);
                input.blur();

                ae = new Date().getTime();
                if (keyActive && !firstPress) {
                    return;
                }
                ae = new Date().getTime();
                var name = $(this).attr("data-name");
                if (name != "1") {
                    $(this).addClass('active');
                    keyActive = true;
                    firstPress = false;
                }
                var o = this;
                delInter = window.setInterval(function () {
                    ab = new Date().getTime();
                    var x = ab - ae;
                    var name = $(o).attr("data-name");
                    if (name == "4" && x > 500) {
                        var input = document.getElementById(k.settings.pg.settings.id);
                        var xI = setInterval(function () {
                            k.settings.pg.v = k.settings.pg.v.substr(0, k.settings.pg.v.length - 1);
                            k.settings.pg.J = k.settings.pg.J.substr(0, k.settings.pg.J.length - 1);
                            input.value = input.value.substr(0, k.settings.pg.J.length - 1);
                        }, 50);
                        O.push(xI);
                        clearInterval(delInter);
                    }
                }, 1);
                e.preventDefault();
                return false;
            };
            // 按钮着色状态下按下移动时触发
            T[i].ontouchmove = function (e) {
                e.preventDefault();
                return false;
            };
            // 按钮着色状态下按下抬起拇指时触发
            T[i].ontouchend = function (e) {
                keyActive = false;
                var name = $(this).attr("data-name");
                if (name != "1") {
                    $(this).removeClass('active');
                }
                if (name == "4") {
                    clearInterval(delInter);
                    for (var F = 0; F < O.length; F++) {
                        window.clearInterval(O[F]);
                    }
                    O = [];
                    var input = document.getElementById(k.settings.pg.settings.id);
                    var bj = "";
                    for (var i = 0; i < k.settings.pg.J.length; i++) {
                        bj += "*";
                    }
                    input.value = bj;
                }
                aY = false;
                e.preventDefault();
                return false;
            };
        }
        // // 长按事件
        // $(T[i]).on('longTap', function (e) {
        //     var name = $(this).attr("data-name");
        //     e.preventDefault();
        //     return false;
        // });
        // // 双点事件
        // $(T[i]).on('doubleTap', function () {
        //     var name = $(this).attr("data-name");
        //     if (name == "1") {
        //         $(this).removeClass('active2');
        //         $(this).addClass('active');
        //         if ($(this).hasClass('active2')) {
        //             $(this).removeClass('active2');
        //             $(this).removeClass('active');
        //             $(".english").removeClass("upp");
        //             $(".english").addClass("low");
        //             $(".english .white-52-78").each(function () {
        //                 var val = $(this).attr("data-value");
        //                 $(this).attr("data-value", val.toLowerCase());
        //             });
        //         } else {
        //             $(".english").removeClass("low");
        //             $(".english").addClass("upp");
        //             $(".english .white-52-78").each(function () {
        //                 var val = $(this).attr("data-value");
        //                 $(this).attr("data-value", val.toUpperCase());
        //             });
        //         }
        //     }
        // });
    }
};
keyBoard.prototype.randArray = function (data, C) {
    ;
    var bi = data.length;
    ;
    var bH = new Array();
    for (var i = 0; i < bi; i++) {
        try1[i] = i;
    }
    ;
    var aL = new Array();
    for (var i = 0; i < bi; i++) {
        try2[i] = bH.splice(Math.floor(Math.random() * bH.length), 1);
    }
    ;
    var H = new Array();
    for (var i = 0; i < bi; i++) {
        if (C) {
            H[i] = data[aL[i]].toUpperCase();
        } else {
            H[i] = data[aL[i]].toLowerCase();
        }
    }
    return H;
};
keyBoard.prototype.show = function () {
    var _this = this;
    // 遮盖层创建
    var kbLayer = '<div id="' + this.settings.id + '_kbLayer" class="keyboard-box-layer"></div>';
    // 触发所定义的代理Event
    var self = _this.jq();
    self.trigger($.Event("keyboard:show"));

    setTimeout(function () {
        // 英文键盘重构（非全键盘）
        if (_this.settings.aW == 1) {
            var aQ = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
            aQ = _this.randArray(aQ);
            var english = document.getElementById(_this.settings.id + "_kb").querySelectorAll(".row1 .english .keyboardEle,.row2 .english .keyboardEle");
            for (var j = 0; j < english.length; j++) {
                english[j].innerHTML = aQ[j];
                english[j].setAttribute('data-value', aQ[j]);
            }
        }
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // 获取虚拟键盘的高度
        var height = $('.keyboard-box').height() + 200;
        $('body').css('padding-bottom', height);
        var kb = document.getElementById(_this.settings.id + "_kb");
        $('.keyboard-box').addClass('key-board-box-active');
        kb.style.visibility = "visible";
        _this.settings.status = 1;

        // 增加遮盖层，用于点击后关闭虚拟键盘实例
        var kbLayerEle = $('#' + _this.settings.id + '_kbLayer');
        if (!kbLayerEle.length) $('body').append(kbLayer);
        $('#' + _this.settings.id + '_kbLayer').on('click', function (e) {
            e.stopPropagation();
            if ($('.keyboard-box').hasClass('key-board-box-active')) {
                _this.hide();
            }
        });
    }, 10);
};
keyBoard.prototype.hide = function () {
    var _this = this;
    // 移除遮盖层
    var keyboard_layer = $('#' + _this.settings.id + '_kbLayer');
    if (keyboard_layer) {
        keyboard_layer.off();
        keyboard_layer.remove();
    }

    // 触发所定义的代理Event
    var self = _this.jq();
    self.trigger($.Event("keyboard:hide"));

    setTimeout(function () {
        $('.keyboard-box').removeClass('key-board-box-active');
        $('body').css('padding-bottom', 0);
        var kb = document.getElementById(_this.settings.id + "_kb");
        for (var F = 0; F < passGuard.G.length; F++) {
            if (passGuard.currentG != passGuard.G[F]) window.clearInterval(passGuard.G[F]);
        }
        for (var V = 0; V < passGuard.T.length; V++) {
            passGuard.T[V].value = passGuard.T[V].value.replace(/l/, "");
        }
        _this.settings.pg = {};
        _this.settings.odd = 1;
        setTimeout(function () {
            kb.style.visibility = "hidden";
        }, 500);
        _this.settings.status = 0;
    }, 0);
};

/**
 * 返回JQuery对象
 * @returns {*|jQuery|HTMLElement} 返回一个jquery对象
 */
keyBoard.prototype.jq = function () {
    return $(document.getElementById(this.settings.id + "_kb"));
};

function Plugin(options) {

    return new keyBoard($.extend({
        'chaosMode': 0, // 混乱模式,0:无混乱;1:打开时乱一次;2:每输入一个字符乱一次,默认值0
        'pressStatus': 1, // 按键状态,0:按下、抬起按键无变化;1:按下、抬起按键的颜色变化,默认值0
        "kbType": 0, // 键盘类型,0:全键盘;1:纯数字键盘,默认值0
        'odd': 51,
        'status': 0
    }, options));
}

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Plugin;

var _alert = __webpack_require__(15);

var _alert2 = _interopRequireDefault(_alert);

var _modal = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by dfzq on 2017/4/7.
 */

function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}
function passGuard(options) {
    this.settings = {
        "id": "",
        "maxLength": 12,
        "regExp1": "[0-9]",
        "regExp2": "[0-9]{6,12}",
        "displayMode": 0,
        "rsaPublicKey": "",
        "randomKey": "",
        "enterEvent": "",
        "keyBoard": {},
        "mappingArray": []
    };
    this.J = "";
    this.v = "";
    if (options != undefined) {
        this.settings = options;
    }
};
// 密码控件循环器（保持文本框选中闪烁状态）
passGuard.G = [];
// 密码控件所关联控件队列
passGuard.T = [];
// 如果undefined就通过ajax获取随机因子
passGuard.L = undefined;
passGuard.prototype.generate = function (id, keyBoard) {
    this.settings.keyBoard = keyBoard;
    this.settings.id = id;
    var mixPromise = this.settings.mixPromise;
    var clearMixPromise = this.settings.clearMixPromise;
    var loading = this.settings.loading;
    var loadingTitle = this.settings.loadingTitle;
    var loadingTimeout = this.settings.loadingTimeout;
    var k = document.getElementById(id);
    passGuard.T.push(k);
    var pg = this;
    var C = false;
    var bg = null;
    try {
        var placeHolder;
        // 所绑定的关联控件获取焦点时触发
        // k.onfocus = function (e) {
        k.onclick = function (e) {
            this.blur();
            e.preventDefault();
            $(this).removeAttr("placeholder");
            if (loading && passGuard.L == undefined) {
                //添加loading遮罩层，防止用户点击页面元素，同时增加体验
                $('body').append($('<div id="keyboard-overlay" class="modal"><h1>' + loadingTitle + '</h1><h6>东方证券安全键盘</h6><div class="keyboard-overlay-loading"><span></span><span></span><span></span><span></span><span></span></div></div>'));
                (0, _modal.openModal)($('#keyboard-overlay'));
            }
            pg.jq().trigger($.Event("passguard:focus"));
            for (var F = 0; F < passGuard.G.length; F++) {
                window.clearInterval(passGuard.G[F]);
            }
            for (var V = 0; V < passGuard.T.length; V++) {
                passGuard.T[V].value = passGuard.T[V].value.replace(/l/, "");
            }

            var input = this;
            var keyboardInit = function keyboardInit() {
                if (passGuard.L != undefined) {
                    bg = setInterval(function () {
                        if (input.value == '') {
                            input.removeAttribute("placeholder");
                        }
                        if (C) {
                            input.value = input.value.replace(/l/, "");
                            C = false;
                        } else {
                            input.value = input.value + "l";
                            C = true;
                        }
                    }, 500);
                    passGuard.G.push(bg);
                }
                // 当前定时器
                //passGuard.currentG = bg;
                keyBoard.preCallBack = pg.preCallBack;
                keyBoard.settings.pg = pg;
                keyBoard.settings.odd = 51;
                //键盘初始化后关闭遮罩层
                if (loading && !passGuard.hasInit) {
                    setTimeout(function () {
                        (0, _modal.closeModal)($('#keyboard-overlay'));
                        $('#keyboard-overlay').remove();
                        if (keyBoard.settings.status == 0 && passGuard.L != undefined) {
                            keyBoard.show();
                        }
                        input.blur();
                    }, loadingTimeout);
                } else {
                    if (keyBoard.settings.status == 0 && passGuard.L != undefined) {
                        keyBoard.show();
                    }
                    input.blur();
                }
                //标识键盘是否初始化，主要是用来判断loading参数是否第一次加载
                if (passGuard.L != undefined) {
                    passGuard.hasInit = true;
                }
            };

            passGuard.G = [];
            if (passGuard.L == undefined || clearMixPromise) {
                // 获取混淆字符数组
                if (typeof mixPromise === 'function') {
                    var _mixPromise = mixPromise();
                    if (typeof _mixPromise.then === "function") {
                        _mixPromise.then(function (resp) {
                            pg.setMapping(resp);
                            keyboardInit();
                        }).otherwise(function (err) {
                            //键盘初始化失败关闭遮罩层并提示
                            if (loading) {
                                (0, _modal.closeModal)($('#keyboard-overlay'));
                                $('#keyboard-overlay').remove();
                            }
                            (0, _alert2.default)('获取键盘失败!');
                        });
                    } else if (isArray(_mixPromise)) {
                        pg.setMapping(_mixPromise);
                        keyboardInit();
                    } else {
                        pg.setMapping(false);
                        keyboardInit();
                    }
                } else {
                    pg.setMapping(false);
                    keyboardInit();
                }
            } else {
                keyboardInit();
            }
            e.preventDefault();
            return false;
        };
    } catch (e) {
        alert(e);
    }
};
passGuard.prototype.show = function (id, keyBoard) {
    this.settings.keyBoard = keyBoard;
    this.settings.id = id;
    var mixPromise = this.settings.mixPromise;
    var clearMixPromise = this.settings.clearMixPromise;
    var k = document.getElementById(id);
    // passGuard.T.push(k);
    var pg = this;
    var C = false;
    var bg = null;
    try {
        for (var F = 0; F < passGuard.G.length; F++) {
            window.clearInterval(passGuard.G[F]);
        }
        for (var V = 0; V < passGuard.T.length; V++) {
            passGuard.T[V].value = passGuard.T[V].value.replace(/l/, "");
        }

        var input = k;
        var keyboardInit = function keyboardInit() {
            bg = setInterval(function () {
                if (input.value == '') {
                    input.removeAttribute("placeholder");
                }
                if (C) {
                    input.value = input.value.replace(/l/, "");
                    C = false;
                } else {
                    input.value = input.value + "l";
                    C = true;
                }
            }, 500);
            passGuard.G.push(bg);
            keyBoard.preCallBack = pg.preCallBack;
            keyBoard.settings.pg = pg;
            keyBoard.settings.odd = 51;
            keyBoard.show();
        };

        passGuard.G = [];
        if (passGuard.L == undefined || clearMixPromise) {
            // 获取混淆字符数组
            if (typeof mixPromise === 'function') {
                var _mixPromise = mixPromise();
                if (typeof _mixPromise.then === "function") {
                    _mixPromise.then(function (resp) {
                        pg.setMapping(resp);
                        keyboardInit();
                    });
                } else if (isArray(_mixPromise)) {
                    pg.setMapping(_mixPromise);
                    keyboardInit();
                } else {
                    pg.setMapping(false);
                    keyboardInit();
                }
            } else {
                pg.setMapping(false);
                keyboardInit();
            }
        } else {
            keyboardInit();
        }
    } catch (e) {
        alert(e);
    }
};
passGuard.prototype.preCallBack = function (event, key) {
    // 获取点击时间的真实charAt
    var realkey = key ^ 51;
    var pg = this.settings.pg;
    var input = document.getElementById(pg.settings.id);
    input.value = input.value.replace(/l/, "");
    if (event == 1) {
        this.settings.pg.settings.keyBoard.hide();
    } else if (event == 2) {
        input.value = input.value.substr(0, input.value.length - 1);
        pg.v = pg.v.substr(0, pg.v.length - 1);
        pg.J = pg.J.substr(0, pg.J.length - 1);
    } else if (event == 4) {
        $('.english').hide();
        $('.number').show().css("display", "inline-block");
        $('.mark').hide();
    } else if (event == 5) {
        $('.english').show().css("display", "inline-block");
        $('.number').hide();
        $('.mark').hide();
    } else if (event == 6) {
        $('.mark').show().css("display", "inline-block");
        $('.number').hide();
    } else if (event == 0) {
        var bV = new RegExp(pg.settings.regExp1);
        var realCha = String.fromCharCode(realkey);
        var aP = pg.settings.maxLength;
        var aw = input.value.length;
        if (aw < aP) {
            if (bV.test(realCha)) {
                // 伪造值
                pg.J += pg.mapping(realCha);
                // 真实输入值
                pg.v += realCha;
                // 显示形式,0:星号;1:明文,默认值0
                if (pg.settings.displayMode == 1) {
                    input.value += realCha;
                } else {
                    input.value += "*";
                }
                // 当等于maxLength时关闭当前键盘
                if (aw >= aP - 1) {
                    this.hide();
                }
            }
        } else if (event == 8) {} else {
            this.hide();
        }
    }
};
passGuard.prototype.setMapping = function (bb) {
    if (!!bb && bb.length > 0) {
        passGuard.L = bb;
    } else {
        var _chaos = [];
        for (var x = 33; x <= 126; x++) {
            _chaos.push(x);
        }
        passGuard.L = _chaos;
    }
};
// 获取密文
passGuard.prototype.getOutput = function () {
    return this.J;
};
passGuard.prototype.getLength = function () {
    return this.J.length;
};
passGuard.prototype.getValid = function () {
    var bV = new RegExp(this.settings.regExp2);
    return bV.test(this.v) ? 0 : 1;
};
// 产生混淆值
passGuard.prototype.mapping = function (key) {
    var keyCode = key.charCodeAt(0);
    //var bC = base64decode(passGuard.L);
    var bC = passGuard.L;
    var aE = eval(bC);
    return String.fromCharCode(aE[keyCode - 33]);
};
passGuard.prototype.setRandKey = function (bF) {
    try {
        if (bF) this.settings.randomKey = bF;
    } catch (e) {
        alert(e);
    }
};
passGuard.prototype.clearPass = function () {
    var input = document.getElementById(this.settings.id);
    if (input) {
        input.value = "";
    }

    this.v = "";
    this.J = "";
};

/**
 * 构建密码卫士防护
 * @param ele   绑定控件ID
 * @param keyBoardInstance  键盘实例
 */
passGuard.prototype.build = function (ele, keyBoardInstance) {
    this.generate(ele, keyBoardInstance);
    keyBoardInstance.generate(passGuard);
};

passGuard.prototype.jq = function () {
    return $(document.getElementById(this.settings.id));
};

function Plugin(container) {

    return new passGuard($.extend({
        "maxLength": 99, // 最大输入长度
        "regExp1": "", // 输入过程限制的正则
        "regExp2": "", // 输入完毕限制的正则
        "displayMode": 0 // 显示形式,0:星号;1:明文,默认值0
    }, container));
}

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Created by linyiqing on 2017/3/21.
                                                                                                                                                                                                                                                                               */


var _modal = __webpack_require__(2);

exports.default = function (_text, title, callbackOk, allowClose) {
    // 表达式声明
    if (typeof title === 'function') {
        callbackOk = title;
        title = undefined;
    }
    // 函数对象式声明
    else if ((typeof _text === 'undefined' ? 'undefined' : _typeof(_text)) === 'object') {
            var _text$text = _text.text,
                text = _text$text === undefined ? '' : _text$text,
                _text$title = _text.title,
                _title = _text$title === undefined ? _modal.defaults.modalTitle : _text$title,
                _text$allowClose = _text.allowClose,
                _allowClose = _text$allowClose === undefined ? false : _text$allowClose,
                onClick = _text.onClick;

            return (0, _modal.modal)({
                text: text,
                title: _title,
                buttons: [{ text: _modal.defaults.modalButtonOk, bold: true, onClick: onClick }],
                isClose: _allowClose,
                extraClass: 'remove-on-close'
            });
        }

    return (0, _modal.modal)({
        text: _text || '',
        title: typeof title === 'undefined' ? _modal.defaults.modalTitle : title,
        buttons: [{ text: _modal.defaults.modalButtonOk, bold: true, onClick: callbackOk }],
        isClose: allowClose || false,
        extraClass: 'remove-on-close'
    });
};

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keyboard = __webpack_require__(10);

var _keyboard2 = _interopRequireDefault(_keyboard);

var _passguard = __webpack_require__(11);

var _passguard2 = _interopRequireDefault(_passguard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import attachFastClick from 'fastclick'

/**
 * 密码卫士构建函数
 * @param options
 */
/**
 * Created by dfzq on 2017/4/7.
 */
var passGuard = function passGuard(options) {

    // 空函数
    var _noop = function _noop() {};

    // 暂存的placeHolder
    var _placeHolder = void 0;

    // 是否键盘组件注册了fastclick
    var isAttachFastClick = false;

    // 默认配置
    var _defaultSetting = {
        id: 'kb', // 密码组件对应的dom元素的id（非选择器类型）
        keyboardType: 0, // 键盘类型,0:全键盘;1:纯数字键盘,默认值0
        carrySpot: false, // 数字键盘左下角是否需要点（keyboardType为1时才有效）
        header: true, // 是否需要显示头部
        loading: true, // 是否需要显示loading
        loadingTitle: '安全支付', // loading的标题（loading为true时才有效）
        loadingTimeout: 1500, // loading显示多少秒后再关闭（loading为true时才有效）
        inputMaxLength: 6, // 最大输入长度
        displayMode: 0, // 输入显示形式,0:星号;1:明文
        mixPromise: false, // 混淆生成器，如果不需要启动混淆功能请使用false，如果需要混淆功能，应该传入一个输出混淆数组的promise对象
        clearMixPromise: false,

        onShow: _noop, // 键盘打开时触发该驱动事件
        onHide: _noop, // 键盘关闭时触发该驱动事件
        onPressing: _noop, // 键盘被点击时触发该驱动事件，此时键盘值还未发生变化
        onPressed: _noop, // 键盘被点击后触发该驱动事件，此时键盘值已发生变化
        onFocus: _noop, // 密码控件所防护的元素获取焦点时触发的驱动事件
        onSubmit: _noop // 键盘提交（只针对全键盘）


        // 覆盖后的最新配置
    };var setting = $.extend(_defaultSetting, options);

    // 定义一个键盘实例
    var keyboard = (0, _keyboard2.default)({
        'kbType': setting.keyboardType,
        'carrySpot': setting.carrySpot,
        'header': setting.header,
        'keyboardPlaceholder': $('#' + setting.id).attr("placeholder") || ''
    });
    this.keyboard = keyboard;
    this.id = _defaultSetting.id;

    var passguard;

    // 定义一个密码卫士防护实例
    passguard = this.passguard = (0, _passguard2.default)({
        'maxLength': setting.inputMaxLength,
        'regExp1': '',
        'regExp2': '',
        'displayMode': setting.displayMode,
        'mixPromise': setting.mixPromise,
        'clearMixPromise': setting.clearMixPromise,
        'loading': setting.loading,
        'loadingTitle': setting.loadingTitle,
        'loadingTimeout': setting.loadingTimeout
    });

    // 绑定所要保护的密码文本框，并将防护实例和键盘实例关联起来
    this.passguard.build(setting.id, keyboard);

    // 键盘打开时的驱动事件
    keyboard.jq().on('keyboard:show', function () {

        // // 注册fastclick
        // if (attachFastClick && !isAttachFastClick)
        // {
        //     console.log('onAttachKeyboardFastClick begin')
        //     new attachFastClick(this);
        //     console.log('onAttachKeyboardFastClick end')
        //     isAttachFastClick = true
        // }

        console.log('onKeyboardShow');
        _placeHolder = $('#' + setting.id).attr("placeholder");
        $('#' + setting.id).removeAttr("placeholder");
        setting.onShow();
    });

    // 键盘关闭时的驱动事件
    keyboard.jq().on('keyboard:hide', function () {
        console.log('onKeyboardHide');
        // $('#' + setting.id).attr("placeholder", _placeHolder)
        $('#' + setting.id).attr("placeholder", _placeHolder || keyboard.settings.keyboardPlaceholder);
        setting.onHide();
    });

    // 键盘元素点击时的驱动事件
    keyboard.jq().on('keyboard:pressing', function () {
        console.log('onKeyboardPressing');
        setting.onPressing();
    });

    // 键盘元素点击后的驱动事件
    keyboard.jq().on('keyboard:pressed', function () {
        console.log('onKeyboardPressed');
        // if (passguard.v === '') {        // 当切换字母时会发生bug，所以注释
        //     keyboard.hide()
        // }
        setting.onPressed();
    });

    // 密码控件所防护的元素获取焦点时触发的驱动事件
    this.passguard.jq().on('passguard:focus', function () {
        console.log('onPassGuardFocus');
        setting.onFocus();
    });

    // 键盘提交
    var _passguardInstance = this.passguard;
    keyboard.jq().on('keyboard:submit', function () {
        console.log('onKeyboardSubmit');
        keyboard.hide();
        setting.onSubmit(_passguardInstance.getOutput());
    });
};

/**
 * 输出密码输入项内容
 */
passGuard.prototype.getOutput = function () {
    return this.passguard.getOutput();
};

/**
 * 获取密码长度
 */
passGuard.prototype.getLength = function () {
    return this.passguard.getLength();
};

/**
 * 清除密码
 */
passGuard.prototype.clearPass = function () {
    return this.passguard.clearPass();
};

/**
 * 显示密码键盘
 */
passGuard.prototype.show = function () {
    return this.passguard.show(this.id, this.keyboard);
};

/**
 * 隐藏密码键盘
 */
passGuard.prototype.hide = function () {
    return this.keyboard.hide();
};

var plugin = function plugin(options) {
    return new passGuard(options);
};

exports.default = plugin;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by linyiqing on 2017/3/16.
 */
var _modalTemplateTempDiv = document.createElement('div');

$.modalStack = [];

$.modalStackClearQueue = function () {
    if ($.modalStack.length) {
        $.modalStack.shift()();
    }
};
var modal = function modal(params) {
    params = params || {};
    var modalHTML = '';
    var buttonsHTML = '';
    if (params.buttons && params.buttons.length > 0) {
        for (var i = 0; i < params.buttons.length; i++) {
            buttonsHTML += '<span class="modal-button' + (params.buttons[i].bold ? ' modal-button-bold' : '') + '">' + params.buttons[i].text + '</span>';
        }
    }
    var extraClass = params.extraClass || '';
    var titleHTML = params.title ? '<div class="modal-title">' + params.title + '</div>' : '';
    var textHTML = params.text ? '<div class="modal-text">' + params.text + '</div>' : '';
    var afterTextHTML = params.afterText ? params.afterText : '';
    var noButtons = !params.buttons || params.buttons.length === 0 ? 'modal-no-buttons' : '';
    var verticalButtons = params.verticalButtons ? 'modal-buttons-vertical' : '';
    var isClose = !!params.isClose; //支持弹框是否可以关闭，目前主要用于alert
    modalHTML = '<div class="modal ' + extraClass + ' ' + noButtons + '">' + (isClose ? '<i class="modal-close">+</i>' : '') + '<div class="modal-inner">' + (titleHTML + textHTML + afterTextHTML) + '</div><div class="modal-buttons ' + verticalButtons + '">' + buttonsHTML + '</div></div>';

    _modalTemplateTempDiv.innerHTML = modalHTML;

    var modal = $(_modalTemplateTempDiv).children();

    $(defaults.modalContainer).append(modal[0]);

    // Add events on buttons
    modal.find('.modal-button').each(function (index, el) {
        $(el).on('click', function (e) {
            if (params.buttons[index].close !== false) closeModal(modal);
            if (params.buttons[index].onClick) params.buttons[index].onClick(modal, e);
            if (params.onClick) params.onClick(modal, index);
        });
    });
    // close button
    modal.find('.modal-close').on('click', function (e) {
        closeModal(modal);
    });
    openModal(modal);
    return modal[0];
};
var openModal = function openModal(modal, cb) {
    modal = $(modal);
    var isModal = modal.hasClass('modal'),
        isNotToast = !modal.hasClass('toast');
    if ($('.modal.modal-in:not(.modal-out)').length && defaults.modalStack && isModal && isNotToast) {
        $.modalStack.push(function () {
            openModal(modal, cb);
        });
        return;
    }
    var isPopup = modal.hasClass('popup-modal');
    var isLoginScreen = modal.hasClass('login-screen');
    var isPickerModal = modal.hasClass('picker-modal');
    var isToast = modal.hasClass('toast');
    var isTipModal = modal.hasClass('tip-modal');
    var isActionsModal = modal.hasClass('actions-modal');
    if (isModal) {
        modal.show();
        modal.css({
            marginTop: -Math.round(modal.outerHeight() / 2) + 'px'
        });
    }
    if (isToast) {
        modal.css({
            marginLeft: -Math.round(modal.outerWidth() / 2 / 1.185) + 'px' //1.185 是初始化时候的放大效果
        });
    }
    if (isPopup) {
        modal.show();
        modal.find(".content").scroller("refresh");
        if (modal.find('.' + defaults.viewClass).length > 0) {
            $.sizeNavbars(modal.find('.' + defaults.viewClass)[0]);
        }
    }
    if (isTipModal || isActionsModal) {
        modal.show();
    }

    var overlay;
    if (!isLoginScreen && !isPickerModal && !isToast && !isTipModal) {
        if ($('.modal-overlay').length === 0 && !isPopup) {
            $(defaults.modalContainer).append('<div class="modal-overlay"></div>');
        }
        if ($('.popup-overlay').length === 0 && isPopup) {
            $(defaults.modalContainer).append('<div class="popup-overlay"></div>');
        }
        overlay = isPopup ? $('.popup-overlay') : $('.modal-overlay');
    }

    //Make sure that styles are applied, trigger relayout;
    var clientLeft = modal[0].clientLeft;

    // Trugger open event
    modal.trigger('open');

    // Picker modal body class
    if (isPickerModal) {
        $(defaults.modalContainer).addClass('with-picker-modal');
    }

    // Classes for transition in
    if (!isLoginScreen && !isPickerModal && !isToast && !isTipModal) overlay.addClass('modal-overlay-visible');
    modal.removeClass('modal-out').addClass('modal-in').transitionEnd(function (e) {
        if (modal.hasClass('modal-out')) modal.trigger('closed');else modal.trigger('opened');
    });
    // excute callback
    if (typeof cb === 'function') {
        cb.call(this);
    }
    return true;
};
var closeModal = function closeModal(modal, cb) {
    modal = $(modal || '.modal-in');
    if (typeof modal !== 'undefined' && modal.length === 0) {
        return;
    }
    var isModal = modal.hasClass('modal'),
        isPopup = modal.hasClass('popup-modal'),
        isToast = modal.hasClass('toast'),
        isLoginScreen = modal.hasClass('login-screen'),
        isPickerModal = modal.hasClass('picker-modal'),
        isTipModal = modal.hasClass('tip-modal'),
        isActionsModal = modal.hasClass('actions-modal'),
        removeOnClose = modal.hasClass('remove-on-close'),

    // removeOnClose = true,
    overlay = isPopup ? $('.popup-overlay') : $('.modal-overlay');
    if (isPopup) {
        if (modal.length === $('.popup-modal.modal-in').length) {
            overlay.removeClass('modal-overlay-visible');
        }
    } else if (!(isPickerModal || isToast)) {
        overlay.removeClass('modal-overlay-visible');
    }

    modal.trigger('close');

    // Picker modal body class
    if (isPickerModal) {
        $(defaults.modalContainer).removeClass('with-picker-modal');
        $(defaults.modalContainer).addClass('picker-modal-closing');
    }

    modal.removeClass('modal-in').addClass('modal-out').transitionEnd(function (e) {
        if (modal.hasClass('modal-out')) modal.trigger('closed');else modal.trigger('opened');

        if (isPickerModal) {
            $(defaults.modalContainer).removeClass('picker-modal-closing');
        }

        // 在modal-dom移除前执行callback函数
        if (typeof cb === 'function') {
            cb.call(this);
        }

        if (isPopup || isLoginScreen || isPickerModal || isModal || isTipModal || isActionsModal) {
            modal.removeClass('modal-out').hide();
            if (removeOnClose && modal.length > 0) {
                modal.remove();
            }
        } else {
            modal.remove();
        }
    });
    if (isModal && defaults.modalStack) {
        $.modalStackClearQueue();
    }

    return true;
};
function handleClicks(e) {
    /*jshint validthis:true */
    var clicked = $(this);
    var url = clicked.attr('href');

    //Collect Clicked data- attributes
    var clickedData = clicked.dataset();

    // Popup
    /*var popup;
    if (clicked.hasClass('open-popup')) {
        if (clickedData.popup) {
            popup = clickedData.popup;
        }
        else popup = '.popup';
        $.popup(popup);
    }
    if (clicked.hasClass('close-popup')) {
        if (clickedData.popup) {
            popup = clickedData.popup;
        }
        else popup = '.popup.modal-in';
        $.closeModal(popup);
    }*/

    // Close Modal
    if (clicked.hasClass('modal-overlay')) {
        if ($('.modal.modal-in').length > 0 && defaults.modalCloseByOutside) closeModal('.modal.modal-in');
        if ($('.actions-modal.modal-in').length > 0 && defaults.actionsCloseByOutside) closeModal('.actions-modal.modal-in');
    }
    if (clicked.hasClass('popup-overlay')) {
        if ($('.popup-modal.modal-in').length > 0 && defaults.popupCloseByOutside) closeModal('.popup-modal.modal-in');
    }
}
$(document).on('click', ' .modal-overlay, .popup-overlay, .close-popup, .open-popup, .close-picker', handleClicks);
var defaults = modal.prototype.defaults = {
    modalStack: true,
    modalButtonOk: '确定',
    modalButtonCancel: '取消',
    modalPreloaderTitle: '加载中',
    modalContainer: document.body ? document.body : 'body',
    modalTitle: '',
    actionsCloseByOutside: true
};

exports.defaults = defaults;
exports.modal = modal;
exports.openModal = openModal;
exports.closeModal = closeModal;

/***/ })

/******/ });
});