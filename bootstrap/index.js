"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: shenzhiwei
 * @Date: 2019-07-06 14:11:25
 * @Description: 基础启动程序
 */
/// <reference path="../../libs/bootstrap/fast.d.ts" />
var OfflinePluginRuntime = require("offline-plugin/runtime");
OfflinePluginRuntime.install({
    onInstalled: function () {
        console.log("[sw]:onInstalled");
    },
    onUpdating: function () {
        console.log("[sw]:onUpdating");
    },
    onUpdateReady: function () {
        OfflinePluginRuntime.applyUpdate();
        console.log("[sw]:onUpdateReady");
    },
    onUpdated: function () {
        console.log("[sw]:onUpdated");
        location.reload();
    }
});
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
            coreman_1.Container(annotationman_1.container)
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
