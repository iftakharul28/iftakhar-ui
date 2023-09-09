import React from 'react';
import { TabsContentProps, TabsListProps, TabsProps, TabsTriggerProps } from '../model/tab';
export declare const Tabs: {
    (props: TabsProps): React.JSX.Element;
    List: React.FC<TabsListProps>;
    Trigger: React.FC<TabsTriggerProps>;
    Content: React.FC<TabsContentProps>;
};
