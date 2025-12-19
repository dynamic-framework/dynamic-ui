import type { BaseProps } from '../interface';
type Props = BaseProps & {
    currentValue: number;
    minValue?: number;
    maxValue?: number;
    hideCurrentValue?: boolean;
    enableStripedAnimation?: boolean;
    height?: string | number;
};
export default function DProgress({ className, style, currentValue, minValue, maxValue, hideCurrentValue, enableStripedAnimation, height, dataAttributes, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
