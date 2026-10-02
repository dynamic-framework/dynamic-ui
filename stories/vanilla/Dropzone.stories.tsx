import type { Meta, StoryObj } from '@storybook/react-vite';

import Html, { htmlStory } from './Html';

const UPLOAD = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
  + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
  + '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>'
  + '<polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>';

const meta: Meta<typeof Html> = {
  title: 'Vanilla/Dropzone',
  component: Html,
  parameters: {
    docs: {
      description: {
        component: `
\`data-df-dropzone\` on the markup \`DBoxFile\` renders.

## The native input does the work

Opening a file dialog, filtering by \`accept\`, allowing more than one file —
all of it belongs to \`<input type="file">\`, so the script reimplements none of
it. What it adds is the part the input cannot do: dragging onto the page, and
reflecting that back as the state attributes the stylesheet reads.

**Keep the input in your markup.** A form that posts normally needs it to have
a \`name\`, and an input the script invented would not be in the form data. The
script assigns dropped files to it and fires \`change\`, so a dropped file and a
picked one are the same thing to everything downstream.

## Dropping is a mouse gesture

There is no keyboard equivalent, which makes the box itself the keyboard path:

| | |
|---|---|
| \`role="button"\` | it is a control, so it has to say so |
| \`tabindex="0"\` | reachable |
| \`aria-label\` | named — without one a screen reader user lands on it and hears nothing |

Enter and Space open the dialog. A dropzone that is only droppable is a
dropzone most people cannot use.

## What you have to write

| | |
|---|---|
| \`.df-dropzone-wrapper\` | the block, carrying \`data-df-dropzone\` |
| \`.df-dropzone\` | the drop target and the control |
| \`input[type="file"]\` | inside it, \`hidden\` — give it a \`name\` for form posts |
| \`.df-dropzone-prompt\` | the instruction |
| \`.df-dropzone-files\` | an empty \`<ul>\`; the script fills it with \`<li>\` |

## States

\`data-valid\` and \`data-invalid\` appear while something is being dragged over
it — valid when the drag carries files, invalid when it carries anything else.
\`data-selected\` appears once there are files. \`data-disabled\` is yours to set,
and the script honours \`disabled\` on the input.

## Reacting to a change

\`\`\`js
document.addEventListener('df:dropzone:change', (event) => {
  console.log(event.detail.files);
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

const FRAME = { width: '480px' };

/** Drag a file onto it, or press Enter. */
export const Default: Story = htmlStory(`
<section class="df-dropzone-wrapper" data-df-dropzone>
  <div class="df-dropzone" role="button" tabindex="0" aria-label="Choose files, or drop them here">
    <input type="file" name="attachments" accept="image/*,.pdf" multiple hidden>
    <span class="df-icon">${UPLOAD}</span>
    <div class="df-dropzone-prompt">
      <p class="df-dropzone-hint">Drag files here, or press Enter to choose</p>
    </div>
  </div>
  <ul class="df-dropzone-files" aria-label="Selected files"></ul>
</section>`.trim(), { frame: FRAME });

/** One file only: drop the `multiple` attribute. */
export const SingleFile: Story = htmlStory(`
<section class="df-dropzone-wrapper" data-df-dropzone>
  <div class="df-dropzone" role="button" tabindex="0" aria-label="Choose a photo, or drop it here">
    <input type="file" name="photo" accept="image/png,image/jpeg" hidden>
    <span class="df-icon">${UPLOAD}</span>
    <div class="df-dropzone-prompt">
      <p class="df-dropzone-hint">PNG or JPEG</p>
    </div>
  </div>
  <ul class="df-dropzone-files" aria-label="Selected photo"></ul>
</section>`.trim(), { frame: FRAME });

/**
 * Disabled.
 *
 * `disabled` on the input is what the script reads; `data-disabled` and
 * `aria-disabled` are what the stylesheet and the screen reader read. It stays
 * focusable on purpose — a disabled control removed from the tab order is one
 * nobody can reach to learn why it is unavailable.
 */
export const Disabled: Story = htmlStory(`
<section class="df-dropzone-wrapper" data-df-dropzone>
  <div class="df-dropzone" role="button" tabindex="0" data-disabled aria-disabled="true"
       aria-label="Attachments are closed for this request">
    <input type="file" name="attachments" disabled hidden>
    <span class="df-icon">${UPLOAD}</span>
    <div class="df-dropzone-prompt">
      <p class="df-dropzone-hint">Attachments are closed for this request</p>
    </div>
  </div>
</section>`.trim(), { frame: FRAME });

/** Reacting to a change, with the complete snippet. */
export const Reacting: Story = htmlStory(`
<section class="df-dropzone-wrapper" data-df-dropzone>
  <div class="df-dropzone" role="button" tabindex="0" aria-label="Choose files, or drop them here">
    <input type="file" name="docs" multiple hidden>
    <span class="df-icon">${UPLOAD}</span>
    <div class="df-dropzone-prompt">
      <p class="df-dropzone-hint">Drop files to see the count</p>
    </div>
  </div>
  <ul class="df-dropzone-files" aria-label="Selected files"></ul>
  <p class="df-text-muted df-mt-2" data-count>No files yet</p>
</section>

<script>
  (() => {
    const root = document.currentScript.previousElementSibling;
    root.addEventListener('df:dropzone:change', (event) => {
      const n = event.detail.files.length;
      root.querySelector('[data-count]').textContent =
        n === 0 ? 'No files yet' : n + ' file' + (n === 1 ? '' : 's');
    });
  })();
</script>`.trim(), { frame: FRAME });
