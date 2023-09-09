import React, { ReactNode, RefObject } from 'react';
type MenuItemProps = {
    children: ReactNode;
    className?: string;
    icon?: ReactNode;
    active?: boolean;
    prefix?: ReactNode;
    suffix?: ReactNode;
    firstchild?: number;
    popperarrow?: number;
    ref?: RefObject<HTMLLIElement>;
};
export declare const MenuItem: React.FC<MenuItemProps>;
export {};
