import type { AlertType } from '@modyo-dynamic/modyo-design-system';
export declare type ToastConfig = {
    type?: AlertType;
    showClose?: boolean;
};
export default function useToast(): {
    toast: (message: string, { type, showClose }?: ToastConfig) => void;
};
