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
    familyClass?: string;
    familyPrefix?: string;
};
export default function DIcon({ icon, theme, style, className, size, loading, loadingDuration, hasCircle, circleSize, color, backgroundColor, familyClass, familyPrefix, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
