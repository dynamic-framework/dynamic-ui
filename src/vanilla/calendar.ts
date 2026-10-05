import {
  addDays,
  addMonths,
  cellName,
  cellText,
  firstDayOfWeek,
  isSameMonth,
  isoDay,
  isoWeek,
  isSelected as dayIsSelected,
  monthName,
  nextSelection,
  rangePosition,
  startOfDay,
  startOfMonth,
  startOfWeek,
  viewDescriptor,
  viewLabel,
  weekdayNames,
} from '../components/DCalendar/month';

import { define } from './registry';

import type {
  CalendarView, Selection, SelectionMode, WeekDay,
} from '../components/DCalendar/month';
import type { Behaviour, Teardown } from './registry';

/**
 * Calendar.
 *
 * ```html
 * <div class="df-calendar" data-df-calendar
 *      data-locale="es-CL" data-mode="range" data-months="2"></div>
 * ```
 *
 * ## This one RENDERS, where the others enhance
 *
 * Every other behaviour here takes markup a template author wrote and wires it
 * up. A calendar cannot work that way, and the reason is not the first paint:
 * it is that the grid CHANGES. Paging to April needs April's cells, and no
 * server round trip is going to produce them. The script has to be able to
 * build a month either way, so enhancing a server-rendered one would be a
 * second code path earning nothing but a risk that the two disagree.
 *
 * `toast` and `dropzone` already render for the same reason — they draw what
 * the server cannot know. So the rule across this layer is not "always
 * enhance"; it is **enhance what the author wrote, render what is generated**.
 *
 * ## The markup is React's, exactly
 *
 * Same classes, same attributes, same ARIA. `src/vanilla/parity.spec.tsx`
 * holds the two to it. One stylesheet dresses both, which is the whole premise
 * of this layer, and it is also why there is no styling of any kind in here.
 *
 * ## Customising it
 *
 * In React the seams are functions. Here they are `<template>` elements, which
 * is the same idea in the idiom the platform already has — the consumer
 * supplies markup, the component places it:
 *
 * ```html
 * <div class="df-calendar" data-df-calendar>
 *   <template data-nav="prev">‹ Anterior</template>
 *   <template data-nav="next">Siguiente ›</template>
 * </div>
 * ```
 *
 * Anything a template does not cover is CSS, because the DOM is right there:
 * `.df-calendar-day[data-highlighted]::after` puts a dot under a day without
 * this file knowing that dots exist.
 *
 * ## Events
 *
 * - `df:calendar:select` — `detail.selection`, plus `detail.value` as ISO
 *   strings, because a template author reading a date out of an event should
 *   not have to serialise it themselves.
 * - `df:calendar:month` — `detail.month`, when the grid pages.
 */

type Options = {
  locale?: string;
  mode: SelectionMode;
  view: CalendarView;
  weekStartsOn: WeekDay;
  months: number;
  showWeekNumbers: boolean;
  fixedWeeks: boolean;
  min?: Date;
  max?: Date;
};

/** The selection as ISO strings, so a template author need not serialise it. */
function selectionAsIso(selection: Selection): string | string[] | null {
  if (!selection) return null;
  if (selection instanceof Date) return isoDay(selection);
  if (Array.isArray(selection)) return selection.map(isoDay);
  return [isoDay(selection.from), selection.to ? isoDay(selection.to) : ''].filter(Boolean);
}

/** A date attribute, or undefined. Never `Invalid Date`, which formats as NaN. */
function dateAttr(root: HTMLElement, name: string): Date | undefined {
  const raw = root.getAttribute(name);
  if (!raw) return undefined;
  const parsed = new Date(`${raw}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

function readOptions(root: HTMLElement): Options {
  const locale = root.getAttribute('data-locale') || undefined;
  const weekAttr = root.getAttribute('data-week-starts-on');

  return {
    locale,
    mode: (root.getAttribute('data-mode') as SelectionMode) || 'single',
    view: (root.getAttribute('data-view') as CalendarView) || 'day',
    /*
     * The locale decides the first day unless the author overrode it — the
     * same rule the React component follows, and the reason a Spanish
     * calendar starts on Monday without anyone configuring it.
     */
    weekStartsOn: weekAttr !== null
      ? (Number(weekAttr) as WeekDay)
      : firstDayOfWeek(locale),
    months: Math.max(1, Number(root.getAttribute('data-months')) || 1),
    showWeekNumbers: root.hasAttribute('data-week-numbers'),
    fixedWeeks: !root.hasAttribute('data-no-fixed-weeks'),
    min: dateAttr(root, 'data-min'),
    max: dateAttr(root, 'data-max'),
  };
}

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs: Record<string, string> = {},
  children: (Node | string)[] = [],
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  children.forEach((child) => node.append(child));
  return node;
}

function mount(root: HTMLElement): Teardown {
  const options = readOptions(root);
  const {
    locale, mode, view, weekStartsOn, months: monthCount, showWeekNumbers, fixedWeeks,
  } = options;

  /*
   * The author's own markup, lifted out before the first render.
   *
   * Read once: rendering replaces the root's children, so a template left in
   * place would be destroyed by the first paging.
   */
  const templates = new Map<string, string>();
  Array.from(root.querySelectorAll('template[data-nav]')).forEach((node) => {
    templates.set(node.getAttribute('data-nav') ?? '', node.innerHTML);
  });

  let month = startOfMonth(dateAttr(root, 'data-month') ?? new Date());
  let selection: Selection;
  let focused = startOfDay(month);
  let preview: Date | null = null;

  const today = startOfDay(new Date());
  const weekdays = weekdayNames(locale, weekStartsOn, 'short');
  const longWeekdays = weekdayNames(locale, weekStartsOn, 'long');

  const outOfRange = (day: Date) => (
    (!!options.min && day < startOfDay(options.min))
    || (!!options.max && day > startOfDay(options.max))
  );

  const emit = (name: string, detail: unknown) => {
    root.dispatchEvent(new CustomEvent(`df:calendar:${name}`, {
      detail, bubbles: true,
    }));
  };

  /** The range as it would look if the pointer landed where it is. */
  const drawn = (): Selection => {
    if (mode === 'week') {
      if (!preview) return selection;
      const from = startOfWeek(preview, weekStartsOn);
      return { from, to: addDays(from, 6) };
    }
    if (mode !== 'range' || !preview) return selection;
    if (!selection || Array.isArray(selection) || selection instanceof Date) return selection;
    if (selection.to) return selection;
    return preview < selection.from
      ? { from: preview, to: selection.from }
      : { from: selection.from, to: preview };
  };

  let render: () => void;

  const goToMonth = (next: Date) => {
    month = startOfMonth(next);
    emit('month', { month });
    render();
  };

  const shownMonths = () => Array.from(
    { length: view === 'day' ? monthCount : 1 },
    (_unused, i) => addMonths(month, i),
  );

  const moveTo = (next: Date) => {
    if (outOfRange(next)) return;
    focused = next;

    const descriptor = viewDescriptor(view, month, { weekStartsOn, fixedWeeks });
    const target = descriptor.rangeStart(next).getTime();
    const shown = shownMonths();
    if (shown.some((m) => descriptor.rangeStart(m).getTime() === target)) {
      render();
      return;
    }
    /* Scroll the least that brings it into view — see the React note. */
    const after = target > descriptor.rangeStart(shown[shown.length - 1]).getTime();
    goToMonth(after ? addMonths(next, -(shown.length - 1)) : next);
  };

  const select = (day: Date) => {
    selection = nextSelection(day, selection, mode, weekStartsOn);
    emit('select', { selection, value: selectionAsIso(selection) });
    render();
  };

  const navButton = (direction: 'prev' | 'next', disabled: boolean) => {
    /*
     * The same DOM `DButtonIcon` renders, because the stylesheet is written
     * against it: `data-icon-only` is what makes the button square, and the
     * glyph has to sit inside `.df-icon.df-button-icon` to be sized. A plain
     * text button carried none of it and came out the wrong shape.
     */
    const button = el('button', {
      type: 'button',
      class: 'df-button df-calendar-nav',
      'aria-label': root.getAttribute(`data-label-${direction}`) ?? direction,
      'aria-busy': 'false',
      'data-variant': 'solid',
      'data-color': 'primary',
      'data-icon-only': '',
      'data-direction': direction,
    });
    if (disabled) button.setAttribute('disabled', '');

    /*
     * A template replaces the GLYPH, not the button — the same split the React
     * side makes, where `renderNav` hands over the props rather than letting
     * the markup be anything at all. There is no icon set here to read from,
     * so the default is a character.
     */
    /* `aria-hidden`, because the button's `aria-label` is its name — without
       it a reader announces the glyph as well as the name. */
    const glyph = el('span', { class: 'df-icon df-button-icon', 'aria-hidden': 'true' });
    const custom = templates.get(direction);
    if (custom !== undefined) glyph.innerHTML = custom;
    else glyph.textContent = direction === 'prev' ? '\u2039' : '\u203A';
    button.append(glyph);

    button.addEventListener('click', () => {
      const descriptor = viewDescriptor(view, month, { weekStartsOn, fixedWeeks });
      const target = descriptor.page(month, direction === 'prev' ? -1 : 1);
      goToMonth(target);
      focused = descriptor.page(focused, direction === 'prev' ? -1 : 1);
    });

    return button;
  };

  function onKeyDown(event: KeyboardEvent) {
    const descriptor = viewDescriptor(view, month, { weekStartsOn, fixedWeeks });
    const perRow = descriptor.cells[0]?.length ?? 7;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      select(focused);
      return;
    }

    const moves: Record<string, () => Date> = {
      ArrowLeft: () => descriptor.step(focused, -1),
      ArrowRight: () => descriptor.step(focused, 1),
      ArrowUp: () => descriptor.step(focused, -perRow),
      ArrowDown: () => descriptor.step(focused, perRow),
      Home: () => (view === 'day' ? startOfWeek(focused, weekStartsOn) : descriptor.cells[0][0]),
      End: () => (view === 'day'
        ? addDays(startOfWeek(focused, weekStartsOn), 6)
        : descriptor.cells[descriptor.cells.length - 1].slice(-1)[0]),
      PageUp: () => descriptor.page(focused, -1),
      PageDown: () => descriptor.page(focused, 1),
    };

    const move = moves[event.key];
    if (!move) return;
    /* Arrows scroll the page and PageUp pages it; inside a grid they do not. */
    event.preventDefault();
    moveTo(move());
  }

  function buildGrid(shown: Date): HTMLTableElement {
    const descriptor = viewDescriptor(view, shown, { weekStartsOn, fixedWeeks });
    const table = el('table', {
      class: 'df-calendar-grid',
      role: 'grid',
      /* The month, not the word "Calendar" — which was English in every
         language, and told a reader nothing about WHICH month they were in. */
      'aria-label': monthName(shown, locale),
      /* The grid pattern's way of saying a reader may pick more than one
         cell. Absent for a single date, where it would be a lie. */
      ...(mode !== 'single' && { 'aria-multiselectable': 'true' }),
    });

    table.append(el('caption', { class: 'df-calendar-caption' }, [
      monthName(shown, locale, false),
    ]));

    if (view === 'day') {
      const headRow = el('tr', { role: 'row' });
      if (showWeekNumbers) {
        headRow.append(el('th', { scope: 'col', class: 'df-calendar-weekday', abbr: 'Week' }, [
          el('span', { class: 'df-sr-only' }, ['Week']),
          el('span', { 'aria-hidden': 'true' }, ['#']),
        ]));
      }
      weekdays.forEach((label, i) => {
        headRow.append(el('th', {
          scope: 'col', class: 'df-calendar-weekday', abbr: longWeekdays[i],
        }, [label]));
      });
      table.append(el('thead', {}, [headRow]));
    }

    const body = el('tbody');
    const picture = drawn();

    descriptor.cells.forEach((row) => {
      /* Explicit all the way down: the same reasoning that made the cells
         `gridcell` applies to the rows between them. */
      const tr = el('tr', { role: 'row' });
      if (view === 'day' && showWeekNumbers) {
        tr.append(el('th', { scope: 'row', class: 'df-calendar-week-number' }, [
          el('span', { class: 'df-sr-only' }, [`Week ${isoWeek(row[0])}`]),
          el('span', { 'aria-hidden': 'true' }, [String(isoWeek(row[0]))]),
        ]));
      }

      row.forEach((cell) => {
        const chosen = dayIsSelected(cell, picture);
        const edge = picture && !Array.isArray(picture) && !(picture instanceof Date)
          ? rangePosition(cell, picture)
          : undefined;

        const td = el('td', { role: 'gridcell', class: 'df-calendar-cell' });
        if (chosen) td.setAttribute('aria-selected', 'true');

        const button = el('button', {
          type: 'button',
          class: 'df-calendar-day',
          'data-view': view,
          tabindex: descriptor.isSame(cell, focused) ? '0' : '-1',
          'aria-label': cellName(view, cell, locale),
        });
        if (view === 'day' && !isSameMonth(cell, shown)) button.setAttribute('data-outside', '');
        if (descriptor.isSame(cell, today)) button.setAttribute('data-today', '');
        if (chosen) button.setAttribute('data-selected', '');
        if (edge) button.setAttribute('data-range', edge);
        /*
         * `aria-disabled`, not `disabled`.
         *
         * A `disabled` button is out of the tab order AND cannot take focus,
         * so the grid cursor could not land on it — a screen reader user
         * arrowing across a month never learned the range existed. And the
         * roving tab stop could BE one, which left the calendar unreachable
         * by Tab entirely.
         */
        if (outOfRange(cell)) button.setAttribute('aria-disabled', 'true');
        if (descriptor.isSame(cell, today)) button.setAttribute('aria-current', 'date');
        /* Single mode only: there the day really is a toggle, since clicking
           the chosen one clears it. Elsewhere the CELL is selected. */
        if (mode === 'single') button.setAttribute('aria-pressed', String(chosen));

        button.append(el('time', { datetime: isoDay(cell) }, [cellText(view, cell, locale)]));

        button.addEventListener('click', () => {
          /* The refusal moved here when the button stopped being `disabled`:
             it now takes focus and a click, so saying no is this handler's
             job rather than the platform's. */
          if (outOfRange(cell)) return;
          moveTo(cell);
          select(cell);
        });
        /*
         * Focus is the source of truth for where the arrows move FROM.
         *
         * Clicking goes through `moveTo`, which sets it — but focus can also
         * arrive without a click: a Tab into the grid, a `.focus()` from
         * somewhere else, a browser restoring it. Tracking the event instead
         * of only the click means the next arrow press moves from where the
         * reader actually is rather than from wherever the grid last thought.
         */
        button.addEventListener('focus', () => { focused = cell; });
        button.addEventListener('mouseenter', () => {
          if (mode !== 'range' && mode !== 'week') return;
          preview = cell;
          render();
        });

        td.append(button);
        tr.append(td);
      });

      body.append(tr);
    });

    body.addEventListener('mouseleave', () => {
      if (!preview) return;
      preview = null;
      render();
    });

    table.append(body);
    table.addEventListener('keydown', onKeyDown);
    return table;
  }

  render = () => {
    /*
     * Whether focus was inside BEFORE the rebuild.
     *
     * Rendering replaces every node, so the focused button is destroyed and
     * focus falls to `<body>`. Restoring it unconditionally would steal focus
     * on the very first paint — a calendar on a page would grab the caret from
     * whatever the reader was typing in.
     */
    const hadFocus = root.contains(document.activeElement);

    root.replaceChildren();

    const descriptor = viewDescriptor(view, month, { weekStartsOn, fixedWeeks });
    const header = el('div', { class: 'df-calendar-header' });
    header.append(navButton(
      'prev',
      !!options.min && startOfDay(options.min) >= descriptor.rangeStart(month),
    ));
    header.append(el('h2', { class: 'df-calendar-title' }, [
      viewLabel(view, month, locale),
    ]));
    header.append(navButton(
      'next',
      !!options.max && startOfDay(options.max) < descriptor.rangeStart(descriptor.page(month, 1)),
    ));
    /*
     * The month, announced, as its own visually hidden element.
     *
     * Hanging it off the heading meant anything that replaced the heading
     * removed it — and a header with month and year pickers is the
     * configuration most likely to page.
     */
    header.append(el('span', { class: 'df-sr-only', 'aria-live': 'polite' }, [
      viewLabel(view, month, locale),
    ]));
    root.append(header);

    const grids = el('div', { class: 'df-calendar-months' });
    shownMonths().forEach((shown) => grids.append(buildGrid(shown)));
    root.append(grids);

    if (hadFocus) {
      root.querySelector<HTMLButtonElement>('.df-calendar-day[tabindex="0"]')?.focus();
    }
  };

  root.classList.add('df-calendar');
  render();

  return () => { root.replaceChildren(); };
}

/** Exported as well as registered — see the note in `tabs.ts`. */
export const calendar: Behaviour = {
  name: 'calendar',
  selector: '[data-df-calendar]',
  mount,
};

define(calendar);
