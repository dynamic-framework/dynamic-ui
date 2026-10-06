import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
} from 'react';
import classNames from 'classnames';
import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  shift,
  size,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';

import type { ReactNode } from 'react';

import DIcon from '../DIcon';
import { useSelect } from './useSelect';
import { DEFAULT_SELECT_I18N, flattenOptions, isGrouped } from './types';

import { useDContext } from '../../contexts';
import type { BaseProps, ComponentSize } from '../interface';
import type {
  DSelectI18n,
  DSelectItems,
  DSelectOption,
  DSelectRenderOption,
} from './types';

export type Props<Value = string> = BaseProps & {
  /** Flat options, or groups of them. */
  options: DSelectItems<Value>;
  /** Controlled value. An array when `multi`. */
  value?: Value | Value[] | null;
  defaultValue?: Value | Value[] | null;
  onChange?: (value: Value | Value[] | null, option: DSelectOption<Value> | null) => void;
  /** Fires on every keystroke in the search box, for loading options remotely. */
  onSearch?: (query: string) => void;

  /** Choose several. The chosen ones appear as removable tags. */
  multi?: boolean;
  /** A search box inside the control. On by default — turn it off for short lists. */
  searchable?: boolean;
  clearable?: boolean;
  loading?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  valid?: boolean;
  /** Closes the menu after a pick. Defaults to true for single, false for multi. */
  closeOnSelect?: boolean;
  /** Opens on mount. For documentation and tests, not for pages. */
  defaultOpen?: boolean;

  id?: string;
  /** Posts the value with a form, as a hidden input per selected value. */
  name?: string;
  label?: string;
  hint?: string;
  placeholder?: string;
  floatingLabel?: boolean;
  size?: ComponentSize;

  /** Replaces the default substring match. */
  filterOption?: (option: DSelectOption<Value>, query: string) => boolean;
  /** Replaces an option's whole body. The default renders icon, label and description. */
  renderOption?: DSelectRenderOption<Value>;
  /** The menu's height cap, in pixels. It also flips when there is no room. */
  maxMenuHeight?: number;
  i18n?: Partial<DSelectI18n>;
};

/**
 * A combobox: a text box that filters a list, with one or many selections.
 *
 * ## Why it is not `react-select` any more
 *
 * 2.x wrapped `react-select`, and the wrapper was mostly an adapter: an `Omit`
 * of six props so they could be renamed, a `styles` object overriding the
 * library's inline CSS back out again, and eleven exported sub-components whose
 * only job was to let an option carry an icon or an emoji. The markup belonged
 * to the library, which meant the design system could not decide what an option
 * was made of — only what it was painted with.
 *
 * ## Why the class names say `combobox`
 *
 * `.df-select` is already taken, by `DInputSelect`, which wraps the native
 * element. These are two different controls that happen to share a word: one is
 * a `<select>`, this is the ARIA combobox pattern. Naming it for the pattern
 * avoids the collision and says which is which.
 *
 * ## The accessibility is the design
 *
 * Focus never leaves the input. The keyboard cursor is a separate thing the
 * input points at with `aria-activedescendant`, which is what lets someone type
 * and arrow at the same time, and what keeps the control usable with a screen
 * reader's browse mode off.
 */
export default function DSelect<Value extends string | number = string>(
  {
    options,
    value,
    defaultValue,
    onChange,
    onSearch,
    multi = false,
    searchable = true,
    clearable = false,
    loading = false,
    disabled = false,
    invalid = false,
    valid = false,
    closeOnSelect,
    defaultOpen = false,
    id: idProp,
    name,
    label,
    hint,
    placeholder,
    floatingLabel = false,
    size: sizeProp,
    filterOption,
    renderOption,
    maxMenuHeight = 280,
    i18n: i18nProp,
    className,
    style,
    dataAttributes,
  }: Props<Value>,
) {
  const innerId = useId();
  const id = idProp || innerId;
  const listId = `${id}-listbox`;

  const i18n = useMemo(() => ({ ...DEFAULT_SELECT_I18N, ...i18nProp }), [i18nProp]);
  const { iconMap: { chevronDown, x, check } } = useDContext();

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const select = useSelect<Value>({
    items: options,
    multi,
    searchable,
    disabled: disabled || loading,
    closeOnSelect: closeOnSelect ?? !multi,
    defaultValue,
    value,
    onChange,
    onSearch,
    filterOption,
    defaultOpen,
  });

  const {
    open, setOpen, query, search, activeIndex, setActiveIndex,
    matching, selectedValues, selectedOptions, hasValue, commit, remove, clear, onKeyDown,
  } = select;

  /* --- positioning ------------------------------------------------------- */

  const {
    refs, floatingStyles, context, isPositioned,
  } = useFloating({
    open,
    onOpenChange: setOpen,
    // Recomputes on scroll and resize. Without it a menu stays where it was
    // opened while the page moves underneath it.
    whileElementsMounted: autoUpdate,
    placement: 'bottom-start',
    middleware: [
      offset(4),
      flip({ padding: 8 }),
      shift({ padding: 8 }),
      size({
        padding: 8,
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            // The menu matches the control's width, and never grows past what
            // is actually on screen — a list of forty options should scroll,
            // not run off the bottom of the window.
            minWidth: `${rects.reference.width}px`,
            maxHeight: `${Math.min(availableHeight, maxMenuHeight)}px`,
          });
        },
      }),
    ],
  });

  // Outside clicks close the menu; Escape is handled in the engine so it can
  // also decide what Escape means when the menu is shut.
  const dismiss = useDismiss(context, { escapeKey: false });
  const { getFloatingProps } = useInteractions([dismiss]);

  /* --- keeping the cursor visible ---------------------------------------- */

  /**
   * Keeps the highlighted option in view by scrolling THE MENU, and nothing
   * else.
   *
   * `scrollIntoView` was the obvious call and the wrong one: it scrolls every
   * ancestor, and the menu lives in a portal on `document.body`. On
   * the frame it mounts, floating-ui has not positioned it yet, so it sits at
   * the document's top-left — and asking the browser to bring that into view
   * scrolls the whole page back to the top the moment the control is clicked.
   *
   * Adjusting `scrollTop` by the overhang does the one thing that was wanted
   * and cannot touch the document at all.
   */
  useEffect(() => {
    if (!open || activeIndex < 0) return;
    const menu = refs.floating.current;
    const active = listRef.current?.querySelector<HTMLElement>('[data-active]');
    if (!menu || !active) return;

    const menuBox = menu.getBoundingClientRect();
    const optionBox = active.getBoundingClientRect();

    if (optionBox.top < menuBox.top) {
      menu.scrollTop -= menuBox.top - optionBox.top;
    } else if (optionBox.bottom > menuBox.bottom) {
      menu.scrollTop += optionBox.bottom - menuBox.bottom;
    }
  }, [activeIndex, open, refs.floating]);

  const focusInput = useCallback(() => {
    if (disabled || loading) return;
    inputRef.current?.focus();
    setOpen(true);
  }, [disabled, loading, setOpen]);

  /* --- rendering ---------------------------------------------------------- */

  const optionId = (index: number) => `${id}-option-${index}`;

  const defaultRenderOption = (option: DSelectOption<Value>): ReactNode => (
    <>
      {option.emoji && <span className="df-combobox-option-emoji" aria-hidden="true">{option.emoji}</span>}
      {option.icon && <DIcon icon={option.icon} className="df-combobox-option-icon" />}
      <span className="df-combobox-option-text">
        <span className="df-combobox-option-label">{option.label}</span>
        {option.description && (
          <span className="df-combobox-option-description">{option.description}</span>
        )}
      </span>
    </>
  );

  /** One `<li>`, found by its position in the filtered list. */
  const renderItem = (option: DSelectOption<Value>) => {
    const index = matching.indexOf(option);
    const selected = selectedValues.has(option.value);
    const active = index === activeIndex;

    return (
      <li
        key={String(option.value)}
        id={optionId(index)}
        role="option"
        className="df-combobox-option"
        aria-selected={selected}
        {...option.disabled && { 'aria-disabled': true }}
        {...active && { 'data-active': '' }}
        // `onMouseDown` and not `onClick`: a click would blur the input first,
        // which closes the menu and takes the option out from under the cursor.
        onMouseDown={(event) => { event.preventDefault(); commit(option); }}
        onMouseMove={() => { if (!option.disabled) setActiveIndex(index); }}
      >
        {renderOption
          ? renderOption(option, { selected, active, disabled: !!option.disabled })
          : defaultRenderOption(option)}
        {multi && selected && (
          <DIcon icon={check} className="df-combobox-option-check" />
        )}
      </li>
    );
  };

  const selectedValuesList = useMemo(
    () => (Array.isArray(value ?? defaultValue) ? selectedOptions.map((o) => o.value) : []),
    [defaultValue, selectedOptions, value],
  );

  return (
    <div
      className={classNames('df-combobox', className)}
      style={style}
      {...sizeProp && { 'data-size': sizeProp }}
      {...invalid && { 'data-invalid': '' }}
      {...valid && { 'data-valid': '' }}
      {...disabled && { 'data-disabled': '' }}
      {...floatingLabel && { 'data-floating-label': '' }}
      {...hasValue && { 'data-filled': '' }}
      {...dataAttributes}
    >
      {label && !floatingLabel && (
        <label className="df-label" htmlFor={id}>{label}</label>
      )}

      {/*
        * A click anywhere in the box puts the caret in the search field, which
        * is what the whole thing looks like it should do. It is not a control
        * itself — the `<input>` inside it is, and it is what the keyboard and
        * every assistive technology interact with — so the lint rule about
        * interactive non-elements is answered by the input, not by a role here.
        */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        ref={refs.setReference}
        className="df-combobox-control"
        // A click anywhere in the control — on the padding, between the tags —
        // puts the caret in the search box, which is what the whole thing looks
        // like it should do.
        onMouseDown={(event) => {
          if ((event.target as HTMLElement).closest('button')) return;
          event.preventDefault();
          focusInput();
        }}
      >
        {multi && selectedOptions.map((option) => (
          <span key={String(option.value)} className="df-combobox-tag">
            {option.emoji && <span aria-hidden="true">{option.emoji}</span>}
            {option.icon && <DIcon icon={option.icon} />}
            {option.label}
            <button
              type="button"
              className="df-combobox-tag-remove"
              aria-label={`${i18n.remove} ${option.label}`}
              disabled={disabled || loading}
              onClick={() => remove(option.value)}
            >
              <DIcon icon={x} />
            </button>
          </span>
        ))}

        <input
          ref={inputRef}
          id={id}
          className="df-combobox-input"
          role="combobox"
          type="text"
          autoComplete="off"
          // `list` autocomplete tells a screen reader that typing filters a
          // list rather than completing the text inline.
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls={listId}
          {...open && activeIndex >= 0 && { 'aria-activedescendant': optionId(activeIndex) }}
          {...!label && { 'aria-label': i18n.ariaLabel }}
          {...hint && { 'aria-describedby': `${id}-hint` }}
          {...invalid && { 'aria-invalid': true }}
          // Not searchable means the box is still the combobox — it just does
          // not take text. Read-only keeps a mobile keyboard from opening.
          readOnly={!searchable}
          disabled={disabled || loading}
          value={query}
          placeholder={floatingLabel && !hasValue ? ' ' : (placeholder ?? i18n.placeholder)}
          onChange={(event) => search(event.target.value)}
          onKeyDown={onKeyDown}
          onFocus={() => setOpen(true)}
        />

        {floatingLabel && label && (
          <label className="df-label" htmlFor={id}>{label}</label>
        )}

        {loading && (
          <span className="df-spinner" data-size="sm" role="status" aria-label={i18n.loading} />
        )}

        {clearable && hasValue && !loading && (
          <button
            type="button"
            className="df-combobox-clear"
            aria-label={i18n.clear}
            disabled={disabled}
            onClick={() => { clear(); inputRef.current?.focus(); }}
          >
            <DIcon icon={x} />
          </button>
        )}

        <span className="df-combobox-indicator" aria-hidden="true">
          <DIcon icon={chevronDown} />
        </span>
      </div>

      {open && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            className="df-combobox-menu"
            // Hidden for the one frame before floating-ui has measured, so the
            // menu never paints at the document's top-left on its way to the
            // control.
            style={{ ...floatingStyles, visibility: isPositioned ? 'visible' : 'hidden' }}
            {...getFloatingProps()}
          >
            <ul
              ref={listRef}
              id={listId}
              role="listbox"
              className="df-combobox-list"
              {...multi && { 'aria-multiselectable': true }}
              {...label && { 'aria-label': label }}
            >
              {matching.length === 0 && (
                <li className="df-combobox-empty" role="presentation">{i18n.empty}</li>
              )}

              {isGrouped(options)
                ? options.map((group) => {
                  const visible = group.options.filter((option) => matching.includes(option));
                  if (!visible.length) return null;
                  return (
                    <li key={group.label} role="presentation" className="df-combobox-group-item">
                      <span className="df-combobox-group-label" role="presentation">
                        {group.label}
                      </span>
                      <ul role="group" aria-label={group.label} className="df-combobox-group">
                        {visible.map(renderItem)}
                      </ul>
                    </li>
                  );
                })
                : matching.map(renderItem)}
            </ul>
          </div>
        </FloatingPortal>
      )}

      {/*
        * How many options the filter left, announced politely.
        *
        * Without it, typing into a combobox is silent for a screen-reader user:
        * the list changes but nothing says so, and there is no way to tell
        * "still looking" from "nothing matches".
        */}
      <span className="df-sr-only" aria-live="polite">
        {open ? `${matching.length} ${i18n.resultsAvailable}` : ''}
      </span>

      {/* One hidden input per value, so a multi-select posts like a real one. */}
      {name && (multi
        ? selectedValuesList.map((entry) => (
          <input key={String(entry)} type="hidden" name={`${name}[]`} value={String(entry)} />
        ))
        : <input type="hidden" name={name} value={selectedOptions[0]?.value ?? ''} />)}

      {hint && <div className="df-help" id={`${id}-hint`}>{hint}</div>}
    </div>
  );
}

export { flattenOptions };
