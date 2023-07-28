import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { MList, MListItem } from '../../components';
import MListItemMovement from '../../components/MListItemMovement';

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

const MListExampleMovements = (args: ComponentProps<typeof MList>) => (
  <MList {...args}>
    {[1, 2, 3, 4, 5].map((item) => (
      <MListItemMovement
        key={item}
        line1={`Credit Card ${item}`}
        line2="22/05/23"
        line3={item % 2 === 1 ? 5000 : -5000}
      >
        Lorem ipsum dolor sit amet consectetur.
      </MListItemMovement>
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
      <span className="fs-5">Breakpoint on MD</span>
      <MListExample {...args} />
      <small className="mt-5 text-warning">**Resize the width container to view changes</small>
    </>
  ),
  args: {
    isHorizontal: true,
    horizontalBreakpoint: 'md',
  },
  storyName: 'Horizontal with breakpoint',
};

export const CustomList: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: 'calc(300px - 1rem)' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <MListExampleMovements {...args} />
  ),
  args: {
    isFlush: true,
  },
  name: 'Custom list - Movements',
};
