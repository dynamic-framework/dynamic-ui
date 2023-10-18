import { Meta, StoryObj } from '@storybook/react';
declare const Example: () => import("react/jsx-runtime").JSX.Element;
declare const config: Meta<typeof Example>;
export default config;
type Story = StoryObj<typeof Example>;
export declare const useModalContext: Story;
