/// <reference types="react" />
import { Meta, StoryObj } from '@storybook/react';
import { MOffcanvas } from '../../components';
declare const Example: () => JSX.Element;
declare const config: Meta<typeof Example>;
export default config;
declare type Story = StoryObj<typeof MOffcanvas>;
export declare const useOffcanvasContext: Story;
