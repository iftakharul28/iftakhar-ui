export type Prettify<T> = {
    [k in keyof T]: T[k];
} & {};
export type OmitTitle<T> = Omit<T, 'title'>;
