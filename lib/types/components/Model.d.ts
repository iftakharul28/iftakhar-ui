import React from 'react';
type ModalProps = {
    visible: boolean;
    className?: string;
    title?: React.ReactNode;
    closeIcon?: boolean | React.ReactNode;
    children: React.ReactNode;
    cancelText: string;
    okText: string;
    onCancel: () => void;
    onOk: () => void;
    confirmLoading: boolean;
    okButton?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};
export declare const ModalComponents: (props: ModalProps) => React.JSX.Element;
declare const Modal: (props: ModalProps) => React.ReactPortal | null | undefined;
export default Modal;
