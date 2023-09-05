import React from 'react';
import { Prettify } from '../model/common';
type Props = {
    children: React.ReactNode;
    className?: string;
};
interface TabsProps extends Props {
    defaultValue?: string;
}
interface TabsListProps extends Props {
    ariaLabel: string;
}
interface TabsTriggerProps extends Props {
    activeTab?: string;
    activeClass?: string;
    value: string;
    onClick: (value: string) => void;
}
interface TabsContentProps extends Props {
    value: string;
    activeTab?: string;
}
declare const Tabs: {
    (props: TabsProps): React.JSX.Element;
    List: (props: Prettify<TabsListProps>) => React.JSX.Element;
    Trigger: (props: Prettify<TabsTriggerProps>) => React.JSX.Element;
    Content: (props: Prettify<TabsContentProps>) => React.JSX.Element;
};
export declare const List: (props: Prettify<TabsListProps>) => React.JSX.Element;
export declare const Trigger: (props: Prettify<TabsTriggerProps>) => React.JSX.Element;
export declare const Content: (props: Prettify<TabsContentProps>) => React.JSX.Element;
export default Tabs;
