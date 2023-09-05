"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function RenderList(props) {
    return react_1.default.createElement(react_1.default.Fragment, null, props.data.length ? props.data.map((item, i) => props.renderItem(item, i)) : null);
}
exports.default = RenderList;
