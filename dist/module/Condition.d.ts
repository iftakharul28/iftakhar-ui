import { CaseProps, SwitchProps } from '../model/condition';
export declare const Switch: {
    (props: SwitchProps): null;
    Case: (props: CaseProps) => import("react").ReactNode;
    Default: (props: SwitchProps) => import("react").ReactNode;
};
export declare const Case: (props: CaseProps) => import("react").ReactNode;
export declare const Default: (props: SwitchProps) => import("react").ReactNode;
