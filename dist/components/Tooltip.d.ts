import React from 'react';
import { TooltipContentProps, TooltipPortalProps, TooltipProviderProps, TooltipTriggerProps } from '../model/tooltip';
export declare const TooltipProvider: {
    ({ children }: TooltipProviderProps): React.JSX.Element;
    TooltipTrigger: React.FC<TooltipTriggerProps>;
    TooltipPortal: React.FC<TooltipPortalProps>;
    TooltipContent: React.FC<TooltipContentProps>;
};
export declare const TooltipTrigger: React.FC<TooltipTriggerProps>;
export declare const TooltipPortal: React.FC<TooltipPortalProps>;
export declare const TooltipContent: React.FC<TooltipContentProps>;
