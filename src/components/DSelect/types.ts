import type { ReactNode } from 'react';

/**
 * One choice.
 *
 * The fields beyond `value` and `label` are here because they are what the 2.x
 * component needed eleven swappable sub-components to express. `DSelect.OptionIcon`,
 * `DSelect.OptionEmoji`, `DSelect.SingleValueIconText` and the rest existed only
 * so an option could carry a glyph or a second line — a lot of exported surface
 * for "this option has an icon".
 *
 * Describing the option instead of replacing the renderer means the common
 * cases need no components at all, and `renderOption` is still there for a case
 * that is genuinely bespoke.
 */
export type DSelectOption<Value = string> = {
  value: Value;
  label: string;
  /** A second, quieter line under the label. */
  description?: string;
  /** An icon name, resolved through `DIcon` and the context's icon registry. */
  icon?: string;
  /** A literal emoji, for the cases an icon set does not cover. */
  emoji?: string;
  disabled?: boolean;
  /** Anything else; passed through to `renderOption` untouched. */
  [key: string]: unknown;
};

/** A labelled run of options, rendered under a heading. */
export type DSelectGroup<Value = string> = {
  label: string;
  options: Array<DSelectOption<Value>>;
};

export type DSelectItems<Value = string> =
  Array<DSelectOption<Value>> | Array<DSelectGroup<Value>>;

/** What an option knows about itself while being rendered. */
export type DSelectOptionState = {
  selected: boolean;
  /** Under the keyboard cursor. Not the same as focused — focus stays on the input. */
  active: boolean;
  disabled: boolean;
};

export type DSelectI18n = {
  placeholder: string;
  /** Announced on the control itself when there is no visible label. */
  ariaLabel: string;
  clear: string;
  /** Prefixed to an option's label on its remove button: "Remove Spain". */
  remove: string;
  /** Shown in the menu when the query matches nothing. */
  empty: string;
  loading: string;
  /** Announced as options are filtered: "3 options available". */
  resultsAvailable: string;
  toggleMenu: string;
};

export const DEFAULT_SELECT_I18N: DSelectI18n = {
  placeholder: 'Select…',
  ariaLabel: 'Select an option',
  clear: 'Clear selection',
  remove: 'Remove',
  empty: 'No options',
  loading: 'Loading…',
  resultsAvailable: 'options available',
  toggleMenu: 'Toggle options',
};

export type DSelectRenderOption<Value = string> = (
  option: DSelectOption<Value>,
  state: DSelectOptionState,
) => ReactNode;

/** True when the list is grouped rather than flat. */
export function isGrouped<Value>(
  items: DSelectItems<Value>,
): items is Array<DSelectGroup<Value>> {
  return items.length > 0 && Array.isArray((items[0] as DSelectGroup<Value>).options);
}

/** Every option in order, groups flattened away. */
export function flattenOptions<Value>(items: DSelectItems<Value>): Array<DSelectOption<Value>> {
  if (!items.length) return [];
  return isGrouped(items)
    ? items.flatMap((group) => group.options)
    : (items as Array<DSelectOption<Value>>);
}
