import { IBaseModelType, IAction, IEffect, IMutation } from '../bootstrap';
import { NestedReadonly } from "../types";
export declare abstract class View {
    protected viewFrom: string;
    constructor();
}
export interface IView<T, E = {}, M = {}> {
    render(model: NestedReadonly<T> & NestedReadonly<IBaseModelType<T>>, actions: IAction<T> & IEffect<T> & IMutation<T> & E & M): any;
}
export interface IProps<T, E = {}, M = {}> {
    model?: NestedReadonly<T>;
    actions?: IAction<T> & IEffect<T> & IMutation<T> & E & M;
}
