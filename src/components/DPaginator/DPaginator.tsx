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
   *
   * Ignored when `prevContent` / `nextContent` is given, which replaces the
   * glyph rather than configuring it.
   */
  iconArrowLeft?: Partial<ComponentProps<typeof DIcon>>;
  iconArrowRight?: Partial<ComponentProps<typeof DIcon>>;
  /**
   * Whatever the previous arrow should contain, instead of an icon.
   *
   * For a text arrow ("Previous"), or text next to a glyph. The default is a
   * `DIcon`, and an icon cannot carry a word: it is rendered `aria-hidden`,
   * sized from the icon scale, and named by `i18n.previous` — so text passed
   * through `iconArrowLeft` came out unreadable to a screen reader, squeezed
   * into a 1.25rem box, and with an accessible name that disagreed with what
   * was on screen.
   *
   * Given content, the button renders it DIRECTLY: no `DIcon` wrapper, no
   * `aria-hidden`, and **no `aria-label`** — because an `aria-label` overrides
   * visible text, and a button labelled "Previous page" while reading
   * "Anterior" fails WCAG 2.5.3, where the accessible name must contain the
   * visible one.
   *
   * That hands the accessible name to the caller, which is the point and also
   * the catch: content with no text in it leaves the button unnamed. Include a
   * word, or hide one with Bootstrap's `.visually-hidden`:
   *
   * ```tsx
   * prevContent={(
   *   <>
   *     <DIcon icon={myArrowIcon} />
   *     <span className="visually-hidden">Previous</span>
   *   </>
   * )}
   * ```
   *
   * (A variable rather than a literal name on purpose:
   * `src/icons/coreIcons.spec.ts` scans this directory for icon props and does
   * not skip comments, so a name written out in an example would be read as one
   * this component renders and demanded in `CORE_LUCIDE_ICONS`. It renders
   * neither — the arrows come from the context's map. The Storybook page
   * carries the example with real names.)
   */
  prevContent?: ReactNode;
  /** The same for the next arrow. See {@link Props.prevContent}. */
  nextContent?: ReactNode;
  i18n?: Partial<DPaginatorI18n>;
};

/**
 * Page navigation: a run of numbered pages with optional previous/next arrows.
 *
 * Renders its own markup and has no third-party dependency. How many pages the
 * run holds comes from `siblings` and `boundaries` — see {@link paginationRange}
 * for why that is the better question than a pixel width.
 *
 * The class names are Bootstrap's: `.pagination`, `.page-item`, `.page-link`,
 * plus `.active`/`.disabled` and the `.page-item-arrow` this library adds. That
 * is deliberate — up to 2.11 this wrapped `react-responsive-pagination`, which
 * emitted exactly those, so every stylesheet written against the old component
 * (this library's own `base/_pagination.scss` included) keeps applying.
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
    prevContent,
    nextContent,
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

  /**
   * One arrow.
   *
   * The `aria-label` is conditional, and that is the whole contract: with the
   * default icon the button has no text, so the label IS its accessible name;
   * with caller content the content is the name, and a label on top would
   * silently replace it.
   *
   * Both arrows go through here so the two cannot drift apart — the disabled
   * class, the data attribute and the label rule are stated once.
   */
  const renderArrow = (
    {
      direction, content, icon, iconProps, label, disabled, target,
    }: {
      direction: 'prev' | 'next';
      content: ReactNode;
      icon: string;
      iconProps?: Partial<ComponentProps<typeof DIcon>>;
      label: string;
      disabled: boolean;
      target: number;
    },
  ) => (
    <li className={classNames('page-item', 'page-item-arrow', { disabled })} data-nav>
      <button
        type="button"
        className="page-link"
        data-direction={direction}
        {...content === undefined && { 'aria-label': label }}
        disabled={disabled}
        onClick={() => goTo(target)}
      >
        {content === undefined ? <DIcon icon={icon} {...iconProps} /> : content}
      </button>
    </li>
  );

  const renderPage = (value: number) => {
    const isCurrent = value === page;
    const content: ReactNode = value;
    const shared = {
      className: 'page-link',
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
        /*
         * `pagination-sm` / `pagination-lg` rather than a `data-size`: those are
         * the hooks `base/_pagination.scss` already reads, and Bootstrap's own
         * pagination uses them too.
         */
        className={classNames(
          'pagination',
          { [`pagination-${size}`]: !!size },
          className,
        )}
      >
        {arrows && (
          renderArrow({
            direction: 'prev',
            content: prevContent,
            icon: chevronLeft,
            iconProps: iconArrowLeft,
            label: i18n.previous,
            disabled: page <= 1,
            target: page - 1,
          })
        )}

        {items.map((item, index) => (typeof item === 'number' ? (
          /*
           * `.active` on the item as well as `aria-current` on the link.
           * The attribute is what a screen reader reads; the class is what the
           * stylesheet has always keyed off, including a consumer's own.
           */
          <li
            key={`page-${item}`}
            className={classNames('page-item', { active: item === page })}
          >
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
            className="page-item"
            data-ellipsis
            aria-hidden="true"
          >
            <span className="page-link">…</span>
          </li>
        )))}

        {arrows && (
          renderArrow({
            direction: 'next',
            content: nextContent,
            icon: chevronRight,
            iconProps: iconArrowRight,
            label: i18n.next,
            disabled: page >= total,
            target: page + 1,
          })
        )}
      </ul>
    </nav>
  );
}
