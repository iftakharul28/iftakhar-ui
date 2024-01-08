import React from 'react';
type IconShape = 'square' | 'round' | 'circle';
type MenuProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
    iconShape?: IconShape;
    popperArrow?: boolean;
    subMenuBullets?: boolean;
    innerSubMenuArrows?: boolean;
};
export declare const Menu: React.FC<MenuProps>;
export {};
