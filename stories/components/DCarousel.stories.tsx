import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { DCarousel, DButton } from '../../src';
import useDCarouselController from '../../src/components/DCarousel/useDCarouselController';
import { PREFIX_BS } from '../../src/components/config';

const meta = {
  title: 'Design System/Components/Carousel',
  component: DCarousel,
  parameters: {
    docs: {
      description: {
        component: `
Carousel of elements and components.

It is a **scroll container**, not a transform-driven track. The browser does the
scrolling, the snapping, the touch momentum, the keyboard and the RTL flip; the
component supplies arrows, dots and autoplay, which is the part a browser has no
opinion about. That is what replaced the Splide wrapper — and \`@splidejs/*\` is
no longer a dependency.

## Migrating from the Splide API

The \`options\` object is gone. Everything it carried is now a flat prop, and
Splide's pixel \`breakpoints\` become the library's own responsive objects
(\`{ xs, sm, md, lg, xl, xxl }\`), which resolve in CSS rather than in JavaScript.

| Splide \`options\`               | Now                                        |
|--------------------------------|--------------------------------------------|
| \`perPage: 2\`                   | \`perPage={2}\`                              |
| \`breakpoints: { 992: { perPage: 2 } }\` | \`perPage={{ xs: 1, lg: 2 }}\`        |
| \`gap: 8\` (px)                  | \`gap={2}\` (step on the 4px spacing scale)  |
| \`padding: '16px'\`              | \`peek={4}\`                                 |
| \`start: 3\`                     | \`initialSlide={3}\`                         |
| \`rewind: true\`                 | \`loop="rewind"\`                            |
| \`type: 'loop'\`                 | \`loop\`                                     |
| \`focus: 0\` / \`'center'\`        | \`align="start"\` / \`align="center"\`         |
| \`perMove: 1\`                   | \`perMove={1}\` (\`"page"\` is the default)    |
| \`arrows\`, \`pagination\`         | \`arrows\`, \`pagination\`                     |
| \`autoplay\`, \`interval\`         | \`autoplay\`, \`interval\`                     |
| \`drag\`                         | \`draggable\`                                |
| \`height\`                       | \`height\`                                   |
| \`onMoved(_, index)\`            | \`onSlideChange={(index) => …}\`             |

Four options have no equivalent because the scroll container makes them moot or
the browser already handles them: \`trimSpace\`, \`mediaQuery\`, \`updateOnMove\` and
\`paginationKeyboard\`. \`autoHeight\` is also gone — slides stretch to the tallest
by default, and \`height\` pins the strip when a fixed one is wanted.

## CSS Variables

Layout inputs are written per breakpoint by the component
(\`--${PREFIX_BS}carousel-per-page-md\`, and the same for \`gap\` and \`peek\`); the
stylesheet resolves the cascade. These are the ones worth overriding by hand:

| Variable                                        | className    | Type            | Description                     |
|-------------------------------------------------|--------------|-----------------|---------------------------------|
| --${PREFIX_BS}carousel-gap                      | .d-carousel  | css length unit | Space between slides            |
| --${PREFIX_BS}carousel-peek                     | .d-carousel  | css length unit | Inset at both ends              |
| --${PREFIX_BS}carousel-height                   | .d-carousel  | css length unit | Fixed height for the strip      |
| --${PREFIX_BS}carousel-arrow-size               | .d-carousel  | css length unit | Arrow button size               |
| --${PREFIX_BS}carousel-arrow-offset             | .d-carousel  | css length unit | Arrow inset from the edge       |
| --${PREFIX_BS}carousel-arrow-bg                 | .d-carousel  | css color       | Arrow background                |
| --${PREFIX_BS}carousel-arrow-fg                 | .d-carousel  | css color       | Arrow glyph colour              |
| --${PREFIX_BS}carousel-arrow-hover-bg           | .d-carousel  | css color       | Arrow background on hover       |
| --${PREFIX_BS}carousel-arrow-radius             | .d-carousel  | css length unit | Arrow corner radius             |
| --${PREFIX_BS}carousel-arrow-disabled-opacity   | .d-carousel  | number          | Arrow opacity at the ends       |
| --${PREFIX_BS}carousel-page-size                | .d-carousel  | css length unit | Dot size                        |
| --${PREFIX_BS}carousel-page-active-size         | .d-carousel  | css length unit | Width of the active dot         |
| --${PREFIX_BS}carousel-page-color               | .d-carousel  | css color       | Dot colour                      |
| --${PREFIX_BS}carousel-page-active-color        | .d-carousel  | css color       | Active dot colour               |
| --${PREFIX_BS}carousel-pagination-gap           | .d-carousel  | css length unit | Space between dots              |
| --${PREFIX_BS}carousel-pagination-offset        | .d-carousel  | css length unit | Space above the controls row    |
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      table: { category: 'Accessibility' },
      description: 'The carousel\'s accessible name. Without it there is nothing to announce.',
    },
    perPage: { control: 'object', table: { category: 'Layout' } },
    perMove: { control: 'text', table: { category: 'Layout' } },
    gap: { control: 'number', table: { category: 'Layout' } },
    peek: { control: 'number', table: { category: 'Layout' } },
    align: { control: 'radio', options: ['start', 'center'], table: { category: 'Layout' } },
    height: { control: 'text', table: { category: 'Layout' } },
    variableWidth: { control: 'boolean', table: { category: 'Layout' } },
    loop: { control: 'select', options: [false, true, 'rewind'], table: { category: 'Behavior' } },
    autoplay: { control: 'boolean', table: { category: 'Behavior' } },
    interval: { control: 'number', table: { category: 'Behavior' } },
    pauseOnHover: { control: 'boolean', table: { category: 'Behavior' } },
    draggable: { control: 'boolean', table: { category: 'Behavior' } },
    initialSlide: { control: 'number', table: { category: 'Behavior' } },
    lookahead: { control: 'number', table: { category: 'Behavior' } },
    arrows: { control: 'boolean', table: { category: 'Controls' } },
    pagination: { control: 'boolean', table: { category: 'Controls' } },
    iconArrowLeft: {
      control: false,
      description: 'DIcon props for the previous arrow. Merges onto the context icon map.',
      table: { type: { summary: 'Partial<ComponentProps<typeof DIcon>>' }, category: 'Icon' },
    },
    iconArrowRight: {
      control: false,
      description: 'DIcon props for the next arrow. Merges onto the context icon map.',
      table: { type: { summary: 'Partial<ComponentProps<typeof DIcon>>' }, category: 'Icon' },
    },
    className: { control: 'text', table: { category: 'Appearance' } },
    style: { control: 'object', table: { category: 'Appearance' } },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Placeholder slides, so every story shows the component and not a layout. */
const slides = (count: number, label = 'Slide') => Array.from({ length: count }, (_, i) => (
  <DCarousel.Slide key={`${label}-${i + 1}`}>
    <div
      className="d-flex align-items-center justify-content-center h-100 w-100 rounded bg-primary-subtle text-primary fw-semibold"
      style={{ minHeight: 160 }}
    >
      {`${label} ${i + 1}`}
    </div>
  </DCarousel.Slide>
));

export const Default: Story = {
  args: {
    label: 'Example carousel',
    perPage: 1,
    gap: 4,
  },
  render: (args) => <DCarousel {...args}>{slides(5)}</DCarousel>,
};

/**
 * One prop, one object, no pixel breakpoints.
 *
 * `{ xs: 1, md: 2, xl: 3 }` reads as "one on a phone, two from md, three from
 * xl". It resolves in CSS, so it is right on the first paint and costs nothing
 * on resize — Splide measured the container and recomputed on every one.
 */
export const Responsive: Story = {
  args: {
    label: 'Responsive carousel',
    perPage: { xs: 1, md: 2, xl: 3 },
    gap: 4,
  },
  render: (args) => <DCarousel {...args}>{slides(8)}</DCarousel>,
};

/** `peek` insets both ends, which is what reveals a sliver of the neighbours. */
export const Peek: Story = {
  args: {
    label: 'Peeking carousel',
    perPage: { xs: 1, md: 3 },
    gap: 3,
    peek: 8,
  },
  render: (args) => <DCarousel {...args}>{slides(8)}</DCarousel>,
};

export const CustomArrows: Story = {
  args: {
    label: 'Carousel with custom arrows',
    perPage: 2,
    gap: 4,
    iconArrowLeft: { icon: 'ArrowLeft' },
    iconArrowRight: { icon: 'ArrowRight' },
  },
  render: (args) => <DCarousel {...args}>{slides(6)}</DCarousel>,
};

/**
 * `loop` scrolls through clones so the strip never ends; `"rewind"` jumps back
 * to the start instead.
 */
export const Loop: Story = {
  args: {
    label: 'Looping carousel',
    perPage: { xs: 1, md: 3 },
    gap: 4,
    loop: true,
  },
  render: (args) => <DCarousel {...args}>{slides(6)}</DCarousel>,
};

/**
 * `loop="rewind"` jumps back to the start instead of scrolling through clones.
 *
 * Cheaper than `loop={true}`: no clones, so no extra DOM. The trade is that the
 * wrap is a visible jump rather than a continuous scroll.
 */
export const Rewind: Story = {
  args: {
    label: 'Rewinding carousel',
    perPage: { xs: 1, md: 3 },
    gap: 4,
    loop: 'rewind',
  },
  render: (args) => <DCarousel {...args}>{slides(6)}</DCarousel>,
};

/**
 * Autoplay brings its own play/pause button, which is not decoration: WCAG
 * 2.2.2 requires a way to stop anything that moves for more than five seconds.
 */
export const Autoplay: Story = {
  args: {
    label: 'Autoplaying carousel',
    perPage: 1,
    gap: 4,
    autoplay: true,
    interval: 2500,
    loop: true,
  },
  render: (args) => <DCarousel {...args}>{slides(4)}</DCarousel>,
};

/** Each slide takes its content's width, for a row of chips or logos. */
export const VariableWidth: Story = {
  args: {
    label: 'Variable width carousel',
    variableWidth: true,
    gap: 2,
    pagination: false,
  },
  render: (args) => (
    <DCarousel {...args}>
      {['All', 'Savings', 'Credit cards', 'Loans', 'Investments', 'Insurance', 'Payments'].map(
        (text) => (
          <DCarousel.Slide key={text}>
            <span className="badge rounded-pill text-bg-light border px-3 py-2">{text}</span>
          </DCarousel.Slide>
        ),
      )}
    </DCarousel>
  ),
};

function ExternalControls() {
  const controller = useDCarouselController();
  const [index, setIndex] = useState(0);

  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex align-items-center gap-2">
        <DButton
          text="Previous"
          variant="outline"
          color="secondary"
          disabled={!controller.canPrev}
          onClick={controller.prev}
        />
        <DButton
          text="Next"
          variant="outline"
          color="secondary"
          disabled={!controller.canNext}
          onClick={controller.next}
        />
        <span className="text-muted small ms-2">
          {`Slide ${index + 1} · page ${controller.activePage + 1} of ${controller.pageCount}`}
        </span>
      </div>
      <DCarousel
        label="Externally controlled carousel"
        controller={controller}
        perPage={{ xs: 1, md: 2 }}
        gap={4}
        arrows={false}
        pagination={false}
        onSlideChange={setIndex}
      >
        {slides(6)}
      </DCarousel>
    </div>
  );
}

/**
 * Controls that live somewhere else in the tree.
 *
 * A `ref` cannot do this: it carries no state and never re-renders whoever
 * holds it, so an external arrow could not disable itself at the end of the
 * strip. The controller publishes state and attaches actions, so it can.
 */
export const ExternalController: Story = {
  args: { label: 'Externally controlled carousel' },
  render: () => <ExternalControls />,
};
