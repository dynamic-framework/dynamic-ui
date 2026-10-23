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
  size as sizeMiddleware,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';

import type { ReactNode } from 'react';

import DIcon from '../DIcon';
import DFormLabel from '../internal/DFormLabel';
import { useSelect } from './useSelect';
import { DEFAULT_SELECT_I18N, flattenOptions, isGrouped } from './types';

import { useDContext } from '../../contexts';
import hasLabelContent from '../../utils/hasLabelContent';
import isTextLabel from '../../utils/isTextLabel';
import nearestOverlayRoot from '../../utils/nearestOverlayRoot';
import warnLabelUsage from '../../utils/warnLabelUsage';

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
  /**
   * The label of the control. Any node is accepted, so it can carry a link, an
   * info trigger or other markup.
   *
   * Text doubles as the control's accessible name. A richer label does not, so
   * pass `ariaLabel`, or `ariaLabelledBy` pointing at a text element, alongside
   * it; a development-only warning says so when both are missing. A rich label
   * also does not fit `floatingLabel`, whose layout animates a single line of
   * text.
   */
  label?: ReactNode;
  /**
   * Accessible name of the control. It outranks the `label` in the accessible
   * name computation, so use it to name a control with a non-text label or to
   * replace the name a text label gives.
   */
  ariaLabel?: string;
  /** Names the control from an element already on the page. */
  ariaLabelledBy?: string;
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
  /**
   * Class for the menu.
   *
   * The menu is portalled, so it is not a descendant of the control and
   * `className` cannot reach it: a consumer styling the list needs a handle of
   * its own rather than a selector that will never match.
   */
  menuClassName?: string;
  i18n?: Partial<DSelectI18n>;
};

/**
 * A combobox: a text box that filters a list, with one or many selections.
 *
 * ## Why it is not `react-select` any more
 *
 * It used to wrap `react-select`, and the wrapper was mostly an adapter: an
 * `Omit` of six props so they could be renamed, a `styles` object overriding
 * the library's inline CSS back out again, and eleven exported sub-components
 * whose only job was to let an option carry an icon or an emoji. The markup
 * belonged to the library, which meant the design system could not decide what
 * an option was made of — only what it was painted with.
 *
 * ## Why the class names say `combobox`
 *
 * `.d-select` was the old wrapper's block, and every `.d-select__*` below it
 * was react-select's own markup. The element names no longer exist, so reusing
 * the block would leave a consumer's overrides applying to half a control.
 * Naming it for its ARIA pattern says which is which — and keeps it clear of
 * `DInputSelect`, which wraps the native `<select>`.
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
    ariaLabel,
    ariaLabelledBy,
    hint,
    placeholder,
    floatingLabel = false,
    size: sizeProp,
    filterOption,
    renderOption,
    maxMenuHeight = 280,
    menuClassName,
    i18n: i18nProp,
    className,
    style,
    dataAttributes,
  }: Props<Value>,
) {
  const innerId = useId();
  const id = idProp || innerId;
  const listId = `${id}Listbox`;

  const i18n = useMemo(() => ({ ...DEFAULT_SELECT_I18N, ...i18nProp }), [i18nProp]);
  const { iconMap: { chevronDown, x, check } } = useDContext();

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const select = useSelect<Value>({
    items: options,
    multi,
    searchable,
    /*
     * `disabled`, and deliberately NOT `disabled || loading`.
     *
     * The two states are not the same thing. `disabled` is inert: nothing
     * works. `loading` is busy but live — and for a combobox with `onSearch`
     * it is busy BECAUSE the user is typing, so folding it into `disabled`
     * stopped the search on its own first keystroke.
     */
    disabled,
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
      sizeMiddleware({
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
    if (disabled) return;
    inputRef.current?.focus();
    setOpen(true);
  }, [disabled, setOpen]);

  /* --- rendering ---------------------------------------------------------- */

  /*
   * A menu on `document.body` renders BEHIND an open `DModal`: the modal sits
   * at `$zindex-modal` and a menu at `$zindex-dropdown` is below it, and the
   * modal's entrance `transform` makes it the containing block for anything
   * positioned inside it. A select inside a modal is not an edge case — a
   * filter panel is where most of them live.
   *
   * Resolved during the render that opens the menu, so it mounts in the right
   * place the first time rather than moving after an effect.
   */
  const portalRoot = open
    ? nearestOverlayRoot(refs.reference.current as Element | null)
    : undefined;

  const optionId = (index: number) => `${id}Option${index}`;

  const defaultRenderOption = (option: DSelectOption<Value>): ReactNode => (
    <>
      {option.emoji && <span className="d-combobox-option-emoji" aria-hidden="true">{option.emoji}</span>}
      {option.icon && <DIcon icon={option.icon} className="d-combobox-option-icon" />}
      <span className="d-combobox-option-text">
        <span className="d-combobox-option-label">{option.label}</span>
        {option.description && (
          <span className="d-combobox-option-description">{option.description}</span>
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
      /*
       * The rule reads a click handler as what MAKES a non-interactive element
       * interactive, and so as owing the keyboard an equivalent. The
       * equivalent exists; it is just not here. Focus never moves to an
       * option — the input keeps it and points at the active one with
       * `aria-activedescendant` — so a key listener on this `<li>` could never
       * fire. Enter and the arrows live on the input, in `useSelect`.
       */
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <li
        key={String(option.value)}
        id={optionId(index)}
        role="option"
        className="d-combobox-option"
        aria-selected={selected}
        {...option.disabled && { 'aria-disabled': true }}
        {...active && { 'data-active': '' }}
        /*
         * The press and the activation are two different jobs, on two
         * different events.
         *
         * `onMouseDown` only prevents the default. Pressing on an option would
         * otherwise blur the input, and the blur closes the menu and takes the
         * option out from under the pointer before the click can land.
         *
         * The commit is on `onClick`, which is the event that means "this was
         * activated". Doing it on `onMouseDown` got both ends wrong: assistive
         * technology activating an option synthesizes a click with no mouse
         * events in front of it, so a screen reader user pressed an option and
         * nothing happened; and `mousedown` fires for every button, so a
         * right-click selected before the context menu had even opened.
         * `click` is primary-button only — an auxiliary button fires
         * `auxclick` instead.
         */
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => commit(option)}
        onMouseMove={() => { if (!option.disabled) setActiveIndex(index); }}
      >
        {renderOption
          ? renderOption(option, { selected, active, disabled: !!option.disabled })
          : defaultRenderOption(option)}
        {multi && selected && (
          <DIcon icon={check} className="d-combobox-option-check" />
        )}
      </li>
    );
  };

  const labelComponent = hasLabelContent(label) && (
    <DFormLabel htmlFor={id}>{label}</DFormLabel>
  );

  if (process.env.NODE_ENV !== 'production') {
    warnLabelUsage({
      component: 'DSelect',
      label,
      hasAccessibleName: !!ariaLabel || !!ariaLabelledBy,
      accessibleNameProp: 'ariaLabel',
      floatingLabel,
    });
  }

  /**
   * The name the control announces.
   *
   * A label or an `ariaLabelledBy` already names it, and a generic
   * `aria-label` on top would outrank both and make every select on the page
   * announce the same thing. Without either there is nothing else, so the
   * fallback runs rather than leaving the control nameless.
   */
  const resolvedAriaLabel = ariaLabel
    ?? (hasLabelContent(label) || ariaLabelledBy ? undefined : i18n.ariaLabel);

  /**
   * The one selected value, for the hidden input a single select posts.
   *
   * Read off the set rather than off `selectedOptions` for the same reason the
   * input below is: whether the value can be given a label has nothing to do
   * with whether it should be submitted.
   */
  const [onlySelectedValue] = selectedValues;

  /**
   * The menu is a separate element from the control, so it is named
   * separately: a listbox announced on its own as "listbox" tells a screen
   * reader user nothing about which field they are in.
   *
   * Only a name that is already text can be reused here — `aria-label` takes a
   * string, and a `label` carrying markup has no string form. That case falls
   * through to `ariaLabelledBy`, which is the prop the warning above asks for.
   */
  const listAriaLabel = resolvedAriaLabel
    ?? (isTextLabel(label) ? String(label) : undefined);

  return (
    <div
      className={classNames(
        'd-combobox',
        {
          [`d-combobox-${sizeProp}`]: !!sizeProp,
          'd-combobox-floating': floatingLabel,
          'd-combobox-filled': hasValue,
          'is-invalid': invalid,
          'is-valid': valid,
          disabled,
        },
        className,
      )}
      style={style}
      {...dataAttributes}
    >
      {!floatingLabel && labelComponent}

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
        className="d-combobox-control"
        onMouseDown={(event) => {
          if ((event.target as HTMLElement).closest('button')) return;
          event.preventDefault();
          focusInput();
        }}
      >
        {!multi && selectedOptions[0]?.emoji && (
          <span aria-hidden="true">{selectedOptions[0].emoji}</span>
        )}
        {!multi && selectedOptions[0]?.icon && (
          <DIcon icon={selectedOptions[0].icon} />
        )}
        {multi && selectedOptions.map((option) => (
          <span key={String(option.value)} className="d-combobox-tag">
            {option.emoji && <span aria-hidden="true">{option.emoji}</span>}
            {option.icon && <DIcon icon={option.icon} />}
            {option.label}
            <button
              type="button"
              className="d-combobox-tag-remove"
              aria-label={`${i18n.remove} ${option.label}`}
              disabled={disabled}
              onClick={() => remove(option.value)}
            >
              <DIcon icon={x} />
            </button>
          </span>
        ))}

        <input
          ref={inputRef}
          id={id}
          className="d-combobox-input"
          role="combobox"
          type="text"
          autoComplete="off"
          // `list` autocomplete tells a screen reader that typing filters a
          // list rather than completing the text inline.
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls={listId}
          {...open && activeIndex >= 0 && { 'aria-activedescendant': optionId(activeIndex) }}
          {...resolvedAriaLabel && { 'aria-label': resolvedAriaLabel }}
          {...ariaLabelledBy && { 'aria-labelledby': ariaLabelledBy }}
          {...hint && { 'aria-describedby': `${id}Hint` }}
          {...invalid && { 'aria-invalid': true }}
          // Not searchable means the box is still the combobox — it just does
          // not take text. Read-only keeps a mobile keyboard from opening.
          readOnly={!searchable}
          disabled={disabled}
          {...loading && { 'aria-busy': true }}
          value={query}
          placeholder={floatingLabel && !hasValue ? ' ' : (placeholder ?? i18n.placeholder)}
          onChange={(event) => search(event.target.value)}
          onKeyDown={onKeyDown}
          onFocus={() => setOpen(true)}
        />

        {floatingLabel && labelComponent}

        {loading && (
          <span
            className="spinner-border spinner-border-sm d-combobox-spinner"
            role="status"
            data-testid="loading-spinner"
          >
            <span className="visually-hidden">{i18n.loading}</span>
          </span>
        )}

        {clearable && hasValue && !loading && (
          <button
            type="button"
            className="d-combobox-clear"
            aria-label={i18n.clear}
            disabled={disabled}
            onClick={() => { clear(); inputRef.current?.focus(); }}
          >
            <DIcon icon={x} />
          </button>
        )}

        <span className="d-combobox-indicator" aria-hidden="true">
          <DIcon icon={chevronDown} />
        </span>
      </div>

      {open && (
        <FloatingPortal root={portalRoot}>
          <div
            ref={refs.setFloating}
            className={classNames('d-combobox-menu', menuClassName)}
            // Hidden for the one frame before floating-ui has measured, so the
            // menu never paints at the document's top-left on its way to the
            // control.
            style={{ ...floatingStyles, visibility: isPositioned ? 'visible' : 'hidden' }}
            {...getFloatingProps({
              /*
               * A press inside the menu is not an outside press — but the menu
               * is in a portal, so to anything watching `document` it looks
               * like one.
               *
               * `react-datepicker` dismisses its popup from a `mousedown`
               * listener on `document`, and the header's month and year
               * dropdowns are `DSelect`s living inside that popup: pressing an
               * option unmounted the calendar with the option still under the
               * pointer, so the click that would have committed the month or
               * year never reached it. The option's `preventDefault` is no
               * help — it stops the focus change, not the propagation.
               *
               * Its documented escape hatch cannot do it either:
               * `react-datepicker-ignore-onclickoutside` is matched against the
               * event's exact target, with no walk up the ancestors, and the
               * target here is whatever leaf of the option was pressed.
               *
               * Stopping the press at the menu is the general answer rather
               * than a datepicker patch: it is true of every outside-press
               * handler that a press landing in this menu is not outside
               * anything. The portal stays where it is, so overlay stacking is
               * untouched.
               */
              onMouseDown: (event) => event.stopPropagation(),
            })}
          >
            <ul
              ref={listRef}
              id={listId}
              role="listbox"
              className="d-combobox-list"
              {...multi && { 'aria-multiselectable': true }}
              {...listAriaLabel && { 'aria-label': listAriaLabel }}
              {...!listAriaLabel && ariaLabelledBy && { 'aria-labelledby': ariaLabelledBy }}
            >
              {matching.length === 0 && (
                <li className="d-combobox-empty" role="presentation">{i18n.empty}</li>
              )}

              {isGrouped(options)
                ? options.map((group) => {
                  const visible = group.options.filter((option) => matching.includes(option));
                  if (!visible.length) return null;
                  return (
                    <li key={group.label} role="presentation" className="d-combobox-group-item">
                      <span className="d-combobox-group-label" role="presentation">
                        {group.label}
                      </span>
                      <ul role="group" aria-label={group.label} className="d-combobox-group">
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
      <span className="visually-hidden" aria-live="polite">
        {loading && i18n.loading}
        {!loading && open && `${matching.length} ${i18n.resultsAvailable}`}
      </span>

      {/*
        * One hidden input per value, so a multi-select posts like a real one.
        *
        * Serialised from `selectedValues`, NOT from `selectedOptions`.
        *
        * `selectedOptions` holds only what the current option list can put a
        * name to, which is a rendering concern and not a data one. A remote
        * search replaces that list, and the control's value then dropped out of
        * the form — quietly, with no `onChange` to say it had gone, and with
        * the single branch posting an empty string over it. A value nobody can
        * label is still a value, and a form that shows one thing and submits
        * another is the worst way to find that out.
        *
        * Omitted entirely while disabled, the way a browser leaves a disabled
        * control out of a submission.
        */}
      {name && !disabled && (multi
        ? Array.from(selectedValues, (selectedValue) => (
          <input
            key={String(selectedValue)}
            type="hidden"
            name={`${name}[]`}
            value={String(selectedValue)}
          />
        ))
        : <input type="hidden" name={name} value={onlySelectedValue ?? ''} />)}

      {hint && <div className="form-text" id={`${id}Hint`}>{hint}</div>}
    </div>
  );
}

export { flattenOptions };
