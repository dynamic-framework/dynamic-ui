import type { BaseProps } from '../interface';
type Props = BaseProps & {
    icon: string;
    theme: string;
    name: string;
    number: string;
    balance: string;
    balanceText: string;
    onClick: () => void;
    actionText: string;
};
export default function DCardAccount({ className, style, icon, theme, name, number, balance, balanceText, onClick, actionText, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
