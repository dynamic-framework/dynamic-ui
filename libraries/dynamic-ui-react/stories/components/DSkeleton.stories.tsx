import { Meta, StoryObj } from '@storybook/react';

import DSkeleton from '../../src/components/DSkeleton/DSkeleton';

const config: Meta<typeof DSkeleton> = {
  title: 'Design System/Components/Skeleton',
  component: DSkeleton,
  parameters: {
    docs: {
      description: {
        component: `
Component to build placeholder experiences.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [React Content Loader](https://github.com/danilowoz/react-content-loader)
+ [Skeleton React](https://skeletonreact.com/)
        `,
      },
    },
  },
  argTypes: {
    speed: {
      control: 'number',
      type: 'number',
    },
    viewBox: {
      control: 'text',
      type: 'string',
    },
    backgroundColor: {
      control: 'color',
      type: 'string',
    },
    foregroundColor: {
      control: 'color',
      type: 'string',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DSkeleton>;

export const Default: Story = {
  render: (args) => (
    <DSkeleton {...args}>
      <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
      <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <circle cx="20" cy="20" r="20" />
    </DSkeleton>
  ),

  args: {},
};
