import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { flattenOptions } from './types';

import type { DSelectItems, DSelectOption } from './types';

/**
 * The select engine: what is open, what is typed, what is chosen, and what the
 * keyboard does about it.
 *
 * Headless on purpose. Every decision here is about state, and none of it needs
 * to know what a tag or a chevron looks like — which is what will let the same
 * logic drive the framework-free build later without being untangled from JSX
 * first.
 *
 * ## The active option is not the focused element
 *
 * Focus stays on the input the whole time; the keyboard cursor is a separate
 * thing the input points at with `aria-activedescendant`. That is the ARIA 1.2
 * combobox pattern, and it is the reason arrowing through a hundred options
 * does not fire a hundred focus events, and the reason typing keeps working
 * while the cursor is somewhere down the list.
 */

export type UseSelectOptions<Value> = {
  items: DSelectItems<Value>;
  multi: boolean;
  searchable: boolean;
  disabled: boolean;
  closeOnSelect: boolean;
  /** Uncontrolled starting value. Ignored once `value` is given. */
  defaultValue?: Value | Value[] | null;
  value?: Value | Value[] | null;
  onChange?: (value: Value | Value[] | null, option: DSelectOption<Value> | null) => void;
  onSearch?: (query: string) => void;
  filterOption?: (option: DSelectOption<Value>, query: string) => boolean;
  defaultOpen?: boolean;
};

/**
 * Substring, case- and accent-insensitive, across the label and the description.
 *
 * Accent folding matters more than it looks in a Spanish-language product:
 * without it, typing "mexico" does not find "México" and the list appears
 * empty. `normalize('NFD')` splits an accented letter into the letter plus its
 * mark, and the range strips the marks.
 */
function defaultFilter<Value>(option: DSelectOption<Value>, query: string): boolean {
  const fold = (text: string) => text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

  const needle = fold(query);
  return fold(option.label).includes(needle)
    || (!!option.description && fold(option.description).includes(needle));
}

export function useSelect<Value>(
  {
    items,
    multi,
    searchable,
    disabled,
    closeOnSelect,
    defaultValue,
    value: valueProp,
    onChange,
    onSearch,
    filterOption = defaultFilter,
    defaultOpen = false,
  }: UseSelectOptions<Value>,
) {
  const isControlled = valueProp !== undefined;

  const [uncontrolled, setUncontrolled] = useState<Value | Value[] | null>(
    defaultValue ?? (multi ? [] : null),
  );
  const value = isControlled ? valueProp : uncontrolled;

  const [open, setOpenState] = useState(defaultOpen);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);

  const allOptions = useMemo(() => flattenOptions(items), [items]);

  /** Selected values as a set, so "is this one selected" is not a scan. */
  const selectedValues = useMemo(() => {
    if (value === null || value === undefined) return new Set<Value>();
    return new Set<Value>(Array.isArray(value) ? value : [value]);
  }, [value]);

  const selectedOptions = useMemo(
    () => allOptions.filter((option) => selectedValues.has(option.value)),
    [allOptions, selectedValues],
  );

  /**
   * The options the menu is showing.
   *
   * Filtering is skipped entirely while the query equals the selected label:
   * after choosing "Spain" the input holds "Spain", and filtering on it would
   * leave a menu with one option in it the next time the control is opened —
   * which reads as the other choices having disappeared.
   */
  const matching = useMemo(() => {
    const selectedLabel = !multi && selectedOptions.length === 1
      ? selectedOptions[0].label
      : null;
    if (!query || !searchable || query === selectedLabel) return allOptions;
    return allOptions.filter((option) => filterOption(option, query));
  }, [allOptions, filterOption, multi, query, searchable, selectedOptions]);

  /** Index into `matching`, skipping disabled entries. */
  const step = useCallback((from: number, delta: number): number => {
    if (!matching.length) return -1;
    let next = from;
    for (let i = 0; i < matching.length; i += 1) {
      next = (next + delta + matching.length) % matching.length;
      if (!matching[next]?.disabled) return next;
    }
    return -1;
  }, [matching]);

  /**
   * Opening is refused while the control is disabled; CLOSING never is.
   *
   * Refusing both looked symmetrical and was a trap: a control disabled while
   * its menu was open — a form that locks itself on submit, a `loading` that
   * arrives from a fetch — could no longer be told to close, so the menu
   * stayed on screen over a control nobody could use.
   */
  const setOpen = useCallback((next: boolean) => {
    if (next && disabled) return;
    setOpenState(next);
    if (!next) setActiveIndex(-1);
  }, [disabled]);

  /** Being disabled with the menu open closes it rather than stranding it. */
  useEffect(() => {
    if (disabled) setOpen(false);
  }, [disabled, setOpen]);

  /*
   * Every mutation checks the CONTROL's disabled state, not only the option's.
   * The menu is dismissed the moment the control is disabled, so in practice
   * there is nothing left to click — but `commit`, `remove` and `clear` are
   * returned to the component and reachable from an event already in flight,
   * and a disabled control that changes its value is a disabled control in
   * name only.
   */
  const commit = useCallback((option: DSelectOption<Value>) => {
    if (disabled || option.disabled) return;

    let nextValue: Value | Value[] | null;
    if (multi) {
      const current = Array.isArray(value) ? value : [];
      nextValue = current.includes(option.value)
        ? current.filter((entry) => entry !== option.value)
        : [...current, option.value];
    } else {
      nextValue = option.value;
    }

    if (!isControlled) setUncontrolled(nextValue);
    onChange?.(nextValue, option);

    // A multi-select keeps its query so the next pick does not mean retyping;
    // a single one shows what was chosen.
    setQuery(multi ? '' : option.label);
    if (closeOnSelect) setOpen(false);
  }, [closeOnSelect, disabled, isControlled, multi, onChange, setOpen, value]);

  const remove = useCallback((target: Value) => {
    if (disabled) return;
    const current = Array.isArray(value) ? value : [];
    const nextValue = current.filter((entry) => entry !== target);
    if (!isControlled) setUncontrolled(nextValue);
    onChange?.(nextValue, allOptions.find((o) => o.value === target) ?? null);
  }, [allOptions, disabled, isControlled, onChange, value]);

  const clear = useCallback(() => {
    if (disabled) return;
    const nextValue = multi ? [] : null;
    if (!isControlled) setUncontrolled(nextValue);
    onChange?.(nextValue, null);
    setQuery('');
  }, [disabled, isControlled, multi, onChange]);

  const search = useCallback((next: string) => {
    if (disabled) return;
    setQuery(next);
    onSearch?.(next);
    if (!open) setOpen(true);
    /*
     * Aims at the first row, so Enter after typing picks what the user is
     * looking at rather than nothing.
     *
     * Only AIMS: the query has not been applied yet, so the list this would be
     * choosing from is still the previous one — row 0 may be disabled, or may
     * not survive the filter at all. The effect below validates the aim once
     * `matching` has caught up.
     */
    setActiveIndex(0);
  }, [disabled, onSearch, open, setOpen]);

  /**
   * The query shown in the input when nobody is typing.
   *
   * A single select puts the chosen label there — it IS the value, so there is
   * no need for a separate overlay element covering an input, which is how the
   * previous component ended up with a `SingleValue` sub-component per shape.
   */
  useEffect(() => {
    if (open || multi) return;
    setQuery(selectedOptions.length === 1 ? selectedOptions[0].label : '');
  }, [multi, open, selectedOptions]);

  /**
   * Opening puts the cursor on the selection, or on the first option.
   *
   * Unless the keystroke that OPENED the menu already aimed somewhere, which
   * typeahead does: on a non-searchable select, pressing `c` from a closed
   * menu both opens it and targets Chile, in one batch. Overwriting that
   * target here sent the cursor back to the selection and made the keystroke
   * look ignored — press Escape, type `c`, land on nothing.
   */
  useEffect(() => {
    if (!open) return;
    setActiveIndex((current) => {
      if (current >= 0 && !matching[current]?.disabled) return current;
      const selectedIndex = matching.findIndex((option) => selectedValues.has(option.value));
      return selectedIndex >= 0 ? selectedIndex : step(-1, 1);
    });
    // Only when the menu opens: re-running as `matching` changes would drag the
    // cursor back to the selection on every keystroke.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  /**
   * Keeps the cursor on something that can actually be chosen as the list
   * changes under it.
   *
   * Clamping the index to the list's length was not enough. It left the cursor
   * on a row the filter had since disabled — so Enter did nothing even with an
   * enabled match right below — and it left a cursor at `-1`, where an empty
   * result set put it, exactly where it was when options arrived later from a
   * server.
   *
   * Only ever moves an INVALID target: a valid one is the user's, set by an
   * arrow key or by opening on the selection, and must survive a re-render.
   */
  useEffect(() => {
    if (!open) return;
    setActiveIndex((current) => {
      const target = current >= 0 ? matching[current] : undefined;
      if (target && !target.disabled) return current;
      return step(-1, 1);
    });
  }, [matching, open, step]);

  const lastTypedAt = useRef(0);
  const typeahead = useRef('');

  const onKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (disabled) return;

    /*
     * A keystroke confirming a candidate in an input method editor is not a
     * keystroke for the menu.
     *
     * Typing Japanese, Chinese or Korean, Enter accepts the word being
     * composed; acting on it here chose an option while the person was still
     * spelling their query, and closed the menu on them. `isComposing` is the
     * standard signal, `keyCode === 229` the one older browsers give instead.
     */
    if (event.nativeEvent.isComposing || event.nativeEvent.keyCode === 229) return;

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp': {
        event.preventDefault();
        if (!open) { setOpen(true); return; }
        setActiveIndex((current) => step(current, event.key === 'ArrowDown' ? 1 : -1));
        return;
      }
      case 'Home':
      case 'End': {
        if (!open) return;
        event.preventDefault();
        setActiveIndex(event.key === 'Home' ? step(-1, 1) : step(0, -1));
        return;
      }
      case 'Enter': {
        if (!open) { event.preventDefault(); setOpen(true); return; }
        // Only swallow Enter when it is going to do something, so a select in a
        // form that has nothing highlighted still submits.
        if (activeIndex >= 0 && matching[activeIndex]) {
          event.preventDefault();
          commit(matching[activeIndex]);
        }
        return;
      }
      case ' ': {
        // Space types a space in a searchable control and opens a plain one.
        if (searchable) return;
        event.preventDefault();
        if (!open) setOpen(true);
        else if (activeIndex >= 0 && matching[activeIndex]) commit(matching[activeIndex]);
        return;
      }
      case 'Escape': {
        if (!open) return;
        event.preventDefault();
        /*
         * Stopped, not just defaulted.
         *
         * `DPortalContext` closes the top modal or offcanvas from a `keydown`
         * listener on `window`, and it does not consult `defaultPrevented` —
         * so one Escape over an open menu dismissed the menu AND the panel
         * around it. Escape belongs to the innermost thing that can absorb it;
         * a second press, with the menu now shut, falls through to the
         * overlay.
         */
        event.stopPropagation();
        setOpen(false);
        return;
      }
      case 'Tab': {
        if (open) setOpen(false);
        return;
      }
      case 'Backspace': {
        // Removing the last tag with Backspace is the behaviour every tag input
        // has; it only applies with an empty query, or it would eat the text.
        if (!multi || query !== '' || !Array.isArray(value) || !value.length) return;
        remove(value[value.length - 1]);
        return;
      }
      default: break;
    }

    /**
     * Typeahead, for a control with no search box.
     *
     * Keystrokes within a second of each other accumulate, so "bar" jumps to
     * Barcelona rather than to B, then A, then R — the behaviour a native
     * `<select>` has and the one people expect from anything that looks like
     * one.
     */
    if (!searchable && event.key.length === 1) {
      const now = Date.now();
      typeahead.current = now - lastTypedAt.current > 1000
        ? event.key
        : typeahead.current + event.key;
      lastTypedAt.current = now;

      const needle = typeahead.current.toLowerCase();
      const index = matching.findIndex(
        (option) => !option.disabled && option.label.toLowerCase().startsWith(needle),
      );
      if (index >= 0) {
        if (!open) setOpen(true);
        setActiveIndex(index);
      }
    }
  }, [
    activeIndex, commit, disabled, matching, multi, open,
    query, remove, searchable, setOpen, step, value,
  ]);

  return {
    open,
    setOpen,
    query,
    search,
    setQuery,
    activeIndex,
    setActiveIndex,
    matching,
    allOptions,
    selectedValues,
    selectedOptions,
    hasValue: selectedValues.size > 0,
    commit,
    remove,
    clear,
    onKeyDown,
  };
}

export default useSelect;
