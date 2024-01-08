import React, { ReactNode, RefObject } from 'react';
type ContentProps = {
    children: ReactNode;
    className?: string;
    ref?: RefObject<HTMLDivElement>;
};
export declare const Content: React.FC<ContentProps>;
export {};
