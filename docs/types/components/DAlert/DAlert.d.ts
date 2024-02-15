import type { PropsWithChildren } from 'react';
import type { AlertType, BaseProps } from '../interface';
type Props = BaseProps & PropsWithChildren<{
    id?: string;
    type?: AlertType;
    icon?: string;
    iconFamilyClass?: string;
    iconFamilyPrefix?: string;
    iconMaterialStyle?: boolean;
    showIcon?: boolean;
    showClose?: boolean;
    iconClose?: string;
    iconCloseFamilyClass?: string;
    iconCloseFamilyPrefix?: string;
    iconCloseMaterialStyle?: boolean;
    soft?: boolean;
    onClose?: () => void;
}>;
export default function DAlert({ type, icon: iconProp, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconClose: iconCloseProp, iconCloseFamilyClass, iconCloseFamilyPrefix, iconCloseMaterialStyle, showIcon, soft, showClose, onClose, children, id, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
