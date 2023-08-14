import { PropsWithChildren } from 'react';
declare type Props = PropsWithChildren<{
    className?: string;
    isActive?: boolean;
    isDisabled?: boolean;
    theme?: string;
    onMClick?: () => void;
}>;
export default function MListItem({ children, className, isActive, isDisabled, theme, onMClick, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
