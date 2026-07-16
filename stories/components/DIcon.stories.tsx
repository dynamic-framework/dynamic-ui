/* eslint-disable @typescript-eslint/no-unused-vars */
import { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps, SVGProps } from 'react';

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
  ICONS,
  THEMES,
} from '../config/constants';

const COMMONS_ICONS = {
  NMChevron: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
  NMSmile: (props: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 70 70"
      enableBackground="new 0 0 70 70"
      xmlSpace="preserve"
      fill="currentColor"
      {...props}
    >
      <g>
        <path d="M35,3C17.355,3,3,17.355,3,35s14.355,32,32,32s32-14.355,32-32S52.645,3,35,3z M35,63C19.535,63,7,50.465,7,35
          S19.535,7,35,7s28,12.535,28,28S50.465,63,35,63z"
        />
        <path d="M47.882,46.192c-0.462-0.302-1.081-0.177-1.386,0.284c-2.576,3.905-6.903,6.237-11.576,6.237
          c-4.935,0-9.535-2.656-12.007-6.933c-0.277-0.479-0.891-0.643-1.366-0.366c-0.479,0.276-0.643,0.889-0.366,1.366
          c2.828,4.894,8.093,7.933,13.739,7.933c5.347,0,10.299-2.668,13.246-7.136C48.47,47.117,48.343,46.497,47.882,46.192z"
        />
        <path d="M27.433,35.551c0.196,0.253,0.491,0.385,0.789,0.385c0.215,0,0.432-0.069,0.614-0.212c0.436-0.339,0.513-0.968,0.173-1.403
          l-4.839-6.205c-0.185-0.237-0.468-0.379-0.769-0.385c-0.311-0.005-0.59,0.125-0.783,0.354l-4.715,5.584
          c-0.356,0.422-0.304,1.054,0.118,1.409c0.425,0.358,1.054,0.301,1.409-0.118l3.92-4.643L27.433,35.551z"
        />
        <path d="M46.882,28.085c-0.194-0.229-0.5-0.357-0.783-0.354c-0.301,0.006-0.584,0.147-0.769,0.385l-4.839,6.205
          c-0.34,0.436-0.263,1.064,0.173,1.403c0.183,0.143,0.399,0.212,0.614,0.212c0.298,0,0.593-0.132,0.789-0.385l4.082-5.233
          l3.92,4.643c0.354,0.421,0.984,0.478,1.409,0.118c0.422-0.355,0.475-0.987,0.118-1.409L46.882,28.085z"
        />
        <path d="M18.663,17.111c-0.391-0.391-1.023-0.391-1.414,0c-0.4,0.4-0.785,0.811-1.152,1.229c-0.365,0.415-0.324,1.047,0.091,1.411
          c0.19,0.167,0.426,0.249,0.66,0.249c0.277,0,0.554-0.115,0.751-0.34c0.34-0.387,0.695-0.766,1.064-1.135
          C19.054,18.135,19.054,17.502,18.663,17.111z"
        />
        <path d="M13.483,23.828c-0.5-0.241-1.096-0.029-1.334,0.469c-2.461,5.126-3.184,11.028-2.037,16.621
          c0.097,0.473,0.514,0.799,0.979,0.799c0.066,0,0.134-0.007,0.202-0.021c0.541-0.11,0.89-0.64,0.778-1.181
          c-1.06-5.166-0.392-10.619,1.881-15.354C14.191,24.664,13.981,24.067,13.483,23.828z"
        />
        <path d="M36.573,55.583h-4c-0.553,0-1,0.447-1,1s0.447,1,1,1h4c0.553,0,1-0.447,1-1S37.126,55.583,36.573,55.583z" />
      </g>
    </svg>
  ),
};

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
- **Custom Registry Support**: Plug in shared icon maps through \`iconRegistry\` in \`DContextProvider\`
- **Customizable**: Control size, color, stroke width
- **Accessible**: Built with accessibility in mind
- **TypeScript**: Full type safety

## Custom iconRegistry

You can provide a custom icon map from a shared commons package:

\`\`\`tsx
import { DContextProvider, DIcon } from '@dynamic-framework/ui-react';
import { NMIcons } from '@repo/algo';

<DContextProvider iconRegistry={NMIcons}>
  <DIcon icon="NMChevron" />
</DContextProvider>
\`\`\`

Resolution order:

1. If \`icon\` is an SVG component, it is rendered directly.
2. If \`icon\` is a string and exists in \`iconRegistry\`, it uses the registry component.
3. Otherwise, fallback applies (Lucide / Material / font classes).

## Classnames

| Classname | Purpose | Applied when |
|---|---|---|
| \`.d-icon\` | Base icon container | Always |
| \`.d-icon-has-circle\` | Enables circle background and default opacity variable \`--${PREFIX_BS}icon-component-bg-opacity\` | \`hasCircle\` prop |
| \`.d-icon-color-{theme}\` | Sets icon color and circle bg based on theme (primary, success, info, warning, danger, etc.) | \`color\` prop |

## CSS Variables

| Variable                             | Class                | Type            | Description                                    |
|--------------------------------------|----------------------|-----------------|------------------------------------------------|
| --${PREFIX_BS}icon-component-size    | .d-icon              | css length unit | Icon size                                       |
| --${PREFIX_BS}icon-component-padding | .d-icon              | css length unit | Padding for circle background                   |
| --${PREFIX_BS}icon-component-color   | .d-icon/.d-icon-color-* | css color unit  | Icon color (set via class)                      |
| --${PREFIX_BS}icon-component-bg-color | .d-icon/.d-icon-has-circle | css color unit  | Circle background color (set via class)         |
| --${PREFIX_BS}icon-component-bg-opacity | .d-icon-has-circle | number          | Opacity used in circle bg (default \`.1\`)     |

> Color and circle background are controlled through classnames; variables above are resolved by those classes.

## Finding Icons

Browse all available Lucide icons at: [https://lucide.dev/icons/](https://lucide.dev/icons/)

Icon names use **PascalCase** (e.g., \`Home\`, \`Settings\`, \`User\`)

## Migration Guide

See [ICON_MIGRATION_GUIDE.md](/?path=/docs/icon-migration-guide) for migrating from Bootstrap Icons.
        `,
      },
      controls: {
        exclude: [
          'familyClass',
          'familyPrefix',
          'dataAttributes',
          'materialStyle',
        ],
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      type: 'string',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
    icon: {
      control: 'select',
      options: ['Map', ...ICONS],
      type: { name: 'string', required: true },
      description: 'Icon name in PascalCase (e.g., Home, Settings, User)',
      table: { category: 'Content' },
    },
    color: {
      control: 'select',
      options: [undefined, ...THEMES],
      type: 'string',
      description: 'Color of the icon (theme-based)',
      table: { category: 'Appearance' },
    },
    strokeWidth: {
      type: 'number',
      control: 'number',
      description: 'Stroke width of the icon (Lucide only)',
      table: {
        defaultValue: { summary: '2' },
        category: 'Appearance',
      },
    },
    hasCircle: {
      type: 'boolean',
      control: 'boolean',
      description: 'Add circle background around the icon',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Appearance',
      },
    },
    materialStyle: {
      type: 'boolean',
      control: 'boolean',
      description: 'Use Material Design icons instead of Lucide',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Icon',
      },
    },
    familyClass: {
      type: 'string',
      description: 'Icon font family class (for Material Design or custom icon sets)',
      table: {
        defaultValue: { summary: 'material-symbols-outlined' },
        category: 'Icon',
      },
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
    hasCircle: false,
    className: '',
    strokeWidth: 2,
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
      <DIcon icon="Sparkles" size="48px" />
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

export const WithResponsiveSizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The size property with breakpoints does not work outside of a DContextProvider.',
      },
    },
  },
  decorators: (Story) => (
    <DContextProvider>
      <Story />
    </DContextProvider>
  ),
  args: {
    icon: 'Settings',
    size: {
      xs: '8',
      sm: '16',
      md: '32',
      lg: '64',
      xl: '128',
      xxl: '256',
    },
    useListenerSize: true,
    hasCircle: false,
    strokeWidth: 2,
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
    },
  },
};

export const MaterialDesignIconsWithCircle: Story = {
  render: (args: ComponentProps<typeof DIcon>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <div style={{
        display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center',
      }}
      >
        <div style={{ textAlign: 'center' }}>
          <DIcon hasCircle icon="home" size="24px" />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>home</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <DIcon hasCircle icon="settings" size="24px" />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>settings</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <DIcon hasCircle icon="person" size="24px" />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>person</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <DIcon hasCircle icon="mail" size="24px" />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>mail</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <DIcon hasCircle icon="notifications" size="24px" />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>notifications</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <DIcon hasCircle icon="favorite" size="24px" />
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
    },
  },
};

/**
 * Bootstrap icons style integrated with other components.
 */
export const BootstrapIconsStyle: StoryObj<typeof DInput> = {
  render: () => (
    <DContextProvider
      icon={{
        familyClass: 'bi',
        familyPrefix: 'bi-',
        materialStyle: false,
      }}
    >
      <div style={{
        display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px',
      }}
      >
        <DInput
          iconStart="at"
          iconEnd="arrow-repeat"
          placeholder="Email address"
        />
        <DInput
          iconStart="lock"
          iconEnd="eye"
          type="password"
          placeholder="Password"
        />
      </div>
    </DContextProvider>
  ),
};

export const CustomColorClasses: Story = {
  render: () => (
    <div style={{
      display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap',
    }}
    >
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Heart" size="32px" className="text-pink-500" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>text-pink-500</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Sparkles" size="32px" className="text-purple-500" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>text-purple-500</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Star" size="32px" hasCircle className="bg-pink-500 text-white" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>bg-pink-500 text-white</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DIcon icon="Bolt" size="32px" hasCircle className="bg-purple-500 text-white" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>bg-purple-500 text-white</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples using custom utility classes (e.g., text-pink-500, bg-pink-500). Colors depend on your CSS utility setup.',
      },
    },
  },
};

export const CustomIconRegistry: Story = {
  render: () => (
    <DContextProvider iconRegistry={COMMONS_ICONS}>
      <div style={{
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
      >
        <div style={{ textAlign: 'center' }}>
          <DIcon icon="NMChevron" size="24px" />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>NMChevron (registry)</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <DIcon icon="NMSmile" size="24px" color="success" hasCircle />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>NMSmile (registry)</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <DIcon icon="Home" size="24px" />
          <div style={{ fontSize: '12px', marginTop: '8px' }}>Home (Lucide fallback)</div>
        </div>
      </div>
    </DContextProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Uses `iconRegistry` to resolve string icon names from a shared commons map. Unknown registry names keep using the default fallback (Lucide/Material/font).',
      },
    },
  },
};

export const CustomIconRegistryInInputs: StoryObj<typeof DInput> = {
  render: () => (
    <DContextProvider iconRegistry={COMMONS_ICONS}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '420px',
      }}
      >
        <DInput
          label="Input with iconStart/iconEnd from registry"
          iconStart="NMChevron"
          iconEnd="NMSmile"
          placeholder="Search or type"
          hint="Custom icons are resolved by name through iconRegistry"
        />

        <DInput
          label="Mixed fallback"
          iconStart="NMChevron"
          iconEnd="Search"
          placeholder="Registry + Lucide fallback"
          hint="iconStart comes from registry and iconEnd uses Lucide"
        />
      </div>
    </DContextProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows that `iconRegistry` also applies in components like `DInput` for `iconStart` and `iconEnd`.',
      },
    },
  },
};
