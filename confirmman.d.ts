// Type definitions for confirmman.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/**
 * 表达式方式打开一个confirm确认框
 * @param text Confirm 文本
 * @param title Confirm modal 标题
 * @param onOkClick 在 Confirm modal下，当用户点击右下方“Ok”按钮时，回调函数将被执行
 * @param onCancelClick 在 Confirm modal下，当用户点击左下方“Cancel”按钮时，回调函数将被执行
 * @param okText 右下方“Ok”按钮文案
 * @param cancelText 左下方“Cancel”按钮文案
 */
export default function confirm(text : string, title ?: string, onOkClick ?: ()=>void, onCancelClick ?: ()=>void, okText ?: string, cancelText ?: string) : void;

/**
 * 表达式方式打开一个confirm确认框
 * @param text Confirm 文本
 * @param onOkClick 在 Confirm modal下，当用户点击右下方“Ok”按钮时，回调函数将被执行
 * @param onCancelClick 在 Confirm modal下，当用户点击左下方“Cancel”按钮时，回调函数将被执行
 * @param okText 右下方“Ok”按钮文案
 * @param cancelText 左下方“Cancel”按钮文案
 */
export default function confirm(text : string, onOkClick ?: ()=>void, onCancelClick ?: ()=>void, okText ?: string, cancelText ?: string) : void;

/**
 * 声明式方式打开一个confirm确认框
 * @param options 具体options参数请查看文档
 */
export default function confirm(options : {
  text: string,
  title?: string,
  onOkClick?: ()=>void,
  onCancelClick?: ()=>void,
  okText?: string,
  cancelText?: string
}) : void;
