import React from 'react';
import { Prettify } from '../model/common';
import { TabsContentProps, TabsListProps, TabsProps, TabsTriggerProps } from '../model/tab';
export declare const Tabs: {
    (props: TabsProps): React.JSX.Element;
    List: (props: Prettify<TabsListProps>) => React.JSX.Element;
    Trigger: (props: Prettify<TabsTriggerProps>) => React.JSX.Element;
    Content: (props: Prettify<TabsContentProps>) => React.JSX.Element;
};
export declare const List: (props: Prettify<TabsListProps>) => React.JSX.Element;
export declare const Trigger: (props: Prettify<TabsTriggerProps>) => React.JSX.Element;
export declare const Content: (props: Prettify<TabsContentProps>) => React.JSX.Element;
