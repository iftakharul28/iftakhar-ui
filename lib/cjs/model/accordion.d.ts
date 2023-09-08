export interface Props {
    children: React.ReactNode;
    className?: string;
}
export interface AccordionItemProps extends Props {
    value: string;
}
export interface AccordionTriggerProps extends Props {
    onClick: () => void;
}
export interface AccordionContentProps extends Props {
    active: boolean;
}
