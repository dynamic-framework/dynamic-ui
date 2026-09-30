import { Meta, StoryObj } from '@storybook/react-vite';

import type { ComponentProps } from 'react';
import DAvatar from '../../src/components/DAvatar/DAvatar';
import { AVATAR_SIZE } from '../config/constants';

const config: Meta<typeof DAvatar> = {
  title: 'Design System/Components/Avatar',
  component: DAvatar,
  parameters: {
    docs: {
      description: {
        component: `
## CSS Variables

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/avatar.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                     | Type        | Description  |
|------------------------------|-------------|--------------|
| \`--df-avatar-size\`         | css length  | Size         |
| \`--df-avatar-size-xs\`      | css length  | Size xs      |
| \`--df-avatar-size-sm\`      | css length  | Size sm      |
| \`--df-avatar-size-lg\`      | css length  | Size lg      |
| \`--df-avatar-size-xl\`      | css length  | Size xl      |
| \`--df-avatar-size-xxl\`     | css length  | Size xxl     |
| \`--df-avatar-radius\`       | css length  | Radius       |
| \`--df-avatar-border-width\` | css length  | Border width |
| \`--df-avatar-bg\`           | css color   | Background   |
| \`--df-avatar-fg\`           | css color   | Foreground   |
| \`--df-avatar-border-color\` | css color   | Border color |
| \`--df-avatar-font-weight\`  | font weight | Font weight  |

        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
      table: { category: 'HTML Attributes' },
    },
    className: {
      control: 'text',
      type: 'string',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      table: { category: 'Appearance' },
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
      table: { category: 'Appearance' },
    },
    image: {
      control: 'text',
      type: 'string',
      description: 'URL of the avatar image',
      table: { category: 'Content' },
    },
    name: {
      control: 'text',
      type: 'string',
      description: 'The text to display',
      table: { category: 'Content' },
    },
    useNameAsInitials: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
      description: 'Take the name as name initials',
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
    <div className="df-avatar-group">
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
