import { Meta, StoryObj } from '@storybook/react';

import DList from './DList';
import DListItem from '../DListItem';

const config: Meta<typeof DList> = {
  title: 'Design System/Components/List',
  component: DList,
  argTypes: {
    className: {
      type: 'string',
      control: 'text',
    },
    isFlush: {
      type: 'boolean',
      control: 'boolean',
    },
    isHorizontal: {
      type: 'boolean',
      control: 'boolean',
    },
    isNumbered: {
      type: 'boolean',
      control: 'boolean',
    },
    horizontalBreakpoint: {
      control: 'select',
      type: { name: 'string' },
      options: [undefined, 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
  },
};

export default config;
type Story = StoryObj<typeof DList>;

export const Default: Story = {
  render: (args) => (
    <DList {...args}>
      {[1, 2, 3].map((item) => (
        <DListItem
          key={item}
          className="py-2 px-4"
        >
          Lorem ipsum dolor sit amet consectetur.
        </DListItem>
      ))}
    </DList>
  ),
};

export const Flush: Story = {
  render: (args) => (
    <DList {...args}>
      {[1, 2, 3].map((item) => (
        <DListItem
          key={item}
          className="py-2 px-4"
        >
          Lorem ipsum dolor sit amet consectetur.
        </DListItem>
      ))}
    </DList>
  ),
  args: {
    isFlush: true,
  },
};

export const Numbered: Story = {
  render: (args) => (
    <DList {...args}>
      {[1, 2, 3].map((item) => (
        <DListItem
          key={item}
          className="py-2 px-4"
        >
          Lorem ipsum dolor sit amet consectetur.
        </DListItem>
      ))}
    </DList>
  ),
  args: {
    isNumbered: true,
  },
};

export const Horizontal: Story = {
  render: (args) => (
    <DList {...args}>
      {[1, 2, 3].map((item) => (
        <DListItem
          key={item}
          className="py-2 px-4"
        >
          Lorem ipsum dolor sit amet consectetur.
        </DListItem>
      ))}
    </DList>
  ),
  args: {
    isHorizontal: true,
  },
};

export const HorizontalWithBreakpoint: Story = {
  decorators: [
    (Story) => (
      <div className="position-relative d-flex flex-column gap-3">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DList {...args}>
      {[1, 2, 3].map((item) => (
        <DListItem
          key={item}
          className="py-2 px-4"
        >
          Lorem ipsum dolor sit amet consectetur.
        </DListItem>
      ))}
    </DList>
  ),
  args: {
    isHorizontal: true,
    horizontalBreakpoint: 'md',
  },
  name: 'Horizontal with breakpoint',
};
