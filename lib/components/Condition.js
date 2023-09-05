"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = exports.Case = void 0;
const react_1 = require("react");
const Switch = (props) => {
    let matchChild = null;
    let defaultChild = null;
    react_1.Children.forEach(props.children, (child) => {
        if (!child)
            return;
        if ((0, react_1.isValidElement)(child)) {
            if (!matchChild && child.type === exports.Case) {
                const { condition } = child.props;
                const conditionResult = Boolean(condition);
                if (conditionResult) {
                    matchChild = child;
                }
            }
            else if (!defaultChild && child.type === exports.Default) {
                defaultChild = child;
            }
        }
    });
    return matchChild || defaultChild || null;
};
const Case = (props) => {
    return props.condition ? props.children : null;
};
exports.Case = Case;
const Default = (props) => {
    return props.children;
};
exports.Default = Default;
Switch.Case = exports.Case;
Switch.Default = exports.Default;
exports.default = Switch;
