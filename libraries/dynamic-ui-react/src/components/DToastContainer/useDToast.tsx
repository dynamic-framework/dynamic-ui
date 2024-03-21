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
};

export default function useDToast() {
  const toast = useCallback((message: string, {
    type = 'info',
    icon,
    iconClose,
    ...rest
  }: ToastConfig) => {
    reactToast(({ closeToast }) => (
      <DAlert
        onClose={closeToast}
        id="alertID"
        type={type}
        icon={icon}
        iconClose={iconClose}
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
