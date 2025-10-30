import type { BaseProps } from '../interface';
type Props = BaseProps & {
    icon: string;
    theme?: string;
    size?: string;
    loading?: boolean;
    loadingDuration?: number;
    hasCircle?: boolean;
    circleSize?: string;
    color?: string;
    backgroundColor?: string;
    materialStyle?: boolean;
    familyClass?: string;
    familyPrefix?: string;
};
export default function DIconBase({ icon, theme, style, className, size, loading, loadingDuration, hasCircle, circleSize, color, backgroundColor, materialStyle, familyClass, familyPrefix, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
