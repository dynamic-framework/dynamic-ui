import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import DPaginator from '../../src/components/DPaginator';

type Story = StoryObj<typeof DPaginator>;

const meta: Meta<typeof DPaginator> = {
  title: 'Design System/Components/Paginator',
  component: DPaginator,
  parameters: {
    docs: {
      description: {
        component: `
Page navigation: a row of numbered controls with the first and last page always
within reach.

## How many pages it shows

Not by measuring. 2.x wrapped a library that took a \`maxWidth\` in pixels and
worked out how many buttons would fit — which reads like the responsive answer
and is the wrong one, because the count then depends on a magic number the
caller has to keep in step with the font, the padding and the number of digits.
The same \`maxWidth: 400\` shows a different number of pages once the total
passes 99 and every button gets wider.

\`siblings\` and \`boundaries\` say what you mean instead:

\`\`\`tsx
<DPaginator total={20} current={10} siblings={1} boundaries={1} />
// 1 … 9 10 11 … 20
\`\`\`

- **\`siblings\`** — pages either side of the current one.
- **\`boundaries\`** — pages pinned at each end.

\`siblings\` is responsive, because the number that fits on a phone is not the
number that fits on a desktop:

\`\`\`tsx
<DPaginator siblings={{ xs: 0, md: 1, lg: 2 }} />
\`\`\`

### The width does not change as you page

A window that simply clipped at the ends would render fewer items near them, so
the control would change width as you paged through it — moving the button
under the pointer just as you went to press it again. The window slides inward
instead of shrinking, so \`total={20}\` renders exactly seven items on every
page of the list.

A gap standing in for a single page is rendered as that page: an ellipsis is
wider than the number it hides, and you cannot click it.

## Buttons or links

By default each page is a \`button\` and paging is handled in JavaScript. Pass
\`pageHref\` and they become real links:

\`\`\`tsx
<DPaginator total={20} current={p} pageHref={(page) => \`/results?page=\${page}\`} />
\`\`\`

Worth doing whenever the pages have URLs — a link can be opened in a new tab, is
followed by a crawler, and works with JavaScript disabled. \`onPageChange\`
still fires on a plain click and the navigation is prevented; a
ctrl/cmd/shift-click is left to the browser.

## Accessibility

The control is a named \`nav\` landmark, so a screen reader can jump to it and
tell it apart from the other one on the page. Each button is labelled with what
pressing it does — "Go to page 4", not "4" — the current page carries
\`aria-current="page"\`, and the gaps are hidden from assistive technology
because "ellipsis" is not something a user can act on.

Every label is overridable through \`i18n\`.
        `,
      },
    },
  },
  argTypes: {
    total: { control: 'number', table: { category: 'Content' } },
    current: { control: 'number', table: { category: 'Content' } },
    onPageChange: { action: 'pageChange', table: { category: 'Events' } },
    siblings: {
      control: 'object',
      description: 'Pages either side of the current one. Takes a number or a per-breakpoint object.',
      table: { category: 'Layout' },
    },
    boundaries: {
      control: 'number',
      description: 'Pages pinned at each end.',
      table: { category: 'Layout' },
    },
    arrows: { control: 'boolean', table: { category: 'Appearance' } },
    size: {
      control: 'inline-radio',
      options: [undefined, 'sm', 'md', 'lg'],
      table: { category: 'Appearance' },
    },
    className: { control: 'text', table: { category: 'Appearance' } },
    style: { control: 'object', table: { category: 'Appearance' } },
    pageHref: {
      control: false,
      description: 'Renders each page as a link to this href instead of as a button.',
      table: { type: { summary: '(page: number) => string' }, category: 'Behavior' },
    },
    iconArrowLeft: {
      control: false,
      description: 'DIcon props for the "previous" arrow.',
      table: { type: { summary: 'ComponentProps<typeof DIcon>' }, category: 'Icon' },
    },
    iconArrowRight: {
      control: false,
      description: 'DIcon props for the "next" arrow.',
      table: { type: { summary: 'ComponentProps<typeof DIcon>' }, category: 'Icon' },
    },
    i18n: { control: 'object', table: { category: 'Accessibility' } },
  },
  tags: ['autodocs'],
};

export default meta;

/**
 * The paginator is controlled: it renders `current` and reports a press. This
 * wrapper is the state a real page would already have.
 */
function Controlled({ start = 1, ...args }: { start?: number } & Record<string, unknown>) {
  const [page, setPage] = useState(start);
  return <DPaginator {...args as never} current={page} onPageChange={setPage} />;
}

const render: Story['render'] = (args) => <Controlled {...args} />;

export const Default: Story = {
  render,
  args: { total: 20 },
};

/**
 * Short enough that nothing has to be hidden. The gaps only appear once there
 * is more than one page to hide behind them.
 */
export const ShortList: Story = {
  render,
  args: { total: 5 },
};

/**
 * Page through this one and watch the width: it renders seven items whether
 * you are at the start, the middle or the end.
 */
export const StableWidth: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Press through the whole list. The window slides rather than shrinking, so the control never resizes and the button under your pointer stays where it was.',
      },
    },
  },
  render,
  args: { total: 20, start: 1 },
};

export const MoreSiblings: Story = {
  parameters: {
    docs: {
      description: {
        story: '`siblings={2}` shows two pages either side. `siblings={0}` shows only the current one, which is the right setting for a narrow column.',
      },
    },
  },
  render: (args) => (
    <div className="df-flex df-flex-col df-gap-4">
      <Controlled {...args} siblings={0} start={10} />
      <Controlled {...args} siblings={1} start={10} />
      <Controlled {...args} siblings={2} start={10} />
      <Controlled {...args} siblings={3} start={10} />
    </div>
  ),
  args: { total: 40 },
};

export const MoreBoundaries: Story = {
  parameters: {
    docs: {
      description: {
        story: '`boundaries={2}` pins the first two and last two pages, which helps when a user is likely to want page 2 as often as page 1.',
      },
    },
  },
  render,
  args: { total: 40, start: 20, boundaries: 2 },
};

/**
 * The reason `siblings` is responsive. Resize the preview: three pages either
 * side on a desktop, none at all on a phone.
 */
export const Responsive: Story = {
  parameters: {
    docs: {
      description: {
        story: `
\`\`\`tsx
<DPaginator siblings={{ xs: 0, sm: 1, lg: 3 }} />
\`\`\`

Unlike the carousel — where the layout is resolved in CSS — this one has to be
decided in JavaScript, because how many buttons EXIST is a DOM question and no
media query can add or remove an ellipsis.
        `,
      },
    },
  },
  render,
  args: { total: 40, start: 20, siblings: { xs: 0, sm: 1, lg: 3 } },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="df-flex df-flex-col df-gap-4">
      <Controlled {...args} size="sm" start={5} />
      <Controlled {...args} start={5} />
      <Controlled {...args} size="lg" start={5} />
    </div>
  ),
  args: { total: 10 },
};

export const NoArrows: Story = {
  render,
  args: { total: 20, start: 10, arrows: false },
};

export const CustomArrows: Story = {
  render,
  args: {
    total: 20,
    start: 10,
    iconArrowLeft: { icon: 'CircleArrowLeft' },
    iconArrowRight: { icon: 'CircleArrowRight' },
  },
};

/**
 * Real links, for pages that have URLs. Right-click one: it has an href, so the
 * browser offers to open it in a new tab.
 */
export const AsLinks: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A plain click is intercepted and handled in place; a ctrl/cmd-click is left to the browser. With JavaScript off the links still work.',
      },
    },
  },
  render,
  args: {
    total: 20,
    start: 4,
    pageHref: (page: number) => `?page=${page}`,
  },
};

export const Translated: Story = {
  render,
  args: {
    total: 20,
    start: 10,
    i18n: {
      label: 'Paginación',
      previous: 'Página anterior',
      next: 'Página siguiente',
      goToPage: 'Ir a la página',
      currentPage: 'Página',
    },
  },
};
