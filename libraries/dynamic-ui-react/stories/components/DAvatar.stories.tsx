import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';
import DAvatar from '../../src/components/DAvatar/DAvatar';
import { AVATAR_SIZE } from '../config/constants';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DAvatar> = {
  title: 'Design System/Components/Avatar',
  component: DAvatar,
  parameters: {
    docs: {
      description: {
        component: `
## CSS Variables
| Variable                         | Class   | Type            | Description             |
| -------------------------------- | ------- | --------------- | ----------------------- |
| --${PREFIX_BS}avatar-size        | .avatar | css length unit | Content separation      |
| --${PREFIX_BS}avatar-title-bg    | .avatar | css color unit  | Toast box shadow        |
| --${PREFIX_BS}avatar-title-color | .avatar | css color unit  | Toast icon color        |
| --${PREFIX_BS}avatar-radius      | .avatar | css length unit | Toast separator opacity |
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
      control: 'select',
      type: 'string',
      options: AVATAR_SIZE,
      description: 'Avatar size',
    },
    image: {
      control: 'text',
      type: 'string',
      description: 'URL of the avatar image',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DAvatar>;

export const Default: Story = {
  args: {
    image: 'https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    image: 'https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png',
  },
};

export const Medium: Story = {
  args: {
    size: 'lg',
    image: 'https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png',
  },
};

export const Large: Story = {
  args: {
    size: 'xxl',
    image: 'https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png',
  },
};

export const Group: Story = {
  render: (args: ComponentProps<typeof DAvatar>) => (
    <div className="avatar-group">
      <DAvatar {...args} />
      <DAvatar {...args} />
      <DAvatar {...args} />
      <DAvatar {...args} />
    </div>
  ),
  args: {
    image: 'https://cdn.modyo.cloud/uploads/03a6970d-e917-4597-8c9f-bae052a214ab/original/Avatars_1_.png',
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

export const Title: Story = {
  args: {
    title: 'AB',
  },
};
