import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import type { BaseProps } from '../../interface';

export type Props = BaseProps & PropsWithChildren<{
  /**
   * Position in the strip, and its length. Injected by `DCarousel`; a consumer
   * writing `<DCarousel.Slide>` never passes them.
   */
  index?: number;
  total?: number;
  /** Whether this slide is the one at the alignment point. */
  active?: boolean;
  /** Which lap of loop clones this is, if it is one. */
  clone?: 'head' | 'tail';
  /** Overrides the generated "N of M" label. */
  ariaLabel?: string;
}>;

/**
 * One slide.
 *
 * `role="group"` with `aria-roledescription="slide"` is the APG carousel
 * pattern: it gives a screen reader something to announce on arrival, and the
 * "N of M" label is what tells a user how far through they are — a carousel
 * with no sense of length is one you cannot decide to leave.
 *
 * A clone gets none of that. It is marked `inert`, which takes it out of the
 * tab order, the accessibility tree and find-in-page in one attribute, so the
 * loop costs nothing to anyone not looking at it.
 */
export default function DCarouselSlide(
  {
    children,
    className,
    style,
    dataAttributes,
    index,
    total,
    active = false,
    clone,
    ariaLabel,
  }: Props,
) {
  const label = ariaLabel
    ?? (index !== undefined && total !== undefined ? `${index + 1} of ${total}` : undefined);

  return (
    <div
      className={classNames('df-carousel-slide', className)}
      style={style}
      {...clone
        // React 19 types `inert` as a boolean and renders the bare attribute.
        ? { inert: true, 'data-clone': clone, 'aria-hidden': true }
        : {
          role: 'group',
          'aria-roledescription': 'slide',
          ...label && { 'aria-label': label },
          ...active && { 'data-active': '' },
        }}
      {...dataAttributes}
    >
      {children}
    </div>
  );
}
