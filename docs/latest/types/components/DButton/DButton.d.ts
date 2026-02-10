import { type ButtonHTMLAttributes } from 'react';
import type { BaseProps, ButtonVariant, ComponentColor, ComponentSize, EndIconProps, StartIconProps } from '../interface';
interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, BaseProps, StartIconProps, EndIconProps {
    href?: string;
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'];
    rel?: React.AnchorHTMLAttributes<HTMLAnchorElement>['rel'];
    color?: ComponentColor;
    size?: ComponentSize;
    variant?: ButtonVariant;
    text?: string;
    loading?: boolean;
    loadingText?: string;
    loadingAriaLabel?: string;
}
declare const DButton: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;
export default DButton;
