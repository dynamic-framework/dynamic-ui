/// <reference types="react" />
import type { BaseProps } from '../../interface';
import type { SkeletonDimension, SkeletonRounded } from '../utils';
export type SkeletonTextSize = 'xs' | 'sm' | 'lg';
type Props = BaseProps & {
    /** Number of lines to render. Capped at 100. */
    lines?: number;
    /** Line height, mapped to Bootstrap's `placeholder-{size}`. Defaults to `1em`. */
    size?: SkeletonTextSize;
    /**
     * Width per line. When there are fewer widths than lines, the list repeats.
     * Takes precedence over `lastLineWidth`.
     */
    widths?: SkeletonDimension[];
    /** Width of the last line when there is more than one line and no `widths`. */
    lastLineWidth?: SkeletonDimension;
    /** Border radius of each line. See `DSkeleton.Block`. */
    rounded?: SkeletonRounded;
};
export default function DSkeletonText({ lines, size, widths, lastLineWidth, rounded, className, style, dataAttributes, }: Props): import("react").JSX.Element;
export {};
