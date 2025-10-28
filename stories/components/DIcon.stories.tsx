/* eslint-disable @typescript-eslint/no-unused-vars */
import { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';

import {
  DContextProvider,
  DInput,
} from '../../src';
import {
  PREFIX_BS,
} from '../../src/components/config';
import DIcon from '../../src/components/DIcon/DIcon';
import {
  CONTEXT_PROVIDER_CONFIG_MATERIAL,
  THEMES,
} from '../config/constants';

const meta: Meta<typeof DIcon> = {
  title: 'Design System/Components/Icon',
  component: DIcon,
  parameters: {
    docs: {
      description: {
        component: `
Icon component powered by [Lucide Icons](https://lucide.dev).

Lucide provides a comprehensive set of beautiful, consistent icons with excellent React integration.
The component also maintains backward compatibility with Material Design icons.

## Features

- **Lucide Icons**: Modern, consistent icon library with 1000+ icons
- **Material Design Support**: Full backward compatibility via \`materialStyle\` prop
- **Customizable**: Control size, color, stroke width
- **Accessible**: Built with accessibility in mind
- **TypeScript**: Full type safety

## CSS Variables

| Variable                            | Class   | Type            | Description                           |
|-------------------------------------|---------|-----------------|---------------------------------------|
| --${PREFIX_BS}icon-component-color  | .d-icon | css color unit  | The icon color                        |
| --${PREFIX_BS}icon-component-bg-color | .d-icon | css color unit  | The icon background color (for circles) |
| --${PREFIX_BS}icon-component-size   | .d-icon | css length unit | The size of icon                      |
| --${PREFIX_BS}icon-component-padding | .d-icon | css length unit | The padding for circle background    |

> The colors can ref another css var like a var(--${PREFIX_BS}primary)

## Finding Icons

Browse all available Lucide icons at: https://lucide.dev/icons/

Icon names use **PascalCase** (e.g., \`Home\`, \`Settings\`, \`User\`)

## Migration Guide

See [ICON_MIGRATION_GUIDE.md](/?path=/docs/icon-migration-guide) for migrating from Bootstrap Icons.
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
    icon: {
      control: 'text',
      type: { name: 'string', required: true },
      description: 'Icon name in PascalCase (e.g., Home, Settings, User)',
    },
    color: {
      control: 'select',
      options: [undefined, ...THEMES],
      type: 'string',
      description: 'Color of the icon (theme-based)',
    },
    size: {
      type: 'string',
      control: 'text',
      description: 'Size of the icon in css length unit or number',
      table: { defaultValue: { summary: '24' } },
    },
    strokeWidth: {
      type: 'number',
      control: 'number',
      description: 'Stroke width of the icon (Lucide only)',
      table: { defaultValue: { summary: '2' } },
    },
    hasCircle: {
      type: 'boolean',
      control: 'boolean',
      description: 'Add circle background around the icon',
      table: { defaultValue: { summary: 'false' } },
    },
    materialStyle: {
      type: 'boolean',
      control: 'boolean',
      description: 'Use Material Design icons instead of Lucide',
      table: { defaultValue: { summary: 'false' } },
    },
    familyClass: {
      type: 'string',
      description: 'Icon font family class (for Material Design or custom icon sets)',
      table: { defaultValue: { summary: 'material-symbols-outlined' } },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DIcon>;

export const Default: Story = {
  args: {
    icon: 'Map',
    size: '120px',
  },
};

export const CommonIcons: Story = {
  render: () => (
    <div style={{
      display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center',
    }}
    >
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Home" size="24px" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Home</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Settings" size="24px" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Settings</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="User" size="24px" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>User</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Mail" size="24px" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Mail</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Bell" size="24px" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Bell</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Search" size="24px" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Search</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Calendar" size="24px" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Calendar</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Heart" size="24px" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Heart</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Star" size="24px" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Star</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Download" size="24px" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Download</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Upload" size="24px" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Upload</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Trash2" size="24px" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Trash2</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Most commonly used Lucide icons. Browse all icons at https://lucide.dev/icons/',
      },
    },
  },
};

export const WithColors: Story = {
  render: () => (
    <div style={{
      display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center',
    }}
    >
      {THEMES.map((theme) => (
        <div key={theme} style={{ textAlign: 'center' }}>
          <DIcon icon="CircleCheck" size="24px" color={theme} />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>{theme}</div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons with different theme colors.',
      },
    },
  },
};

export const WithCircle: Story = {
  render: () => (
    <div style={{
      display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center',
    }}
    >
      <DIcon icon="Check" color="success" hasCircle />
      <DIcon icon="X" color="danger" hasCircle />
      <DIcon icon="Info" color="info" hasCircle />
      <DIcon icon="AlertTriangle" color="warning" hasCircle />
      <DIcon icon="HelpCircle" color="primary" hasCircle />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons with circular backgrounds.',
      },
    },
  },
};

export const StrokeWidthVariants: Story = {
  render: () => (
    <div style={{
      display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center',
    }}
    >
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Heart" size="24px" strokeWidth={1} />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Thin (1)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Heart" size="24px" strokeWidth={1.5} />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Light (1.5)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Heart" size="24px" strokeWidth={2} />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Regular (2)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Heart" size="24px" strokeWidth={2.5} />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Medium (2.5)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Heart" size="24px" strokeWidth={3} />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>Bold (3)</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Control the stroke width of Lucide icons.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <DIcon icon="Sparkles" size="24px" />
      <DIcon icon="Sparkles" size="32px" />
      <DIcon icon="Sparkles" size="24px" />
      <DIcon icon="Sparkles" size="64px" />
      <DIcon icon="Sparkles" size="96px" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icons in different sizes.',
      },
    },
  },
};

/**
 * To use icons with Material Symbols style configuration use the `materialStyle` prop
 * or configure globally via `DContextProvider`
 */
export const MaterialDesignIcons: Story = {
  render: (args: ComponentProps<typeof DIcon>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <div style={{
        display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center',
      }}
      >
        <div style={{ textAlign: 'center' }}>
          <DIcon icon="home" size="24px" />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>home</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <DIcon icon="settings" size="24px" />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>settings</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <DIcon icon="person" size="24px" />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>person</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <DIcon icon="mail" size="24px" />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>mail</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <DIcon icon="notifications" size="24px" />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>notifications</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <DIcon icon="favorite" size="24px" />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>favorite</div>
        </div>
      </div>
    </DContextProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Material Design icons are still supported for backward compatibility. Use `materialStyle` prop or configure via DContextProvider.',
      },
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

/**
 * Material Design icons can be used with any component that accepts icons
 */
export const MaterialDesignInComponents: StoryObj<typeof DInput> = {
  render: (args: ComponentProps<typeof DInput>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <div style={{
        display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px',
      }}
      >
        <DInput
          iconStart="alternate_email"
          iconEnd="cached"
          placeholder="Email address"
        />
        <DInput
          iconStart="lock"
          iconEnd="visibility"
          type="password"
          placeholder="Password"
        />
      </div>
    </DContextProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Material Design icons integrated with other components.',
      },
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};
