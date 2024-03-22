import { useCallback } from 'react';
import { Slide, toast as reactToast } from 'react-toastify';

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
};

export default function useDToast() {
  const toast = useCallback((message: string, {
    icon,
    iconClose,
    type = 'info',
    showClose = true,
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
      transition: Slide,
      ...rest,
    });
  }, []);

  return {
    toast,
  };
}
