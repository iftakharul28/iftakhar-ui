export interface SwitchProps {
    children: React.ReactNode;
}
export interface CaseProps extends SwitchProps {
    condition: boolean;
}
