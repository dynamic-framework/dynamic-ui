import { Meta, StoryObj } from '@storybook/react';

import DCollapseIconText from '../../src/components/DCollapseIconText/DCollapseIconText';
import { PREFIX_BS } from '../../src/components/config';
import { ICONS, THEMES_WITH_EMPTY } from '../config/constants';

const config: Meta<typeof DCollapseIconText> = {
  title: 'Design System/Patterns/Collapse Icon Text',
  component: DCollapseIconText,
  parameters: {
    docs: {
      description: {
        component: `
## CSS Variables
| Variable                                            | Type              | Description                                 |
|-----------------------------------------------------|-------------------|---------------------------------------------|
| --${PREFIX_BS}collapse-icon-text-header-gap         | css color unit    | Space between header items                  |
| --${PREFIX_BS}collapse-icon-text-header-font-size   | css font unit     | Title font size                             |
| --${PREFIX_BS}collapse-icon-text-header-font-weight | css font weight   | Title font weight                           |
        `,
      },
    },
  },
  argTypes: {
    icon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
    },
    iconTheme: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: THEMES_WITH_EMPTY,
      type: 'string',
      description: 'Theme of the icon',
    },
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'text',
      type: 'string',
    },
    iconSize: {
      control: 'text',
      type: 'string',
    },
    iconFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DCollapseIconText>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '320px', height: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DCollapseIconText {...args}>
      <div className="row d-flex flex-column gap-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </DCollapseIconText>
  ),
  args: {
    title: 'Credit cards',
    icon: 'credit-card-2-back',
    iconSize: '1.5rem',
    iconTheme: 'primary',
  },
};
