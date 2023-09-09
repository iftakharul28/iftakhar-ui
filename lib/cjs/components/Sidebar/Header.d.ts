import React, { ReactNode, RefObject } from 'react';
type HeaderProps = {
    children: ReactNode;
    className?: string;
    ref?: RefObject<HTMLDivElement>;
};
export declare const Header: React.FC<HeaderProps>;
export {};
