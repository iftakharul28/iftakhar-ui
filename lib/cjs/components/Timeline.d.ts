import React from 'react';
import { Prettify } from '../model/common';
import { TimeProps, TimelineItemProps } from '../model/timeline';
export declare const TimelineItem: (props: Prettify<TimelineItemProps>) => React.JSX.Element;
export declare const Timeline: {
    (props: Prettify<TimeProps>): React.JSX.Element;
    Item: (props: Prettify<TimelineItemProps>) => React.JSX.Element;
};
