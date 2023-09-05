"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionContent = exports.AccordionTrigger = exports.AccordionItem = void 0;
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("./Button"));
const Accordion = (props) => {
    return react_1.default.createElement("section", { className: props === null || props === void 0 ? void 0 : props.className }, props === null || props === void 0 ? void 0 : props.children);
};
const AccordionItem = (props) => {
    return (react_1.default.createElement("div", { className: props === null || props === void 0 ? void 0 : props.className, "aria-label": props === null || props === void 0 ? void 0 : props.value }, props === null || props === void 0 ? void 0 : props.children));
};
exports.AccordionItem = AccordionItem;
const AccordionTrigger = (props) => {
    return (react_1.default.createElement(Button_1.default, { className: props === null || props === void 0 ? void 0 : props.className, type: 'button', onClick: props === null || props === void 0 ? void 0 : props.onClick }, props === null || props === void 0 ? void 0 : props.children));
};
exports.AccordionTrigger = AccordionTrigger;
const AccordionContent = (props) => {
    return (props === null || props === void 0 ? void 0 : props.active) ? react_1.default.createElement("div", { className: props === null || props === void 0 ? void 0 : props.className }, props === null || props === void 0 ? void 0 : props.children) : null;
};
exports.AccordionContent = AccordionContent;
Accordion.Item = exports.AccordionItem;
Accordion.Trigger = exports.AccordionTrigger;
Accordion.Content = exports.AccordionContent;
exports.default = Accordion;
