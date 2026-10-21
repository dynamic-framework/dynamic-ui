/// <reference types="react" />
import type { BaseProps } from '../../interface';
import type { SkeletonDimension } from '../utils';
type Props = BaseProps & {
    /** Diameter of the circle. Numbers are pixels. */
    size?: SkeletonDimension;
};
export default function DSkeletonCircle({ size, className, style, dataAttributes, }: Props): import("react").JSX.Element;
export {};
