import type { Meta, StoryObj } from '@storybook/react-vite';

import Html, { htmlStory } from './Html';

const WARN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
  + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
  + '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>'
  + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';

const X = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
  + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
  + '<path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';

const meta: Meta<typeof Html> = {
  title: 'Vanilla/Badge, Chip & Alert',
  component: Html,
  parameters: {
    docs: {
      description: {
        component: `
Three status blocks. Markup only — no \`data-df-\` attribute, no script.

## Badge

\`\`\`html
<span class="df-badge" data-variant="solid" data-color="primary"><span>New</span></span>
\`\`\`

The inner \`<span>\` is not decoration: the badge is a flex row and the span is
what the \`gap\` spaces, so an icon beside the text lines up. A badge with the
text as a direct child has no gap to give it.

\`data-variant\` is \`solid\` or \`outline\`; \`data-color\` takes the eight roles.

## Chip

Same shape, different job. A badge **labels** something — a count, a status.
A chip **is** something the user put there: a filter, a tag, a selection. So a
chip can be removed and a badge cannot.

A removable chip gets a real \`<button class="df-chip-dismiss">\` inside it,
with an \`aria-label\` — "×" announces as nothing useful, and the label has to
say WHICH chip, because a row of them all announcing "Remove" is a row of
identical buttons.

## Alert

\`\`\`html
<div class="df-alert" role="alert" data-color="warning">
  <span class="df-icon df-alert-icon">…</span>
  <div class="df-alert-content">Your card expires soon</div>
</div>
\`\`\`

**\`role="alert"\` is what makes it an alert.** Without it a screen reader
announces nothing when the element appears — the colour and the icon are cues
for one sense only.

Use it for something that *happened*. For a permanent note on a page, drop the
role: \`role="alert"\` interrupts whatever is being read, and interrupting
someone to tell them a page has a sidebar is worse than silence.

The icon is yours — see **Vanilla › Icons**.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Html>;

const FRAME = { width: '480px' };
const ROLES = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'neutral'];

/** Solid and outline, across the roles. */
export const Badges: Story = htmlStory(`
<div class="df-flex df-flex-wrap df-gap-2 df-items-center">
${ROLES.map((r) => `  <span class="df-badge" data-variant="solid" data-color="${r}"><span>${r}</span></span>`).join('\n')}
</div>

<div class="df-flex df-flex-wrap df-gap-2 df-items-center df-mt-3">
${ROLES.map((r) => `  <span class="df-badge" data-variant="outline" data-color="${r}"><span>${r}</span></span>`).join('\n')}
</div>`.trim(), { frame: FRAME });

/** A badge with a glyph: the inner span is what the gap spaces. */
export const BadgeWithIcon: Story = htmlStory(`
<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="display:none">
  <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></symbol>
</svg>

<div class="df-flex df-gap-2 df-items-center">
  <span class="df-badge" data-variant="solid" data-color="success">
    <span class="df-icon"><svg><use href="#i-check"/></svg></span>
    <span>Verified</span>
  </span>
  <span class="df-badge" data-variant="outline" data-color="neutral"><span>12</span></span>
</div>`.trim(), { frame: FRAME });

/** Chips, including one the user can take off. */
export const Chips: Story = htmlStory(`
<div class="df-flex df-flex-wrap df-gap-2 df-items-center">
${ROLES.slice(0, 4).map((r) => `  <span class="df-chip" data-color="${r}"><span>${r}</span></span>`).join('\n')}
</div>

<div class="df-flex df-flex-wrap df-gap-2 df-items-center df-mt-3">
  <span class="df-chip" data-color="primary">
    <span>Last 30 days</span>
    <button type="button" class="df-chip-dismiss" aria-label="Remove the Last 30 days filter">${X}</button>
  </span>
  <span class="df-chip" data-color="primary">
    <span>Over $100</span>
    <button type="button" class="df-chip-dismiss" aria-label="Remove the Over $100 filter">${X}</button>
  </span>
</div>`.trim(), { frame: FRAME });

/** An alert for something that happened. */
export const Alerts: Story = htmlStory(`
<div class="df-alert" role="alert" data-color="warning">
  <span class="df-icon df-alert-icon">${WARN}</span>
  <div class="df-alert-content">Your card expires at the end of the month.</div>
</div>

<div class="df-alert df-mt-3" role="alert" data-color="danger">
  <span class="df-icon df-alert-icon">${WARN}</span>
  <div class="df-alert-content">The transfer could not be completed.</div>
</div>

<div class="df-alert df-mt-3" data-color="info">
  <span class="df-icon df-alert-icon">${WARN}</span>
  <div class="df-alert-content">
    Standing on the page, not announced — no <code>role="alert"</code>.
  </div>
</div>`.trim(), { frame: FRAME });

/** Without the icon, which is optional. */
export const AlertPlain: Story = htmlStory(`
<div class="df-alert" role="alert" data-color="success">
  <div class="df-alert-content">Transfer sent.</div>
</div>`.trim(), { frame: FRAME });
