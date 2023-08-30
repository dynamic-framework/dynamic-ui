import { Meta, StoryObj } from '@storybook/react';

import { DTooltip } from '../../components';

const config: Meta<typeof DTooltip> = {
  title: 'Design System/Components/Tooltip',
  component: DTooltip,
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
type Story = StoryObj<typeof DTooltip>;

export const Top: Story = {
  args: {
    placement: 'top',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    isOpen: true,
  },
};

export const Right: Story = {
  args: {
    placement: 'right',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    isOpen: true,
  },
};

export const Bottom: Story = {
  args: {
    placement: 'bottom',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    isOpen: true,
  },
};

export const Left: Story = {
  args: {
    placement: 'left',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    isOpen: true,
  },
};

export const SmallTop: Story = {
  args: {
    placement: 'top',
    Component: 'Text',
    children: 'Lorem Ipsum',
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
    Component: 'Text',
    children: 'Lorem Ipsum',
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
    Component: 'Text',
    children: 'Lorem Ipsum',
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
    Component: 'Text',
    children: 'Lorem Ipsum',
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
    Component: 'Text',
    children: 'Lorem Ipsum',
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
    Component: 'Text',
    children: 'Lorem Ipsum',
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
    Component: 'Text',
    children: 'Lorem Ipsum',
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
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    isOpen: true,
    size: 'lg',
  },
};

export const LargeText: Story = {
  args: {
    placement: 'left',
    Component: 'Text',
    children: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
    withHover: true,
    withClick: false,
    withFocus: false,
    isOpen: true,
    size: 'lg',
  },
};
