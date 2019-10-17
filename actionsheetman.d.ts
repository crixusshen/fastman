// Type definitions for actionsheetman.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/**
 * 打开一个actionsheet操作表组件
 * @param btns 具体options参数请查看文档
 */
export default function actionSheet(btns: Array<actionSheetItemsType>)

declare interface actionSheetItemType{
  text: string,
  label?: boolean,
  color?: string,
  bold?: boolean,
  close?: boolean,
  disabled?: boolean,
  onClick?: ()=>void
}

declare interface actionSheetItemsType extends Array<actionSheetItemType>{}
