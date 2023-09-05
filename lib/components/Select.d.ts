import React from 'react';
type OptionType<T> = {
    label: T;
    value: T;
};
type Props<T> = {
    options: OptionType<T>[];
    value: T | null;
    onChange: (selectedValue: T | null) => void;
};
declare function Select<T>(props: Props<T>): React.JSX.Element;
export default Select;
