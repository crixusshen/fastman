// Type definitions for formvalidateman.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/**
 * 开启表单验证
 * @param selector Form 表单元素对应的选择器，支持类和ID选择器
 * @param options 具体请查看文档
 */
export function validate(selector: string, options: {
  onKeyup?: boolean,
  firstInvalidFocus?: boolean,
  conditional?: {
    [key: string]: ()=>void
  },
  descriptions?: {
    [key: string]: {
      required?: string,
      conditional?: string,
      pattern?: string
    }
  },
  valid?: (e, options)=>void
});

/**
 * 该方法用来拓展一些输入域的验证,可实现一些复合关系非常复杂的验证规则
 * @param validateRule 具体请查看文档
 */
export function validateExtend(validateRule: {
  [key: string]: {
    required?: boolean,
    pattern?: RegExp,
    descriptions?: {
      required?: string,
      conditional?: string,
      pattern?: string
    },
    conditional?: {
      [key: string]: ()=>void
    }
  }
});
