// DButton.stories.tsx

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
    },
    color: {
      control: 'select',
      options: THEMES,
    },
    variant: {
      control: 'select',
      options: [undefined, 'outline', 'link'],
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    className: {
      control: 'text',
      type: 'string',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    iconStart: {
      control: 'select',
      options: [undefined, ...ICONS],
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    iconEnd: {
      control: 'select',
      options: [undefined, ...ICONS],
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    loading: {
      control: 'boolean',
      type: 'boolean',
    },
    loadingText: {
      control: 'text',
      type: 'string',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    size: {
      control: 'select',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    state: {
      control: 'select',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    type: {
      control: 'select',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    stopPropagationEnabled: {
      control: 'boolean',
      type: 'boolean',
    },
    id: {
      control: 'text',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    form: {
      control: 'text',
      table: {
        defaultValue: {
          summary: 'undefined',
        },
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof DButton>;

export const Default: Story = {
  args: {
    text: 'Default',
    color: 'primary',
    variant: undefined,
    loading: false,
    iconEnd: undefined,
    iconStart: undefined,
    type: 'button',
    stopPropagationEnabled: true,
    size: undefined,
    state: undefined,
  },
};

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
      <div className="d-flex flex-wrap gap-4 mb-8">
        {THEMES.map((color) => (
          <DButton key={color} color={color} text={color} loading />
        ))}
      </div>
      <div className="d-flex flex-wrap gap-4 mb-8">
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
      <div className="d-flex flex-wrap gap-4 mb-8">
        {THEMES.map((color) => (
          <DButton
            key={color}
            color={color}
            text={color}
            variant="link"
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
        iconStart="Trash2"
      />
      <DButton
        color="primary"
        text="Primary"
        iconEnd="ChevronRight"
      />
    </div>
  ),
  args: {
    color: 'primary',
    text: 'Primary',
    iconEnd: 'ChevronRight',
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
    iconEnd: 'ChevronRight',
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
    iconEnd: 'ChevronRight',
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
