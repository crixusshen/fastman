export declare type NestedReadonly<T> = {
    readonly [P in keyof T]: NestedReadonly<T[P]>;
};
