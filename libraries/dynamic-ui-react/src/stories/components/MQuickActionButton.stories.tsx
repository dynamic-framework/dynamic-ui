import { Meta, StoryObj } from '@storybook/react';
import { PREFIX_BS } from '@dynamic-framework/ui';

import { MQuickActionButton } from '../../components';
import { THEMES_WITH_EMPTY, ICONS } from '../constants';

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
    secondaryActionIcon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
      description: 'The second action icon',
      table: { defaultValue: { summary: 'chevron-left' } },
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
      options: THEMES_WITH_EMPTY,
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
      options: THEMES_WITH_EMPTY,
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
    onMClickSecondary: {
      action: 'mClickSecondary',
    },
  },
};

export default config;
type Story = StoryObj<typeof MQuickActionButton>;

export const PersonalInfo: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <MQuickActionButton {...args} />
  ),
  args: {
    line1: 'Jessica Rabit',
    line2: 'Toon Bank **** 721',
    representativeImage: 'https://i.pravatar.cc/150?img=2',
    actionIcon: 'chevron-right',
  },
};

export const ButtonDoubleAction: Story = {
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
    secondaryActionIcon: 'star',
    representativeImage: 'https://i.pravatar.cc/150?img=2',
  },
};

export const AccountBox: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <MQuickActionButton {...args} />
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
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <MQuickActionButton {...args} />
  ),
  args: {
    line1: 'Alternativas de pago',
    line2: 'Si no puedes pagar en este momento',
    representativeIcon: 'shuffle',
    representativeIconTheme: 'secondary',
    actionIcon: 'chevron-right',
  },
};

export const PersonList: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <MQuickActionButton
      {...args}
      style={{
        [`--${PREFIX_BS}m-quick-action-button-component-border-radius`]: 0,
        [`--${PREFIX_BS}m-quick-action-button-component-border-right`]: 0,
        [`--${PREFIX_BS}m-quick-action-button-component-border-left`]: 0,
        [`--${PREFIX_BS}m-quick-action-button-component-border-bottom`]: 0,
      }}
    />
  ),
  args: {
    line1: 'Jessica Rabit',
    line2: 'Toon Bank  **** 721',
    representativeImage: 'https://i.pravatar.cc/150?img=2',
    actionIcon: 'chevron-right',
  },
};
