import { Meta, StoryObj } from '@storybook/react-vite';

import DTooltip from '../../src/components/DTooltip/DTooltip';

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

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/floating.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                                 | Type           | Description              |
|------------------------------------------|----------------|--------------------------|
| \`--df-floating-bg\`                     | css color      | Background               |
| \`--df-floating-fg\`                     | css color      | Foreground               |
| \`--df-floating-border-color\`           | css color      | Border color             |
| \`--df-floating-border-width\`           | css length     | Border width             |
| \`--df-floating-radius\`                 | css length     | Radius                   |
| \`--df-floating-shadow\`                 | css box-shadow | Shadow                   |
| \`--df-floating-padding-block\`          | css length     | Padding block            |
| \`--df-floating-padding-inline\`         | css length     | Padding inline           |
| \`--df-floating-min-width\`              | css length     | Min width                |
| \`--df-floating-z\`                      | number         | Z                        |
| \`--df-floating-item-padding-block\`     | css length     | Item padding block       |
| \`--df-floating-item-padding-inline\`    | css length     | Item padding inline      |
| \`--df-floating-item-gap\`               | css length     | Item gap                 |
| \`--df-floating-item-font-size\`         | css length     | Item font size           |
| \`--df-floating-item-fg\`                | css color      | Item foreground          |
| \`--df-floating-item-hover-bg\`          | css color      | Item hover background    |
| \`--df-floating-item-active-bg\`         | css color      | Item active background   |
| \`--df-floating-item-active-fg\`         | css color      | Item active foreground   |
| \`--df-floating-item-disabled-fg\`       | css color      | Item disabled foreground |
| \`--df-floating-divider-color\`          | css color      | Divider color            |
| \`--df-floating-divider-margin-block\`   | css length     | Divider margin block     |
| \`--df-floating-popover-padding\`        | css length     | Popover padding          |
| \`--df-floating-popover-z\`              | number         | Popover z                |
| \`--df-floating-tooltip-bg\`             | css color      | Tooltip background       |
| \`--df-floating-tooltip-fg\`             | css color      | Tooltip foreground       |
| \`--df-floating-tooltip-padding-block\`  | css length     | Tooltip padding block    |
| \`--df-floating-tooltip-padding-inline\` | css length     | Tooltip padding inline   |
| \`--df-floating-tooltip-font-size\`      | css length     | Tooltip font size        |
| \`--df-floating-tooltip-radius\`         | css length     | Tooltip radius           |
| \`--df-floating-tooltip-max-width\`      | css length     | Tooltip max width        |
| \`--df-floating-tooltip-z\`              | number         | Tooltip z                |

        `,
      },
    },
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'left', 'bottom', 'right'],
      defaultValue: 'bottom',
      table: { category: 'Appearance' },
    },
    withHover: {
      type: 'boolean',
      control: 'boolean',
      defaultValue: true,
      table: { category: 'Behavior' },
    },
    withClick: {
      type: 'boolean',
      control: 'boolean',
      defaultValue: false,
      table: { category: 'Behavior' },
    },
    open: {
      type: 'boolean',
      control: 'boolean',
      defaultValue: false,
      table: { category: 'Behavior' },
    },
    withFocus: {
      type: 'boolean',
      control: 'boolean',
      defaultValue: false,
      table: { category: 'Behavior' },
    },
    className: {
      type: 'string',
      control: 'text',
      table: { category: 'Appearance' },
    },
    childrenClassName: {
      type: 'string',
      control: 'text',
      table: { category: 'Appearance' },
    },
    Component: {
      defaultValue: 'Link',
      type: 'string',
      control: 'text',
      table: { category: 'Content' },
    },
    children: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    offSet: {
      type: 'number',
      table: { category: 'Appearance' },
    },
    padding: {
      type: 'number',
      table: { category: 'Appearance' },
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
  },
};
