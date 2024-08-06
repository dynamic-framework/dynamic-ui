import type { PropsWithChildren } from 'react';
import type { AlertTheme, BaseProps } from '../interface';
type Props = BaseProps & PropsWithChildren<{
    id?: string;
    theme?: AlertTheme;
    icon?: string;
    iconFamilyClass?: string;
    iconFamilyPrefix?: string;
    iconMaterialStyle?: boolean;
    showClose?: boolean;
    iconClose?: string;
    iconCloseFamilyClass?: string;
    iconCloseFamilyPrefix?: string;
    iconCloseMaterialStyle?: boolean;
    onClose?: () => void;
}>;
export default function DAlert({ theme, icon: iconProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconClose: iconCloseProp, iconCloseFamilyClass, iconCloseFamilyPrefix, iconCloseMaterialStyle, showClose, onClose, children, id, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
