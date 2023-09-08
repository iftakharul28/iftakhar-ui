import React, { Children, isValidElement, useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
    switch (props.type) {
        case 'link':
            return (React.createElement("a", { className: props.className, href: props.href }, props.children));
        default:
            return React.createElement("button", Object.assign({}, props), props.children);
    }
};

const Accordion = (props) => {
    return React.createElement("section", { className: props === null || props === void 0 ? void 0 : props.className }, props === null || props === void 0 ? void 0 : props.children);
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
Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

const Switch = (props) => {
    let matchChild = null;
    let defaultChild = null;
    Children.forEach(props.children, (child) => {
        if (!child)
            return;
        if (isValidElement(child)) {
            if (!matchChild && child.type === Case) {
                const { condition } = child.props;
                const conditionResult = Boolean(condition);
                if (conditionResult) {
                    matchChild = child;
                }
            }
            else if (!defaultChild && child.type === Default) {
                defaultChild = child;
            }
        }
    });
    return matchChild || defaultChild || null;
};
const Case = (props) => {
    return props.condition ? props.children : null;
};
const Default = (props) => {
    return props.children;
};
Switch.Case = Case;
Switch.Default = Default;

function RenderList(props) {
    return props.data.length ? props.data.map((item, i) => props.renderItem(item, i)) : null;
}

const CloseIcon = () => {
    return (React.createElement("svg", { viewBox: '64 64 896 896', focusable: 'false', "data-icon": 'close', width: '1em', height: '1em', fill: 'currentColor', "aria-hidden": 'true' },
        React.createElement("path", { d: 'M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z' })));
};

function condition(className) {
    let cls = '';
    if (typeof className === 'string' || typeof className === 'number') {
        cls += className;
    }
    else if (typeof className === 'object') {
        if (Array.isArray(className)) {
            for (const item of className) {
                if (item) {
                    const t = condition(item);
                    if (t) {
                        if (cls) {
                            cls += ' ';
                        }
                        cls += t;
                    }
                }
            }
        }
        else {
            for (const key in className) {
                if (className[key]) {
                    if (cls) {
                        cls += ' ';
                    }
                    cls += key;
                }
            }
        }
    }
    return cls;
}
const Clsx = (...args) => {
    let cls = '';
    for (const arg of args) {
        if (arg) {
            const clss = condition(arg);
            if (clss) {
                if (cls) {
                    cls += ' ';
                }
                cls += clss;
            }
        }
    }
    return cls;
};

// type ModalActionProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
let modalRoot = null;
const ModalComponents = (props) => {
    const { title, maskClosable = false, okButton, cancelButton, className, children } = props;
    return (React.createElement("div", { className: 'modal-wrapper' },
        React.createElement("div", { className: Clsx('modal-content', className ? className : '') },
            React.createElement(Button, { onClick: cancelButton === null || cancelButton === void 0 ? void 0 : cancelButton.onClick, type: 'button', className: 'modal-close-icon' }, props.closeIcon ? props.closeIcon : React.createElement(CloseIcon, null)),
            title ? React.createElement("div", { className: 'modal-header' }, title) : null,
            React.createElement("div", { className: 'modal-body' }, children),
            React.createElement("div", { className: 'modal-actions' },
                React.createElement(Button, { type: cancelButton === null || cancelButton === void 0 ? void 0 : cancelButton.type, className: Clsx('model-btn model-btn-default', cancelButton === null || cancelButton === void 0 ? void 0 : cancelButton.className), onClick: cancelButton === null || cancelButton === void 0 ? void 0 : cancelButton.onClick, disabled: cancelButton === null || cancelButton === void 0 ? void 0 : cancelButton.disabled }, cancelButton === null || cancelButton === void 0 ? void 0 : cancelButton.children),
                React.createElement(Button, { type: okButton === null || okButton === void 0 ? void 0 : okButton.type, className: Clsx('model-btn model-btn-primary', okButton === null || okButton === void 0 ? void 0 : okButton.className), onClick: okButton === null || okButton === void 0 ? void 0 : okButton.onClick, disabled: okButton === null || okButton === void 0 ? void 0 : okButton.disabled }, okButton === null || okButton === void 0 ? void 0 : okButton.children))),
        maskClosable ? React.createElement(Button, { onClick: cancelButton === null || cancelButton === void 0 ? void 0 : cancelButton.onClick, type: 'button', className: 'modal-mask' }) : React.createElement("div", { className: 'modal-mask' })));
};
const Modal = (props) => {
    if (typeof window === 'undefined')
        return;
    if (!modalRoot && props.visible) {
        modalRoot = document.createElement('div');
        document.body.appendChild(modalRoot);
    }
    return props.visible ? ReactDOM.createPortal(React.createElement(ModalComponents, Object.assign({}, props, { visible: props.visible })), modalRoot) : null;
};

function Select(props) {
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        const selectedOption = (props === null || props === void 0 ? void 0 : props.options.find((option) => option.value === selectedValue)) || null;
        props === null || props === void 0 ? void 0 : props.onChange(selectedOption ? selectedOption.value : null);
    };
    return (React.createElement("select", { value: (props === null || props === void 0 ? void 0 : props.value) || '', onChange: handleChange },
        React.createElement("option", { value: '' }, "Select an option"), props === null || props === void 0 ? void 0 :
        props.options.map((option) => (React.createElement("option", { key: option.value, value: option.value }, option.label)))));
}

const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState(props === null || props === void 0 ? void 0 : props.defaultValue);
    const handleTabClick = (value) => {
        setActiveTab(value);
    };
    const clonedChildren = React.Children.map(props === null || props === void 0 ? void 0 : props.children, (child) => {
        if (React.isValidElement(child)) {
            if (child.type === Trigger) {
                //@ts-ignore
                return React.cloneElement(child, { activeTab, onClick: handleTabClick });
            }
        }
        return child;
    });
    return React.createElement("section", { className: props === null || props === void 0 ? void 0 : props.className }, clonedChildren);
};
const List = (props) => (React.createElement("div", { className: props === null || props === void 0 ? void 0 : props.className, "aria-label": props === null || props === void 0 ? void 0 : props.ariaLabel }, props === null || props === void 0 ? void 0 : props.children));
const Trigger = (props) => (React.createElement(Button, { type: 'button', className: (props === null || props === void 0 ? void 0 : props.value) === (props === null || props === void 0 ? void 0 : props.activeTab) ? (props === null || props === void 0 ? void 0 : props.className) + ' ' + (props === null || props === void 0 ? void 0 : props.activeClass) : props === null || props === void 0 ? void 0 : props.className, onClick: () => props === null || props === void 0 ? void 0 : props.onClick(props === null || props === void 0 ? void 0 : props.value) }, props === null || props === void 0 ? void 0 : props.children));
const Content = (props) => (React.createElement("div", { className: props === null || props === void 0 ? void 0 : props.className, style: { display: (props === null || props === void 0 ? void 0 : props.value) === (props === null || props === void 0 ? void 0 : props.activeTab) ? 'block' : 'none' } }, props === null || props === void 0 ? void 0 : props.children));
Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Content = Content;

const TimelineItem = (props) => {
    return (React.createElement("div", { className: Clsx('timeline-item', `timeline-item-${props.position ? props.position : 'left'}`, props.className ? props.className : '') },
        props.label ? React.createElement("div", { className: 'timeline-item-label' }, props.label) : null,
        React.createElement("div", { className: 'timeline-item-tail' }),
        props.dot ? props.dot : React.createElement("div", { className: Clsx('timeline-item-head', `timeline-item-head-${props.color ? props.color : 'gray'}`) }),
        React.createElement("div", { className: 'timeline-item-content' }, props.children)));
};
const Timeline = (props) => React.createElement("div", { className: props === null || props === void 0 ? void 0 : props.className }, props === null || props === void 0 ? void 0 : props.children);
Timeline.Item = TimelineItem;

const Input = (props) => {
    return React.createElement("input", Object.assign({}, props));
};
const Label = (props) => {
    return (React.createElement("label", { htmlFor: props.htmlFor, className: props.className }, props.children));
};
const TextArea = (props) => {
    return React.createElement("textarea", Object.assign({}, props));
};
Input.Label = Label;
Input.TextArea = TextArea;

function TableWrapper(props) {
    const { showHeader = true } = props;
    return (React.createElement(React.Fragment, null, props === null || props === void 0 ? void 0 :
        props.title,
        props.dataSource.length ? (React.createElement("table", { className: props.className },
            showHeader ? (React.createElement("thead", null,
                React.createElement("tr", null, props.columns.map((column, i) => (React.createElement("th", { key: `columnId-${i}` }, column.title)))))) : null,
            React.createElement("tbody", null, props.dataSource.map((row, rowIndex) => (React.createElement("tr", { key: `rowId-${rowIndex}` }, props.columns.map((column, colIndex) => (React.createElement("td", { key: colIndex, className: column.className, width: column.width, colSpan: column.colSpan }, column.render(row, rowIndex)))))))))) : null));
}
const Table = TableWrapper;

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
const Error = (props) => {
    React.createElement("div", { className: 'toast-container', style: { left: 0 } },
        React.createElement("div", { className: 'toast-content' },
            React.createElement("div", { className: 'toast-title' }, props.msg),
            props.description ? React.createElement("div", { className: 'toast-description' }, props.description) : null,
            React.createElement(Button, { className: 'toast-button', type: 'button' }, "Undo")));
};
const Toast = {
    success: Success,
    error: Error,
};

const TooltipContext = React.createContext(undefined);
const TooltipProvider = ({ children }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const showTooltip = () => {
        setIsVisible(true);
    };
    const hideTooltip = () => {
        setIsVisible(false);
    };
    return React.createElement(TooltipContext.Provider, { value: { isVisible, showTooltip, hideTooltip } }, children);
};
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
TooltipProvider.TooltipTrigger = TooltipTrigger;
TooltipProvider.TooltipPortal = TooltipPortal;
TooltipProvider.TooltipContent = TooltipContent;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button, Case, Clsx, Content, Default, Error, Input, Label, List, Modal, RenderList, Select, Success, Switch, Table, Tabs, TextArea, Timeline, TimelineItem, Toast, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger, Trigger };
//# sourceMappingURL=index.js.map
