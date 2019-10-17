// Type definitions for pickerman.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/**
 * 开启一个Picker多列选择器
 * @param selector 触发控件的选择器,支持类和ID选择器,例如#singleSelect
 * @param options 具体options参数请查看文档
 */
export default function picker(selector: string, options: {
  cols: Array<colsType>,
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
