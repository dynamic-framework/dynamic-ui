import { Meta, StoryObj } from '@storybook/react-vite';

import { PREFIX_BS } from '../../src/components/config';
import DTooltip from '../../src/components/DTooltip/DTooltip';
import { THEMES } from '../config/constants';

const config: Meta<typeof DTooltip> = {
  title: 'Design System/Components/Tooltip',
  component: DTooltip,
  parameters: {
    docs: {
      description: {
        component: `
![Shield Badge](https://img.shields.io/badge/Abstraction%20Component-4848b7)

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Floating UI](https://floating-ui.com/docs/react)

## CSS Variables
The Bootstrap documentation provides details on the default [Tooltip CSS Variables](https://getbootstrap.com/docs/5.3/components/tooltips/#css)

| Variable                           | Class    | Type            | Description                  |
|------------------------------------|----------|-----------------|------------------------------|
| --${PREFIX_BS}tooltip-sm-font-size | .tooltip | css length unit | Small tooltip text font size |
| --${PREFIX_BS}tooltip-lg-font-size | .tooltip | css length unit | Small tooltip text font size |
        `,
      },
    },
  },
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
    open: {
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
    color: {
      control: 'select',
      type: 'string',
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
      description: 'The color to use.',
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
  tags: ['autodocs'],
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
    color: 'dark',
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
    open: false,
    color: 'secondary',
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
    open: false,
    color: 'secondary',
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
    open: false,
    color: 'secondary',
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
    open: false,
    size: 'sm',
    color: 'secondary',
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
    open: false,
    size: 'sm',
    color: 'secondary',
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
    open: false,
    size: 'sm',
    color: 'secondary',
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
    open: false,
    size: 'sm',
    color: 'secondary',
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
    open: false,
    size: 'lg',
    color: 'secondary',
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
    open: false,
    size: 'lg',
    color: 'secondary',
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
    open: false,
    size: 'lg',
    color: 'secondary',
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
    open: false,
    size: 'lg',
    color: 'secondary',
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
    open: false,
    size: 'lg',
    color: 'secondary',
  },
};
