/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Meta, StoryObj } from '@storybook/react';

import { PREFIX_BS } from '../../src/components/config';
import { THEMES_WITH_EMPTY, ICONS } from '../config/constants';
import DQuickActionButton from '../../src/components/DQuickActionButton/DQuickActionButton';

const config: Meta<typeof DQuickActionButton> = {
  title: 'Design System/Components/Quick Action Button',
  component: DQuickActionButton,
  parameters: {
    docs: {
      description: {
        component: `
![Shield Badge](https://img.shields.io/badge/Dynamic%20Component-E60063)

## CSS Variables
| Variable                                                             | Class                  | Type            | Description                        |
|----------------------------------------------------------------------|------------------------|-----------------|------------------------------------|
| --${PREFIX_BS}quick-action-button-gap                                | .d-quick-action-button | css length unit | Content gap                        |
| --${PREFIX_BS}quick-action-button-padding                            | .d-quick-action-button | css length unit | Content padding                    |
| --${PREFIX_BS}quick-action-button-bg                                 | .d-quick-action-button | css color unit  | Content background color           |
| --${PREFIX_BS}quick-action-button-border-radius                      | .d-quick-action-button | css length unit | Quick action border radius         |
| --${PREFIX_BS}quick-action-button-border                             | .d-quick-action-button | css border unit | Quick action border                |
| --${PREFIX_BS}quick-action-button-box-shadow                         | .d-quick-action-button | css box shadow  | Quick action box shadow            |
| --${PREFIX_BS}quick-action-button-border-top                         | .d-quick-action-button | css border      | Quick action border top            |
| --${PREFIX_BS}quick-action-button-border-right                       | .d-quick-action-button | css border      | Quick action border right          |
| --${PREFIX_BS}quick-action-button-border-bottom                      | .d-quick-action-button | css border      | Quick action border bottom         |
| --${PREFIX_BS}quick-action-button-border-left                        | .d-quick-action-button | css border      | Quick action border left           |
| --${PREFIX_BS}quick-action-button-line1-font-size                    | .d-quick-action-button | css length unit | First line font size               |
| --${PREFIX_BS}quick-action-button-line1-font-weight                  | .d-quick-action-button | css font weight | First line font weight             |
| --${PREFIX_BS}quick-action-button-line1-color                        | .d-quick-action-button | css color unit  | First line color                   |
| --${PREFIX_BS}quick-action-button-line2-font-size                    | .d-quick-action-button | css length unit | Second line font size              |
| --${PREFIX_BS}quick-action-button-line2-font-weight                  | .d-quick-action-button | css length unit | Second line font weight            |
| --${PREFIX_BS}quick-action-button-line2-color                        | .d-quick-action-button | css color unit  | Second line color                  |
| --${PREFIX_BS}quick-action-button-representative-image-size          | .d-quick-action-button | css length unit | Representative image size          |
| --${PREFIX_BS}quick-action-button-representative-image-border-radius | .d-quick-action-button | css length unit | Representative image border-radius |
| --${PREFIX_BS}quick-action-button-representative-icon-size           | .d-quick-action-button | css length unit | Representative icon size           |
| --${PREFIX_BS}quick-action-button-action-icon-color                  | .d-quick-action-button | css color unit  | Action icon color                  |
| --${PREFIX_BS}quick-action-button-action-icon-size                   | .d-quick-action-button | css length unit | Action icon size                   |
| --${PREFIX_BS}quick-action-button-action-link-padding-x              | .d-quick-action-button | css length unit | Action link padding                |
| --${PREFIX_BS}quick-action-button-action-link-padding-y              | .d-quick-action-button | css length unit | Action link padding                |
| --${PREFIX_BS}quick-action-button-hover-bg                           | .d-quick-action-button | css color unit  | Content hover background           |
| --${PREFIX_BS}quick-action-button-hover-border-color                 | .d-quick-action-button | css color unit  | Content hover border color         |
| --${PREFIX_BS}quick-action-button-hover-action-icon-color            | .d-quick-action-button | css color unit  | Content action icon hover color    |
| --${PREFIX_BS}quick-action-button-hover-box-shadow                   | .d-quick-action-button | css box shadow  | Content hover box shadow           |
| --${PREFIX_BS}quick-action-button-active-bg                          | .d-quick-action-button | css color unit  | Content active background          |
| --${PREFIX_BS}quick-action-button-active-border-color                | .d-quick-action-button | css color unit  | Content active border color        |
| --${PREFIX_BS}quick-action-button-active-action-icon-color           | .d-quick-action-button | css color unit  | Content action icon active color   |
| --${PREFIX_BS}quick-action-button-active-box-shadow                  | .d-quick-action-button | css box shadow  | Content active color box shadow    |
        `,
      },
    },
  },
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
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
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
    secondaryActionAriaLabel: {
      control: 'text',
      type: 'string',
    },
    actionIconFamilyClass: {
      control: 'text',
      type: 'string',
    },
    actionIconFamilyPrefix: {
      control: 'text',
      type: 'string',
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
    representativeIconFamilyClass: {
      control: 'text',
      type: 'string',
    },
    representativeIconFamilyPrefix: {
      control: 'text',
      type: 'string',
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
  tags: ['autodocs'],
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
    secondaryActionAriaLabel: 'fav',
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
