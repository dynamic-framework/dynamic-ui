import { Meta, StoryObj } from '@storybook/react';
import { MCarousel } from '../../components';
declare const config: Meta<typeof MCarousel>;
export default config;
declare type Story = StoryObj<typeof MCarousel>;
export declare const Default: Story;
export declare const TwoPerPage: Story;
export declare const WithBreakpoints: Story;
export declare const AutoplayAndLoop: Story;
