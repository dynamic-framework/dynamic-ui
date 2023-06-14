/// <reference types="react" />
import { Meta } from '@storybook/react';
import type { AlertType } from '@modyo-dynamic/modyo-design-system';
declare type Props = {
    message: string;
    type: AlertType;
    showClose: boolean;
};
declare const Example: ({ message, type, showClose }: Props) => JSX.Element;
declare const config: Meta<typeof Example>;
export default config;
export declare const useToast: {
    args: {
        message: string;
        type: string;
        showClose: boolean;
    };
};
