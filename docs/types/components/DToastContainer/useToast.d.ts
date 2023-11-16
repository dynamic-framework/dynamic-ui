import type { ToastPosition } from 'react-toastify';
import type { ToastType } from '../interface';
export type ToastConfig = {
    type?: ToastType;
    showClose?: boolean;
    position?: ToastPosition;
    autoClose?: number | false;
};
export default function useToast(): {
    toast: (message: string, { position, type, showClose, autoClose, }?: ToastConfig) => void;
};
