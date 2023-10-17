import { useCallback } from 'react';
import { Slide, toast as reactToast } from 'react-toastify';

import type { ToastPosition } from 'react-toastify';

import DAlert from '../components/DAlert';

import type { AlertType } from '../components/interface';

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
