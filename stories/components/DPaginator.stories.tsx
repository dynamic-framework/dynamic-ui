import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import DIcon from '../../src/components/DIcon';
import DPaginator from '../../src/components/DPaginator/DPaginator';
import { PREFIX_BS } from '../../src/components/config';

const meta = {
  title: 'Design System/Components/Paginator',
  component: DPaginator,
  parameters: {
    docs: {
      description: {
        component: `
Page navigation: a run of numbered pages with optional previous/next arrows.

Renders its own markup, with no third-party dependency. The class names are
Bootstrap's — \`.pagination\`, \`.page-item\`, \`.page-link\`, plus \`.active\`,
\`.disabled\` and the \`.page-item-arrow\` this library adds — so it is styled by
\`base/_pagination.scss\` and by anything a consumer has written against those.

A paginator for a single page renders nothing: a control with nothing to
control.

## How many pages to show

Two props decide the shape of the run, and between them they replace measuring
a pixel width:

- **\`siblings\`** — pages either side of the current one. Responsive, because
  the number that fits on a phone is not the number that fits on a desktop:
  \`siblings={{ xs: 0, md: 2 }}\`.
- **\`boundaries\`** — pages pinned at each end, so the first and last are always
  one press away.

## Arrows

\`iconArrowLeft\` / \`iconArrowRight\` configure the default icon — which glyph,
its colour, its size — and merge onto the context's icon map.

For an arrow that is a WORD, or a word beside a glyph, use \`prevContent\` /
\`nextContent\`. They replace the icon entirely and hand you the accessible
name: the component drops its own \`aria-label\`, because a label overrides
visible text and a button labelled "Previous page" while reading "Anterior"
fails WCAG 2.5.3. Content with no text in it therefore leaves the button
unnamed — include a word, or hide one with \`.visually-hidden\`.

With \`total={40} current={20}\`, \`boundaries={2}\` gives
\`1 2 … 19 20 21 … 39 40\`.

## Accessibility

- A \`<nav>\` landmark, named, so a screen reader can jump to it — and so two
  paginators on one page are told apart.
- The current page carries \`aria-current="page"\` as well as \`.active\`.
- A spent arrow is a real \`<button disabled>\`, not a styled span.
- The gap is \`aria-hidden\`: "ellipsis" tells a reader nothing they can act on,
  and the numbers either side already say the run is not contiguous.
- Every label is overridable through \`i18n\`.

## Links instead of buttons

Pass \`pageHref\` when the pages have real addresses. A link can be opened in a
new tab, is followed by a crawler, and works with JavaScript disabled — none of
which a button does. \`onPageChange\` still fires, and a plain click is
intercepted so the page does not reload; a modified click is left to the
browser.

## CSS Variables

| Variable                                             | Class       | Type                   | Description                 |
|------------------------------------------------------|-------------|------------------------|-----------------------------|
| --${PREFIX_BS}pagination-page-item-size              | .pagination | css length unit        | Size of page item           |
| --${PREFIX_BS}pagination-border-radius               | .pagination | css border radius unit | Radius of a page item       |
| --${PREFIX_BS}pagination-page-control-color          | .pagination | css color unit         | Arrow colour                |
| --${PREFIX_BS}pagination-page-control-disabled-color | .pagination | css color unit         | Arrow colour when spent     |
| --${PREFIX_BS}pagination-ellipsis-color              | .pagination | css color unit         | The gap between page runs   |
| --${PREFIX_BS}pagination-arrow-glyph-size            | .pagination | css length unit        | Arrow icon size             |

Everything Bootstrap's own pagination reads — \`--${PREFIX_BS}pagination-color\`,
\`-bg\`, \`-hover-*\`, \`-active-*\`, \`-disabled-*\` — applies as well.

## Migrating from the previous version

Up to 2.11 this wrapped \`react-responsive-pagination\`, which owned the markup —
so the only way to dress it was to inject class names, and 10 of the 21
documented props were exactly that. That dependency is gone.

\`current\`, \`total\` and \`onPageChange\` are unchanged, which is all the vast
majority of call sites use. The rest:

| Before | Now |
|---|---|
| \`maxWidth={375}\` | \`siblings={{ xs: 0, md: 1 }}\` |
| \`previousLabel\` / \`nextLabel\` | \`i18n={{ previous, next }}\` |
| \`renderNav={false}\` | \`arrows={false}\` |
| \`className\`, \`extraClassName\`, \`pageItemClassName\`, \`pageLinkClassName\`, \`activeItemClassName\`, \`disabledItemClassName\`, \`navClassName\`, \`ariaCurrentAttr\`, \`a11yActiveLabel\` | gone — the markup is ours, so there is nothing to inject into |

The class names did not change, so no stylesheet needs touching.
        `,
      },
    },
  },
  argTypes: {
    total: { control: 'number', table: { category: 'Content' } },
    current: { control: 'number', table: { category: 'Content' } },
    onPageChange: { action: 'onPageChange', table: { category: 'Events' } },
    siblings: { control: 'number', table: { category: 'Content' } },
    boundaries: { control: 'number', table: { category: 'Content' } },
    arrows: { control: 'boolean', table: { category: 'Appearance' } },
    size: { control: 'radio', options: [undefined, 'sm', 'lg'], table: { category: 'Appearance' } },
    pageHref: { control: false, table: { category: 'Behavior' } },
    i18n: { control: 'object', table: { category: 'Accessibility' } },
    iconArrowLeft: { control: false, table: { category: 'Icon' } },
    iconArrowRight: { control: false, table: { category: 'Icon' } },
    prevContent: { control: false, table: { category: 'Content' } },
    nextContent: { control: false, table: { category: 'Content' } },
    className: { control: 'text', table: { category: 'Appearance' } },
    style: { control: 'object', table: { category: 'Appearance' } },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DPaginator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { total: 10, current: 1 },
};

/** Long enough for a gap at each end. */
export const WithGaps: Story = {
  args: { total: 40, current: 20 },
};

/**
 * `siblings` is responsive: fewer numbers on a phone, more when there is room.
 * Narrow the viewport and watch the run shrink.
 */
export const ResponsiveSiblings: Story = {
  args: { total: 40, current: 20, siblings: { xs: 0, md: 1, xl: 3 } },
};

/** `boundaries` pins pages at each end so the first and last stay reachable. */
export const Boundaries: Story = {
  args: { total: 40, current: 20, boundaries: 2 },
};

export const NoArrows: Story = {
  args: { total: 10, current: 5, arrows: false },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="d-flex flex-column gap-3 align-items-start">
      <DPaginator {...args} size="sm" />
      <DPaginator {...args} />
      <DPaginator {...args} size="lg" />
    </div>
  ),
  args: { total: 10, current: 4 },
};

/**
 * The arrows default to the context's icon map, so a product that has already
 * swapped its icon set does not have to name them again here. `iconArrowLeft`
 * and `iconArrowRight` override that per paginator, and they MERGE onto the
 * default — `{ color: 'danger' }` alone recolours the chevron rather than
 * rendering an icon with no name.
 *
 * Both take `DIcon` props, so the size and colour come with them.
 */
export const CustomArrowIcons: Story = {
  render: (args) => (
    <div className="d-flex flex-column gap-4 align-items-start">
      <div>
        <p className="text-muted small mb-1">Default — the context icon map</p>
        <DPaginator {...args} />
      </div>
      <div>
        <p className="text-muted small mb-1">{'iconArrowLeft={{ icon: \'ArrowLeft\' }}'}</p>
        <DPaginator
          {...args}
          iconArrowLeft={{ icon: 'ArrowLeft' }}
          iconArrowRight={{ icon: 'ArrowRight' }}
        />
      </div>
      <div>
        <p className="text-muted small mb-1">Recoloured, keeping the default glyph</p>
        <DPaginator
          {...args}
          iconArrowLeft={{ color: 'success' }}
          iconArrowRight={{ color: 'danger' }}
        />
      </div>
    </div>
  ),
  args: { total: 10, current: 4 },
  parameters: {
    docs: {
      source: {
        code: `<DPaginator
  total={10}
  current={page}
  onPageChange={setPage}
  iconArrowLeft={{ icon: 'ArrowLeft' }}
  iconArrowRight={{ icon: 'ArrowRight' }}
/>

// Merged onto the default, so this recolours the context's chevron
// rather than replacing it:
<DPaginator
  total={10}
  current={page}
  onPageChange={setPage}
  iconArrowLeft={{ color: 'success' }}
  iconArrowRight={{ color: 'danger' }}
/>`,
        language: 'tsx',
        type: 'code',
      },
    },
  },
};

/**
 * An arrow that is a word, or a word beside a glyph.
 *
 * `iconArrowLeft` configures the default icon; it cannot replace it. An icon is
 * rendered `aria-hidden`, sized from the icon scale, and named by `i18n` — none
 * of which suits a word, so text pushed through it came out unreadable to a
 * screen reader and squeezed into a 1.25rem box.
 *
 * `prevContent` / `nextContent` take whatever you give them and render it
 * directly. The accessible name comes with it: the component drops its own
 * `aria-label`, because a label overrides visible text and a button labelled
 * "Previous page" while reading "Anterior" fails WCAG 2.5.3.
 *
 * Which means the name is yours to supply. Include a word, or hide one with
 * Bootstrap's `.visually-hidden` — the third example below.
 */
export const TextArrows: Story = {
  render: (args) => (
    <div className="d-flex flex-column gap-4 align-items-start">
      <div>
        <p className="text-muted small mb-1">Text only</p>
        <DPaginator {...args} prevContent="Anterior" nextContent="Siguiente" />
      </div>
      <div>
        <p className="text-muted small mb-1">Text beside a glyph</p>
        <DPaginator
          {...args}
          prevContent={(
            <span className="d-inline-flex align-items-center gap-1">
              <DIcon icon="ArrowLeft" />
              Anterior
            </span>
          )}
          nextContent={(
            <span className="d-inline-flex align-items-center gap-1">
              Siguiente
              <DIcon icon="ArrowRight" />
            </span>
          )}
        />
      </div>
      <div>
        <p className="text-muted small mb-1">
          A glyph, named by visually hidden text
        </p>
        <DPaginator
          {...args}
          prevContent={(
            <>
              <DIcon icon="ArrowLeft" />
              <span className="visually-hidden">Anterior</span>
            </>
          )}
          nextContent={(
            <>
              <DIcon icon="ArrowRight" />
              <span className="visually-hidden">Siguiente</span>
            </>
          )}
        />
      </div>
    </div>
  ),
  args: { total: 10, current: 4 },
  parameters: {
    docs: {
      source: {
        code: `// A word
<DPaginator total={10} current={page} onPageChange={setPage}
  prevContent="Anterior"
  nextContent="Siguiente"
/>

// A word beside a glyph. The glyph is already aria-hidden, so the
// accessible name is the word.
<DPaginator total={10} current={page} onPageChange={setPage}
  prevContent={(
    <span className="d-inline-flex align-items-center gap-1">
      <DIcon icon="ArrowLeft" />
      Anterior
    </span>
  )}
/>

// A glyph only: supply the name yourself, or the button has none.
<DPaginator total={10} current={page} onPageChange={setPage}
  prevContent={(
    <>
      <DIcon icon="ArrowLeft" />
      <span className="visually-hidden">Anterior</span>
    </>
  )}
/>`,
        language: 'tsx',
        type: 'code',
      },
    },
  },
};

/**
 * Real URLs, rendered as links.
 *
 * Worth doing whenever the pages have addresses: a link can be opened in a new
 * tab, is followed by a crawler, and works with JavaScript disabled — none of
 * which a button does. A plain click is still intercepted so the page does not
 * reload.
 */
export const AsLinks: Story = {
  args: {
    total: 10,
    current: 4,
    pageHref: (page: number) => `?page=${page}`,
  },
};

/** The control labels, for an interface that is not in English. */
export const Translated: Story = {
  args: {
    total: 10,
    current: 4,
    i18n: {
      label: 'Paginación',
      previous: 'Página anterior',
      next: 'Página siguiente',
      goToPage: 'Ir a la página',
      currentPage: 'Página',
    },
  },
};

function ControlledExample() {
  const [page, setPage] = useState(1);
  return (
    <div className="d-flex flex-column gap-3 align-items-center">
      <p className="m-0 text-muted small">{`Showing page ${page} of 12`}</p>
      <DPaginator total={12} current={page} onPageChange={setPage} />
    </div>
  );
}

/** The usual shape: the page lives in the consumer's state. */
export const Controlled: Story = {
  render: () => <ControlledExample />,
  args: { total: 12 },
  parameters: {
    docs: {
      source: {
        code: `function ItemList() {
  const [page, setPage] = useState(1);

  return (
    <>
      <p>{\`Showing page \${page} of 12\`}</p>
      <DPaginator total={12} current={page} onPageChange={setPage} />
    </>
  );
}`,
        language: 'tsx',
        type: 'code',
      },
    },
  },
};
