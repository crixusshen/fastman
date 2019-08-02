import { IBaseModelType, IAction, IMutation } from '../bootstrap';
export declare type Mutation<T> = (model: T & IBaseModelType<T>, data: any, actions: IMutation<T>, error: any) => T;
declare class MutationService<T> {
    constructor();
    select(): IAction<T> & IMutation<T>;
}
export { IBaseModelType as IBaseModel, IAction, MutationService, };
