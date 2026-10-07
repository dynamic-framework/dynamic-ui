import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
} from 'react';
import {
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  shift,
  size,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';

import type { ParsedCountry } from 'react-international-phone';

import DIcon from '../DIcon';
import countryFlag from './countryFlag';
import orderCountries, { preferredKeyOf } from './orderCountries';
import { useSelect } from '../DSelect/useSelect';

import { useDContext } from '../../contexts';
import { nearestOpenDialog } from '../../utils';
import type { DSelectOption } from '../DSelect/types';

export type DCountrySelectI18n = {
  /** Announced on the trigger, with the current country appended. */
  label: string;
  /** Placeholder of the search field inside the panel. */
  search: string;
  /** Shown in the list when the query matches nothing. */
  empty: string;
};

export const DEFAULT_COUNTRY_SELECT_I18N: DCountrySelectI18n = {
  label: 'Country',
  search: 'Search a country',
  empty: 'No countries found',
};

type Props = {
  countries: ParsedCountry[];
  selected: string;
  onSelect: (iso2: string) => void;
  disabled?: boolean;
  i18n?: Partial<DCountrySelectI18n>;
  /**
   * ISO codes pinned to the top of the list, in the order given.
   *
   * A list of 217 countries alphabetised is wrong for almost every product: a
   * Chilean bank's readers pick Chile, and a handful of neighbours, almost
   * every time.
   */
  preferredCountries?: string[];
  /** Height cap for the list, in pixels. */
  maxMenuHeight?: number;
};

/**
 * Matches a country by name, by dial code, or by ISO code.
 *
 * Three needles rather than one because they are three different ways a reader
 * arrives at the field. The name is the obvious one. The dial code is what
 * somebody checking a number already written down has in front of them — and
 * it is typed with or without the `+`, so both find it. The ISO code is how
 * `cl` finds Chile, which substring matching on the name never would: "chile"
 * does not contain "cl".
 *
 * Exported so the three cases are testable without opening a menu.
 */
export function matchCountry(option: DSelectOption<string>, query: string): boolean {
  const needle = query.trim().replace(/^\+/, '').toLowerCase();
  if (!needle) return true;

  const fold = (text: string) => text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

  /*
   * Accent folding is not decoration in a Spanish-language product: without
   * it, typing "mexico" does not find "México" and the list reads as empty.
   */
  if (fold(option.label).includes(fold(needle))) return true;

  const dialCode = String(option.dialCode ?? '');
  const iso2 = String(option.value);
  return dialCode.startsWith(needle) || iso2.startsWith(needle);
}

/**
 * The country picker: a trigger showing the flag and dial code, and a
 * searchable list of countries.
 *
 * ## Why not the library's `CountrySelector`
 *
 * Two reasons, and neither is about the logic:
 *
 * - it renders `react-international-phone-*` class names and ships a
 *   stylesheet nothing in this build imports, so the control came out with no
 *   styles at all;
 * - it draws each flag as an `<img>` from a CDN, and it mounts the whole list
 *   from the first render with `display: none` — which does not stop a
 *   download. 217 requests per field, before anyone opens anything.
 *
 * The library's DATA is the valuable part and is kept: the country list, the
 * dial codes, the format masks, and `usePhoneInput` for the typing. Only the
 * chrome is ours.
 *
 * ## Why `useSelect` and not a native `<select>`
 *
 * A native `<select>` was the first attempt here and it was a regression: a
 * list of 217 countries needs a search field and the flags need to be visible
 * while choosing, and a `<select>` can do neither — its options are text.
 *
 * `useSelect` is `DSelect`'s engine, so this inherits the ARIA 1.2 combobox
 * pattern, the roving `aria-activedescendant`, the arrow and typeahead
 * handling, and the accent-insensitive filter, all of which are already under
 * test there. What is bespoke is the chrome: the trigger is a small affordance
 * inside an input group rather than a full-width control, which is the one
 * thing `DSelect` itself cannot be.
 */
export default function DCountrySelect({
  countries,
  selected,
  onSelect,
  disabled = false,
  i18n,
  preferredCountries,
  maxMenuHeight = 280,
}: Props) {
  const { iconMap: { chevronDown, check, input: { search: searchIcon } } } = useDContext();
  const text = { ...DEFAULT_COUNTRY_SELECT_I18N, ...i18n };

  const id = useId();
  const listId = `${id}-list`;
  const searchRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  /*
   * Built once, not per render: the parent re-renders on every keystroke in
   * the phone field, and this list is 217 entries long and cannot have
   * changed. Keyed on the joined codes rather than on the array, because
   * `preferredCountries={['cl', 'us']}` is written inline at almost every call
   * site and so has a new identity on every render of the consumer.
   */
  const preferredKey = preferredKeyOf(preferredCountries);
  const items = useMemo<Array<DSelectOption<string>>>(() => {
    const preferred = preferredKey ? preferredKey.split('|') : [];

    return orderCountries(countries, preferred).map((country) => ({
      value: country.iso2,
      label: country.name,
      dialCode: country.dialCode,
    }));
  }, [countries, preferredKey]);

  const handleChange = useCallback((value: string | string[] | null) => {
    if (typeof value === 'string') onSelect(value);
  }, [onSelect]);

  const {
    open, setOpen, query, search, setQuery,
    activeIndex, setActiveIndex, matching, onKeyDown,
  } = useSelect<string>({
    items,
    multi: false,
    searchable: true,
    disabled,
    closeOnSelect: true,
    value: selected,
    onChange: handleChange,
    filterOption: matchCountry,
  });

  /* --- positioning ------------------------------------------------------- */

  const {
    refs, floatingStyles, context, isPositioned,
  } = useFloating({
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    placement: 'bottom-start',
    middleware: [
      offset(4),
      flip({ padding: 8 }),
      shift({ padding: 8 }),
      size({
        padding: 8,
        apply({ elements, availableHeight }) {
          /*
           * As wide as the FIELD, not as the trigger.
           *
           * The trigger is a flag and a dial code — about seventy pixels, far
           * too narrow for "United States Minor Outlying Islands". Matching
           * the input group instead makes the panel line up with the field it
           * belongs to, which is where a reader expects a menu to be, and it
           * needs no width token: a component token may only alias the
           * semantic layer, and there is no semantic token for "as wide as a
           * phone field".
           */
          const field = elements.reference instanceof Element
            ? elements.reference.parentElement
            : null;

          Object.assign(elements.floating.style, {
            maxHeight: `${Math.min(availableHeight, maxMenuHeight)}px`,
            ...field && { minWidth: `${field.getBoundingClientRect().width}px` },
          });
        },
      }),
    ],
  });

  const dismiss = useDismiss(context, { escapeKey: false });
  const { getFloatingProps } = useInteractions([dismiss]);

  /*
   * A panel on `document.body` renders BEHIND an open `DModal`, because
   * `showModal()` puts the dialog in the top layer and the top layer paints
   * above the whole document whatever `z-index` says. A phone field inside a
   * modal is the common case for a bank, not the edge.
   */
  const portalRoot = open
    ? nearestOpenDialog(refs.reference.current as Element | null)
    : undefined;

  /* --- focus and query ---------------------------------------------------- */

  /**
   * Opening clears the query and moves focus into the search field; closing
   * returns it to the trigger.
   *
   * The query has to be cleared explicitly: `useSelect` puts the chosen label
   * in it when a single select closes, which is right when the input IS the
   * control and wrong here, where the search field is a separate thing inside
   * the panel. Left alone it would open pre-filled with "Chile".
   */
  useEffect(() => {
    if (!open) return;
    setQuery('');
  }, [open, setQuery]);

  /**
   * Focus waits for floating-ui to have measured.
   *
   * The panel is `visibility: hidden` until then, so it does not paint at the
   * document's top-left on its way here — and a `visibility: hidden` element
   * cannot take focus, so calling `focus()` on the frame the panel mounts is
   * a no-op and focus stays on the trigger. Every arrow key then goes to the
   * button instead of the search field.
   */
  useEffect(() => {
    if (!open || !isPositioned) return;
    searchRef.current?.focus();
  }, [open, isPositioned]);

  /**
   * Keeps the highlighted country in view by scrolling THE LIST, and nothing
   * else.
   *
   * `scrollIntoView` scrolls every ancestor, and this list lives in a portal —
   * on the frame it mounts, floating-ui has not positioned it yet, so it sits
   * at the document's top-left and asking the browser to bring that into view
   * scrolls the page to the top the moment the picker is opened.
   */
  useEffect(() => {
    if (!open || activeIndex < 0) return;
    const list = listRef.current;
    const active = list?.querySelector<HTMLElement>('[data-active]');
    if (!list || !active) return;

    const listBox = list.getBoundingClientRect();
    const optionBox = active.getBoundingClientRect();

    if (optionBox.top < listBox.top) {
      list.scrollTop -= listBox.top - optionBox.top;
    } else if (optionBox.bottom > listBox.bottom) {
      list.scrollTop += optionBox.bottom - listBox.bottom;
    }
  }, [activeIndex, open]);

  const closeAndReturnFocus = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, [setOpen]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    /*
     * Escape and Tab are handled here rather than in the engine because only
     * this component knows where focus should land: the engine closes the
     * menu, and focus would be left on a search field that no longer exists.
     */
    if (event.key === 'Escape') {
      event.preventDefault();
      closeAndReturnFocus();
      return;
    }
    if (event.key === 'Tab') {
      setOpen(false);
      return;
    }
    onKeyDown(event);
  }, [closeAndReturnFocus, onKeyDown, setOpen]);

  /* --- rendering ---------------------------------------------------------- */

  const current = useMemo(
    () => countries.find((country) => country.iso2 === selected),
    [countries, selected],
  );
  const optionId = (index: number) => `${id}-option-${index}`;

  return (
    <div className="df-input-group-addon df-phone-country" ref={refs.setReference}>
      <button
        ref={triggerRef}
        type="button"
        className="df-phone-trigger"
        /*
         * `dialog` rather than `listbox`: the panel holds a search field as
         * well as the list, so what opens is not a listbox. The combobox
         * inside it is what owns the list.
         */
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={`${text.label}: ${current?.name ?? selected}`}
        disabled={disabled}
        onClick={() => setOpen(!open)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        {/*
          * The flag is decoration beside a control that already has a name.
          * Announcing "flag of Chile" before it would make a reader hear the
          * country twice, and on Windows — which ships no flag glyphs — it
          * would announce two letters in boxes.
          */}
        <span className="df-phone-flag" aria-hidden="true">
          {countryFlag(selected)}
        </span>
        <span className="df-phone-dial" aria-hidden="true">
          {current ? `+${current.dialCode}` : ''}
        </span>
        <DIcon icon={chevronDown} className="df-phone-chevron" />
      </button>

      {open && (
        <FloatingPortal root={portalRoot}>
          <div
            ref={refs.setFloating}
            role="dialog"
            aria-label={text.label}
            className="df-phone-menu"
            // Hidden for the one frame before floating-ui has measured, so the
            // panel never paints at the document's top-left on its way here.
            style={{ ...floatingStyles, visibility: isPositioned ? 'visible' : 'hidden' }}
            {...getFloatingProps()}
          >
            <div className="df-phone-search">
              <DIcon icon={searchIcon} className="df-phone-search-icon" />
              <input
                ref={searchRef}
                type="text"
                role="combobox"
                className="df-phone-search-input"
                placeholder={text.search}
                aria-label={text.search}
                aria-expanded
                aria-controls={listId}
                aria-autocomplete="list"
                {...activeIndex >= 0 && matching[activeIndex] && {
                  'aria-activedescendant': optionId(activeIndex),
                }}
                value={query}
                onChange={(event) => search(event.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>

            <ul
              ref={listRef}
              id={listId}
              role="listbox"
              className="df-phone-list"
              aria-label={text.label}
            >
              {matching.length === 0 && (
                <li className="df-phone-empty" role="presentation">{text.empty}</li>
              )}
              {matching.map((option, index) => {
                const chosen = option.value === selected;

                return (
                  <li
                    key={option.value}
                    id={optionId(index)}
                    role="option"
                    className="df-phone-option"
                    aria-selected={chosen}
                    {...index === activeIndex && { 'data-active': '' }}
                    /*
                     * `onMouseDown` with `preventDefault`, and no `onClick`:
                     * a click blurs the search field first, and the blur
                     * closes the panel — so the row is gone before its own
                     * click handler runs and the pick is lost. Matching
                     * `DSelect`, which solved the same race the same way.
                     */
                    onMouseDown={(event) => {
                      event.preventDefault();
                      onSelect(option.value);
                      closeAndReturnFocus();
                    }}
                    onMouseMove={() => setActiveIndex(index)}
                  >
                    <span className="df-phone-option-flag" aria-hidden="true">
                      {countryFlag(option.value)}
                    </span>
                    <span className="df-phone-option-name">{option.label}</span>
                    <span className="df-phone-option-dial">
                      {`+${String(option.dialCode ?? '')}`}
                    </span>
                    {chosen && <DIcon icon={check} className="df-phone-option-check" />}
                  </li>
                );
              })}
            </ul>
          </div>
        </FloatingPortal>
      )}
    </div>
  );
}
