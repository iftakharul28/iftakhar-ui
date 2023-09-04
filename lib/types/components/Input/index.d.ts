import React from 'react';
type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare const Input: {
    (props: Props): React.JSX.Element;
    Label: (props: {
        className?: string | undefined;
        htmlFor?: string | undefined;
        children?: string | undefined;
    }) => React.JSX.Element;
    TextArea: (props: {
        label?: {
            for: string;
            name: string;
        } | undefined;
    } & React.ClassAttributes<HTMLTextAreaElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => React.JSX.Element;
};
export default Input;
