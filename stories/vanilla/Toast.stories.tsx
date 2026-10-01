import type { Meta, StoryObj } from '@storybook/react-vite';

import { toast } from '../../src/vanilla';
import type { ToastOptions } from '../../src/vanilla';

const meta: Meta = {
  title: 'Vanilla/Toast',
  parameters: {
    docs: {
      description: {
        component: `
The one component in this phase that is created rather than enhanced — a toast
announces something that just happened, so there is nothing in the page for it
to attach to.

\`\`\`js
DF.toast({ title: 'Transfer sent', color: 'success' });
\`\`\`

It returns a function that dismisses it early.

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

/**
 * The source a reader needs is the CALL, not the button that fires it.
 *
 * Storybook would otherwise print this file's JSX — a `Trigger` component that
 * exists only so the documentation has something to click. Nobody writes that;
 * they write `DF.toast(...)`.
 */
function source(options: ToastOptions | ToastOptions[]): Record<string, unknown> {
  const calls = (Array.isArray(options) ? options : [options])
    .map((entry) => `DF.toast(${JSON.stringify(entry, null, 2)});`)
    .join('\n\n');

  return { docs: { source: { code: calls, language: 'js' } } };
}

function Trigger({ label, options }: { label: string; options: ToastOptions }) {
  return (
    <button
      type="button"
      className="df-button"
      data-variant="outline"
      data-color="neutral"
      onClick={() => toast(options)}
    >
      {label}
    </button>
  );
}

export const Colours: StoryObj = {
  parameters: source([
    { title: 'Saved' },
    { title: 'Transfer sent', color: 'success' },
    { title: 'Card declined', color: 'danger' },
  ]),
  render: () => (
    <div className="df-flex df-flex-wrap df-gap-3">
      <Trigger label="Neutral" options={{ title: 'Saved' }} />
      <Trigger label="Success" options={{ title: 'Transfer sent', color: 'success' }} />
      <Trigger label="Danger" options={{ title: 'Card declined', color: 'danger' }} />
      <Trigger label="Warning" options={{ title: 'Low balance', color: 'warning' }} />
      <Trigger label="Info" options={{ title: 'Statement ready', color: 'info' }} />
    </div>
  ),
};

export const WithDescription: StoryObj = {
  parameters: source({
    title: 'Transfer sent',
    description: '$1,250.00 to Ana Pérez. It should arrive within two hours.',
    color: 'success',
  }),
  render: () => (
    <Trigger
      label="Show"
      options={{
        title: 'Transfer sent',
        description: '$1,250.00 to Ana Pérez. It should arrive within two hours.',
        color: 'success',
      }}
    />
  ),
};

/** Hover it and the timer stops; leave and it resumes where it was. */
export const Timing: StoryObj = {
  parameters: source([
    { title: 'Gone in two', duration: 2000 },
    { title: 'Here until you close it', duration: 0 },
  ]),
  render: () => (
    <div className="df-flex df-flex-wrap df-gap-3">
      <Trigger label="Two seconds" options={{ title: 'Gone in two', duration: 2000 }} />
      <Trigger label="Ten seconds" options={{ title: 'Gone in ten', duration: 10000 }} />
      <Trigger label="Until dismissed" options={{ title: 'Here until you close it', duration: 0 }} />
    </div>
  ),
};

export const Placement: StoryObj = {
  parameters: source({ title: 'top-start', placement: 'top-start' }),
  render: () => (
    <div className="df-flex df-flex-wrap df-gap-3">
      {(['top-start', 'top-center', 'top-end', 'bottom-start', 'bottom-center', 'bottom-end'] as const)
        .map((placement) => (
          <Trigger key={placement} label={placement} options={{ title: placement, placement }} />
        ))}
    </div>
  ),
};

/**
 * A title containing markup is shown as text. Worth seeing, because the title
 * is usually whatever a server said.
 */
export const UntrustedTitle: StoryObj = {
  parameters: source({ title: '<img src=x onerror="alert(1)"> from the server', color: 'warning' }),
  render: () => (
    <Trigger
      label="Show an untrusted title"
      options={{ title: '<img src=x onerror="alert(1)"> from the server', color: 'warning' }}
    />
  ),
};
