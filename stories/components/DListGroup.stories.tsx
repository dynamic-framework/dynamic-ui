import { Meta, StoryObj } from '@storybook/react-vite';

import DListGroup, { DListGroupItem } from '../../src/components/DListGroup';

const config: Meta<typeof DListGroup> = {
  title: 'Design System/Components/ListGroup',
  component: DListGroup,
  subcomponents: { DListGroupItem },
  parameters: {
    docs: {
      description: {
        component: `
![Shield Badge](https://img.shields.io/badge/Beta%20Component-d81b60)

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap List Group](https://getbootstrap.com/docs/5.3/components/list-group/)

## CSS Variables

The Bootstrap documentation provides details on the default [List Group CSS Variables](https://getbootstrap.com/docs/5.3/components/list-group/#css)

        `,
      },
    },
  },
  argTypes: {
    style: {
      control: 'object',
    },
    className: {
      type: 'string',
      control: 'text',
    },
    flush: {
      type: 'boolean',
      control: 'boolean',
    },
    numbered: {
      type: 'boolean',
      control: 'boolean',
    },
    horizontal: {
      control: 'select',
      type: { name: 'string' },
      options: [undefined, true, 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DListGroup>;

export const Default: Story = {
  render: (args) => (
    <DListGroup {...args}>
      {[1, 2, 3].map((item) => (
        <DListGroup.Item
          key={item}
        >
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>
      ))}
    </DListGroup>
  ),
};

export const ActiveItems: Story = {
  render: (args) => (
    <DListGroup {...args}>
      {[1, 2, 3].map((item) => (
        <DListGroup.Item
          key={item}
          active={item === 1}
        >
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>
      ))}
    </DListGroup>
  ),
};

export const DisableItems: Story = {
  render: (args) => (
    <DListGroup {...args}>
      {[1, 2, 3].map((item) => (
        <DListGroup.Item
          key={item}
          disabled={item === 1}
        >
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>
      ))}
    </DListGroup>
  ),
};

export const Links: Story = {
  render: (args) => (
    <DListGroup {...args}>
      {[1, 2, 3].map((item) => (
        <DListGroup.Item
          key={item}
          href="#"
          active={item === 1}
        >
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>
      ))}
    </DListGroup>
  ),
  args: {
    as: 'div',
  },
};

export const Buttons: Story = {
  render: (args) => (
    <DListGroup {...args}>
      {[1, 2, 3].map((item) => (
        <DListGroup.Item
          key={item}
          as="button"
          active={item === 1}
        >
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>
      ))}
    </DListGroup>
  ),
  args: {
    as: 'div',
  },
};

export const Flush: Story = {
  render: (args) => (
    <DListGroup {...args}>
      {[1, 2, 3].map((item) => (
        <DListGroup.Item
          key={item}
        >
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>
      ))}
    </DListGroup>
  ),
  args: {
    flush: true,
  },
};

export const Numbered: Story = {
  render: (args) => (
    <DListGroup {...args}>
      {[1, 2, 3].map((item) => (
        <DListGroup.Item
          key={item}
        >
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>
      ))}
    </DListGroup>
  ),
  args: {
    numbered: true,
  },
};

export const Horizontal: Story = {
  render: (args) => (
    <DListGroup {...args}>
      {[1, 2, 3].map((item) => (
        <DListGroup.Item
          key={item}
        >
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>
      ))}
    </DListGroup>
  ),
  args: {
    horizontal: true,
  },
};

export const Variants: Story = {
  render: (args) => (
    <DListGroup {...args}>
      {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map((item) => (
        <DListGroup.Item
          key={item}
          color={item}
        >
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>
      ))}
    </DListGroup>
  ),
};

export const ActionVariants: Story = {
  render: (args) => (
    <DListGroup {...args}>
      {['primary', 'secondary', 'success', 'info', 'warning', 'danger'].map((item) => (
        <DListGroup.Item
          key={item}
          color={item}
          action
        >
          Lorem ipsum dolor sit amet consectetur.
        </DListGroup.Item>
      ))}
    </DListGroup>
  ),
  args: {
    as: 'div',
  },
};

export const CustomContent: Story = {
  render: (args) => (
    <DListGroup {...args}>
      {[1, 2, 3].map((item) => (
        <DListGroup.Item
          key={item}
          href="#"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">Some placeholder content in a paragraph.</p>
          <small>And some small print.</small>
        </DListGroup.Item>
      ))}
    </DListGroup>
  ),
  args: {
    as: 'div',
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <DListGroup {...args}>
      <DListGroup.Item iconStart="house-door" href="#">
        Home
      </DListGroup.Item>
      <DListGroup.Item iconStart="person" href="#">
        Profile
      </DListGroup.Item>
      <DListGroup.Item iconStart="gear" href="#">
        Settings
      </DListGroup.Item>
      <DListGroup.Item iconStart="envelope" href="#">
        Messages
      </DListGroup.Item>
    </DListGroup>
  ),
  args: {
    as: 'div',
  },
  parameters: {
    docs: {
      description: {
        story: 'List group items with start icons.',
      },
    },
  },
};

export const WithIconsEnd: Story = {
  render: (args) => (
    <DListGroup {...args}>
      <DListGroup.Item iconEnd="chevron-right" href="#">
        Dashboard
      </DListGroup.Item>
      <DListGroup.Item iconEnd="chevron-right" href="#">
        Analytics
      </DListGroup.Item>
      <DListGroup.Item iconEnd="chevron-right" href="#">
        Reports
      </DListGroup.Item>
    </DListGroup>
  ),
  args: {
    as: 'div',
  },
  parameters: {
    docs: {
      description: {
        story: 'List group items with end icons, useful for navigation menus.',
      },
    },
  },
};

export const WithBothIcons: Story = {
  render: (args) => (
    <DListGroup {...args}>
      <DListGroup.Item iconStart="check-circle-fill" iconEnd="chevron-right" color="success" action active>
        Completed Tasks
      </DListGroup.Item>
      <DListGroup.Item iconStart="clock" iconEnd="chevron-right" color="warning" action>
        Pending Tasks
      </DListGroup.Item>
      <DListGroup.Item iconStart="x-circle-fill" iconEnd="chevron-right" color="danger" action>
        Cancelled Tasks
      </DListGroup.Item>
    </DListGroup>
  ),
  args: {
    as: 'div',
  },
  parameters: {
    docs: {
      description: {
        story: 'List group items with both start and end icons, combined with colors.',
      },
    },
  },
};
