import { Meta, StoryObj } from '@storybook/react-vite';

import DInputCheck from '../../src/components/DInputCheck/DInputCheck';

const config: Meta<typeof DInputCheck> = {
  title: 'Design System/Components/Input Radio',
  component: DInputCheck,
  parameters: {
    docs: {
      description: {
        component: `
Create consistent cross-browser and cross-device radios with our completely rewritten checks component.

**Radio:** It is a type of graphical interface widget that allows the user to choose an option from a predefined set of options.

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
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
    type: {
      control: 'select',
      type: 'string',
      options: ['checkbox', 'radio'],
      defaultValue: 'radio',
      table: { category: 'HTML Attributes' },
    },
    value: {
      control: 'text',
      type: 'string',
      description: 'The value of the input',
      table: { category: 'Content' },
    },
    label: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    ariaLabel: {
      control: 'text',
      type: 'string',
      table: { category: 'HTML Attributes' },
    },
    checked: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    indeterminate: {
      control: 'boolean',
      table: { category: 'Behavior' },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DInputCheck>;

export const RadioWithoutLabel: Story = {
  args: {
    type: 'radio',
    checked: false,
    disabled: false,
    ariaLabel: 'Label',
  },
};

export const RadioDefault: Story = {
  args: {
    id: 'componentId2',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: false,
  },
};

export const RadioHint: Story = {
  args: {
    id: 'componentId2',
    type: 'radio',
    label: 'Label',
    hint: 'Assistive text',
    checked: false,
    disabled: false,
  },
};

export const RadioValid: Story = {
  args: {
    id: 'componentId3',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true,
  },
};

export const RadioInvalid: Story = {
  args: {
    id: 'componentId4',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true,
  },
};

export const RadioChecked: Story = {
  args: {
    id: 'componentId5',
    type: 'radio',
    label: 'Label',
    checked: true,
    disabled: false,
  },
};

export const RadioDisabled: Story = {
  args: {
    id: 'componentId6',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: true,
  },
};

export const RadioCheckedDisabled: Story = {
  args: {
    id: 'componentId7',
    type: 'radio',
    label: 'Label',
    checked: true,
    disabled: true,
  },
};

/**
 * Every validity state, checked and unchecked.
 *
 * The row that matters is the checked one. A checked control is mostly fill,
 * so a validity state that only recolours the one-pixel border is invisible
 * exactly when it is needed — which is what this story exists to keep honest.
 *
 * All of it comes from one custom property: `--df-choice-tone` is the colour
 * in force, and validity replaces it. The fill, the border and the dot read it,
 * so they cannot end up disagreeing about whether the control is wrong.
 */
export const ValidityStates: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Set `--df-choice-accent`, `--df-choice-accent-invalid` or `--df-choice-accent-valid` to retone all three at once.',
      },
    },
  },
  render: () => (
    <div className="df-grid df-grid-cols-4 df-gap-4 df-items-center" style={{ maxWidth: 560 }}>
      <span className="df-fs-label df-text-muted" />
      <span className="df-fs-label df-fw-semibold">Default</span>
      <span className="df-fs-label df-fw-semibold">Valid</span>
      <span className="df-fs-label df-fw-semibold">Invalid</span>

      <span className="df-fs-body-sm df-text-muted">Unchecked</span>
      <DInputCheck id="vsRadio1" type="radio" name="vs1" ariaLabel="Default, unchecked" />
      <DInputCheck id="vsRadio2" type="radio" name="vs2" ariaLabel="Valid, unchecked" valid />
      <DInputCheck id="vsRadio3" type="radio" name="vs3" ariaLabel="Invalid, unchecked" invalid />

      <span className="df-fs-body-sm df-text-muted">Checked</span>
      <DInputCheck id="vsRadio4" type="radio" name="vs4" ariaLabel="Default, checked" checked />
      <DInputCheck id="vsRadio5" type="radio" name="vs5" ariaLabel="Valid, checked" checked valid />
      <DInputCheck id="vsRadio6" type="radio" name="vs6" ariaLabel="Invalid, checked" checked invalid />

      <span className="df-fs-body-sm df-text-muted">Checkbox</span>
      <DInputCheck id="vsCheck1" type="checkbox" ariaLabel="Default, checked" checked />
      <DInputCheck id="vsCheck2" type="checkbox" ariaLabel="Valid, checked" checked valid />
      <DInputCheck id="vsCheck3" type="checkbox" ariaLabel="Invalid, checked" checked invalid />

      <span className="df-fs-body-sm df-text-muted">Indeterminate</span>
      <DInputCheck id="vsInd1" type="checkbox" ariaLabel="Default, indeterminate" indeterminate />
      <DInputCheck id="vsInd2" type="checkbox" ariaLabel="Valid, indeterminate" indeterminate valid />
      <DInputCheck id="vsInd3" type="checkbox" ariaLabel="Invalid, indeterminate" indeterminate invalid />
    </div>
  ),
};
