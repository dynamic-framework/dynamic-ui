import { Meta, StoryObj } from '@storybook/react-vite';
import DButton from '../../src/components/DButton/DButton';
import { DContextProvider } from '../../src';
import { PREFIX_BS } from '../../src/components/config';
import {
  CONTEXT_PROVIDER_CONFIG_MATERIAL,
  ICONS,
  THEMES,
} from '../config/constants';

const meta: Meta<typeof DButton> = {
  title: 'Design System/Components/Button',
  component: DButton,
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
    text: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    color: {
      control: 'select',
      options: THEMES,
      type: 'string',
      table: {
        defaultValue: {
          summary: 'primary',
        },
        category: 'Appearance',
      },
    },
    variant: {
      control: 'select',
      options: [undefined, 'outline', 'link'],
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        category: 'Appearance',
      },
    },
    href: {
      control: 'text',
      description: 'If provided, renders as an &lt;a&gt; element instead of &lt;button&gt;.',
      table: { category: 'HTML Attributes' },
    },
    target: {
      control: 'select',
      options: [undefined, '_self', '_blank', '_parent', '_top'],
      description: 'Anchor target when href is set.',
      table: { category: 'HTML Attributes' },
    },
    rel: {
      control: 'text',
      description: 'Anchor rel attribute (use "noopener noreferrer" with target="_blank").',
      table: { category: 'HTML Attributes' },
    },
    className: {
      control: 'text',
      type: 'string',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        category: 'Appearance',
      },
    },
    iconStart: {
      control: 'select',
      options: [undefined, ...ICONS],
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        category: 'Icon',
      },
    },
    iconEnd: {
      control: 'select',
      options: [undefined, ...ICONS],
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        category: 'Icon',
      },
    },
    loading: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    size: {
      control: 'select',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        category: 'Appearance',
      },
    },
    loadingText: {
      control: 'text',
      table: { category: 'Content' },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        category: 'HTML Attributes',
      },
    },
    disabled: {
      type: 'boolean',
      control: 'boolean',
      table: { category: 'Behavior' },
    },
    id: {
      control: 'text',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        category: 'HTML Attributes',
      },
    },
    form: {
      control: 'text',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
        category: 'HTML Attributes',
      },
    },
    value: {
      table: {
        disable: true,
        category: 'HTML Attributes',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof DButton>;

export const Example: Story = {
  args: {
    text: 'Default',
    color: 'primary',
    variant: undefined,
    loading: false,
    loadingText: undefined,
    iconEnd: undefined,
    iconStart: undefined,
    type: 'button',
    size: undefined,
    disabled: false,
  },
};

//
// ─── BASE VARIANTS ───────────────────────────────────────────────
//

export const Default: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-4">
      {THEMES.map((color) => (
        <DButton key={color} color={color} text={color} />
      ))}
    </div>
  ),
};

export const Outline: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-4 mt-4">
      {THEMES.map((color) => (
        <DButton key={color} variant="outline" color={color} text={color} />
      ))}
    </div>
  ),
};

export const Link: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-4 mt-4">
      {THEMES.map((color) => (
        <DButton key={color} variant="link" color={color} text={color} />
      ))}
    </div>
  ),
};

export const AsAnchor: Story = {
  args: {
    text: 'External Link',
    color: 'primary',
    href: 'https://dynamicframework.dev',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
};

export const IconEnd: Story = {
  render: (args) => (
    <div className="d-flex gap-4">
      <DButton {...args} text="Default" />
      <DButton {...args} variant="outline" text="Outline" />
      <DButton {...args} variant="link" text="Link" />
    </div>
  ),
  args: {
    iconEnd: 'ChevronRight',
  },
};

export const IconStart: Story = {
  render: (args) => (
    <div className="d-flex gap-4">
      <DButton {...args} text="Default" />
      <DButton {...args} variant="outline" text="Outline" />
      <DButton {...args} variant="link" text="Link" />
    </div>
  ),
  args: {
    iconStart: 'ChevronLeft',
  },
};

export const LoadingAndLoadingWithText: Story = {
  render: (args) => (
    <div className="d-flex gap-4">
      <DButton {...args} />
      <DButton {...args} loadingText="Loading..." />
    </div>
  ),
  args: {
    text: 'Button',
    loading: true,
  },
};

export const Sizes: Story = {
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

export const ResponsiveSizes: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-2 align-items-center">
      <DButton color="info" size={{ xs: 'sm', md: 'lg' }} text="XS=sm, MD=lg" />
      <DButton color="success" size={{ sm: 'sm', lg: 'lg' }} text="SM=sm, LG=lg" />
      <DButton color="danger" size={{ xs: 'sm', xl: 'lg' }} text="XS=sm, XL=lg" />
      <DButton color="primary" size={{ xs: 'sm', sm: 'md', lg: 'lg' }} text="XS=sm, SM=md, LG=lg" />
      <DButton color="secondary" size="lg" text="Only size fallback" />
      <DButton color="warning" size={{ xs: 'sm', md: 'md', xl: 'lg' }} text="ResponsiveObj" />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
    docs: {
      description: {
        story: 'Ejemplos de uso responsive: cambia el tamaño del botón según el breakpoint. Usa el menú de viewport de Storybook para simular mobile, tablet y desktop.',
      },
    },
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

export const ButtonsWithMaterialIcons: Story = {
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

//
// ─── CUSTOM CHILDREN ─────────────────────────────────────────────
//

export const WithCustomChildren: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-4">
      <DButton color="primary">
        <span>Notifications</span>
        <strong className="ms-2">2</strong>
      </DButton>
      <DButton color="success">
        <span>Messages</span>
        <strong className="ms-2">5</strong>
      </DButton>
      <DButton color="info" variant="outline">
        <span>Balance</span>
        <strong className="ms-2">$1,250.00</strong>
      </DButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons can receive custom children elements instead of text prop for more complex content.',
      },
    },
  },
};
