import { useCallback, useMemo } from 'react';
import classNames from 'classnames';

import type { ComponentProps, ReactNode } from 'react';

import DIcon from '../DIcon';
import { paginationRange } from './paginationRange';

import { useDContext } from '../../contexts';
import { useResponsiveProp, type ResponsiveProp } from '../../hooks/useResponsiveProp';
import type { BaseProps, ComponentSize } from '../interface';

export type DPaginatorI18n = {
  /** Names the whole control for a screen reader. */
  label: string;
  previous: string;
  next: string;
  /** Prefixed to the page number: "Go to page 4". */
  goToPage: string;
  /** Announced on the page you are already on. */
  currentPage: string;
};

const DEFAULT_I18N: DPaginatorI18n = {
  label: 'Pagination',
  previous: 'Previous page',
  next: 'Next page',
  goToPage: 'Go to page',
  currentPage: 'Page',
};

export type Props = BaseProps & {
  /** Total number of pages. */
  total: number;
  /** The current page, 1-based. */
  current?: number;
  onPageChange?: (page: number) => void;
  /**
   * Pages shown either side of the current one. Responsive, because the number
   * that fits on a phone is not the number that fits on a desktop.
   */
  siblings?: number | ResponsiveProp<number>;
  /** Pages pinned at each end, so the first and last are always one press away. */
  boundaries?: number;
  /** Previous/next controls. */
  arrows?: boolean;
  size?: ComponentSize;
  /**
   * Renders each page as a link to this href instead of as a button.
   *
   * Worth doing whenever the pages are real URLs: a link can be opened in a new
   * tab, is followed by a crawler, and works with JavaScript disabled — none of
   * which a button does. `onPageChange` still fires, and a plain click is
   * intercepted so the page does not reload.
   */
  pageHref?: (page: number) => string;
  /**
   * Overrides for the arrow icons. Both default to the context's icon map, so
   * a consumer who has already swapped their icon set does not have to name
   * them again here.
   */
  iconArrowLeft?: Partial<ComponentProps<typeof DIcon>>;
  iconArrowRight?: Partial<ComponentProps<typeof DIcon>>;
  i18n?: Partial<DPaginatorI18n>;
};

/**
 * Page navigation.
 *
 * 2.x wrapped `react-responsive-pagination`, which owned the markup and took
 * fourteen class-name props so a design system could dress it. That is a lot of
 * surface for a list of numbered buttons, and it decided how many to show by
 * measuring against a `maxWidth` in pixels the caller had to guess.
 *
 * Here the count comes from `siblings` and `boundaries` — see
 * {@link paginationRange} for why that is the better question — and the markup
 * is ours, so the variants are attributes like every other v3 component.
 */
export default function DPaginator(
  {
    total,
    current = 1,
    onPageChange,
    siblings = 1,
    boundaries = 1,
    arrows = true,
    size,
    pageHref,
    className,
    style,
    dataAttributes,
    iconArrowLeft,
    iconArrowRight,
    i18n: i18nProp,
  }: Props,
) {
  const i18n = useMemo(() => ({ ...DEFAULT_I18N, ...i18nProp }), [i18nProp]);

  // The arrows come from the context's icon map, like every other default icon
  // in the library. An inline SVG here would be a glyph nobody could change:
  // a consumer swapping their whole icon set through `DContextProvider` would
  // find the paginator still drawing a chevron of its own.
  const { iconMap: { chevronLeft, chevronRight } } = useDContext();

  const { responsivePropValue } = useResponsiveProp(true);
  const resolvedSiblings = typeof siblings === 'number'
    ? siblings
    : responsivePropValue(siblings) ?? 1;

  const page = Math.min(Math.max(Math.round(current) || 1, 1), Math.max(total, 1));

  const items = useMemo(() => paginationRange({
    total,
    current: page,
    siblings: resolvedSiblings,
    boundaries,
  }), [boundaries, page, resolvedSiblings, total]);

  const goTo = useCallback((target: number) => {
    if (target < 1 || target > total || target === page) return;
    onPageChange?.(target);
  }, [onPageChange, page, total]);

  // A whole paginator for one page is a control with nothing to control.
  if (total < 2) return null;

  const renderPage = (value: number) => {
    const isCurrent = value === page;
    const content: ReactNode = value;
    const shared = {
      className: 'df-pagination-link',
      'aria-label': isCurrent ? `${i18n.currentPage} ${value}` : `${i18n.goToPage} ${value}`,
      ...isCurrent && { 'aria-current': 'page' as const },
    };

    if (pageHref) {
      return (
        <a
          {...shared}
          href={pageHref(value)}
          onClick={(event) => {
            // Let a modified click do what the browser would: open in a tab, a
            // window, or download. Only a plain click is ours to handle.
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            if (onPageChange) {
              event.preventDefault();
              goTo(value);
            }
          }}
        >
          {content}
        </a>
      );
    }

    return (
      <button {...shared} type="button" onClick={() => goTo(value)}>
        {content}
      </button>
    );
  };

  return (
    // `nav` so the control is one of the landmarks a screen reader can jump
    // between, and named because a page often has two of them.
    <nav aria-label={i18n.label} style={style} {...dataAttributes}>
      <ul
        className={classNames('df-pagination', className)}
        {...size && { 'data-size': size }}
      >
        {arrows && (
          <li className="df-pagination-item" data-nav>
            <button
              type="button"
              className="df-pagination-link"
              aria-label={i18n.previous}
              disabled={page <= 1}
              onClick={() => goTo(page - 1)}
            >
              <DIcon icon={chevronLeft} {...iconArrowLeft} />
            </button>
          </li>
        )}

        {items.map((item, index) => (typeof item === 'number' ? (
          <li key={`page-${item}`} className="df-pagination-item">
            {renderPage(item)}
          </li>
        ) : (
          /*
           * The gap is decoration, not a control. `aria-hidden` keeps a screen
           * reader from reading "ellipsis" between the numbers, which tells a
           * user nothing they can act on — the page numbers either side already
           * say that the list is not contiguous.
           */
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={`${item}-${index}`}
            className="df-pagination-item"
            data-ellipsis
            aria-hidden="true"
          >
            <span className="df-pagination-link">…</span>
          </li>
        )))}

        {arrows && (
          <li className="df-pagination-item" data-nav>
            <button
              type="button"
              className="df-pagination-link"
              aria-label={i18n.next}
              disabled={page >= total}
              onClick={() => goTo(page + 1)}
            >
              <DIcon icon={chevronRight} {...iconArrowRight} />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
