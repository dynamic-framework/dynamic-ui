import { Meta, StoryObj } from '@storybook/react';
import { MInputCounter } from '../../components';
declare const config: Meta<typeof MInputCounter>;
export default config;
declare type Story = StoryObj<typeof MInputCounter>;
export declare const Default: Story;
export declare const Error: Story;
export declare const Confirm: Story;
export declare const Disabled: Story;
