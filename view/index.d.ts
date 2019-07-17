import { IBaseModelType, IAction } from '../bootstrap';
export declare abstract class View {
    protected viewFrom: string;
    constructor();
}
export interface IView<T> {
    render(model: T & IBaseModelType<T>, actions: IAction<T>): any;
}
export interface IProps<T> {
    model?: T;
    actions?: any;
}
