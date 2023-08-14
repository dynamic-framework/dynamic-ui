import { useCallback } from 'react';
import { ToastPosition, Slide, toast as reactToast } from 'react-toastify';

import type { AlertType } from '@dynamic-framework/ui';

import { MAlert } from '../components';

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
      <MAlert
        type={type}
        showClose={showClose}
        onMClose={closeToast}
      >
        {message}
      </MAlert>
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
