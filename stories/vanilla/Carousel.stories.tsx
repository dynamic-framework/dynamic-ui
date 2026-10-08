import type { Meta, StoryObj } from '@storybook/react-vite';

import Html, { htmlStory } from './Html';

const PREV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>';
const NEXT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>';

/** The arrows, which are the same markup in every example below. */
const arrows = () => `
  <button type="button" class="df-carousel-arrow" data-direction="prev" aria-label="Previous slide">
    <span class="df-icon">${PREV}</span>
  </button>
  <button type="button" class="df-carousel-arrow" data-direction="next" aria-label="Next slide">
    <span class="df-icon">${NEXT}</span>
  </button>`;

const slide = (n: number, total: number, label = `Slide ${n}`) => `
    <div class="df-carousel-slide" role="group" aria-roledescription="slide" aria-label="${n} of ${total}">
      <div class="df-bg-primary-subtle df-rounded-control df-p-6 df-text-center">${label}</div>
    </div>`;

const dots = (total: number) => `
  <div class="df-carousel-controls">
    <div class="df-carousel-pagination" role="tablist" aria-label="Go to slide">
${Array.from({ length: total }, (unused, i) => `      <button type="button" role="tab" class="df-carousel-page" aria-label="Go to slide ${i + 1}"></button>`).join('\n')}
    </div>
  </div>`;

const meta: Meta<typeof Html> = {
  title: 'Vanilla/Carousel',
  component: Html,
  parameters: {
    docs: {
      description: {
        component: `
\`data-df-carousel\` on the markup \`DCarousel\` renders.

## Most of it is not JavaScript

The viewport is \`overflow: auto\` with \`scroll-snap-type: inline mandatory\`,
so **dragging, momentum, the snap itself, keyboard arrows and a screen
reader's reading order all come from the browser**. Remove the script and the
markup below is still a carousel you can swipe — it just loses its arrows.

That is unusual enough to be worth stating: in this component the enhancement
layer is the smaller half.

## What you have to write

| | |
|---|---|
| \`.df-carousel\` | the block, carrying \`data-df-carousel\` |
| \`.df-carousel-viewport\` | the scroll container — \`tabindex="0"\` so it can be reached by keyboard |
| \`.df-carousel-slide\` | one slide, with \`role="group"\` and \`aria-roledescription="slide"\` |
| \`.df-carousel-arrow\` | a \`<button>\` with \`data-direction="prev"\` or \`"next"\` |
| \`.df-carousel-page\` | a dot, inside a \`[role="tablist"]\` |

The script sets \`data-active\` on the showing slide, \`disabled\` on an arrow at
the end, and \`aria-selected\` plus the roving \`tabindex\` on the dots. All of it
is derived from scroll position, never from a counter — two sources of truth
for "which slide is showing" is how a carousel ends up disagreeing with itself
after a drag.

## How many per page

A custom property, with one per breakpoint tier:

\`\`\`html
<div class="df-carousel" data-df-carousel
     style="--df-carousel-per-page-xs: 1; --df-carousel-per-page-md: 3">
\`\`\`

The tiers are media queries in the stylesheet, so the browser resolves which
applies and the script reads the answer back with \`getComputedStyle\`. It does
not recompute the breakpoints — a second implementation of them could disagree
with the first.

\`--df-carousel-gap\` and \`--df-carousel-peek\` take tiers the same way.

## Autoplay

\`data-autoplay="4000"\` — milliseconds. It pauses on hover, on focus and when
the tab is hidden, and a \`.df-carousel-autoplay\` button toggles it.

## What this does NOT do

**Loop.** \`DCarousel\` implements it by cloning slides at both ends and jumping
the scroll when one settles; it is the most intricate part of that component
and the one most likely to be wrong in a second implementation. A vanilla
carousel runs from the first slide to the last. \`data-loop\` does nothing here.

## Reacting to a change

\`\`\`js
document.addEventListener('df:carousel:change', (event) => {
  console.log(event.detail.index, event.detail.perPage);
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

const FRAME = { width: '720px' };

/** One slide at a time. Drag it with the script disabled and it still works. */
export const Default: Story = htmlStory(`
<div class="df-carousel" data-df-carousel data-draggable>
  <div class="df-carousel-viewport" tabindex="0" role="group" aria-label="Slides">
${[1, 2, 3, 4].map((n) => slide(n, 4)).join('')}
  </div>
${arrows()}
${dots(4)}
</div>`.trim(), { frame: FRAME });

/**
 * Three at a time from `md`, one below it.
 *
 * Resize the viewport: the tiers are media queries, so the change is the
 * browser's and the script only reads the result.
 */
export const Responsive: Story = htmlStory(`
<div class="df-carousel" data-df-carousel data-draggable
     style="--df-carousel-per-page-xs: 1; --df-carousel-per-page-md: 3">
  <div class="df-carousel-viewport" tabindex="0" role="group" aria-label="Offers">
${[1, 2, 3, 4, 5, 6].map((n) => slide(n, 6)).join('')}
  </div>
${arrows()}
${dots(6)}
</div>`.trim(), { frame: FRAME });

/** A hero: one full-width slide, no dots. */
export const Hero: Story = htmlStory(`
<div class="df-carousel" data-df-carousel data-draggable>
  <div class="df-carousel-viewport" tabindex="0" role="group" aria-label="Promotions">
${[1, 2, 3].map((n) => slide(n, 3, `Promotion ${n}`)).join('')}
  </div>
${arrows()}
</div>`.trim(), { frame: FRAME });

/**
 * Autoplay, with the pause control.
 *
 * `aria-pressed` on the button is what the script toggles, so a screen reader
 * announces the state rather than just the label.
 */
export const Autoplay: Story = htmlStory(`
<div class="df-carousel" data-df-carousel data-draggable data-autoplay="3000"
     style="--df-carousel-per-page-md: 2">
  <div class="df-carousel-viewport" tabindex="0" role="group" aria-label="News">
${[1, 2, 3, 4].map((n) => slide(n, 4)).join('')}
  </div>
${arrows()}
  <div class="df-carousel-controls">
    <button type="button" class="df-carousel-autoplay" aria-pressed="false" aria-label="Pause">
      <span class="df-icon">${PREV}</span>
    </button>
    <div class="df-carousel-pagination" role="tablist" aria-label="Go to slide">
${Array.from({ length: 4 }, (unused, i) => `      <button type="button" role="tab" class="df-carousel-page" aria-label="Go to slide ${i + 1}"></button>`).join('\n')}
    </div>
  </div>
</div>`.trim(), { frame: FRAME });

/**
 * With a peek: part of the next slide shows, which is what tells a reader
 * there is more without an arrow having to say so.
 */
export const Peek: Story = htmlStory(`
<div class="df-carousel" data-df-carousel data-draggable
     style="--df-carousel-per-page-xs: 1; --df-carousel-peek-xs: 15%">
  <div class="df-carousel-viewport" tabindex="0" role="group" aria-label="Cards">
${[1, 2, 3, 4].map((n) => slide(n, 4)).join('')}
  </div>
${arrows()}
</div>`.trim(), { frame: FRAME });

/**
 * Controls somewhere else, connected by name.
 *
 * Give the carousel a name with `data-df-carousel="hero"` and name a container
 * after it with `data-df-carousel-controls="hero"`. Anything inside that
 * container with `.df-carousel-arrow` or `.df-carousel-page` drives it, with
 * the same disabling and the same dot tracking as if it sat inside.
 *
 * The React side connects external controls with an object from
 * `useDCarouselController` instead, because passing one is what a component
 * tree makes easy and a name there fails silently on a typo. Here there is no
 * closure to pass and **the DOM is the registry**, so a name is the right
 * answer rather than the lazy one — and both of its failure modes warn in the
 * console: a container naming no carousel, and two carousels claiming one
 * name.
 *
 * `aria-controls` is the author's job here, and it matters more than it does
 * inside the carousel: a button on the other side of the page has no
 * relationship to the strip it drives unless it says so.
 */
export const ControlsElsewhere: Story = htmlStory(`
<header class="df-flex df-items-center df-gap-3 df-mb-4">
  <strong class="df-me-auto">Featured</strong>
  <div data-df-carousel-controls="hero" class="df-flex df-items-center df-gap-2">
    <div class="df-carousel-pagination" role="tablist" aria-label="Go to slide">
${Array.from({ length: 5 }, (unused, i) => `      <button type="button" role="tab" class="df-carousel-page" aria-label="Go to slide ${i + 1}" aria-controls="hero-strip"></button>`).join('\n')}
    </div>
    <button type="button" class="df-carousel-arrow" data-direction="prev"
            aria-label="Previous slide" aria-controls="hero-strip">
      <span class="df-icon">${PREV}</span>
    </button>
    <button type="button" class="df-carousel-arrow" data-direction="next"
            aria-label="Next slide" aria-controls="hero-strip">
      <span class="df-icon">${NEXT}</span>
    </button>
  </div>
</header>

<div class="df-carousel" data-df-carousel="hero" data-draggable
     style="--df-carousel-per-page-xs: 1; --df-carousel-per-page-md: 3">
  <div class="df-carousel-viewport" id="hero-strip" tabindex="0" role="group" aria-label="Featured">
${[1, 2, 3, 4, 5].map((n) => slide(n, 5)).join('')}
  </div>
</div>`.trim(), { frame: FRAME });
