declare type NestedReadonly<T> = {
    readonly [P in keyof T]: NestedReadonly<T[P]>;
};
export declare class ModelService<T> {
    constructor();
    select(): NestedReadonly<T>;
}
export {};
