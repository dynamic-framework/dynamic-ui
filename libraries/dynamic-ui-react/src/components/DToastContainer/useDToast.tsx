import {
  useCallback,
  useMemo,
} from 'react';

import {
  Bounce, 
  Flip, 
  Slide, 
  Zoom,
  toast as reactToast, 
} from 'react-toastify';

import type { ToastPosition } from 'react-toastify';

import DAlert from '../DAlert/DAlert';

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

export default function useDToast() {
  const toastTransition = useMemo(() => ({
    bounce: Bounce,
    flip: Flip,
    slide: Slide,
    zoom: Zoom,
  }), []);

  const toast = useCallback((message: string, {
    icon,
    iconClose,
    type = 'info',
    showClose = true,
    transition,
    ...rest
  }: ToastConfig) => {
    reactToast(({ closeToast }) => (
      <DAlert
        onClose={closeToast}
        id="alertID"
        type={type}
        icon={icon}
        iconClose={iconClose}
        showClose={showClose}
      >
        {message}
      </DAlert>
    ), {
      transition: transition ? toastTransition[transition] : undefined,
      ...rest,
    });
  }, [toastTransition]);

  return {
    toast,
  };
}
