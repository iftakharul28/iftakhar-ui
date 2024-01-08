import React from 'react';
import { OmitTitle } from '../model/common';
type Props = {
    title?: React.ReactNode;
    extra?: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
} & OmitTitle<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export default function Card({ title, extra, header, footer, className, children, ...rest }: Props): React.JSX.Element;
export {};
