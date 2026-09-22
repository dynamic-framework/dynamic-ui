import { Meta, StoryObj } from '@storybook/react-vite';

import { useState } from 'react';
import type { ComponentProps } from 'react';

import { DInputCounter, DContextProvider } from '../../src';
import { ICONS, CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';
import { PREFIX_BS } from '../../src/components/config';

const meta = {
  title: 'Design System/Components/Input Counter',
  component: DInputCounter,
  parameters: {
    docs: {
      description: {
        component: `
Component composition with \`d-input\` to make a counter input component.

## Controlled and uncontrolled

The control works in both modes.

**Controlled** — pass \`value\` *and* \`onChange\`. The control then renders exactly what the prop
says, so when the parent rejects a change — a selection cap, an async call that fails and reverts, a
reducer that drops a duplicate — it snaps back on its own instead of drifting away from the state
behind it.

**Uncontrolled** — pass \`defaultValue\` for a starting point, or nothing at all, and the control
keeps counting by itself.

\`value\` on its own, with no \`onChange\`, keeps its historical meaning: a starting value that a
later change from outside still lands on, while the control goes on counting by itself. That is what
makes \`<DInputCounter value={3} />\` work, and nothing about it changed. Prefer \`defaultValue\` in new code,
it says so out loud.

The examples on this page pass \`defaultValue\` rather than \`value\`: Storybook injects an action
handler for every \`on*\` arg, so a fixed \`value\` would put them in controlled mode and freeze
them in the canvas. The \`Controlled\` story below drives the value from real state instead.

## CSS Variables

The Bootstrap documentation provides details on the default [Input Form CSS Variables](https://getbootstrap.com/docs/5.3/forms/form-control/#css)
and so it does [Input Group CSS Variables](https://getbootstrap.com/docs/5.3/forms/input-group/#css)

| Variable                                  | Class         | Type            | Description                 |
|-------------------------------------------|---------------|-----------------|-----------------------------|
| --${PREFIX_BS}label-color                 | :root         | css color unit  | Label color                 |
| --${PREFIX_BS}label-font-weight           | :root         | css font weight | Label font weight           |
| --${PREFIX_BS}label-font-size             | :root         | css length unit | Label font size             |
| --${PREFIX_BS}label-padding-x             | :root         | css length unit | Label horizontal padding    |
| --${PREFIX_BS}label-padding-y             | :root         | css length unit | Label vertical padding      |
| --${PREFIX_BS}input-border-color          | .input-group  | css color unit  | Input border color          |
| --${PREFIX_BS}input-border-width          | .input-group  | css length unit | Input border width          |
| --${PREFIX_BS}input-border-radius         | .input-group  | css length unit | Input border radius         |
| --${PREFIX_BS}input-focus-border-color    | .input-group  | css color unit  | Input focus border color    |
| --${PREFIX_BS}input-focus-box-shadow      | .input-group  | css shadow      | Input focus box shadow      |
| --${PREFIX_BS}input-disabled-bg           | .input-group  | css color unit  | Input disable background    |
| --${PREFIX_BS}input-disabled-color        | .input-group  | css color unit  | Input disable color         |
| --${PREFIX_BS}input-disabled-border-color | .input-group  | css color unit  | Input disable border color  |
| --${PREFIX_BS}form-text-padding           | .form-text    | css length unit | Hint padding                |
| --${PREFIX_BS}form-text-gap               | .form-text    | css length unit | Space between hint elements |
| --${PREFIX_BS}form-text-color             | .form-text    | css color unit  | Hint color                  |
| --${PREFIX_BS}form-control-text-align     | .form-control | css text align  | Input text align            |
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
    label: {
      control: 'text',
      description: 'Accepts any ReactNode. A text label doubles as the accessible name; a richer one needs an explicit aria-label.',
      table: { category: 'Content', type: { summary: 'ReactNode' } },
    },
    value: {
      control: 'number',
      type: 'number',
      description: 'The value of the input. With `onChange` the counter is fully controlled; on its own it is the starting value.',
      table: { category: 'Content' },
    },
    defaultValue: {
      control: 'number',
      type: 'number',
      description: 'Starting value for uncontrolled usage; falls back to `minValue`.',
      table: { category: 'Content' },
    },
    size: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, 'sm', 'lg'],
      table: { category: 'Appearance' },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    readOnly: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    loading: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    iconStart: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
      table: { category: 'Icon' },
    },
    iconEnd: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
      table: { category: 'Icon' },
    },
    iconStartAriaLabel: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    iconEndAriaLabel: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
      table: { category: 'Content' },
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    floatingLabel: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Appearance',
      },
    },
    minValue: {
      control: 'number',
      type: 'number',
      table: { category: 'Behavior' },
    },
    maxValue: {
      control: 'number',
      type: 'number',
      table: { category: 'Behavior' },
    },
    onChange: {
      action: 'onChange',
      table: { category: 'Events' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DInputCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    minValue: 0,
    maxValue: 20,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action',
  },
};

export const Invalid: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    defaultValue: 21,
    minValue: 0,
    maxValue: 20,
    invalid: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action',
    hint: 'Assistive text',
  },
};

export const Valid: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    defaultValue: 2,
    minValue: 0,
    maxValue: 20,
    valid: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action',
    hint: 'Assistive text',
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    defaultValue: 3,
    minValue: 0,
    maxValue: 20,
    disabled: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action',
  },
};

export const Floating: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    defaultValue: 3,
    minValue: 0,
    maxValue: 20,
    floatingLabel: true,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action',
  },
};

export const MaterialIcon: Story = {
  render: (args: ComponentProps<typeof DInputCounter>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DInputCounter
        {...args}
      />
    </DContextProvider>
  ),
  args: {
    id: 'componentId6',
    label: 'Label',
    defaultValue: 3,
    minValue: 0,
    maxValue: 20,
    iconStartAriaLabel: 'decrease action',
    iconEndAriaLabel: 'increase action',
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: `
A parent that only accepts even values. Odd steps are rejected, and the counter snaps back instead
of showing a value the state never took.
        `,
      },
    },
  },
  render: function Render() {
    const [quantity, setQuantity] = useState(0);

    return (
      <div className="d-flex flex-column gap-2">
        <DInputCounter
          label="Quantity (even only)"
          minValue={0}
          maxValue={20}
          value={quantity}
          onChange={(next) => setQuantity((prev) => ((next ?? 0) % 2 === 0 ? next ?? 0 : prev))}
        />
        <p className="form-text">{`Accepted value: ${quantity}`}</p>
      </div>
    );
  },
};
