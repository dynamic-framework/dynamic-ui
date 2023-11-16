import type { PropsWithChildren } from 'react';
import type { ToastType, BaseProps } from '../interface';
type Props = BaseProps & PropsWithChildren<{
    id?: string;
    type?: ToastType;
    icon?: string;
    iconFamilyClass?: string;
    iconFamilyPrefix?: string;
    showIcon?: boolean;
    showClose?: boolean;
    onClose?: () => void;
}>;
export default function DToast({ type, icon, iconFamilyClass, iconFamilyPrefix, showIcon, showClose, onClose, children, id, className, style, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
