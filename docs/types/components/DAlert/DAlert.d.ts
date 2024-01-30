import type { PropsWithChildren } from 'react';
import type { AlertType, BaseProps } from '../interface';
type Props = BaseProps & PropsWithChildren<{
    id?: string;
    type?: AlertType;
    icon?: string;
    iconFamilyClass?: string;
    iconFamilyPrefix?: string;
    showIcon?: boolean;
    showClose?: boolean;
    closeIcon?: string;
    materialStyle?: boolean;
    soft?: boolean;
    onClose?: () => void;
}>;
export default function DAlert({ type, icon, closeIcon, iconFamilyClass, iconFamilyPrefix, materialStyle, showIcon, soft, showClose, onClose, children, id, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
