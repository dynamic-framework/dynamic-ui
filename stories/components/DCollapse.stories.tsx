import { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { useState } from 'react';

import DCollapse from '../../src/components/DCollapse/DCollapse';
import DIcon from '../../src/components/DIcon';
import { PREFIX_BS } from '../../src/components/config';
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
| Variable                                 | Class               | Type            | Description                               |
|------------------------------------------|---------------------|-----------------|-------------------------------------------|
| --${PREFIX_BS}collapse-bg                | .collapse-container | css color unit  | Collapse background                       |
| --${PREFIX_BS}collapse-border-radius     | .collapse-container | css length unit | Collapse border radius                    |
| --${PREFIX_BS}collapse-box-shadow        | .collapse-container | css box shadow  | Collapse box shadow                       |
| --${PREFIX_BS}collapse-button-padding-x  | .collapse-container | css length unit | Collapse header button padding horizontal |
| --${PREFIX_BS}collapse-button-padding-y  | .collapse-container | css length unit | Collapse header button padding vertical   |
| --${PREFIX_BS}collapse-button-gap        | .collapse-container | css length unit | Collapse header button gap                |
| --${PREFIX_BS}collapse-body-padding-x    | .collapse-container | css length unit | Collapse body padding horizontal          |
| --${PREFIX_BS}collapse-body-padding-y    | .collapse-container | css length unit | Collapse body padding vertical            |
| --${PREFIX_BS}collapse-separator-display | .collapse-container | css display     | Collapse separator display                |
| --${PREFIX_BS}collapse-separator-height  | .collapse-container | css length unit | Collapse separator size                   |
| --${PREFIX_BS}collapse-separator-bg      | .collapse-container | css color unit  | Collapse separator color                  |
        `,
      },
    },
  },
  args: {
    onChange: fn(),
  },
  argTypes: {
    className: {
      control: 'text',
      type: 'string',
      description: 'Additional CSS class for the collapse container.',
    },
    style: {
      control: 'object',
      description: 'Inline styles for the collapse container.',
    },
    Component: {
      options: ['Text', 'Custom'],
      mapping: {
        Text: 'Simple text',
        Custom: (
          <div className="d-flex align-items-center gap-3">
            <DIcon icon="Flame" hasCircle />
            <h1 className="h4 m-0">Custom component</h1>
          </div>
        ),
      },
      description: 'Header content of the collapse.',
    },
    defaultCollapsed: {
      control: 'boolean',
      description: 'Uncontrolled mode: initial state.',
    },
    collapsed: {
      control: 'boolean',
      description: 'Controlled mode: current state. When provided, the component does not mutate internal state and only calls onChange.',
    },
    onChange: {
      description: 'Callback fired on toggle with the next state (true = collapsed, false = expanded). Use it to update the collapsed prop in controlled mode.',
    },
    hasSeparator: {
      control: 'boolean',
      description: 'Shows a separator between header and body.',
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
    },
    iconMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
      description: 'Enable Material icons style (requires DContextProvider configuration).',
    },
    iconFamilyClass: {
      control: 'text',
      type: 'string',
      description: 'Icon family class to use with DIcon.',
    },
    iconFamilyPrefix: {
      control: 'text',
      type: 'string',
      description: 'Icon family prefix to use with DIcon.',
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
      <div className="row d-flex flex-column gap-3 pt-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </DCollapse>
  ),
  args: {
    Component: (
      <span>Text</span>
    ),
    hasSeparator: true,
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
      <div className="row d-flex flex-column gap-3 pt-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </DCollapse>
  ),
  args: {
    Component: (
      <div className="d-flex align-items-center gap-3">
        <DIcon icon="Flame" hasCircle />
        <h1 className="h4 m-0">Custom component</h1>
      </div>
    ),
    hasSeparator: true,
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
      <div className="row d-flex flex-column gap-3 pt-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </DCollapse>
  ),
  args: {
    Component: (
      <span>Text</span>
    ),
    defaultCollapsed: false,
    hasSeparator: true,
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
        <div className="row d-flex flex-column gap-3 pt-3">
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        </div>
      </DCollapse>
    </DContextProvider>
  ),
  args: {
    Component: (
      <span>Text</span>
    ),
    hasSeparator: true,
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
        <div className="d-flex gap-2 mb-2">
          <button
            className="btn btn-sm btn-primary"
            type="button"
            onClick={() => setIsCollapsed((prev) => !prev)}
          >
            Toggle
          </button>
        </div>
        <DCollapse
          {...args}
          collapsed={isCollapsed}
          onChange={setIsCollapsed}
        >
          <div className="row d-flex flex-column gap-3 pt-3">
            <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
            <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
            <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          </div>
        </DCollapse>
      </>
    );
  },
  args: {
    Component: (
      <span>Text</span>
    ),
    hasSeparator: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled usage: pass "collapsed" and handle "onChange" to update state. When collapsed is true, the body is hidden; when false, it is shown.',
      },
      source: {
        code: `import { useState } from 'react';

export default function ControlledCollapseExample() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <div className="d-flex gap-2 mb-2">
        <button
          className="btn btn-sm btn-primary"
          type="button"
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          Toggle
        </button>
      </div>
      <DCollapse
        Component={<span>Text</span>}
        collapsed={isCollapsed}
        hasSeparator
        onChange={setIsCollapsed}
      >
        <div className="row d-flex flex-column gap-3 pt-3">
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
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
