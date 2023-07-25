import { Meta, StoryObj } from '@storybook/react';
import { MModal } from '../../components';
declare const config: Meta<typeof MModal>;
export default config;
declare type Story = StoryObj<typeof MModal>;
export declare const Default: Story;
export declare const ActionsPlacementStart: Story;
export declare const ActionsPlacementEnd: Story;
export declare const WithoutHeader: Story;
export declare const WithoutActions: Story;
export declare const OnlyBody: Story;
export declare const WithoutCancelX: Story;