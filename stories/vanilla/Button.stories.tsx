import type { Meta, StoryObj } from '@storybook/react-vite';

import Html, { htmlStory } from './Html';

const meta: Meta<typeof Html> = {
  title: 'Vanilla/Button',
  component: Html,
  parameters: {
    docs: {
      description: {
        component: `
A button is **markup only**. There is no \`data-df-\` attribute here and no
behaviour to register: a \`<button>\` already does what a button does. Load the
stylesheet and the markup below works with the JavaScript bundle absent.

That is worth stating because it is true of most of the library. The
framework-free layer exists for the handful of components that need a script —
tabs, collapse, modal, toast — and everything else is a class and a couple of
attributes.

## What you have to write

| | |
|---|---|
| \`.df-button\` | the base class, on a real \`<button>\` |
| \`data-variant\` | \`solid\` · \`outline\` · \`link\` |
| \`data-color\` | \`primary\` · \`secondary\` · \`success\` · \`info\` · \`warning\` · \`danger\` · \`neutral\` · \`inverse\` |
| \`data-size\` | \`sm\` · \`lg\` — omit for the default |
| \`.df-button-label\` | wraps the text AND any icons; it is the flex row that spaces them |

The label span is not optional. The button is a one-cell grid so the spinner
can share the cell with the label without being positioned absolutely, and the
\`gap\` between an icon and its text belongs to the label row.

## Icons are yours

React resolves the glyph through the icon registry. In plain HTML you supply
it: an icon-font element as below, or an inline \`<svg>\`. Either works —
\`.df-icon\` sizes both, and \`.df-button-icon\` sets it to \`1em\` so the glyph
tracks the button's text size.

## Loading

\`data-loading\` plus \`aria-busy="true"\`, and \`disabled\` so it cannot be pressed
twice. The spinner and the label occupy the same grid cell, so the button keeps
the width it had — it does not jump.

## Appearance

Every variant and colour is the same attribute the React component sets, and is
documented under **Design System › Components › Button**.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Html>;

const FRAME = { width: '480px' };

/** The three variants, each at the default colour. */
export const Variants: Story = htmlStory(`
<div class="df-flex df-gap-2 df-items-center">
  <button type="button" class="df-button" data-variant="solid" data-color="primary">
    <span class="df-button-label">Transfer</span>
  </button>

  <button type="button" class="df-button" data-variant="outline" data-color="secondary">
    <span class="df-button-label">Cancel</span>
  </button>

  <button type="button" class="df-button" data-variant="link" data-color="primary">
    <span class="df-button-label">Learn more</span>
  </button>
</div>`.trim(), { frame: FRAME });

/** `data-color` selects the role. The same eight serve every variant. */
export const Colors: Story = htmlStory(`
<div class="df-flex df-flex-wrap df-gap-2 df-items-center">
  <button type="button" class="df-button" data-variant="solid" data-color="primary">
    <span class="df-button-label">Primary</span>
  </button>
  <button type="button" class="df-button" data-variant="solid" data-color="secondary">
    <span class="df-button-label">Secondary</span>
  </button>
  <button type="button" class="df-button" data-variant="solid" data-color="success">
    <span class="df-button-label">Success</span>
  </button>
  <button type="button" class="df-button" data-variant="solid" data-color="danger">
    <span class="df-button-label">Danger</span>
  </button>
  <button type="button" class="df-button" data-variant="solid" data-color="warning">
    <span class="df-button-label">Warning</span>
  </button>
  <button type="button" class="df-button" data-variant="solid" data-color="neutral">
    <span class="df-button-label">Neutral</span>
  </button>
</div>`.trim(), { frame: FRAME });

/** `data-size`, with the default in the middle. */
export const Sizes: Story = htmlStory(`
<div class="df-flex df-gap-2 df-items-center">
  <button type="button" class="df-button" data-variant="solid" data-color="primary" data-size="sm">
    <span class="df-button-label">Small</span>
  </button>

  <button type="button" class="df-button" data-variant="solid" data-color="primary">
    <span class="df-button-label">Default</span>
  </button>

  <button type="button" class="df-button" data-variant="solid" data-color="primary" data-size="lg">
    <span class="df-button-label">Large</span>
  </button>
</div>`.trim(), { frame: FRAME });

/**
 * Icons go INSIDE `.df-button-label`, not beside it.
 *
 * That span is the flex row that owns the gap. An icon placed as a sibling of
 * it sits in the grid cell with no spacing of its own.
 */
export const WithIcons: Story = htmlStory(`
<div class="df-flex df-gap-2 df-items-center">
  <button type="button" class="df-button" data-variant="solid" data-color="primary">
    <span class="df-button-label">
      <i class="df-icon df-button-icon bi bi-download"></i>
      Download
    </span>
  </button>

  <button type="button" class="df-button" data-variant="outline" data-color="secondary">
    <span class="df-button-label">
      Continue
      <i class="df-icon df-button-icon bi bi-arrow-right"></i>
    </span>
  </button>
</div>`.trim(), { frame: FRAME });

/**
 * Icon only, which needs an `aria-label` because there is no text to announce.
 *
 * `data-icon-only` squares off the padding.
 */
export const IconOnly: Story = htmlStory(`
<div class="df-flex df-gap-2 df-items-center">
  <button type="button" class="df-button" data-variant="solid" data-color="primary"
          data-icon-only aria-label="Close">
    <span class="df-button-label"><i class="df-icon df-button-icon bi bi-x"></i></span>
  </button>

  <button type="button" class="df-button" data-variant="link" data-color="neutral"
          data-icon-only data-size="sm" aria-label="More options">
    <span class="df-button-label"><i class="df-icon df-button-icon bi bi-three-dots"></i></span>
  </button>
</div>`.trim(), { frame: FRAME });

/**
 * `data-loading`, `aria-busy="true"` and `disabled` together.
 *
 * The spinner shares a grid cell with the label rather than being positioned
 * over it, so the button keeps its width instead of collapsing to the spinner.
 */
export const Loading: Story = htmlStory(`
<div class="df-flex df-gap-2 df-items-center">
  <button type="button" class="df-button" data-variant="solid" data-color="primary"
          data-loading aria-busy="true" disabled>
    <span class="df-button-spinner"><span class="df-spinner" aria-hidden="true"></span></span>
    <span class="df-button-label">Saving</span>
  </button>

  <button type="button" class="df-button" data-variant="outline" data-color="secondary" disabled>
    <span class="df-button-label">Disabled</span>
  </button>
</div>`.trim(), { frame: FRAME });
