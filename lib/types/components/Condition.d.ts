/// <reference types="react" />
type Props = {
    children: React.ReactNode;
};
type CaseProps = {
    condition: boolean;
    children: React.ReactNode;
};
declare const Switch: {
    (props: Props): null;
    Case: (props: CaseProps) => import("react").ReactNode;
    Default: (props: Props) => import("react").ReactNode;
};
export declare const Case: (props: CaseProps) => import("react").ReactNode;
export declare const Default: (props: Props) => import("react").ReactNode;
export default Switch;
