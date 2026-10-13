import { Meta, StoryObj } from '@storybook/react-vite';

import type { CSSProperties } from 'react';
import { DCarousel, useDCarouselController } from '../../src';

const config: Meta<typeof DCarousel> = {
  title: 'Design System/Components/Carousel',
  component: DCarousel,
  parameters: {
    docs: {
      description: {
        component: `
A horizontally scrolling strip of slides, with optional arrows, dots and autoplay.

## It is a scroll container

The slides are laid out in a real scroll container with CSS scroll snapping, not
moved by a transform. That is not an implementation detail — it is most of the
behaviour:

- **Touch drag, with the right momentum.** The browser's, tuned per platform.
- **Trackpad and shift+wheel** scroll it, because it is a thing.
- **Keyboard** works once the strip is focused: it is a focusable scroll region,
  so the arrow keys already scroll it. There is no key handler to get wrong.
- **It works before JavaScript runs**, and if JavaScript never runs it is still
  a usable strip of content rather than a stack of slides on top of each other.

The component supplies the parts a browser has no opinion about: the arrows, the
dots, the loop and the autoplay.

## Responsive props

\`perPage\`, \`gap\` and \`peek\` take either a value or a per-breakpoint object,
using the same tiers as every other responsive prop in the library:

\`\`\`tsx
<DCarousel perPage={{ xs: 1, md: 2, lg: 3 }} gap={{ xs: 2, lg: 4 }} />
\`\`\`

The highest matching tier wins, so \`{ xs: 1, lg: 3 }\` shows one slide up to
\`lg\` and three from \`lg\` up. Tiers you leave out inherit from the one below.

These are resolved by **media queries in the stylesheet**, not by JavaScript.
The slide width is therefore correct on the first paint rather than after a
measure-and-correct pass, and resizing the window costs nothing. JavaScript
reads the resolved value back out of \`--df-carousel-per-page\` so the dots and
the arrows can never disagree with the layout.

## Migrating from the 2.x \`options\` prop

2.x passed Splide's options object straight through. The equivalents:

| 2.x \`options\`              | 3.x prop                        |
|------------------------------|---------------------------------|
| \`perPage: 3\`               | \`perPage={3}\`                 |
| \`breakpoints: { 768: {…} }\`| \`perPage={{ xs: 1, md: 3 }}\`  |
| \`perMove: 1\`               | \`perMove={1}\`                 |
| \`type: 'loop'\`             | \`loop\`                        |
| \`rewind: true\`             | \`loop="rewind"\`               |
| \`gap: '0.5rem'\`            | \`gap={2}\` (a spacing step)    |
| \`padding: '1rem'\`          | \`peek={4}\` (a spacing step)   |
| \`focus: 'center'\`          | \`align="center"\`              |
| \`drag: true\`               | \`draggable\` (on by default)   |
| \`width: 532\`               | \`style={{ maxWidth: 532 }}\`   |
| \`updateOnMove\`             | — always true; the active slide is derived from scroll position |

\`gap\` and \`peek\` take a step on the spacing scale rather than a CSS length,
so a carousel's gutter lines up with the rest of the page instead of being a
number someone typed once.

## Arrows

They are a bare glyph by default — no fill, no border, no shadow — with the
background appearing on hover. A pair of bordered white pills sitting in front
of the content is two circles competing with the thing they exist to move.

The glyphs come from \`DContextProvider\`'s icon map (\`chevronLeft\` /
\`chevronRight\`), like every other default icon in the library, so an app that
has already swapped its icon set gets its own chevrons here without saying so
again.

Over photography a bare chevron disappears, so the old treatment is still a
token away:

\`\`\`css
.hero-carousel {
  --df-carousel-arrow-bg: var(--df-bg-surface);
  --df-carousel-arrow-border-width: var(--df-stroke-control);
  --df-carousel-arrow-shadow: var(--df-elevation-sm);
}
\`\`\`

## Accessibility

Give it a \`label\`. With one it is announced as a carousel; without one the
\`aria-roledescription\` is dropped, because telling a screen-reader user they
have found "a carousel" with no way to tell which is worse than saying nothing.

Autoplay always renders a pause control and always stops on focus, on hover
(\`pauseOnHover\`), in a background tab, and when scrolled out of view. It does
not start at all under \`prefers-reduced-motion\`.
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text', table: { category: 'Accessibility' } },
    perPage: { control: 'object', table: { category: 'Layout' } },
    perMove: { control: 'text', table: { category: 'Layout' } },
    gap: { control: 'object', table: { category: 'Layout' } },
    peek: { control: 'object', table: { category: 'Layout' } },
    align: { control: 'inline-radio', options: ['start', 'center'], table: { category: 'Layout' } },
    height: { control: 'text', table: { category: 'Layout' } },
    loop: {
      control: 'inline-radio',
      options: [false, true, 'rewind'],
      description: '`true` loops seamlessly through clones; `"rewind"` jumps back to the start.',
      table: { category: 'Behavior' },
    },
    autoplay: { control: 'boolean', table: { category: 'Behavior' } },
    interval: { control: 'number', table: { category: 'Behavior' } },
    pauseOnHover: { control: 'boolean', table: { category: 'Behavior' } },
    draggable: { control: 'boolean', table: { category: 'Behavior' } },
    arrows: { control: 'boolean', table: { category: 'Appearance' } },
    pagination: { control: 'boolean', table: { category: 'Appearance' } },
    className: { control: 'text', table: { category: 'Appearance' } },
    style: { control: 'object', table: { category: 'Appearance' } },
    iconArrowLeft: {
      control: false,
      description: 'DIcon props for the "previous" arrow. Merged onto the context icon map\'s chevron.',
      table: { type: { summary: 'ComponentProps<typeof DIcon>' }, category: 'Icon' },
    },
    iconArrowRight: {
      control: false,
      description: 'DIcon props for the "next" arrow. Merged onto the context icon map\'s chevron, so `{ color: "primary" }` alone recolours the default.',
      table: { type: { summary: 'ComponentProps<typeof DIcon>' }, category: 'Icon' },
    },
    i18n: { control: 'object', table: { category: 'Accessibility' } },
    onSlideChange: { action: 'slideChange', table: { category: 'Events' } },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DCarousel>;

const SLIDES = [1, 2, 3, 4, 5, 6, 7, 8];

/** The paces compared in `AutoplayIntervals`, with what each one is good for. */
const INTERVALS = [
  { ms: 1500, note: 'too fast to read — see AutoplayFast' },
  { ms: 3000, note: 'a strip of thumbnails or logos' },
  { ms: 5000, note: 'the default, and the WCAG 2.2.2 boundary' },
  { ms: 8000, note: 'a hero with a headline to read' },
];

/**
 * A plain numbered box.
 *
 * The demo slide used to be a heading and a paragraph of lorem ipsum, which
 * made every story a wall of grey text and hid the only thing these stories are
 * about: how many slides are on screen and where they stop. A box you can count
 * shows that at a glance.
 */
function DemoSlide({ n }: { n: number }) {
  return (
    <div
      className="df-flex df-items-center df-justify-center df-h-full df-bg-primary-subtle df-border-1 df-border-primary df-rounded-surface df-fs-heading-3 df-fw-semibold df-text-primary"
      style={{ minHeight: 160 }}
    >
      {n}
    </div>
  );
}

const HERO_SLIDES = [
  {
    id: 'savings',
    eyebrow: 'Savings',
    title: 'Open an account in minutes',
    body: 'No paperwork, no branch visit, and no minimum balance for the first year.',
    tone: 'df-bg-primary-subtle df-text-primary',
  },
  {
    id: 'card',
    eyebrow: 'Credit',
    title: 'A card that pays you back',
    body: 'Three per cent on groceries, one and a half on everything else.',
    tone: 'df-bg-success-subtle df-text-success',
  },
  {
    id: 'mortgage',
    eyebrow: 'Mortgages',
    title: 'Know what you can borrow',
    body: 'Get a decision in principle without a mark on your credit file.',
    tone: 'df-bg-warning-subtle df-text-warning',
  },
];

/**
 * A full-width promotional slide.
 *
 * Deliberately not the numbered box the other stories use: a hero is the one
 * case where `perPage` is 1 and the slide is the whole width, so it needs real
 * content to show that the arrows, the dots and the peek all still behave when
 * there is only ever one on screen.
 */
function HeroSlide({ slide }: { slide: typeof HERO_SLIDES[number] }) {
  return (
    <div className={`df-grid df-grid-cols-12 df-rounded-surface df-overflow-hidden ${slide.tone}`}>
      <div className="df-col-span-12 df-md:col-span-7 df-p-8 df-flex df-flex-col df-justify-center df-gap-2">
        <span className="df-fs-label df-fw-semibold df-text-uppercase">{slide.eyebrow}</span>
        <h3 className="df-m-0 df-fs-heading-3 df-text-default">{slide.title}</h3>
        <p className="df-m-0 df-text-muted">{slide.body}</p>
      </div>
      <div className="df-col-span-12 df-md:col-span-5 df-flex df-items-center df-justify-center df-p-8">
        <div
          className="df-w-full df-rounded-surface df-bg-surface df-border-1 df-flex df-items-center df-justify-center df-text-muted df-fs-body-sm"
          style={{ minHeight: 160 }}
        >
          Image
        </div>
      </div>
    </div>
  );
}

const render: Story['render'] = (args) => (
  <DCarousel {...args}>
    {SLIDES.map((n) => (
      <DCarousel.Slide key={n}>
        <DemoSlide n={n} />
      </DCarousel.Slide>
    ))}
  </DCarousel>
);

export const Default: Story = {
  render,
  args: {
    label: 'Example carousel',
    perPage: { xs: 1, sm: 2, md: 3 },
    gap: 3,
  },
};

/**
 * The single-slide hero: one full-width promo at a time.
 *
 * `perPage` defaults to 1, so a hero needs no layout props at all — which is
 * the point. Everything else about the component works the same way.
 */
export const Hero: Story = {
  parameters: {
    docs: {
      description: {
        story: 'One slide fills the strip. The dots become a position indicator rather than a page count, and the arrows move one promo at a time.',
      },
    },
  },
  render: (args) => (
    <DCarousel {...args}>
      {HERO_SLIDES.map((slide) => (
        <DCarousel.Slide key={slide.id}>
          <HeroSlide slide={slide} />
        </DCarousel.Slide>
      ))}
    </DCarousel>
  ),
  args: {
    label: 'Promotions',
    perPage: 1,
    loop: true,
  },
};

/**
 * The same hero, rotating on its own.
 *
 * This is the shape most marketing carousels take, and the one that most needs
 * the pause control: it stops on focus, on hover, in a background tab and when
 * scrolled out of view, and never starts under `prefers-reduced-motion`.
 */
export const HeroAutoplay: Story = {
  render: (args) => (
    <DCarousel {...args}>
      {HERO_SLIDES.map((slide) => (
        <DCarousel.Slide key={slide.id}>
          <HeroSlide slide={slide} />
        </DCarousel.Slide>
      ))}
    </DCarousel>
  ),
  args: {
    label: 'Promotions',
    perPage: 1,
    loop: true,
    autoplay: true,
    interval: 4000,
  },
};

/**
 * Two slides at a time. `perPage` takes a plain number when the count does not
 * need to change with the viewport.
 */
export const TwoPerPage: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The slide width is `(100% − gap) / 2`, worked out in CSS from `--df-carousel-per-page`. Nothing measures the container.',
      },
    },
  },
  render,
  args: {
    label: 'Two per page',
    perPage: 2,
    gap: 3,
  },
};

/**
 * Three at a time, with a `peek` so the fourth is half-visible — the cue that
 * tells someone there is more to the right without an arrow having to say so.
 */
export const ThreePerPage: Story = {
  render,
  args: {
    label: 'Three per page',
    perPage: 3,
    gap: 3,
    peek: 8,
  },
};

/**
 * Eight slides and no arithmetic in the markup: the strip fills whatever width
 * it is given, four at a time.
 */
export const FourPerPage: Story = {
  render,
  args: {
    label: 'Four per page',
    perPage: 4,
    gap: 2,
  },
};

/**
 * The reason this component was rewritten. Drag the Storybook viewport handle
 * and watch the count change with no reflow — the widths come from a media
 * query, so there is no measure-then-correct step to see.
 */
export const ResponsivePerPage: Story = {
  parameters: {
    docs: {
      description: {
        story: `
One slide below \`md\`, two from \`md\`, three from \`lg\`. The gutter grows with
it. Resize the preview to see the tiers change.

\`\`\`tsx
<DCarousel
  perPage={{ xs: 1, md: 2, lg: 3 }}
  gap={{ xs: 2, lg: 4 }}
/>
\`\`\`
        `,
      },
    },
  },
  render,
  args: {
    label: 'Responsive carousel',
    perPage: { xs: 1, md: 2, lg: 3 },
    gap: { xs: 2, lg: 4 },
    peek: 3,
  },
};

/**
 * `perMove` decides how far one press goes. With `perPage: 3` and `perMove: 1`
 * the strip advances a single slide at a time, so the dots become positions
 * rather than pages.
 */
export const MoveOneAtATime: Story = {
  render,
  args: {
    label: 'One at a time',
    perPage: { xs: 1, sm: 2, lg: 3 },
    perMove: 1,
    gap: 3,
  },
};

export const Peek: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A `peek` insets both ends of the strip, which is what leaves a sliver of the next slide visible — the cue that tells someone there is more to scroll to.',
      },
    },
  },
  render,
  args: {
    label: 'Peeking carousel',
    perPage: { xs: 1, md: 2 },
    gap: 3,
    peek: 10,
  },
};

export const CenterAligned: Story = {
  render,
  args: {
    label: 'Centred carousel',
    perPage: { xs: 1, md: 3 },
    align: 'center',
    gap: 3,
    peek: 6,
  },
};

/**
 * Two kinds of loop, and they cost different things.
 *
 * `loop` clones a lap of slides at each end so the strip never visibly reaches
 * a boundary — seamless, at the price of duplicated DOM (and, for image slides,
 * duplicated requests). `loop="rewind"` jumps back to the start instead: free,
 * but the jump is visible.
 */
export const SeamlessLoop: Story = {
  render,
  args: {
    label: 'Looping carousel',
    perPage: { xs: 1, md: 3 },
    loop: true,
    gap: 3,
  },
};

export const Rewind: Story = {
  render,
  args: {
    label: 'Rewinding carousel',
    perPage: { xs: 1, md: 3 },
    loop: 'rewind',
    gap: 3,
  },
};

export const AutoplayAndLoop: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Autoplay stops on focus, on hover, in a background tab and when scrolled out of
view — and does not start at all if the device asks for reduced motion.

The pause button is not optional. WCAG 2.2.2 requires a way to stop anything
that moves on its own for more than five seconds, so it renders whenever
\`autoplay\` is set.
        `,
      },
    },
  },
  render,
  args: {
    label: 'Autoplaying carousel',
    perPage: { xs: 1, md: 2 },
    loop: true,
    autoplay: true,
    interval: 3000,
    gap: 3,
  },
};

export const CustomArrows: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Both arrows default to the chevrons in `DContextProvider`\'s icon map, so swapping your icon set changes them everywhere at once. These props merge onto that default — pass only `{ color }` to recolour it, or `{ icon }` to replace it.',
      },
    },
  },
  render,
  args: {
    label: 'Custom arrows',
    perPage: { xs: 1, md: 2 },
    gap: 3,
    peek: 12,
    iconArrowLeft: { icon: 'CircleArrowLeft' },
    iconArrowRight: { icon: 'CircleArrowRight' },
  },
};

export const NoControls: Story = {
  parameters: {
    docs: {
      description: {
        story: 'With the arrows and dots off it is a plain strip — which is still fully operable by touch, trackpad and keyboard, because the scrolling was never the controls\' job.',
      },
    },
  },
  render,
  args: {
    label: 'Scrollable strip',
    perPage: { xs: 1, sm: 2, md: 4 },
    arrows: false,
    pagination: false,
    gap: 3,
  },
};

const PANEL: CSSProperties = {
  display: 'grid',
  placeItems: 'center',
  height: '8rem',
  background: 'var(--df-bg-muted)',
  borderRadius: 'var(--df-shape-surface)',
};

/**
 * A named component, because a hook cannot be called in a story's `render`
 * arrow: `render` is not a component, so React has no instance to hang the
 * state on and the rules-of-hooks lint is right to refuse it.
 */
function ElsewhereExample() {
  const hero = useDCarouselController();

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {/* A sibling of the carousel, not an ancestor: nothing but the object connects them. */}
      <header style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <strong style={{ marginInlineEnd: 'auto' }}>Featured</strong>
        <span style={{ fontVariantNumeric: 'tabular-nums' }}>
          {`${hero.activePage + 1} / ${hero.pageCount}`}
        </span>
        <DCarousel.Pagination controller={hero} />
        <DCarousel.Prev controller={hero} />
        <DCarousel.Next controller={hero} />
      </header>

      <DCarousel
        label="Featured"
        controller={hero}
        arrows={false}
        pagination={false}
        perPage={{ xs: 1, md: 3 }}
        gap={3}
      >
        {Array.from({ length: 8 }, (_, index) => (
          <DCarousel.Slide key={`slide-${index}`}>
            <div style={PANEL}>{`Slide ${index + 1}`}</div>
          </DCarousel.Slide>
        ))}
      </DCarousel>
    </div>
  );
}

function OwnMarkupExample() {
  const hero = useDCarouselController();

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <button
          type="button"
          className="df-button"
          data-variant="outline"
          disabled={!hero.canPrev}
          onClick={hero.prev}
          {...hero.viewportId && { 'aria-controls': hero.viewportId }}
        >
          Back
        </button>
        <button
          type="button"
          className="df-button"
          data-variant="outline"
          disabled={!hero.canNext}
          onClick={hero.next}
          {...hero.viewportId && { 'aria-controls': hero.viewportId }}
        >
          Forward
        </button>
        <button
          type="button"
          className="df-button"
          data-variant="link"
          onClick={hero.togglePlay}
        >
          {hero.playing ? 'Pause' : 'Play'}
        </button>
        <span style={{ marginInlineStart: 'auto', fontVariantNumeric: 'tabular-nums' }}>
          {hero.connected
            ? `page ${hero.activePage + 1} of ${hero.pageCount}`
            : 'no carousel connected'}
        </span>
      </div>

      <DCarousel
        label="Offers"
        controller={hero}
        autoplay
        interval={2500}
        arrows={false}
        pagination={false}
        perPage={{ xs: 1, md: 2 }}
        gap={3}
      >
        {Array.from({ length: 6 }, (_, index) => (
          <DCarousel.Slide key={`offer-${index}`}>
            <div style={PANEL}>{`Offer ${index + 1}`}</div>
          </DCarousel.Slide>
        ))}
      </DCarousel>
    </div>
  );
}

/**
 * Controls somewhere else entirely.
 *
 * `useDCarouselController()` returns one object that is both the live state
 * and the actions. Pass it to `controller` and render the controls wherever
 * they belong — a page header, a sidebar, a toolbar in another component.
 * There is no context between them here: the header and the strip are
 * siblings, and nothing but the object connects them.
 *
 * The `ref` could already call `next()`. What it could not do is carry state —
 * a ref never re-renders whoever holds it — so external arrows could be wired
 * but never disabled at the ends, and external dots could never mark the
 * current page. That is the whole reason this exists.
 *
 * It is an object and not an id on purpose. A registry keyed by a string fails
 * silently on a typo, lets two carousels fight over one name, and still needs
 * the same store underneath: more machinery for less type safety.
 */
export const ControlledFromElsewhere: Story = {
  parameters: {
    docs: {
      source: {
        code: `const hero = useDCarouselController();

return (
  <>
    <header>
      <span>{hero.activePage + 1} / {hero.pageCount}</span>

      <DCarousel.Pagination controller={hero} />
      <DCarousel.Prev controller={hero} />
      <DCarousel.Next controller={hero} />
    </header>

    <DCarousel
      label="Featured"
      controller={hero}
      arrows={false}
      pagination={false}
      perPage={{ xs: 1, md: 3 }}
      gap={3}
    >
      <DCarousel.Slide>…</DCarousel.Slide>
    </DCarousel>
  </>
);`,
      },
    },
  },
  render: () => <ElsewhereExample />,
};

/**
 * Your own markup, driven by the same controller.
 *
 * `DCarousel.Prev`, `.Next` and `.Pagination` exist so that moving the
 * controls costs no styling and no accessibility: they carry `aria-controls`
 * pointing at the scrollport, which the built-in pair does not need because
 * proximity does the work there.
 *
 * Build your own and those two are yours to remember. `viewportId` is on the
 * controller for exactly that, and `connected` says whether a carousel is
 * attached at all — so a control rendered before one mounts can disable itself
 * rather than look live and do nothing.
 */
export const ControllerWithOwnMarkup: Story = {
  parameters: {
    docs: {
      source: {
        code: `const hero = useDCarouselController();

return (
  <>
    <button disabled={!hero.canPrev} onClick={hero.prev} aria-controls={hero.viewportId}>
      Back
    </button>
    <button disabled={!hero.canNext} onClick={hero.next} aria-controls={hero.viewportId}>
      Forward
    </button>
    <button onClick={hero.togglePlay}>
      {hero.playing ? 'Pause' : 'Play'}
    </button>

    <DCarousel label="Offers" controller={hero} autoplay arrows={false} pagination={false}>
      <DCarousel.Slide>…</DCarousel.Slide>
    </DCarousel>
  </>
);`,
      },
    },
  },
  render: () => <OwnMarkupExample />,
};

/**
 * How fast is `interval`, side by side.
 *
 * Four strips, identical but for the milliseconds between moves. Reading them
 * one at a time in separate stories is no way to judge a pace, so they are
 * stacked: start the page and watch which one you can actually follow.
 *
 * `interval` is the wait BETWEEN moves, not the length of the move itself —
 * the scroll is the browser's smooth-scroll and takes as long as it takes.
 * So 1500 is not "a 1.5s animation", it is 1.5s of stillness and then a jump.
 */
export const AutoplayIntervals: Story = {
  parameters: {
    docs: {
      source: {
        code: `<>
  <DCarousel label="Offers" autoplay interval={1500} loop>…</DCarousel>
  <DCarousel label="Offers" autoplay interval={3000} loop>…</DCarousel>
  {/* no interval: 5000, the default */}
  <DCarousel label="Offers" autoplay loop>…</DCarousel>
  <DCarousel label="Offers" autoplay interval={8000} loop>…</DCarousel>
</>`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'grid', gap: '2rem' }}>
      {INTERVALS.map(({ ms, note }) => (
        <section key={ms} style={{ display: 'grid', gap: '0.5rem' }}>
          <h4 className="df-fs-heading-5 df-m-0">
            {`${ms} ms`}
            <span className="df-text-muted df-fs-body-sm df-fw-normal">{` — ${note}`}</span>
          </h4>
          <DCarousel
            label={`Autoplay every ${ms} milliseconds`}
            autoplay
            interval={ms}
            loop
            perPage={{ xs: 1, md: 3 }}
            gap={3}
          >
            {SLIDES.map((n) => (
              <DCarousel.Slide key={n}>
                <DemoSlide n={n} />
              </DCarousel.Slide>
            ))}
          </DCarousel>
        </section>
      ))}
    </div>
  ),
};

/**
 * The default, which is 5000 ms.
 *
 * Omitting `interval` gives this. Five seconds is the boundary WCAG 2.2.2
 * draws, and it is the default for that reason: it is the slowest pace that
 * still reads as a carousel rather than as a static block.
 *
 * It does not make the pause button optional. 2.2.2 applies to motion that
 * lasts more than five seconds, and an autoplaying carousel runs
 * indefinitely — so the control renders whenever `autoplay` is set, at every
 * interval.
 */
export const AutoplayDefaultInterval: Story = {
  render,
  args: {
    label: 'Autoplay at the default pace',
    perPage: { xs: 1, md: 3 },
    autoplay: true,
    loop: true,
    gap: 3,
  },
};

/**
 * A slow pace, for a hero.
 *
 * Eight seconds is long enough to read a headline and a line of copy, which is
 * what a marketing slide usually is. The slower the pace, the more the arrows
 * and dots matter: nobody waits eight seconds to see slide two, they reach for
 * a control — which is why `arrows` and `pagination` stay on here.
 */
export const AutoplaySlow: Story = {
  render,
  args: {
    label: 'Slow autoplay',
    perPage: 1,
    autoplay: true,
    interval: 8000,
    loop: true,
    gap: 3,
  },
};

/**
 * A fast pace, and why it is a bad default.
 *
 * 1500 ms is here to be judged, not copied. It is below the time it takes to
 * read a short label, so the strip reads as motion rather than as content, and
 * anything a reader was part-way through is gone. For somebody using a screen
 * magnifier it is worse: the slide they were looking at leaves the viewport
 * before they have panned across it.
 *
 * If a pace this quick is what a design calls for, the honest version of it is
 * usually not a carousel — it is a static strip that scrolls, which is what
 * `NoControls` shows.
 */
export const AutoplayFast: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Deliberately uncomfortable. Compare it against the others in **Autoplay Intervals** before picking a number.',
      },
    },
  },
  render,
  args: {
    label: 'Fast autoplay',
    perPage: { xs: 1, md: 3 },
    autoplay: true,
    interval: 1500,
    loop: true,
    gap: 3,
  },
};

function SyncedExample() {
  const main = useDCarouselController();

  return (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      <DCarousel
        label="Gallery"
        controller={main}
        perPage={1}
        pagination={false}
        onSlideChange={() => {}}
      >
        {Array.from({ length: 8 }, (_, index) => (
          <DCarousel.Slide key={`main-${index}`}>
            <div style={PANEL}>{`Slide ${index + 1}`}</div>
          </DCarousel.Slide>
        ))}
      </DCarousel>

      {/*
        * The thumbnails are a plain strip, not a second controller: they only
        * need to CALL `goToSlide` and to know which one is current, both of
        * which the main carousel's controller already publishes.
        */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto' }}>
        {Array.from({ length: 8 }, (_, index) => (
          <button
            key={`thumb-${index}`}
            type="button"
            className="df-button"
            data-variant={index === main.activeIndex ? 'solid' : 'outline'}
            data-size="sm"
            aria-current={index === main.activeIndex}
            {...main.viewportId && { 'aria-controls': main.viewportId }}
            onClick={() => main.goToSlide(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

/**
 * A thumbnail strip driving the carousel, which is what `goToSlide` unlocks.
 *
 * Navigation used to be by PAGE only — and a page is a different unit from a
 * slide the moment more than one is on screen, so a thumbnail could not point
 * at its own slide. The v3 issue listed Splide's `sync()` under "no
 * replacement"; this is that feature, in two calls: `activeIndex` to light the
 * current thumbnail, `goToSlide` to move.
 *
 * Nothing here is carousel-specific. The thumbnails are ordinary buttons, so
 * the same two calls drive a list, a map, a table row — anything that knows
 * which index it is.
 */
export const SyncedThumbnails: Story = {
  parameters: {
    docs: {
      source: {
        code: `const main = useDCarouselController();

return (
  <>
    <DCarousel label="Gallery" controller={main} perPage={1}>
      <DCarousel.Slide>…</DCarousel.Slide>
    </DCarousel>

    {items.map((item, index) => (
      <button
        key={item.id}
        type="button"
        aria-current={index === main.activeIndex}
        aria-controls={main.viewportId}
        onClick={() => main.goToSlide(index)}
      >
        {index + 1}
      </button>
    ))}
  </>
);`,
      },
    },
  },
  render: () => <SyncedExample />,
};

/**
 * Images that arrive as the strip is approached.
 *
 * `loading="lazy"` is the right default and needs nothing from us: a slide
 * scrolled off to the side does not intersect the viewport, so the browser
 * already defers it — in both builds, and **without JavaScript**, which the
 * framework-free layer promises.
 *
 * What native does badly here is the look-ahead. Its threshold is tuned for a
 * page scrolling vertically, so the next slide tends to arrive blank. Swapping
 * `src` for `data-src` hands that decision to the carousel: a slide carries
 * `data-visible` while it is on screen or within `lookahead` of it, and the
 * deferred attributes are moved across the moment it is.
 *
 * The trade, stated plainly: with `data-src` the image does not load at all
 * without JavaScript. Use `loading="lazy"` unless the look-ahead — or the
 * non-image cases, an `<iframe>` map or a `<video>` poster — is what you need.
 *
 * Give every deferred image `width` and `height` (or an `aspect-ratio`), or
 * the slide jumps when the bytes land. It warns in development if you forget.
 */
export const DeferredImages: Story = {
  parameters: {
    docs: {
      source: {
        code: `<DCarousel label="Gallery" perPage={{ xs: 1, md: 3 }} lookahead={1}>
  <DCarousel.Slide>
    <img
      data-src="photo-1.jpg"
      data-srcset="photo-1@2x.jpg 2x"
      width={800}
      height={450}
      alt="…"
    />
  </DCarousel.Slide>
</DCarousel>`,
      },
    },
  },
  render: () => (
    <DCarousel label="Deferred images" perPage={{ xs: 1, md: 3 }} gap={3} lookahead={1}>
      {Array.from({ length: 10 }, (_, index) => (
        <DCarousel.Slide key={`deferred-${index}`}>
          <img
            data-src={`https://placehold.co/400x225/EEE/333?text=Photo+${index + 1}`}
            width={400}
            height={225}
            alt=""
            style={{ inlineSize: '100%', blockSize: 'auto', borderRadius: 'var(--df-shape-surface)' }}
          />
        </DCarousel.Slide>
      ))}
    </DCarousel>
  ),
};

/**
 * A pace that follows the breakpoint.
 *
 * `interval` takes the same shape as `perPage`, `gap` and `peek`, because the
 * right pace depends on how much is on screen: one slide at a time on a phone
 * wants longer than three side by side on a desktop. Resize the viewport and
 * the cadence changes with it.
 *
 * It is the one responsive prop resolved in JavaScript rather than by a media
 * query — a timer is the part of this component CSS cannot own.
 */
export const ResponsiveInterval: Story = {
  render,
  args: {
    label: 'Responsive pace',
    perPage: { xs: 1, md: 3 },
    autoplay: true,
    loop: true,
    interval: { xs: 6000, md: 3000 },
    gap: 3,
  },
};
