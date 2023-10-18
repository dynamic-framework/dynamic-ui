import { Meta, StoryObj } from '@storybook/react';
import { DInputPin } from '../../components';
declare const config: Meta<typeof DInputPin>;
export default config;
declare type Story = StoryObj<typeof DInputPin>;
export declare const Default: Story;
export declare const WithoutLabel: Story;
export declare const Error: Story;
export declare const Confirm: Story;
export declare const Disabled: Story;
