import { PropsWithChildren, ReactNode } from 'react';
type Props = PropsWithChildren<{
    amount?: string;
    amountDetails?: ReactNode;
    icon?: string;
    color?: string;
    message: string;
    title: string;
    downloadText?: string;
    shareText?: string;
    onError?: (err: Error) => Promise<void> | void;
}>;
export default function DVoucher({ amount, amountDetails, icon, color, title, onError, message, downloadText, shareText, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
