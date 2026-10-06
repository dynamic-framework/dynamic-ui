/// <reference types="react" />
import type { BaseProps } from '../interface';
type Props = BaseProps & {
    currentValue: number;
    minValue?: number;
    maxValue?: number;
    hideCurrentValue?: boolean;
    enableStripedAnimation?: boolean;
    height?: string | number;
    /**
     * Accessible name of the bar. Describe what progresses (e.g. "Upload
     * progress"), not the role. Defaults to `'Progress bar'` when neither this
     * nor `ariaLabelledBy` is set.
     */
    ariaLabel?: string;
    /**
     * Id of a visible element that names the bar, for a title rendered next to
     * it. When set, `aria-label` is not rendered, so `ariaLabel` and the default
     * name are ignored.
     */
    ariaLabelledBy?: string;
};
export default function DProgress({ className, style, currentValue, minValue, maxValue, hideCurrentValue, enableStripedAnimation, height, ariaLabel, ariaLabelledBy, dataAttributes, }: Props): import("react").JSX.Element;
export {};
