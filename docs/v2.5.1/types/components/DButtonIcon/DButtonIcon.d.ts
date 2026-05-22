import type { MouseEvent } from 'react';
import type { BaseProps, ButtonVariant, ComponentColor, ComponentSize, FamilyIconProps, InputState } from '../interface';
type Props = BaseProps & FamilyIconProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: string;
    size?: ComponentSize;
    variant?: ButtonVariant;
    color?: ComponentColor;
    state?: InputState;
    loading?: boolean;
    loadingAriaLabel?: string;
    stopPropagationEnabled?: boolean;
    href?: string;
    target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target'];
    rel?: React.AnchorHTMLAttributes<HTMLAnchorElement>['rel'];
    onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};
export default function DButtonIcon({ id, icon, size, className, variant, state, loadingAriaLabel, iconMaterialStyle, disabled, color, loading, href, target, rel, stopPropagationEnabled, style, iconFamilyClass, iconFamilyPrefix, dataAttributes, onClick, 'aria-label': ariaLabelProp, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
export {};
