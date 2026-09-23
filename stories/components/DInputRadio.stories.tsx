import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { DInputCheck } from '../../src';
import { PREFIX_BS } from '../../src/components/config';

const meta = {
  title: 'Design System/Components/Input Radio',
  component: DInputCheck,
  parameters: {
    docs: {
      description: {
        component: `
Create consistent cross-browser and cross-device radios with our completely rewritten checks component.

**Radio:** It is a type of graphical interface widget that allows the user to choose an option from a predefined set of options.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Checks and Radios](https://getbootstrap.com/docs/5.3/forms/overview/)
+ [Bootstrap Radios](https://getbootstrap.com/docs/5.3/forms/checks-radios/#radios)

## Controlled and uncontrolled

The control works in both modes.

**Controlled** — pass \`checked\` *and* \`onChange\`. The control then renders exactly what the prop
says, so when the parent rejects a change — a selection cap, an async call that fails and reverts, a
reducer that drops a duplicate — it snaps back on its own instead of drifting away from the state
behind it.

**Uncontrolled** — pass \`defaultChecked\` for a starting point, or nothing at all, and the control
keeps toggling by itself.

\`checked\` on its own, with no \`onChange\`, keeps its historical meaning: a starting value that a
later change from outside still lands on, while the control goes on toggling by itself. That is what
makes \`<DInputCheck type="radio" name="plan" checked />\` work, and nothing about it changed. Prefer
\`defaultChecked\` in new code, it says so out loud.

The examples on this page pass \`defaultChecked\` rather than \`checked\`: Storybook injects an action
handler for every \`on*\` arg, so a fixed \`checked\` would put them in controlled mode and freeze
them in the canvas. The \`Controlled\` story below drives the value from real state instead.

## CSS Variables

The Bootstrap documentation provides details on the default [Radio CSS Variables](https://getbootstrap.com/docs/5.3/forms/checks-radios/#css)

| Variable                                            | Class               | Type            | Description                 |
|-----------------------------------------------------|---------------------|-----------------|-----------------------------|
| --${PREFIX_BS}form-check-input-focus-border-color   | .form-check-input   | css color unit  | Focus border color          |
| --${PREFIX_BS}form-check-input-focus-box-shadow     | .form-check-input   | css box shadow  | Focus box shadow            |
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
      description: 'The ARIA label for the input, used when there is no visible label',
      table: { category: 'HTML Attributes' },
    },
    checked: {
      control: 'boolean',
      type: 'boolean',
      description: 'Checked state. With `onChange` the control is fully controlled; on its own it is the starting value.',
      table: { category: 'Behavior' },
    },
    defaultChecked: {
      control: 'boolean',
      type: 'boolean',
      description: 'Starting checked state for uncontrolled usage.',
      table: { category: 'Behavior' },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    hint: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    invalid: {
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
} satisfies Meta<typeof DInputCheck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'componentId1',
    type: 'radio',
    label: 'Label',
    defaultChecked: false,
    disabled: false,
    hint: 'Assistive text',
    valid: false,
    invalid: false,
    name: 'defaultRadio',
    className: '',
    value: 'value',
    inputClassName: '',
  },
};

export const WithoutLabel: Story = {
  args: {
    id: 'componentId2',
    type: 'radio',
    defaultChecked: false,
    disabled: false,
    ariaLabel: 'Label',
  },
};

export const Hint: Story = {
  args: {
    id: 'componentId3',
    type: 'radio',
    label: 'Label',
    hint: 'Assistive text',
    defaultChecked: false,
    disabled: false,
  },
};

export const Valid: Story = {
  args: {
    id: 'componentId4',
    type: 'radio',
    label: 'Label',
    defaultChecked: false,
    disabled: false,
    valid: true,
    hint: 'Assistive text',
  },
};

export const Invalid: Story = {
  args: {
    id: 'componentId5',
    type: 'radio',
    label: 'Label',
    defaultChecked: false,
    disabled: false,
    invalid: true,
    hint: 'Assistive text',
  },
};

export const Checked: Story = {
  args: {
    id: 'componentId6',
    type: 'radio',
    label: 'Label',
    defaultChecked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId7',
    type: 'radio',
    label: 'Label',
    defaultChecked: false,
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    id: 'componentId8',
    type: 'radio',
    label: 'Label',
    defaultChecked: true,
    disabled: true,
  },
};

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: `
A radio group whose parent only accepts upgrades. Picking a cheaper plan is rejected, and the
click snaps back instead of leaving the group showing an option the state never took.
        `,
      },
    },
  },
  render: function Render() {
    const PLANS = ['basic', 'pro', 'enterprise'];
    const LABELS = { basic: 'Basic', pro: 'Pro', enterprise: 'Enterprise' };
    const [plan, setPlan] = useState('basic');

    return (
      <div className="d-flex flex-column gap-2">
        {PLANS.map((id) => (
          <DInputCheck
            key={id}
            type="radio"
            name="controlledPlan"
            label={LABELS[id as keyof typeof LABELS]}
            value={id}
            checked={plan === id}
            onChange={() => setPlan((prev) => (
              PLANS.indexOf(id) > PLANS.indexOf(prev) ? id : prev
            ))}
          />
        ))}
        <p className="form-text">
          {`Downgrades are rejected — selected: ${LABELS[plan as keyof typeof LABELS]}`}
        </p>
      </div>
    );
  },
};
