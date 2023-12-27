export type Props<RecordType> = {
    loading: boolean;
    showHeader?: boolean;
    rowKey?: (item?: RecordType | number) => number;
    className?: string;
    dataSource: RecordType[];
    columns: ColumnsType<RecordType>[];
    title?: React.ReactNode;
} & React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
export interface ColumnsType<RecordType> {
    title?: React.ReactNode;
    render: (record: RecordType, id: number) => React.ReactNode;
    width?: number;
    colSpan?: number;
    className?: string;
}
