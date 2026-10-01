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
| \`.df-step-marker\` | the number — it stays on every step |
| \`.df-step-check\` | the badge a completed step adds, on top of the number |
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

## Stacked

\`data-orientation="vertical"\` on \`.df-stepper-desktop\` turns the row into a
column: the markers stack, the text sits beside each one, and the connector
runs down instead of across.

Two things the row does not need and the column does — both were missing, and
both are tokens now:

- \`--df-stepper-vertical-step-gap\` separates the steps. Across a row they
  share the width with \`flex: 1 1 0\` and the spacing falls out of that;
  stacked, nothing separates them.
- \`--df-stepper-line-gap-vertical\` is the clearance at each end of the
  connector, so it stops short of both rings. The gap has to exceed that
  clearance doubled or a step with no description gets no connector at all —
  \`css:verify\` fails the build if it does not.

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
    /* The number always stays; a done step ADDS the badge beside it. */
    const badge = state === 'done'
      ? `<span class="df-icon df-step-check">${CHECK}</span>`
      : '';
    return `  <div class="df-step" data-state="${state}"${state === 'current' ? ' aria-current="step"' : ''}>
    <div class="df-step-marker">${n}${badge}</div>
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
      <div class="df-step-marker">1<span class="df-icon df-step-check">${CHECK}</span></div>
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

/**
 * Stacked, which is the layout a long flow wants.
 *
 * Note the connector: it starts below one ring and stops above the next, and
 * it has to cross the gap BETWEEN steps as well as the remainder of its own
 * step. It used to start flush against the marker and run the full height of
 * the step, so it touched the ring above and overshot into the one below.
 */
export const Vertical: Story = htmlStory(`
<div class="df-stepper">
  <div class="df-stepper-desktop" data-from="lg" data-orientation="vertical">
    <div class="df-step" data-state="done">
      <div class="df-step-marker">1<span class="df-icon df-step-check">${CHECK}</span></div>
      <div class="df-step-text">
        <div class="df-step-label">Create Account</div>
        <div class="df-step-description">Sign up with your email and password</div>
      </div>
    </div>

    <div class="df-step" data-state="current" aria-current="step">
      <div class="df-step-marker">2</div>
      <div class="df-step-text">
        <div class="df-step-label">Verify Email</div>
        <div class="df-step-description">Check your inbox for verification link</div>
      </div>
    </div>

    <div class="df-step" data-state="todo">
      <div class="df-step-marker">3</div>
      <div class="df-step-text">
        <div class="df-step-label">Complete Profile</div>
        <div class="df-step-description">Add your profile information and preferences</div>
      </div>
    </div>
  </div>
</div>`.trim(), { frame: { width: '520px' } });

/**
 * Stacked with labels only.
 *
 * The shortest a step can be: no description, so its height is exactly its
 * marker. Everything left for the connector is the gap between steps minus the
 * clearance at each end — which is why that relationship is checked rather
 * than left to arithmetic nobody re-does when they retune a token.
 */
export const VerticalLabelsOnly: Story = htmlStory(`
<div class="df-stepper">
  <div class="df-stepper-desktop" data-from="lg" data-orientation="vertical">
    <div class="df-step" data-state="done">
      <div class="df-step-marker">1<span class="df-icon df-step-check">${CHECK}</span></div>
      <div class="df-step-text"><div class="df-step-label">Amount</div></div>
    </div>
    <div class="df-step" data-state="current" aria-current="step">
      <div class="df-step-marker">2</div>
      <div class="df-step-text"><div class="df-step-label">Review</div></div>
    </div>
    <div class="df-step" data-state="todo">
      <div class="df-step-marker">3</div>
      <div class="df-step-text"><div class="df-step-label">Done</div></div>
    </div>
  </div>
</div>`.trim(), { frame: { width: '320px' } });
