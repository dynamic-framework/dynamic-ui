import type { Meta, StoryObj } from '@storybook/react-vite';

import Html, { htmlStory } from './Html';

const CHEV_L = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
  + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>';
const CHEV_R = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
  + 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>';

const meta: Meta<typeof Html> = {
  title: 'Vanilla/Card, Avatar & Pagination',
  component: Html,
  parameters: {
    docs: {
      description: {
        component: `
The last three markup-only blocks. No \`data-df-\` attribute, no script.

## Card

\`.df-card\` with \`-header\`, \`-body\` and \`-footer\`, all optional. The body is
one of the library's **content slots**: its first and last children have their
flow margins trimmed, so a paragraph inside it sits flush against the padding
instead of adding to it.

\`data-interactive\` on the card gives it a pointer and a focus ring for when
the whole card is a link. Put the real \`<a>\` inside — a card is not a control,
and a click handler on a div is not reachable by keyboard.

## Avatar

\`.df-avatar\` with either \`.df-avatar-name\` (initials) or an \`<img>\`. An image
needs an \`alt\`; initials need nothing, because they are a decoration of a name
that is already written beside them. If the avatar stands alone with no name
near it, give the block an \`aria-label\`.

## Pagination

A \`<nav aria-label>\` around a \`<ul class="df-pagination">\`. Three things carry
the meaning:

| | |
|---|---|
| \`aria-current="page"\` | on the current page's button — this is what announces position |
| \`aria-label\` | on every button, because "3" alone says nothing out of context |
| \`aria-hidden\` + \`data-ellipsis\` | on the gap, which is decoration |

Use \`<a href>\` instead of \`<button>\` when the pages are real URLs. Then a
middle click opens a page in a tab, which a button can never do.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Html>;

const FRAME = { width: '520px' };

/** Header, body, footer — each optional. */
export const Card: Story = htmlStory(`
<div class="df-card">
  <div class="df-card-header">Account summary</div>
  <div class="df-card-body">
    <p>Available balance is $12,430.55.</p>
    <p>Three transactions are pending.</p>
  </div>
  <div class="df-card-footer">Updated a minute ago</div>
</div>

<div class="df-card df-mt-4">
  <div class="df-card-body">Body only.</div>
</div>`.trim(), { frame: FRAME });

/**
 * A whole card that is a link.
 *
 * `data-interactive` is the appearance; the `<a>` is what makes it reachable.
 * A click handler on the card would leave a keyboard user with nothing.
 */
export const InteractiveCard: Story = htmlStory(`
<div class="df-card" data-interactive>
  <div class="df-card-body">
    <a href="#statements">Statements</a>
    <p class="df-text-muted">Twelve months of history</p>
  </div>
</div>`.trim(), { frame: FRAME });

/** Initials, an image, and one standing on its own. */
export const Avatar: Story = htmlStory(`
<div class="df-flex df-gap-4 df-items-center">
  <div class="df-avatar"><span class="df-avatar-name">AP</span></div>

  <div class="df-flex df-gap-2 df-items-center">
    <div class="df-avatar"><span class="df-avatar-name">LM</span></div>
    <span>Luis Martínez</span>
  </div>

  <div class="df-avatar" aria-label="Ana Pérez" role="img">
    <span class="df-avatar-name" aria-hidden="true">AP</span>
  </div>
</div>`.trim(), { frame: FRAME });

/** Buttons, for pages that are state rather than URLs. */
export const Pagination: Story = htmlStory(`
<nav aria-label="Pagination">
  <ul class="df-pagination">
    <li class="df-pagination-item" data-nav="true">
      <button type="button" class="df-pagination-link" aria-label="Previous page">
        <span class="df-icon">${CHEV_L}</span>
      </button>
    </li>
    <li class="df-pagination-item">
      <button type="button" class="df-pagination-link" aria-label="Go to page 1">1</button>
    </li>
    <li class="df-pagination-item">
      <button type="button" class="df-pagination-link" aria-label="Go to page 2">2</button>
    </li>
    <li class="df-pagination-item">
      <button type="button" class="df-pagination-link" aria-label="Page 3" aria-current="page">3</button>
    </li>
    <li class="df-pagination-item">
      <button type="button" class="df-pagination-link" aria-label="Go to page 4">4</button>
    </li>
    <li class="df-pagination-item" data-ellipsis="true" aria-hidden="true">
      <span class="df-pagination-link">…</span>
    </li>
    <li class="df-pagination-item">
      <button type="button" class="df-pagination-link" aria-label="Go to page 10">10</button>
    </li>
    <li class="df-pagination-item" data-nav="true">
      <button type="button" class="df-pagination-link" aria-label="Next page">
        <span class="df-icon">${CHEV_R}</span>
      </button>
    </li>
  </ul>
</nav>`.trim(), { frame: FRAME });

/**
 * Links, for pages that are real URLs.
 *
 * Same classes. A middle click now opens a page in a new tab, which a button
 * can never do — and a crawler can follow them.
 */
export const PaginationLinks: Story = htmlStory(`
<nav aria-label="Pagination">
  <ul class="df-pagination">
    <li class="df-pagination-item">
      <a class="df-pagination-link" href="?page=1" aria-label="Go to page 1">1</a>
    </li>
    <li class="df-pagination-item">
      <a class="df-pagination-link" href="?page=2" aria-label="Page 2" aria-current="page">2</a>
    </li>
    <li class="df-pagination-item">
      <a class="df-pagination-link" href="?page=3" aria-label="Go to page 3">3</a>
    </li>
  </ul>
</nav>`.trim(), { frame: FRAME });
