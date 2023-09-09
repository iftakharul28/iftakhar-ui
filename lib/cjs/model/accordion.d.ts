export interface AccordionProps {
    children: React.ReactNode;
    className?: string;
    defaultValue?: string;
}
export interface AccordionItemProps extends AccordionProps {
    activeClass?: string;
    value: string;
}
export interface AccordionTriggerProps extends AccordionProps {
    value: string;
    activeClass?: string;
}
export interface AccordionContentProps extends AccordionProps {
    value: string;
    activeClass?: string;
}
export interface AccordionContextType {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
