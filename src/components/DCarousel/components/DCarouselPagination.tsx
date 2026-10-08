import classNames from 'classnames';

import { DEFAULT_CAROUSEL_I18N } from '../i18n';
import type { BaseProps } from '../../interface';
import type { DCarouselControllerState, DCarouselControllerStore } from '../controller';
import type { DCarouselI18n } from '../i18n';

type Props = BaseProps & {
  controller: DCarouselControllerState & DCarouselControllerStore;
  i18n?: Partial<DCarouselI18n>;
};

/**
 * The dots, for a control that lives outside the carousel.
 *
 * Same markup and roles as the built-in pagination, so moving it costs no
 * styling and no accessibility: `role="tablist"`, one `role="tab"` per stop,
 * `aria-selected` on the current one, and a roving `tabIndex` so the group is
 * one Tab stop rather than `pageCount` of them.
 *
 * It renders nothing below two stops — a pagination with one dot is a control
 * with nothing to control — and nothing at all while no carousel is
 * connected, because `pageCount` is zero until one is.
 */
export default function DCarouselPagination(
  {
    controller, i18n, className, style, dataAttributes,
  }: Props,
) {
  const text = { ...DEFAULT_CAROUSEL_I18N, ...i18n };
  const { pageCount, activePage, viewportId } = controller;

  if (pageCount <= 1) return null;

  return (
    <div
      className={classNames('df-carousel-pagination', className)}
      style={style}
      role="tablist"
      aria-label={text.goToSlide}
      {...viewportId && { 'aria-controls': viewportId }}
      {...dataAttributes}
    >
      {Array.from({ length: pageCount }, (_, page) => (
        <button
          key={`page-${page}`}
          type="button"
          role="tab"
          className="df-carousel-page"
          aria-label={`${text.goToSlide} ${page + 1}`}
          aria-selected={page === activePage}
          tabIndex={page === activePage ? 0 : -1}
          onClick={() => controller.goToPage(page)}
        />
      ))}
    </div>
  );
}
