import { Renderable, Toast, ValueFunction } from 'react-hot-toast';
import { ComponentStateColor } from '../interface';
type ToastData = {
    title: string;
    description?: string;
    timestamp?: string;
    icon?: string;
    closeIcon?: string;
    color?: ComponentStateColor;
};
type Props = Partial<Pick<Toast, 'id' | 'duration' | 'position'>>;
export default function useDToast(): {
    toast: (data: ToastData | ValueFunction<Renderable, Toast>, toastProps?: Props) => string;
};
export {};
