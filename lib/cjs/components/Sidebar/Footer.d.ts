import React, { ReactNode, RefObject } from 'react';
type FooterProps = {
    children: ReactNode;
    className?: string;
    ref?: RefObject<HTMLDivElement>;
};
export declare const Footer: React.FC<FooterProps>;
export {};
