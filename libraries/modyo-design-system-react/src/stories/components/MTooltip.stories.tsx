import { Meta, StoryObj } from '@storybook/react';

import { MTooltip } from '../../components';

const config: Meta<typeof MTooltip> = {
  title: 'Design System/Components/Tooltip',
  component: MTooltip,
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'left', 'bottom', 'right'],
      defaultValue: 'bottom',
    },
    withHover: {
      type: 'boolean',
      control: 'boolean',
      defaultValue: true,
    },
    withClick: {
      type: 'boolean',
      control: 'boolean',
      defaultValue: false,
    },
    withFocus: {
      type: 'boolean',
      control: 'boolean',
      defaultValue: false,
    },
    classNameContainer: {
      type: 'string',
      control: 'text',
    },
    className: {
      type: 'string',
      control: 'text',
    },
    Component: {
      defaultValue: 'Link',
      type: 'string',
      control: 'text',
    },
    children: {
      control: 'text',
      type: 'string',
    },
    offSet: {
      type: 'number',
    },
    padding: {
      type: 'number',
    },
  },
};

export default config;
type Story = StoryObj<typeof MTooltip>;

export const Top: Story = {
  args: {
    placement: 'top',
    Component: 'Lorem Ipsum',
    children: 'text',
    withHover: true,
    withClick: false,
    withFocus: false,
    isOpen: true,
  },
};

export const Right: Story = {
  args: {
    placement: 'right',
    Component: 'Lorem Ipsum',
    children: 'text',
    withHover: true,
    withClick: false,
    withFocus: false,
    isOpen: true,
  },
};

export const Bottom: Story = {
  args: {
    placement: 'bottom',
    Component: 'Lorem Ipsum',
    children: 'text',
    withHover: true,
    withClick: false,
    withFocus: false,
    isOpen: true,
  },
};

export const Left: Story = {
  args: {
    placement: 'left',
    Component: 'Lorem Ipsum',
    children: 'text',
    withHover: true,
    withClick: false,
    withFocus: false,
    isOpen: true,
  },
};

export const SmallTop: Story = {
  args: {
    placement: 'top',
    Component: 'Lorem Ipsum',
    children: 'text',
    withHover: true,
    withClick: false,
    withFocus: false,
    isOpen: true,
    size: 'sm',
  },
};

export const SmallRight: Story = {
  args: {
    placement: 'right',
    Component: 'Lorem Ipsum',
    children: 'text',
    withHover: true,
    withClick: false,
    withFocus: false,
    isOpen: true,
    size: 'sm',
  },
};

export const SmallBottom: Story = {
  args: {
    placement: 'bottom',
    Component: 'Lorem Ipsum',
    children: 'text',
    withHover: true,
    withClick: false,
    withFocus: false,
    isOpen: true,
    size: 'sm',
  },
};

export const SmallLeft: Story = {
  args: {
    placement: 'left',
    Component: 'Lorem Ipsum',
    children: 'text',
    withHover: true,
    withClick: false,
    withFocus: false,
    isOpen: true,
    size: 'sm',
  },
};

export const LargeTop: Story = {
  args: {
    placement: 'top',
    Component: 'Lorem Ipsum',
    children: 'text',
    withHover: true,
    withClick: false,
    withFocus: false,
    isOpen: true,
    size: 'lg',
  },
};

export const LargeRight: Story = {
  args: {
    placement: 'right',
    Component: 'Lorem Ipsum',
    children: 'text',
    withHover: true,
    withClick: false,
    withFocus: false,
    isOpen: true,
    size: 'lg',
  },
};

export const LargeBottom: Story = {
  args: {
    placement: 'bottom',
    Component: 'Lorem Ipsum',
    children: 'text',
    withHover: true,
    withClick: false,
    withFocus: false,
    isOpen: true,
    size: 'lg',
  },
};

export const LargeLeft: Story = {
  args: {
    placement: 'left',
    Component: 'Lorem Ipsum',
    children: 'text',
    withHover: true,
    withClick: false,
    withFocus: false,
    isOpen: true,
    size: 'lg',
  },
};
