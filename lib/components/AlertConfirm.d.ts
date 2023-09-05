import { AlertOptions, ConfirmOptions, ModalProps } from '../model/alertConfirm';
import React from 'react';
export declare const Modal: React.FC<ModalProps>;
declare const AlertConfirm: () => {
    confirm: (options: ConfirmOptions) => Promise<boolean>;
    alert: (options: AlertOptions) => void;
};
export default AlertConfirm;
