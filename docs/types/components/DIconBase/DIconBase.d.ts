import type { BaseProps, ComponentColor } from '../interface';
type Props = BaseProps & {
    icon: string;
    color?: ComponentColor;
    size?: string;
    hasCircle?: boolean;
    materialStyle?: boolean;
    familyClass?: string;
    familyPrefix?: string;
    strokeWidth?: number;
};
export default function DIconBase({ icon, color, style, className, size, hasCircle, materialStyle, familyClass, strokeWidth, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
