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

  const setOpen = useCallback((next: boolean) => {
    if (disabled) return;
    setOpenState(next);
    if (!next) setActiveIndex(-1);
  }, [disabled]);

  const commit = useCallback((option: DSelectOption<Value>) => {
    if (option.disabled) return;

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
  }, [closeOnSelect, isControlled, multi, onChange, setOpen, value]);

  const remove = useCallback((target: Value) => {
    const current = Array.isArray(value) ? value : [];
    const nextValue = current.filter((entry) => entry !== target);
    if (!isControlled) setUncontrolled(nextValue);
    onChange?.(nextValue, allOptions.find((o) => o.value === target) ?? null);
  }, [allOptions, isControlled, onChange, value]);

  const clear = useCallback(() => {
    const nextValue = multi ? [] : null;
    if (!isControlled) setUncontrolled(nextValue);
    onChange?.(nextValue, null);
    setQuery('');
  }, [isControlled, multi, onChange]);

  const search = useCallback((next: string) => {
    setQuery(next);
    onSearch?.(next);
    if (!open) setOpen(true);
    // The first match is the sensible target, so Enter after typing picks what
    // the user is looking at rather than nothing.
    setActiveIndex(0);
  }, [onSearch, open, setOpen]);

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

  /** Opening puts the cursor on the selection, or on the first option. */
  useEffect(() => {
    if (!open) return;
    const selectedIndex = matching.findIndex((option) => selectedValues.has(option.value));
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : step(-1, 1));
    // Only when the menu opens: re-running as `matching` changes would drag the
    // cursor back to the selection on every keystroke.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  /** Keeps the cursor inside the list as filtering shortens it. */
  useEffect(() => {
    setActiveIndex((current) => {
      if (current < 0) return current;
      return Math.min(current, matching.length - 1);
    });
  }, [matching.length]);

  const lastTypedAt = useRef(0);
  const typeahead = useRef('');

  const onKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (disabled) return;

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
