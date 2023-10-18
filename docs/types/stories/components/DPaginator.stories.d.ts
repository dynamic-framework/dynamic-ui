import { Meta, StoryObj } from '@storybook/react';
import { DPaginator } from '../../components';
declare const meta: Meta<typeof DPaginator>;
export default meta;
declare type Story = StoryObj<typeof DPaginator>;
export declare const Default: Story;
export declare const LabelArrows: Story;
export declare const NoArrows: Story;
export declare const CustomCurrentPage: Story;
export declare const CustomMaxWidth: Story;