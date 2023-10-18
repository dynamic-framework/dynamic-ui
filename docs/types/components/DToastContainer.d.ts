import type { CSSProperties } from 'react';
import type { ToastPosition } from 'react-toastify';
type Props = {
    style?: CSSProperties & {
        '--toastify-toast-width': any;
        [index: string]: any;
    };
    position?: ToastPosition;
};
export default function DToastContainer({ style, position, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
