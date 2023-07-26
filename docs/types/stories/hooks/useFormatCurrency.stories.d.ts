/// <reference types="react" />
import { Meta } from '@storybook/react';
declare type Props = {
    valuesToFormat: Array<number>;
};
declare const Example: ({ valuesToFormat }: Props) => JSX.Element;
declare const config: Meta<typeof Example>;
export default config;
export declare const Default: {
    args: {
        valuesToFormat: number[];
    };
};
