import React from 'react';
type link = {
    type: 'link';
    href: string;
    className?: string;
    children: React.ReactNode;
};
type button = {
    type: 'button' | 'submit' | 'reset';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const Button: (props: button | link) => React.JSX.Element;
export default Button;
