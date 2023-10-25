import type { CSSProperties } from 'react';
import type { ToastPosition } from 'react-toastify';
import type { BaseProps } from '../interface';
type Props = BaseProps & {
    style?: CSSProperties & {
        '--toastify-toast-width': any;
        [index: string]: any;
    };
    position?: ToastPosition;
};
export default function DToastContainer({ style, position, className, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
