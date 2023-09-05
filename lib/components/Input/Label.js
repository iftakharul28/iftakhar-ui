"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Label = (props) => {
    return (react_1.default.createElement("label", { htmlFor: props.htmlFor, className: props.className }, props.children));
};
exports.default = Label;
