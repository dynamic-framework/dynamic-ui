import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import DCollapse from '../../src/components/DCollapse/DCollapse';
import DIcon from '../../src/components/DIcon';
import { ICONS, CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';
import { DContextProvider } from '../../src';

const config: Meta<typeof DCollapse> = {
  title: 'Design System/Components/Collapse',
  component: DCollapse,
  parameters: {
    docs: {
      description: {
        component: `
## CSS Variables

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/collapse.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                                 | Type           | Description            |
|------------------------------------------|----------------|------------------------|
| \`--df-collapse-bg\`                     | css color      | Background             |
| \`--df-collapse-fg\`                     | css color      | Foreground             |
| \`--df-collapse-radius\`                 | css length     | Radius                 |
| \`--df-collapse-shadow\`                 | css box-shadow | Shadow                 |
| \`--df-collapse-trigger-padding-block\`  | css length     | Trigger padding block  |
| \`--df-collapse-trigger-padding-inline\` | css length     | Trigger padding inline |
| \`--df-collapse-trigger-gap\`            | css length     | Trigger gap            |
| \`--df-collapse-trigger-font-weight\`    | font weight    | Trigger font weight    |
| \`--df-collapse-body-padding-block\`     | css length     | Body padding block     |
| \`--df-collapse-body-padding-inline\`    | css length     | Body padding inline    |
| \`--df-collapse-separator-size\`         | css length     | Separator size         |
| \`--df-collapse-separator-color\`        | css color      | Separator color        |
| \`--df-collapse-duration\`               | css time       | Duration               |

        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      type: 'string',
      description: 'Additional CSS class for the collapse container.',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      description: 'Inline styles for the collapse container.',
      table: { category: 'Appearance' },
    },
    Component: {
      options: ['Text', 'Custom'],
      mapping: {
        Text: 'Simple text',
        Custom: (
          <div className="df-flex df-items-center df-gap-3">
            <DIcon icon="Flame" hasCircle />
            <h1 className="df-h4 df-m-0">Custom component</h1>
          </div>
        ),
      },
      description: 'Header content of the collapse.',
      table: { category: 'Content' },
    },
    defaultCollapsed: {
      control: 'boolean',
      description: 'Initial or external state. When changed, the component syncs its internal state.',
      table: { category: 'Behavior' },
    },
    onChange: {
      description: 'Callback fired on toggle with the next state (true = collapsed, false = expanded). Use it to update your external state and use controlled mode.',
      table: { category: 'Events' },
    },
    iconOpen: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
      description: 'Icon shown when the collapse is collapsed (state collapsed = true).',
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
      description: 'Icon shown when the collapse is expanded (state collapsed = false).',
      table: { category: 'Icon' },
    },
    iconMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
      description: 'Enable Material icons style (requires DContextProvider configuration).',
      table: { category: 'Icon' },
    },
    iconFamilyClass: {
      control: 'text',
      type: 'string',
      description: 'Icon family class to use with DIcon.',
      table: { category: 'Icon' },
    },
    iconFamilyPrefix: {
      control: 'text',
      type: 'string',
      description: 'Icon family prefix to use with DIcon.',
      table: { category: 'Icon' },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DCollapse>;

export const HeaderText: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '320px', height: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DCollapse {...args}>
      <div className="df-grid df-grid-cols-12 df-gap-4 df-flex df-flex-col df-gap-3 df-pt-3">
        <div className="df-col-span-full">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="df-col-span-full">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="df-col-span-full">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </DCollapse>
  ),
  args: {
    Component: (
      <span>Text</span>
    ),
  },
};

export const HeaderComponent: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '320px', height: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DCollapse {...args}>
      <div className="df-grid df-grid-cols-12 df-gap-4 df-flex df-flex-col df-gap-3 df-pt-3">
        <div className="df-col-span-full">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="df-col-span-full">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="df-col-span-full">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </DCollapse>
  ),
  args: {
    Component: (
      <div className="df-flex df-items-center df-gap-3">
        <DIcon icon="Flame" hasCircle />
        <h1 className="df-h4 df-m-0">Custom component</h1>
      </div>
    ),
  },
};

export const Expanded: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '320px', height: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DCollapse {...args}>
      <div className="df-grid df-grid-cols-12 df-gap-4 df-flex df-flex-col df-gap-3 df-pt-3">
        <div className="df-col-span-full">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="df-col-span-full">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="df-col-span-full">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </DCollapse>
  ),
  args: {
    Component: (
      <span>Text</span>
    ),
    defaultCollapsed: false,
  },
};

export const MaterialIcon: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '320px', height: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DCollapse {...args}>
        <div className="df-grid df-grid-cols-12 df-gap-4 df-flex df-flex-col df-gap-3 df-pt-3">
          <div className="df-col-span-full">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="df-col-span-full">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="df-col-span-full">Lorem ipsum dolor sit amet consectetur.</div>
        </div>
      </DCollapse>
    </DContextProvider>
  ),
  args: {
    Component: (
      <span>Text</span>
    ),
    iconClose: 'unfold_more',
    iconOpen: 'unfold_less',
  },
};

export const Controlled: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '320px', height: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: function Example(args) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
      <>
        <div className="df-flex df-gap-2 df-mb-2">
          <button
            className="df-button"
            data-variant="solid"
            data-size="sm"
            data-color="primary"
            type="button"
            onClick={() => setIsCollapsed((prev) => !prev)}
          >
            {isCollapsed ? 'Expand' : 'Collapse'}
          </button>
        </div>
        <DCollapse
          {...args}
          defaultCollapsed={isCollapsed}
          onChange={setIsCollapsed}
        >
          <div className="df-grid df-grid-cols-12 df-gap-4 df-flex df-flex-col df-gap-3 df-pt-3">
            <div className="df-col-span-full">Lorem ipsum dolor sit amet consectetur.</div>
            <div className="df-col-span-full">Lorem ipsum dolor sit amet consectetur.</div>
            <div className="df-col-span-full">Lorem ipsum dolor sit amet consectetur.</div>
          </div>
        </DCollapse>
      </>
    );
  },
  args: {
    Component: (
      <span>Text</span>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled usage: update "defaultCollapsed" and handle "onChange" to update external state. When defaultCollapsed is true, the body is hidden; when false, it is shown.',
      },
      source: {
        code: `import { useState } from 'react';

export default function ControlledCollapseExample() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <div className="df-flex df-gap-2 df-mb-2">
        <button
          className="df-button" data-variant="solid" data-size="sm" data-color="primary"
          type="button"
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          {isCollapsed ? 'Expand' : 'Collapse'}
        </button>
      </div>
      <DCollapse
        Component={<span>Text</span>}
        defaultCollapsed={isCollapsed}
        onChange={setIsCollapsed}
      >
        <div className="df-grid df-grid-cols-12 df-gap-4 df-flex df-flex-col df-gap-3 df-pt-3">
          <div className="df-col-span-full">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="df-col-span-full">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="df-col-span-full">Lorem ipsum dolor sit amet consectetur.</div>
        </div>
      </DCollapse>
    </>
  );
}
`,
      },
    },
  },
};
