"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Label_1 = __importDefault(require("./Label"));
const TextArea_1 = __importDefault(require("./TextArea"));
const Input = (props) => {
    return react_1.default.createElement("input", Object.assign({}, props));
};
Input.Label = Label_1.default;
Input.TextArea = TextArea_1.default;
exports.default = Input;
