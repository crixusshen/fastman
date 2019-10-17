// Type definitions for tipman.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/**
 * 打开一个工具提示框
 * @param options 具体options参数请查看文档
 */
export function tip(options: {
  content: string,
  stayTime?: number,
  // type?: string,
  extraclass?: string
}): ZeptoCollection;

/**
 * 关闭一个工具提示框
 * @param instance 一个zepto对象
 */
export function closeTip(instance: ZeptoCollection);
