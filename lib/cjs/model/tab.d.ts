type Props = {
    defaultValue?: string;
    ariaLabel: string;
    activeClass?: string;
    value: string;
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};
export type TabsProps = Omit<Props, 'ariaLabel' | 'activeClass' | 'value' | 'activeTab' | 'setActiveTab'> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type TabsListProps = Omit<Props, 'defaultValue' | 'activeClass' | 'value' | 'activeTab' | 'setActiveTab'> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type TabsTriggerProps = Omit<Props, 'defaultValue' | 'ariaLabel' | 'activeTab' | 'setActiveTab'> & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export type TabsContentProps = Omit<Props, 'defaultValue' | 'activeClass' | 'ariaLabel' | 'activeTab' | 'setActiveTab'> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type TabsContextType = Omit<Props, 'defaultValue' | 'activeClass' | 'ariaLabel' | 'value'>;
export {};
