import { IBaseModelType, IAction, IMutation } from '../bootstrap';
export declare type Mutation<T> = (model: T & IBaseModelType<T>, data: any, actions: IMutation<T>, error: any) => T;
declare class MutationService<T, M = {}> {
    constructor();
    select(): IAction<T> & IMutation<T> & M;
}
export { IBaseModelType as IBaseModel, IAction, MutationService, };
