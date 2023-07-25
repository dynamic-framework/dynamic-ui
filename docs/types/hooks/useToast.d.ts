import { ToastPosition } from 'react-toastify';
import type { AlertType } from '@dynamic-framework/ui';
export declare type ToastConfig = {
    type?: AlertType;
    showClose?: boolean;
    position?: ToastPosition;
    autoClose?: number | false;
};
export default function useToast(): {
    toast: (message: string, { position, type, showClose, autoClose, }?: ToastConfig) => void;
};
