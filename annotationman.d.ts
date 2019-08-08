/*
 * @Author: shenzhiwei
 * @Date: 2019-07-18 11:23:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-08-08 14:46:06
 * @Description: 解决tsc编译不通过问题
 */
export const container;
export const bind;
/**
 * Decorator JsonProperty
 */
export declare function JsonProperty(args?: string | {
  name?: string;
  type: Function;
} | {
  name?: string;
  predicate: Function;
}): Function;
/**
* Decorator Serializable
*/
export declare function Serializable(baseClassName?: string): Function;
/**
* Function to deserialize json into a class
*/
export declare function deserialize<T>(json: any, type: new (...params: Array<any>) => T): T;
/**
* Function to serialize a class into json
*/
export declare function serialize(instance: any, removeUndefined?: boolean): any;
declare enum Type {
  Array = "array",
  Boolean = "boolean",
  Date = "date",
  Number = "number",
  String = "string"
}
export default Type;

/**
 * 注入接口的注入器
 * @param interfaceName 接口名
 */
export function inject(interfaceName: string);

export function injectable();

export function exportAction();

export function singleton();

export function action();
