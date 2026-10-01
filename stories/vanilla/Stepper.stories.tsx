import type { Meta, StoryObj } from '@storybook/react-vite';

import Html, { htmlStory } from './Html';

const meta: Meta<typeof Html> = {
  title: 'Vanilla/Stepper',
  component: Html,
  parameters: {
    docs: {
      description: {
        component: `
Markup only — no \`data-df-\` attribute, no script. The stepper shows where you
are in a flow; the flow itself is your page's business, so there is nothing for
a behaviour to own.

## Two renderings, one component

\`DStepper\` emits **both** layouts and lets a media query choose:

| | |
|---|---|
| \`.df-stepper-mobile\` with \`data-below="lg"\` | shown below the breakpoint |
| \`.df-stepper-desktop\` with \`data-from="lg"\` | shown from the breakpoint up |

Write both. The attribute is what the media query matches, so a pane without
one is visible at every width — which is how the desktop layout once
disappeared entirely: the attribute was on a wrapper and the rule was looking
for it on the pane.

## The desktop row

| | |
|---|---|
| \`.df-step\` | one step, with \`data-state\` |
| \`data-state\` | \`done\` · \`current\` · \`todo\` |
| \`.df-step-marker\` | the number, or a glyph once the step is done |
| \`.df-step-text\` > \`.df-step-label\` | the caption, with an optional \`.df-step-description\` |

The connecting line comes from the marker, so the step count draws it.

## The mobile summary

A progress ring and the current step's label:

| | |
|---|---|
| \`.df-step-progress\` | the ring; set \`--df-step-progress-angle\` |
| \`.df-step-progress-value\` | the \`2/3\` text inside it |
| \`.df-step-info\` > \`.df-step-label\` | the current step's caption |

The angle is \`360deg × current ÷ total\` — a template can compute it in Liquid.
It is an inline custom property rather than a class because it is a value, not
a variant.

## Accessibility

Put \`aria-current="step"\` on the current step and the flow announces correctly.
If the steps are links a user can jump between, write them as \`<a>\` or
\`<button>\`; as plain \`<div>\`s they are a status display, which is the default
and is what \`DStepper\` renders.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Html>;

const FRAME = { width: '720px' };

const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
  + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';

const stepper = (current: number, total = 3) => {
  const labels = ['Amount', 'Review', 'Done'];
  const steps = labels.slice(0, total).map((label, i) => {
    const n = i + 1;
    const state = (n < current && 'done') || (n === current && 'current') || 'todo';
    const marker = state === 'done' ? `<span class="df-icon">${CHECK}</span>` : String(n);
    return `  <div class="df-step" data-state="${state}"${state === 'current' ? ' aria-current="step"' : ''}>
    <div class="df-step-marker">${marker}</div>
    <div class="df-step-text">
      <div class="df-step-label">${label}</div>
    </div>
  </div>`;
  }).join('\n');

  return `
<div class="df-stepper">
  <div class="df-stepper-mobile" data-below="lg">
    <div class="df-step-progress" style="--df-step-progress-angle: ${Math.round((360 * current) / total)}deg">
      <p class="df-step-progress-value">${current}/${total}</p>
    </div>
    <div class="df-step-info">
      <div class="df-step-label">${labels[current - 1]}</div>
    </div>
  </div>

  <div class="df-stepper-desktop" data-from="lg">
${steps}
  </div>
</div>`.trim();
};

/**
 * Step two of three. Narrow the viewport past `lg` and the mobile summary takes
 * over — both panes are in the markup, the media query picks.
 */
export const Default: Story = htmlStory(stepper(2), { frame: FRAME });

/** Nothing done yet: the first step is `current`, the rest `todo`. */
export const FirstStep: Story = htmlStory(stepper(1), { frame: FRAME });

/** The last step, with every earlier marker showing its glyph. */
export const LastStep: Story = htmlStory(stepper(3), { frame: FRAME });

/**
 * A step may carry a second line.
 *
 * `.df-step-description` sits under the label and takes the muted colour.
 */
export const WithDescriptions: Story = htmlStory(`
<div class="df-stepper">
  <div class="df-stepper-desktop" data-from="lg">
    <div class="df-step" data-state="done">
      <div class="df-step-marker"><span class="df-icon">${CHECK}</span></div>
      <div class="df-step-text">
        <div class="df-step-label">Amount</div>
        <div class="df-step-description">$1,200.00</div>
      </div>
    </div>
    <div class="df-step" data-state="current" aria-current="step">
      <div class="df-step-marker">2</div>
      <div class="df-step-text">
        <div class="df-step-label">Review</div>
        <div class="df-step-description">Check the details</div>
      </div>
    </div>
    <div class="df-step" data-state="todo">
      <div class="df-step-marker">3</div>
      <div class="df-step-text">
        <div class="df-step-label">Done</div>
        <div class="df-step-description">Receipt by email</div>
      </div>
    </div>
  </div>
</div>`.trim(), { frame: FRAME });
