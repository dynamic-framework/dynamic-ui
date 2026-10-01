import type { Meta, StoryObj } from '@storybook/react-vite';

import Html, { htmlStory } from './Html';

const meta: Meta<typeof Html> = {
  title: 'Vanilla/Timeline',
  component: Html,
  parameters: {
    docs: {
      description: {
        component: `
Markup only — no \`data-df-\` attribute, no script. A timeline is a list of
events that already happened; nothing about it is interactive.

## What you have to write

| | |
|---|---|
| \`.df-timeline\` | the container |
| \`.df-timeline-item\` | one event, optionally with \`data-color\` |
| \`.df-timeline-item-marker\` | the dot or icon; the connecting line is drawn from it |
| \`.df-timeline-item-content\` | holds the title, description and time |
| \`.df-timeline-item-title\` / \`-description\` / \`-time\` | the three text slots |

The line between events is a pseudo-element on the marker, so it draws itself
from the item count — there is nothing to write for it, and the last item does
not get one.

## Colour

\`data-color\` on the item takes the same roles as everywhere else: \`success\`,
\`info\`, \`warning\`, \`danger\`, \`primary\`, \`secondary\`, \`neutral\`. Omit it and
the marker is neutral, which is the right reading for an event that has not
happened yet.

## The marker is yours

React fills it through the icon registry. Here you put whatever belongs: a
glyph, a number, or nothing at all — an empty marker renders as a dot.

## Semantics

These are \`<div>\`s because a timeline is presentation, not a list the reader
navigates. If the events ARE a list in your content — a transaction history,
say — write it as \`<ol>\` and \`<li>\` and put the classes on those instead. The
stylesheet does not care which tag carries the class.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Html>;

const FRAME = { width: '420px' };

const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
  + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';

/** Three events: two done, one still pending. */
export const Default: Story = htmlStory(`
<div class="df-timeline">
  <div class="df-timeline-item" data-color="success">
    <div class="df-timeline-item-marker">
      <span class="df-icon">${CHECK}</span>
    </div>
    <div class="df-timeline-item-content">
      <div class="df-timeline-item-title">Order placed</div>
      <div class="df-timeline-item-description">We received your order.</div>
      <div class="df-timeline-item-time">09:30</div>
    </div>
  </div>

  <div class="df-timeline-item" data-color="info">
    <div class="df-timeline-item-marker">
      <span class="df-icon">${CHECK}</span>
    </div>
    <div class="df-timeline-item-content">
      <div class="df-timeline-item-title">In transit</div>
      <div class="df-timeline-item-description">Leaving the warehouse.</div>
      <div class="df-timeline-item-time">11:05</div>
    </div>
  </div>

  <div class="df-timeline-item">
    <div class="df-timeline-item-marker"></div>
    <div class="df-timeline-item-content">
      <div class="df-timeline-item-title">Delivered</div>
      <div class="df-timeline-item-time">Pending</div>
    </div>
  </div>
</div>`.trim(), { frame: FRAME });

/** An empty marker is a dot. Useful when the event needs no glyph. */
export const PlainMarkers: Story = htmlStory(`
<div class="df-timeline">
  <div class="df-timeline-item" data-color="primary">
    <div class="df-timeline-item-marker"></div>
    <div class="df-timeline-item-content">
      <div class="df-timeline-item-title">Account opened</div>
      <div class="df-timeline-item-time">12 Mar</div>
    </div>
  </div>
  <div class="df-timeline-item" data-color="primary">
    <div class="df-timeline-item-marker"></div>
    <div class="df-timeline-item-content">
      <div class="df-timeline-item-title">First deposit</div>
      <div class="df-timeline-item-time">14 Mar</div>
    </div>
  </div>
  <div class="df-timeline-item">
    <div class="df-timeline-item-marker"></div>
    <div class="df-timeline-item-content">
      <div class="df-timeline-item-title">Card shipped</div>
      <div class="df-timeline-item-time">Pending</div>
    </div>
  </div>
</div>`.trim(), { frame: FRAME });

/** Every role, so you can see which reads as what. */
export const Colors: Story = htmlStory(`
<div class="df-timeline">
  <div class="df-timeline-item" data-color="success">
    <div class="df-timeline-item-marker"></div>
    <div class="df-timeline-item-content"><div class="df-timeline-item-title">Payment received</div></div>
  </div>
  <div class="df-timeline-item" data-color="info">
    <div class="df-timeline-item-marker"></div>
    <div class="df-timeline-item-content"><div class="df-timeline-item-title">Under review</div></div>
  </div>
  <div class="df-timeline-item" data-color="warning">
    <div class="df-timeline-item-marker"></div>
    <div class="df-timeline-item-content"><div class="df-timeline-item-title">Action needed</div></div>
  </div>
  <div class="df-timeline-item" data-color="danger">
    <div class="df-timeline-item-marker"></div>
    <div class="df-timeline-item-content"><div class="df-timeline-item-title">Payment failed</div></div>
  </div>
</div>`.trim(), { frame: FRAME });

/**
 * The same thing as a real list.
 *
 * The stylesheet reads classes, not tag names, so `<ol>` and `<li>` carry it
 * just as well — and should, when the events are content a reader navigates
 * rather than decoration.
 */
export const AsAList: Story = htmlStory(`
<ol class="df-timeline">
  <li class="df-timeline-item" data-color="success">
    <div class="df-timeline-item-marker"></div>
    <div class="df-timeline-item-content">
      <div class="df-timeline-item-title">Transfer sent</div>
      <div class="df-timeline-item-time">09:30</div>
    </div>
  </li>
  <li class="df-timeline-item" data-color="success">
    <div class="df-timeline-item-marker"></div>
    <div class="df-timeline-item-content">
      <div class="df-timeline-item-title">Received by bank</div>
      <div class="df-timeline-item-time">09:31</div>
    </div>
  </li>
</ol>`.trim(), { frame: FRAME });
