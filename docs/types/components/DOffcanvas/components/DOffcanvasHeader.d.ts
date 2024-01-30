import type { PropsWithChildren } from 'react';
import type { BaseProps, FamilyIconProps } from '../../interface';
type Props = BaseProps & FamilyIconProps & PropsWithChildren<{
    showCloseButton?: boolean;
    icon?: string;
    materialStyle?: boolean;
    onClose?: () => void;
}>;
export default function DOffcanvasHeader({ showCloseButton, onClose, children, className, style, iconFamilyClass, iconFamilyPrefix, icon, materialStyle, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
