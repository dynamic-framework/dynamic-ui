import {
  useCallback,
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

const TOAST_TRANSITIONS = {
  bounce: Bounce,
  flip: Flip,
  slide: Slide,
  zoom: Zoom,
};

export default function useDToast() {
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
      transition: transition && TOAST_TRANSITIONS[transition],
      ...rest,
    });
  }, []);

  return {
    toast,
  };
}
