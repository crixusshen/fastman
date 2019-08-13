import { IBaseModelType, IAction, IMutation } from '../bootstrap';
import { NestedReadonly } from "../types";
export declare type Mutation<T, M = {}, D = T> = (model: NestedReadonly<T> & NestedReadonly<IBaseModelType<T>>, data: D, actions: IMutation<T> & M, error: any) => NestedReadonly<T>;
declare class MutationService<T, M = {}> {
    constructor();
    select(): IAction<T> & IMutation<T> & M;
}
export { IBaseModelType as IBaseModel, IAction, MutationService, };
