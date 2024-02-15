import { type PropsWithChildren } from 'react';
import type { BaseProps, FamilyIconProps } from '../../interface';
type Props = BaseProps & FamilyIconProps & PropsWithChildren<{
    showCloseButton?: boolean;
    icon?: string;
    materialStyle?: boolean;
    onClose?: () => void;
}>;
export default function DModalHeader({ showCloseButton, onClose, children, className, style, iconFamilyClass, iconFamilyPrefix, icon: iconProp, materialStyle, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
