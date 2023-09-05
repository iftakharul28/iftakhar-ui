import React from 'react';
type Props<RecordType> = {
    loading: boolean;
    rowKey?: (item?: RecordType | number) => number;
    className?: string;
    dataSource: RecordType[];
    columns: ColumnsType<RecordType>[];
};
type ColumnsType<RecordType> = {
    title: string;
    render: (record: RecordType, id: number) => React.ReactNode;
    width?: number;
    colSpan?: number;
    className?: string;
};
declare function Table<RecordType>(props: Props<RecordType>): React.JSX.Element;
export default Table;
