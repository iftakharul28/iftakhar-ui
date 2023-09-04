import React from 'react';
interface Props<T> {
    renderItem: (item: T, index?: number) => React.ReactNode;
    data: T[];
}
declare function RenderList<T>(props: Props<T>): React.JSX.Element;
export default RenderList;
