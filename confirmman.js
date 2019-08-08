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
return webpackJsonpfastman([25],{

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(81);


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Created by linyiqing on 2017/3/27.
                                                                                                                                                                                                                                                                               */


var _modal = __webpack_require__(11);

exports.default = function (_text, title, callbackOk, callbackCancel, textOk, textCancel) {
    // 表达式声明
    if (typeof title === 'function') {
        if (textOk) {
            textCancel = textOk;
        }
        if (callbackCancel) {
            textOk = callbackCancel;
        }
        if (callbackOk) {
            callbackCancel = callbackOk;
        }
        callbackOk = title;
        title = undefined;
    }
    // 函数对象式声明
    else if ((typeof _text === 'undefined' ? 'undefined' : _typeof(_text)) === 'object') {
            var _text$text = _text.text,
                text = _text$text === undefined ? '' : _text$text,
                _text$title = _text.title,
                _title = _text$title === undefined ? _modal.defaults.modalTitle : _text$title,
                onCancelClick = _text.onCancelClick,
                onOkClick = _text.onOkClick,
                _text$okText = _text.okText,
                okText = _text$okText === undefined ? _modal.defaults.modalButtonOk : _text$okText,
                _text$cancelText = _text.cancelText,
                cancelText = _text$cancelText === undefined ? _modal.defaults.modalButtonCancel : _text$cancelText;

            return (0, _modal.modal)({
                text: text,
                title: _title,
                buttons: [{ text: cancelText, onClick: onCancelClick }, { text: okText, bold: true, onClick: onOkClick }],
                extraClass: 'remove-on-close'
            });
        }
    return (0, _modal.modal)({
        text: _text || '',
        title: typeof title === 'undefined' ? _modal.defaults.modalTitle : title,
        buttons: [{ text: textCancel || _modal.defaults.modalButtonCancel, onClick: callbackCancel }, { text: textOk || _modal.defaults.modalButtonOk, bold: true, onClick: callbackOk }],
        extraClass: 'remove-on-close'
    });
};

/***/ })

},[204]);
});