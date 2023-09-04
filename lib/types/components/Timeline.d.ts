import React from 'react';
import { Prettify } from '../model/common';
interface TimeProps {
    className?: string;
    children: React.ReactNode;
}
interface TimelineItemProps extends TimeProps {
    color?: string;
    dot?: React.ReactNode;
    fromSubBranch?: string;
    status?: string;
    statusDate?: string;
}
declare const Timeline: {
    (props: Prettify<TimeProps>): React.JSX.Element;
    Item: (props: Prettify<TimelineItemProps>) => React.JSX.Element;
};
export default Timeline;
