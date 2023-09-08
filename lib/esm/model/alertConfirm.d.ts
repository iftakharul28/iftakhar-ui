export interface ConfirmOptions {
    content: string;
    okText?: string;
    cancelText?: string;
}
export interface AlertOptions {
    message: string;
}
export interface ModalProps {
    show: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    options: any;
}
