type Primitive = string | number;
type ObjectCondition = {
    [key: string]: boolean | undefined;
};
type ClassNamesInput = Primitive | ObjectCondition | (Primitive | ObjectCondition)[] | undefined;
export declare const Clsx: (...args: ClassNamesInput[]) => string;
export {};
