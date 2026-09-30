import { Meta, StoryObj } from '@storybook/react-vite';

import { DContextProvider } from '../../src';
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

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/chip.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                     | Type       | Description    |
|------------------------------|------------|----------------|
| \`--df-chip-padding-block\`  | css length | Padding block  |
| \`--df-chip-padding-inline\` | css length | Padding inline |
| \`--df-chip-gap\`            | css length | Gap            |
| \`--df-chip-font-size\`      | css length | Font size      |
| \`--df-chip-line-height\`    | number     | Line height    |
| \`--df-chip-radius\`         | css length | Radius         |
| \`--df-chip-border-width\`   | css length | Border width   |
| \`--df-chip-icon-size\`      | css length | Icon size      |

        `,
      },
    },
  },
  argTypes: {
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
    className: {
      control: 'text',
      type: 'string',
      table: { category: 'Appearance' },
    },
    text: {
      control: 'text',
      type: 'string',
      description: 'Text of badge',
      table: { category: 'Content' },
    },
    color: {
      control: 'select',
      type: 'string',
      options: THEMES,
      table: {
        defaultValue: { summary: 'primary' },
        category: 'Appearance',
      },
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
      table: { category: 'Icon' },
    },
    iconFamilyClass: {
      control: 'text',
      type: 'string',
      table: { category: 'Icon' },
    },
    iconFamilyPrefix: {
      control: 'text',
      type: 'string',
      table: { category: 'Icon' },
    },
    iconMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Icon' },
    },
    iconClose: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
      table: { category: 'Icon' },
    },
    iconCloseFamilyClass: {
      control: 'text',
      type: 'string',
      table: { category: 'Icon' },
    },
    iconCloseFamilyPrefix: {
      control: 'text',
      type: 'string',
      table: { category: 'Icon' },
    },
    iconCloseMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Icon' },
    },
    showClose: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
      type: 'boolean',
    },
    closeAriaLabel: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    onClose: {
      action: 'onClose',
      table: { category: 'Events' },
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
    <>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {THEMES.filter((theme) => theme !== 'light').map((theme) => (
          <DChip key={theme} color={theme} text={theme} />
        ))}
      </div>
      <div className="df-mt-4">
        <p className="df-mb-1 df-mt-8 df-fs-body-sm">Light variant (for dark backgrounds)</p>
        <div className="df-p-4 df-rounded-control" style={{ background: 'var(--df-role-primary-base-active, #1a237e)' }}>
          <DChip color="light" text="Light" />
        </div>
      </div>
    </>
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
    icon: 'Star',
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
    icon: 'Tag',
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
        <DChip color="success" text="Star" icon="star" showClose />
        <DChip color="warning" text="Alert" icon="warning" showClose />
        <DChip color="info" text="Info" icon="info" />
      </div>
    </DContextProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chips using Material Icons instead of default Icons.',
      },
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};
