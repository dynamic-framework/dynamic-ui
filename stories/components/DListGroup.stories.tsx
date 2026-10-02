import { Meta, StoryObj } from '@storybook/react-vite';

import DListGroup, { DListGroupItem } from '../../src/components/DListGroup';

const meta = {
  title: 'Design System/Components/List Group',
  component: DListGroup,
  subcomponents: { DListGroupItem },
  parameters: {
    docs: {
      description: {
        component: `
To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap List Group](https://getbootstrap.com/docs/5.3/components/list-group/)

## Container and item elements

\`DListGroup\` renders a \`<ul>\` by default (\`<ol>\` with \`numbered\`). Plain items render an \`<li>\`. A \`DListGroup.Item\` with \`href\` or \`action\` renders an \`<li>\` that carries the item styles, with the \`<a>\` or \`<button>\` inside filling it, so screen readers announce the list, its item count and each position ("2 of 4"):

\`\`\`html
<ul class="list-group">
  <li class="list-group-item list-group-item-action d-list-group-item-interactive">
    <a class="d-list-group-item-link" href="/accounts">Accounts</a>
  </li>
</ul>
\`\`\`

\`className\` and \`style\` go to the \`<li>\` (the visual item) and \`dataAttributes\` to the link or button.

\`as="div"\` keeps Bootstrap's flat structure (\`<div>\` with \`<a>\`/\`<button>\` items), which is not announced as a list; prefer the default list for links and buttons. A plain item inside \`as="div"\` is an \`<li>\` outside of a list, and \`DListGroup.Item\` warns about it in development.

A disabled link leaves the tab order and can't be activated. An \`active\` item gets \`aria-current\`: pass \`ariaCurrent="page"\` in a navigation or \`ariaCurrent="step"\` in a flow.

## Accessible name

When a screen has more than one list, name each one with \`ariaLabel\` (or \`ariaLabelledBy\`, pointing to the heading above it) so screen readers announce what the list contains, not just "list, 3 items". A named \`as="div"\` container is exposed as \`role="group"\`, since a plain \`<div>\` can't carry a name.

## CSS Variables

The Bootstrap documentation provides details on the default [List Group CSS Variables](https://getbootstrap.com/docs/5.3/components/list-group/#css)

        `,
      },
    },
  },
  argTypes: {
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
    className: {
      type: 'string',
      control: 'text',
      table: { category: 'Appearance' },
    },
    flush: {
      type: 'boolean',
      control: 'boolean',
      table: { category: 'Appearance' },
    },
    numbered: {
      type: 'boolean',
      control: 'boolean',
      table: { category: 'Appearance' },
    },
    as: {
      control: 'select',
      options: ['ul', 'ol', 'div'],
      description: 'Container element. Keep the default list for links and buttons too: they are wrapped in `<li>`. `div` keeps a flat structure that is not announced as a list.',
      table: {
        defaultValue: { summary: 'ul' },
        category: 'Appearance',
      },
    },
    ariaLabel: {
      control: 'text',
      type: 'string',
      description: 'Accessible name of the list. Ignored when `ariaLabelledBy` is set.',
      table: { category: 'Accessibility' },
    },
    ariaLabelledBy: {
      control: 'text',
      type: 'string',
      description: 'Id of a visible element that names the list.',
      table: { category: 'Accessibility' },
    },
    horizontal: {
      control: 'select',
      type: { name: 'string' },
      options: [undefined, true, 'sm', 'md', 'lg', 'xl', 'xxl'],
      table: { category: 'Appearance' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DListGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

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
  },
};

export const WithAccessibleName: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Named with the heading above it through `ariaLabelledBy`, so a screen reader announces "Recent movements, list, 3 items".',
      },
    },
  },
  render: (args) => (
    <section>
      <h3 id="recent-movements" className="h6">Recent movements</h3>
      <DListGroup {...args} ariaLabelledBy="recent-movements">
        <DListGroup.Item>Transfer received</DListGroup.Item>
        <DListGroup.Item>Card payment</DListGroup.Item>
        <DListGroup.Item>Cash withdrawal</DListGroup.Item>
      </DListGroup>
    </section>
  ),
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
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <DListGroup {...args}>
      <DListGroup.Item iconStart="Home" href="#">
        Home
      </DListGroup.Item>
      <DListGroup.Item iconStart="User" href="#">
        Profile
      </DListGroup.Item>
      <DListGroup.Item iconStart="Settings" href="#">
        Settings
      </DListGroup.Item>
      <DListGroup.Item iconStart="Mail" href="#">
        Messages
      </DListGroup.Item>
    </DListGroup>
  ),
  args: {
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
      <DListGroup.Item iconEnd="ChevronRight" href="#">
        Dashboard
      </DListGroup.Item>
      <DListGroup.Item iconEnd="ChevronRight" href="#">
        Analytics
      </DListGroup.Item>
      <DListGroup.Item iconEnd="ChevronRight" href="#">
        Reports
      </DListGroup.Item>
    </DListGroup>
  ),
  args: {
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
      <DListGroup.Item iconStart="CircleCheck" iconEnd="ChevronRight" color="success" action active>
        Completed Tasks
      </DListGroup.Item>
      <DListGroup.Item iconStart="Clock" iconEnd="ChevronRight" color="warning" action>
        Pending Tasks
      </DListGroup.Item>
      <DListGroup.Item iconStart="CircleX" iconEnd="ChevronRight" color="danger" action>
        Cancelled Tasks
      </DListGroup.Item>
    </DListGroup>
  ),
  args: {
  },
  parameters: {
    docs: {
      description: {
        story: 'List group items with both start and end icons, combined with colors.',
      },
    },
  },
};
