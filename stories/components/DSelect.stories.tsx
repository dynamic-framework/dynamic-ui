import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import DSelect from '../../src/components/DSelect';
import { PREFIX_BS } from '../../src/components/config';

import type { DSelectOption, DSelectRenderOption } from '../../src/components/DSelect';

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

It used to wrap it, and the wrapper was mostly an adapter — an \`Omit\` of six
props so they could be renamed, a \`styles\` object overriding the library's
inline CSS back out again, and **eleven exported sub-components** whose only job
was to let an option carry an icon or an emoji. The markup belonged to the
library, so the design system could decide what an option was painted with but
not what it was made of.

\`\`\`tsx
// Before — a component swap to put an icon next to a label
<DSelect components={{ Option: DSelect.OptionIcon, SingleValue: DSelect.SingleValueIconText }} />

// Now — the option says it has an icon
<DSelect options={[{ value: 'es', label: 'Spain', icon: 'Flag' }]} />
\`\`\`

An option can carry an \`icon\`, an \`emoji\` and a \`description\`, and
\`renderOption\` is still there for anything genuinely bespoke.

## It is a combobox, and the class names say so

The \`.d-select__*\` elements the old stylesheet targeted were react-select's
own and no longer exist, so reusing the block would leave an override applying
to half a control. This one is named for its ARIA pattern — \`.d-combobox-*\` —
which also keeps it clear of \`DInputSelect\`, the native \`<select>\`.

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

## Migrating

| Before                                | Now                                      |
|---------------------------------------|------------------------------------------|
| \`value={option}\`                    | \`value={option.value}\`                 |
| \`onChange={(opt) => opt.value}\`     | \`onChange={(value, option) => …}\`      |
| \`defaultValue={option}\`             | \`defaultValue={option.value}\`          |
| \`components={{ Option: … }}\`        | \`renderOption\`                         |
| \`DSelect.OptionIcon\`                | \`option.icon\`                          |
| \`DSelect.OptionEmoji\`               | \`option.emoji\`                         |
| \`DSelect.OptionCheck\`               | automatic when \`multi\`                 |
| \`defaultMenuIsOpen\`                 | \`defaultOpen\`                          |
| \`inputId\`                           | \`id\` — the input is ours now           |
| \`hideSelectedOptions\`               | — selected options stay, ticked          |
| \`iconStart\` / \`iconEnd\`           | — the control is no longer an input group |

The value is the VALUE now, not the option object — the same shape a native
\`<select>\` has, and one less thing to unwrap at every call site.

## CSS Variables

Every value resolves through a Bootstrap form variable, so a combobox sits in
the same form beside a \`DInput\` and nothing about it says it came from
somewhere else: change \`$input-padding-y\` and both move.

The menu is portalled out of the control, so its variables are declared on
\`.d-combobox-menu\` rather than inherited from \`.d-combobox\`.

| Variable                                            | Class            | Type            | Description                                 |
|-----------------------------------------------------|------------------|-----------------|---------------------------------------------|
| --${PREFIX_BS}combobox-gap                          | .d-combobox      | css length unit | Space between tags, input and indicators    |
| --${PREFIX_BS}combobox-padding-y                    | .d-combobox      | css length unit | Control vertical padding                    |
| --${PREFIX_BS}combobox-padding-x                    | .d-combobox      | css length unit | Control horizontal padding                  |
| --${PREFIX_BS}combobox-min-height                   | .d-combobox      | css length unit | Control minimum height                      |
| --${PREFIX_BS}combobox-font-size                    | .d-combobox      | css length unit | Control font size                           |
| --${PREFIX_BS}combobox-color                        | .d-combobox      | css color unit  | Control text color                          |
| --${PREFIX_BS}combobox-bg                           | .d-combobox      | css color unit  | Control background color                    |
| --${PREFIX_BS}combobox-placeholder-color            | .d-combobox      | css color unit  | Placeholder color                           |
| --${PREFIX_BS}combobox-border-width                 | .d-combobox      | css length unit | Control border width                        |
| --${PREFIX_BS}combobox-border-color                 | .d-combobox      | css color unit  | Control border color                        |
| --${PREFIX_BS}combobox-border-radius                | .d-combobox      | css length unit | Control border radius                       |
| --${PREFIX_BS}combobox-hover-border-color           | .d-combobox      | css color unit  | Control border color on hover               |
| --${PREFIX_BS}combobox-focus-border-color           | .d-combobox      | css color unit  | Control border color on focus               |
| --${PREFIX_BS}combobox-focus-box-shadow             | .d-combobox      | css shadow      | Control shadow on focus                     |
| --${PREFIX_BS}combobox-transition                   | .d-combobox      | css transition  | Control transition                          |
| --${PREFIX_BS}combobox-disabled-color               | .d-combobox      | css color unit  | Disabled text color                         |
| --${PREFIX_BS}combobox-disabled-bg                  | .d-combobox      | css color unit  | Disabled background color                   |
| --${PREFIX_BS}combobox-disabled-border-color        | .d-combobox      | css color unit  | Disabled border color                       |
| --${PREFIX_BS}combobox-indicator-color              | .d-combobox      | css color unit  | Chevron color                               |
| --${PREFIX_BS}combobox-indicator-size               | .d-combobox      | css length unit | Chevron size                                |
| --${PREFIX_BS}combobox-clear-color                  | .d-combobox      | css color unit  | Clear button color                          |
| --${PREFIX_BS}combobox-clear-hover-color            | .d-combobox      | css color unit  | Clear button color on hover                 |
| --${PREFIX_BS}combobox-clear-size                   | .d-combobox      | css length unit | Clear button icon size                      |
| --${PREFIX_BS}combobox-tag-gap                      | .d-combobox      | css length unit | Space inside a tag                          |
| --${PREFIX_BS}combobox-tag-padding-y                | .d-combobox      | css length unit | Tag vertical padding                        |
| --${PREFIX_BS}combobox-tag-padding-x                | .d-combobox      | css length unit | Tag horizontal padding                      |
| --${PREFIX_BS}combobox-tag-font-size                | .d-combobox      | css length unit | Tag font size                               |
| --${PREFIX_BS}combobox-tag-color                    | .d-combobox      | css color unit  | Tag text color                              |
| --${PREFIX_BS}combobox-tag-bg                       | .d-combobox      | css color unit  | Tag background color                        |
| --${PREFIX_BS}combobox-tag-border-radius            | .d-combobox      | css length unit | Tag border radius                           |
| --${PREFIX_BS}combobox-tag-remove-color             | .d-combobox      | css color unit  | Tag remove button color                     |
| --${PREFIX_BS}combobox-tag-remove-hover-color       | .d-combobox      | css color unit  | Tag remove button color on hover            |
| --${PREFIX_BS}combobox-tag-remove-hover-bg          | .d-combobox      | css color unit  | Tag remove button background on hover       |
| --${PREFIX_BS}combobox-floating-label-color         | .d-combobox      | css color unit  | Floating label color                        |
| --${PREFIX_BS}combobox-floating-label-opacity       | .d-combobox      | number          | Floating label opacity once floated         |
| --${PREFIX_BS}combobox-menu-z-index                 | .d-combobox-menu | number          | Menu stacking order                         |
| --${PREFIX_BS}combobox-menu-padding                 | .d-combobox-menu | css length unit | Menu padding                                |
| --${PREFIX_BS}combobox-menu-color                   | .d-combobox-menu | css color unit  | Menu text color                             |
| --${PREFIX_BS}combobox-menu-bg                      | .d-combobox-menu | css color unit  | Menu background color                       |
| --${PREFIX_BS}combobox-menu-border-width            | .d-combobox-menu | css length unit | Menu border width                           |
| --${PREFIX_BS}combobox-menu-border-color            | .d-combobox-menu | css color unit  | Menu border color                           |
| --${PREFIX_BS}combobox-menu-border-radius           | .d-combobox-menu | css length unit | Menu border radius                          |
| --${PREFIX_BS}combobox-menu-shadow                  | .d-combobox-menu | css shadow      | Menu shadow                                 |
| --${PREFIX_BS}combobox-option-gap                   | .d-combobox-menu | css length unit | Space between an option's parts             |
| --${PREFIX_BS}combobox-option-padding-y             | .d-combobox-menu | css length unit | Option vertical padding                     |
| --${PREFIX_BS}combobox-option-padding-x             | .d-combobox-menu | css length unit | Option horizontal padding                   |
| --${PREFIX_BS}combobox-option-border-radius         | .d-combobox-menu | css length unit | Option border radius                        |
| --${PREFIX_BS}combobox-option-color                 | .d-combobox-menu | css color unit  | Option text color                           |
| --${PREFIX_BS}combobox-option-description-color     | .d-combobox-menu | css color unit  | Option description color                    |
| --${PREFIX_BS}combobox-option-active-bg             | .d-combobox-menu | css color unit  | Highlighted option background               |
| --${PREFIX_BS}combobox-option-selected-color        | .d-combobox-menu | css color unit  | Selected option text color                  |
| --${PREFIX_BS}combobox-option-selected-bg           | .d-combobox-menu | css color unit  | Selected option background                  |
| --${PREFIX_BS}combobox-option-selected-font-weight  | .d-combobox-menu | css font weight | Selected option font weight                 |
| --${PREFIX_BS}combobox-option-disabled-color        | .d-combobox-menu | css color unit  | Disabled option text color                  |
| --${PREFIX_BS}combobox-option-icon-size             | .d-combobox-menu | css length unit | Option icon size                            |
| --${PREFIX_BS}combobox-group-label-color            | .d-combobox-menu | css color unit  | Group heading color                         |
| --${PREFIX_BS}combobox-group-label-font-size        | .d-combobox-menu | css length unit | Group heading font size                     |
| --${PREFIX_BS}combobox-empty-color                  | .d-combobox-menu | css color unit  | "No options" text color                     |
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
    id: { control: 'text', table: { category: 'HTML Attributes' } },
    name: { control: 'text', table: { category: 'HTML Attributes' } },
    label: {
      control: 'text',
      description: 'Label of the control; accepts any ReactNode. A text label is also the accessible name; a non-text label needs ariaLabel or ariaLabelledBy.',
      table: { category: 'Content', type: { summary: 'ReactNode' } },
    },
    ariaLabel: { control: 'text', table: { category: 'Accessibility' } },
    ariaLabelledBy: { control: 'text', table: { category: 'Accessibility' } },
    hint: { control: 'text', table: { category: 'Content' } },
    placeholder: { control: 'text', table: { category: 'Content' } },
    floatingLabel: { control: 'boolean', table: { category: 'Appearance' } },
    size: {
      control: 'inline-radio',
      options: [undefined, 'sm', 'lg'],
      table: { category: 'Appearance' },
    },
    className: { control: 'text', table: { category: 'Appearance' } },
    menuClassName: { control: 'text', table: { category: 'Appearance' } },
    style: { control: 'object', table: { category: 'Appearance' } },
    maxMenuHeight: { control: 'number', table: { category: 'Appearance' } },
    renderOption: { control: false, table: { category: 'Appearance' } },
    filterOption: { control: false, table: { category: 'Behavior' } },
    i18n: { control: 'object', table: { category: 'Accessibility' } },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ minWidth: 320, minHeight: 360 }}>
        <Story />
      </div>
    ),
  ],
};

export default config;

// Bound to `string` so the stories' args carry the value type a consumer's
// options would give them. Left open, Storybook widens `Value` to the whole
// `string | number` constraint, and `renderAccountOption` below — typed the
// way a consumer would type it — stops fitting.
type Story = StoryObj<typeof DSelect<string>>;

/* --- the data the examples use ------------------------------------------- */

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

/**
 * Cities per country, for the dependent pair below. A plain lookup, because
 * the point of that example is the parent swapping one list for another.
 */
const CITIES: Record<string, Array<DSelectOption>> = {
  cl: [
    { value: 'scl', label: 'Santiago' },
    { value: 'vap', label: 'Valparaíso' },
    { value: 'ccp', label: 'Concepción' },
  ],
  es: [
    { value: 'mad', label: 'Madrid' },
    { value: 'bcn', label: 'Barcelona' },
    { value: 'svq', label: 'Sevilla' },
  ],
  mx: [
    { value: 'cmx', label: 'Ciudad de México' },
    { value: 'gdl', label: 'Guadalajara' },
    { value: 'mty', label: 'Monterrey' },
  ],
};

const COUNTRIES_WITH_CITIES = COUNTRIES.filter((country) => country.value in CITIES);

const GROUPED = [
  {
    label: 'South America',
    options: COUNTRIES.filter((c) => ['ar', 'br', 'cl', 'co', 'pe', 'uy'].includes(c.value)),
  },
  { label: 'Europe', options: COUNTRIES.filter((c) => c.value === 'es') },
  { label: 'North America', options: COUNTRIES.filter((c) => c.value === 'mx') },
];

/**
 * A bespoke option: an initial in a circle, then the name over the balance.
 *
 * Declared here rather than inline in the story's `renderOption` prop because
 * the function IS the example — it is what a consumer copies when the `icon`,
 * `emoji` and `description` fields are not enough. Buried in a prop it reads
 * as the story's plumbing instead of the thing being shown.
 */
const renderAccountOption: DSelectRenderOption = (option, state) => (
  <span className="d-flex align-items-center gap-3 w-100">
    <span
      className="d-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary fw-semibold"
      style={{ width: 32, height: 32 }}
    >
      {option.label.charAt(0)}
    </span>
    <span className="d-flex flex-column">
      <span className={state.selected ? 'fw-semibold' : undefined}>{option.label}</span>
      <span className="small text-secondary">{option.description}</span>
    </span>
  </span>
);

/* --- docs source ----------------------------------------------------------
 *
 * Storybook writes a story's snippet from what it renders, which for these is
 * `<DSelect {...args} />` with the data serialised into it and every function
 * prop reduced to `() => {}`. The docs page is what a consumer reads to learn
 * the component, so each story states its own source in full — including the
 * constant it selects over, which otherwise appears from nowhere.
 */

const COUNTRIES_SOURCE = `const COUNTRIES = [
  { value: 'ar', label: 'Argentina' },
  { value: 'br', label: 'Brasil' },
  { value: 'cl', label: 'Chile' },
  { value: 'co', label: 'Colombia' },
  { value: 'es', label: 'España' },
  { value: 'mx', label: 'México' },
  { value: 'pe', label: 'Perú' },
  { value: 'uy', label: 'Uruguay' },
];`;

const ACCOUNTS_SOURCE = `const ACCOUNTS = [
  { value: 'checking', label: 'Checking', description: '•••• 4821 · $12,430.55', icon: 'Wallet' },
  { value: 'savings', label: 'Savings', description: '•••• 9043 · $48,900.00', icon: 'PiggyBank' },
  { value: 'credit', label: 'Credit card', description: '•••• 1127 · $1,204.30 due', icon: 'CreditCard' },
  { value: 'closed', label: 'Closed account', description: 'No longer available', icon: 'Ban', disabled: true },
];`;

const LANGUAGES_SOURCE = `const LANGUAGES = [
  { value: 'es', label: 'Español', emoji: '🇪🇸' },
  { value: 'en', label: 'English', emoji: '🇬🇧' },
  { value: 'pt', label: 'Português', emoji: '🇧🇷' },
  { value: 'fr', label: 'Français', emoji: '🇫🇷' },
];`;

const GROUPED_SOURCE = `const GROUPED = [
  {
    label: 'South America',
    options: [
      { value: 'ar', label: 'Argentina' },
      { value: 'br', label: 'Brasil' },
      { value: 'cl', label: 'Chile' },
      { value: 'co', label: 'Colombia' },
      { value: 'pe', label: 'Perú' },
      { value: 'uy', label: 'Uruguay' },
    ],
  },
  { label: 'Europe', options: [{ value: 'es', label: 'España' }] },
  { label: 'North America', options: [{ value: 'mx', label: 'México' }] },
];`;

const CITIES_SOURCE = `const CITIES: Record<string, Array<DSelectOption>> = {
  cl: [
    { value: 'scl', label: 'Santiago' },
    { value: 'vap', label: 'Valparaíso' },
    { value: 'ccp', label: 'Concepción' },
  ],
  es: [
    { value: 'mad', label: 'Madrid' },
    { value: 'bcn', label: 'Barcelona' },
    { value: 'svq', label: 'Sevilla' },
  ],
  mx: [
    { value: 'cmx', label: 'Ciudad de México' },
    { value: 'gdl', label: 'Guadalajara' },
    { value: 'mty', label: 'Monterrey' },
  ],
};

const COUNTRIES_WITH_CITIES = COUNTRIES.filter((country) => country.value in CITIES);`;

const RENDER_ACCOUNT_OPTION_SOURCE = `import type { DSelectRenderOption } from '@dynamic-framework/ui-react';

const renderAccountOption: DSelectRenderOption = (option, state) => (
  <span className="d-flex align-items-center gap-3 w-100">
    <span
      className="d-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary fw-semibold"
      style={{ width: 32, height: 32 }}
    >
      {option.label.charAt(0)}
    </span>
    <span className="d-flex flex-column">
      <span className={state.selected ? 'fw-semibold' : undefined}>{option.label}</span>
      <span className="small text-secondary">{option.description}</span>
    </span>
  </span>
);`;

/**
 * Builds a story's `parameters`, with the full example as its source.
 *
 * `type: 'code'` is what stops the docs addon from replacing the snippet with
 * its own render of the story.
 */
function docs(code: string, story?: string) {
  return {
    docs: {
      ...story && { description: { story } },
      source: { code: code.trim(), language: 'tsx', type: 'code' },
    },
  };
}

/* --- stories -------------------------------------------------------------- */

export const Default: Story = {
  args: { label: 'Country', options: COUNTRIES, placeholder: 'Search a country…' },
  parameters: docs(`
${COUNTRIES_SOURCE}

<DSelect
  label="Country"
  options={COUNTRIES}
  placeholder="Search a country…"
/>
  `),
};

export const Selected: Story = {
  args: {
    label: 'Country', options: COUNTRIES, defaultValue: 'cl', clearable: true,
  },
  parameters: docs(`
${COUNTRIES_SOURCE}

<DSelect
  label="Country"
  options={COUNTRIES}
  defaultValue="cl"
  clearable
/>
  `),
};

/**
 * The reason a combobox exists rather than a `<select>`: eight countries do not
 * need a search box, eighty do.
 */
export const Searching: Story = {
  args: { label: 'Country', options: COUNTRIES, defaultOpen: true },
  parameters: docs(
    `
${COUNTRIES_SOURCE}

// \`defaultOpen\` is for documentation and tests — a page should not open a
// menu nobody asked for.
<DSelect
  label="Country"
  options={COUNTRIES}
  defaultOpen
/>
    `,
    'Type `mexico` without the accent — the filter folds accents, which in a Spanish-language product is most of the searches people actually make.',
  ),
};

export const WithoutSearch: Story = {
  args: {
    label: 'Country', options: COUNTRIES, searchable: false, defaultValue: 'es',
  },
  parameters: docs(
    `
${COUNTRIES_SOURCE}

<DSelect
  label="Country"
  options={COUNTRIES}
  defaultValue="es"
  searchable={false}
/>
    `,
    'The box takes no text and a mobile keyboard will not open, but typing still jumps by prefix the way a native `<select>` does.',
  ),
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
  parameters: docs(`
${COUNTRIES_SOURCE}

<DSelect
  label="Countries"
  options={COUNTRIES}
  defaultValue={['cl', 'mx']}
  multi
  clearable
/>
  `),
};

export const MultipleOpen: Story = {
  args: {
    label: 'Countries',
    options: COUNTRIES,
    multi: true,
    defaultValue: ['cl', 'mx'],
    defaultOpen: true,
  },
  parameters: docs(`
${COUNTRIES_SOURCE}

<DSelect
  label="Countries"
  options={COUNTRIES}
  defaultValue={['cl', 'mx']}
  multi
  defaultOpen
/>
  `),
};

/**
 * An option describes itself. No sub-component swap, no render prop — `icon`
 * and `description` are fields.
 */
export const RichOptions: Story = {
  args: {
    label: 'Account', options: ACCOUNTS, defaultValue: 'checking', defaultOpen: true,
  },
  parameters: docs(`
${ACCOUNTS_SOURCE}

<DSelect
  label="Account"
  options={ACCOUNTS}
  defaultValue="checking"
  defaultOpen
/>
  `),
};

export const EmojiOptions: Story = {
  args: {
    label: 'Language', options: LANGUAGES, defaultValue: 'es', searchable: false,
  },
  parameters: docs(`
${LANGUAGES_SOURCE}

<DSelect
  label="Language"
  options={LANGUAGES}
  defaultValue="es"
  searchable={false}
/>
  `),
};

export const Grouped: Story = {
  args: { label: 'Country', options: GROUPED, defaultOpen: true },
  parameters: docs(
    `
${GROUPED_SOURCE}

<DSelect
  label="Country"
  options={GROUPED}
  defaultOpen
/>
    `,
    'A group whose options are all filtered out disappears with them, rather than leaving a heading over nothing.',
  ),
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
    renderOption: renderAccountOption,
  },
  parameters: docs(`
${RENDER_ACCOUNT_OPTION_SOURCE}

${ACCOUNTS_SOURCE}

<DSelect
  label="Account"
  options={ACCOUNTS}
  defaultValue="savings"
  renderOption={renderAccountOption}
  defaultOpen
/>
  `),
};

export const Clearable: Story = {
  args: {
    label: 'Country', options: COUNTRIES, defaultValue: 'br', clearable: true,
  },
  parameters: docs(`
${COUNTRIES_SOURCE}

<DSelect
  label="Country"
  options={COUNTRIES}
  defaultValue="br"
  clearable
/>
  `),
};

export const FloatingLabel: Story = {
  args: {
    label: 'Country', options: COUNTRIES, floatingLabel: true, defaultValue: 'uy',
  },
  parameters: docs(`
${COUNTRIES_SOURCE}

<DSelect
  label="Country"
  options={COUNTRIES}
  defaultValue="uy"
  floatingLabel
/>
  `),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="d-flex flex-column gap-4">
      <DSelect {...args} size="sm" label="Small" />
      <DSelect {...args} label="Default" />
      <DSelect {...args} size="lg" label="Large" />
    </div>
  ),
  args: { options: COUNTRIES, defaultValue: 'cl' },
  parameters: docs(`
${COUNTRIES_SOURCE}

<div className="d-flex flex-column gap-4">
  <DSelect label="Small" options={COUNTRIES} defaultValue="cl" size="sm" />
  <DSelect label="Default" options={COUNTRIES} defaultValue="cl" />
  <DSelect label="Large" options={COUNTRIES} defaultValue="cl" size="lg" />
</div>
  `),
};

export const States: Story = {
  render: (args) => (
    <div className="d-flex flex-column gap-4">
      <DSelect {...args} label="Invalid" invalid hint="Pick a country to continue" />
      <DSelect {...args} label="Valid" valid defaultValue="cl" />
      <DSelect {...args} label="Disabled" disabled defaultValue="es" />
      <DSelect {...args} label="Loading" loading />
    </div>
  ),
  args: { options: COUNTRIES },
  parameters: docs(`
${COUNTRIES_SOURCE}

<div className="d-flex flex-column gap-4">
  <DSelect label="Invalid" options={COUNTRIES} invalid hint="Pick a country to continue" />
  <DSelect label="Valid" options={COUNTRIES} defaultValue="cl" valid />
  <DSelect label="Disabled" options={COUNTRIES} defaultValue="es" disabled />
  <DSelect label="Loading" options={COUNTRIES} loading />
</div>
  `),
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
  parameters: docs(`
import { useState } from 'react';
import { DSelect } from '@dynamic-framework/ui-react';
import type { DSelectOption } from '@dynamic-framework/ui-react';

function CountrySearch() {
  const [options, setOptions] = useState<Array<DSelectOption>>([]);
  const [loading, setLoading] = useState(false);

  return (
    <DSelect
      label="Country"
      options={options}
      loading={loading}
      placeholder="Type to search…"
      onSearch={async (query) => {
        if (!query) { setOptions([]); return; }
        setLoading(true);
        setOptions(await searchCountries(query));
        setLoading(false);
      }}
      // The list is already filtered by the server; filtering it again would
      // hide results that matched for a reason the client cannot see.
      filterOption={() => true}
    />
  );
}
  `),
};

/**
 * Controlled, which is how a form library will drive it.
 */
export const Controlled: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | null>('cl');
    return (
      <div className="d-flex flex-column gap-3">
        <DSelect
          label="Country"
          options={COUNTRIES}
          value={value}
          onChange={(next) => setValue(next as string | null)}
          clearable
        />
        <output className="small text-secondary">{`value: ${value ?? 'null'}`}</output>
      </div>
    );
  },
  parameters: docs(`
import { useState } from 'react';
import { DSelect } from '@dynamic-framework/ui-react';

${COUNTRIES_SOURCE}

function CountryField() {
  const [value, setValue] = useState<string | null>('cl');

  return (
    <div className="d-flex flex-column gap-3">
      <DSelect
        label="Country"
        options={COUNTRIES}
        value={value}
        onChange={(next) => setValue(next as string | null)}
        clearable
      />
      <output className="small text-secondary">{\`value: \${value ?? 'null'}\`}</output>
    </div>
  );
}
  `),
};

/**
 * Both halves owned by the parent: the `value` AND the `options`.
 *
 * Picking a country swaps the city list and drops the city that belonged to
 * the old one. The buttons go further and set both selects at once — country,
 * city list and city in a single update — which is the same thing a form
 * loading a saved record does.
 *
 * Nothing about this is opt-in. A controlled `DSelect` holds no copy of the
 * list or of the choice: it reads what it is given on every render, so the
 * text in the box follows a value whose option only arrives later, and empties
 * itself when the parent swaps a list the value is not in.
 */
export const DrivenByAParent: Story = {
  render: function Render() {
    const [country, setCountry] = useState<string | null>('cl');
    const [city, setCity] = useState<string | null>('scl');

    const cities = country ? CITIES[country] : [];

    return (
      <div className="d-flex flex-column gap-3">
        <DSelect
          label="Country"
          options={COUNTRIES_WITH_CITIES}
          value={country}
          onChange={(next) => {
            setCountry(next as string | null);
            // The chosen city belongs to the country that no longer is.
            setCity(null);
          }}
          clearable
        />
        <DSelect
          label="City"
          options={cities}
          value={city}
          onChange={(next) => setCity(next as string | null)}
          disabled={!country}
          placeholder={country ? 'Choose a city' : 'Choose a country first'}
        />
        <div className="d-flex flex-wrap gap-2">
          <button
            type="button"
            className="btn btn-sm btn-outline-primary"
            onClick={() => { setCountry('es'); setCity('bcn'); }}
          >
            Jump to Barcelona
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-primary"
            onClick={() => { setCountry('mx'); setCity('mty'); }}
          >
            Jump to Monterrey
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => { setCountry(null); setCity(null); }}
          >
            Clear both
          </button>
        </div>
        <output className="small text-secondary">
          {`country: ${country ?? 'null'} · city: ${city ?? 'null'}`}
        </output>
      </div>
    );
  },
  parameters: docs(
    `
import { useState } from 'react';
import { DSelect } from '@dynamic-framework/ui-react';
import type { DSelectOption } from '@dynamic-framework/ui-react';

${COUNTRIES_SOURCE}

${CITIES_SOURCE}

function Destination() {
  const [country, setCountry] = useState<string | null>('cl');
  const [city, setCity] = useState<string | null>('scl');

  const cities = country ? CITIES[country] : [];

  return (
    <div className="d-flex flex-column gap-3">
      <DSelect
        label="Country"
        options={COUNTRIES_WITH_CITIES}
        value={country}
        onChange={(next) => {
          setCountry(next as string | null);
          // The chosen city belongs to the country that no longer is.
          setCity(null);
        }}
        clearable
      />
      <DSelect
        label="City"
        options={cities}
        value={city}
        onChange={(next) => setCity(next as string | null)}
        disabled={!country}
        placeholder={country ? 'Choose a city' : 'Choose a country first'}
      />

      {/* Country, city list and city, all replaced in one update. */}
      <button type="button" onClick={() => { setCountry('es'); setCity('bcn'); }}>
        Jump to Barcelona
      </button>
    </div>
  );
}
    `,
    'Pick a country and the city list below is replaced. The buttons set the country, its city list and the city together, in one update.',
  ),
};

/**
 * With a `name`, the control writes hidden inputs so a plain HTML form posts
 * what it shows — one entry per value when `multi`.
 */
export const InAForm: Story = {
  render: () => (
    <form
      className="d-flex flex-column gap-4"
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
      <DSelect
        label="Languages"
        name="languages"
        options={LANGUAGES}
        multi
        defaultValue={['es', 'en']}
      />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  ),
  parameters: docs(`
${COUNTRIES_SOURCE}

${LANGUAGES_SOURCE}

<form
  className="d-flex flex-column gap-4"
  onSubmit={(event) => {
    event.preventDefault();
    // country: 'es', 'languages[]': ['es', 'en']
    const data = new FormData(event.currentTarget);
  }}
>
  <DSelect label="Country" name="country" options={COUNTRIES} defaultValue="es" />
  <DSelect
    label="Languages"
    name="languages"
    options={LANGUAGES}
    defaultValue={['es', 'en']}
    multi
  />
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  `),
};
