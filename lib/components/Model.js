"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalComponents = void 0;
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const Button_1 = __importDefault(require("./Button"));
const CloseIcon_1 = __importDefault(require("./icons/CloseIcon"));
// type ModalActionProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
let modalRoot = null;
const ModalComponents = (props) => {
    var _a;
    const { title, onCancel, onOk, className, confirmLoading, okButton, children } = props;
    return (react_1.default.createElement("div", { className: 'modal-wrapper' },
        react_1.default.createElement("div", { className: `modal-content ${className ? className : ''}` },
            react_1.default.createElement(Button_1.default, { onClick: onCancel, type: 'button', className: 'modal-close-icon' }, props.closeIcon ? props.closeIcon : react_1.default.createElement(CloseIcon_1.default, null)),
            title ? react_1.default.createElement("div", { className: 'modal-header' }, title) : null,
            react_1.default.createElement("div", { className: 'modal-body' }, children),
            react_1.default.createElement("div", { className: 'modal-actions' },
                react_1.default.createElement("button", { onClick: onCancel }, props.cancelText),
                react_1.default.createElement("button", { className: `text-secondary ${(_a = okButton === null || okButton === void 0 ? void 0 : okButton.className) !== null && _a !== void 0 ? _a : ''}`, onClick: onOk, disabled: confirmLoading }, props.okText))),
        react_1.default.createElement(Button_1.default, { onClick: onCancel, type: 'button', className: 'modal-mask' })));
};
exports.ModalComponents = ModalComponents;
// const ModalAction = (props: ModalActionProps) => {
//   return (
//     <div className='modal-actions'>
//       <Button className={props.className} type='button' onClick={props?.onClick}>
//         {props?.children}
//       </Button>
//     </div>
//   );
// };
const Modal = (props) => {
    if (typeof window === 'undefined')
        return;
    if (!modalRoot && props.visible) {
        modalRoot = document.createElement('div');
        document.body.appendChild(modalRoot);
    }
    return props.visible ? react_dom_1.default.createPortal(react_1.default.createElement(exports.ModalComponents, Object.assign({}, props, { visible: props.visible })), modalRoot) : null;
};
exports.default = Modal;
