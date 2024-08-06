import type { BaseProps } from '../interface';
type Props = BaseProps & {
    text?: string;
    soft?: boolean;
    rounded?: boolean;
    theme?: string;
    id?: string;
    iconStart?: string;
    iconEnd?: string;
    iconMaterialStyle?: boolean;
    iconFamilyClass?: string;
    iconFamilyPrefix?: string;
};
export default function DBadge({ text, soft, theme, id, rounded, className, style, iconStart, iconEnd, iconMaterialStyle, iconFamilyClass, iconFamilyPrefix, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
