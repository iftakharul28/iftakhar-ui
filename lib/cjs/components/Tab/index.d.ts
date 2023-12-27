import React from 'react';
import type { TabsContextType, TabsProps } from '../../model/tab';
import TabList from './TabList';
import TabTrigger from './TabTrigger';
import TabContent from './TabContent';
export declare const TabsContext: React.Context<TabsContextType | undefined>;
export declare const Tab: {
    ({ children, defaultValue, ...rest }: TabsProps): React.JSX.Element;
    List: typeof TabList;
    Trigger: typeof TabTrigger;
    Content: typeof TabContent;
};
