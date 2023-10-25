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
    onClose?: () => void;
}>;
export default function DAlert({ type, icon, iconFamilyClass, iconFamilyPrefix, showIcon, showClose, onClose, children, id, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
