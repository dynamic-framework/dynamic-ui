import { Meta, StoryObj } from '@storybook/react';

import DBadge from '../../src/components/DBadge/DBadge';
import { THEMES } from '../config/constants';
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
| Variable                              | Type            | Description                   |
|---------------------------------------|-----------------|-------------------------------|
| --${PREFIX_BS}badge-bg                | css color unit  | Background color              |
| --${PREFIX_BS}badge-dot-height        | css length unit | Dot height                    |

+ [Bootstrap css variables](https://getbootstrap.com/docs/5.3/components/badge/#css)
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
    dot: {
      control: 'boolean',
      type: 'boolean',
      description: 'Enable dot mode',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DBadge>;

export const Default: Story = {
  args: {
    theme: 'primary',
    text: 'Default',
  },
};

export const Dot: Story = {
  args: {
    theme: 'primary',
    text: '+2',
    dot: true,
  },
};

export const Empty: Story = {
  args: {
    theme: 'primary',
    text: undefined,
    dot: true,
  },
};
