// Type definitions for blankpageman.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/**
 * 创建一个空白页组件
 * @param options 具体请查看文档
 */
export function blankPage(options: {
  title?: string,
  icon?: string,
  buttonText?: string,
  button?: boolean,
  type?: string,
  font?: string,
  container?: string,
  fontScale?: number,
  iconScale?: number
}): blankPage.blankPageReturnType;

/**
 * 定义passGuard实例函数
 */
export namespace blankPage {
  export interface blankPageReturnType{
    on(eventName: string, callback: ()=>void);
  }
}
