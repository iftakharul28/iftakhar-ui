type Props = {
    defaultValue?: string;
    activeClass?: string;
    value: string;
    activeTab: string;
    icon?: React.ReactNode;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};
export type AccordionProps = Omit<Props, 'activeClass' | 'value' | 'activeTab' | 'setActiveTab' | 'icon'> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type AccordionItemProps = Omit<Props, 'defaultValue' | 'activeTab' | 'setActiveTab' | 'icon'> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type AccordionTriggerProps = Omit<Props, 'defaultValue' | 'activeTab' | 'setActiveTab'> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type AccordionContentProps = Omit<Props, 'defaultValue' | 'activeTab' | 'setActiveTab' | 'icon'> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type AccordionContextType = Omit<Props, 'defaultValue' | 'activeClass' | 'value' | 'icon'>;
export {};
