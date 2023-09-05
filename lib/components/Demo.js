"use strict";
// type OptionProps<T> = {
//   value: T;
//   children: React.ReactNode;
// };
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = exports.Select = void 0;
// type SelectProps<T> = {
//   children: React.ReactElement<OptionProps<T>>[];
//   value?: T | null;
//   onChange: (selectedValue: T | null) => void;
// };
// const Select = <T extends string | number>(props: SelectProps<T>) => {
//   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedValue = event.target.value as T | null;
//     props.onChange(selectedValue);
//   };
//   return (
//     <select value={props.value ? props.value : ''} onChange={handleChange}>
//       {props.children}
//     </select>
//   );
// };
// export const Option = <T extends string | number>({ value, children }: OptionProps<T>) => {
//   return <option value={value}>{children}</option>;
// };
// export const Default = <T extends string | number>({ children }: OptionProps<T>) => {
//   return <option value=''>{children}</option>;
// };
// Select.Option = Option;
// Select.Default = Default;
// export default Select;
const react_1 = __importStar(require("react"));
const Select = ({ children, value, onChange, showSearch, onSearch, filterOption, }) => {
    const [searchText, setSearchText] = (0, react_1.useState)('');
    const [filteredOptions, setFilteredOptions] = (0, react_1.useState)(react_1.default.Children.toArray(children));
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
    };
    const handleSearch = (event) => {
        const newSearchText = event.target.value;
        setSearchText(newSearchText);
        if (showSearch && onSearch) {
            onSearch(newSearchText);
            if (filterOption) {
                const newFilteredOptions = react_1.default.Children.toArray(children).filter((child) => {
                    return child.props.children.toLowerCase().includes(newSearchText.toLowerCase());
                });
                setFilteredOptions(newFilteredOptions);
            }
        }
    };
    const optionsToRender = filterOption ? filteredOptions : children;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("select", { value: value || '', onChange: handleChange }, optionsToRender),
        showSearch && react_1.default.createElement("input", { type: 'text', value: searchText, onChange: handleSearch })));
};
exports.Select = Select;
const Option = ({ value, children }) => (react_1.default.createElement("option", { value: value }, children));
exports.Option = Option;
exports.Select.Option = exports.Option;
exports.default = exports.Select;
