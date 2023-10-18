import type { CSSProperties, PropsWithChildren } from 'react';
import type { AlertType } from './interface';
type Props = PropsWithChildren<{
    id?: string;
    className?: string;
    style?: CSSProperties;
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
