import React from 'react';
type Props = {
    label?: {
        for: string;
        name: string;
    };
} & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
declare const Input: (props: Props) => React.JSX.Element;
export default Input;
