import { Meta, StoryObj } from '@storybook/react';
import { DInputCurrencyBase } from '../../components';
declare const config: Meta<typeof DInputCurrencyBase>;
export default config;
declare type Story = StoryObj<typeof DInputCurrencyBase>;
export declare const Default: Story;
export declare const Value: Story;
export declare const Error: Story;
export declare const Confirm: Story;
export declare const Disabled: Story;
export declare const WithCurrencyCode: Story;
