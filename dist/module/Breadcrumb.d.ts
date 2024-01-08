import React from 'react';
import type { BreadcrumbItemProps, BreadcrumbProps } from '../model/breadcrumb';
export declare const BreadcrumbItem: ({ className, separator, children, ...rest }: BreadcrumbProps) => React.JSX.Element;
export declare const Breadcrumb: {
    ({ className, separator, children, ...rest }: BreadcrumbItemProps): React.JSX.Element;
    Item: ({ className, separator, children, ...rest }: BreadcrumbProps) => React.JSX.Element;
};
