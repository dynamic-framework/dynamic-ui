import { Meta, StoryObj } from '@storybook/react';
import { DOffcanvas } from '../../components';
declare const Example: () => import("react/jsx-runtime").JSX.Element;
declare const config: Meta<typeof Example>;
export default config;
type Story = StoryObj<typeof DOffcanvas>;
export declare const useOffcanvasContext: Story;
