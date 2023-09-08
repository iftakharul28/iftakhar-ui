import React from 'react';
type LabelProps = {
    className?: string;
    htmlFor?: string | undefined;
    children?: string | undefined;
};
type TextAreaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare const Input: {
    (props: InputProps): React.JSX.Element;
    Label: (props: LabelProps) => React.JSX.Element;
    TextArea: (props: TextAreaProps) => React.JSX.Element;
};
export declare const Label: (props: LabelProps) => React.JSX.Element;
export declare const TextArea: (props: TextAreaProps) => React.JSX.Element;
export {};
