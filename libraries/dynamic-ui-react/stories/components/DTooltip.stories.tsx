import { Meta, StoryObj } from '@storybook/react';

import DTooltip from '../../src/components/DTooltip/DTooltip';
import { THEMES } from '../config/constants';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DTooltip> = {
  title: 'Design System/Components/Tooltip',
  component: DTooltip,
  parameters: {
    docs: {
      description: {
        component: `
To understand in more detail the aspects covered by this component, review the following documentation:

+ [Floating UI](https://floating-ui.com/docs/react)

## CSS Variables
| Variable                                   | Type             | Description                   |
|--------------------------------------------|------------------|-------------------------------|
| --${PREFIX_BS}tooltip-bg               | css color unit   | Background and arrow color    |
| --${PREFIX_BS}tooltip-border-radius    | css length unit  | Border radius                 |
| --${PREFIX_BS}tooltip-color            | css color unit   | Text color                    |
| --${PREFIX_BS}tooltip-font-size        | css length unit  | Text font size                |
| --${PREFIX_BS}tooltip-sm-font-size     | css length unit  | Small tooltip text font size  |
| --${PREFIX_BS}tooltip-lg-font-size     | css length unit  | Small tooltip text font size  |
| --${PREFIX_BS}tooltip-padding          | css length unit  | Padding                       |
| --${PREFIX_BS}tooltip-max-width        | css length unit  | Max width                     |
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
    open: false,
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
    open: false,
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
    open: false,
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
    open: false,
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
    open: false,
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
    open: false,
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
    open: false,
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
    open: false,
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
    open: false,
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
    open: false,
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
    open: false,
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
    open: false,
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
    open: false,
    size: 'lg',
    theme: 'secondary',
  },
};
