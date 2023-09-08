import { CaseProps, Props } from '../model/condition';
export declare const Switch: {
    (props: Props): null;
    Case: (props: CaseProps) => import("react").ReactNode;
    Default: (props: Props) => import("react").ReactNode;
};
export declare const Case: (props: CaseProps) => import("react").ReactNode;
export declare const Default: (props: Props) => import("react").ReactNode;
