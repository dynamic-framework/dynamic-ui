import type { ReactNode } from 'react';

import type { CalendarView } from './month';

/**
 * The seams a design system can reach into.
 *
 * Two kinds, kept apart because they fail differently:
 *
 * - **`formatters`** change TEXT. They cannot break the control: whatever they
 *   return is rendered as a string inside markup the calendar still owns.
 * - **`render*`** props change MARKUP. They can break the control, so each one
 *   is handed the props the calendar computed — the click handler, the
 *   disabled state, the accessible name — for the consumer to spread. Writing
 *   `<button {...buttonProps}>` keeps every guarantee; writing a bare
 *   `<button>` is the consumer deciding to drop them.
 *
 * ## Why render props and not a `components` map
 *
 * A `components={{ Day: (p) => <X {...p} /> }}` map looks tidier and is a
 * trap. The inline arrow is a NEW component type on every render, so React
 * unmounts and remounts the whole subtree — and this grid moves focus with a
 * roving tabindex, so a remount drops the focused cell and the keyboard user
 * lands back at the document. A render prop is called as a plain function and
 * produces elements of the same type, so there is nothing to remount.
 */

export type CalendarFormatters = {
  /**
   * The heading above the grid. `"March 2026"` by default.
   *
   * This is the one to reach for when a design wants only the month —
   * `(date, view, locale) => new Intl.DateTimeFormat(locale, { month: 'long' }).format(date)`
   * gives `"March"`, and `{ month: 'short' }` gives `"Mar"`.
   */
  caption?: (date: Date, view: CalendarView, locale?: string) => string;
  /** A column header. `"Mon"` by default; `"M"` is the usual narrower one. */
  weekday?: (date: Date, locale?: string) => string;
  /** What a cell SHOWS. The accessible name is `labels.day`, not this. */
  day?: (date: Date, view: CalendarView, locale?: string) => string;
  /** An entry in the month selector. */
  monthOption?: (date: Date, locale?: string) => string;
  /** An entry in the year selector. */
  yearOption?: (year: number, locale?: string) => string;
};

/**
 * The accessible names, which are separate from the visible text on purpose.
 *
 * A cell can SHOW `8` and be ANNOUNCED as "Sunday, 8 March 2026". Collapsing
 * the two would force a choice between a grid of long strings and a screen
 * reader that says "eight".
 */
export type CalendarLabels = {
  /** Announced for a cell. Defaults to the full date. */
  day?: (date: Date, view: CalendarView, locale?: string) => string;
  previous?: string;
  next?: string;
  monthSelect?: string;
  yearSelect?: string;
  weekNumber?: (week: number) => string;
};

/** Props every nav render prop is handed. Spread `buttonProps`. */
export type NavRenderProps = {
  direction: 'prev' | 'next';
  /** True at the end of `minDate`/`maxDate`. The button stays, disabled. */
  disabled: boolean;
  /** The glyph the calendar would have drawn, from the context's icon map. */
  icon: string;
  /** The accessible name the calendar would have used. */
  label: string;
  /** The month paging would move to, for a label like "March". */
  target: Date;
  /**
   * Spread onto whatever you render: `<button type="button" {...buttonProps}>`.
   *
   * It carries the three things the calendar COMPUTED — the handler, the
   * disabled state and the accessible name — and nothing else. `type` is
   * deliberately absent: it is boilerplate for one element rather than a value
   * the calendar decides, the renderer may not be a `<button>` at all, and
   * including it made `<button type="button" {...buttonProps}>` a TypeScript
   * error while omitting the attribute tripped `react/button-has-type`. Left
   * out, both spellings are clean.
   */
  buttonProps: {
    disabled: boolean;
    'aria-label': string;
    onClick: () => void;
  };
};

/** Props the caption render prop is handed. */
export type CaptionRenderProps = {
  /** The month on show. */
  month: Date;
  view: CalendarView;
  locale?: string;
  /** The text the calendar would have shown, already through `formatters`. */
  label: string;
  /** Moves the grid. Pass any date in the target month. */
  goToMonth: (date: Date) => void;
  /** What the built-in month selector offers. Empty outside the day view. */
  months: { value: number; label: string }[];
  /** What the built-in year selector offers, bounded by min/max. */
  years: { value: number; label: string }[];
  /** The accessible names for the two selectors. */
  labels: { monthSelect: string; yearSelect: string };
};

/**
 * Props the day render prop is handed.
 *
 * This replaces what is INSIDE the cell's button, never the button itself:
 * the `role`, the roving tabindex, `aria-selected` and the accessible name
 * stay with the calendar, because they are the difference between a grid and
 * a pile of buttons. Returning a badge, a dot or a price is the point; the
 * semantics are not up for grabs.
 */
export type DayRenderProps = {
  date: Date;
  /** The text the calendar would have shown, already through `formatters`. */
  label: string;
  selected: boolean;
  today: boolean;
  /** Belongs to a month either side of the one on show. */
  outside: boolean;
  disabled: boolean;
  highlighted: boolean;
  /** Where in a range, when there is one. */
  range?: 'start' | 'middle' | 'end';
};

export type CalendarSlots = {
  formatters?: CalendarFormatters;
  labels?: CalendarLabels;
  /** Replaces a paging button. Called twice, once per direction. */
  renderNav?: (props: NavRenderProps) => ReactNode;
  /**
   * Replaces the heading and the selectors between the two nav buttons.
   *
   * This is the seam for a month picker built out of `DSelect` or `DDropdown`.
   * One caveat worth knowing before you do: both render their menu in a portal
   * on `document.body`, and a calendar inside a `DModal` is inside a
   * `<dialog>` in the TOP LAYER — which paints above everything in the normal
   * layer, `z-index` notwithstanding. The menu would open behind the modal.
   * The built-in `<select>` has no such problem because the platform renders
   * its list in the top layer too.
   */
  renderCaption?: (props: CaptionRenderProps) => ReactNode;
  /** Replaces the contents of a cell. The button around it stays. */
  renderDay?: (props: DayRenderProps) => ReactNode;
};
