// DButton.stories.tsx

import { Meta, StoryObj } from '@storybook/react-vite';
import DButton from '../../src/components/DButton/DButton';
import { DContextProvider } from '../../src';
import { PREFIX_BS } from '../../src/components/config';
import {
  COMPONENT_SIZE,
  CONTEXT_PROVIDER_CONFIG_MATERIAL,
  ICONS,
  INPUT_STATE,
  THEMES,
} from '../config/constants';

const meta: Meta<typeof DButton> = {
  title: 'Design System/Components/Button',
  component: DButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Our **DButton** component extends Bootstrap's button system with
design-system–specific theming, palette consistency, and semantic structure.

---

## 💡 Overview

We work with button variables at two levels:

1. **Root variables** for color and theme  
   (\`--bs-primary\`, \`--bs-info\`, …)
2. **Variant-level variables**  
   (\`--bs-btn-primary-color\`, \`--bs-btn-outline-hover-border-color\`, …)
3. **Component-level internal variables**  
   (\`--bs-btn-bg\`, \`--bs-btn-color\`, …)

Our button states use fixed palette shades instead of Bootstrap’s mix-based lightening/darkening system.

---

### 🎨 State Mapping

| State | Default | Hover | Focus | Active | Disabled |
|--------|----------|--------|--------|----------|-----------|
| **Solid** | -500 | -600 | -500 | -700 | -500 |
| **Outline** | Border -500, transparent bg | Border -500, bg -100 | Border -500 | Border -700, bg -100 | Border -500, transparent bg |

---

### 📏 Sizes

Buttons support three sizes:

| Size | Class | Description |
|------|--------|-------------|
| \`sm\` | \`.btn-sm\` | Compact UI |
| \`md\` | *(default)* | Default medium |
| \`lg\` | \`.btn-lg\` | Prominent or CTA button |

---

### 🧩 CSS Variables Reference

For a full reference of default variables, see the [Bootstrap documentation](https://getbootstrap.com/docs/5.3/components/buttons/#css).

| Variable | Scope | Description |
|-----------|--------|-------------|
| \`--${PREFIX_BS}btn-padding-x\` | .btn | Horizontal padding |
| \`--${PREFIX_BS}btn-padding-y\` | .btn | Vertical padding |
| \`--${PREFIX_BS}btn-font-family\` | .btn | Font family |
| \`--${PREFIX_BS}btn-font-size\` | .btn | Font size |
| \`--${PREFIX_BS}btn-border-radius\` | :root | Border radius |
| \`--${PREFIX_BS}btn-lg-padding-x\` | .btn-lg | Large padding X |
| \`--${PREFIX_BS}btn-sm-font-size\` | .btn-sm | Small font size |

---

### 🧱 Material Symbols Integration

To use buttons with Material Symbols, wrap them in a \`<DContextProvider>\`
configured with \`materialStyle: true\`, or use the icon props directly.
        `,
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
      description: 'Button color variant based on the theme palette.',
    },
    size: {
      control: 'select',
      options: COMPONENT_SIZE,
      description: 'Defines the button size (sm, md, lg).',
    },
    variant: {
      control: 'select',
      options: [undefined, 'outline', 'link'],
      description: 'Visual variant of the button.',
    },
    text: {
      control: 'text',
      description: 'The text label displayed inside the button.',
    },
    iconStart: {
      control: 'select',
      options: [undefined, ...ICONS],
      description: 'Optional icon on the left side.',
    },
    iconEnd: {
      control: 'select',
      options: [undefined, ...ICONS],
      description: 'Optional icon on the right side.',
    },
    loading: {
      control: 'boolean',
      table: { defaultValue: { summary: false } },
      description: 'Shows a spinner and disables the button.',
    },
    loadingText: {
      control: 'text',
      description: 'Custom text to display when in loading state.',
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: false } },
      description: 'Disables the button.',
    },
    state: {
      control: 'select',
      options: [undefined, ...INPUT_STATE],
      description: 'Visually reflects the input state (valid, invalid, etc).',
    },
    onClick: {
      action: 'clicked',
    },
  },
};
export default meta;

type Story = StoryObj<typeof DButton>;

//
// ─── BASE VARIANTS ───────────────────────────────────────────────
//

export const ColorVariants: Story = {
  render: () => (
    <>
      <div className="d-flex flex-wrap gap-4">
        {THEMES.map((color) => (
          <DButton key={color} color={color} text={color} />
        ))}
      </div>
      <div className="d-flex flex-wrap gap-4 mt-4">
        {THEMES.map((color) => (
          <DButton key={color} variant="outline" color={color} text={color} />
        ))}
      </div>
      <div className="d-flex flex-wrap gap-4 mt-4">
        {THEMES.map((color) => (
          <DButton key={color} variant="link" color={color} text={color} />
        ))}
      </div>
    </>
  ),
};

export const LoadingState: Story = {
  render: () => (
    <div className="d-flex flex-column gap-4">
      <div className="d-flex flex-wrap gap-4">
        {THEMES.map((color) => (
          <DButton key={color} color={color} text={color} loading />
        ))}
      </div>
      <div className="d-flex flex-wrap gap-4">
        {THEMES.map((color) => (
          <DButton
            key={color}
            color={color}
            text={color}
            variant="outline"
            loading
          />
        ))}
      </div>
    </div>
  ),
};

export const LoadingWithCustomText: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-4">
      <DButton
        color="primary"
        text="Primary"
        loading
        loadingText="Saving..."
      />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="d-flex gap-4">
      <DButton
        color="danger"
        text="Delete"
        iconStart="trash"
      />
      <DButton
        color="primary"
        text="Primary"
        iconEnd="chevron-right"
      />
    </div>
  ),
  args: {
    color: 'primary',
    text: 'Primary',
    iconEnd: 'chevron-right',
  },
};

export const SecondaryOutline: Story = {
  args: {
    color: 'secondary',
    text: 'Secondary',
    variant: 'outline',
  },
};

export const SecondaryOutlineIconRight: Story = {
  args: {
    color: 'secondary',
    text: 'Secondary',
    variant: 'outline',
    iconEnd: 'chevron-right',
  },
};

export const Link: Story = {
  args: {
    color: 'secondary',
    text: 'Link',
    variant: 'link',
  },
};

export const LinkIconRight: Story = {
  args: {
    color: 'secondary',
    text: 'Link',
    variant: 'link',
    iconEnd: 'chevron-right',
  },
};

//
// ─── SIZE VARIANTS ───────────────────────────────────────────────
//

export const SizeVariants: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-2 align-items-center">
      <DButton color="primary" size="sm" text="Small" />
      <DButton color="primary" text="Medium" />
      <DButton color="primary" size="lg" text="Large" />
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Shows button size variations.' } },
  },
};

export const OutlineSizes: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-2 align-items-center">
      <DButton color="secondary" size="sm" variant="outline" text="Small" />
      <DButton color="secondary" variant="outline" text="Medium" />
      <DButton color="secondary" size="lg" variant="outline" text="Large" />
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Outline variant with size options.' } },
  },
};

export const LinkSizes: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-2 align-items-center">
      <DButton color="primary" size="sm" variant="link" text="Small" />
      <DButton color="primary" variant="link" text="Medium" />
      <DButton color="primary" size="lg" variant="link" text="Large" />
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Link variant with different sizes.' } },
  },
};

//
// ─── MATERIAL STYLE VARIANTS ─────────────────────────────────────
//

export const MaterialButtons: Story = {
  render: () => (
    <DContextProvider {...CONTEXT_PROVIDER_CONFIG_MATERIAL}>
      <div className="d-flex flex-wrap gap-2 align-items-center">
        <DButton color="primary" size="sm" iconEnd="chevron_right" text="Small" />
        <DButton color="primary" iconEnd="chevron_right" text="Medium" />
        <DButton color="primary" size="lg" iconEnd="chevron_right" text="Large" />
      </div>
    </DContextProvider>
  ),
  parameters: {
    docs: { description: { story: 'Material-style buttons in all sizes.' } },
  },
};
