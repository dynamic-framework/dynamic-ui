import { Meta, StoryObj } from '@storybook/react';
import { MOffcanvas } from '../../components';
declare const config: Meta<typeof MOffcanvas>;
export default config;
declare type Story = StoryObj<typeof MOffcanvas>;
export declare const Default: Story;
export declare const WithoutActions: Story;
export declare const OnlyBody: Story;
export declare const WithoutCancelX: Story;
