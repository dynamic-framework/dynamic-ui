import classNames from 'classnames';
import { useContext, useMemo } from 'react';

import type { CSSProperties, ReactNode } from 'react';

import DSkeletonText from './components/DSkeletonText';
import DSkeletonBlock from './components/DSkeletonBlock';
import DSkeletonCircle from './components/DSkeletonCircle';
import SkeletonContext from './SkeletonContext';

import { PREFIX_BS } from '../config';
import type { BaseProps, ComponentColor } from '../interface';
import type { SkeletonDimension } from './utils';
import { toCssSize } from './utils';

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

function DSkeleton(
  {
    animation,
    ariaLabel = 'Loading...',
    color,
    gap,
    direction = 'vertical',
    items,
    itemClassName,
    className,
    style,
    dataAttributes,
    children,
  }: Props,
) {
  const isNested = useContext(SkeletonContext);
  // Nested skeletons without an explicit animation keep the one of their parent.
  const resolvedAnimation = animation ?? (isNested ? undefined : 'glow');

  const skeletonStyle = useMemo(() => ({
    ...color && { [`--${PREFIX_BS}skeleton-bg`]: `var(--${PREFIX_BS}${color})` },
    ...gap !== undefined && { [`--${PREFIX_BS}skeleton-gap`]: toCssSize(gap) },
    ...style,
  }) as CSSProperties, [color, gap, style]);

  const content = useMemo(() => {
    const isIterated = items !== undefined || typeof children === 'function';
    if (!isIterated) return children as ReactNode;

    return Array.from({ length: Math.max(items ?? 1, 0) }, (_, index) => (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        className={classNames('d-skeleton-slot', itemClassName)}
      >
        {typeof children === 'function' ? children(index) : children}
      </div>
    ));
  }, [items, itemClassName, children]);

  const contentClassName = classNames(
    'd-skeleton-content',
    direction === 'horizontal' && 'd-skeleton-content-horizontal',
  );
  const animationClassName = resolvedAnimation && `d-skeleton-animation-${resolvedAnimation}`;

  if (isNested) {
    return (
      <div
        className={classNames(
          contentClassName,
          animationClassName,
          className,
        )}
        style={skeletonStyle}
        {...dataAttributes}
      >
        {content}
      </div>
    );
  }

  return (
    <SkeletonContext.Provider value>
      <div
        className={classNames(
          'd-skeleton',
          animationClassName,
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
          className={contentClassName}
          aria-hidden="true"
        >
          {content}
        </div>
      </div>
    </SkeletonContext.Provider>
  );
}

export default Object.assign(DSkeleton, {
  Text: DSkeletonText,
  Block: DSkeletonBlock,
  Circle: DSkeletonCircle,
});
