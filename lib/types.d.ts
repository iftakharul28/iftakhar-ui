import * as React$1 from 'react';
import React__default from 'react';

type Prettify<T> = {
    [k in keyof T]: T[k];
} & object;

interface Props$3 {
    children: React.ReactNode;
    className?: string;
}
interface AccordionItemProps extends Props$3 {
    value: string;
}
interface AccordionTriggerProps extends Props$3 {
    onClick: () => void;
}
interface AccordionContentProps extends Props$3 {
    active: boolean;
}

declare const AccordionItem: (props: Prettify<AccordionItemProps>) => React__default.JSX.Element;
declare const AccordionTrigger: (props: Prettify<AccordionTriggerProps>) => React__default.JSX.Element;
declare const AccordionContent: (props: Prettify<AccordionContentProps>) => React__default.JSX.Element | null;

interface ModalProps$1 {
    show: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    options: any;
}

declare const Modal: React__default.FC<ModalProps$1>;

type Props$2 = {
    children: React.ReactNode;
};
type CaseProps = {
    condition: boolean;
    children: React.ReactNode;
};
declare const Case: (props: CaseProps) => React$1.ReactNode;
declare const Default: (props: Props$2) => React$1.ReactNode;

type ModalProps = {
    visible: boolean;
    className?: string;
    title?: React__default.ReactNode;
    closeIcon?: boolean | React__default.ReactNode;
    children: React__default.ReactNode;
    cancelText: string;
    okText: string;
    onCancel: () => void;
    onOk: () => void;
    confirmLoading: boolean;
    okButton?: React__default.ButtonHTMLAttributes<HTMLButtonElement>;
};
declare const ModalComponents: (props: ModalProps) => React__default.JSX.Element;

type Props$1 = {
    children: React__default.ReactNode;
    className?: string;
};
interface TabsListProps extends Props$1 {
    ariaLabel: string;
}
interface TabsTriggerProps extends Props$1 {
    activeTab?: string;
    activeClass?: string;
    value: string;
    onClick: (value: string) => void;
}
interface TabsContentProps extends Props$1 {
    value: string;
    activeTab?: string;
}
declare const List: (props: Prettify<TabsListProps>) => React__default.JSX.Element;
declare const Trigger: (props: Prettify<TabsTriggerProps>) => React__default.JSX.Element;
declare const Content: (props: Prettify<TabsContentProps>) => React__default.JSX.Element;

type Props = {
    msg: string;
    description?: string;
    direction: 'up' | 'down' | 'left' | 'right';
};
declare const Success: (props: Props) => React__default.JSX.Element;
declare const Error: (props: Props) => void;

type TooltipTriggerProps = {
    asChild?: boolean;
    children: React__default.ReactNode;
    className?: string;
};
type TooltipPortalProps = {
    children: React__default.ReactNode;
};
type TooltipContentProps = {
    children: React__default.ReactNode;
    sideOffset: number;
};
declare const TooltipTrigger: React__default.FC<TooltipTriggerProps>;
declare const TooltipPortal: React__default.FC<TooltipPortalProps>;
declare const TooltipContent: React__default.FC<TooltipContentProps>;

export { AccordionContent, AccordionItem, AccordionTrigger, Case, Content, Default, Error, List, Modal, ModalComponents, Success, TooltipContent, TooltipPortal, TooltipTrigger, Trigger };
