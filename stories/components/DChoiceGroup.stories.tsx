import { useReducer, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { DButton, DChoiceGroup } from '../../src';
import { PREFIX_BS } from '../../src/components/config';

const MATERIALS = [
  { value: 'synthetic', label: 'Synthetic' },
  { value: 'wool', label: 'Wool' },
  { value: 'cotton', label: 'Cotton' },
  { value: 'linen', label: 'Linen' },
  { value: 'denim', label: 'Denim' },
  { value: 'leather', label: 'Leather' },
  { value: 'silk', label: 'Silk' },
  { value: 'chiffon', label: 'Chiffon' },
  { value: 'other', label: 'Other' },
];

const meta = {
  title: 'Design System/Components/Choice Group',
  component: DChoiceGroup,
  parameters: {
    docs: {
      description: {
        component: `
A set of options that reads as a row of buttons and behaves as a set of radios
— or of checkboxes, with \`multiple\`.

## It is not built out of buttons

Looking like a button and being one are different things. Each option is a
\`<label>\` bound to an \`<input>\`, which is where the group semantics, the
arrow-key movement across a radio group, the checked state, the form value and
the announced role come from. A \`<button>\` has none of those.

The markup carries no button class either. What it borrows is the button
**tokens**: every value in the stylesheet resolves to a \`--${PREFIX_BS}btn-*\`
variable, with the soft variant answering for a resting option and the solid
one for a selected option. Retheme your buttons and the choices follow.

> The input is clipped out of sight rather than hidden with \`display: none\`,
> so it stays focusable and announced. That one line is the difference between
> a control a keyboard user can operate and one they cannot.

## Layout is yours

A wrapping row, a three-column grid and a single scrolling line are the same
control with different composition. That goes in \`optionsClassName\` —
the component does not own it.

\`\`\`tsx
<DChoiceGroup
  optionsClassName="grid gap-2"
  optionClassName="g-col-4"
  // ...
/>
\`\`\`

## Single and multiple

\`multiple\` switches the inputs from radio to checkbox, and with it the shape
of \`value\` and \`onChange\`:

| | \`value\` | \`onChange\` |
|---|---|---|
| default | \`string\` | \`(value: string) => void\` |
| \`multiple\` | \`string[]\` | \`(value: string[]) => void\` |

The types are a discriminated union, so TypeScript picks the right pair for you
and rejects the other one.

### \`required\` with \`multiple\`

\`required\` on a checkbox means *that* box has to be ticked, so putting it on
each option would demand all of them. A required multi-select group instead
carries one group-level constraint, through the constraint validation API, on
the first option that can hold it: the form will not submit while nothing is
chosen, and the browser reports \`requiredMessage\`.

## Sizes

There are two: \`sm\` and \`lg\`. The regular size is what you get by passing
no \`size\` at all — there is no \`md\` to ask for, and no
\`.d-choice-group-md\` class.

## CSS Variables

| Variable | Class | Type | Description |
|---|---|---|---|
| --${PREFIX_BS}choice-padding-y | .d-choice-group | css length | Vertical padding of an option |
| --${PREFIX_BS}choice-padding-x | .d-choice-group | css length | Horizontal padding of an option |
| --${PREFIX_BS}choice-font-size | .d-choice-group | css length | Option text size |
| --${PREFIX_BS}choice-border-radius | .d-choice-group | css length | Option corner radius |
| --${PREFIX_BS}choice-border-width | .d-choice-group | css length | Option border width |
| --${PREFIX_BS}choice-bg | .d-choice-group | css color | Resting background |
| --${PREFIX_BS}choice-color | .d-choice-group | css color | Resting text |
| --${PREFIX_BS}choice-selected-bg | .d-choice-group | css color | Selected background |
| --${PREFIX_BS}choice-selected-color | .d-choice-group | css color | Selected text |
| --${PREFIX_BS}choice-focus-width | .d-choice-group | css length | Focus ring width |
| --${PREFIX_BS}choice-group-gap | .d-choice-group | css length | Gap between options |

All of them default to a \`$btn-*\` SCSS variable, so the two controls move
together.
        `,
      },
    },
  },
  argTypes: {
    options: { control: 'object', table: { category: 'Content' } },
    label: { control: 'text', table: { category: 'Content' } },
    hint: { control: 'text', table: { category: 'Content' } },
    name: { control: 'text', table: { category: 'Content' } },
    value: { control: false, table: { category: 'Content' } },
    defaultValue: { control: false, table: { category: 'Content' } },
    multiple: { control: 'boolean', table: { category: 'Behavior' } },
    size: {
      control: 'select',
      options: [undefined, 'sm', 'lg'],
      table: { category: 'Appearance' },
    },
    color: { control: 'text', table: { category: 'Appearance' } },
    disabled: { control: 'boolean', table: { category: 'Behavior' } },
    invalid: { control: 'boolean', table: { category: 'Behavior' } },
    required: { control: 'boolean', table: { category: 'Behavior' } },
    optionsClassName: { control: 'text', table: { category: 'Appearance' } },
    optionClassName: { control: 'text', table: { category: 'Appearance' } },
    ariaLabel: { control: 'text', table: { category: 'Accessibility' } },
    onChange: { action: 'change', table: { category: 'Events' } },
    className: { control: 'text', table: { category: 'Appearance' } },
    style: { control: 'object', table: { category: 'Appearance' } },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DChoiceGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Main material',
    options: MATERIALS.slice(0, 4),
    defaultValue: 'linen',
  },
};

/**
 * The shape this component is usually asked for: a fixed grid rather than a
 * wrapping row, so the options line up in columns regardless of their length.
 *
 * Note that nothing about the grid lives in the component — it is two utility
 * classes passed in from outside.
 */
export const Grid: Story = {
  args: {
    label: 'Main material',
    options: MATERIALS,
    defaultValue: 'linen',
    optionsClassName: 'grid gap-2',
    optionClassName: 'g-col-4',
  },
  decorators: [(StoryFn) => <div style={{ width: 560 }}><StoryFn /></div>],
};

/** `multiple` turns the radios into checkboxes. Nothing else changes. */
export const Multiple: Story = {
  args: {
    label: 'Materials',
    hint: 'Pick every one that applies',
    multiple: true,
    options: MATERIALS.slice(0, 5),
    defaultValue: ['wool', 'linen'],
  },
};

const THREE = MATERIALS.slice(0, 3);

export const Sizes: Story = {
  args: { label: 'Main material', options: THREE },
  render: () => (
    <div className="d-flex flex-column gap-4">
      <DChoiceGroup label="Small" size="sm" options={THREE} defaultValue="wool" />
      <DChoiceGroup label="Regular — no size prop" options={THREE} defaultValue="wool" />
      <DChoiceGroup label="Large" size="lg" options={THREE} defaultValue="wool" />
    </div>
  ),
};

/**
 * `size` also takes an object by breakpoint, resolved against the viewport as
 * it changes. Same prop shape `DButton` and `DBadge` already accept.
 *
 * Resize the preview: compact below `xl`, roomy from `xl` up.
 *
 * Note what cannot be expressed: there is no size value meaning "the regular
 * one", so a map cannot step back to it at a higher breakpoint. A breakpoint
 * you leave out keeps whatever the one below it set. Start from the regular
 * size and go up, rather than trying to return to it.
 */
export const ResponsiveSize: Story = {
  args: {
    label: 'Main material',
    options: MATERIALS.slice(0, 4),
    defaultValue: 'linen',
    size: { xs: 'sm', xl: 'lg' },
  },
};

/**
 * The resting state is the soft variant of the colour and the selected state
 * the solid one, so a group sits next to buttons of the same colour without
 * being one.
 */
export const Colors: Story = {
  args: { label: 'Main material', options: THREE },
  render: () => (
    <div className="d-flex flex-column gap-4">
      {['primary', 'secondary', 'success', 'danger'].map((color) => (
        <DChoiceGroup
          key={color}
          label={color}
          color={color}
          options={THREE}
          defaultValue="wool"
        />
      ))}
    </div>
  ),
};

/**
 * Three different things, and they do not look alike on purpose.
 *
 * - **The whole group** — `disabled` on the component. It becomes a disabled
 *   `<fieldset>`, which is what disables the inputs; there is no per-input
 *   attribute to keep in sync.
 * - **One option out of stock** — `disabled` on that entry in `options`. The
 *   rest of the group stays live.
 * - **A locked choice** — the selected option is the disabled one. It still
 *   reads as chosen, because it is: the value is submitted, it just cannot be
 *   changed here.
 */
export const Disabled: Story = {
  args: { label: 'Main material', options: THREE },
  render: () => (
    <div className="d-flex flex-column gap-5">
      <DChoiceGroup
        label="The whole group"
        hint="disabled on the component"
        options={THREE}
        defaultValue="wool"
        disabled
      />
      <DChoiceGroup
        label="One option out of stock"
        hint="disabled on that entry in options — the rest stays live"
        defaultValue="wool"
        options={[
          { value: 'synthetic', label: 'Synthetic' },
          { value: 'wool', label: 'Wool' },
          { value: 'cotton', label: 'Cotton', disabled: true },
        ]}
      />
      <DChoiceGroup
        label="A locked choice"
        hint="the selected option is the disabled one — still chosen, just not changeable"
        defaultValue="cotton"
        options={[
          { value: 'synthetic', label: 'Synthetic' },
          { value: 'wool', label: 'Wool' },
          { value: 'cotton', label: 'Cotton', disabled: true },
        ]}
      />
    </div>
  ),
};

/** The same three states with checkboxes, where more than one can be locked. */
export const DisabledMultiple: Story = {
  args: { label: 'Available sizes', options: THREE },
  render: () => (
    <div className="d-flex flex-column gap-5">
      <DChoiceGroup
        multiple
        label="The whole group"
        options={[
          { value: 's', label: 'S' },
          { value: 'm', label: 'M' },
          { value: 'l', label: 'L' },
        ]}
        defaultValue={['m']}
        disabled
      />
      <DChoiceGroup
        multiple
        label="Some sizes unavailable"
        hint="S is sold out; M is locked in and cannot be removed"
        options={[
          { value: 's', label: 'S', disabled: true },
          { value: 'm', label: 'M', disabled: true },
          { value: 'l', label: 'L' },
          { value: 'xl', label: 'XL' },
        ]}
        defaultValue={['m', 'l']}
      />
    </div>
  ),
};

/**
 * Only the resting border and the hint change. Repainting the options
 * themselves would bury the selected state, which is the one thing still worth
 * seeing while the error is being fixed.
 */
export const Invalid: Story = {
  args: {
    label: 'Main material',
    options: MATERIALS.slice(0, 4),
    hint: 'Choose a material to continue',
    invalid: true,
    required: true,
  },
};

/**
 * A required multi-select. Submit with nothing chosen and the browser blocks
 * the form and reports the message; tick anything and it goes through.
 *
 * This is the combination that has no HTML attribute behind it — see the
 * `required` note above.
 */
export const RequiredMultiple: Story = {
  args: { label: 'Available sizes', options: THREE },
  render: () => (
    <form
      className="d-flex flex-column align-items-start gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        // eslint-disable-next-line no-alert
        window.alert('Submitted');
      }}
    >
      <DChoiceGroup
        multiple
        required
        requiredMessage="Pick at least one size"
        label="Available sizes"
        hint="Required — choose one or more"
        options={[
          { value: 's', label: 'S' },
          { value: 'm', label: 'M' },
          { value: 'l', label: 'L' },
          { value: 'xl', label: 'XL' },
        ]}
      />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  ),
};

function ResetDemo() {
  const [material, setMaterial] = useState('linen');
  const [locked, setLocked] = useState('cotton');
  const [sizes, setSizes] = useState<string[]>([]);
  const [renders, rerender] = useReducer((tick: number) => tick + 1, 0);
  const [sent, setSent] = useState(0);

  return (
    <form
      className="d-flex flex-column gap-4"
      style={{ width: 560 }}
      onSubmit={(event) => { event.preventDefault(); setSent((n) => n + 1); }}
      onReset={() => setSent(0)}
    >
      <DChoiceGroup
        label="Uncontrolled"
        hint="defaultValue=&quot;linen&quot; — reset puts it back, and says so"
        options={MATERIALS.slice(0, 4)}
        defaultValue="linen"
        onChange={setMaterial}
      />

      <DChoiceGroup
        multiple
        required
        requiredMessage="Pick at least one size"
        label="Required multi-select"
        hint="nothing chosen by default — reset must make it block again"
        options={[
          { value: 's', label: 'S' },
          { value: 'm', label: 'M' },
          { value: 'l', label: 'L' },
        ]}
        onChange={setSizes}
      />

      <DChoiceGroup
        label="Controlled"
        hint="the value is the consumer's — a reset must not touch it"
        options={MATERIALS.slice(0, 4)}
        value={locked}
        onChange={setLocked}
      />

      <table className="table table-sm m-0">
        <tbody>
          <tr>
            <td className="text-muted small">Uncontrolled state</td>
            <td className="fw-semibold">{material}</td>
          </tr>
          <tr>
            <td className="text-muted small">Required state</td>
            <td className="fw-semibold">{sizes.length ? sizes.join(', ') : '—'}</td>
          </tr>
          <tr>
            <td className="text-muted small">Controlled state</td>
            <td className="fw-semibold">{locked}</td>
          </tr>
          <tr>
            <td className="text-muted small">Renders since mount</td>
            <td className="fw-semibold">{renders}</td>
          </tr>
          <tr>
            <td className="text-muted small">Submits that got through</td>
            <td className="fw-semibold">{sent}</td>
          </tr>
        </tbody>
      </table>

      <div className="d-flex gap-2">
        <DButton type="submit" text="Submit" />
        <DButton type="reset" variant="outline" text="Reset" />
        <DButton variant="link" text="Force a re-render" onClick={rerender} />
      </div>
    </form>
  );
}

/**
 * A native form reset, which is the one interaction React controlled inputs do
 * not hear about on their own.
 *
 * The browser restores the inputs to what they were at mount, but fires no
 * `change` — so a group that does not handle it keeps the old selection in
 * state while the DOM shows the new one. Three things to try here:
 *
 * 1. **Change the first group, then Reset.** It returns to `linen`, *and* the
 *    readout follows — the group reports the reset through `onChange`.
 * 2. **Then press "Force a re-render".** The selection stays put. Without the
 *    reset handling, this is where the old value comes back and quietly undoes
 *    the reset.
 * 3. **Tick a size, Submit (it goes through), then Reset and Submit again.**
 *    The second submit is blocked: the group-level constraint came back when
 *    the reset emptied it. Without the fix the form would submit with nothing
 *    chosen.
 *
 * The third group is controlled, so the reset leaves it alone — the value is
 * the consumer's, and a reset is not their decision to change it.
 */
export const FormReset: Story = {
  name: 'Form reset',
  args: { label: 'Uncontrolled', options: MATERIALS.slice(0, 4) },
  render: () => <ResetDemo />,
  parameters: {
    docs: {
      source: {
        code: `function ResetDemo() {
  const [material, setMaterial] = useState('linen');
  const [locked, setLocked] = useState('cotton');
  const [sizes, setSizes] = useState<string[]>([]);

  return (
    <form onSubmit={onSubmit}>
      {/* Uncontrolled: a reset returns it to defaultValue and reports it. */}
      <DChoiceGroup
        label="Uncontrolled"
        options={MATERIALS}
        defaultValue="linen"
        onChange={setMaterial}
      />

      {/* Required: the group constraint comes back when a reset empties it. */}
      <DChoiceGroup
        multiple
        required
        requiredMessage="Pick at least one size"
        label="Required multi-select"
        options={SIZES}
        onChange={setSizes}
      />

      {/* Controlled: the value is yours, so the reset leaves it alone. */}
      <DChoiceGroup
        label="Controlled"
        options={MATERIALS}
        value={locked}
        onChange={setLocked}
      />

      <DButton type="submit" text="Submit" />
      <DButton type="reset" variant="outline" text="Reset" />
    </form>
  );
}`,
        language: 'tsx',
        type: 'code',
      },
    },
  },
};

function Filters() {
  const [material, setMaterial] = useState('linen');
  const [sizes, setSizes] = useState<string[]>(['m']);

  return (
    <div className="d-flex flex-column gap-4" style={{ width: 560 }}>
      <DChoiceGroup
        label="Main material"
        options={MATERIALS}
        value={material}
        onChange={setMaterial}
        optionsClassName="grid gap-2"
        optionClassName="g-col-4"
      />

      <DChoiceGroup
        multiple
        label="Available sizes"
        hint="Pick every one that applies"
        options={[
          { value: 'xs', label: 'XS' },
          { value: 's', label: 'S' },
          { value: 'm', label: 'M' },
          { value: 'l', label: 'L' },
          { value: 'xl', label: 'XL' },
        ]}
        value={sizes}
        onChange={setSizes}
      />

      <p className="text-muted small m-0">
        {`${material} · ${sizes.length ? sizes.join(', ').toUpperCase() : 'no size'}`}
      </p>
    </div>
  );
}

/**
 * Both shapes on one screen, each driving its own state: a single-select grid
 * for the material, a multi-select row for the sizes.
 *
 * Note the two `onChange` signatures — `string` for the first, `string[]` for
 * the second. TypeScript picks the right one from `multiple`.
 */
export const FiltersExample: Story = {
  name: 'Filters',
  args: { label: 'Main material', options: MATERIALS },
  render: () => <Filters />,
  parameters: {
    docs: {
      source: {
        code: `function Filters() {
  const [material, setMaterial] = useState('linen');
  const [sizes, setSizes] = useState<string[]>(['m']);

  return (
    <div className="d-flex flex-column gap-4" style={{ width: 560 }}>
      <DChoiceGroup
        label="Main material"
        options={MATERIALS}
        value={material}
        onChange={setMaterial}        // (value: string) => void
        optionsClassName="grid gap-2" // the layout is yours
        optionClassName="g-col-4"
      />

      <DChoiceGroup
        multiple
        label="Available sizes"
        hint="Pick every one that applies"
        options={[
          { value: 'xs', label: 'XS' },
          { value: 's', label: 'S' },
          { value: 'm', label: 'M' },
          { value: 'l', label: 'L' },
          { value: 'xl', label: 'XL' },
        ]}
        value={sizes}
        onChange={setSizes}           // (value: string[]) => void
      />

      <p className="text-muted small m-0">
        {\`\${material} · \${sizes.length ? sizes.join(', ').toUpperCase() : 'no size'}\`}
      </p>
    </div>
  );
}`,
        language: 'tsx',
        type: 'code',
      },
    },
  },
};
