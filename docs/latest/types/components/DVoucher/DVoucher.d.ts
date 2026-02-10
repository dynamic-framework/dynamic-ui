import { ComponentProps, PropsWithChildren, ReactNode } from 'react';
import DIcon from '../DIcon';
type Props = PropsWithChildren<{
    amount?: string;
    amountDetails?: ReactNode;
    icon?: false | null | string | Partial<ComponentProps<typeof DIcon>>;
    className?: string;
    message: string;
    title: string;
    downloadText?: string;
    shareText?: string;
    onError?: (err: Error) => Promise<void> | void;
}>;
export default function DVoucher({ amount, amountDetails, icon, title, onError, message, downloadText, shareText, className, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
