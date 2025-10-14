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

export const Primary: Story = {
  args: {
    color: 'primary',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const Danger: Story = {
  args: {
    color: 'danger',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const Info: Story = {
  args: {
    color: 'info',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const Light: Story = {
  args: {
    color: 'light',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const Dark: Story = {
  args: {
    color: 'dark',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const PrimarySoft: Story = {
  args: {
    soft: true,
    color: 'primary',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const SecondarySoft: Story = {
  args: {
    soft: true,
    color: 'secondary',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const SuccessSoft: Story = {
  args: {
    soft: true,
    color: 'success',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const DangerSoft: Story = {
  args: {
    soft: true,
    color: 'danger',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const InfoSoft: Story = {
  args: {
    soft: true,
    color: 'info',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const WarningSoft: Story = {
  args: {
    soft: true,
    color: 'warning',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const LightSoft: Story = {
  args: {
    soft: true,
    color: 'light',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const DarkSoft: Story = {
  args: {
    soft: true,
    color: 'dark',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};
