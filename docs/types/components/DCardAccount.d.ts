type Props = {
    className?: string;
    icon: string;
    theme: string;
    name: string;
    number: string;
    balance: string;
    balanceText: string;
    onClick: () => void;
    actionText: string;
};
export default function DCardAccount({ className, icon, theme, name, number, balance, balanceText, onClick, actionText, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
