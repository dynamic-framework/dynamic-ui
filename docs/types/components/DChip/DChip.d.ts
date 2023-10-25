import type { BaseProps, FamilyIconProps } from '../interface';
type Props = BaseProps & FamilyIconProps & {
    theme?: string;
    text?: string;
    icon?: string;
    showClose?: boolean;
    onClose?: () => void;
};
export default function DChip({ theme, text, icon, iconFamilyClass, iconFamilyPrefix, showClose, className, style, onClose, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
