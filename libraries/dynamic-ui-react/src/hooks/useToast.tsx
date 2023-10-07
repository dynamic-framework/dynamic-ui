import { useCallback } from 'react';
import { ToastPosition, Slide, toast as reactToast } from 'react-toastify';

import { DAlert } from '../components';
import { AlertType } from '../interfaces/DAlertInterface';

export type ToastConfig = {
  type?: AlertType;
  showClose?: boolean;
  position?: ToastPosition;
  autoClose?: number | false;
};

export default function useToast() {
  const toast = useCallback((message: string, {
    position = 'top-right',
    type = 'info',
    showClose = true,
    autoClose = false,
  }: ToastConfig = {}) => {
    reactToast(({ closeToast }) => (
      <DAlert
        type={type}
        showClose={showClose}
        onClose={closeToast}
        id="alertID"
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
