import React from 'react';
type buttonType = React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
type listType = {
    className?: string;
    activeClassName?: string;
};
type PaginationProps = {
    current: number;
    pageSize: number;
    total: number;
    pageRange?: number;
    onChange: (page: number) => void;
    className?: string;
    onlyNumber?: boolean;
    item?: listType;
    next?: buttonType;
    prev?: buttonType;
};
export declare const Pagination: ({ current, pageSize, total, onChange, pageRange, item, className, prev, next, onlyNumber }: PaginationProps) => React.JSX.Element;
export {};
