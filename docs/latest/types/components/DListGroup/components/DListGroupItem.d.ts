import type { PropsWithChildren } from 'react';
import type { BaseProps, ComponentColor, EndIconProps, StartIconProps } from '../../interface';
type Props = BaseProps & StartIconProps & EndIconProps & PropsWithChildren<{
    as?: 'li' | 'a' | 'button';
    action?: boolean;
    active?: boolean;
    disabled?: boolean;
    href?: string;
    onClick?: () => void;
    color?: ComponentColor;
}>;
export default function DListGroupItem({ as, action: actionProp, active, disabled, href, onClick, color, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartMaterialStyle, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndMaterialStyle, children, className, style, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
