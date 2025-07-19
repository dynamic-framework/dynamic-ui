import { Meta, StoryObj } from '@storybook/react-vite';

import DBadge from '../../src/components/DBadge/DBadge';
import { ICONS, THEMES } from '../config/constants';
import { PREFIX_BS } from '../../src/components/config';

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
    theme: {
      control: 'select',
      type: 'string',
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
      description: 'The theme to use.',
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
    theme: 'primary',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const Secondary: Story = {
  args: {
    theme: 'secondary',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const Success: Story = {
  args: {
    theme: 'success',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const Danger: Story = {
  args: {
    theme: 'danger',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const Info: Story = {
  args: {
    theme: 'info',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const Warning: Story = {
  args: {
    theme: 'warning',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const Light: Story = {
  args: {
    theme: 'light',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const Dark: Story = {
  args: {
    theme: 'dark',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const PrimarySoft: Story = {
  args: {
    soft: true,
    theme: 'primary',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const SecondarySoft: Story = {
  args: {
    soft: true,
    theme: 'secondary',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const SuccessSoft: Story = {
  args: {
    soft: true,
    theme: 'success',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const DangerSoft: Story = {
  args: {
    soft: true,
    theme: 'danger',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const InfoSoft: Story = {
  args: {
    soft: true,
    theme: 'info',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const WarningSoft: Story = {
  args: {
    soft: true,
    theme: 'warning',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const LightSoft: Story = {
  args: {
    soft: true,
    theme: 'light',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};

export const DarkSoft: Story = {
  args: {
    soft: true,
    theme: 'dark',
    text: 'Default',
    iconStart: 'bookmarks',
    iconEnd: 'bookmarks',
  },
};
