import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { DInputSwitch } from '../../src';
import { PREFIX_BS } from '../../src/components/config';

const meta = {
  title: 'Design System/Components/Input Switch',
  component: DInputSwitch,
  parameters: {
    docs: {
      description: {
        component: `
Graphical control element that allows the user to choose between two mutually exclusive states.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Switch](https://getbootstrap.com/docs/5.3/forms/checks-radios/#switches)

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
makes \`<DInputSwitch checked />\` work, and nothing about it changed. Prefer \`defaultChecked\` in new code,
it says so out loud.

The examples on this page pass \`defaultChecked\` rather than \`checked\`: Storybook injects an action
handler for every \`on*\` arg, so a fixed \`checked\` would put them in controlled mode and freeze
them in the canvas. The \`Controlled\` story below drives the value from real state instead.

## CSS Variables

The Bootstrap documentation provides details on the default [Checks CSS Variables](https://getbootstrap.com/docs/5.3/forms/checks-radios/#css)

| Variable                                            | Class               | Type              | Description                |
|-----------------------------------------------------|---------------------|-------------------|----------------------------|
| --${PREFIX_BS}form-switch-width                     | .form-switch        | css length unit   | Switch width               |
| --${PREFIX_BS}form-switch-padding-start             | .form-switch        | css length unit   | Padding start              |
| --${PREFIX_BS}form-switch-border-radius             | .form-switch        | css length unit   | Border radius              |
| --${PREFIX_BS}form-switch-bg                        | .form-switch        | data url svg      | Regular image background   |
| --${PREFIX_BS}form-switch-focus-bg-image            | .form-switch        | data url svg      | Focus image background     |
| --${PREFIX_BS}form-switch-checked-bg-image          | .form-switch        | data url svg      | Checked image backgound    |
| --${PREFIX_BS}form-check-input-focus-border-color   | .form-check-input   | css color unit    | Focus border color         |
| --${PREFIX_BS}form-check-input-focus-box-shadow     | .form-check-input   | css box shadow    | Focus box shadow           |

### Icons

The knob is an SVG served as a data URL, one per state. The variables above live on
\`.form-switch\` and are good for a single switch; these live on \`:root\` and feed them, so
overriding them there themes every switch at once.

| Variable                                     | Class  | Type         | Description                                    |
|----------------------------------------------|--------|--------------|------------------------------------------------|
| --${PREFIX_BS}form-switch-icon               | :root  | data url svg | Knob at rest                                   |
| --${PREFIX_BS}form-switch-icon-focus         | :root  | data url svg | Knob while the switch has focus                |
| --${PREFIX_BS}form-switch-icon-checked       | :root  | data url svg | Knob while the switch is on                    |
| --${PREFIX_BS}form-switch-icon-valid         | :root  | data url svg | Knob of an unchecked \`.is-valid\` switch       |
| --${PREFIX_BS}form-switch-icon-invalid       | :root  | data url svg | Knob of an unchecked \`.is-invalid\` switch     |

Rest, focus and checked also have a component-level variable on \`.form-switch\`
(\`--${PREFIX_BS}form-switch-bg\`, \`--${PREFIX_BS}form-switch-focus-bg-image\`,
\`--${PREFIX_BS}form-switch-checked-bg-image\`) for a one-off switch. The validation knobs have
none, so \`:root\` is where you theme those.

\`\`\`css
/* After dynamic-ui.css */
:root {
  /* A smaller knob, in the brand gray */
  --${PREFIX_BS}form-switch-icon:
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2.5' fill='%23a7a7b4'/></svg>");

  /* On: white, full size */
  --${PREFIX_BS}form-switch-icon-checked:
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='%23fff'/></svg>");

  /* Validation knobs: swap these two for your brand's success and danger.
     The values below are the defaults, written as rgb() so no escaping is needed. */
  --${PREFIX_BS}form-switch-icon-valid:
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='rgb(25 135 84)'/></svg>");
  --${PREFIX_BS}form-switch-icon-invalid:
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='rgb(220 53 69)'/></svg>");
}
\`\`\`

Two things to keep in mind when writing the value:

+ **The color inside the SVG has to be a literal.** A \`var()\` there does not resolve: the browser
renders an SVG used as an image as a separate document, which does not inherit the page's custom
properties, so the fill falls back to its initial value. Write \`%23fff\`, \`rgb(255 255 255)\` or a
named color — not \`var(--${PREFIX_BS}white)\`.
+ **Percent-encode \`#\`.** Inside a URL it starts a fragment, so a hex color has to be written as
\`%23fff\`. Using \`rgb()\` or a named color avoids the question.

The track behind the knob is not part of the icon: it is \`background-color\` on
\`.form-check-input\`, and it follows the theme on its own.
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
      description: 'Accepts any ReactNode. A text label doubles as the accessible name; a richer one needs an explicit ariaLabel.',
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
      description: 'Checked state. With `onChange` the control is fully controlled; on its own it is the starting value.',
      table: { category: 'Behavior' },
    },
    defaultChecked: {
      control: 'boolean',
      type: 'boolean',
      description: 'Starting checked state for uncontrolled usage.',
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
    hint: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    onChange: {
      action: 'onChange',
      table: { category: 'Events' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DInputSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutLabel: Story = {
  args: {
    defaultChecked: false,
    disabled: false,
    ariaLabel: 'Label',
  },
};

export const Default: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    defaultChecked: false,
    disabled: false,
  },
};

export const Valid: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    defaultChecked: false,
    disabled: false,
    valid: true,
    hint: 'Assistive text',
  },
};

export const Invalid: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    defaultChecked: false,
    disabled: false,
    invalid: true,
    hint: 'Assistive text',
  },
};

export const Checked: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    defaultChecked: true,
    disabled: false,
  },
};

export const Readonly: Story = {
  args: {
    id: 'componentId6',
    label: 'Label',
    defaultChecked: false,
    readonly: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId7',
    label: 'Label',
    defaultChecked: false,
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    id: 'componentId8',
    label: 'Label',
    defaultChecked: true,
    disabled: true,
  },
};

export const WithInputClassName: Story = {
  args: {
    id: 'componentId9',
    label: 'Custom styled input',
    defaultChecked: false,
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
      className="alert d-flex align-items-start gap-3 p-4 rounded border border-primary-subtle bg-primary-subtle"
      role="note"
      aria-label="See more examples"
    >
      <span className="fs-4" aria-hidden="true">💡</span>
      <div>
        <strong className="d-block mb-1">Looking for more examples?</strong>
        <span className="text-secondary">
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

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: `
A parent that refuses to turn the switch on. The switch snaps back instead of staying on while the
state says otherwise.
        `,
      },
    },
  },
  render: function Render() {
    const [enabled, setEnabled] = useState(false);

    return (
      <div className="d-flex flex-column gap-2">
        <DInputSwitch
          label="Notifications"
          checked={enabled}
          onChange={() => setEnabled(false)}
        />
        <p className="form-text">
          {`Rejected by the parent — state: ${enabled ? 'on' : 'off'}`}
        </p>
      </div>
    );
  },
};
