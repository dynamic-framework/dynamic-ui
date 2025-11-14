import type { PropsWithChildren } from 'react';
import type { BaseProps, ComponentStateColor } from '../interface';
type Props = BaseProps & PropsWithChildren<{
    id?: string;
    color?: ComponentStateColor;
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
export default function DAlert({ color, icon: iconProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconClose: iconCloseProp, iconCloseFamilyClass, iconCloseFamilyPrefix, iconCloseMaterialStyle, showClose, onClose, children, id, className, style, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
