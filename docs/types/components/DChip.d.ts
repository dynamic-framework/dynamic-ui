import type { FamilyIcon } from './interface';
type Props = FamilyIcon & {
    theme?: string;
    text?: string;
    icon?: string;
    showClose?: boolean;
    onClose?: () => void;
};
export default function DChip({ theme, text, icon, iconFamilyClass, iconFamilyPrefix, showClose, onClose, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
