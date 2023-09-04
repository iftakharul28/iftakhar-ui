import React from 'react';
type TooltipTriggerProps = {
    asChild?: boolean;
    children: React.ReactNode;
    className?: string;
};
type TooltipPortalProps = {
    children: React.ReactNode;
};
type TooltipProviderProps = {
    children: React.ReactNode;
};
type TooltipContentProps = {
    children: React.ReactNode;
    sideOffset: number;
};
declare const TooltipProvider: {
    ({ children }: TooltipProviderProps): React.JSX.Element;
    TooltipTrigger: React.FC<TooltipTriggerProps>;
    TooltipPortal: React.FC<TooltipPortalProps>;
    TooltipContent: React.FC<TooltipContentProps>;
};
export declare const TooltipTrigger: React.FC<TooltipTriggerProps>;
export declare const TooltipPortal: React.FC<TooltipPortalProps>;
export declare const TooltipContent: React.FC<TooltipContentProps>;
export default TooltipProvider;
