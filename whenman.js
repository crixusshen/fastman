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
return webpackJsonpfastman([6],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * 文件用途说明 : asap队列核心模块
 *
 * 项目名称 : dfzq-obboot-mobi
 * 作者姓名 : crixusshen
 * 创建日期 : 16/4/3
 * 修改日期 : 16/4/3
 * 版权所有 : 东方证券股份有限公司
 **/

(function (define) {

    !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
        // rawAsap provides everything we need except exception management.
        var rawAsap = __webpack_require__(134);
        // RawTasks are recycled to reduce GC churn.
        var freeTasks = [];
        // We queue errors to ensure they are thrown in right order (FIFO).
        // Array-as-queue is good enough here, since we are just dealing with exceptions.
        var pendingErrors = [];
        var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

        function throwFirstError() {
            if (pendingErrors.length) {
                throw pendingErrors.shift();
            }
        }

        /**
         * Calls a task as soon as possible after returning, in its own event, with priority
         * over other events like animation, reflow, and repaint. An error thrown from an
         * event will not interrupt, nor even substantially slow down the processing of
         * other events, but will be rather postponed to a lower priority event.
         * @param {{call}} task A callable object, typically a function that takes no
         * arguments.
         */
        //module.exports = asap;
        function asap(task) {
            var rawTask;
            if (freeTasks.length) {
                rawTask = freeTasks.pop();
            } else {
                rawTask = new RawTask();
            }
            rawTask.task = task;
            rawAsap(rawTask);
        }

        // We wrap tasks with recyclable task objects.  A task object implements
        // `call`, just like a function.
        function RawTask() {
            this.task = null;
        }

        // The sole purpose of wrapping the task is to catch the exception and recycle
        // the task object after its single use.
        RawTask.prototype.call = function () {
            try {
                this.task.call();
            } catch (error) {
                if (asap.onerror) {
                    // This hook exists purely for testing purposes.
                    // Its name will be periodically randomized to break any code that
                    // depends on its existence.
                    asap.onerror(error);
                } else {
                    // In a web browser, exceptions are not fatal. However, to avoid
                    // slowing down the queue of pending tasks, we rethrow the error in a
                    // lower priority turn.
                    pendingErrors.push(error);
                    requestErrorThrow();
                }
            } finally {
                this.task = null;
                freeTasks[freeTasks.length] = this;
            }
        };

        return asap;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(0)
// Boilerplate for AMD and Node
);

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * 文件用途说明 : promise+标准底层库
 *
 * 项目名称 : dfzq-obboot-mobi
 * 作者姓名 : crixusshen
 * 创建日期 : 16/4/3
 * 修改日期 : 16/4/3
 * 版权所有 : 东方证券股份有限公司
 **/

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (define) {

    !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

        var asap = __webpack_require__(132);

        function noop() {}

        // States:
        //
        // 0 - pending
        // 1 - fulfilled with _value
        // 2 - rejected with _value
        // 3 - adopted the state of another promise, _value
        //
        // once the state is no longer pending (0) it is immutable

        // All `_` prefixed properties will be reduced to `_{random number}`
        // at build time to obfuscate them and discourage their use.
        // We don't use symbols or Object.defineProperty to fully hide them
        // because the performance isn't good enough.


        // to avoid using try/catch inside critical functions, we
        // extract them to here.
        var LAST_ERROR = null;
        var IS_ERROR = {};
        function getThen(obj) {
            try {
                return obj.then;
            } catch (ex) {
                LAST_ERROR = ex;
                return IS_ERROR;
            }
        }

        function tryCallOne(fn, a) {
            try {
                return fn(a);
            } catch (ex) {
                LAST_ERROR = ex;
                return IS_ERROR;
            }
        }
        function tryCallTwo(fn, a, b) {
            try {
                fn(a, b);
            } catch (ex) {
                LAST_ERROR = ex;
                return IS_ERROR;
            }
        }

        function Promise(fn) {
            if (_typeof(this) !== 'object') {
                throw new TypeError('Promises must be constructed via new');
            }
            if (typeof fn !== 'function') {
                throw new TypeError('not a function');
            }
            // 0-不延迟 1-需要延迟
            this._deferredState = 0;
            // 0-初始化 1-resolve 2-reject
            this._state = 0;
            this._value = null;
            this._deferreds = null;
            if (fn === noop) return;
            doResolve(fn, this);
        }
        Promise._onHandle = null;
        Promise._onReject = null;
        Promise._noop = noop;

        Promise.prototype.then = function (onFulfilled, onRejected) {
            if (this.constructor !== Promise) {
                return safeThen(this, onFulfilled, onRejected);
            }
            var res = new Promise(noop);
            handle(this, new Handler(onFulfilled, onRejected, res));
            return res;
        };

        Promise.prototype.done = function (onFulfilled, onRejected) {
            var self = arguments.length ? this.then.apply(this, arguments) : this;
            self.then(null, function (err) {
                setTimeout(function () {
                    throw err;
                }, 0);
            });
        };

        function safeThen(self, onFulfilled, onRejected) {
            return new self.constructor(function (resolve, reject) {
                var res = new Promise(noop);
                res.then(resolve, reject);
                handle(self, new Handler(onFulfilled, onRejected, res));
            });
        };
        function handle(self, deferred) {
            while (self._state === 3) {
                self = self._value;
            }
            if (Promise._onHandle) {
                Promise._onHandle(self);
            }
            if (self._state === 0) {
                if (self._deferredState === 0) {
                    self._deferredState = 1;
                    self._deferreds = deferred;
                    return;
                }
                if (self._deferredState === 1) {
                    self._deferredState = 2;
                    self._deferreds = [self._deferreds, deferred];
                    return;
                }
                self._deferreds.push(deferred);
                return;
            }
            handleResolved(self, deferred);
        }

        function handleResolved(self, deferred) {
            asap(function () {
                var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
                if (cb === null) {
                    if (self._state === 1) {
                        resolve(deferred.promise, self._value);
                    } else {
                        reject(deferred.promise, self._value);
                    }
                    return;
                }
                var ret = tryCallOne(cb, self._value);
                if (ret === IS_ERROR) {
                    reject(deferred.promise, LAST_ERROR);
                } else {
                    resolve(deferred.promise, ret);
                }
            });
        }
        function resolve(self, newValue) {
            // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
            if (newValue === self) {
                return reject(self, new TypeError('A promise cannot be resolved with itself.'));
            }
            if (newValue && ((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) === 'object' || typeof newValue === 'function')) {
                var then = getThen(newValue);
                if (then === IS_ERROR) {
                    return reject(self, LAST_ERROR);
                }
                if (then === self.then && newValue instanceof Promise) {
                    self._state = 3;
                    self._value = newValue;
                    finale(self);
                    return;
                } else if (typeof then === 'function') {
                    doResolve(then.bind(newValue), self);
                    return;
                }
            }
            self._state = 1;
            self._value = newValue;
            finale(self);
        }

        function reject(self, newValue) {
            self._state = 2;
            self._value = newValue;
            if (Promise._onReject) {
                Promise._onReject(self, newValue);
            }
            finale(self);
        }
        function finale(self) {
            if (self._deferredState === 1) {
                handle(self, self._deferreds);
                self._deferreds = null;
            }
            if (self._deferredState === 2) {
                for (var i = 0; i < self._deferreds.length; i++) {
                    handle(self, self._deferreds[i]);
                }
                self._deferreds = null;
            }
        }

        // One Defer
        function Handler(onFulfilled, onRejected, promise) {
            this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
            this.onRejected = typeof onRejected === 'function' ? onRejected : null;
            this.promise = promise;
        }

        /**
         * resolver处理
         * onFulfilled and onRejected只会被执行一次.
         *
         * 不保证会异步处理.
         */
        function doResolve(fn, promise) {
            var done = false;
            var res = tryCallTwo(fn,
            // resolve处理
            function (value) {
                if (done) return;
                done = true;
                resolve(promise, value);
            },
            // reject处理
            function (reason) {
                if (done) return;
                done = true;
                reject(promise, reason);
            });
            if (!done && res === IS_ERROR) {
                done = true;
                reject(promise, LAST_ERROR);
            }
        }

        return Promise;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(0)
// Boilerplate for AMD and Node
);

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * 文件用途说明 : asap队列模块
 *
 * 项目名称 : dfzq-obboot-mobi
 * 作者姓名 : crixusshen
 * 创建日期 : 16/4/3
 * 修改日期 : 16/4/3
 * 版权所有 : 东方证券股份有限公司
 **/

(function (define) {

    !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

        "use strict";

        // Use the fastest means possible to execute a task in its own turn, with
        // priority over other events including IO, animation, reflow, and redraw
        // events in browsers.
        //
        // An exception thrown by a task will permanently interrupt the processing of
        // subsequent tasks. The higher level `asap` function ensures that if an
        // exception is thrown by a task, that the task queue will continue flushing as
        // soon as possible, but if you use `rawAsap` directly, you are responsible to
        // either ensure that no exceptions are thrown from your task, or to manually
        // call `rawAsap.requestFlush` if an exception is thrown.
        //module.exports = rawAsap;

        function rawAsap(task) {
            if (!queue.length) {
                requestFlush();
                flushing = true;
            }
            // Equivalent to push, but avoids a function call.
            queue[queue.length] = task;
        }

        var queue = [];
        // Once a flush has been requested, no further calls to `requestFlush` are
        // necessary until the next `flush` completes.
        var flushing = false;
        // `requestFlush` is an implementation-specific method that attempts to kick
        // off a `flush` event as quickly as possible. `flush` will attempt to exhaust
        // the event queue before yielding to the browser's own event loop.
        var requestFlush;
        // The position of the next task to execute in the task queue. This is
        // preserved between calls to `flush` so that it can be resumed if
        // a task throws an exception.
        var index = 0;
        // If a task schedules additional tasks recursively, the task queue can grow
        // unbounded. To prevent memory exhaustion, the task queue will periodically
        // truncate already-completed tasks.
        var capacity = 1024;

        // The flush function processes all tasks that have been scheduled with
        // `rawAsap` unless and until one of those tasks throws an exception.
        // If a task throws an exception, `flush` ensures that its state will remain
        // consistent and will resume where it left off when called again.
        // However, `flush` does not make any arrangements to be called again if an
        // exception is thrown.
        function flush() {
            while (index < queue.length) {
                var currentIndex = index;
                // Advance the index before calling the task. This ensures that we will
                // begin flushing on the next task the task throws an error.
                index = index + 1;
                queue[currentIndex].call();
                // Prevent leaking memory for long chains of recursive calls to `asap`.
                // If we call `asap` within tasks scheduled by `asap`, the queue will
                // grow, but to avoid an O(n) walk for every task we execute, we don't
                // shift tasks off the queue after they have been executed.
                // Instead, we periodically shift 1024 tasks off the queue.
                if (index > capacity) {
                    // Manually shift all values starting at the index back to the
                    // beginning of the queue.
                    for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                        queue[scan] = queue[scan + index];
                    }
                    queue.length -= index;
                    index = 0;
                }
            }
            queue.length = 0;
            index = 0;
            flushing = false;
        }

        // `requestFlush` is implemented using a strategy based on data collected from
        // every available SauceLabs Selenium web driver worker at time of writing.
        // https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

        // Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
        // have WebKitMutationObserver but not un-prefixed MutationObserver.
        // Must use `global` instead of `window` to work in both frames and web
        // workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
        var global = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
        var BrowserMutationObserver = global.MutationObserver || global.WebKitMutationObserver;

        // MutationObservers are desirable because they have high priority and work
        // reliably everywhere they are implemented.
        // They are implemented in all modern browsers.
        //
        // - Android 4-4.3
        // - Chrome 26-34
        // - Firefox 14-29
        // - Internet Explorer 11
        // - iPad Safari 6-7.1
        // - iPhone Safari 7-7.1
        // - Safari 6-7
        if (typeof BrowserMutationObserver === "function") {
            requestFlush = makeRequestCallFromMutationObserver(flush);

            // MessageChannels are desirable because they give direct access to the HTML
            // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
            // 11-12, and in web workers in many engines.
            // Although message channels yield to any queued rendering and IO tasks, they
            // would be better than imposing the 4ms delay of timers.
            // However, they do not work reliably in Internet Explorer or Safari.

            // Internet Explorer 10 is the only browser that has setImmediate but does
            // not have MutationObservers.
            // Although setImmediate yields to the browser's renderer, it would be
            // preferrable to falling back to setTimeout since it does not have
            // the minimum 4ms penalty.
            // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
            // Desktop to a lesser extent) that renders both setImmediate and
            // MessageChannel useless for the purposes of ASAP.
            // https://github.com/kriskowal/q/issues/396

            // Timers are implemented universally.
            // We fall back to timers in workers in most engines, and in foreground
            // contexts in the following browsers.
            // However, note that even this simple case requires nuances to operate in a
            // broad spectrum of browsers.
            //
            // - Firefox 3-13
            // - Internet Explorer 6-9
            // - iPad Safari 4.3
            // - Lynx 2.8.7
        } else {
            requestFlush = makeRequestCallFromTimer(flush);
        }

        // `requestFlush` requests that the high priority event queue be flushed as
        // soon as possible.
        // This is useful to prevent an error thrown in a task from stalling the event
        // queue if the exception handled by Node.js’s
        // `process.on("uncaughtException")` or by a domain.
        rawAsap.requestFlush = requestFlush;

        // To request a high priority event, we induce a mutation observer by toggling
        // the text of a text node between "1" and "-1".
        function makeRequestCallFromMutationObserver(callback) {
            var toggle = 1;
            var observer = new BrowserMutationObserver(callback);
            var node = document.createTextNode("");
            observer.observe(node, { characterData: true });
            return function requestCall() {
                toggle = -toggle;
                node.data = toggle;
            };
        }

        // The message channel technique was discovered by Malte Ubl and was the
        // original foundation for this library.
        // http://www.nonblocking.io/2011/06/windownexttick.html

        // Safari 6.0.5 (at least) intermittently fails to create message ports on a
        // page's first load. Thankfully, this version of Safari supports
        // MutationObservers, so we don't need to fall back in that case.

        // function makeRequestCallFromMessageChannel(callback) {
        //     var channel = new MessageChannel();
        //     channel.port1.onmessage = callback;
        //     return function requestCall() {
        //         channel.port2.postMessage(0);
        //     };
        // }

        // For reasons explained above, we are also unable to use `setImmediate`
        // under any circumstances.
        // Even if we were, there is another bug in Internet Explorer 10.
        // It is not sufficient to assign `setImmediate` to `requestFlush` because
        // `setImmediate` must be called *by name* and therefore must be wrapped in a
        // closure.
        // Never forget.

        // function makeRequestCallFromSetImmediate(callback) {
        //     return function requestCall() {
        //         setImmediate(callback);
        //     };
        // }

        // Safari 6.0 has a problem where timers will get lost while the user is
        // scrolling. This problem does not impact ASAP because Safari 6.0 supports
        // mutation observers, so that implementation is used instead.
        // However, if we ever elect to use timers in Safari, the prevalent work-around
        // is to add a scroll event listener that calls for a flush.

        // `setTimeout` does not call the passed callback if the delay is less than
        // approximately 7 in web workers in Firefox 8 through 18, and sometimes not
        // even then.

        function makeRequestCallFromTimer(callback) {
            return function requestCall() {
                // We dispatch a timeout with a specified delay of 0 for engines that
                // can reliably accommodate that request. This will usually be snapped
                // to a 4 milisecond delay, but once we're flushing, there's no delay
                // between events.
                var timeoutHandle = setTimeout(handleTimer, 0);
                // However, since this timer gets frequently dropped in Firefox
                // workers, we enlist an interval handle that will try to fire
                // an event 20 times per second until it succeeds.
                var intervalHandle = setInterval(handleTimer, 50);

                function handleTimer() {
                    // Whichever timer succeeds will cancel both timers and
                    // execute the callback.
                    clearTimeout(timeoutHandle);
                    clearInterval(intervalHandle);
                    callback();
                }
            };
        }

        // This is for `asap.js` only.
        // Its name will be periodically randomized to break any code that depends on
        // its existence.
        rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

        // ASAP was originally a nextTick shim included in Q. This was factored out
        // into this ASAP package. It was later adapted to RSVP which made further
        // amendments. These decisions, particularly to marginalize MessageChannel and
        // to capture the MutationObserver implementation in a closure, were integrated
        // back into ASAP proper.
        // https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

        return rawAsap;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(0)
// Boilerplate for AMD and Node
);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * 文件用途说明 : promise-ES6 核心实现库
 *
 * 项目名称 : dfzq-obboot-mobi
 * 作者姓名 : crixusshen
 * 创建日期 : 16/4/3
 * 修改日期 : 16/4/3
 * 版权所有 : 东方证券股份有限公司
 **/

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (define) {

    !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

        //This file contains the ES6 extensions to the core Promises/A+ API

        var Promise = __webpack_require__(133);

        /* Static Functions */

        var TRUE = valuePromise(true);
        var FALSE = valuePromise(false);
        var NULL = valuePromise(null);
        var UNDEFINED = valuePromise(undefined);
        var ZERO = valuePromise(0);
        var EMPTYSTRING = valuePromise('');

        function valuePromise(value) {
            var p = new Promise(Promise._noop);
            p._state = 1;
            p._value = value;
            return p;
        }
        Promise.resolve = function (value) {
            if (value instanceof Promise) return value;

            if (value === null) return NULL;
            if (value === undefined) return UNDEFINED;
            if (value === true) return TRUE;
            if (value === false) return FALSE;
            if (value === 0) return ZERO;
            if (value === '') return EMPTYSTRING;

            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' || typeof value === 'function') {
                try {
                    var then = value.then;
                    if (typeof then === 'function') {
                        return new Promise(then.bind(value));
                    }
                } catch (ex) {
                    return new Promise(function (resolve, reject) {
                        reject(ex);
                    });
                }
            }
            return valuePromise(value);
        };

        Promise.all = function (arr) {
            var args = Array.prototype.slice.call(arr);

            return new Promise(function (resolve, reject) {
                if (args.length === 0) return resolve([]);
                var remaining = args.length;
                function res(i, val) {
                    if (val && ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' || typeof val === 'function')) {
                        if (val instanceof Promise && val.then === Promise.prototype.then) {
                            while (val._state === 3) {
                                val = val._value;
                            }
                            if (val._state === 1) return res(i, val._value);
                            if (val._state === 2) reject(val._value);
                            val.then(function (val) {
                                res(i, val);
                            }, reject);
                            return;
                        } else {
                            var then = val.then;
                            if (typeof then === 'function') {
                                var p = new Promise(then.bind(val));
                                p.then(function (val) {
                                    res(i, val);
                                }, reject);
                                return;
                            }
                        }
                    }
                    args[i] = val;
                    if (--remaining === 0) {
                        resolve(args);
                    }
                }
                for (var i = 0; i < args.length; i++) {
                    res(i, args[i]);
                }
            });
        };

        Promise.reject = function (value) {
            return new Promise(function (resolve, reject) {
                reject(value);
            });
        };

        Promise.race = function (values) {
            return new Promise(function (resolve, reject) {
                values.forEach(function (value) {
                    Promise.resolve(value).then(resolve, reject);
                });
            });
        };

        Promise.promise = function (fn) {
            return new Promise(fn);
        };

        Promise.attempt = function (fn) {
            for (var i = 0, l = arguments.length - 1, args = new Array(l); i < l; ++i) {
                args[i] = arguments[i + 1];
            }

            try {
                return this.resolve(fn.apply(this, args));
            } catch (e) {
                return this.reject(e);
            }
        };

        /* Prototype Methods */

        Promise.prototype['otherwise'] = function (onRejected) {
            return this.then(null, onRejected);
        };

        return Promise;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(__webpack_require__(0)
// Boilerplate for AMD and Node
);

/***/ })

},[228]);
});