import type { PropsWithChildren } from 'react';
import type { BaseProps } from '../../interface';
type Props = BaseProps & PropsWithChildren<{
    as?: 'li' | 'a' | 'button';
    action?: boolean;
    active?: boolean;
    disabled?: boolean;
    href?: string;
    onClick?: () => void;
    theme?: string;
}>;
export default function DListGroupItem({ as, action: actionProp, active, disabled, href, onClick, theme, children, className, style, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
