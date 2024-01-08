import React, { ReactNode, RefObject } from 'react';
type SubMenuProps = {
    children: ReactNode;
    className?: string;
    icon?: ReactNode;
    title?: string;
    defaultOpen?: boolean;
    open?: boolean;
    prefix?: ReactNode;
    suffix?: ReactNode;
    firstchild?: boolean;
    popperarrow?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    ref?: RefObject<HTMLLIElement>;
};
export declare const SubMenu: React.FC<SubMenuProps>;
export {};
