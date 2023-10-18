import { Meta, StoryObj } from '@storybook/react';
import { DListItem } from '../../components';
declare const config: Meta<typeof DListItem>;
export default config;
type Story = StoryObj<typeof DListItem>;
export declare const Default: Story;
export declare const Active: Story;
export declare const Disabled: Story;
export declare const WithTheme: Story;
