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
