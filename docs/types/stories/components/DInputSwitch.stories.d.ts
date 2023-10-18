import { Meta, StoryObj } from '@storybook/react';
import { DInputSwitch } from '../../components';
declare const config: Meta<typeof DInputSwitch>;
export default config;
declare type Story = StoryObj<typeof DInputSwitch>;
export declare const WithoutLabel: Story;
export declare const Default: Story;
export declare const Checked: Story;
export declare const Readonly: Story;
export declare const Disabled: Story;
export declare const CheckedDisabled: Story;