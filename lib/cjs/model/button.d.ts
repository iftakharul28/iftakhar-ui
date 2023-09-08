export interface link {
    type: 'link';
    href: string;
    className?: string;
    children: React.ReactNode;
}
export type button = {
    type: 'button' | 'submit' | 'reset';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
