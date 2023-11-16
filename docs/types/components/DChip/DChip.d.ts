import type { BaseProps, FamilyIconProps } from '../interface';
type Props = BaseProps & FamilyIconProps & {
    theme?: string;
    text?: string;
    icon?: string;
    showClose?: boolean;
    closeAriaLabel?: string;
    onClose?: () => void;
};
export default function DChip({ theme, text, icon, iconFamilyClass, iconFamilyPrefix, showClose, closeAriaLabel, className, style, onClose, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
