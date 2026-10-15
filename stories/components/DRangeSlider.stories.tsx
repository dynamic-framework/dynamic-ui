import { useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import DRangeSlider from '../../src/components/DRangeSlider';
import type { DRangeSliderValue } from '../../src/components/DRangeSlider';
import { PREFIX_BS } from '../../src/components/config';

const meta = {
  title: 'Design System/Components/Range Slider',
  component: DRangeSlider,
  parameters: {
    docs: {
      description: {
        component: `
A range with two ends: pick a low and a high, rather than typing both into a
pair of fields.

## Two native sliders, not two divs

Each thumb is a real \`<input type="range">\`. Everything hard about a slider is
already in the element — arrow keys, Home and End, PageUp and PageDown, touch,
pointer capture during a drag, the right direction under RTL, and a real
\`slider\` role with \`aria-valuenow\` that assistive technology already knows how
to drive.

The usual objection is that two inputs cannot overlap without fighting for the
pointer. They can: each input is \`pointer-events: none\` and only its thumb
pseudo-element takes them back, so a press lands on whichever thumb is under it.
That is a stylesheet problem, and a stylesheet problem is a much smaller thing
to own than a keyboard implementation.

### When the two thumbs land on the same pixel

Close the range onto a point and there is only one circle left, which can only
belong to one of the two inputs — the high one, which is on top. Dragging it
back down would then do nothing, since it is already clamped against the low
thumb, and that is the first gesture anyone tries.

So a drag that starts on a collapsed pair and heads downwards moves the **low**
end instead, and keeps moving it until you let go. The range always reopens in
the direction you pull it.

This is pointer-only. On the keyboard each thumb is separately focusable and
separately announced, so Arrow-left on the maximum means the maximum, even when
it has nowhere left to go.

## The two callbacks

| | fires | use it for |
|---|---|---|
| \`onChange\` | every move, mid-drag | the label under the slider |
| \`onChangeCommitted\` | once, on release | the request, the re-query |

A filter that refetches on \`onChange\` sends a request per pixel of drag. One
that labels itself from \`onChangeCommitted\` shows a stale number while you move.
Most screens want both.

## The histogram

\`histogram\` takes an array of counts — one per bucket, spread evenly across
\`min\`..\`max\` — and draws them behind the track. It shows where the results are
before you commit to a range, which is the thing a pair of number fields can
never do.

Bars outside the selection are **dimmed, not hidden**: narrowing the range
should not also destroy the shape of the distribution you are narrowing within.

It is \`aria-hidden\`. A bar chart read bar by bar is noise — "3, 7, 12" is
nothing a reader can act on, and the thumbs already announce the range being
chosen. If the counts matter to your users, say them in text.

## Accessibility

- Each thumb is named (\`i18n.minimum\` / \`i18n.maximum\`), because two sliders on
  one control have to be told apart.
- \`formatValue\` becomes \`aria-valuetext\`. Without it a price filter announces
  "420", which is a number and not a price.
- The pair is a \`group\`, named by \`label\` when there is one.

## CSS Variables

| Variable | Class | Type | Description |
|---|---|---|---|
| --${PREFIX_BS}range-slider-track-bg | .d-range-slider | css color | Unselected track |
| --${PREFIX_BS}range-slider-track-height | .d-range-slider | css length | Track thickness |
| --${PREFIX_BS}range-slider-fill-bg | .d-range-slider | css color | The selected span |
| --${PREFIX_BS}range-slider-thumb-size | .d-range-slider | css length | Thumb diameter |
| --${PREFIX_BS}range-slider-thumb-bg | .d-range-slider | css color | Thumb fill |
| --${PREFIX_BS}range-slider-thumb-border | .d-range-slider | css border | Thumb border |
| --${PREFIX_BS}range-slider-histogram-height | .d-range-slider | css length | Bar area height |
| --${PREFIX_BS}range-slider-bar-bg | .d-range-slider | css color | Bars outside the range |
| --${PREFIX_BS}range-slider-bar-in-range-bg | .d-range-slider | css color | Bars inside it |

The track defaults, and the thumb's shadows, come from \`$form-range-*\`, so
this and \`DInputRange\` read as one family.
        `,
      },
    },
  },
  argTypes: {
    min: { control: 'number', table: { category: 'Content' } },
    max: { control: 'number', table: { category: 'Content' } },
    step: { control: 'number', table: { category: 'Content' } },
    value: { control: 'object', table: { category: 'Content' } },
    defaultValue: { control: 'object', table: { category: 'Content' } },
    minDistance: { control: 'number', table: { category: 'Behavior' } },
    histogram: { control: 'object', table: { category: 'Content' } },
    formatValue: { control: false, table: { category: 'Content' } },
    label: { control: 'text', table: { category: 'Content' } },
    disabled: { control: 'boolean', table: { category: 'Behavior' } },
    onChange: { action: 'change', table: { category: 'Events' } },
    onChangeCommitted: { action: 'changeCommitted', table: { category: 'Events' } },
    i18n: { control: 'object', table: { category: 'Accessibility' } },
    className: { control: 'text', table: { category: 'Appearance' } },
    style: { control: 'object', table: { category: 'Appearance' } },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DRangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A slider needs a width to be a slider; the canvas does not give it one. */
const inWidth = (width: number) => [
  (StoryFn: () => React.JSX.Element) => <div style={{ width }}><StoryFn /></div>,
];

export const Default: Story = {
  args: { min: 0, max: 100, defaultValue: [20, 80] },
  decorators: inWidth(420),
};

/** A bigger `step` makes the range coarser, and the arrow keys jump further. */
export const Stepped: Story = {
  args: {
    min: 0, max: 1000, step: 50, defaultValue: [200, 800],
  },
  decorators: inWidth(420),
};

/** `minDistance` keeps the two ends from collapsing onto each other. */
export const MinimumDistance: Story = {
  args: {
    min: 0, max: 100, defaultValue: [30, 70], minDistance: 20,
  },
  decorators: inWidth(420),
};

export const Disabled: Story = {
  args: {
    min: 0, max: 100, defaultValue: [20, 80], disabled: true,
  },
  decorators: inWidth(420),
};

/** Roughly normal, which is what a price distribution usually looks like. */
const PRICES = [
  1, 1, 2, 2, 3, 5, 6, 9, 12, 14, 18, 23, 29, 34, 38, 41, 40, 36, 31, 26,
  22, 18, 15, 12, 10, 8, 7, 5, 4, 3, 2, 2, 1, 1, 1,
];

export const WithHistogram: Story = {
  args: {
    label: 'Price range',
    min: 0,
    max: 1000,
    step: 10,
    defaultValue: [250, 700],
    histogram: PRICES,
  },
  decorators: inWidth(520),
};

function PriceFilter() {
  const [range, setRange] = useState<DRangeSliderValue>([49000, 590000]);
  const [applied, setApplied] = useState<DRangeSliderValue>([49000, 590000]);

  const money = useMemo(() => new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }), []);

  return (
    <div className="d-flex flex-column gap-3" style={{ width: 520 }}>
      <div>
        <h5 className="m-0">Rango de precios</h5>
        <p className="text-muted small m-0">Precio del viaje (incluye todas las tarifas)</p>
      </div>

      <DRangeSlider
        min={49000}
        max={590000}
        step={1000}
        value={range}
        onChange={setRange}
        onChangeCommitted={setApplied}
        histogram={PRICES}
        formatValue={(value) => money.format(value)}
        i18n={{ minimum: 'Precio mínimo', maximum: 'Precio máximo' }}
      />

      <div className="d-flex justify-content-between">
        <div>
          <p className="text-muted small m-0">Mínimo</p>
          <p className="m-0 fw-semibold">{money.format(range[0])}</p>
        </div>
        <div className="text-end">
          <p className="text-muted small m-0">Máximo</p>
          <p className="m-0 fw-semibold">{money.format(range[1])}</p>
        </div>
      </div>

      <p className="text-muted small m-0">
        {`Consultado al soltar: ${money.format(applied[0])} – ${money.format(applied[1])}`}
      </p>
    </div>
  );
}

/**
 * The shape this component exists for.
 *
 * The labels follow `onChange`, so they track the thumb as it moves. The query
 * follows `onChangeCommitted`, so it runs once per gesture rather than once per
 * pixel — watch the last line, which only changes when you let go.
 */
export const PriceFilterExample: Story = {
  name: 'Price filter',
  render: () => <PriceFilter />,
  args: { min: 0, max: 100 },
  parameters: {
    docs: {
      source: {
        code: `function PriceFilter() {
  const [range, setRange] = useState([49000, 590000]);
  const { data } = useResults(applied);

  return (
    <DRangeSlider
      min={49000}
      max={590000}
      step={1000}
      value={range}
      onChange={setRange}              // labels follow the thumb
      onChangeCommitted={setApplied}   // the query runs once, on release
      histogram={buckets}
      formatValue={(value) => money.format(value)}
      i18n={{ minimum: 'Precio mínimo', maximum: 'Precio máximo' }}
    />
  );
}`,
        language: 'tsx',
        type: 'code',
      },
    },
  },
};
