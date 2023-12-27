import React from 'react';
type Props = {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    title?: React.ReactNode;
    closeIcon?: boolean | React.ReactNode;
    okButton?: React.ButtonHTMLAttributes<HTMLButtonElement>;
    cancelButton?: React.ButtonHTMLAttributes<HTMLButtonElement>;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export default function Content({ className, title, children, cancelButton, okButton, closeIcon, ...props }: Props): React.JSX.Element;
export {};
