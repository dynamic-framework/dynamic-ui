import { useCallback } from 'react';
import { Slide, toast as reactToast } from 'react-toastify';

import type { ToastPosition } from 'react-toastify';

import DAlert from '../DAlert/DAlert';

import type { AlertType } from '../interface';

export type ToastConfig = {
  type?: AlertType;
  showClose?: boolean;
  position?: ToastPosition;
  autoClose?: number | false;
  icon?: string;
  iconClose?: string;
};

export default function useToast() {
  const toast = useCallback((message: string, {
    position = 'top-right',
    type = 'info',
    showClose = true,
    autoClose = false,
    icon,
    iconClose,
  }: ToastConfig = {}) => {
    reactToast(({ closeToast }) => (
      <DAlert
        type={type}
        showClose={showClose}
        onClose={closeToast}
        id="alertID"
        icon={icon}
        iconClose={iconClose}
      >
        {message}
      </DAlert>
    ), {
      transition: Slide,
      position,
      autoClose,
    });
  }, []);

  return {
    toast,
  };
}
