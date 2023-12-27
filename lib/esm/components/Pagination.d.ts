import React from 'react';
type buttonType = {
    icon?: React.ReactNode;
} & React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
interface PaginationProps {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number) => void;
    pageRange?: number;
    activeClass?: string;
    className?: string;
    onlyNumber?: boolean;
    next?: buttonType;
    prev?: buttonType;
}
export declare const Pagination: ({ current, pageSize, total, onChange, pageRange, activeClass, className, prev, next, onlyNumber }: PaginationProps) => React.JSX.Element;
export {};
