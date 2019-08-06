import { IBaseModelType, IAction, IMutation } from '../bootstrap';
export declare type Mutation<T, M = {}, D = T> = (model: T & IBaseModelType<T>, data: D, actions: IMutation<T> & M, error: any) => T;
declare class MutationService<T, M = {}> {
    constructor();
    select(): IAction<T> & IMutation<T> & M;
}
export { IBaseModelType as IBaseModel, IAction, MutationService, };
