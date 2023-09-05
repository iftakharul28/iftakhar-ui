"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Table(props) {
    return (react_1.default.createElement(react_1.default.Fragment, null, props.dataSource.length ? (react_1.default.createElement("table", { className: props.className },
        react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", null, props.columns.map((column, i) => (react_1.default.createElement("th", { key: `columnId-${i}` }, column.title))))),
        react_1.default.createElement("tbody", null, props.dataSource.map((row, rowIndex) => (react_1.default.createElement("tr", { key: `rowId-${rowIndex}` }, props.columns.map((column, colIndex) => (react_1.default.createElement("td", { key: colIndex, className: column.className, width: column.width, colSpan: column.colSpan }, column.render(row, rowIndex)))))))))) : null));
}
exports.default = Table;
