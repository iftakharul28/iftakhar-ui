"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Input = (props) => {
    var _a, _b;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        props.label ? react_1.default.createElement("label", { htmlFor: (_a = props.label) === null || _a === void 0 ? void 0 : _a.for }, (_b = props.label) === null || _b === void 0 ? void 0 : _b.name) : null,
        react_1.default.createElement("textarea", { required: props.required, disabled: props.disabled, cols: props.cols, className: props.className, id: props.name, name: props.name, onChange: props.onChange, value: props.value, minLength: props.minLength, maxLength: props.maxLength, placeholder: props.placeholder })));
};
exports.default = Input;
