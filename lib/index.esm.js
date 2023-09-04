import React from 'react';
import 'react-dom';

const Button = (props) => {
    switch (props.type) {
        case 'link':
            return (React.createElement("a", { className: props.className, href: props.href }, props.children));
        default:
            return React.createElement("button", Object.assign({}, props), props.children);
    }
};

const AccordionItem = (props) => {
    return (React.createElement("div", { className: props === null || props === void 0 ? void 0 : props.className, "aria-label": props === null || props === void 0 ? void 0 : props.value }, props === null || props === void 0 ? void 0 : props.children));
};
const AccordionTrigger = (props) => {
    return (React.createElement(Button, { className: props === null || props === void 0 ? void 0 : props.className, type: 'button', onClick: props === null || props === void 0 ? void 0 : props.onClick }, props === null || props === void 0 ? void 0 : props.children));
};
const AccordionContent = (props) => {
    return (props === null || props === void 0 ? void 0 : props.active) ? React.createElement("div", { className: props === null || props === void 0 ? void 0 : props.className }, props === null || props === void 0 ? void 0 : props.children) : null;
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const Modal = ({ show, onClose, onConfirm, options }) => {
    const { content, okText = 'OK', cancelText = 'Cancel', message } = options; // Updated this line
    if (!show)
        return null;
    const handleConfirm = () => {
        onClose();
        onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm();
    };
    return (React.createElement("div", { className: 'modal-overlay' },
        React.createElement("div", { className: 'modal' },
            React.createElement("div", { className: 'modal-content' },
                content && React.createElement("p", null, content),
                message && React.createElement("p", null, message)),
            React.createElement("div", { className: 'modal-actions' },
                content && React.createElement("button", { onClick: onClose }, cancelText),
                React.createElement("button", { onClick: handleConfirm }, okText)))));
};

const Case = (props) => {
    return props.condition ? props.children : null;
};
const Default = (props) => {
    return props.children;
};

const CloseIcon = () => {
    return (React.createElement("svg", { viewBox: '64 64 896 896', focusable: 'false', "data-icon": 'close', width: '1em', height: '1em', fill: 'currentColor', "aria-hidden": 'true' },
        React.createElement("path", { d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z' })));
};

const ModalComponents = (props) => {
    var _a;
    const { title, onCancel, onOk, className, confirmLoading, okButton, children } = props;
    return (React.createElement("div", { className: 'modal-wrapper' },
        React.createElement("div", { className: `modal-content ${className ? className : ''}` },
            React.createElement(Button, { onClick: onCancel, type: 'button', className: 'modal-close-icon' }, props.closeIcon ? props.closeIcon : React.createElement(CloseIcon, null)),
            title ? React.createElement("div", { className: 'modal-header' }, title) : null,
            React.createElement("div", { className: 'modal-body' }, children),
            React.createElement("div", { className: 'modal-actions' },
                React.createElement("button", { onClick: onCancel }, props.cancelText),
                React.createElement("button", { className: `text-secondary ${(_a = okButton === null || okButton === void 0 ? void 0 : okButton.className) !== null && _a !== void 0 ? _a : ''}`, onClick: onOk, disabled: confirmLoading }, props.okText))),
        React.createElement(Button, { onClick: onCancel, type: 'button', className: 'modal-mask' })));
};

const List = (props) => (React.createElement("div", { className: props === null || props === void 0 ? void 0 : props.className, "aria-label": props === null || props === void 0 ? void 0 : props.ariaLabel }, props === null || props === void 0 ? void 0 : props.children));
const Trigger = (props) => (React.createElement(Button, { type: 'button', className: (props === null || props === void 0 ? void 0 : props.value) === (props === null || props === void 0 ? void 0 : props.activeTab) ? (props === null || props === void 0 ? void 0 : props.className) + ' ' + (props === null || props === void 0 ? void 0 : props.activeClass) : props === null || props === void 0 ? void 0 : props.className, onClick: () => props === null || props === void 0 ? void 0 : props.onClick(props === null || props === void 0 ? void 0 : props.value) }, props === null || props === void 0 ? void 0 : props.children));
const Content = (props) => (React.createElement("div", { className: props === null || props === void 0 ? void 0 : props.className, style: { display: (props === null || props === void 0 ? void 0 : props.value) === (props === null || props === void 0 ? void 0 : props.activeTab) ? 'block' : 'none' } }, props === null || props === void 0 ? void 0 : props.children));

const Success = (props) => {
    //   const [showToast, setShowToast] = useState(false);
    //   useEffect(() => {
    //     if (props.msg) {
    //       setShowToast(true);
    //       // Automatically hide the toast after a certain time
    //       const timer = setTimeout(() => {
    //         setShowToast(false);
    //       }, 5000);
    //       return () => clearTimeout(timer);
    //     }
    //   }, [props.msg]);
    //   return showToast ? (
    //     <div className='toast-container' style={{ left: 0 }}>
    //       <div className='toast-content'>
    //         <div className='toast-title'>{props.msg}</div>
    //         {props.description ? <div className='toast-description'>{props.description}</div> : null}
    //         <Button className='toast-button' type='button'>
    //           Undo
    //         </Button>
    //       </div>
    //     </div>
    //   ) : null;
    return React.createElement("div", null, props.msg);
};
const Error$1 = (props) => {
    React.createElement("div", { className: 'toast-container', style: { left: 0 } },
        React.createElement("div", { className: 'toast-content' },
            React.createElement("div", { className: 'toast-title' }, props.msg),
            props.description ? React.createElement("div", { className: 'toast-description' }, props.description) : null,
            React.createElement(Button, { className: 'toast-button', type: 'button' }, "Undo")));
};

// type TooltipArrowProps = {
//   className?: string;
// };
const TooltipContext = React.createContext(undefined);
const TooltipTrigger = ({ asChild, children, className }) => {
    const { showTooltip, hideTooltip } = React.useContext(TooltipContext);
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
    return (React.createElement("div", { className: className, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }, children));
};
const TooltipPortal = ({ children }) => {
    const { isVisible } = React.useContext(TooltipContext);
    if (isVisible) {
        return React.createElement("div", { className: 'TooltipPortal' }, children);
    }
    return null;
};
const TooltipContent = ({ children, sideOffset }) => {
    return (React.createElement("div", { className: 'TooltipContent', style: { marginLeft: sideOffset } }, children));
};

export { AccordionContent, AccordionItem, AccordionTrigger, Case, Content, Default, Error$1 as Error, List, Modal, ModalComponents, Success, TooltipContent, TooltipPortal, TooltipTrigger, Trigger };
