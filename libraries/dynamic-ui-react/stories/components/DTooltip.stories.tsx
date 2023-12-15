import { Meta, StoryObj } from '@storybook/react';

import DTooltip from '../../src/components/DTooltip/DTooltip';
import { THEMES } from '../config/constants';

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
    className: {
      type: 'string',
      control: 'text',
    },
    childrenClassName: {
      type: 'string',
      control: 'text',
    },
    theme: {
      control: 'select',
      type: 'string',
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
      description: 'The theme to use.',
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
    open: true,
    theme: 'secondary',
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
    open: true,
    theme: 'secondary',
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
    open: true,
    theme: 'secondary',
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
    open: true,
    theme: 'secondary',
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
    open: true,
    size: 'sm',
    theme: 'secondary',
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
    open: true,
    size: 'sm',
    theme: 'secondary',
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
    open: true,
    size: 'sm',
    theme: 'secondary',
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
    open: true,
    size: 'sm',
    theme: 'secondary',
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
    open: true,
    size: 'lg',
    theme: 'secondary',
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
    open: true,
    size: 'lg',
    theme: 'secondary',
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
    open: true,
    size: 'lg',
    theme: 'secondary',
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
    open: true,
    size: 'lg',
    theme: 'secondary',
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
    open: true,
    size: 'lg',
    theme: 'secondary',
  },
};
