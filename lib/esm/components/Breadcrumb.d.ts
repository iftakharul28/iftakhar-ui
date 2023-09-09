import React from 'react';
interface BreadcrumbProps {
    children: React.ReactNode;
    className?: string;
    separator?: React.ReactNode;
}
export declare const BreadcrumbItem: (props: BreadcrumbProps) => React.JSX.Element;
export declare const Breadcrumb: {
    (props: BreadcrumbProps): React.JSX.Element;
    Item: (props: BreadcrumbProps) => React.JSX.Element;
};
export {};
