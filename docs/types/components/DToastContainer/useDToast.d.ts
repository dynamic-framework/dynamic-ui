import type { ToastPosition } from 'react-toastify';
import type { AlertType } from '../interface';
export type ToastConfig = {
    type?: AlertType;
    icon?: string;
    iconClose?: string;
    showClose?: boolean;
    position?: ToastPosition;
    autoClose?: number | false;
    stacked?: boolean;
    containerId?: string;
    transition?: 'slide' | 'flip' | 'bounce' | 'zoom';
};
export default function useDToast(): {
    toast: (message: string, { icon, iconClose, type, showClose, transition, ...rest }: ToastConfig) => void;
};
