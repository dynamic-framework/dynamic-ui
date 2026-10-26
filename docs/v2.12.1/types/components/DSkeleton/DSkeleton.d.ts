import type { ReactNode } from 'react';
import DSkeletonText from './components/DSkeletonText';
import DSkeletonBlock from './components/DSkeletonBlock';
import DSkeletonCircle from './components/DSkeletonCircle';
import type { BaseProps, ComponentColor } from '../interface';
import type { SkeletonDimension } from './utils';
export type SkeletonAnimation = 'glow' | 'wave' | 'none';
export type SkeletonDirection = 'vertical' | 'horizontal';
type Props = BaseProps & {
    /**
     * Animation applied to every skeleton item inside. Nested skeletons inherit
     * the animation of the closest skeleton that sets one, so a nested skeleton
     * can replace it or turn it off with `none`.
     */
    animation?: SkeletonAnimation;
    /**
     * Text announced by screen readers while loading. The skeleton shapes are
     * hidden from assistive technology, so this is the only thing announced.
     * Ignored by nested skeletons.
     */
    ariaLabel?: string;
    /** Theme color for the skeleton items (`primary`, `secondary`, `info`, ...). */
    color?: ComponentColor;
    /**
     * Space between items, and between the shapes of every item. Numbers are
     * pixels.
     */
    gap?: SkeletonDimension;
    /** Axis the items and their shapes are laid out on. */
    direction?: SkeletonDirection;
    /**
     * Number of times the item is repeated. Setting it turns the skeleton into an
     * iterator: every repetition is wrapped in its own `.d-skeleton-slot`.
     * Capped at 100.
     */
    items?: number;
    /** Class applied to the wrapper of every item. */
    itemClassName?: string;
    /**
     * Template of each item, as a node or as a function receiving the index.
     * Without `items` and without a function, children render as-is.
     */
    children?: ReactNode | ((index: number) => ReactNode);
};
declare function DSkeleton({ animation, ariaLabel, color, gap, direction, items, itemClassName, className, style, dataAttributes, children, }: Props): import("react").JSX.Element;
declare const _default: typeof DSkeleton & {
    Text: typeof DSkeletonText;
    Block: typeof DSkeletonBlock;
    Circle: typeof DSkeletonCircle;
};
export default _default;
