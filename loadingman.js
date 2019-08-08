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
return webpackJsonpfastman([23],{

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(83);


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hideLoading = exports.showLoading = undefined;

var _modal = __webpack_require__(11);

var showLoading = function showLoading() {
    // 如果loading-modal存在则代表实例已经存在，则不再创建新的
    if ($('.preloader-indicator-modal')[0]) return;
    $(_modal.defaults.modalContainer).append('<div class="preloader-indicator-overlay"></div><div class="preloader-indicator-modal"><span class="preloader preloader-white"></span></div>');
}; /**
    * Created by linyiqing on 2017/3/21.
    */

var hideLoading = function hideLoading() {
    $('.preloader-indicator-overlay, .preloader-indicator-modal').remove();
};

exports.showLoading = showLoading;
exports.hideLoading = hideLoading;

/***/ })

},[206]);
});