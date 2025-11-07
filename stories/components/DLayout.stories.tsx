import { Meta, StoryObj } from '@storybook/react-vite';

import DLayout from '../../src/components/DLayout/DLayout';
import { DBox } from '../../src';

const config: Meta<typeof DLayout> = {
  title: 'Design System/Components/Layout',
  component: DLayout,
  argTypes: {
    gap: {
      control: {
        type: 'select',
      },
      options: [0, 1, 2, 3, 4, 5],
      description: 'Gap spacing between columns (all breakpoints)',
    },
    gapSm: {
      control: {
        type: 'select',
      },
      options: [0, 1, 2, 3, 4, 5],
      description: 'Gap spacing for small screens (≥576px)',
    },
    gapMd: {
      control: {
        type: 'select',
      },
      options: [0, 1, 2, 3, 4, 5],
      description: 'Gap spacing for medium screens (≥768px)',
    },
    gapLg: {
      control: {
        type: 'select',
      },
      options: [0, 1, 2, 3, 4, 5],
      description: 'Gap spacing for large screens (≥992px)',
    },
    gapXl: {
      control: {
        type: 'select',
      },
      options: [0, 1, 2, 3, 4, 5],
      description: 'Gap spacing for extra large screens (≥1200px)',
    },
    gapXxl: {
      control: {
        type: 'select',
      },
      options: [0, 1, 2, 3, 4, 5],
      description: 'Gap spacing for extra extra large screens (≥1400px)',
    },
    columns: {
      control: {
        type: 'number',
      },
      description: 'Number of columns in the grid (default: 12). Use this to create custom column divisions like 5, 7, or 10 columns.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
        DLayout is a grid-based layout component that uses Bootstrap's CSS Grid system to create responsive column layouts.
        
        ### Key Features:

        - **Grid-Based:** Uses Bootstrap's <code>.grid</code> class for flexible layouts.
        - **Column System:** Leverages <code>.g-col-##</code> classes for defining column widths (1-12 by default).
        - **Custom Columns:** Use the <code>columns</code> prop to configure any number of columns (e.g., 5, 7, 10) via CSS variable <code>--bs-columns</code>.
        - **Gap Control:** Supports <code>gap</code> property for controlling spacing between columns using Bootstrap's gap utilities (0-5).
        - **Responsive Gap:** Supports responsive gap properties: <code>gapSm</code>, <code>gapMd</code>, <code>gapLg</code>, <code>gapXl</code>, <code>gapXxl</code>.
        - **Pane Component:** Includes <code>DLayout.Pane</code> sub-component for individual columns.
        - **Responsive:** Built on Bootstrap's grid system for responsive designs.

        ### When to Use:

        - When you need to create multi-column layouts.
        - To organize content in a grid-based structure.
        - For responsive page layouts using Bootstrap's grid utilities.
        - When you need custom column divisions (e.g., 5 equal columns instead of 12).
        
        ### Usage:

        <DLayout gap={3}>
          <DLayout.Pane cols="4">Sidebar</DLayout.Pane>
          <DLayout.Pane cols="8">Main Content</DLayout.Pane>
        </DLayout>

        ### Custom Columns Usage:

        <DLayout columns={5} gap={2}>
          <DLayout.Pane cols="1">Column 1</DLayout.Pane>
          <DLayout.Pane cols="1">Column 2</DLayout.Pane>
          <DLayout.Pane cols="1">Column 3</DLayout.Pane>
          <DLayout.Pane cols="1">Column 4</DLayout.Pane>
          <DLayout.Pane cols="1">Column 5</DLayout.Pane>
        </DLayout>

        ### Responsive Usage:

        <DLayout gap={1} gapMd={2} gapLg={4}>
          <DLayout.Pane cols="12" colsMd="6" colsLg="4">Responsive Column</DLayout.Pane>
        </DLayout>

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
