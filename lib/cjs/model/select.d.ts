export interface OptionType<T> {
    label: T;
    value: T;
}
export interface Props<T> {
    options: OptionType<T>[];
    value: T | null;
    onChange: (selectedValue: T | null) => void;
}
