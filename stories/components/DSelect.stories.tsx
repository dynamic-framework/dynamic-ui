import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import DSelect from '../../src/components/DSelect';
import type { DSelectOption } from '../../src/components/DSelect';

const config: Meta<typeof DSelect> = {
  title: 'Design System/Components/Select',
  component: DSelect,
  parameters: {
    docs: {
      description: {
        component: `
A combobox: a box you can type in that filters a list, taking one answer or
several.

## Why it is not \`react-select\` any more

2.x wrapped it, and the wrapper was mostly an adapter — an \`Omit\` of six props
so they could be renamed, a \`styles\` object overriding the library's inline CSS
back out again, and **eleven exported sub-components** whose only job was to let
an option carry an icon or an emoji. The markup belonged to the library, so the
design system could decide what an option was painted with but not what it was
made of.

\`\`\`tsx
// 2.x — a component swap to put an icon next to a label
<DSelect components={{ Option: DSelect.OptionIcon, SingleValue: DSelect.SingleValueIconText }} />

// 3.x — the option says it has an icon
<DSelect options={[{ value: 'es', label: 'Spain', icon: 'Flag' }]} />
\`\`\`

An option can carry an \`icon\`, an \`emoji\` and a \`description\`, and
\`renderOption\` is still there for anything genuinely bespoke.

## It is a combobox, and the class names say so

\`.df-select\` was already taken by \`DInputSelect\`, which wraps the native
element. These are two different controls that share a word, so this one is
named for its ARIA pattern: \`.df-combobox-*\`.

## The accessibility is the design

Focus never leaves the text box. The highlighted option is a separate thing the
box points at with \`aria-activedescendant\`, which is the ARIA 1.2 combobox
pattern — and the reason you can type and arrow at the same time.

- **Type** to filter. Accent-insensitive, so "mexico" finds "México".
- **↑ ↓** move the highlight, stepping over disabled options.
- **Home / End** jump to the ends.
- **Enter** chooses; **Escape** closes without choosing.
- **Backspace** removes the last tag when the box is empty.

## Clearing

\`clearable\` adds a cross that empties the control, shown only when there is
something to clear. It is **off by default**: a required field should not offer
a way to put itself back into an invalid state, so it is opt-in per field.

With \`multi\`, every tag also has its own remove button — the cross clears all
of them at once.
- With \`searchable={false}\` the box takes no text and typing jumps by prefix,
  the way a native \`<select>\` does.

## Migrating from 2.x

| 2.x                                   | 3.x                                      |
|---------------------------------------|------------------------------------------|
| \`value={option}\`                    | \`value={option.value}\`                 |
| \`onChange={(opt) => opt.value}\`     | \`onChange={(value, option) => …}\`      |
| \`isMulti\` / \`multi\`               | \`multi\`                                |
| \`isSearchable\` / \`searchable\`     | \`searchable\` (on by default)           |
| \`components={{ Option: … }}\`        | \`renderOption\`                         |
| \`DSelect.OptionIcon\`                | \`option.icon\`                          |
| \`DSelect.OptionEmoji\`               | \`option.emoji\`                         |
| \`DSelect.OptionCheck\`               | automatic when \`multi\`                 |
| \`defaultMenuIsOpen\`                 | \`defaultOpen\`                          |
| \`hideSelectedOptions\`               | — selected options stay, ticked          |

The value is the VALUE now, not the option object — the same shape a native
\`<select>\` has, and one less thing to unwrap at every call site.
        `,
      },
    },
  },
  argTypes: {
    options: { control: 'object', table: { category: 'Content' } },
    value: { control: false, table: { category: 'Content' } },
    defaultValue: { control: false, table: { category: 'Content' } },
    onChange: { action: 'change', table: { category: 'Events' } },
    onSearch: { action: 'search', table: { category: 'Events' } },
    multi: { control: 'boolean', table: { category: 'Behavior' } },
    searchable: { control: 'boolean', table: { category: 'Behavior' } },
    clearable: { control: 'boolean', table: { category: 'Behavior' } },
    closeOnSelect: { control: 'boolean', table: { category: 'Behavior' } },
    defaultOpen: { control: 'boolean', table: { category: 'Behavior' } },
    loading: { control: 'boolean', table: { category: 'State' } },
    disabled: { control: 'boolean', table: { category: 'State' } },
    invalid: { control: 'boolean', table: { category: 'State' } },
    valid: { control: 'boolean', table: { category: 'State' } },
    label: { control: 'text', table: { category: 'Content' } },
    hint: { control: 'text', table: { category: 'Content' } },
    placeholder: { control: 'text', table: { category: 'Content' } },
    name: { control: 'text', table: { category: 'Content' } },
    floatingLabel: { control: 'boolean', table: { category: 'Appearance' } },
    size: {
      control: 'inline-radio',
      options: [undefined, 'sm', 'lg'],
      table: { category: 'Appearance' },
    },
    maxMenuHeight: { control: 'number', table: { category: 'Appearance' } },
    renderOption: { control: false, table: { category: 'Appearance' } },
    filterOption: { control: false, table: { category: 'Behavior' } },
    i18n: { control: 'object', table: { category: 'Accessibility' } },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => <div style={{ minWidth: 320 }}><Story /></div>,
  ],
};

export default config;
type Story = StoryObj<typeof DSelect>;

const COUNTRIES: Array<DSelectOption> = [
  { value: 'ar', label: 'Argentina' },
  { value: 'br', label: 'Brasil' },
  { value: 'cl', label: 'Chile' },
  { value: 'co', label: 'Colombia' },
  { value: 'es', label: 'España' },
  { value: 'mx', label: 'México' },
  { value: 'pe', label: 'Perú' },
  { value: 'uy', label: 'Uruguay' },
];

const ACCOUNTS: Array<DSelectOption> = [
  {
    value: 'checking', label: 'Checking', description: '•••• 4821 · $12,430.55', icon: 'Wallet',
  },
  {
    value: 'savings', label: 'Savings', description: '•••• 9043 · $48,900.00', icon: 'PiggyBank',
  },
  {
    value: 'credit', label: 'Credit card', description: '•••• 1127 · $1,204.30 due', icon: 'CreditCard',
  },
  {
    value: 'closed', label: 'Closed account', description: 'No longer available', icon: 'Ban', disabled: true,
  },
];

const LANGUAGES: Array<DSelectOption> = [
  { value: 'es', label: 'Español', emoji: '🇪🇸' },
  { value: 'en', label: 'English', emoji: '🇬🇧' },
  { value: 'pt', label: 'Português', emoji: '🇧🇷' },
  { value: 'fr', label: 'Français', emoji: '🇫🇷' },
];

const GROUPED = [
  {
    label: 'South America',
    options: COUNTRIES.filter((c) => ['ar', 'br', 'cl', 'co', 'pe', 'uy'].includes(c.value)),
  },
  { label: 'Europe', options: COUNTRIES.filter((c) => c.value === 'es') },
  { label: 'North America', options: COUNTRIES.filter((c) => c.value === 'mx') },
];

export const Default: Story = {
  args: { label: 'Country', options: COUNTRIES, placeholder: 'Search a country…' },
};

export const Selected: Story = {
  args: {
    label: 'Country', options: COUNTRIES, defaultValue: 'cl', clearable: true,
  },
};

/**
 * The reason a combobox exists rather than a `<select>`: eight countries do not
 * need a search box, eighty do.
 */
export const Searching: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Type `mexico` without the accent — the filter folds accents, which in a Spanish-language product is most of the searches people actually make.',
      },
    },
  },
  args: { label: 'Country', options: COUNTRIES, defaultOpen: true },
};

export const WithoutSearch: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The box takes no text and a mobile keyboard will not open, but typing still jumps by prefix the way a native `<select>` does.',
      },
    },
  },
  args: {
    label: 'Country', options: COUNTRIES, searchable: false, defaultValue: 'es',
  },
};

/**
 * Several answers, shown as removable tags. Backspace on an empty box removes
 * the last one.
 */
export const Multiple: Story = {
  args: {
    label: 'Countries',
    options: COUNTRIES,
    multi: true,
    defaultValue: ['cl', 'mx'],
    clearable: true,
  },
};

export const MultipleOpen: Story = {
  args: {
    label: 'Countries',
    options: COUNTRIES,
    multi: true,
    defaultValue: ['cl', 'mx'],
    defaultOpen: true,
  },
};

/**
 * An option describes itself. No sub-component swap, no render prop — `icon`
 * and `description` are fields.
 */
export const RichOptions: Story = {
  args: {
    label: 'Account', options: ACCOUNTS, defaultValue: 'checking', defaultOpen: true,
  },
};

export const EmojiOptions: Story = {
  args: {
    label: 'Language', options: LANGUAGES, defaultValue: 'es', searchable: false,
  },
};

export const Grouped: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A group whose options are all filtered out disappears with them, rather than leaving a heading over nothing.',
      },
    },
  },
  args: { label: 'Country', options: GROUPED, defaultOpen: true },
};

/**
 * `renderOption` for the cases the fields do not cover. It receives the option
 * and whether it is selected, highlighted or disabled.
 */
export const CustomOption: Story = {
  args: {
    label: 'Account',
    options: ACCOUNTS,
    defaultValue: 'savings',
    defaultOpen: true,
    renderOption: (option, state) => (
      <span className="df-flex df-items-center df-gap-3 df-w-full">
        <span
          className="df-flex df-items-center df-justify-center df-rounded-pill df-bg-primary-subtle df-text-primary df-fw-semibold"
          style={{ width: 32, height: 32 }}
        >
          {option.label.charAt(0)}
        </span>
        <span className="df-flex df-flex-col">
          <span className={state.selected ? 'df-fw-semibold' : undefined}>{option.label}</span>
          <span className="df-fs-body-sm df-text-muted">{option.description}</span>
        </span>
      </span>
    ),
  },
};

export const Clearable: Story = {
  args: {
    label: 'Country', options: COUNTRIES, defaultValue: 'br', clearable: true,
  },
};

export const FloatingLabel: Story = {
  args: {
    label: 'Country', options: COUNTRIES, floatingLabel: true, defaultValue: 'uy',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="df-flex df-flex-col df-gap-4">
      <DSelect {...args} size="sm" label="Small" />
      <DSelect {...args} label="Default" />
      <DSelect {...args} size="lg" label="Large" />
    </div>
  ),
  args: { options: COUNTRIES, defaultValue: 'cl' },
};

export const States: Story = {
  render: (args) => (
    <div className="df-flex df-flex-col df-gap-4">
      <DSelect {...args} label="Invalid" invalid hint="Pick a country to continue" defaultValue="" />
      <DSelect {...args} label="Valid" valid defaultValue="cl" />
      <DSelect {...args} label="Disabled" disabled defaultValue="es" />
      <DSelect {...args} label="Loading" loading />
    </div>
  ),
  args: { options: COUNTRIES },
};

/**
 * `onSearch` fires on every keystroke, which is the hook for fetching options
 * from a server. The component does no debouncing — that belongs to whatever is
 * doing the fetching, which is the only thing that knows what it costs.
 */
export const AsyncSearch: Story = {
  render: function Render() {
    const [options, setOptions] = useState<Array<DSelectOption>>([]);
    const [loading, setLoading] = useState(false);

    return (
      <DSelect
        label="Country"
        options={options}
        loading={loading}
        placeholder="Type to search…"
        onSearch={(query) => {
          if (!query) { setOptions([]); return; }
          setLoading(true);
          // Stands in for a request.
          window.setTimeout(() => {
            const needle = query.toLowerCase();
            setOptions(COUNTRIES.filter((c) => c.label.toLowerCase().includes(needle)));
            setLoading(false);
          }, 400);
        }}
        // The list is already filtered by the server; filtering it again would
        // hide results that matched for a reason the client cannot see.
        filterOption={() => true}
      />
    );
  },
};

/**
 * Controlled, which is how a form library will drive it.
 */
export const Controlled: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | null>('cl');
    return (
      <div className="df-flex df-flex-col df-gap-3">
        <DSelect
          label="Country"
          options={COUNTRIES}
          value={value}
          onChange={(next) => setValue(next as string | null)}
          clearable
        />
        <output className="df-fs-body-sm df-text-muted">{`value: ${value ?? 'null'}`}</output>
      </div>
    );
  },
};

/**
 * With a `name`, the control writes hidden inputs so a plain HTML form posts
 * what it shows — one entry per value when `multi`.
 */
export const InAForm: Story = {
  render: () => (
    <form
      className="df-flex df-flex-col df-gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const entries: Record<string, string> = {};
        data.forEach((value, key) => { entries[key] = String(value); });
        // eslint-disable-next-line no-alert
        window.alert(JSON.stringify(entries, null, 2));
      }}
    >
      <DSelect label="Country" name="country" options={COUNTRIES} defaultValue="es" />
      <DSelect label="Languages" name="languages" options={LANGUAGES} multi defaultValue={['es', 'en']} />
      <button type="submit" className="df-button" data-variant="solid" data-color="primary">
        Submit
      </button>
    </form>
  ),
};
