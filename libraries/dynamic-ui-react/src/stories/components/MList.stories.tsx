import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { MList, MListItem } from '../../components';

const config: Meta<typeof MList> = {
  title: 'Design System/Alpha/Patterns/List',
  component: MList,
  argTypes: {
    className: {
      type: 'string',
    },
    isFlush: {
      type: 'boolean',
    },
    isHorizontal: {
      type: 'boolean',
    },
    isNumbered: {
      type: 'boolean',
    },
    horizontalBreakpoint: {
      control: 'select',
      type: { name: 'string' },
      options: [undefined, 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
  },
};

export default config;
type Story = StoryObj<typeof MList>;

const MListExample = (args: ComponentProps<typeof MList>) => (
  <MList {...args}>
    {[1, 2, 3].map((item) => (
      <MListItem
        key={item}
        className="py-2 px-4"
      >
        Lorem ipsum dolor sit amet consectetur.
      </MListItem>
    ))}
  </MList>
);

export const Default: Story = {
  render: (args) => (
    <MListExample {...args} />
  ),
  args: {},
};

export const Flush: Story = {
  render: (args) => (
    <MListExample {...args} />
  ),
  args: {
    isFlush: true,
  },
};

export const Numbered: Story = {
  render: (args) => (
    <MListExample {...args} />
  ),
  args: {
    isNumbered: true,
  },
};

export const Horizontal: Story = {
  render: (args) => (
    <MListExample {...args} />
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
    <>
      <MListExample {...args} />
      <small className="mt-5 text-warning">**Resize the width container to view changes</small>
    </>
  ),
  args: {
    isHorizontal: true,
    horizontalBreakpoint: 'md',
  },
  name: 'Horizontal with breakpoint',
};
