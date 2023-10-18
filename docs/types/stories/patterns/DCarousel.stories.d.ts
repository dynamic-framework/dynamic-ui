import { Meta, StoryObj } from '@storybook/react';
import DCarousel from '../../components/DCarousel';
declare const config: Meta<typeof DCarousel>;
export default config;
declare type Story = StoryObj<typeof DCarousel>;
export declare const Default: Story;
export declare const TwoPerPage: Story;
export declare const WithBreakpoints: Story;
export declare const AutoplayAndLoop: Story;
