/// <reference path="fast.d.ts" />
import { NestedReadonly } from "../types";
import { View } from "../view";
declare namespace JSX {
    interface IIntrinsicElements {
        [elemName: string]: any;
    }
}
declare type eventEmitterCb = <T>(options: {
    eventName: string;
    callback: (e: Partial<T>) => void;
}) => void;
declare type requestType = {
    type: string;
    payload: {
        [key: string]: any;
    };
    error: boolean;
    info: string;
};
export interface IEffect<T> {
}
export interface IMutation<T> {
    updateModel: (data: Partial<T>) => void;
    $updateModel: (data: Partial<T>) => void;
}
export interface IAction<T> {
    router: {
        go: (viewName: string) => void;
        back: () => void;
        block: (callback: () => void) => void;
        destoryBlock: () => void;
        needBlock: (options: {
            routerKey: string;
            createHrefProxyMethod: any;
        }) => void;
    };
    model: {
        setState: (state: Partial<T>) => void;
        setObjectState: (state: Partial<T>) => void;
    };
    saveSessionState: () => void;
    historyStack: {
        destory: () => void;
    };
    eventEmitter: {
        emit: <T>(options: {
            eventName: string;
        } & T) => void;
        on: eventEmitterCb;
        once: eventEmitterCb;
    };
    preload: {
        startLoading: (options: {
            manifest: Array<{
                id: string;
                src: string;
            }>;
            complete: () => void;
            error: () => void;
        }) => void;
    };
    container: {
        modify: (injectKey: {
            [key: string]: any;
        }) => any;
    };
    jsbridge: {
        back: (options?: {
            step: number;
        }) => void;
        refresh: () => void;
        go: (options: {
            title?: string;
            uri: string;
            locktype?: 0 | 1 | 2;
            hideNavigationBar?: "0" | "1";
        }) => void;
        dynamicLink: (options: {
            url: string;
        }) => void;
        push: (options: {
            title?: string;
            uri: string;
            locktype?: 0 | 1 | 2;
        }) => void;
        willAppear: (callback: () => void) => void;
        willAppear2: (callback: () => void) => void;
        navigationBar: (options: {
            title: string;
            type?: number;
            rightButtonTitle?: string;
            onRightButtonPress?: () => void;
            rightButtonIcon?: string;
            isShowBackButton?: boolean;
        }) => void;
        notify: <T>(options: {
            type: string;
        } & T) => void;
        subscribe: (options: {
            type: string;
            callback: (data: requestType) => void;
        }) => void;
        request: (options: {
            type: string;
            payload?: {
                [key: string]: any;
            };
            success?: (response: any) => void;
            error?: (err: any) => void;
        }) => void;
    };
}
export interface IBaseModelType<T> {
    previous: T;
    historyStack: {
        step: number;
    };
    jsbridge: {
        isFromWeiXin: boolean;
        isFromApp: boolean;
    };
    preload: {
        results: string[];
    };
}
export interface IMutationType<T, M = {}> {
    (model: NestedReadonly<T> & NestedReadonly<IBaseModelType<T>>, data: any, actions: IMutation<T> & M, error: any): T;
}
export interface IReadiesType<T, E = {}, M = {}> {
    (model: NestedReadonly<T> & NestedReadonly<IBaseModelType<T>>, actions: IAction<T> & IEffect<T> & IMutation<T> & E & M, error: any): void;
}
export interface IHooksType<T, E = {}, M = {}> {
    onAction?: (actions: IAction<T> & IEffect<T> & IMutation<T> & E & M, data: any) => void;
    onUpdate?: (oldModel: NestedReadonly<T> & NestedReadonly<IBaseModelType<T>>, newModel: NestedReadonly<T> & NestedReadonly<IBaseModelType<T>>, data: any) => void;
    onRender?: (model: NestedReadonly<T> & NestedReadonly<IBaseModelType<T>>, view: JSX.IIntrinsicElements[] | JSX.IIntrinsicElements) => void;
    onError?: (error: any) => void;
    onPageInit?: (e: any, pageId: string, $page: any, actions: IAction<T> & IEffect<T> & IMutation<T> & E & M, model: NestedReadonly<T> & NestedReadonly<IBaseModelType<T>>) => void;
    onPageWillDisappear?: (e: any, pageId: string, $page: any, actions: IAction<T> & IEffect<T> & IMutation<T> & E & M, model: NestedReadonly<T> & NestedReadonly<IBaseModelType<T>>) => void;
    onPageWillAppear?: (e: any, pageId: string, $page: any, actions: IAction<T> & IEffect<T> & IMutation<T> & E & M, model: NestedReadonly<T> & NestedReadonly<IBaseModelType<T>>) => void;
    onPageDidAppear?: (e: any, pageId: string, $page: any, actions: IAction<T> & IEffect<T> & IMutation<T> & E & M, model: NestedReadonly<T> & NestedReadonly<IBaseModelType<T>>) => void;
}
declare type Constructor<T> = new (...args: any[]) => T;
export declare abstract class Bootstrap<T, E = {}, M = {}> {
    protected rootId: string;
    /**
     * 配置默认的Mutations
     */
    private readonly defaultMutations;
    /**
     * 配置默认的view
     */
    private readonly defaultView;
    /**
     * 由上层传输过来的注入mutations
     */
    private mutations;
    /**
     * 默认插件列表
     */
    private readonly defaultPlugins;
    constructor();
    /**
     * 设置接口对应的具体实现类
     */
    protected registerContainer(): {
        [key: string]: new () => void;
    };
    private configDefaultMutations;
    /**
     * 定义数据状态模型类型
     * 注：这里并不返回交叉类型
     */
    protected abstract setModel(): Readonly<T>;
    /**
     * 设置额外的mutations函数
     */
    protected setMutations(): {
        [key: string]: IMutationType<T, M>;
    };
    /**
     * 设置views
     */
    protected setViews(): {
        [key: string]: (JSX.IIntrinsicElements[] | JSX.IIntrinsicElements) & Constructor<View>;
    };
    /**
     * 设置readies函数
     */
    protected setRedies(): IReadiesType<T, E, M>[];
    protected setHooks(): IHooksType<T, E, M>;
    start(mutations: {
        [key: string]: IMutationType<T, M>;
    }): void;
    /**
     * 使用插件
     * @param plugin 插件
     */
    use(plugin: any): this;
}
export {};
