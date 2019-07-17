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
