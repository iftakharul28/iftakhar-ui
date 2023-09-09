import React from 'react';
interface PaginationProps {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number) => void;
    pageRange?: number;
    activeClass?: string;
    className?: string;
    prevClass?: string;
    nextClass?: string;
    onlyNumber?: boolean;
    nextIcon?: React.ReactNode;
    prevIcon?: React.ReactNode;
}
export declare const Pagination: React.FC<PaginationProps>;
export {};
