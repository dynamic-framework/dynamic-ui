import type { BaseProps, ComponentColor } from '../interface';
type Props = BaseProps & {
    text?: string;
    soft?: boolean;
    size?: 'sm' | 'lg';
    rounded?: boolean;
    color?: ComponentColor;
    id?: string;
    iconStart?: string;
    iconEnd?: string;
    iconMaterialStyle?: boolean;
    iconFamilyClass?: string;
    iconFamilyPrefix?: string;
};
export default function DBadge({ text, soft, color, id, rounded, className, size, style, iconStart, iconEnd, iconMaterialStyle, iconFamilyClass, iconFamilyPrefix, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
