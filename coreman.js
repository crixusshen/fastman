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
return webpackJsonpfastman([4],{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                               * @Author: shenzhiwei
                                                                                                                                                                                                                                                                               * @Date: 2019-07-28 15:32:50
                                                                                                                                                                                                                                                                               * @Company: orientsec.com.cn
                                                                                                                                                                                                                                                                               * @Description: core核心库
                                                                                                                                                                                                                                                                               */
// 依赖于fastClick库

// import appCache from 'appcache-nanny'


var _router = __webpack_require__(49);

var _fastclick = __webpack_require__(144);

var _fastclick2 = _interopRequireDefault(_fastclick);

var _actionService = __webpack_require__(50);

var _actionService2 = _interopRequireDefault(_actionService);

var _modelService = __webpack_require__(52);

var _modelService2 = _interopRequireDefault(_modelService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Version = __webpack_require__(53);

var SVG_NS = "http://www.w3.org/2000/svg";

var app = function app(_app) {
    var view = _app.view || function () {
        return "";
    };

    /**
     * 转场时清空当前的v-node
     * @param match 当前路由匹配
     */
    function loadDocument(match) {
        if ($.router) {
            if (!$.router.vdoms[match]) {
                if (node) {
                    node = undefined;
                    routerTrace.push(match);
                }
            }
        }
    }
    $.loadDocument = loadDocument;

    var routerTrace = []; // 路由轨迹
    var model;
    var actions = {};
    var effects = {}; // 新增
    var readies = [];
    var hooks = {
        onError: [],
        onAction: [],
        onUpdate: [],
        onRender: [],
        onRendered: [],
        onPageInit: [],
        onPageWillAppear: [],
        onPageDidAppear: [],
        onPageWillDisappear: []
    };

    var extraHooks = {
        // onPageLoadStart: EVENTS['pageLoadStart'],
        // onPageLoadCancel: EVENTS['pageLoadCancel'],
        // onPageLoadError: EVENTS['pageLoadError'],
        // onPageLoadComplete: EVENTS['pageLoadComplete'],
        onPageWillAppear: _router.EVENTS['pageAnimationStart'],
        onPageDidAppear: _router.EVENTS['pageAnimationEnd'],
        // onBeforePageRemove: EVENTS['beforePageRemove'],
        // onPageRemoved: EVENTS['pageRemoved'],
        onPageWillDisappear: _router.EVENTS['beforePageSwitch'],
        onPageInit: _router.EVENTS['pageInit']
    };

    var actionTypes = {
        action: 0,
        effect: 1,
        mutation: 2

        // var plugins = [app].concat((app.plugins || []).map(function (plugin) {
        //   return plugin(app)
        // }))

    };var node;
    var elements = [];
    var element;
    var root;
    var batch = [];
    var plugins = _app.plugins || [];

    for (var i = -1; i < plugins.length; i++) {
        // var plugin = i < 0 ? app : plugins[i](app) // todo 这里修改了注意啊
        // 将函数的ref进行了修改
        var reinit = function reinit(proxyEffects) {
            init(actions, proxyEffects, "", false, actionTypes.effect, true);
        };
        var plugin = i < 0 ? _app : plugins[i](_app, reinit);
        var obj = plugin.model;

        if (obj != null) {
            model = merge(model, obj);
        }

        if (obj = plugin.actions) {
            // 保证陈旧的plugins可以正常使用
            init(actions, obj, "", true, actionTypes.action, false);
        }
        if (obj = plugin.mutations) {
            // 为mutation变种增加函数前缀$
            var newObj = {};
            Object.keys(obj).forEach(function (key) {
                // 兼容<2.1.2版本
                newObj['$' + key] = obj[key];
                // 自>=2.1.2版本开始变种函数不在具有$前缀，而是由强类型来约束
                newObj[key] = obj[key];
            });
            init(actions, newObj, "", true, actionTypes.mutation, false);
        }
        if (obj = plugin.effects) {
            Object.keys(obj).forEach(function (key) {
                effects[key] = obj[key];
            });
            init(actions, obj, "", false, actionTypes.effect, false);
        }

        if (obj = plugin.readies) {
            readies = readies.concat(obj);
        }

        var _hooks = plugin.hooks;
        if (obj = _hooks) {
            Object.keys(obj).forEach(function (key) {
                if (hooks[key]) {
                    hooks[key].push(obj[key]);
                }
            });
        }
    }

    // 遍历注册extraHook
    Object.keys(extraHooks).forEach(function (key) {
        // 注册路由页面相关生命周期事件
        if (extraHooks[key]) {
            $(document).on(extraHooks[key], function (e, pageId, $page) {
                // 在pageInit生命周期内使用data-api方式注册scroller组件
                // if (key === 'onPageInit') {
                //     $('[data-toggle="scroller"]').scroller()
                // }

                // 生命周期函数中新增actions函数，用于某些场景下需要初始化操作
                for (var i = 0; i < hooks[key].length; i++) {
                    hooks[key][i](e, pageId, $page, actions, model);
                }
            });
        }
    });

    function onError(error) {
        for (var i = 0; i < hooks.onError.length; i++) {
            hooks.onError[i](error);
        }

        if (i <= 0) {
            throw error;
        }
    }

    function init(container, group, lastName, shouldUpdate, type, enforceInit) {
        Object.keys(group).forEach(function (key) {
            // 如果是强制重建，需要重新建立对象的引用，否则引用还会指向上一个
            if (!container[key] || enforceInit) {
                container[key] = {};
            }

            var name = lastName ? lastName + "." + key : key;
            // var name = key
            var action = group[key];
            var i;

            if (typeof action === "function") {
                container[key] = function (data) {
                    var actionType = type;
                    for (i = 0; i < hooks.onAction.length; i++) {
                        hooks.onAction[i](name, data);
                    }

                    var result;
                    // 如果是effect或mutation,需要将effect过滤掉,effect的调用通过DI实现
                    if (actionType === actionTypes.effect || actionType === actionTypes.mutation) {
                        var filterActions = {};
                        for (var actionName in actions) {
                            if (!effects[actionName]) {
                                filterActions[actionName] = actions[actionName];
                            }
                        }

                        if (actionType === actionTypes.effect) {
                            if (!_actionService2.default.AllMutationActions) {
                                _actionService2.default.AllMutationActions = filterActions;
                            }
                            // 同时刷新ModelCenterService
                            _modelService2.default.CurrentModel = model;
                            result = action.apply(undefined, arguments);
                        } else {
                            result = action(model, data, filterActions, onError);
                        }
                    } else {
                        result = action(model, data, actions, onError);
                    }

                    if (result === null || result === undefined || typeof result.then === "function" || !shouldUpdate) {
                        return result;
                    } else {
                        for (i = 0; i < hooks.onUpdate.length; i++) {
                            hooks.onUpdate[i](model, result, data);
                        }

                        model = merge(model, result);
                        render(model, view, name);
                    }
                };
            } else {
                // 第四个参数必须true，进入该流程的都是插件，因此逻辑保持原来的流程
                init(container[key], action, name, true);
            }
        });
    }

    // // 自动更新应用程序
    // if (appCache.isSupported()){
    //     function pad2(n) { return n < 10 ? '0' + n : n }

    //     function generateTimeRequestNumber() {
    //         var date = new Date();
    //         return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2(date.getDate()) + pad2(date.getHours()) + pad2(date.getMinutes()) + pad2(date.getSeconds());
    //     }

    //     console.warn('applicationCache supported')
    //     // 增加时间戳，否则该文件会一直存储在disk memory中影响缓存机制
    //     appCache.set('loaderPath', './appcache-loader.html?t=' + generateTimeRequestNumber())

    //     // 注册相关appcache事件
    //     appCache.on('progress', function (e) {
    //         console.warn('progress Event ' + (typeof e == 'object' ? JSON.stringify(e) : e))
    //     })
    //     appCache.on('cached', function (e) {
    //         console.warn('cached Event ' + (typeof e == 'object' ? JSON.stringify(e) : e))
    //     })
    //     appCache.on('update', function (e) {
    //         console.warn('update Event ' + (typeof e == 'object' ? JSON.stringify(e) : e))
    //     })
    //     // 代表appCache的manifest文件被修改过后的第一次刷新
    //     appCache.on('updateready', function (e) {
    //         console.warn('updateready Event ' + (typeof e == 'object' ? JSON.stringify(e) : e))
    //     })
    //     // 代表第一次加载manifest文件
    //     appCache.on('cached', function (e) {
    //         console.warn('cached Event ' + (typeof e == 'object' ? JSON.stringify(e) : e))
    //     })
    //     // 代表appCache没有更新（比DOMContentLoaded事件执行晚）
    //     appCache.on('noupdate', function (e) {
    //         console.warn('noupdate Event ' + (typeof e == 'object' ? JSON.stringify(e) : e))
    //     })
    //     // manifest文件发生404
    //     appCache.on('obsolete', function (e) {
    //         console.error('obsolete Event ' + (typeof e == 'object' ? JSON.stringify(e) : e))
    //     })
    //     // manifest文件发生404
    //     appCache.on('error', function (e) {
    //         console.error('error Event ' + (typeof e == 'object' ? JSON.stringify(e) : e))
    //     })

    //     // 启动定时刷新缓存机制
    //     appCache.start()

    //     // 启动applicationcache特性
    //     appCache.update()
    // } else {
    //     console.error('applicationCache not supported')
    // }

    load(function () {
        $('.page-loading').remove();

        // 当前浏览器是否支持sessionStorage特性
        if (!_router.Util.supportStorage()) {
            return;
        }

        //root = app.root || document.body.appendChild(document.createElement("div"))
        root = _app.root || document.body;

        render(model, view);

        // 记录路由轨迹
        if (model.router) routerTrace.push(model.router.match);

        for (var i = 0; i < readies.length; i++) {
            readies[i](model, actions, onError);
        }

        // 初始化路由
        var routerManager = $.router = new _router.Router();
        // 保存打开过页面的vdom，用于页面后退等场景使用
        //var __hash = Util.getUrlFragment(window.location.href)
        routerManager.vdoms[model.router.match] = node;
        // 保存初始化页面的Hash对应ViewId
        var _$visibleSection = routerManager._getCurrentSection();
        $.router.hash2ViewId[model.router.match] = _$visibleSection.attr('id');

        // data-api方式注册scroller组件(必须放在页面page-current添加后执行，否则不起效果)
        $('[data-toggle="scroller"]').scroller({
            type: 'native'
        });

        // 注册初始化的钩子程序
        _$visibleSection.isBack = false;
        _$visibleSection.trigger(_router.EVENTS.pageAnimationEnd, [_$visibleSection.attr('id'), _$visibleSection]);
        _$visibleSection.trigger(_router.EVENTS.pageInit, [_$visibleSection.attr('id'), _$visibleSection]);
    });

    // // 当popState时（即浏览器后退）触发更新上一个Node
    // function setNode(_node) {
    //     if (_node)
    //         node = _node
    // }
    // $.setNode = setNode

    function load(fn) {
        if (document.readyState[0] !== "l") {
            console.log('DOMContentLoaded Event:' + document.readyState);
            fn();
        } else {
            console.log('DOMContentLoaded Event');
            document.addEventListener("DOMContentLoaded", fn);
        }

        // ios11已解决300ms点击延时的bug，因此这里不引入fastclick，否则会偶发的发生点击事件失效的情况 .
        if ($.device.ios && Version._compareVersion($.device.osVersion, '11.0.0') >= 0) {
            console.log('[fastclick] removed');
        } else {
            // 注册快速点击，必须注册在load事件中，否则通过模板生成的virtual-dom将会失效
            window.addEventListener('load', function () {
                new _fastclick2.default(document.body);
            });
            console.log('[fastclick] added');
        }
    }

    function render(model, view, methodName) {
        // 根据路由规则获取对应的view函数
        for (i = 0; i < hooks.onRender.length; i++) {
            view = hooks.onRender[i](model, view);
        }

        // 获取Page在路由列表中的索引位置
        var indexPos = 0;
        if (node) {
            indexPos = routerTrace.indexOf(model.router.match);
        }

        // 打差异化补丁
        var _patch = function _patch() {
            // 如果是重复路由的前进和后退不触发patch（以后需考虑数据设计的区块化）
            //patch(root, node, node = view(model, actions), indexPos)
            element = elements[model.router.match];
            element = patch(root, element, node, node = view(model, actions), indexPos);
            // 更新当前page对应的document
            elements[model.router.match] = element;
            //console.log(`onPatch at pos：view${indexPos}`)

            // 更新当前page的最新node对象(初始化时$.router还未被创建)
            if ($.router) {
                $.router.vdoms[model.router.match] = node;
            }

            for (var i = 0; i < batch.length; i++) {
                batch[i]();
            }

            batch = [];
        };

        // 如果当前是路由指令则需要替换当前Node
        var ROUTER_MATCH = 'router.match';
        if (methodName && methodName.indexOf(ROUTER_MATCH) != -1) {
            if ($.router) {
                if ($.router.vdoms[model.router.match]) {
                    node = $.router.vdoms[model.router.match];
                } else {
                    _patch();
                }
            }
        }
        // 非路由Action触发，一律打补丁
        else {
                _patch();
            }

        // 如果是路由函数则进入（只是转场）
        if (methodName && methodName.indexOf(ROUTER_MATCH) != -1) {
            for (i = 0; i < hooks.onRendered.length; i++) {
                view = hooks.onRendered[i](model, view, node);
            }
        }
    }

    function merge(a, b) {
        var obj = {};

        if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== "object" || Array.isArray(b)) {
            return b;
        }

        for (var key in a) {
            obj[key] = a[key];
        }
        for (var key in b) {
            obj[key] = b[key];
        }

        return obj;
    }

    function defer(fn, data) {
        setTimeout(function () {
            fn(data);
        }, 0);
    }

    function createElementFrom(node, isSVG) {
        if (typeof node === "string") {
            var element = document.createTextNode(node);
        } else {
            var element = (isSVG = isSVG || node.tag === "svg") ? document.createElementNS(SVG_NS, node.tag) : document.createElement(node.tag);

            for (var name in node.data) {
                if (name === "onCreate") {
                    defer(node.data[name], element);
                } else {
                    setElementData(element, name, node.data[name]);
                }
            }

            for (var i = 0; i < node.children.length; i++) {
                element.appendChild(createElementFrom(node.children[i], isSVG));
            }
        }

        return element;
    }

    function removeElementData(element, name, value) {
        element[name] = value;
        element.removeAttribute(name);
    }

    function setElementData(element, name, value, oldValue) {
        name = name.toLowerCase();

        if (!value) {
            removeElementData(element, name, value, oldValue);
        } else if (name === "style") {
            for (var i in oldValue) {
                if (!(i in value)) {
                    element.style[i] = "";
                }
            }

            for (var i in value) {
                element.style[i] = value[i];
            }
        }
        // TODO 使用element.setAttribute('onclick', ...)代替`addEventListener`
        else if (name[0] === "o" && name[1] === "n") {
                var event = name.substr(2);
                element.removeEventListener(event, oldValue);
                element.addEventListener(event, value);
            } else {
                element.setAttribute(name, value);

                if (element.namespaceURI !== SVG_NS) {
                    if (element.type === "text") {
                        var oldSelStart = element.selectionStart;
                        var oldSelEnd = element.selectionEnd;
                    }

                    element[name] = value;

                    if (oldSelStart >= 0) {
                        element.setSelectionRange(oldSelStart, oldSelEnd);
                    }
                }
            }
    }

    function updateElementData(element, data, oldData) {
        for (var name in merge(oldData, data)) {
            var value = data[name];
            var oldValue = oldData[name];
            var realValue = element[name];

            if (name === "onUpdate") {
                defer(value, element);
            } else if (value !== oldValue || realValue !== value) {
                setElementData(element, name, value, oldValue);
            }
        }
    }

    function patch(parent, element, oldNode, node) {
        if (oldNode === undefined) {
            element = parent.appendChild(createElementFrom(node));
        } else if (node === undefined) {
            batch.push(parent.removeChild.bind(parent, element));

            if (oldNode && oldNode.data && oldNode.data.onRemove) {
                defer(oldNode.data.onRemove, element);
            }
        } else if (node.tag !== oldNode.tag || (typeof node === 'undefined' ? 'undefined' : _typeof(node)) !== (typeof oldNode === 'undefined' ? 'undefined' : _typeof(oldNode)) || typeof node === "string" && node !== oldNode) {
            if (typeof node === "string") {
                element.textContent = node;
            } else {
                var i = createElementFrom(node);
                parent.replaceChild(i, element);
                element = i;
            }
        } else if (node.tag) {
            updateElementData(element, node.data, oldNode.data);

            var len = node.children.length;
            var oldLen = oldNode.children.length;

            for (var i = 0; i < len || i < oldLen; i++) {
                patch(element, element.childNodes[i], oldNode.children[i], node.children[i]);
            }
        }

        return element;
    }
};

exports.app = app;

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                               * @Author: shenzhiwei
                                                                                                                                                                                                                                                                               * @Date: 2019-07-07 17:39:07
                                                                                                                                                                                                                                                                               * @LastEditors: shenzhiwei
                                                                                                                                                                                                                                                                               * @LastEditTime: 2019-07-09 12:30:16
                                                                                                                                                                                                                                                                               * @Description: ioc容器运行时修改函数
                                                                                                                                                                                                                                                                               */


var _pool = __webpack_require__(16);

var _pool2 = _interopRequireDefault(_pool);

var _importAction = __webpack_require__(51);

var _importAction2 = _interopRequireDefault(_importAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(container) {
  return function (app, reinit) {
    return {
      actions: {
        container: {
          modify: function modify(model, data, actions, error) {
            // 首先container.register注册具体实现类
            if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
              for (var key in data) {
                container.register(key, {
                  useClass: data[key]
                });
              }

              // 之后进行实例的重建工作
              var mutativeEffects = (0, _importAction2.default)(container)();
              // 调用上层进行effect引用的重新初始化
              reinit(mutativeEffects.effects);

              // 刷新dom，防止dom缓存
              actions.$updateModel(model);
            }
          }
        }
      }
    };
  };
};

exports.default = Container;

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * 数据状态管理
                                                                                                                                                                                                                                                                               * Created by dfzq on 2018/3/22.
                                                                                                                                                                                                                                                                               */


exports.default = function (options) {
    return {
        actions: {
            model: {
                /**
                 * 更新model数据状态
                 * @param state {Any} 修改model数据块的某部分数据
                 */
                setState: function setState(model, state) {
                    return state;
                },

                /**
                 * 更新model中的对象数据状态
                 * @param state {Object} 修改model对象数据块的某部分数据，只能是对象
                 */
                setObjectState: function setObjectState(model, state) {
                    if ((typeof state === 'undefined' ? 'undefined' : _typeof(state)) !== 'object') {
                        throw new Error('parameter of action.model.setObjectState must be object type.');
                    }
                    // 创建一个空对象
                    var obj = {};
                    // 遍历state属性，从model中寻找对应属性的值塞入obj中
                    for (var key in state) {
                        obj[key] = {};
                        for (var protertyKey in model[key]) {
                            var value = state[key][protertyKey];
                            if (value) {
                                obj[key][protertyKey] = value;
                            } else {
                                obj[key][protertyKey] = model[key][protertyKey];
                            }
                        }
                    }
                    // return $.extend(true, model, state)  // 这种方式存在循环引用的严重bug
                    return obj;
                }
            }
        }
    };
};

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  // prompt函数
  var prompt = null;

  return {
    model: {
      router: _match(options.view, _getUrlFragment(location.href))
    },
    actions: {
      router: {
        match: function match(_, data) {
          return {
            router: _match(options.view, _getUrlFragment(data))
          };
        },
        go: function go(_, data, actions) {
          // history.pushState({}, "", data)
          actions.router.match(data.indexOf('#') == 0 ? data : '#' + data);
        },
        back: function back() {
          history.back();
        },
        // 注入阻塞函数
        block: function block(_, data) {
          prompt = typeof data === 'function' ? data : null;
        },
        // 移除阻塞函数
        destoryBlock: function destoryBlock() {
          prompt = null;
        }
      }
    },
    hooks: {
      onRender: function onRender(model) {
        $.loadDocument(model.router.match);
        return options.view[model.router.match];
      },
      onRendered: function onRendered(model, view, node) {
        // 路由转场
        if ($.router) if (!$.router.popstateFlag) {
          // 对真实hash进行路由
          $.router.load(model.router);
        } else {
          $.router.popstateFlag = false;
        }
      }
    },
    readies: [function (_, actions) {
      addEventListener("popstate", function (e) {
        // 阻塞开始
        if (prompt) {
          prompt();

          // 2017-12-20 解决上层不执行摧毁事件循环递归执行block的bug
          prompt = null;
        } else {
          // 是否当前路由是popState发起
          $.router.popstateFlag = true;
          // 获取当前state的history视图的路由对象
          var router = _match(options.view, _getUrlFragment(location.href));
          // 渲染当前state的history视图
          actions.router.match(location.href);
          // router.match与pageId形成绑定关系，用于快速查找界面上的Page块
          $.router._onPopState(e, router.match);
        }
      });
    }]
  };
};

function _match(routes, path) {
  var match,
      params = {};

  // 解决部分外链在hash后添加get参数，导致路由出现错误的bug，例如QQ分享
  if (path.indexOf('&') != -1) {
    path = path.substr(0, path.indexOf('&'));
  }

  for (var route in routes) {
    var keys = [];

    if (route === "*") {
      continue;
    }

    path.replace(new RegExp("^" + route.replace(/\//g, "\\/").replace(/:([A-Za-z0-9_]+)/g, function (_, key) {
      keys.push(key);
      return "([-A-Za-z0-9_]+)";
    }) + "/?$", "g"), function () {

      for (var i = 1; i < arguments.length - 2; i++) {
        params[keys.shift()] = arguments[i];
      }
      match = route;
    });

    if (match) {
      break;
    }
  }

  return {
    match: match || "*",
    params: params,
    path: path
  };
}

function _getUrlFragment(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? '/' : url.slice(hashIndex + 1);
}

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (true) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return FastClick;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author: shenzhiwei
 * @Date: 2019-07-05 08:46:48
 * @LastEditors: shenzhiwei
 * @LastEditTime: 2019-07-05 11:07:49
 * @Description: 存储类构造类型和函数的对应关系
 */
// 存储类构造类型和函数的对应关系
var ExposeActionPool = (_temp = _class = function ExposeActionPool() {
  _classCallCheck(this, ExposeActionPool);
}, _class._pool = new Map(), _temp);
exports.default = ExposeActionPool;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87);


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (tag, data) {
  var canConcat, oldCanConcat;

  children = [];
  i = arguments.length;

  while (i-- > 2) {
    stack.push(arguments[i]);
  }

  while (stack.length) {
    if (Array.isArray(node = stack.pop())) {
      i = node.length;

      while (i--) {
        stack.push(node[i]);
      }
    } else if (node != null && node !== true && node !== false) {
      // Ignore nulls and booleans; this is conditional rendering.

      if (typeof node === "number") {
        node = node + "";
      }

      // Concatenate contiguous number/string nodes into one string.
      // The idea is to avoid creating unnecessary text nodes.

      canConcat = typeof node === "string";

      if (canConcat && oldCanConcat) {
        children[children.length - 1] += node;
      } else {
        children.push(node);
        oldCanConcat = canConcat;
      }
    }
  }

  if (typeof tag === "function") {
    var _class = new tag(data, children);
    if (_class['render']) {
      return new tag(data, children).render();
    } else {
      throw new Error("view class must define render function.");
    }
  }

  return {
    tag: tag,
    data: data || {},
    children: children
  };
};

var i,
    node,
    children,
    stack = [];

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 解耦effect调用mutation
 * ActionService内部缓存了所有可调用的mutation异变函数
 */
var ActionService = function () {
  function ActionService() {
    _classCallCheck(this, ActionService);

    console.log('ActionService Created.');
  }

  _createClass(ActionService, [{
    key: 'select',
    value: function select() {
      return ActionService.AllMutationActions;
    }
  }]);

  return ActionService;
}();

exports.default = ActionService;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pool = __webpack_require__(16);

var _pool2 = _interopRequireDefault(_pool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImportAction = function ImportAction(container) {
  return function () {
    var effects = {};
    var $pool = _pool2.default._pool;
    if ($pool.size > 0) {
      $pool.forEach(function (value, key, map) {
        var ctor = key.constructor;
        if (ctor) {
          // 2.1.2开始支持
          if (!value) {
            var instance = container.resolve(key);
            for (var _key in instance) {
              if (typeof instance[_key] === 'function') {
                effects[_key] = instance[_key];
              }
            }
          } else {
            // 优化前的逻辑，一样兼容 < 2.1.2版本的声明方式
            var valueLength = value.length;
            if (valueLength > 0) {
              // 该模式下不提供注入具体的实现类，由上层在启动程序初始化时候进行注册
              var _instance = container.resolve(key.constructor); // 获取实例
              for (var i = 0, j = valueLength; i < j; i++) {
                effects[value[i]] = _instance[value[i]];
              }
            }
          }
        }
      });
    }
    return {
      effects: effects
    };
  };
}; /*
    * @Author: shenzhiwei
    * @Date: 2019-07-05 08:41:29
    * @LastEditors: Please set LastEditors
    * @LastEditTime: 2019-08-01 16:54:29
    * @Description: 将被注解exposeAction的effect/mutation注入到actions中
    */
exports.default = ImportAction;

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author: shenzhiwei
 * @Date: 2019-08-08 15:32:04
 * @Company: orientsec.com.cn
 * @Description: 解耦effect调用model
 */
var ModelCenterService = function () {
  function ModelCenterService() {
    _classCallCheck(this, ModelCenterService);

    console.log('ModelService Created.');
  }

  _createClass(ModelCenterService, [{
    key: 'select',
    value: function select() {
      return ModelService.CurrentModel;
    }
  }]);

  return ModelCenterService;
}();

exports.default = ModelCenterService;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModelCenterService = exports.Container = exports.ActionService = exports.ImportAction = exports.ModelState = exports.Router = exports.app = exports.h = undefined;

var _h = __webpack_require__(32);

var _h2 = _interopRequireDefault(_h);

var _appOptimize = __webpack_require__(112);

var _router = __webpack_require__(115);

var _router2 = _interopRequireDefault(_router);

var _modelState = __webpack_require__(114);

var _modelState2 = _interopRequireDefault(_modelState);

var _importAction = __webpack_require__(51);

var _importAction2 = _interopRequireDefault(_importAction);

var _actionService = __webpack_require__(50);

var _actionService2 = _interopRequireDefault(_actionService);

var _modelService = __webpack_require__(52);

var _modelService2 = _interopRequireDefault(_modelService);

var _container = __webpack_require__(113);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 解决effect中model的引用问题


// 解决effect依赖注入的问题（fast plugin）
/*
 * @Author: shenzhiwei
 * @Date: 2019-07-23 14:58:35
 * @Company: orientsec.com.cn
 * @Description: 优化过的入口文件
 */
exports.h = _h2.default;
exports.app = _appOptimize.app;
exports.Router = _router2.default;
exports.ModelState = _modelState2.default;
exports.ImportAction = _importAction2.default;
exports.ActionService = _actionService2.default;
exports.Container = _container2.default;
exports.ModelCenterService = _modelService2.default;
// 解决多态性变化时候的运行时实例引用动态修改

// 解决effect中actions的引用问题，即通过actions调用可拿到其引用，但是通过实例调用就拿不到

/***/ })

},[213]);
});