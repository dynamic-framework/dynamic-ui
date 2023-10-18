import { Meta } from '@storybook/react';
import { AlertType } from '../../components/interface';
type Props = {
    message: string;
    type: AlertType;
    showClose: boolean;
};
declare const Example: ({ message, type, showClose }: Props) => import("react/jsx-runtime").JSX.Element;
declare const config: Meta<typeof Example>;
export default config;
export declare const useToast: {
    args: {
        message: string;
        type: string;
        showClose: boolean;
    };
};
