import type { MouseEvent } from 'react';
import type { ResponsiveProp } from '../../hooks/useResponsiveProp';
import type { BaseProps, ButtonVariant, ComponentColor, ComponentSize, FamilyIconProps, InputState } from '../interface';
type Props = BaseProps & FamilyIconProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: string;
    size?: ComponentSize;
    /**
     * Size of the icon glyph, forwarded to `DIcon` (e.g. `"1.5rem"`, or a
     * responsive object such as `{ xs: '1rem', lg: '2rem' }`, which follows
     * viewport changes). Without it the glyph follows the button's font size,
     * which changes with `size`.
     */
    iconSize?: string | ResponsiveProp;
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
export default function DButtonIcon({ id, icon, size, iconSize, className, variant, state, loadingAriaLabel, iconMaterialStyle, disabled, color, loading, href, target, rel, stopPropagationEnabled, style, iconFamilyClass, iconFamilyPrefix, dataAttributes, onClick, 'aria-label': ariaLabelProp, ...rest }: Props): import("react").JSX.Element;
export {};
