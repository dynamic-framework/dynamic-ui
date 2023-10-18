import type { PropsWithChildren } from 'react';
type Props = PropsWithChildren<{
    className?: string;
    isActive?: boolean;
    isDisabled?: boolean;
    theme?: string;
    onClick?: () => void;
}>;
export default function DListItem({ children, className, isActive, isDisabled, theme, onClick, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
