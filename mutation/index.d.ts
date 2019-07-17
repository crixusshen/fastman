import { IBaseModelType, IAction } from '../bootstrap';
export declare type Mutation<T> = (model: T & IBaseModelType<T>, data: any, actions: IAction<T>, error: any) => T;
export { IBaseModelType as IBaseModel, IAction };
