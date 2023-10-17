/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Meta, StoryObj } from '@storybook/react';
import { PREFIX_BS } from '../../components/config';

import { DQuickActionButton } from '../../components';
import { THEMES_WITH_EMPTY, ICONS } from '../config/constants';

const config: Meta<typeof DQuickActionButton> = {
  title: 'Design System/Components/Quick Action Button',
  component: DQuickActionButton,
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
    onClick: {
      action: 'onClick',
    },
    onClickSecondary: {
      action: 'onClickSecondary',
    },
  },
};

export default config;
type Story = StoryObj<typeof DQuickActionButton>;

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
    <DQuickActionButton {...args} />
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
      <DQuickActionButton {...args} />
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
    <DQuickActionButton {...args} />
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
    <DQuickActionButton {...args} />
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
    <DQuickActionButton
      {...args}
      style={{
        [`--${PREFIX_BS}quick-action-button-component-border-radius`]: 0,
        [`--${PREFIX_BS}quick-action-button-component-border-right`]: 0,
        [`--${PREFIX_BS}quick-action-button-component-border-left`]: 0,
        [`--${PREFIX_BS}quick-action-button-component-border-bottom`]: 0,
      } as any}
    />
  ),
  args: {
    line1: 'Jessica Rabit',
    line2: 'Toon Bank  **** 721',
    representativeImage: 'https://i.pravatar.cc/150?img=2',
    actionIcon: 'chevron-right',
  },
};
