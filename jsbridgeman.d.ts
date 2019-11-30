// Type definitions for jsbridgeman.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/**
 * 建立桥接
 * @param callback 前端与客户端成功建立桥接模式后，会回调callback块函数
 */
export function ready(callback: () => void): void;

/**
 * 建立授权模式
 * @param callback 前端与客户端成功授权后，会回调callback块函数
 */
export function oauth(callback: () => void): void;

/**
 * 调用Request指令（通常作用在一些原生和客户端之间比较特殊的操作）
 * @param operationType 操作指令（见文档）
 * @param payloadOptions 消息体结构
 * @param okCallBack 成功处理回调
 * @param notOkCallBack 失败处理回调
 */
export function onRequest(operationType: string, payloadOptions: any, okCallBack: (res) => void, notOkCallBack: (res) => void): void;
