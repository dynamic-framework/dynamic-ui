import type { Meta, StoryObj } from '@storybook/react';

import { DContextProvider } from '../../src';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';

/**
 * Context Provider to share settings between components
 */
const config: Meta<typeof DContextProvider> = {
  title: 'Design System/Components/Context Provider',
  component: DContextProvider,
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DContextProvider>;

/**
 * Without arguments, it will take the default settings for:
 * + English language
 * + Boostrap icons
 * + Currencies with $1,000.00 format
 * + Default portal DOM id
 */
export const Default: Story = {};

/**
 * To share a different language configuration we only need to change the key language
 *
 * > This key only takes a string with the language in ISO 639 Set 1 (ISO 639-1)
 */
export const LanguageSettings: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  args: {
    language: 'en',
  },
};

/**
 * To share a different currency format configuration we need to change the key currency
 *
 * > The configuration for currency format is given by the library [currency.js](https://currency.js.org/),
 * particularly we use the key precision, separator, decimal and not in all cases symbol.
 */
export const CurrencySettings: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  args: {
    currency: {
      symbol: '$',
      precision: 2,
      separator: ',',
      decimal: '.',
    },
  },
};

/**
 * To share a different icon configuration we need to change the key icon
 *
 * This takes the settings needed to use bootstrap icons, which would
 * be `familyClass=bi`, `familyPrefix=bi-` and `materialStyle=false`
 *
 * Similar settings can be used for any icon font.
 *
 * In the particular case of material symbols, the materialStyle property was added
 * to place the name of the icon in the children of `<i />` and not as a class.
 * This setting can be used with any icon font that uses a similar style.
 */
export const IconSettings: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  args: CONTEXT_PROVIDER_CONFIG_MATERIAL,
};
