// Type definitions for cascadepickerman.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/**
 * 打开一个级联选择器
 * @param selector 触发控件的选择器,支持类和ID选择器
 * @param options 具体options参数请查看文档
 */
export default function cascadePicker(selector: string, options: {
  data: Array<dataType>,
  cols?: Array<colsType>,
  toolbarTemplate?: string,
  value?: Array<string>,
  rotateEffect?: boolean,
  inputReadOnly?: boolean,
  cssClass?: string,
  onChange?: (Picker, value, displayValue) => void,
  onOpen?: (Picker) => void,
  onClose?: (Picker) => void,
  formatValue?: (Picker, value, displayValue) => void,
  updateValue?: boolean
});

declare interface colsType {
  values: Array<string>,
  textAlign?: string,
  displayValues?: Array<string>
}

declare interface dataType {
  name: string | number,
  value: string | number,
  sub?: Array<dataType>
}
