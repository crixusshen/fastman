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
return webpackJsonpfastman([15],{

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(92);


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
    事件处理器插件
    1. 该插件必须是一个单列，防止重复实例化派生出新的实例
    2. 该插件内的事件将会注册在自身作用域内，通过一个对象数组的形式进行存储
    3. 该插件不存在任何依赖
 */
var EventEmitter = function EventEmitter() {
    return {
        model: {
            eventEmitter: {
                // 收集所有的注册事件，该事件收集器可循环调用
                events: [],
                // 收集所有的注册事件，该事件收集器只可调用一次
                onceEvents: []
            }
        },
        actions: {
            eventEmitter: {
                /**
                 * 订阅事件(可循环调用)
                 * @param data.eventName 事件名称
                 * @param data.callback  事件回调处理的函数
                 */
                on: function on(model, data, actions, error) {
                    model.eventEmitter.events[data.eventName] = model.eventEmitter.events[data.eventName] || [];
                    model.eventEmitter.events[data.eventName].push(data.callback);
                },

                /**
                 * 订阅事件(一次性调用)
                 * @param data.eventName 事件名称
                 * @param data.callback  事件回调处理的函数
                 */
                once: function once(model, data, actions, error) {
                    model.eventEmitter.onceEvents[data.eventName] = model.eventEmitter.onceEvents[data.eventName] || [];
                    model.eventEmitter.onceEvents[data.eventName].push(data.callback);
                },

                /**
                 * 通知/发射事件
                 * @param data.eventName 事件名称
                 * @param data ...args 除了事件名称参数外的arguments
                 */
                emit: function emit(model, data, actions, error) {
                    // 进行对象展开
                    var eventName = data.eventName,
                        args = _objectWithoutProperties(data, ["eventName"]);

                    var events = model.eventEmitter.events[eventName],
                        i,
                        m;

                    if (events) {
                        for (i = 0, m = events.length; i < m; i++) {
                            events[i](args);
                        }
                    }

                    var onceEvents = model.eventEmitter.onceEvents[eventName],
                        j,
                        n;

                    if (onceEvents) {
                        for (j = 0, n = onceEvents.length; j < n; j++) {
                            onceEvents.shift()(args);
                        }
                    }
                }

            }
        }
    };
};

exports.default = EventEmitter;

/***/ })

},[218]);
});