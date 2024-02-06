import { Meta, StoryObj } from '@storybook/react';

import DList from '../../src/components/DList/DList';
import DListItem from '../../src/components/DList/components/DListItem';

const config: Meta<typeof DList> = {
  title: 'Design System/Components/List',
  component: DList,
  parameters: {
    docs: {
      description: {
        component: `
List of elements

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap List Group](https://getbootstrap.com/docs/5.3/components/list-group/)
        `,
      },
    },
  },
  argTypes: {
    style: {
      type: 'string',
      control: 'text',
    },
    className: {
      type: 'string',
      control: 'text',
    },
    flush: {
      type: 'boolean',
      control: 'boolean',
    },
    horizontal: {
      type: 'boolean',
      control: 'boolean',
    },
    numbered: {
      type: 'boolean',
      control: 'boolean',
    },
    horizontalBreakpoint: {
      control: 'select',
      type: { name: 'string' },
      options: [undefined, 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
  },
  tags: ['autodocs'],
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
    flush: true,
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
    numbered: true,
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
    horizontal: true,
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
    horizontal: true,
    horizontalBreakpoint: 'md',
  },
  name: 'Horizontal with breakpoint',
};
