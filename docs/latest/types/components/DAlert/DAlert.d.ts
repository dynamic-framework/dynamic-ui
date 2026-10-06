import type { PropsWithChildren } from 'react';
import type { BaseProps, ComponentStateColor, LiveRegionRole } from '../interface';
type Props = BaseProps & PropsWithChildren<{
    id?: string;
    color?: ComponentStateColor;
    /**
     * `alert` (default) interrupts the screen reader, for critical errors.
     * `status` announces without interrupting, for dynamic non-critical
     * messages. `none` renders no role, for static content already on screen.
     */
    role?: LiveRegionRole;
    icon?: string;
    /**
     * Renders the leading icon. Set to `false` for an alert without icon, such
     * as an informative block inside a form where the icon competes with the
     * content. When `true`, `icon` falls back to the one mapped to `color`.
     */
    showIcon?: boolean;
    iconFamilyClass?: string;
    iconFamilyPrefix?: string;
    iconMaterialStyle?: boolean;
    showClose?: boolean;
    /** Accessible name of the close button. */
    closeAriaLabel?: string;
    iconClose?: string;
    iconCloseFamilyClass?: string;
    iconCloseFamilyPrefix?: string;
    iconCloseMaterialStyle?: boolean;
    onClose?: () => void;
}>;
export default function DAlert({ color, role, icon: iconProp, showIcon, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconClose: iconCloseProp, iconCloseFamilyClass, iconCloseFamilyPrefix, iconCloseMaterialStyle, showClose, closeAriaLabel, onClose, children, id, className, style, dataAttributes, }: Props): import("react").JSX.Element;
export {};
