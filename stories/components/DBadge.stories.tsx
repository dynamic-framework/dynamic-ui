import { Meta, StoryObj } from '@storybook/react-vite';

import { PREFIX_BS } from '../../src/components/config';
import DBadge from '../../src/components/DBadge/DBadge';
import { ICONS, THEMES } from '../config/constants';

const config: Meta<typeof DBadge> = {
  title: 'Design System/Components/Badge',
  component: DBadge,
  parameters: {
    docs: {
      description: {
        component: `
Wrapper around Bootstrap Badge.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Badge](https://getbootstrap.com/docs/5.3/components/badge/)

## CSS Variables

The Bootstrap documentation provides details on the default [Badge CSS Variables](https://getbootstrap.com/docs/5.3/components/badge/#css)

| Variable                                  | Class            | Type             | Description              |
|-------------------------------------------|------------------|------------------|--------------------------|
| --${PREFIX_BS}badge-bg                    | .badge           | css color unit   | Background color         |
| --${PREFIX_BS}badge-gap                   | .badge           | css length unit  | Spacing between elements |
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
    className: {
      control: 'text',
      type: 'string',
    },
    text: {
      control: 'text',
      type: 'string',
      description: 'Text of badge',
    },
    color: {
      control: 'select',
      type: 'string',
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
      description: 'The color to use.',
    },
    soft: {
      control: 'boolean',
      type: 'boolean',
    },
    rounded: {
      control: 'boolean',
      type: 'boolean',
    },
    iconStart: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    iconEnd: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
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
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {THEMES.map((theme) => (
        <DBadge key={theme} color={theme} text={theme} />
      ))}
    </div>
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
    iconStart: 'bookmarks',
  },
};

export const WithIconEnd: Story = {
  args: {
    color: 'success',
    text: 'Check',
    iconEnd: 'check-circle',
  },
};

export const WithBothIcons: Story = {
  args: {
    color: 'info',
    text: 'Notifications',
    iconStart: 'bell',
    iconEnd: 'chevron-right',
  },
};

export const IconVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <DBadge color="primary" text="Icon Start" iconStart="star-fill" />
        <DBadge color="success" text="Icon End" iconEnd="check-circle" />
        <DBadge color="warning" text="Both Icons" iconStart="exclamation-triangle" iconEnd="arrow-right" />
      </div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <DBadge color="danger" text="Alert" iconStart="x-circle" soft />
        <DBadge color="info" text="Info" iconEnd="info-circle" soft />
        <DBadge color="secondary" text="Tags" iconStart="tag" iconEnd="tag" soft />
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
      <DBadge color="success" text="With Icon" iconStart="check" rounded />
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
