import { Meta, StoryObj } from '@storybook/react';

import { MQuickActionButton } from '../../components';
import { ALL_COLORS_WITH_EMPTY, ICONS } from '../constants';

const config: Meta<typeof MQuickActionButton> = {
  title: 'Design System/Components/Quick Action Button',
  component: MQuickActionButton,
  argTypes: {
    line1: {
      control: 'text',
      type: 'string',
      description: 'The title',
    },
    line2: {
      control: 'text',
      type: 'string',
      description: 'The subtitle',
    },
    actionLinkText: {
      control: 'text',
      type: 'string',
      description: 'The action link text',
    },
    actionIcon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
      description: 'The action icon',
      table: { defaultValue: { summary: 'chevron-right' } },
    },
    actionLinkTheme: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: ALL_COLORS_WITH_EMPTY,
      type: 'string',
      description: 'Theme of the action link',
      table: { defaultValue: { summary: 'secondary' } },
    },
    representativeImage: {
      control: 'text',
      type: 'string',
    },
    representativeIcon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
      description: 'The representative icon',
    },
    representativeIconTheme: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: ALL_COLORS_WITH_EMPTY,
      type: 'string',
      description: 'Theme of the representative icon',
      table: { defaultValue: { summary: 'secondary' } },
    },
    representativeIconHasCircle: {
      type: 'boolean',
      control: 'boolean',
      description: 'Add circle around the representative icon',
      table: { defaultValue: { summary: false } },
    },
    onMClick: {
      action: 'mClick',
    },
  },
};

export default config;
type Story = StoryObj<typeof MQuickActionButton>;

export const PersonalInfo: Story = {
  render: (args) => (
    <div
      style={{ width: '320px', height: '320px' }}
      className="d-flex flex-column align-items-stretch justify-content-center"
    >
      <MQuickActionButton {...args} />
    </div>
  ),

  args: {
    line1: 'Jessica Rabit',
    line2: 'Toon Bank **** 721',
    representativeImage: 'https://i.pravatar.cc/150?img=2',
  },
};

export const AccountBox: Story = {
  render: (args) => (
    <div
      style={{ width: '320px', height: '320px' }}
      className="d-flex flex-column align-items-stretch justify-content-center"
    >
      <MQuickActionButton {...args} />
    </div>
  ),

  args: {
    line1: 'Checking account',
    line2: 'HISA ··· 665',
    representativeIcon: 'piggy-bank',
    representativeIconTheme: 'info',
    representativeIconHasCircle: true,
    actionLinkText: 'Change',
  },
};

export const Info: Story = {
  render: (args) => (
    <div
      style={{ width: '320px', height: '320px' }}
      className="d-flex flex-column align-items-stretch justify-content-center"
    >
      <MQuickActionButton {...args} />
    </div>
  ),

  args: {
    line1: 'Alternativas de pago',
    line2: 'Si no puedes pagar en este momento',
    representativeIcon: 'shuffle',
    representativeIconTheme: 'secondary',
  },
};
