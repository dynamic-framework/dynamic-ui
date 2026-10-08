import classNames from 'classnames';
import { useMemo } from 'react';

import type { BaseProps } from '../../interface';
import type { SkeletonDimension, SkeletonRounded } from '../utils';
import { roundedClass, toCssSize } from '../utils';

export type SkeletonTextSize = 'xs' | 'sm' | 'lg';

type Props = BaseProps & {
  /** Number of lines to render. */
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

export default function DSkeletonText(
  {
    lines = 3,
    size,
    widths,
    lastLineWidth = '60%',
    rounded,
    className,
    style,
    dataAttributes,
  }: Props,
) {
  const lineWidths = useMemo(
    () => Array.from({ length: Math.max(lines, 0) }, (_, index) => {
      if (widths?.length) return toCssSize(widths[index % widths.length]);
      if (lines > 1 && index === lines - 1) return toCssSize(lastLineWidth);
      return '100%';
    }),
    [lines, widths, lastLineWidth],
  );

  return (
    <span
      className={classNames('d-skeleton-text', className)}
      style={style}
      aria-hidden="true"
      {...dataAttributes}
    >
      {lineWidths.map((width, index) => (
        <span
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={classNames(
            'placeholder d-skeleton-item d-skeleton-line',
            size && `placeholder-${size}`,
            roundedClass(rounded),
          )}
          style={{ width }}
        />
      ))}
    </span>
  );
}
