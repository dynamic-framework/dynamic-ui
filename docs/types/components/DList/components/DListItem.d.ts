import type { PropsWithChildren } from 'react';
import type { BaseProps } from '../../interface';
type Props = BaseProps & PropsWithChildren<{
    isActive?: boolean;
    isDisabled?: boolean;
    theme?: string;
    onClick?: () => void;
}>;
export default function DListItem({ children, className, style, isActive, isDisabled, theme, onClick, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
