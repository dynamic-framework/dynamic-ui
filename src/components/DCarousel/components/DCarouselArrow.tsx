import classNames from 'classnames';

import type { ComponentProps } from 'react';

import DIcon from '../../DIcon';

import { useDContext } from '../../../contexts';
import { DEFAULT_CAROUSEL_I18N } from '../i18n';
import type { BaseProps } from '../../interface';
import type { DCarouselControllerState, DCarouselControllerStore } from '../controller';
import type { DCarouselI18n } from '../i18n';

export type Props = BaseProps & {
  controller: DCarouselControllerState & DCarouselControllerStore;
  /** Overrides for the icon. Defaults to the context's icon map. */
  icon?: Partial<ComponentProps<typeof DIcon>>;
  i18n?: Partial<DCarouselI18n>;
};

type Direction = 'prev' | 'next';

/**
 * One arrow, for a control that lives outside the carousel.
 *
 * Shares `.df-carousel-arrow` with the built-in pair so moving the arrows
 * costs no styling, and adds the two things distance makes necessary:
 *
 * - `aria-controls`, pointing at the scrollport. The built-in arrows carry
 *   none because they sit inside the carousel and proximity does the work. A
 *   button elsewhere on the page has no relationship to the strip it drives
 *   unless it says so.
 * - `disabled` while nothing is connected, so an arrow rendered before its
 *   carousel mounts does not look live and do nothing.
 *
 * Rolling your own is fine — `canPrev`, `canNext` and `viewportId` are on the
 * controller — but then these two are yours to remember, and they fail
 * quietly.
 */
export default function DCarouselArrow(
  {
    controller,
    direction,
    icon,
    i18n,
    className,
    style,
    dataAttributes,
  }: Props & { direction: Direction },
) {
  const { iconMap: { chevronLeft, chevronRight } } = useDContext();
  const text = { ...DEFAULT_CAROUSEL_I18N, ...i18n };

  const isPrev = direction === 'prev';
  const enabled = controller.connected && (isPrev ? controller.canPrev : controller.canNext);

  return (
    <button
      type="button"
      className={classNames('df-carousel-arrow', className)}
      style={style}
      data-direction={direction}
      aria-label={isPrev ? text.prev : text.next}
      {...controller.viewportId && { 'aria-controls': controller.viewportId }}
      disabled={!enabled}
      onClick={isPrev ? controller.prev : controller.next}
      {...dataAttributes}
    >
      <DIcon icon={isPrev ? chevronLeft : chevronRight} {...icon} />
    </button>
  );
}
