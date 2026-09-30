import { Meta, StoryObj } from '@storybook/react-vite';

import DLayout from '../../src/components/DLayout/DLayout';
import { DBox } from '../../src';

const GAP_OPTIONS = Array.from({ length: 31 }, (_, i) => i);

const config: Meta<typeof DLayout> = {
  title: 'Design System/Components/Layout',
  component: DLayout,
  argTypes: {
    gap: {
      control: {
        type: 'select',
      },
      options: GAP_OPTIONS,
      description: 'Gap spacing between columns (all breakpoints)',
      table: { category: 'Appearance' },
    },
    gapSm: {
      control: {
        type: 'select',
      },
      options: GAP_OPTIONS,
      description: 'Gap spacing for small screens (≥576px)',
      table: { category: 'Appearance' },
    },
    gapMd: {
      control: {
        type: 'select',
      },
      options: GAP_OPTIONS,
      description: 'Gap spacing for medium screens (≥768px)',
      table: { category: 'Appearance' },
    },
    gapLg: {
      control: {
        type: 'select',
      },
      options: GAP_OPTIONS,
      description: 'Gap spacing for large screens (≥992px)',
      table: { category: 'Appearance' },
    },
    gapXl: {
      control: {
        type: 'select',
      },
      options: GAP_OPTIONS,
      description: 'Gap spacing for extra large screens (≥1200px)',
      table: { category: 'Appearance' },
    },
    gapXxl: {
      control: {
        type: 'select',
      },
      options: GAP_OPTIONS,
      description: 'Gap spacing for extra extra large screens (≥1400px)',
      table: { category: 'Appearance' },
    },
    children: {
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
      control: false,
    },
    className: {
      type: 'string',
      table: { category: 'Appearance' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
DLayout is a grid-based layout component that uses Bootstrap's CSS Grid system to create responsive column layouts.

### Key Features:

- **Grid-Based:** Uses Bootstrap's <code>.grid</code> class for flexible layouts.
- **Column System:** Leverages <code>.g-col-##</code> classes for defining column widths (1-24).
- **Gap Control:** Supports <code>gap</code> property for controlling spacing between columns using Bootstrap's gap utilities (0–30).
- **Responsive Gap:** Supports responsive gap properties: <code>gapSm</code>, <code>gapMd</code>, <code>gapLg</code>, <code>gapXl</code>, <code>gapXxl</code>, using the same Bootstrap gap utility range (0–30).
- **Pane Component:** Includes <code>DLayout.Pane</code> sub-component for individual columns.
- **Responsive:** Built on Bootstrap's grid system for responsive designs.

### When to Use:

- When you need to create multi-column layouts.
- To organize content in a grid-based structure.
- For responsive page layouts using Bootstrap's grid utilities.

### Usage:

\`\`\`tsx
<DLayout gap={3}>
  <DLayout.Pane cols="4">Sidebar</DLayout.Pane>
  <DLayout.Pane cols="8">Main Content</DLayout.Pane>
</DLayout>
\`\`\`

### Responsive Usage:
\`\`\`tsx
<DLayout gap={1} gapMd={2} gapLg={4}>
  <DLayout.Pane cols="12" colsMd="6" colsLg="4">
    Responsive Column
  </DLayout.Pane>
</DLayout>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DLayout>;

export const Default: Story = {
  args: {
    className: 'bg-gray-100 p-4',
    gap: 4,
    columns: 12,
    children: (
      <>
        <DLayout.Pane cols="4">
          <DBox>
            <h5>Column 4</h5>
            <p>This pane takes 4 columns</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="8">
          <DBox>
            <h5>Column 8</h5>
            <p>This pane takes 8 columns</p>
          </DBox>
        </DLayout.Pane>
      </>
    ),
  },
};

export const ThreeColumns: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Example with three equal columns.',
      },
    },
  },
  args: {
    children: (
      <>
        <DLayout.Pane cols="4">
          <DBox>
            <h5>Column 1</h5>
            <p>First column</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="4">
          <DBox>
            <h5>Column 2</h5>
            <p>Second column</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="4">
          <DBox>
            <h5>Column 3</h5>
            <p>Third column</p>
          </DBox>
        </DLayout.Pane>
      </>
    ),
  },
};

export const Sidebar: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Classic sidebar layout with a narrow sidebar (3 columns) and wide content area (9 columns).',
      },
    },
  },
  args: {
    children: (
      <>
        <DLayout.Pane cols="3">
          <DBox>
            <h5>Sidebar</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>Menu Item 1</li>
              <li>Menu Item 2</li>
              <li>Menu Item 3</li>
              <li>Menu Item 4</li>
            </ul>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="9">
          <DBox>
            <h5>Main Content</h5>
            <p>This is the main content area that takes up most of the space.</p>
            <p>It occupies 9 out of 12 columns, while the sidebar takes 3.</p>
          </DBox>
        </DLayout.Pane>
      </>
    ),
  },
};

export const ComplexLayout: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A more complex layout with multiple rows and different column configurations.',
      },
    },
  },
  args: {
    children: (
      <>
        <DLayout.Pane cols="12">
          <DBox>
            <h5>Header (Full Width)</h5>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="3">
          <DBox>
            <h6>Sidebar</h6>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="6">
          <DBox>
            <h6>Main Content</h6>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="3">
          <DBox>
            <h6>Right Sidebar</h6>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="12">
          <DBox>
            <h6>Footer (Full Width)</h6>
          </DBox>
        </DLayout.Pane>
      </>
    ),
  },
};

export const WithGap: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the use of the <code>gap</code> property to add spacing between columns. The gap accepts values from 0 to 5 (Bootstrap gap utilities).',
      },
    },
  },
  args: {
    gap: 3,
    children: (
      <>
        <DLayout.Pane cols="4">
          <DBox>
            <h5>Column 1</h5>
            <p>With gap spacing</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="4">
          <DBox>
            <h5>Column 2</h5>
            <p>With gap spacing</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="4">
          <DBox>
            <h5>Column 3</h5>
            <p>With gap spacing</p>
          </DBox>
        </DLayout.Pane>
      </>
    ),
  },
};

export const Responsive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates responsive columns that adapt to different screen sizes. Resize your browser to see the columns change.',
      },
    },
  },
  args: {
    gap: 3,
    children: (
      <>
        <DLayout.Pane cols="12" colsSm="6" colsLg="4">
          <DBox>
            <h5>Responsive Column 1</h5>
            <p>12 cols on mobile, 6 on tablet, 4 on desktop</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="12" colsSm="6" colsLg="4">
          <DBox>
            <h5>Responsive Column 2</h5>
            <p>12 cols on mobile, 6 on tablet, 4 on desktop</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="12" colsSm="12" colsLg="4">
          <DBox>
            <h5>Responsive Column 3</h5>
            <p>12 cols on mobile and tablet, 4 on desktop</p>
          </DBox>
        </DLayout.Pane>
      </>
    ),
  },
};

export const ResponsiveGap: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates responsive gap spacing that changes at different screen sizes. Small gap on mobile (1), medium gap on tablet (2), larger gap on desktop (4).',
      },
    },
  },
  args: {
    gap: 1,
    gapMd: 2,
    gapLg: 4,
    children: (
      <>
        <DLayout.Pane cols="12" colsMd="6" colsLg="3">
          <DBox>
            <h5>Card 1</h5>
            <p>Gap adjusts with screen size</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="12" colsMd="6" colsLg="3">
          <DBox>
            <h5>Card 2</h5>
            <p>Gap adjusts with screen size</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="12" colsMd="6" colsLg="3">
          <DBox>
            <h5>Card 3</h5>
            <p>Gap adjusts with screen size</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="12" colsMd="6" colsLg="3">
          <DBox>
            <h5>Card 4</h5>
            <p>Gap adjusts with screen size</p>
          </DBox>
        </DLayout.Pane>
      </>
    ),
  },
};

export const FiveColumns: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates a custom 5-column layout using the <code>columns</code> prop. Instead of the default 12-column grid, this creates 5 equal columns.',
      },
    },
  },
  args: {
    columns: 5,
    gap: 2,
    children: (
      <>
        <DLayout.Pane cols="1">
          <DBox>
            <h5>Column 1</h5>
            <p>1 of 5</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="1">
          <DBox>
            <h5>Column 2</h5>
            <p>2 of 5</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="1">
          <DBox>
            <h5>Column 3</h5>
            <p>3 of 5</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="1">
          <DBox>
            <h5>Column 4</h5>
            <p>4 of 5</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="1">
          <DBox>
            <h5>Column 5</h5>
            <p>5 of 5</p>
          </DBox>
        </DLayout.Pane>
      </>
    ),
  },
};

export const TwentyFourColumns: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates a custom 24-column layout. This example shows a 2/3 - 1/3 split using 16 columns for the main content and 8 columns for the sidebar.',
      },
    },
  },
  args: {
    columns: 24,
    gap: 3,
    children: (
      <>
        <DLayout.Pane cols="16">
          <DBox>
            <h5>Main Content (16/24)</h5>
            <p>This pane takes 16 columns out of 24, which is 2/3 of the width.</p>
            <p>Perfect for main content areas that need more space.</p>
          </DBox>
        </DLayout.Pane>
        <DLayout.Pane cols="8">
          <DBox>
            <h5>Sidebar (8/24)</h5>
            <p>This pane takes 8 columns out of 24, which is 1/3 of the width.</p>
            <p>Ideal for sidebars or secondary content.</p>
          </DBox>
        </DLayout.Pane>
      </>
    ),
  },
};

export const GridUtilities: Story = {
  parameters: {
    docs: {
      description: {
        story: `
**CSS-only Grid Utilities**

The \`DLayout\` component is built on top of a set of pure CSS utility classes. When working **without React**, you can replicate any layout by applying these classes directly to your HTML elements.

---

### Container: \`.df-grid\`

The root wrapper needs \`.df-grid\` plus a column count: \`.df-grid-cols-12\` for the usual twelve, or any of \`.df-grid-cols-1\` through \`.df-grid-cols-12\`.

\`\`\`html
<div class="df-grid df-grid-cols-12 df-gap-3">
  <!-- children -->
</div>
\`\`\`

---

### Column spans: \`.g-col-{n}\`

Each child uses \`.g-col-{n}\` to declare how many columns it occupies. The default grid has **12 columns**.

| Class | Columns spanned |
|---|---|
| \`.g-col-1\` | 1 |
| \`.g-col-2\` | 2 |
| \`.g-col-3\` | 3 |
| \`.g-col-4\` | 4 |
| \`.g-col-6\` | 6 |
| \`.g-col-8\` | 8 |
| \`.g-col-9\` | 9 |
| \`.g-col-12\` | 12 (full width) |

> **More than 12 columns:** the utility classes stop at 12 on purpose — 24 spans across 6 breakpoints is 144 class names shipped to every page for a layout most pages never use. Past twelve, use \`DLayout\` with \`columns={24}\`: it writes the count and each pane's span as custom properties, so any number works and nothing extra is downloaded. See the *24-column layout* story.

---

### Responsive column spans

Append a breakpoint infix to make the column span apply only from that breakpoint upward.

| Class | Applies from |
|---|---|
| \`.g-col-{n}\` | All screens (xs) |
| \`.g-col-sm-{n}\` | ≥ 576 px |
| \`.g-col-md-{n}\` | ≥ 768 px |
| \`.g-col-lg-{n}\` | ≥ 992 px |
| \`.g-col-xl-{n}\` | ≥ 1200 px |
| \`.g-col-xxl-{n}\` | ≥ 1400 px |

\`\`\`html
<!-- Full width on mobile, half on tablet, one-third on desktop -->
<div class="df-col-span-12 df-md:col-span-6 df-lg:col-span-4">…</div>
\`\`\`

---

### Gap utilities: \`.gap-{n}\`

Control the spacing between columns with Bootstrap gap utility classes. DLayout supports gap values \`0–30\`, which is the full range exposed by the component and the Storybook controls above. Responsive infixes follow the same pattern as column classes.

| Class | Breakpoint |
|---|---|
| \`.gap-{n}\` | All screens |
| \`.gap-sm-{n}\` | ≥ 576 px |
| \`.gap-md-{n}\` | ≥ 768 px |
| \`.gap-lg-{n}\` | ≥ 992 px |
| \`.gap-xl-{n}\` | ≥ 1200 px |
| \`.gap-xxl-{n}\` | ≥ 1400 px |

---

### Custom column count

Pick the column count with a \`.df-grid-cols-{n}\` class, up to 12. In React, \`DLayout\`'s \`columns\` prop takes any number.

\`\`\`html
<!-- 5-column grid -->
<div class="df-grid df-grid-cols-5 df-gap-2">
  <div class="df-col-span-1">1/5</div>
  <div class="df-col-span-1">2/5</div>
  <div class="df-col-span-1">3/5</div>
  <div class="df-col-span-1">4/5</div>
  <div class="df-col-span-1">5/5</div>
</div>
\`\`\`

---

### Full example: sidebar layout (CSS-only)

\`\`\`html
<div class="df-grid df-grid-cols-12 df-gap-3">
  <div class="df-col-span-3">Sidebar</div>
  <div class="df-col-span-9">Main content</div>
</div>
\`\`\`

### Full example: responsive cards (CSS-only)

\`\`\`html
<div class="df-grid df-grid-cols-12 df-gap-1 df-md:gap-2 df-lg:gap-4">
  <div class="df-col-span-12 df-md:col-span-6 df-lg:col-span-3">Card 1</div>
  <div class="df-col-span-12 df-md:col-span-6 df-lg:col-span-3">Card 2</div>
  <div class="df-col-span-12 df-md:col-span-6 df-lg:col-span-3">Card 3</div>
  <div class="df-col-span-12 df-md:col-span-6 df-lg:col-span-3">Card 4</div>
</div>
\`\`\`

> These classes are the exact ones generated by the \`DLayout\` and \`DLayout.Pane\` React components under the hood.
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <p className="df-mb-2 df-fw-semibold">
          {'Sidebar layout - '}
          <code>.grid .gap-3</code>
          {' with '}
          <code>.g-col-3</code>
          {' / '}
          <code>.g-col-9</code>
        </p>
        <div className="df-grid df-grid-cols-12 df-gap-3">
          <div className="df-col-span-3">
            <DBox>
              <strong>Sidebar</strong>
              <p className="df-mb-0">.g-col-3</p>
            </DBox>
          </div>
          <div className="df-col-span-9">
            <DBox>
              <strong>Main Content</strong>
              <p className="df-mb-0">.g-col-9</p>
            </DBox>
          </div>
        </div>
      </div>

      <div>
        <p className="df-mb-2 df-fw-semibold">
          {'Three equal columns - '}
          <code>.grid</code>
          {' with '}
          <code>.g-col-4</code>
        </p>
        <div className="df-grid df-grid-cols-12 df-gap-2">
          <div className="df-col-span-4">
            <DBox><p className="df-mb-0">.g-col-4</p></DBox>
          </div>
          <div className="df-col-span-4">
            <DBox><p className="df-mb-0">.g-col-4</p></DBox>
          </div>
          <div className="df-col-span-4">
            <DBox><p className="df-mb-0">.g-col-4</p></DBox>
          </div>
        </div>
      </div>

      <div>
        <p className="df-mb-2 df-fw-semibold">
          {'Responsive columns - '}
          <code>.g-col-12 .g-col-md-6 .g-col-lg-4</code>
        </p>
        <div className="df-grid df-grid-cols-12 df-gap-2">
          <div className="df-col-span-12 df-md:col-span-6 df-lg:col-span-4">
            <DBox><p className="df-mb-0">12 / md:6 / lg:4</p></DBox>
          </div>
          <div className="df-col-span-12 df-md:col-span-6 df-lg:col-span-4">
            <DBox><p className="df-mb-0">12 / md:6 / lg:4</p></DBox>
          </div>
          <div className="df-col-span-12 df-md:col-span-12 df-lg:col-span-4">
            <DBox><p className="df-mb-0">12 / md:12 / lg:4</p></DBox>
          </div>
        </div>
      </div>

      <div>
        <p className="df-mb-2 df-fw-semibold">
          {'Custom 5-column grid - '}
          <code>.df-grid-cols-5</code>
        </p>
        <div
          className="df-grid df-grid-cols-5 df-gap-2"
        >
          <div className="df-col-span-1">
            <DBox><p className="df-mb-0">1/5</p></DBox>
          </div>
          <div className="df-col-span-1">
            <DBox><p className="df-mb-0">2/5</p></DBox>
          </div>
          <div className="df-col-span-1">
            <DBox><p className="df-mb-0">3/5</p></DBox>
          </div>
          <div className="df-col-span-1">
            <DBox><p className="df-mb-0">4/5</p></DBox>
          </div>
          <div className="df-col-span-1">
            <DBox><p className="df-mb-0">5/5</p></DBox>
          </div>
        </div>
      </div>

      <div>
        <p className="df-mb-2 df-fw-semibold">
          {'Responsive gap - '}
          <code>.gap-1 .gap-md-2 .gap-lg-4</code>
        </p>
        <div className="df-grid df-grid-cols-12 df-gap-1 df-md:gap-2 df-lg:gap-4">
          <div className="df-col-span-12 df-md:col-span-6 df-lg:col-span-3">
            <DBox><p className="df-mb-0">Card 1</p></DBox>
          </div>
          <div className="df-col-span-12 df-md:col-span-6 df-lg:col-span-3">
            <DBox><p className="df-mb-0">Card 2</p></DBox>
          </div>
          <div className="df-col-span-12 df-md:col-span-6 df-lg:col-span-3">
            <DBox><p className="df-mb-0">Card 3</p></DBox>
          </div>
          <div className="df-col-span-12 df-md:col-span-6 df-lg:col-span-3">
            <DBox><p className="df-mb-0">Card 4</p></DBox>
          </div>
        </div>
      </div>
    </div>
  ),
};
