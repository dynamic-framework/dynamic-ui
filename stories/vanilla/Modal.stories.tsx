import type { Meta, StoryObj } from '@storybook/react-vite';

import Html, { htmlStory } from './Html';

const meta: Meta<typeof Html> = {
  title: 'Vanilla/Modal',
  component: Html,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A real \`<dialog>\`, carrying the same classes and attributes the React build
puts on a \`<div>\` — the stylesheet reads \`.df-overlay[data-placement="center"]\` and
does not care what the tag is.

## What you have to write

| | |
|---|---|
| \`<dialog class="df-overlay" data-placement="center" id="…" data-df-modal>\` | the panel |
| \`.df-overlay-header\` / \`-body\` / \`-footer\` | its sections |
| \`<hr class="df-overlay-separator">\` | between them, as React renders |
| \`.df-button.df-overlay-dismiss\` | the close control — \`df-overlay-dismiss\` is what keeps it at the end of the header and vertically centred |

\`data-size\` takes \`sm\`, \`md\`, \`lg\` or \`xl\`, the same as the React prop.

## Opening and closing it

\`data-df-modal-open="id"\` on any button opens it. Any
\`data-df-modal-close\` inside closes it. From your own code:

\`\`\`js
DF.openModal('terms');
DF.closeModal('terms');
\`\`\`

## What the tag buys, none of which is written here

- **Focus is trapped**, and restored to the opener on close.
- **The rest of the page is inert**, so a screen reader cannot wander out of the
  modal into the page behind it.
- **Escape closes it**, with a \`cancel\` event to veto.
- **The top layer**, so it is above everything regardless of \`z-index\` — the
  bug every hand-rolled modal eventually has.
- **\`::backdrop\`**, so there is no backdrop element to insert and remove. It
  reads \`--df-overlay-backdrop-color\`, the same token the React build's
  \`.df-backdrop\` element uses.

A hand-written focus trap is the single most common source of modal
accessibility bugs. Not writing one is the feature.

## What the script does

Three small things: opens from \`data-df-modal-open\`, closes from any
\`data-df-modal-close\` inside, and closes on a click outside the panel. A click
on the backdrop has the dialog itself as its target, which is the only signal
\`<dialog>\` gives for "outside".

\`data-static-backdrop\` refuses both of those ways out, for a modal that has to
be answered rather than dismissed.

## Reacting to it

\`\`\`js
document.addEventListener('df:modal:open', (event) => { … });
document.addEventListener('df:modal:close', (event) => { … });
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Html>;

const CROSS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
  + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
  + '<path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';

const dialog = (id: string, options = '') => `
<button class="df-button" data-variant="solid" data-color="primary" data-df-modal-open="${id}">
  Open the modal
</button>

<dialog class="df-overlay" data-placement="center" data-size="md" id="${id}" data-df-modal${options}>
  <div class="df-overlay-header">
    <div>Confirm the transfer</div>
    <button type="button" class="df-button df-overlay-dismiss" data-variant="link"
            data-color="neutral" data-size="sm" data-icon-only aria-label="Close" data-df-modal-close>
      <span class="df-icon">${CROSS}</span>
    </button>
  </div>
  <hr class="df-overlay-separator" />
  <div class="df-overlay-body">
    <p class="df-m-0">You are sending <strong>$1,250.00</strong> to Ana Pérez. This cannot be undone.</p>
  </div>
  <hr class="df-overlay-separator" />
  <div class="df-overlay-footer">
    <button class="df-button" data-variant="outline" data-color="neutral" data-df-modal-close>Cancel</button>
    <button class="df-button" data-variant="solid" data-color="primary" data-df-modal-close>Send</button>
  </div>
</dialog>`.trim();

/** Header, body and footer, with the separators React renders between them. */
export const Default: Story = htmlStory(dialog('vanilla-modal'));

/**
 * Nothing outside the panel closes it: not the backdrop, not Escape. For a
 * decision that has to be made rather than dismissed.
 */
export const StaticBackdrop: Story = htmlStory(dialog('vanilla-modal-static', ' data-static-backdrop'));

/** The body is the only required section. */
export const BodyOnly: Story = htmlStory(`
<button class="df-button" data-variant="solid" data-color="primary" data-df-modal-open="vanilla-modal-plain">
  Open
</button>

<dialog class="df-overlay" data-placement="center" data-size="sm" id="vanilla-modal-plain" data-df-modal>
  <div class="df-overlay-body">
    <p class="df-m-0">Your session will end in two minutes.</p>
  </div>
  <div class="df-overlay-footer">
    <button class="df-button" data-variant="solid" data-color="primary" data-df-modal-close>Stay signed in</button>
  </div>
</dialog>`.trim());
