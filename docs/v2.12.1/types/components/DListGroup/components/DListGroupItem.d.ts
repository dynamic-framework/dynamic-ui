import type { PropsWithChildren } from 'react';
import type { BaseProps, ComponentColor, EndIconProps, StartIconProps } from '../../interface';
type Props = BaseProps & StartIconProps & EndIconProps & PropsWithChildren<{
    as?: 'li' | 'a' | 'button';
    action?: boolean;
    active?: boolean;
    /**
     * Value of `aria-current` while the item is `active`: `'page'` for the
     * current page of a navigation, `'step'` for the current step of a flow.
     */
    ariaCurrent?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true';
    disabled?: boolean;
    href?: string;
    onClick?: () => void;
    color?: ComponentColor;
}>;
export default function DListGroupItem({ as, action: actionProp, active, ariaCurrent, disabled, href, onClick, color, iconStart, iconStartFamilyClass, iconStartFamilyPrefix, iconStartMaterialStyle, iconEnd, iconEndFamilyClass, iconEndFamilyPrefix, iconEndMaterialStyle, children, className, style, dataAttributes, }: Props): import("react").JSX.Element;
export {};
