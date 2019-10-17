// Type definitions for fileuploadman.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/**
 * 图片上传
 * @param file 通过input:file得到的文件，或者直接传入的图片路径
 * @param options 具体请查看文档
 */
export function upload(
  file: File,
  options?: {
    width?: number,
    height?: number,
    quality?: number,
    fieldName?: string
  }
): Promise<any>;
