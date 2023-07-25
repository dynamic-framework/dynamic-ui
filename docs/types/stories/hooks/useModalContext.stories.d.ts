/// <reference types="react" />
import { Meta, StoryObj } from '@storybook/react';
declare const Example: () => JSX.Element;
declare const config: Meta<typeof Example>;
export default config;
declare type Story = StoryObj<typeof Example>;
export declare const useModalContext: Story;
