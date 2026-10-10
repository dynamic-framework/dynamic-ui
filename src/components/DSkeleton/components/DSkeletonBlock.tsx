import classNames from 'classnames';

import type { BaseProps } from '../../interface';
import type { SkeletonDimension, SkeletonRounded } from '../utils';
import { roundedClass, toCssSize } from '../utils';

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

export default function DSkeletonBlock(
  {
    width = '100%',
    height = '1em',
    rounded,
    className,
    style,
    dataAttributes,
  }: Props,
) {
  return (
    <span
      className={classNames(
        'placeholder d-skeleton-item d-skeleton-block',
        roundedClass(rounded),
        className,
      )}
      style={{ width: toCssSize(width), height: toCssSize(height), ...style }}
      aria-hidden="true"
      {...dataAttributes}
    />
  );
}
