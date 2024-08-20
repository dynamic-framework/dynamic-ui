import type { BaseProps, FamilyIconProps } from '../interface';
type Props = BaseProps & FamilyIconProps & {
    theme?: string;
    text?: string;
    icon?: string;
    iconClose?: string;
    iconCloseFamilyClass?: string;
    iconCloseFamilyPrefix?: string;
    iconCloseMaterialStyle?: boolean;
    showClose?: boolean;
    closeAriaLabel?: string;
    onClose?: () => void;
};
export default function DChip({ theme, text, icon, iconFamilyClass, iconFamilyPrefix, iconMaterialStyle, iconClose: iconCloseProp, iconCloseFamilyClass, iconCloseFamilyPrefix, iconCloseMaterialStyle, showClose, closeAriaLabel, className, style, dataAttributes, onClose, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
