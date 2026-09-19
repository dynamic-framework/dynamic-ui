import { Meta, StoryObj } from '@storybook/react-vite';

import { DInputCheck } from '../../src';
import { PREFIX_BS } from '../../src/components/config';

const meta = {
  title: 'Design System/Components/Input Check',
  component: DInputCheck,
  parameters: {
    docs: {
      description: {
        component: `
Create consistent cross-browser and cross-device checkboxes with our completely rewritten checks component.

**Checkbox:** Allows the user to make multiple selections from a set of options.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Checks and Radios](https://getbootstrap.com/docs/5.3/forms/overview/)
+ [Bootstrap Checks](https://getbootstrap.com/docs/5.3/forms/checks-radios/#checks)

## Labels

\`label\` accepts any \`ReactNode\`, not only a string, so a field name can carry a link, a tooltip
trigger or a button that opens a modal — the terms-and-conditions pattern.

Passing a string keeps working exactly as before; the type was widened, not changed. Two things to
watch for when moving to a richer label:

+ **Give the control an accessible name.** A text label doubles as the name; a node does not, since
the name becomes whatever the subtree computes to. Pass \`aria-label\` with the plain-text name of
the field. A development-only warning fires when this is missing.
+ **Reach for \`<a href>\` first.** A link is not a labelable element, so it is a valid descendant
of a label, and browsers exempt it from the label's click forwarding. A \`<button>\` is labelable
and therefore a forbidden descendant under the HTML content model — put it outside the label
instead. A \`span\` with \`role\` and \`tabindex\` is valid but gets no exemption: the component
suppresses the forwarded click for it, and handling Enter and Space is then on you.

The only code that breaks on upgrade is code that reads the prop type back out of the component and
treats it as a string — \`ComponentProps<typeof DInputCheck>['label']\` forwarded to \`placeholder\` or
\`aria-label\`, or called with a string method. Type the wrapper's own \`label\` as \`string\`, or
narrow with \`typeof label === 'string'\` at the point where it is forwarded.

## CSS Variables

The Bootstrap documentation provides details on the default [Check CSS Variables](https://getbootstrap.com/docs/5.3/forms/checks-radios/#css)

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
      description: 'Accepts any ReactNode. A text label doubles as the accessible name; a richer one needs an explicit aria-label.',
      table: { category: 'Content', type: { summary: 'ReactNode' } },
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
      table: { category: 'Behavior' },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Only applies when `type` is `checkbox`; ignored for `radio`.',
      table: { category: 'Behavior' },
    },
    hint: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
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
} satisfies Meta<typeof DInputCheck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'componentId1',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    indeterminate: false,
    invalid: false,
    valid: false,
    hint: '',
    name: 'checkbox',
    value: 'value',
    className: '',
    inputClassName: '',
  },
};

export const WithoutLabel: Story = {
  args: {
    id: 'componentId2',
    type: 'checkbox',
    checked: false,
    disabled: false,
    ariaLabel: 'Label',
  },
};

export const Hint: Story = {
  args: {
    id: 'componentId3',
    type: 'checkbox',
    label: 'Label',
    hint: 'Assistive text',
    checked: false,
    disabled: false,
  },
};

export const Valid: Story = {
  args: {
    id: 'componentId4',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true,
    hint: 'Assistive text',
  },
};

export const Invalid: Story = {
  args: {
    id: 'componentId5',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true,
    hint: 'Assistive text',
  },
};

export const Checked: Story = {
  args: {
    id: 'componentId6',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: false,
  },
};

export const Indeterminate: Story = {
  args: {
    id: 'componentId6b',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId7',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    id: 'componentId8',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: true,
  },
};

export const WithInputClassName: Story = {
  args: {
    id: 'componentId9',
    type: 'checkbox',
    label: 'Custom styled input',
    checked: false,
    inputClassName: 'border-2 border-info-500',
  },
};

export const LabelWithLink: Story = {
  parameters: {
    docs: {
      description: {
        story: `
\`label\` accepts any \`ReactNode\`, which covers the terms-and-conditions pattern: part of the
label is a link to the full text, a tooltip trigger or a button that opens a modal.

Two things to keep in mind:

+ Pass \`ariaLabel\` with the plain-text name of the field. The accessible name otherwise becomes
whatever the label subtree computes to, which for a label carrying a link reads as the wrong name.
A development-only warning fires when this is missing.
+ Clicking the nested link or button does **not** toggle the checkbox: the HTML spec skips a
label's activation behavior for events targeted at interactive content descendants. Clicking the
plain text still toggles it.
+ Triggers that are not native interactive content — a \`span\` with \`role=button\` and a
\`tabindex\`, say — get no such exemption from the browser, so the component suppresses that
forwarded click itself. Prefer a real \`<button>\` anyway: it is focusable and operable by keyboard
without extra attributes.
        `,
      },
    },
  },
  args: {
    id: 'componentIdTerms',
    type: 'checkbox',
    checked: false,
    ariaLabel: 'Accept the terms and conditions',
    label: (
      <>
        I accept the
        {' '}
        <a href="https://dynamicframework.dev" target="_blank" rel="noreferrer">
          terms and conditions
        </a>
      </>
    ),
  },
};
