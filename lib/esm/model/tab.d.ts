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
    activeTab?: string;
    activeClass?: string;
    value: string;
    onClick: (value: string) => void;
}
export interface TabsContentProps extends Props {
    value: string;
    activeTab?: string;
}
