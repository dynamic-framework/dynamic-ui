import { PropsWithChildren } from 'react';
declare type Props = PropsWithChildren<{
    className?: string;
    isActive?: boolean;
    isDisabled?: boolean;
    theme?: string;
    onEventClick?: () => void;
}>;
export default function DListItem({ children, className, isActive, isDisabled, theme, onEventClick, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
