import type { Meta, StoryObj } from '@storybook/react-vite';

import Html, { htmlStory } from './Html';

const meta: Meta<typeof Html> = {
  title: 'Vanilla/Collapse',
  component: Html,
  parameters: {
    docs: {
      description: {
        component: `
\`data-df-collapse\`. The script toggles one attribute — \`data-expanded\` on the
body — and keeps \`aria-expanded\` on the trigger in step.

## What you have to write

The three elements \`DCollapse\` renders, which is what the stylesheet is
written against:

| | |
|---|---|
| \`.df-collapse\` | the wrapper, carrying \`data-df-collapse\` |
| \`.df-collapse-trigger\` | a \`<button>\`, with \`aria-expanded\` |
| \`.df-collapse-body\` > \`.df-collapse-body-inner\` | the two are both needed: the outer one animates its height, the inner one holds the padding so there is nothing to collapse into |

The trigger's label goes in \`.df-collapse-trigger-label\`, and the chevron in a
\`.df-icon.df-collapse-trigger-end.df-collapse-trigger-icon\` — the stylesheet
rotates that one on open, and pushes anything with \`-trigger-end\` to the far
side.

## The icon is yours

React resolves it through the icon registry. In plain HTML you supply the glyph:
an inline \`<svg>\`, as below, or an icon-font element —
\`<i class="df-icon … bi bi-chevron-down">\` — since \`.df-icon\` sizes either.

## Starting open

One attribute: \`data-expanded\` on the body. The body is the source of truth
because it is what paints, so if it disagrees with the trigger's
\`aria-expanded\`, the body wins and the trigger is corrected.

## There is no measuring

The usual way to animate a collapse is to read \`scrollHeight\`, set an explicit
pixel height, transition it, then clear it — a layout on every toggle, and
broken the moment the content reflows mid-animation.

\`collapse.css\` uses \`interpolate-size: allow-keywords\`, so \`height: auto\`
animates by itself. A browser without it snaps open, which is the right failure:
the content is there either way.

## Reacting to a toggle

\`\`\`js
document.addEventListener('df:collapse:toggle', (event) => {
  console.log(event.detail.expanded);
});
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Html>;

const CHEVRON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
  + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';

const item = (n: number, open = false) => `
<div class="df-collapse" data-df-collapse>
  <button class="df-collapse-trigger" type="button" aria-expanded="${open}" aria-controls="cb-${n}">
    <div class="df-collapse-trigger-label">How do I report a lost card?</div>
    <span class="df-icon df-collapse-trigger-end df-collapse-trigger-icon" data-color="primary">
      ${CHEVRON}
    </span>
  </button>
  <div class="df-collapse-body" id="cb-${n}"${open ? ' data-expanded' : ''}>
    <div class="df-collapse-body-inner">
      <p class="df-m-0">Freeze it in the app, then call us on 600 123 456.</p>
    </div>
  </div>
</div>`.trim();

/** The markup in full, closed. */
export const Default: Story = htmlStory(item(1));

/** `data-expanded` on the body, and it opens on load. */
export const StartsOpen: Story = htmlStory(item(2, true));

/**
 * Each one is independent — there is no accordion behaviour here, because an
 * accordion is a decision about a group and this attribute is about one panel.
 */
export const Several: Story = htmlStory([item(3), item(4, true), item(5)].join('\n'));
