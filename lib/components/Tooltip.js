"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipContent = exports.TooltipPortal = exports.TooltipTrigger = void 0;
const react_1 = __importDefault(require("react"));
// type TooltipArrowProps = {
//   className?: string;
// };
const TooltipContext = react_1.default.createContext(undefined);
const TooltipProvider = ({ children }) => {
    const [isVisible, setIsVisible] = react_1.default.useState(false);
    const showTooltip = () => {
        setIsVisible(true);
    };
    const hideTooltip = () => {
        setIsVisible(false);
    };
    return react_1.default.createElement(TooltipContext.Provider, { value: { isVisible, showTooltip, hideTooltip } }, children);
};
const TooltipTrigger = ({ asChild, children, className }) => {
    const { showTooltip, hideTooltip } = react_1.default.useContext(TooltipContext);
    const handleMouseEnter = () => {
        if (asChild) {
            showTooltip();
        }
    };
    const handleMouseLeave = () => {
        if (asChild) {
            hideTooltip();
        }
    };
    return (react_1.default.createElement("div", { className: className, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }, children));
};
exports.TooltipTrigger = TooltipTrigger;
const TooltipPortal = ({ children }) => {
    const { isVisible } = react_1.default.useContext(TooltipContext);
    if (isVisible) {
        return react_1.default.createElement("div", { className: 'TooltipPortal' }, children);
    }
    return null;
};
exports.TooltipPortal = TooltipPortal;
const TooltipContent = ({ children, sideOffset }) => {
    return (react_1.default.createElement("div", { className: 'TooltipContent', style: { marginLeft: sideOffset } }, children));
};
exports.TooltipContent = TooltipContent;
TooltipProvider.TooltipTrigger = exports.TooltipTrigger;
TooltipProvider.TooltipPortal = exports.TooltipPortal;
TooltipProvider.TooltipContent = exports.TooltipContent;
exports.default = TooltipProvider;
