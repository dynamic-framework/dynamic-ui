import type { Meta, StoryObj } from '@storybook/react-vite';

import Html, { htmlStory } from './Html';

/**
 * The same box the React stories put each collapse in.
 *
 * Presentation only — the component has no width of its own, it is a block and
 * fills whatever holds it. Without the frame the vanilla story stretched the
 * full canvas and jumped as it opened, which read as a layout bug in the
 * component rather than as the absence of a container in the page.
 */
const FRAME = { width: '320px', height: '320px' };

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

## Opening it from elsewhere

A trigger anywhere on the page can drive a collapse by naming its body id:

\`\`\`html
<button data-df-collapse-toggle="faq-1">Toggle</button>
<button data-df-collapse-open="faq-1">Open</button>
<button data-df-collapse-close="faq-1">Close</button>
\`\`\`

Or from script: \`DF.toggleCollapse('faq-1')\`, optionally with \`true\`/\`false\`
to force a direction.

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
export const Default: Story = htmlStory(item(1), { frame: FRAME });

/** `data-expanded` on the body, and it opens on load. */
export const StartsOpen: Story = htmlStory(item(2, true), { frame: FRAME });

/**
 * Each one is independent — there is no accordion behaviour here, because an
 * accordion is a decision about a group and this attribute is about one panel.
 */
export const Several: Story = htmlStory(
  [item(3), item(4, true), item(5)].join('\n'),
  { frame: { width: '320px' } },
);

/**
 * Opened from somewhere else on the page.
 *
 * `data-df-collapse-toggle` names the id of the BODY — the same id
 * `aria-controls` already names, so there is no second id to invent. It mirrors
 * the modal's `data-df-modal-open`, which is the precedent for a trigger that
 * does not live inside the thing it controls.
 *
 * `data-df-collapse-open` and `-close` are the one-way versions, for a trigger
 * that should only ever open or only ever close.
 */
export const ExternalTrigger: Story = htmlStory(`
<div class="df-flex df-gap-2 df-mb-4">
  <button class="df-button" data-variant="outline" data-color="primary"
          data-df-collapse-toggle="cb-ext">Toggle</button>
  <button class="df-button" data-variant="outline" data-color="neutral"
          data-df-collapse-open="cb-ext">Open</button>
  <button class="df-button" data-variant="outline" data-color="neutral"
          data-df-collapse-close="cb-ext">Close</button>
</div>

<div class="df-collapse" data-df-collapse>
  <button class="df-collapse-trigger" type="button" aria-expanded="false" aria-controls="cb-ext">
    <div class="df-collapse-trigger-label">How do I report a lost card?</div>
    <span class="df-icon df-collapse-trigger-end df-collapse-trigger-icon" data-color="primary">
      ${CHEVRON}
    </span>
  </button>
  <div class="df-collapse-body" id="cb-ext">
    <div class="df-collapse-body-inner">
      <p class="df-m-0">Freeze it in the app, then call us on 600 123 456.</p>
    </div>
  </div>
</div>`.trim(), { frame: { width: '420px', height: '320px' } });
