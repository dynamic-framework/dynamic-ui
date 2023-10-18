import { Meta, StoryObj } from '@storybook/react';
import { DInputCurrency } from '../../components';
declare const config: Meta<typeof DInputCurrency>;
export default config;
declare type Story = StoryObj<typeof DInputCurrency>;
export declare const Default: Story;
export declare const Value: Story;
export declare const Error: Story;
export declare const Confirm: Story;
export declare const Disabled: Story;
export declare const WithCurrencyCode: Story;
