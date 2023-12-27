type Primitive = string | number;
type ObjectCondition = {
    [key: string]: boolean | undefined;
};
type classNames = Primitive | ObjectCondition | (Primitive | ObjectCondition)[] | undefined;
export declare const clsx: (...args: classNames[]) => string;
export {};
