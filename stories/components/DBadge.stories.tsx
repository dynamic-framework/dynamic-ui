import { Meta, StoryObj } from '@storybook/react-vite';

import DBadge from '../../src/components/DBadge/DBadge';
import { ICONS, THEMES } from '../config/constants';
import {
  DContextProvider,
} from '../../src';

const config: Meta<typeof DBadge> = {
  title: 'Design System/Components/Badge',
  component: DBadge,
  parameters: {
    docs: {
      description: {
        component: `
Wrapper around Bootstrap Badge.

## CSS Variables

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/badge.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                         | Type        | Description       |
|----------------------------------|-------------|-------------------|
| \`--df-badge-padding-block\`     | css length  | Padding block     |
| \`--df-badge-padding-inline\`    | css length  | Padding inline    |
| \`--df-badge-gap\`               | css length  | Gap               |
| \`--df-badge-font-size\`         | css length  | Font size         |
| \`--df-badge-font-weight\`       | font weight | Font weight       |
| \`--df-badge-line-height\`       | number      | Line height       |
| \`--df-badge-radius\`            | css length  | Radius            |
| \`--df-badge-border-width\`      | css length  | Border width      |
| \`--df-badge-sm-padding-block\`  | css length  | Sm padding block  |
| \`--df-badge-sm-padding-inline\` | css length  | Sm padding inline |
| \`--df-badge-sm-font-size\`      | css length  | Sm font size      |
| \`--df-badge-lg-padding-block\`  | css length  | Lg padding block  |
| \`--df-badge-lg-padding-inline\` | css length  | Lg padding inline |
| \`--df-badge-lg-font-size\`      | css length  | Lg font size      |

        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: [undefined, 'sm', 'md', 'lg'],
      table: { category: 'Appearance' },
      description: 'Badge size',
    },

    id: {
      control: 'text',
      type: 'string',
      table: { category: 'HTML Attributes' },
    },
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
    className: {
      control: 'text',
      type: 'string',
      table: { category: 'Appearance' },
    },
    text: {
      control: 'text',
      type: 'string',
      description: 'Text of badge',
      table: { category: 'Content' },
    },
    color: {
      control: 'select',
      type: 'string',
      options: THEMES,
      table: {
        defaultValue: { summary: 'primary' },
        category: 'Appearance',
      },
      description: 'The color to use.',
    },
    soft: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Appearance' },
    },
    rounded: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Appearance' },
    },
    iconStart: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
      table: { category: 'Icon' },
    },
    iconEnd: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
      table: { category: 'Icon' },
    },
    iconMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Icon' },
    },
    iconFamilyClass: {
      control: 'text',
      type: 'string',
      table: { category: 'Icon' },
    },
    iconFamilyPrefix: {
      control: 'text',
      type: 'string',
      table: { category: 'Icon' },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DBadge>;

export const Default: Story = {
  args: {
    color: 'primary',
    text: 'Badge',
    soft: false,
    iconEnd: undefined,
    iconStart: undefined,
    rounded: false,
  },
};

export const ResponsiveSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <DBadge text="XS:sm MD:lg" size={{ xs: 'sm', md: 'lg' }} color="info" />
      <DBadge text="SM:sm LG:lg" size={{ sm: 'sm', lg: 'lg' }} color="success" />
      <DBadge text="XS:sm XL:lg" size={{ xs: 'sm', xl: 'lg' }} color="danger" />
      <DBadge text="XS:sm SM:md LG:lg" size={{ xs: 'sm', sm: 'md', lg: 'lg' }} color="primary" />
      <DBadge text="Only LG" size="lg" color="secondary" />
      <DBadge text="ResponsiveObj" size={{ xs: 'sm', md: 'md', xl: 'lg' }} color="warning" />
    </div>
  ),
  decorators: (Story) => (
    <DContextProvider>
      <Story />
    </DContextProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive usage examples: now the size prop accepts a ResponsiveProp object. Try resizing the window.',
      },
    },
  },
};

export const AllColors: Story = {
  render: () => (
    <>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {THEMES.filter((theme) => theme !== 'light').map((theme) => (
          <DBadge key={theme} color={theme} text={theme} />
        ))}
      </div>
      <div className="df-mt-4">
        <p className="df-mb-1 df-mt-8 df-fs-body-sm">Light variant (for dark backgrounds)</p>
        <div className="df-p-4 df-rounded-control" style={{ background: 'var(--df-role-primary-base-active, #1a237e)' }}>
          <DBadge color="light" text="Light" />
        </div>
      </div>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available color variants for badges.',
      },
    },
  },
};

export const SoftColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {THEMES.map((theme) => (
        <DBadge key={theme} color={theme} text={theme} soft />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All color variants with soft (subtle) styling.',
      },
    },
  },
};

export const WithIconStart: Story = {
  args: {
    color: 'primary',
    text: 'Bookmarks',
    iconStart: 'Bookmark',
  },
};

export const WithIconEnd: Story = {
  args: {
    color: 'success',
    text: 'Check',
    iconEnd: 'CheckCircle',
  },
};

export const WithBothIcons: Story = {
  args: {
    color: 'info',
    text: 'Notifications',
    iconStart: 'Bell',
    iconEnd: 'ChevronRight',
  },
};

export const IconVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <DBadge color="primary" text="Icon Start" iconStart="Star" />
        <DBadge color="success" text="Icon End" iconEnd="CheckCircle" />
        <DBadge color="warning" text="Both Icons" iconStart="AlertTriangle" iconEnd="ArrowRight" />
      </div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <DBadge color="danger" text="Alert" iconStart="XCircle" soft />
        <DBadge color="info" text="Info" iconEnd="Info" soft />
        <DBadge color="secondary" text="Tags" iconStart="Tag" iconEnd="Tag" soft />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of badges with different icon configurations.',
      },
    },
  },
};

export const Rounded: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <DBadge color="primary" text="Rounded" rounded />
      <DBadge color="success" text="With Icon" iconStart="Check" rounded />
      <DBadge color="danger" text="Soft Rounded" soft rounded />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges with rounded styling (pill shape).',
      },
    },
  },
};
