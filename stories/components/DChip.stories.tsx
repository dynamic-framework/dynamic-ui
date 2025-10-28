import { Meta, StoryObj } from '@storybook/react-vite';

import { DContextProvider } from '../../src';
import { PREFIX_BS } from '../../src/components/config';
import DChip from '../../src/components/DChip/DChip';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL, ICONS, THEMES } from '../config/constants';

const config: Meta<typeof DChip> = {
  title: 'Design System/Components/Chip',
  component: DChip,
  parameters: {
    docs: {
      description: {
        component: `
## CSS Variables
| Variable                         | Class   | Type            | Description                      |
|----------------------------------|---------|-----------------|----------------------------------|
| --${PREFIX_BS}chip-bg            | .d-chip | css color unit  | Background color                 |
| --${PREFIX_BS}chip-gap           | .d-chip | css length unit | Separation between chip elements |
| --${PREFIX_BS}chip-color         | .d-chip | css color unit  | Text color                       |
| --${PREFIX_BS}chip-border-radius | .d-chip | css length unit | Border radius                    |
| --${PREFIX_BS}chip-padding-x     | .d-chip | css length unit | Padding horizontal               |
| --${PREFIX_BS}chip-padding-y     | .d-chip | css length unit | Padding vertical                 |
| --${PREFIX_BS}chip-font-size     | .d-chip | css length unit | Font size                        |
| --${PREFIX_BS}chip-font-weight   | .d-chip | css font weight | Font weight                      |
| --${PREFIX_BS}chip-line-height   | .d-chip | css length unit | Line height                      |
        `,
      },
    },
  },
  argTypes: {
    style: {
      control: 'object',
    },
    className: {
      control: 'text',
      type: 'string',
    },
    text: {
      control: 'text',
      type: 'string',
      description: 'Text of badge',
    },
    color: {
      control: 'select',
      type: 'string',
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
      description: 'The color to use.',
    },
    icon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    iconFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
    iconMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
    },
    iconClose: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    iconCloseFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconCloseFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
    iconCloseMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
    },
    showClose: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      type: 'boolean',
    },
    closeAriaLabel: {
      control: 'text',
      type: 'string',
    },
    onClose: {
      action: 'onClose',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DChip>;

export const Default: Story = {
  args: {
    color: 'primary',
    text: 'Chip',
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {THEMES.map((theme) => (
        <DChip key={theme} color={theme} text={theme} />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available color variants for chips.',
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    color: 'primary',
    text: 'Featured',
    icon: 'star-fill',
  },
};

export const WithCloseButton: Story = {
  args: {
    color: 'info',
    text: 'Removable',
    showClose: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Chip with a close button. Click to trigger the onClose event.',
      },
    },
  },
};

export const IconAndClose: Story = {
  args: {
    color: 'success',
    text: 'Tag',
    icon: 'tag',
    showClose: true,
  },
};

export const ChipVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <DChip color="primary" text="Simple" />
        <DChip color="success" text="With Icon" icon="CheckCircle" />
        <DChip color="warning" text="Closeable" showClose />
        <DChip color="danger" text="Complete" icon="XCircle" showClose />
      </div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <DChip color="info" text="Category" icon="Folder" />
        <DChip color="secondary" text="Tag" icon="Tag" showClose />
        <DChip color="dark" text="Label" icon="Bookmark" showClose />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different chip configurations showing icons and close buttons.',
      },
    },
  },
};

export const MaterialIcon: Story = {
  render: () => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <DChip color="primary" text="Fire" icon="local_fire_department" />
        <DChip color="success" text="Star" icon="Star" showClose />
        <DChip color="warning" text="Alert" icon="AlertTriangle" showClose />
        <DChip color="info" text="Info" icon="Info" />
      </div>
    </DContextProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chips using Material Icons instead of Bootstrap Icons.',
      },
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};
