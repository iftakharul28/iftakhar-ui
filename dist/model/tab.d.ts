type Props = {
    defaultValue?: string;
    activeClass?: string;
    value: string;
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};
export type TabsProps = Omit<Props, 'activeClass' | 'value' | 'activeTab' | 'setActiveTab'> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type TabsListProps = Omit<Props, 'defaultValue' | 'activeClass' | 'value' | 'activeTab' | 'setActiveTab'> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type TabsTriggerProps = Omit<Props, 'defaultValue' | 'activeTab' | 'setActiveTab'> & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export type TabsContentProps = Omit<Props, 'defaultValue' | 'activeClass' | 'activeTab' | 'setActiveTab'> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type TabsContextType = Omit<Props, 'defaultValue' | 'activeClass' | 'value'>;
export {};
