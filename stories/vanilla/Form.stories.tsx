import type { Meta, StoryObj } from '@storybook/react-vite';

import Html, { htmlStory } from './Html';

const meta: Meta<typeof Html> = {
  title: 'Vanilla/Form controls',
  component: Html,
  parameters: {
    docs: {
      description: {
        component: `
Inputs, selects, checkboxes, radios and switches. **No \`data-df-\` attribute
and no script** — these are native controls with classes on them, so typing,
validation, the label association and the keyboard all come from the browser.

## The three-part shape

Every text field is the same three pieces:

| | |
|---|---|
| \`.df-field\` | the wrapper — groups the label, the control and the help text |
| \`.df-label\` | a real \`<label for>\`, not a styled \`<span>\` |
| \`.df-input-group\` | holds the input and any addons; **it owns the border** |
| \`.df-input\` | the control itself |
| \`.df-help\` | hint or error text, with an \`id\` the input points at |

The group owning the border is the part people get wrong. The input drops its
own so the two read as one control — a border on both draws the box twice,
with a band of dead space between them.

## Validity

Two attributes, and you need both:

\`\`\`html
<input class="df-input" data-invalid aria-invalid="true" aria-describedby="amountHint">
<div class="df-help" id="amountHint">Not enough funds</div>
\`\`\`

\`data-invalid\` is the styling hook — it turns the border red. \`aria-invalid\`
is what a screen reader hears. Writing only the first paints the field and
tells assistive technology nothing, which leaves colour as the sole cue that
something is wrong.

Every id in \`aria-describedby\` has to exist on the page. A dangling one is
dropped silently, not fallen back from.

## Choice controls

A checkbox, a radio and a switch are the same markup with a different \`type\`,
plus \`role="switch"\` on the third:

| | |
|---|---|
| \`.df-choice\` | the row |
| \`.df-choice-control\` | wraps the input and its mark — **checkbox only** |
| \`.df-choice-mark\` | the tick overlay, a sibling of the input |
| \`.df-choice-label\` | the label |

The tick is a separate element rather than a mask on the input, because a mask
applies to the whole element including its border — the box disappeared and
left a floating tick.

## Floating labels

The label goes AFTER the input inside \`.df-input-floating\`, and the input
needs \`placeholder=""\`. The CSS moves the label when the field is not empty,
which it detects with \`:placeholder-shown\` — an input with no placeholder
attribute never matches it, so the label never moves.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Html>;

const FRAME = { width: '420px' };

/** Label, control, hint. */
export const TextField: Story = htmlStory(`
<div class="df-field">
  <label class="df-label" for="account">Account</label>
  <div class="df-input-group">
    <input id="account" class="df-input" placeholder="000-000" aria-describedby="accountHint">
  </div>
  <div class="df-help" id="accountHint">As it appears on your card</div>
</div>`.trim(), { frame: FRAME });

/** `data-invalid` for the eye, `aria-invalid` for everyone else. */
export const Validity: Story = htmlStory(`
<div class="df-field">
  <label class="df-label" for="amount">Amount</label>
  <div class="df-input-group">
    <input id="amount" class="df-input" value="1200"
           data-invalid aria-invalid="true" aria-describedby="amountHint">
  </div>
  <div class="df-help" id="amountHint">Not enough funds</div>
</div>

<div class="df-field df-mt-4">
  <label class="df-label" for="iban">IBAN</label>
  <div class="df-input-group">
    <input id="iban" class="df-input" value="ES91 2100 0418 45" data-valid>
  </div>
</div>`.trim(), { frame: FRAME });

/** Addons live inside the group, beside the input, sharing its border. */
export const Addons: Story = htmlStory(`
<div class="df-field">
  <label class="df-label" for="transfer">Amount</label>
  <div class="df-input-group">
    <div class="df-input-group-addon" id="transferStart">$</div>
    <input id="transfer" class="df-input" aria-describedby="transferStart transferEnd">
    <div class="df-input-group-addon" id="transferEnd">USD</div>
  </div>
</div>`.trim(), { frame: FRAME });

/**
 * The label after the input, and `placeholder=""` on the input.
 *
 * Without the empty placeholder the CSS cannot tell a filled field from an
 * empty one — `:placeholder-shown` never matches an input that has no
 * placeholder attribute at all.
 */
export const FloatingLabel: Story = htmlStory(`
<div class="df-field">
  <div class="df-input-group">
    <div class="df-input-floating">
      <input id="recipient" class="df-input" placeholder="">
      <label class="df-label" for="recipient">Recipient</label>
    </div>
  </div>
</div>`.trim(), { frame: FRAME });

/** Disabled and read-only are different: one refuses input, one refuses edits. */
export const States: Story = htmlStory(`
<div class="df-field">
  <label class="df-label" for="closed">Disabled</label>
  <div class="df-input-group">
    <input id="closed" class="df-input" value="Closed" disabled>
  </div>
</div>

<div class="df-field df-mt-4">
  <label class="df-label" for="ref">Read-only</label>
  <div class="df-input-group">
    <input id="ref" class="df-input" value="884-221" readonly>
  </div>
</div>`.trim(), { frame: FRAME });

/** A native `<select>`, which needs no script to be a select. */
export const Select: Story = htmlStory(`
<div class="df-field">
  <label class="df-label" for="currency">Currency</label>
  <div class="df-input-group">
    <select id="currency" class="df-select">
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
      <option value="gbp">GBP</option>
    </select>
  </div>
</div>`.trim(), { frame: FRAME });

/**
 * The checkbox is the one with an extra element: `.df-choice-control` wraps
 * the input and the tick overlay. A radio and a switch do not need it.
 */
export const Choices: Story = htmlStory(`
<div class="df-choice">
  <span class="df-choice-control">
    <input class="df-choice-input" id="terms" type="checkbox" checked>
    <span class="df-choice-mark" aria-hidden="true"></span>
  </span>
  <label class="df-choice-label" for="terms">I agree to the terms</label>
</div>

<div class="df-choice df-mt-3">
  <input class="df-choice-input" id="savings" type="radio" name="kind" checked>
  <label class="df-choice-label" for="savings">Savings</label>
</div>

<div class="df-choice df-mt-2">
  <input class="df-choice-input" id="checking" type="radio" name="kind">
  <label class="df-choice-label" for="checking">Checking</label>
</div>

<div class="df-choice df-mt-3">
  <input class="df-choice-input" id="notify" role="switch" type="checkbox" checked>
  <label class="df-choice-label" for="notify">Notifications</label>
</div>`.trim(), { frame: FRAME });

/** Validity reaches the choice controls through the same two attributes. */
export const ChoiceValidity: Story = htmlStory(`
<div class="df-choice">
  <span class="df-choice-control">
    <input class="df-choice-input" id="accept" type="checkbox"
           data-invalid aria-invalid="true" aria-describedby="acceptHint">
    <span class="df-choice-mark" aria-hidden="true"></span>
  </span>
  <label class="df-choice-label" for="accept">Accept the conditions</label>
</div>
<div class="df-help" id="acceptHint">You have to accept to continue</div>`.trim(), { frame: FRAME });
