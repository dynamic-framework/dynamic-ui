import { ToastPosition } from 'react-toastify';
import type { CSSProperties } from 'react';
import 'react-toastify/dist/ReactToastify.css';
declare type Props = {
    style?: CSSProperties & {
        '--toastify-toast-width': any;
        [index: string]: any;
    };
    position?: ToastPosition;
};
export default function DToastContainer({ style, position, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
