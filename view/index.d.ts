import { IBaseModelType, IAction, IEffect, IMutation } from '../bootstrap';
export declare abstract class View {
    protected viewFrom: string;
    constructor();
}
export interface IView<T> {
    render(model: T & IBaseModelType<T>, actions: IAction<T> & IEffect<T> & IMutation<T>): any;
}
export interface IProps<T> {
    model?: T;
    actions?: (IAction<T> & IEffect<T> & IMutation<T>) & {
        [key: string]: any;
    };
}
