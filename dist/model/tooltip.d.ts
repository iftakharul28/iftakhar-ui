export interface TooltipContextType {
    isVisible: boolean;
    showTooltip: () => void;
    hideTooltip: () => void;
}
export interface TooltipTriggerProps {
    asChild?: boolean;
    children: React.ReactNode;
    className?: string;
}
export interface TooltipPortalProps {
    children: React.ReactNode;
}
export interface TooltipProviderProps {
    children: React.ReactNode;
}
export interface TooltipContentProps {
    children: React.ReactNode;
    sideOffset: number;
}
