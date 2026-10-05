import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { DCalendar } from '../../src';
import type { Selection } from '../../src';

/**
 * The month grid itself.
 *
 * `DDatePicker` renders this inside a field and a popover; used directly it is
 * the calendar on its own — a booking page, a date range in a report, anything
 * where the grid IS the interface rather than something a text box opens.
 */
const config: Meta<typeof DCalendar> = {
  title: 'Design System/Components/Calendar',
  component: DCalendar,
  parameters: {
    docs: {
      description: {
        component: `
A month grid, navigable by keyboard, with four views and three selection modes.

## Language

Every name — months, weekdays, the full date a screen reader announces — comes
from \`Intl\` with the \`locale\` you pass. Nothing ships a translation table,
so there is no list of "supported languages": it is whatever the browser knows,
which is all of them.

**Omit \`locale\` and it follows whoever is looking at the page.** That is the
right default for an application — a Chilean user gets Spanish without anyone
configuring anything — but it means Storybook examples are not reproducible
unless they pin one, so every example here does.

## The week does not always start on Sunday

The first day of the week is a property of the locale, exactly like the month
names, and it is read from the same place. \`en-US\` starts on Sunday, \`es-CL\`
and \`fr-FR\` on Monday, \`ar-EG\` on Saturday.

Pass \`weekStartsOn\` only when you have a reason the locale cannot know about;
it overrides the locale.

## Keyboard

- **← → ↑ ↓** move one cell or one row. A row is seven days in the day view and
  three months in the month view.
- **Home / End** jump to the ends of the shown period.
- **PageUp / PageDown** page; **Shift** with them moves a year.
- **Enter / Space** select.

Focus stays on one cell at a time (a roving tabindex), so **Tab** leaves the
grid rather than walking 42 days.
        `,
      },
    },
  },
  args: {
    locale: 'en-US',
    defaultMonth: new Date(2026, 2, 1),
  },
  argTypes: {
    locale: {
      control: 'select',
      options: ['en-US', 'en-GB', 'es', 'es-CL', 'pt-BR', 'fr-FR', 'de-DE', 'ja-JP', 'ar-EG'],
      table: { category: 'Content' },
    },
    weekStartsOn: {
      control: 'select',
      options: [undefined, 0, 1, 2, 3, 4, 5, 6],
      description: 'Overrides the locale. Omit it to follow the locale.',
      table: { category: 'Content' },
    },
    mode: {
      control: 'inline-radio',
      options: ['single', 'multiple', 'range', 'week'],
      table: { category: 'Behavior' },
    },
    view: {
      control: 'inline-radio',
      options: ['day', 'month', 'quarter', 'year'],
      table: { category: 'Appearance' },
    },
  },
};

export default config;
type Story = StoryObj<typeof DCalendar>;

export const Default: Story = {};

/**
 * The same month in four locales.
 *
 * Look at the first column of each: `en-US` starts on Sunday, `es-CL` and
 * `fr-FR` on Monday, `ja-JP` on Sunday. Month names and weekday names change
 * together with it, because they come from the same place.
 */
export const Locales: Story = {
  render: () => (
    <div className="df-flex df-flex-wrap df-gap-4">
      {(['en-US', 'es-CL', 'fr-FR', 'ja-JP'] as const).map((locale) => (
        <div key={locale}>
          <p className="df-fs-body-sm df-text-muted df-mb-2">{locale}</p>
          <DCalendar locale={locale} defaultMonth={new Date(2026, 2, 1)} />
        </div>
      ))}
    </div>
  ),
};

/**
 * `weekStartsOn` overrides the locale, for when a product has a rule the
 * locale cannot know — a company whose week starts on Monday everywhere.
 */
export const OverridingTheFirstDay: Story = {
  args: { locale: 'en-US', weekStartsOn: 1 },
};

/** One date. The common case. */
export const SingleSelection: Story = {
  render: function Render(args) {
    const [selected, setSelected] = useState<Selection>(new Date(2026, 2, 8));
    return <DCalendar {...args} mode="single" selected={selected} onSelect={setSelected} />;
  },
};

/**
 * A span. The first click names a start; the grid previews the end under the
 * pointer, because a range being drawn is invisible without it.
 */
export const RangeSelection: Story = {
  render: function Render(args) {
    const [selected, setSelected] = useState<Selection>();
    return <DCalendar {...args} mode="range" selected={selected} onSelect={setSelected} />;
  },
};

/** Several dates that need not be adjacent. */
export const MultipleSelection: Story = {
  render: function Render(args) {
    const [selected, setSelected] = useState<Selection>([]);
    return <DCalendar {...args} mode="multiple" selected={selected} onSelect={setSelected} />;
  },
};

/**
 * A whole week, chosen from any day in it.
 *
 * Modelled as a range whose ends the reader never picks, so everything
 * downstream — the styling, the reported value — works on it unchanged.
 */
export const WeekSelection: Story = {
  render: function Render(args) {
    const [selected, setSelected] = useState<Selection>();
    return <DCalendar {...args} mode="week" selected={selected} onSelect={setSelected} />;
  },
};

/** ISO 8601 week numbers in a leading column. */
export const WeekNumbers: Story = {
  args: { showWeekNumbers: true, locale: 'es-CL' },
};

/** Two months side by side, which is the usual shape for picking a range. */
export const TwoMonths: Story = {
  args: { numberOfMonths: 2, mode: 'range' },
};

/**
 * The coarser views. All four share the keyboard, the roving tabindex and the
 * selection — only the cells and the step sizes change.
 */
export const MonthView: Story = { args: { view: 'month' } };
export const QuarterView: Story = { args: { view: 'quarter' } };
export const YearView: Story = { args: { view: 'year' } };

/** Days outside the range are present but cannot be focused or chosen. */
export const WithBounds: Story = {
  args: {
    minDate: new Date(2026, 2, 5),
    maxDate: new Date(2026, 2, 24),
  },
};

/**
 * A predicate rather than a list: the common cases — weekends, holidays,
 * anything the server said is full — are rules, and a list long enough to
 * express a rule has to be regenerated every time the month changes.
 */
export const DisabledDays: Story = {
  args: {
    disabledDates: (date: Date) => date.getDay() === 0 || date.getDay() === 6,
  },
};

/** Marked, never selected — the two are different things. */
export const HighlightedDays: Story = {
  args: {
    highlightedDates: [new Date(2026, 2, 10), new Date(2026, 2, 17), new Date(2026, 2, 24)],
  },
};

/* ------------------------------------------------------------------ *
 * Customisation
 * ------------------------------------------------------------------ */

/**
 * The caption, shortened.
 *
 * `formatters.caption` is the seam for "March 2026" → "March" → "Mar". It is a
 * function rather than a format string because the shortening that works in
 * English does not work everywhere: slicing three characters off a Japanese
 * month name produces nonsense, while `Intl` knows what the short form is.
 */
export const ShortCaption: Story = {
  render: () => (
    <div className="df-flex df-flex-wrap df-gap-4">
      {([
        { name: 'default', options: undefined },
        { name: 'month only', options: { month: 'long' } },
        { name: 'abbreviated', options: { month: 'short' } },
      ] as { name: string; options?: Intl.DateTimeFormatOptions }[]).map(({ name, options }) => (
        <div key={name}>
          <p className="df-fs-body-sm df-text-muted df-mb-2">{name}</p>
          <DCalendar
            locale="en-US"
            defaultMonth={new Date(2026, 2, 1)}
            formatters={options && {
              caption: (date, _view, locale) => new Intl.DateTimeFormat(locale, options)
                .format(date),
            }}
          />
        </div>
      ))}
    </div>
  ),
};

/**
 * Paging buttons as text instead of icons.
 *
 * `renderNav` hands over `buttonProps`, which carries the click handler, the
 * disabled state and the accessible name. Spreading it keeps all three; the
 * only thing the renderer decides is what it looks like.
 */
export const TextNavigation: Story = {
  render: () => (
    <DCalendar
      locale="en-US"
      defaultMonth={new Date(2026, 2, 1)}
      renderNav={({ direction, buttonProps }) => (
        <button type="button" className="df-button" data-variant="link" {...buttonProps}>
          {direction === 'prev' ? '← Anterior' : 'Siguiente →'}
        </button>
      )}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `<DCalendar
  renderNav={({ direction, buttonProps }) => (
    <button type="button" className="df-button" data-variant="link" {...buttonProps}>
      {direction === 'prev' ? '← Anterior' : 'Siguiente →'}
    </button>
  )}
/>

// \`buttonProps\` carries the three things the calendar computed:
//   { disabled, 'aria-label', onClick }
// Spreading it keeps the paging, the end-of-range disabled state and the
// accessible name. \`type\` is NOT in there — write it yourself.`,
      },
    },
  },
};

/**
 * The same seam, naming the month it would move to.
 *
 * `target` is the month paging would land on, so a button can read "March"
 * rather than "previous" without the renderer doing date arithmetic.
 */
export const NavigationNamingTheMonth: Story = {
  render: () => (
    <DCalendar
      locale="en-US"
      defaultMonth={new Date(2026, 2, 1)}
      renderNav={({ target, buttonProps, direction }) => (
        <button type="button" className="df-button" data-size="sm" {...buttonProps}>
          {direction === 'prev' && '‹ '}
          {new Intl.DateTimeFormat('en-US', { month: 'short' }).format(target)}
          {direction === 'next' && ' ›'}
        </button>
      )}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `<DCalendar
  renderNav={({ target, buttonProps, direction }) => (
    <button type="button" className="df-button" data-size="sm" {...buttonProps}>
      {direction === 'prev' && '‹ '}
      {new Intl.DateTimeFormat('en-US', { month: 'short' }).format(target)}
      {direction === 'next' && ' ›'}
    </button>
  )}
/>

// \`target\` is the month paging would land on, so the button can read
// "Feb" / "Apr" without the renderer doing date arithmetic — and without
// guessing, since the step is a year in the month view and twelve in the
// year view.`,
      },
    },
  },
};

/**
 * A cell with something in it besides the number.
 *
 * `renderDay` replaces what is INSIDE the cell's button, never the button:
 * the role, the roving tabindex, `aria-selected` and the accessible name stay
 * with the calendar, because they are the difference between a grid and a pile
 * of buttons. A dot, a badge, a price — those are the point.
 */
export const CellsWithMarkers: Story = {
  render: () => (
    <DCalendar
      locale="en-US"
      defaultMonth={new Date(2026, 2, 1)}
      highlightedDates={[new Date(2026, 2, 10), new Date(2026, 2, 17), new Date(2026, 2, 24)]}
      renderDay={({ label, highlighted }) => (
        <span className="df-flex df-flex-col df-items-center">
          <span>{label}</span>
          <span
            aria-hidden="true"
            style={{
              width: 4,
              height: 4,
              borderRadius: 999,
              marginTop: 2,
              backgroundColor: highlighted ? 'var(--df-role-primary-base)' : 'transparent',
            }}
          />
        </span>
      )}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `<DCalendar
  highlightedDates={[new Date(2026, 2, 10), new Date(2026, 2, 17)]}
  renderDay={({ label, highlighted }) => (
    <span className="df-flex df-flex-col df-items-center">
      <span>{label}</span>
      <span
        aria-hidden="true"
        style={{
          width: 4,
          height: 4,
          borderRadius: 999,
          marginTop: 2,
          backgroundColor: highlighted ? 'var(--df-role-primary-base)' : 'transparent',
        }}
      />
    </span>
  )}
/>

// The dot is \`aria-hidden\`: it repeats what the cell's accessible name
// already says, and a screen reader announcing "bullet" after every date
// is noise.
//
// This replaces what is INSIDE the button, never the button — the role,
// the roving tabindex, \`aria-selected\` and the accessible name stay with
// the calendar.
//
// Every flag: { date, label, selected, today, outside, disabled,
//               highlighted, range }`,
      },
    },
  },
};

/**
 * The header replaced wholesale.
 *
 * `renderCaption` is handed the month and year options the built-in selectors
 * would have shown, plus `goToMonth` to move the grid — so a replacement does
 * not recompute anything, it only decides the markup.
 *
 * **Before reaching for `DSelect` or `DDropdown` here:** both render their menu
 * in a portal on `document.body`, and a calendar inside a `DModal` sits in a
 * `<dialog>` in the browser's TOP LAYER, which paints above everything in the
 * normal layer regardless of `z-index`. The menu would open behind the modal.
 * The built-in `<select>` has no such problem, because the platform renders its
 * list in the top layer too. For an inline calendar, either is fine.
 */
export const CustomHeader: Story = {
  render: () => (
    <DCalendar
      locale="en-US"
      defaultMonth={new Date(2026, 2, 1)}
      showSelectors
      renderCaption={({
        label, months, years, goToMonth, month, labels,
      }) => (
        <div className="df-flex df-gap-2 df-items-center">
          <strong className="df-fs-body-sm">{label}</strong>
          <select
            className="df-select"
            data-size="sm"
            aria-label={labels.monthSelect}
            value={month.getMonth()}
            onChange={(event) => goToMonth(
              new Date(month.getFullYear(), Number(event.target.value), 1),
            )}
          >
            {months.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <select
            className="df-select"
            data-size="sm"
            aria-label={labels.yearSelect}
            value={month.getFullYear()}
            onChange={(event) => goToMonth(
              new Date(Number(event.target.value), month.getMonth(), 1),
            )}
          >
            {years.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      )}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `<DCalendar
  renderCaption={({ label, months, years, goToMonth, month, labels }) => (
    <div className="df-flex df-gap-2 df-items-center">
      <strong className="df-fs-body-sm">{label}</strong>

      <select
        className="df-select"
        data-size="sm"
        aria-label={labels.monthSelect}
        value={month.getMonth()}
        onChange={(e) => goToMonth(
          new Date(month.getFullYear(), Number(e.target.value), 1),
        )}
      >
        {months.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>

      <select
        className="df-select"
        data-size="sm"
        aria-label={labels.yearSelect}
        value={month.getFullYear()}
        onChange={(e) => goToMonth(
          new Date(Number(e.target.value), month.getMonth(), 1),
        )}
      >
        {years.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  )}
/>

// You are handed the options the built-in selectors would have shown
// (\`months\` is empty outside the day view) plus \`goToMonth\` to move the
// grid, so a replacement decides markup only — it recomputes nothing.
//
// BEFORE REACHING FOR DSelect OR DDropdown HERE:
// both render their menu in a portal on document.body, and a calendar
// inside a DModal sits in a <dialog> in the browser's TOP LAYER, which
// paints above everything in the normal layer regardless of z-index.
// The menu would open BEHIND the modal. The native <select> has no such
// problem — the platform renders its list in the top layer too.
// For an inline calendar, either is fine.`,
      },
    },
  },
};

/**
 * Accessible names on their own axis.
 *
 * A cell SHOWS `8` and is ANNOUNCED as "Sunday, March 8, 2026". `formatters`
 * change the first, `labels` the second — collapsing them would force a choice
 * between a grid of long strings and a screen reader that says "eight".
 */
export const TranslatedLabels: Story = {
  render: () => (
    <DCalendar
      locale="es-CL"
      defaultMonth={new Date(2026, 2, 1)}
      showSelectors
      showWeekNumbers
      labels={{
        previous: 'Mes anterior',
        next: 'Mes siguiente',
        monthSelect: 'Mes',
        yearSelect: 'Año',
        weekNumber: (week) => `Semana ${week}`,
      }}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `<DCalendar
  locale="es-CL"
  showSelectors
  showWeekNumbers
  labels={{
    previous: 'Mes anterior',
    next: 'Mes siguiente',
    monthSelect: 'Mes',
    yearSelect: 'Año',
    weekNumber: (week) => \`Semana \${week}\`,
  }}
/>

// \`labels\` are what a screen reader ANNOUNCES. \`formatters\` are what the
// calendar SHOWS. They are separate on purpose: a cell shows "8" and is
// announced as "domingo, 8 de marzo de 2026" — collapsing the two would
// force a choice between a grid of long strings and a reader that says
// "ocho".
//
// The month and weekday names themselves need no translation: they come
// from Intl with \`locale\`, so they are already in Spanish here.`,
      },
    },
  },
};
