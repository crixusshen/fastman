import { IBaseModelType, IAction, IEffect, IMutation } from '../bootstrap';
export declare abstract class View {
    protected viewFrom: string;
    constructor();
}
export interface IView<T, E = {}, M = {}> {
    render(model: T & IBaseModelType<T>, actions: IAction<T> & IEffect<T> & IMutation<T> & E & M): any;
}
export interface IProps<T, E = {}, M = {}> {
    model?: T;
    actions?: IAction<T> & IEffect<T> & IMutation<T> & E & M;
}
