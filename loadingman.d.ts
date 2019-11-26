// Type definitions for loadingman.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/**
 * 打开一个loading加载指示器
 */
export function showLoading(options?: {
  text: string,
  type?: "loading" | "success"
}): void;

/**
 * 关闭一个loading加载指示器
 */
export function hideLoading(): void;
