import type { CSSProperties } from 'react';
import 'react-toastify/dist/ReactToastify.css';
declare type Props = {
    style?: CSSProperties & {
        '--toastify-toast-width': any;
        [index: string]: any;
    };
};
export default function MToastContainer({ style }: Props): JSX.Element;
export {};
