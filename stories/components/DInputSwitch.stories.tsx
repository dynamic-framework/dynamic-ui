import { Meta, StoryObj } from '@storybook/react-vite';

import DInputSwitch from '../../src/components/DInputSwitch/DInputSwitch';

const config: Meta<typeof DInputSwitch> = {
  title: 'Design System/Components/Input Switch',
  component: DInputSwitch,
  parameters: {
    docs: {
      description: {
        component: `
Graphical control element that allows the user to choose between two mutually exclusive states.

## CSS Variables

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/choice.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                              | Type       | Description           |
|---------------------------------------|------------|-----------------------|
| \`--df-choice-size\`                  | css length | Size                  |
| \`--df-choice-gap\`                   | css length | Gap                   |
| \`--df-choice-radius\`                | css length | Radius                |
| \`--df-choice-border-width\`          | css length | Border width          |
| \`--df-choice-bg\`                    | css color  | Background            |
| \`--df-choice-border-color\`          | css color  | Border color          |
| \`--df-choice-accent\`                | css color  | Accent                |
| \`--df-choice-accent-invalid\`        | css color  | Accent invalid        |
| \`--df-choice-accent-valid\`          | css color  | Accent valid          |
| \`--df-choice-disabled-border-color\` | css color  | Disabled border color |
| \`--df-choice-disabled-opacity\`      | number     | Disabled opacity      |
| \`--df-choice-switch-width\`          | css length | Switch width          |
| \`--df-choice-switch-height\`         | css length | Switch height         |
| \`--df-choice-switch-thumb-color\`    | css color  | Switch thumb color    |
| \`--df-choice-switch-track-color\`    | css color  | Switch track color    |

        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
      description: 'The id of the input',
      table: { category: 'HTML Attributes' },
    },
    name: {
      control: 'text',
      type: 'string',
      description: 'The name of the input',
      table: { category: 'HTML Attributes' },
    },
    className: {
      control: 'text',
      type: 'string',
      description: 'The class name for the wrapper div',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
    inputClassName: {
      control: 'text',
      type: 'string',
      description: 'The class name for the input element',
      table: { category: 'Appearance' },
    },
    label: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    checked: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    readonly: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    onChange: {
      action: 'onChange',
      table: { category: 'Events' },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DInputSwitch>;

export const WithoutLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    ariaLabel: 'Label',
  },
};

export const Default: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    checked: false,
    disabled: false,
  },
};

export const DefaultValid: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true,
  },
};

export const DefaultInvalid: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true,
  },
};

export const Checked: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    checked: true,
    disabled: false,
  },
};

export const Readonly: Story = {
  args: {
    id: 'componentId6',
    label: 'Label',
    checked: false,
    readonly: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId7',
    label: 'Label',
    checked: false,
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    id: 'componentId8',
    label: 'Label',
    checked: true,
    disabled: true,
  },
};

export const WithInputClassName: Story = {
  args: {
    id: 'componentId9',
    label: 'Custom styled input',
    checked: false,
    inputClassName: 'border-2',
  },
};

export const SeeMoreExamples: Story = {
  name: 'See More Examples',
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: '' },
      canvas: { sourceState: 'hidden' },
      source: { code: null },
    },
  },
  render: () => (
    <div
      className="df-alert df-flex df-items-start df-gap-3 df-p-4 df-rounded-control df-border-1 df-border-primary df-bg-primary-subtle"
      role="note"
      aria-label="See more examples"
    >
      <span className="df-fs-heading-4" aria-hidden="true">💡</span>
      <div>
        <strong className="df-block df-mb-1">Looking for more examples?</strong>
        <span className="df-text-secondary">
          To see more examples, you can review the
          {' '}
          <a href="/?path=/docs/patterns-input-switch--docs" target="_parent">
            <strong>Patterns / Input Switch</strong>
          </a>
          {' '}
          stories, where you will find real-world usage patterns with descriptions
          and full-row highlighting using CSS
          {' '}
          <code>:has()</code>
          .
        </span>
      </div>
    </div>
  ),
};
