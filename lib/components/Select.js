"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Select(props) {
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        const selectedOption = (props === null || props === void 0 ? void 0 : props.options.find((option) => option.value === selectedValue)) || null;
        props === null || props === void 0 ? void 0 : props.onChange(selectedOption ? selectedOption.value : null);
    };
    return (react_1.default.createElement("select", { value: (props === null || props === void 0 ? void 0 : props.value) || '', onChange: handleChange },
        react_1.default.createElement("option", { value: '' }, "Select an option"), props === null || props === void 0 ? void 0 :
        props.options.map((option) => (react_1.default.createElement("option", { key: option.value, value: option.value }, option.label)))));
}
exports.default = Select;
