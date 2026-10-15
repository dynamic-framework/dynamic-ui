import classNames from 'classnames';

import DIcon from '../../DIcon';

import { useDContext } from '../../../contexts';
import { DEFAULT_CAROUSEL_I18N } from '../i18n';
import type { BaseProps } from '../../interface';
import type { DCarouselControllerState, DCarouselControllerStore } from '../controller';
import type { DCarouselI18n } from '../i18n';

type Props = BaseProps & {
  controller: DCarouselControllerState & DCarouselControllerStore;
  i18n?: Partial<DCarouselI18n>;
};

/**
 * The play/pause button, for a control that lives outside the carousel.
 *
 * It completes the set: `Prev`, `Next` and `Pagination` shipped with the
 * controller and this did not, so moving the autoplay control meant
 * hand-rolling the markup, the icon swap and the `aria-pressed` — while moving
 * the other three cost nothing. The state it needs was already published.
 *
 * It renders nothing while no carousel is connected, and nothing when the
 * connected one has no autoplay to control: `playing` and `paused` are both
 * false then, and a pause button for a strip that never moves is a control
 * with nothing to control.
 */
export default function DCarouselAutoplay(
  {
    controller, i18n, className, style, dataAttributes,
  }: Props,
) {
  const { iconMap: { play, pause } } = useDContext();
  const text = { ...DEFAULT_CAROUSEL_I18N, ...i18n };
  const { connected, canAutoplay, paused } = controller;

  /*
   * `canAutoplay`, not `playing || paused`.
   *
   * `playing` is false while the pointer is over the strip, so the earlier
   * condition made this button vanish under the cursor that was reaching for
   * it. `canAutoplay` says only whether there is an autoplay to control —
   * false when the consumer did not ask for one, and false under
   * `prefers-reduced-motion: reduce`, where pressing it could do nothing.
   */
  if (!connected || !canAutoplay) return null;

  return (
    <button
      type="button"
      className={classNames('d-carousel-autoplay', className)}
      style={style}
      /*
       * The label tracks the USER's choice, not whether slides happen to be
       * moving this instant: hovering holds the strip, and a button that
       * relabels itself under the pointer is unusable. Same rule as the
       * built-in control.
       */
      aria-label={paused ? text.play : text.pause}
      aria-pressed={paused}
      {...controller.viewportId && { 'aria-controls': controller.viewportId }}
      onClick={controller.togglePlay}
      {...dataAttributes}
    >
      <DIcon icon={paused ? play : pause} />
    </button>
  );
}
