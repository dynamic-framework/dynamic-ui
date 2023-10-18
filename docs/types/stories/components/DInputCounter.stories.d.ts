import { Meta, StoryObj } from '@storybook/react';
import { DInputCounter } from '../../components';
declare const config: Meta<typeof DInputCounter>;
export default config;
type Story = StoryObj<typeof DInputCounter>;
export declare const Default: Story;
export declare const Error: Story;
export declare const Confirm: Story;
export declare const Disabled: Story;
