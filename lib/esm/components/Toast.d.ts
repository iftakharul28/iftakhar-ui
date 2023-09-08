import React from 'react';
type Props = {
    msg: string;
    description?: string;
    direction: 'up' | 'down' | 'left' | 'right';
};
export declare const Success: (props: Props) => React.JSX.Element;
export declare const Error: (props: Props) => void;
export declare const Toast: {
    success: (props: Props) => React.JSX.Element;
    error: (props: Props) => void;
};
export {};
