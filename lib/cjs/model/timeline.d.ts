export interface TimeProps {
    className?: string;
    children: React.ReactNode | React.ReactNode[];
}
export interface TimelineItemProps extends TimeProps {
    dot?: React.ReactNode;
    label?: React.ReactNode;
    color?: 'blue' | 'red' | 'green' | 'gray';
    position?: 'left' | 'right';
}
