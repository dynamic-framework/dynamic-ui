import type { Meta, StoryObj } from '@storybook/react-vite';

import Html, { htmlStory } from './Html';

const meta: Meta<typeof Html> = {
  title: 'Vanilla/List & Progress',
  component: Html,
  parameters: {
    docs: {
      description: {
        component: `
Two more markup-only blocks. No \`data-df-\` attribute, no script.

## List

\`.df-list\` on a \`<ul>\` or \`<ol>\`, \`.df-list-item\` on each \`<li>\`. The
element matters: a list of transactions IS a list, and writing it as divs
costs a screen reader the count — "list, 12 items" is information the markup
gives away for free.

Use \`<a class="df-list-item">\` or \`<button>\` when a row is actionable. The
stylesheet reads classes, not tag names, so it dresses either.

## Progress

\`\`\`html
<div class="df-progress" style="--df-progress-value: 62%">
  <div class="df-progress-bar" role="progressbar"
       aria-valuenow="62" aria-valuemin="0" aria-valuemax="100">62%</div>
</div>
\`\`\`

The width is a custom property, not an inline \`width\` — the stylesheet reads
it, so a theme can change how the fill is drawn without the markup knowing.

**\`aria-valuenow\` is not optional.** The visual width means nothing to a
screen reader; the role and the three values are what make it a progress bar
rather than a decorated div. The percentage text inside is for sighted users
and can be omitted — the ARIA values carry it either way.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Html>;

const FRAME = { width: '420px' };

/** A real list, so the count is announced. */
export const List: Story = htmlStory(`
<ul class="df-list">
  <li class="df-list-item">Groceries — $42.10</li>
  <li class="df-list-item">Transfer to Ana — $1,200.00</li>
  <li class="df-list-item">Salary — $3,400.00</li>
</ul>`.trim(), { frame: FRAME });

/** Rows that go somewhere are links, not divs with a click handler. */
export const ActionableList: Story = htmlStory(`
<ul class="df-list">
  <li><a class="df-list-item" href="#one">Account details</a></li>
  <li><a class="df-list-item" href="#two">Statements</a></li>
  <li><button type="button" class="df-list-item">Close account</button></li>
</ul>`.trim(), { frame: FRAME });

/** The width is a custom property; the ARIA values are what it means. */
export const Progress: Story = htmlStory(`
<div class="df-progress" style="--df-progress-value: 62%">
  <div class="df-progress-bar" role="progressbar" aria-label="Savings goal"
       aria-valuenow="62" aria-valuemin="0" aria-valuemax="100">62%</div>
</div>

<div class="df-progress df-mt-4" style="--df-progress-value: 20%">
  <div class="df-progress-bar" role="progressbar" aria-label="Storage used"
       aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<div class="df-progress df-mt-4" style="--df-progress-value: 90%">
  <div class="df-progress-bar" role="progressbar" aria-label="Limit"
       aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" data-color="danger">90%</div>
</div>`.trim(), { frame: FRAME });
