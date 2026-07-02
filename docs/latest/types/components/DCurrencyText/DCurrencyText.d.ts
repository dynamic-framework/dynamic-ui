/// <reference types="react" />
import type { BaseProps } from '../interface';
type Props = BaseProps & {
    value: number;
};
export default function DCurrencyText({ value, className, style, dataAttributes, }: Props): import("react").JSX.Element;
export {};
