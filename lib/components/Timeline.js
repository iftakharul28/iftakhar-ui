"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TimelineItem = (props) => {
    return (react_1.default.createElement("div", { className: props.className },
        react_1.default.createElement("div", { className: `w-8 h-8 border border-${props.color} rounded-full p-2 ${props.color === 'success' ? 'bg-success' : ''}` }, props.dot),
        react_1.default.createElement("div", { className: 'TimelineItemContent' },
            react_1.default.createElement("p", { className: 'font-semibold' }, `${props.fromSubBranch} - ${props.status}`),
            react_1.default.createElement("span", { className: 'font-semibold' }, props.statusDate)),
        props.children));
};
const Timeline = (props) => react_1.default.createElement("div", { className: props === null || props === void 0 ? void 0 : props.className }, props === null || props === void 0 ? void 0 : props.children);
Timeline.Item = TimelineItem;
exports.default = Timeline;
