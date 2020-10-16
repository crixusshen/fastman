"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bootstrap = void 0;
/*
 * @Author: shenzhiwei
 * @Date: 2019-07-06 14:11:25
 * @Description: 基础启动程序
 */
/// <reference path="../../libs/bootstrap/fast.d.ts" />
var config_1 = __importDefault(require("config"));
var confirmman_1 = __importDefault(require("fastman/confirmman"));
var loadingman_1 = require("fastman/loadingman");
var tipman_1 = require("fastman/tipman");
var alertman_1 = __importDefault(require("fastman/alertman"));
var ua = navigator.userAgent;
var isFromApp = !!ua.toLowerCase().match(/DFYJ/i);
var OfflinePluginRuntime = require("offline-plugin/runtime");
var updateManager = config_1.default.updateManager;
var updateManagerDefault = {
    text: "当前页面已更新，需要重新打开以使用最新功能",
    okButton: "重新打开",
    cancelButton: "取消",
    forceUpdateText: this.text,
    forceUpdateButton: "知道了",
    quietDisappearStayTime: 3500,
};
var preventRepeatUpdateAlert = false; // 防止重复弹出alert
// window.swOfflineSwitch 由应用层 webpack html plugin 进行注入，可通过 target 来进行配置
// @ts-ignore
if (window.swOfflineSwitch) { // sw 降级方案，appcache则可通过删除 manifest 文件来降级
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration().then(function (registration) {
            registration && registration.unregister().then(function (swOfflineFlag) {
                if (swOfflineFlag) {
                    console.log('[fastman-sw]:unRegister successful!');
                    location.reload();
                }
                else {
                    console.log('[fastman-sw]:unRegister failure!');
                }
            });
        });
    }
}
else {
    OfflinePluginRuntime.install({
        onInstalled: function () {
            console.log("[fastman-sw]:onInstalled");
        },
        onUpdating: function () {
            console.log("[fastman-sw]:onUpdating");
        },
        onUpdateReady: function () {
            // 非APP直接使用none更新策略
            if (!isFromApp) {
                updateManager.type = "none";
            }
            // applyUpdate()执行后会自动调用onUpdated函数，onUpdated内可进行刷新或关闭页面操作
            if (updateManager && (updateManager.type === "default" || updateManager.type == undefined)) {
                if (!preventRepeatUpdateAlert) {
                    preventRepeatUpdateAlert = true;
                    confirmman_1.default({
                        text: updateManager.text || updateManagerDefault.text,
                        okText: updateManager.okButton || updateManagerDefault.okButton,
                        cancelText: updateManager.cancelButton || updateManagerDefault.cancelButton,
                        onOkClick: function () {
                            OfflinePluginRuntime.applyUpdate();
                            preventRepeatUpdateAlert = false;
                        },
                        onCancelClick: function () {
                            preventRepeatUpdateAlert = false;
                        },
                    });
                }
            }
            else if (updateManager && updateManager.type === "quiet") {
                OfflinePluginRuntime.applyUpdate();
                tipman_1.tip({
                    content: updateManager.text || updateManagerDefault.text,
                    stayTime: updateManager.quietDisappearStayTime || updateManagerDefault.quietDisappearStayTime
                });
            }
            else if (updateManager && updateManager.type === "none") {
                OfflinePluginRuntime.applyUpdate();
            }
            else if (updateManager && updateManager.type === "forceUpdate") {
                if (!preventRepeatUpdateAlert) {
                    preventRepeatUpdateAlert = true;
                    alertman_1.default(updateManager.forceUpdateText || updateManagerDefault.forceUpdateText, function () {
                        OfflinePluginRuntime.applyUpdate();
                        preventRepeatUpdateAlert = false;
                    });
                }
            }
            console.log("[fastman-sw]:onUpdateReady");
        },
        onUpdated: function () {
            console.log("[fastman-sw]:onUpdated");
            // 无感知的情况下自动刷新当前浏览器
            if (updateManager && (updateManager.type === "none" || updateManager.type === "quiet")) {
                // v2.7.1 去除页面刷新机制，部分安卓机会刷新2次的问题目前无法解决
                // location.reload();
            }
            // 否则则依赖app内的桥接帮助用户主动进行功能退出（强制性交互）
            if (isFromApp) { // 只有APP在特定策略下执行桥接后退指令
                if (updateManager && (updateManager.type === "default" || updateManager.type === "forceUpdate" || updateManager.type == undefined)) {
                    if (window["WebViewJavascriptBridge"]) {
                        loadingman_1.showLoading(); // 安卓端为异步，因此需要阻塞界面，防止后退过程中做其它UI操作
                        window["WebViewJavascriptBridge"].callHandler('back', {}, function (response) {
                        });
                    }
                }
            }
        },
        onUpdateFailed: function () {
            console.log("[fastman-sw]:onUpdateFailed");
        }
    });
}
var coreman_1 = require("fastman/coreman");
var annotationman_1 = require("fastman/annotationman");
// T - Model Type
// E - Effect Type
// M - Mutation Type
var Bootstrap = /** @class */ (function () {
    function Bootstrap() {
        this.rootId = "page-group";
        this.defaultMutations = this.configDefaultMutations();
        // this.defaultView = { defaultFastView };
        this.defaultView = {};
        this.defaultPlugins = [
            coreman_1.Router,
            // JsBridge,
            coreman_1.ModelState,
            coreman_1.ImportAction(annotationman_1.container),
            coreman_1.Container(annotationman_1.container),
            coreman_1.LoginFailureCompatible
        ];
        var impls = this.registerContainer();
        if (typeof impls === "object") {
            for (var key in impls) {
                annotationman_1.container.register(key, {
                    useClass: impls[key]
                });
            }
        }
    }
    /**
     * 设置接口对应的具体实现类
     */
    Bootstrap.prototype.registerContainer = function () {
        return {};
    };
    Bootstrap.prototype.configDefaultMutations = function () {
        return {
            updateModel: function (model, data, actions, error) { return data; }
        };
    };
    /**
     * 设置额外的mutations函数
     */
    Bootstrap.prototype.setMutations = function () {
        return this.mutations;
    };
    /**
     * 设置views
     */
    Bootstrap.prototype.setViews = function () {
        return {};
    };
    /**
     * 设置readies函数
     */
    Bootstrap.prototype.setRedies = function () {
        return [];
    };
    Bootstrap.prototype.setHooks = function () {
        return {};
    };
    Bootstrap.prototype.start = function (mutations) {
        this.mutations = mutations;
        // 首先检查当前组件是否是类组件
        var instanceOfBaseView = function (props) {
            return props["viewFrom"] === "FastmanBaseView";
        };
        var _views = this.setViews();
        // _views = Object.getOwnPropertyNames(_views).length > 0 ? _views : {
        //   "/": this.defaultView.defaultFastView
        // };
        Object.keys(_views).forEach(function (key) {
            try {
                var cInstance = new _views[key]();
                if (instanceOfBaseView(cInstance)) {
                    _views[key] = cInstance["render"];
                }
                else {
                    console.error("fastman viewComponent must extends BaseView.");
                }
            }
            catch (e) {
                console.warn("this component maybe SFC, not class component.");
            }
        });
        coreman_1.app({
            model: this.setModel(),
            mutations: Object.assign({}, this.setMutations(), this.defaultMutations),
            // view: Object.assign(
            //   {},
            //   {
            //     "/": this.defaultView.defaultFastView
            //   },
            //   // this.setViews()
            //   _views
            // ),
            view: _views,
            readies: this.setRedies(),
            hooks: this.setHooks(),
            root: document.getElementById(this.rootId),
            plugins: this.defaultPlugins
        });
    };
    /**
     * 使用插件
     * @param plugin 插件
     */
    Bootstrap.prototype.use = function (plugin) {
        if (this.defaultPlugins.indexOf(plugin) === -1) {
            this.defaultPlugins.push(plugin);
        }
        return this;
    };
    __decorate([
        annotationman_1.bind
    ], Bootstrap.prototype, "start", null);
    return Bootstrap;
}());
exports.Bootstrap = Bootstrap;
