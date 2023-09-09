export interface Props {
    children: React.ReactNode;
    className?: string;
}
export interface TabsProps extends Props {
    defaultValue?: string;
}
export interface TabsListProps extends Props {
    ariaLabel: string;
}
export interface TabsTriggerProps extends Props {
    activeClass?: string;
    value: string;
}
export interface TabsContentProps extends Props {
    value: string;
}
export interface TabsContextType {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
