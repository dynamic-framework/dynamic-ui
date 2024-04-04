import type { CSSProperties } from 'react';
import type { ToastContainerProps } from 'react-toastify';
import { BaseProps } from '../interface';
type Props = BaseProps & Pick<ToastContainerProps, 'autoClose' | 'closeOnClick' | 'position'> & {
    containerId?: string;
    stacked?: boolean;
    style?: CSSProperties & {
        '--toastify-toast-width': string | number;
        [index: string]: string | number;
    };
    transition?: 'slide' | 'flip' | 'bounce' | 'zoom';
};
export default function DToastContainer({ style, className, closeOnClick, position, autoClose, stacked, transition, containerId, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
