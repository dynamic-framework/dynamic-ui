import { type PropsWithChildren } from 'react';
import type { BaseProps, FamilyIconProps } from '../../interface';
type Props = BaseProps & FamilyIconProps & PropsWithChildren<{
    showCloseButton?: boolean;
    icon?: string;
    iconMaterialStyle?: boolean;
    /**
     * @deprecated Use `iconMaterialStyle` instead. It will be removed in a future major version.
     */
    materialStyle?: boolean;
    onClose?: () => void;
}>;
export default function DOffcanvasHeader({ showCloseButton, onClose, children, className, style, iconFamilyClass, iconFamilyPrefix, icon: iconProp, iconMaterialStyle, materialStyle: materialStyleProp, }: Props): import("react").JSX.Element;
export {};
