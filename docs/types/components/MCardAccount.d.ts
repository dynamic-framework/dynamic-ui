declare type Props = {
    className?: string;
    icon: string;
    theme: string;
    name: string;
    number: string;
    balance: string;
    balanceText: string;
    onClick: () => void;
    onClickText: string;
};
export default function MCardAccount({ className, icon, theme, name, number, balance, balanceText, onClick, onClickText, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
