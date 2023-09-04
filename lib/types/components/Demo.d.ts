import React from 'react';
interface OptionProps<T> {
    value: T;
    children: React.ReactNode;
}
interface SelectProps<T> {
    children: React.ReactNode;
    value: T | null;
    onChange: (value: T | null) => void;
    showSearch?: boolean;
    onSearch?: (searchText: string) => void;
    filterOption?: boolean;
}
export declare const Select: {
    <T extends string | number>({ children, value, onChange, showSearch, onSearch, filterOption, }: SelectProps<T>): React.JSX.Element;
    Option: <T_1 extends string | number>({ value, children }: OptionProps<T_1>) => React.JSX.Element;
};
export declare const Option: <T extends string | number>({ value, children }: OptionProps<T>) => React.JSX.Element;
export default Select;
