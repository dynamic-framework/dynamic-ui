import { Renderable, Toast, ValueFunction } from 'react-hot-toast';
type ToastData = {
    title: string;
    description?: string;
    timestamp?: string;
    icon?: string;
    closeIcon?: string;
    theme?: string;
    soft?: boolean;
};
type Props = Partial<Pick<Toast, 'id' | 'duration' | 'position'>>;
export default function useDToast(): {
    toast: (data: ToastData | ValueFunction<Renderable, Toast>, toastProps: Props) => string;
};
export {};
