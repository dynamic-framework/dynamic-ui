import type { Meta, StoryObj } from '@storybook/react';
import { DInputSelect } from '../../components';
import type { DInputSelectProps } from '../../components';
declare const config: Meta<typeof DInputSelect>;
export default config;
type Story = StoryObj<typeof DInputSelect>;
export declare const Default: Story;
export declare const Disabled: Story;
export declare const Icon: Story;
export declare const Extractors: StoryObj<DInputSelectProps<{
    id: string;
    text: string;
}>>;
