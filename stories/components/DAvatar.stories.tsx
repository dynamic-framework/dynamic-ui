import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';
import DAvatar from '../../src/components/DAvatar/DAvatar';
import { AVATAR_SIZE, COLOR_THEMES } from '../config/constants';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DAvatar> = {
  title: 'Design System/Components/Avatar',
  component: DAvatar,
  parameters: {
    docs: {
      description: {
        component: `
## CSS Variables
| Variable                               | Class   | Type            | Description             |
| -------------------------------------- | ------- | --------------- | ----------------------- |
| --${PREFIX_BS}avatar-border            | .avatar | css border      | Border box              |
| --${PREFIX_BS}avatar-size              | .avatar | css length unit | Size                    |
| --${PREFIX_BS}avatar-bg                | .avatar | css color unit  | Text background         |
| --${PREFIX_BS}avatar-color             | .avatar | css color unit  | Text color              |
| --${PREFIX_BS}avatar-font-weight       | .avatar | css font weight | Text font weight        |
| --${PREFIX_BS}avatar-border-radius     | .avatar | css length unit | Border radius           |
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
    },
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
    size: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...AVATAR_SIZE],
      description: 'Size',
    },
    image: {
      control: 'text',
      type: 'string',
      description: 'URL of the avatar image',
    },
    name: {
      control: 'text',
      type: 'string',
      description: 'The text to display',
    },
    useNameAsInitials: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      description: 'Take the name as name initials',
    },
    theme: {
      control: 'select',
      type: 'string',
      options: COLOR_THEMES,
      table: { defaultValue: { summary: 'secondary' } },
      description: 'Theme',
    },
    variant: {
      control: {
        type: 'radio',
        labels: {
          undefined: 'default',
        },
      },
      type: 'string',
      options: [undefined, 'light', 'dark'],
      description: 'Variant',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DAvatar>;

export const Default: Story = {
  args: {
    name: 'John Doe',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    name: 'AB',
    useNameAsInitials: true,
  },
};

export const Medium: Story = {
  args: {
    size: 'lg',
    name: 'AB',
    useNameAsInitials: true,
  },
};

export const Large: Story = {
  args: {
    size: 'xxl',
    name: 'AB',
    useNameAsInitials: true,
  },
};

export const Group: Story = {
  render: (args: ComponentProps<typeof DAvatar>) => (
    <div className="d-avatar-group">
      <DAvatar {...args} />
      <DAvatar {...args} />
      <DAvatar {...args} />
      <DAvatar {...args} />
    </div>
  ),
  args: {
    name: 'AB',
    useNameAsInitials: true,
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

export const Image: Story = {
  args: {
    image: 'https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png',
    name: 'John Doe',
  },
};
