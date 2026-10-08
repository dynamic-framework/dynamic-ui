import classNames from 'classnames';
import { useMemo } from 'react';

import type { CSSProperties, PropsWithChildren } from 'react';

import DSkeletonText from './components/DSkeletonText';
import DSkeletonBlock from './components/DSkeletonBlock';
import DSkeletonCircle from './components/DSkeletonCircle';

import { PREFIX_BS } from '../config';
import type { BaseProps, ComponentColor } from '../interface';
import type { SkeletonDimension } from './utils';
import { toCssSize } from './utils';

export type SkeletonAnimation = 'glow' | 'wave' | 'none';

type Props = PropsWithChildren<BaseProps & {
  /** Animation applied to every skeleton item inside. */
  animation?: SkeletonAnimation;
  /**
   * Text announced by screen readers while loading. The skeleton shapes are
   * hidden from assistive technology, so this is the only thing announced.
   */
  ariaLabel?: string;
  /** Theme color for the skeleton items (`primary`, `secondary`, `info`, ...). */
  color?: ComponentColor;
  /** Space between direct children. Numbers are pixels. */
  gap?: SkeletonDimension;
}>;

function DSkeleton(
  {
    animation = 'glow',
    ariaLabel = 'Loading...',
    color,
    gap,
    className,
    style,
    dataAttributes,
    children,
  }: Props,
) {
  const skeletonStyle = useMemo(() => ({
    ...color && { [`--${PREFIX_BS}skeleton-bg`]: `var(--${PREFIX_BS}${color})` },
    ...gap !== undefined && { [`--${PREFIX_BS}skeleton-gap`]: toCssSize(gap) },
    ...style,
  }) as CSSProperties, [color, gap, style]);

  return (
    <div
      className={classNames(
        'd-skeleton',
        animation === 'glow' && 'placeholder-glow',
        className,
      )}
      style={skeletonStyle}
      role="status"
      aria-busy="true"
      aria-live="polite"
      {...dataAttributes}
    >
      <span className="visually-hidden">{ariaLabel}</span>
      <div
        className={classNames(
          'd-skeleton-content',
          animation === 'wave' && 'placeholder-wave',
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

export default Object.assign(DSkeleton, {
  Text: DSkeletonText,
  Block: DSkeletonBlock,
  Circle: DSkeletonCircle,
});
