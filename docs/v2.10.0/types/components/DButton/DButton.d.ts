import { type ButtonHTMLAttributes } from 'react';
import { ResponsiveProp } from '../../hooks/useResponsiveProp';
import type { BaseProps, ButtonVariant, ComponentColor, EndIconProps, StartIconProps } from '../interface';
interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, BaseProps, StartIconProps, EndIconProps {
    href?: string;
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'];
    rel?: React.AnchorHTMLAttributes<HTMLAnchorElement>['rel'];
    color?: ComponentColor;
    size?: string | ResponsiveProp;
    variant?: ButtonVariant;
    text?: string;
    loading?: boolean;
    loadingText?: string;
    loadingAriaLabel?: string;
}
declare const DButton: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;
export default DButton;
