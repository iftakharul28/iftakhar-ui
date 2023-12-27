import React from 'react';
type MenuItemProps = {
    icon?: React.ReactNode;
    active?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    firstchild?: number;
    popperarrow?: number;
} & React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
export declare const MenuItem: React.FC<MenuItemProps>;
export {};
