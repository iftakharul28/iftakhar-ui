"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = exports.Trigger = exports.List = void 0;
const react_1 = __importStar(require("react"));
const Button_1 = __importDefault(require("./Button"));
const Tabs = (props) => {
    const [activeTab, setActiveTab] = (0, react_1.useState)(props === null || props === void 0 ? void 0 : props.defaultValue);
    const handleTabClick = (value) => {
        setActiveTab(value);
    };
    const clonedChildren = react_1.default.Children.map(props === null || props === void 0 ? void 0 : props.children, (child) => {
        if (react_1.default.isValidElement(child)) {
            if (child.type === exports.Trigger) {
                //@ts-ignore
                return react_1.default.cloneElement(child, { activeTab, onClick: handleTabClick });
            }
        }
        return child;
    });
    return react_1.default.createElement("section", { className: props === null || props === void 0 ? void 0 : props.className }, clonedChildren);
};
const List = (props) => (react_1.default.createElement("div", { className: props === null || props === void 0 ? void 0 : props.className, "aria-label": props === null || props === void 0 ? void 0 : props.ariaLabel }, props === null || props === void 0 ? void 0 : props.children));
exports.List = List;
const Trigger = (props) => (react_1.default.createElement(Button_1.default, { type: 'button', className: (props === null || props === void 0 ? void 0 : props.value) === (props === null || props === void 0 ? void 0 : props.activeTab) ? (props === null || props === void 0 ? void 0 : props.className) + ' ' + (props === null || props === void 0 ? void 0 : props.activeClass) : props === null || props === void 0 ? void 0 : props.className, onClick: () => props === null || props === void 0 ? void 0 : props.onClick(props === null || props === void 0 ? void 0 : props.value) }, props === null || props === void 0 ? void 0 : props.children));
exports.Trigger = Trigger;
const Content = (props) => (react_1.default.createElement("div", { className: props === null || props === void 0 ? void 0 : props.className, style: { display: (props === null || props === void 0 ? void 0 : props.value) === (props === null || props === void 0 ? void 0 : props.activeTab) ? 'block' : 'none' } }, props === null || props === void 0 ? void 0 : props.children));
exports.Content = Content;
Tabs.List = exports.List;
Tabs.Trigger = exports.Trigger;
Tabs.Content = exports.Content;
exports.default = Tabs;
