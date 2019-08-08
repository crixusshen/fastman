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
return webpackJsonpfastman([13],{

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(94);


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by dfzq on 2017/6/12.
 */
var Persist = function Persist(options) {
    return {
        model: {
            previous: JSON.parse(localStorage.getItem('fastman-persist-state'))
        },
        actions: {
            saveSessionState: function saveSessionState(state) {
                localStorage.setItem('fastman-persist-state', JSON.stringify(state, noPrevious));
            }
        },
        readies: [function (model, actions, error) {
            window.addEventListener('unload', function () {
                actions.saveSessionState();
            });
        }]
    };
};

function noPrevious(key, value) {
    if (key === 'previous') return;else return value;
}

exports.Persist = Persist;

/***/ })

},[220]);
});