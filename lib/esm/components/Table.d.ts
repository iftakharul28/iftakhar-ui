import React from 'react';
import { Props } from '../model/table';
declare function TableWrapper<RecordType>({ dataSource, loading, title, columns, showHeader, ...rest }: Props<RecordType>): React.JSX.Element;
export declare const Table: typeof TableWrapper;
export {};
