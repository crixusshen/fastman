// Type definitions for passguardman.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
export default passGuard;

/**
 * 创建一个密码控件组件
 * @param options 具体请查看文档
 */
declare function passGuard(options: {
  id?: string,
  keyboardType?: number,
  inputMaxLength?: number,
  mixPromise?: ()=>Promise<any>,
  onShow?: ()=>void,
  onHide?: ()=>void,
  onPressing?: ()=>void,
  onPressed?: ()=>void,
  onFocus?: ()=>void,
  onSubmit?: (input)=>void
}): passGuard.passGuardReturnType;

/**
 * 定义passGuard实例函数
 */
declare namespace passGuard {
  export interface passGuardReturnType{
    /**
     * 输出密码输入项内容
     */
    getOutput();

    /**
     * 获取密码长度
     */ 
    getLength();

    /**
     * 清除密码
     */
    clearPass();
  }
}
