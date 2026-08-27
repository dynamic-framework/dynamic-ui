import { Meta, StoryObj } from '@storybook/react-vite';

import { PREFIX_BS } from '../../src/components/config';
import { DButton, DTooltip } from '../../src';

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
    size: {
      control: 'select',
      options: [undefined, 'sm', 'lg'],
      table: { category: 'Appearance' },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DTooltip>;

export const Default: Story = {
  args: {
    placement: 'top',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: false,
    open: true,
    childrenClassName: '',
    className: '',
    dataAttributes: {},
    offSet: 10,
    padding: 10,
    size: undefined,
    style: { maxWidth: '200px' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Base case: hover-triggered tooltip positioned above its trigger. Use this as the starting point for most tooltips, then explore the `placement` and `size` controls to adapt it to your layout.',
      },
    },
  },
};

export const ClickTriggered: Story = {
  args: {
    placement: 'top',
    Component: 'Text',
    children: 'Lorem Ipsum',
    withHover: false,
    withClick: true,
    withFocus: false,
    open: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Opens and closes on click instead of hover (`withClick`). Use this for touch-friendly UIs or when the tooltip content itself needs to remain visible while the user interacts with the page.',
      },
    },
  },
};

export const FocusAccessible: Story = {
  args: {
    placement: 'top',
    // `withFocus` only works when the trigger is a real focusable element
    // (link, button, input...), not plain text without a tabIndex.
    Component: <DButton type="button">Focus me</DButton>,
    children: 'Lorem Ipsum',
    withHover: true,
    withClick: false,
    withFocus: true,
    open: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Also opens when the trigger receives keyboard focus (`withFocus`). Enable this whenever the trigger is a focusable element (link, button, input) so the tooltip is accessible without a mouse. Press Tab in the canvas to focus the button and see it appear.',
      },
    },
  },
};

export const LongContent: Story = {
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
  parameters: {
    docs: {
      description: {
        story: 'Verifies the tooltip wraps and resizes correctly with long content, staying readable and properly positioned instead of overflowing the viewport.',
      },
    },
  },
};
