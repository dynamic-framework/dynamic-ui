import type { Meta, StoryObj } from '@storybook/react-vite';

import Html, { htmlStory } from './Html';

const meta: Meta<typeof Html> = {
  component: Html,
  title: 'Vanilla/Toast',
  parameters: {
    docs: {
      description: {
        component: `
The one component in this phase that is created rather than enhanced — a toast
announces something that just happened, so there is nothing in the page for it
to attach to.

\`\`\`html
<div>
  <button type="button" class="df-button" data-color="primary">
    <span class="df-button-label">Save</span>
  </button>
</div>

<script>
  (() => {
    const root = document.currentScript.previousElementSibling;
    root.querySelector('button').addEventListener('click', () => {
      DF.toast({ title: 'Saved' });
    });
  })();
</script>
\`\`\`

Every example on this page is the WHOLE snippet — the button and the script
that wires it, not just the call. The button is the half a template author has
to write, and it is the half that has a shape worth getting right (the label
has to be in a \`.df-button-label\`, or an icon beside it gets no gap).

## Why the script looks for its own root

\`document.getElementById('save')\` would be the obvious line and it breaks the
moment the snippet appears **twice on one page** — which a Modyo widget can,
and which Storybook's own docs page does for the first story on it. Both
copies of the script then find the SAME button, because \`getElementById\`
returns the first match in the document, and one press fires two toasts.

\`document.currentScript\` is the script's own element, so
\`previousElementSibling\` is the markup it was written for. The IIFE around it
is the other half: inline scripts share one global scope, so a second copy of
a \`const\` is a \`SyntaxError\` that stops the whole script.

Both are why these are plain \`<script>\` and not \`type="module"\` — a module
gets its own scope for free, but \`document.currentScript\` is \`null\` inside
one.

\`DF.toast()\` returns a function that dismisses the toast early.

## The region is the live region

The container is announced, not each toast. A live region inserted at the same
moment as its content is frequently not announced at all — assistive technology
has to be watching the element before the change happens. So the region goes
into the page once, and toasts are added to it.

## It waits while you read it

The timer pauses on hover and on focus, and resumes when you leave. A toast
that vanishes mid-sentence, or while you are tabbing to its action, is the
complaint everyone has about toasts; WCAG 2.2.1 asks for the same thing.

\`duration: 0\` keeps it until dismissed.

## The title is text

Built with the DOM rather than \`innerHTML\`, because a toast title usually
comes straight from a server response. Markup in that response is shown as
text, not parsed.

## Server-rendered toasts

A toast already in the markup is enhanced like anything else, so a confirmation
rendered by the server gets the same dismiss button and timer:

\`\`\`html
<div class="df-toast" data-df-toast data-duration="6000">…</div>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Html>;

const FRAME = { width: '520px' };

/**
 * A button that fires a toast — the markup AND the script that wires it.
 *
 * The buttons used to be a React component declared in this file, with the
 * source showing only the `DF.toast(...)` call beside them. That left out the
 * half a template author has to write, and the half that was shown rendered
 * markup the Button page says is wrong: no `.df-button-label`, so an icon in
 * one would have had no gap.
 *
 * `Html` re-creates inline `<script>` elements so they run — a script inserted
 * through `innerHTML` is parsed and deliberately not executed — which is what
 * lets the example be the same object as the thing on screen.
 */
export const Default: Story = htmlStory(`
<div>
  <button type="button" class="df-button" data-variant="solid" data-color="primary">
    <span class="df-button-label">Save</span>
  </button>
</div>

<script>
  (() => {
    const root = document.currentScript.previousElementSibling;
    root.querySelector('button').addEventListener('click', () => {
      DF.toast({ title: 'Saved' });
    });
  })();
</script>`.trim(), { frame: FRAME });

/** `color` takes the same roles as everything else. */
export const Colours: Story = htmlStory(`
<div class="df-flex df-flex-wrap df-gap-3">
  <button type="button" class="df-button" data-variant="outline" data-color="neutral" data-toast="neutral">
    <span class="df-button-label">Neutral</span>
  </button>
  <button type="button" class="df-button" data-variant="outline" data-color="success" data-toast="success">
    <span class="df-button-label">Success</span>
  </button>
  <button type="button" class="df-button" data-variant="outline" data-color="danger" data-toast="danger">
    <span class="df-button-label">Danger</span>
  </button>
  <button type="button" class="df-button" data-variant="outline" data-color="warning" data-toast="warning">
    <span class="df-button-label">Warning</span>
  </button>
  <button type="button" class="df-button" data-variant="outline" data-color="info" data-toast="info">
    <span class="df-button-label">Info</span>
  </button>
</div>

<script>
  (() => {
  const root = document.currentScript.previousElementSibling;
  const titles = {
    neutral: 'Saved',
    success: 'Transfer sent',
    danger: 'Card declined',
    warning: 'Low balance',
    info: 'Statement ready',
  };

  root.querySelectorAll('[data-toast]').forEach((button) => {
    button.addEventListener('click', () => {
      const colour = button.dataset.toast;
      DF.toast({ title: titles[colour], color: colour === 'neutral' ? undefined : colour });
    });
  });
  })();
</script>`.trim(), { frame: FRAME });

/**
 * A description, a timestamp and an icon.
 *
 * With a description the toast gets the header layout: the title row on top,
 * the body below it.
 */
export const WithDescription: Story = htmlStory(`
<div>
  <button type="button" class="df-button" data-variant="solid" data-color="primary">
    <span class="df-button-label">Show detail</span>
  </button>
</div>

<script>
  (() => {
  const root = document.currentScript.previousElementSibling;
  root.querySelector('button').addEventListener('click', () => {
    DF.toast({
      title: 'Transfer sent',
      description: 'To Ana Pérez — $1,200.00',
      timestamp: 'just now',
      color: 'success',
    });
  });
  })();
</script>`.trim(), { frame: FRAME });

/**
 * `duration: 0` keeps it until dismissed, and the call returns the dismisser.
 *
 * Use it when the toast carries something the reader has to act on — anything
 * with a decision in it should not disappear on a timer.
 */
export const Persistent: Story = htmlStory(`
<div class="df-flex df-gap-3">
  <button type="button" class="df-button" data-variant="solid" data-color="warning" data-open>
    <span class="df-button-label">Open</span>
  </button>
  <button type="button" class="df-button" data-variant="outline" data-color="neutral" data-close>
    <span class="df-button-label">Dismiss it</span>
  </button>
</div>

<script>
  (() => {
  const root = document.currentScript.previousElementSibling;
  let dismiss;

  root.querySelector('[data-open]').addEventListener('click', () => {
    dismiss = DF.toast({
      title: 'Confirm the transfer',
      description: 'It stays until you dismiss it.',
      color: 'warning',
      duration: 0,
    });
  });

  root.querySelector('[data-close]').addEventListener('click', () => dismiss?.());
  })();
</script>`.trim(), { frame: FRAME });

/** Placement, for a region that is not the default corner. */
export const Placement: Story = htmlStory(`
<div class="df-flex df-flex-wrap df-gap-3">
  <button type="button" class="df-button" data-variant="outline" data-color="neutral" data-place="top-start">
    <span class="df-button-label">top-start</span>
  </button>
  <button type="button" class="df-button" data-variant="outline" data-color="neutral" data-place="top-center">
    <span class="df-button-label">top-center</span>
  </button>
  <button type="button" class="df-button" data-variant="outline" data-color="neutral" data-place="bottom-center">
    <span class="df-button-label">bottom-center</span>
  </button>
</div>

<script>
  (() => {
  const root = document.currentScript.previousElementSibling;
  root.querySelectorAll('[data-place]').forEach((button) => {
    button.addEventListener('click', () => {
      DF.toast({ title: button.dataset.place, placement: button.dataset.place });
    });
  });
  })();
</script>`.trim(), { frame: FRAME });

/**
 * The title is set with `textContent`, never `innerHTML`.
 *
 * A toast title usually comes straight from a server response, so markup in
 * it is shown as text rather than parsed. Press this and you see the tag,
 * which is the point.
 */
export const UntrustedText: Story = htmlStory(`
<div>
  <button type="button" class="df-button" data-variant="outline" data-color="warning">
    <span class="df-button-label">From the server</span>
  </button>
</div>

<script>
  (() => {
  const root = document.currentScript.previousElementSibling;
  root.querySelector('button').addEventListener('click', () => {
    DF.toast({ title: '<img src=x onerror="alert(1)"> from the server', color: 'warning' });
  });
  })();
</script>`.trim(), { frame: FRAME });

/**
 * A toast the server rendered, enhanced in place.
 *
 * This one is markup, not a call — it is in the page on load and gets the same
 * dismiss button and timer as any other.
 */
export const ServerRendered: Story = htmlStory(`
<div class="df-toast-region" data-placement="top-end">
  <div class="df-toast" data-df-toast data-duration="0" role="status" data-color="success">
    <div class="df-toast-content">
      <p class="df-toast-title">Your statement is ready</p>
      <button type="button" class="df-button df-toast-dismiss" data-variant="link"
              data-color="neutral" data-size="sm" data-icon-only
              aria-label="Close" data-df-toast-dismiss></button>
    </div>
  </div>
</div>`.trim(), { frame: FRAME });
