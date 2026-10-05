import type { Meta, StoryObj } from '@storybook/react-vite';

import Html, { htmlStory } from './Html';

const meta: Meta<typeof Html> = {
  title: 'Vanilla/Calendar',
  component: Html,
  parameters: {
    docs: {
      description: {
        component: `
\`data-df-calendar\` on an **empty** element.

## This one is a separate script

Every other behaviour is in \`dynamic.min.js\`. The calendar is not: it is 9 KB
minified — most of that bundle again — for a control most pages do not have, and
that bundle ships to every page of a site. So it is its own file, and it starts
itself:

\`\`\`html
<script type="module" src="https://cdn.dynamicframework.dev/assets/3/vanilla/dynamic.min.js"></script>
<script type="module" src="https://cdn.dynamicframework.dev/assets/3/vanilla/calendar.min.js"></script>
\`\`\`

Loading only the calendar file works too.

## This one RENDERS, where the others enhance

Tabs, collapse and carousel take markup you wrote and wire it up. A calendar
cannot work that way, and the reason is not the first paint: **the grid
changes**. Paging to April needs April's cells, and no server round trip is
going to produce them — so the script has to be able to build a month either
way, and enhancing a server-rendered one on top would be a second code path
earning nothing but the risk that the two disagree.

So you write an empty element and the script fills it, with exactly the DOM
\`DCalendar\` renders. A test holds the two to it.

## Language

Every name comes from \`Intl\` with \`data-locale\`. Nothing ships a
translation table, so there is no list of supported languages.

Leave \`data-locale\` off and it follows the reader's own, which is usually what
an application wants.

**The first day of the week comes from the locale too** — \`es-CL\` starts on
Monday, \`en-US\` on Sunday, \`ar-EG\` on Saturday. \`data-week-starts-on\`
overrides it when a product has a rule the locale cannot know about.

## Attributes

| | |
|---|---|
| \`data-locale\` | BCP 47. Defaults to the reader's |
| \`data-month\` | \`YYYY-MM-DD\`; the month to open on |
| \`data-mode\` | \`single\` (default), \`multiple\`, \`range\`, \`week\` |
| \`data-view\` | \`day\` (default), \`month\`, \`quarter\`, \`year\` |
| \`data-months\` | How many grids side by side |
| \`data-week-numbers\` | ISO week numbers in a leading column |
| \`data-min\` / \`data-max\` | \`YYYY-MM-DD\` bounds |
| \`data-week-starts-on\` | \`0\`–\`6\`, overriding the locale |
| \`data-label-prev\` / \`data-label-next\` | Accessible names for the paging buttons |

## Reacting to a choice

\`\`\`js
document.addEventListener('df:calendar:select', (event) => {
  console.log(event.detail.value);   // '2026-03-08', or a pair for a range
  console.log(event.detail.selection);  // the Date objects
});
\`\`\`

\`df:calendar:month\` fires when the grid pages.

## Customising it

In React the seams are functions. Here they are \`<template>\` elements, which
is the same idea in the idiom the platform already has — you supply the markup,
the component places it. Anything a template does not cover is CSS, because the
DOM is right there.

## Keyboard

- **← → ↑ ↓** move one cell or one row
- **Home / End** the ends of the week
- **PageUp / PageDown** page
- **Enter / Space** select

One cell is in the tab order at a time, so **Tab** leaves the grid rather than
walking 42 days.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Html>;

/** An empty element. The script does the rest. */
export const Default: Story = htmlStory(`
<div data-df-calendar data-locale="en-US"></div>`.trim());

/** Spanish — note the week starts on Monday, with nothing configuring it. */
export const Spanish: Story = htmlStory(`
<div data-df-calendar data-locale="es-CL"></div>`.trim());

/** Two grids side by side, which is the usual shape for picking a range. */
export const Range: Story = htmlStory(`
<div data-df-calendar data-locale="en-US" data-mode="range" data-months="2"></div>`.trim());

/** A whole week from any day in it. */
export const WeekSelection: Story = htmlStory(`
<div data-df-calendar data-locale="es-CL" data-mode="week" data-week-numbers></div>`.trim());

/** Days outside the bounds are present but cannot be chosen. */
export const Bounded: Story = htmlStory(`
<div
  data-df-calendar
  data-locale="en-US"
  data-min="2026-03-05"
  data-max="2026-03-24"
  data-month="2026-03-01"
></div>`.trim());

/**
 * The paging buttons, replaced.
 *
 * A `<template>` is the vanilla equivalent of React's `renderNav`: it supplies
 * the GLYPH, while the button — its accessible name, its disabled state at the
 * end of a range — stays with the component. That split is why a custom button
 * cannot accidentally stop being a button.
 */
export const CustomArrows: Story = htmlStory(`
<div data-df-calendar data-locale="es-CL" data-label-prev="Mes anterior" data-label-next="Mes siguiente">
  <template data-nav="prev">Anterior</template>
  <template data-nav="next">Siguiente</template>
</div>`.trim());

/**
 * Reading the chosen date.
 *
 * `detail.value` is ISO strings, because a template author pulling a date out
 * of an event should not have to serialise it themselves.
 */
export const ReadingTheSelection: Story = htmlStory(`
<div data-df-calendar data-locale="en-US" id="booking"></div>
<p class="df-mt-3">Chosen: <output id="chosen">—</output></p>

<script>
  (function () {
    var calendar = document.getElementById('booking');
    var output = document.getElementById('chosen');
    calendar.addEventListener('df:calendar:select', function (event) {
      output.textContent = event.detail.value || '—';
    });
  }());
</script>`.trim());
