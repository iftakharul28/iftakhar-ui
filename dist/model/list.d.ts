export interface Props<T> {
    renderItem: (item: T, index?: number) => React.ReactNode;
    data: T[];
}
