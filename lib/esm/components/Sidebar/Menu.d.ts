import React from 'react';
type IconShape = 'square' | 'round' | 'circle';
type MenuProps = React.HTMLAttributes<HTMLElement> & {
    className?: string;
    children?: React.ReactNode;
    iconShape?: IconShape;
    popperArrow?: boolean;
    subMenuBullets?: boolean;
    innerSubMenuArrows?: boolean;
    ref?: React.RefObject<HTMLDivElement>;
};
export declare const Menu: React.FC<MenuProps>;
export {};
