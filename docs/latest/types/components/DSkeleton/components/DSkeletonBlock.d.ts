/// <reference types="react" />
import type { BaseProps } from '../../interface';
import type { SkeletonDimension, SkeletonRounded } from '../utils';
type Props = BaseProps & {
    /** Width of the block. Numbers are pixels. */
    width?: SkeletonDimension;
    /** Height of the block. Numbers are pixels. */
    height?: SkeletonDimension;
    /**
     * Border radius as a Bootstrap `rounded-*` utility. `true` maps to `rounded`,
     * `false` to `rounded-0`. When omitted, `--bs-skeleton-border-radius` applies.
     */
    rounded?: SkeletonRounded;
};
export default function DSkeletonBlock({ width, height, rounded, className, style, dataAttributes, }: Props): import("react").JSX.Element;
export {};
