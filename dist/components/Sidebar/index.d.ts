import React, { RefObject } from 'react';
interface ProSidebarProps {
    children: React.ReactNode;
    className?: string;
    width?: string;
    collapsedWidth?: string;
    collapsed?: boolean;
    rtl?: boolean;
    toggled?: boolean;
    bgImage?: string;
    breakPoint?: string;
    onToggle?: (toggled: boolean) => void;
    style?: React.CSSProperties;
    ref?: RefObject<HTMLDivElement>;
}
interface SidebarState {
    collapsed?: boolean;
    rtl?: boolean;
    toggled?: boolean;
}
export declare const SidebarContext: React.Context<SidebarState>;
export declare const Sidebar: {
    ({ children, className, width, collapsedWidth, collapsed, rtl, toggled, bgImage, breakPoint, onToggle, style, ref, ...rest }: ProSidebarProps): React.JSX.Element;
    Menu: React.FC<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> & {
        iconShape?: ("circle" | "round" | "square") | undefined;
        popperArrow?: boolean | undefined;
        subMenuBullets?: boolean | undefined;
        innerSubMenuArrows?: boolean | undefined;
    }>;
    MenuItem: React.FC<{
        icon?: React.ReactNode;
        active?: boolean | undefined;
        prefix?: React.ReactNode;
        suffix?: React.ReactNode;
        firstchild?: number | undefined;
        popperarrow?: number | undefined;
    } & React.ClassAttributes<HTMLLIElement> & React.LiHTMLAttributes<HTMLLIElement>>;
    SubMenu: React.FC<{
        children: React.ReactNode;
        className?: string | undefined;
        icon?: React.ReactNode;
        title?: string | undefined;
        defaultOpen?: boolean | undefined;
        open?: boolean | undefined;
        prefix?: React.ReactNode;
        suffix?: React.ReactNode;
        firstchild?: boolean | undefined;
        popperarrow?: boolean | undefined;
        onOpenChange?: ((isOpen: boolean) => void) | undefined;
        ref?: React.RefObject<HTMLLIElement> | undefined;
    }>;
    Content: React.FC<{
        children: React.ReactNode;
        className?: string | undefined;
        ref?: React.RefObject<HTMLDivElement> | undefined;
    }>;
    Header: React.FC<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>>;
    Footer: React.FC<React.ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement>>;
};
export {};
