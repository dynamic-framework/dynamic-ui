import type { Meta, StoryObj } from '@storybook/react-vite';

import Html, { htmlStory } from './Html';

/**
 * The sprite used by the examples on this page.
 *
 * Four symbols, which is what the markup below references. A real site pastes
 * its own — see the guide in the page description.
 */
const SPRITE = `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="display:none">
  <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></symbol>
  <symbol id="i-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></symbol>
  <symbol id="i-chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></symbol>
  <symbol id="i-circle-alert" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></symbol>
</svg>`;

const meta: Meta<typeof Html> = {
  title: 'Vanilla/Icons',
  component: Html,
  parameters: {
    docs: {
      description: {
        component: `
React imports the icons it uses and the bundler drops the rest. Plain HTML has
no bundler, so it needs a convention — this is ours.

## The short version

Put a sprite in a Modyo snippet, include it once in the layout, reference the
symbols anywhere:

\`\`\`html
<svg class="df-icon"><use href="#i-check"/></svg>
\`\`\`

## 1. Choose the icons

Browse [lucide.dev/icons](https://lucide.dev/icons) and note the names. They
are kebab-case — \`circle-alert\`, not \`AlertCircle\`.

A site usually lands on fifteen to twenty. That is about 4 KB of markup, which
gzips with the page.

## 2. Generate the sprite

\`\`\`bash
npm run icons -- check x chevron-down circle-alert --liquid
\`\`\`

Or start from the set the framework's own components need, and add to it:

\`\`\`bash
npm run icons -- --core --liquid
\`\`\`

The generator reads the geometry out of the same Lucide package React uses, so
the two builds cannot drift onto different versions of a glyph.

## 3. Paste it into a snippet

In Modyo: **Snippets → New**, name it \`icons\`, paste the output.

Then include it **once**, in the layout, before anything that uses an icon:

\`\`\`liquid
<body>
  {% include 'icons' %}
  ...
</body>
\`\`\`

Once per page, not per component. The symbols are definitions; \`display:none\`
on the sprite keeps them from rendering, and \`<use>\` clones them where you
ask.

## 4. Use them

\`\`\`html
<span class="df-icon"><svg><use href="#i-check"/></svg></span>
\`\`\`

\`.df-icon\` is the wrapper; the \`<svg>\` goes inside it. That is the shape
\`DIcon\` renders, so the same stylesheet sizes and colours both.

## Why a snippet and not a hosted file

\`<use href="https://cdn…/sprite.svg#i-check">\` works, and it is the wrong
trade here. An external reference is a cross-origin request: it needs CORS on
the bucket, it fails **silently** when that is missing — the icon simply does
not appear, with nothing in the console in some browsers — and it costs a round
trip before any icon paints.

A same-document fragment has none of those failure modes, and twenty icons is
smaller than the request would have been.

## The rules that matter

| | |
|---|---|
| \`id\` prefix | \`i-\` on every symbol, so an icon id cannot collide with a section anchor |
| \`currentColor\` | the symbols carry \`stroke="currentColor"\`, so an icon takes its parent's text colour — that is how \`data-color\` and dark mode reach it |
| sizing | \`--df-icon-inline-size\` on the wrapper, never \`width\` on the svg |
| decoration | an icon beside a label needs nothing; an icon that IS the control needs an \`aria-label\` on the control |

## Updating

Re-run the command and paste again. The icon names are the input, so the
snippet is reproducible — put the command in a comment at the top of it, which
\`--liquid\` does for you.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Html>;

/** A sprite, and the four ways you reach into it. */
export const Default: Story = htmlStory(`${SPRITE}

<div class="df-flex df-gap-4 df-items-center">
  <span class="df-icon"><svg><use href="#i-check"/></svg></span>
  <span class="df-icon"><svg><use href="#i-x"/></svg></span>
  <span class="df-icon"><svg><use href="#i-chevron-down"/></svg></span>
  <span class="df-icon"><svg><use href="#i-circle-alert"/></svg></span>
</div>`.trim(), { frame: { width: '420px' } });

/**
 * Colour comes from the parent, because the symbols are `currentColor`.
 *
 * Nothing on the icon says what colour it is — which is what lets one symbol
 * serve a danger alert, a success toast and a muted hint.
 */
export const Colour: Story = htmlStory(`${SPRITE}

<div class="df-flex df-gap-4 df-items-center">
  <span class="df-icon df-text-primary"><svg><use href="#i-circle-alert"/></svg></span>
  <span class="df-icon df-text-danger"><svg><use href="#i-circle-alert"/></svg></span>
  <span class="df-icon df-text-success"><svg><use href="#i-check"/></svg></span>
  <span class="df-icon df-text-muted"><svg><use href="#i-check"/></svg></span>
</div>`.trim(), { frame: { width: '420px' } });

/** Size is a custom property on the wrapper, not an attribute on the svg. */
export const Size: Story = htmlStory(`${SPRITE}

<div class="df-flex df-gap-4 df-items-center">
  <span class="df-icon" style="--df-icon-inline-size: 16px"><svg><use href="#i-check"/></svg></span>
  <span class="df-icon"><svg><use href="#i-check"/></svg></span>
  <span class="df-icon" style="--df-icon-inline-size: 32px"><svg><use href="#i-check"/></svg></span>
  <span class="df-icon" style="--df-icon-inline-size: 48px"><svg><use href="#i-check"/></svg></span>
</div>`.trim(), { frame: { width: '420px' } });

/**
 * In a component, where the icon is part of the markup the stylesheet expects.
 *
 * This is the same button `DButton` renders — the icon sits inside
 * `.df-button-label`, which is the flex row that owns the gap.
 */
export const InComponents: Story = htmlStory(`${SPRITE}

<div class="df-flex df-gap-3 df-items-center">
  <button type="button" class="df-button" data-variant="solid" data-color="primary">
    <span class="df-button-label">
      <span class="df-icon df-button-icon"><svg><use href="#i-check"/></svg></span>
      Confirm
    </span>
  </button>

  <button type="button" class="df-button" data-variant="link" data-color="neutral"
          data-icon-only aria-label="Close">
    <span class="df-button-label">
      <span class="df-icon df-button-icon"><svg><use href="#i-x"/></svg></span>
    </span>
  </button>
</div>`.trim(), { frame: { width: '420px' } });

/** `data-circle` gives the glyph a tinted disc, taken from its own colour. */
export const Circle: Story = htmlStory(`${SPRITE}

<div class="df-flex df-gap-4 df-items-center">
  <span class="df-icon df-text-success" data-circle><svg><use href="#i-check"/></svg></span>
  <span class="df-icon df-text-danger" data-circle><svg><use href="#i-circle-alert"/></svg></span>
  <span class="df-icon df-text-primary" data-circle style="--df-icon-inline-size: 32px"><svg><use href="#i-check"/></svg></span>
</div>`.trim(), { frame: { width: '420px' } });
