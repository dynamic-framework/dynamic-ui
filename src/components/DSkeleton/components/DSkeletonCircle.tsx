import classNames from 'classnames';

import type { BaseProps } from '../../interface';
import type { SkeletonDimension } from '../utils';
import { toCssSize } from '../utils';

type Props = BaseProps & {
  /** Diameter of the circle. Numbers are pixels. */
  size?: SkeletonDimension;
};

export default function DSkeletonCircle(
  {
    size = 40,
    className,
    style,
    dataAttributes,
  }: Props,
) {
  const diameter = toCssSize(size);

  return (
    <span
      className={classNames(
        'placeholder d-skeleton-item d-skeleton-circle rounded-circle',
        className,
      )}
      style={{ width: diameter, height: diameter, ...style }}
      aria-hidden="true"
      {...dataAttributes}
    />
  );
}
