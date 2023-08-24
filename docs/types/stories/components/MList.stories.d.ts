import { Meta, StoryObj } from '@storybook/react';
import { MList } from '../../components';
declare const config: Meta<typeof MList>;
export default config;
declare type Story = StoryObj<typeof MList>;
export declare const Default: Story;
export declare const Flush: Story;
export declare const Numbered: Story;
export declare const Horizontal: Story;
export declare const HorizontalWithBreakpoint: Story;