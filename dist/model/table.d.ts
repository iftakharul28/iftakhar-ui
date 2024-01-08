import { OmitTitle } from './common';
export type Props<RecordType> = {
    title?: React.ReactNode;
    loading: boolean;
    showHeader?: boolean;
    rowKey?: (item?: RecordType | number) => number;
    dataSource: RecordType[];
    columns: ColumnsType<RecordType>[];
} & OmitTitle<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>>;
export type ColumnsType<RecordType> = {
    title?: React.ReactNode;
    render: (record: RecordType, id: number) => React.ReactNode;
} & OmitTitle<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>>;
