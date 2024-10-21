import type { PropsWithChildren } from 'react';
import type { BaseProps } from '../../interface';
type Props = BaseProps & PropsWithChildren<{
    active?: boolean;
    disabled?: boolean;
    theme?: string;
    onClick?: () => void;
}>;
/**
 * @deprecated Please use DListGroup.Item or DListGroupItem instead
 */
export default function DListItem({ children, className, style, active, disabled, theme, onClick, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
