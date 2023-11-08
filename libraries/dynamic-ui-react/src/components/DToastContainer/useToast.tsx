import { useCallback } from 'react';
import { Slide, toast as reactToast } from 'react-toastify';

import type { ToastPosition } from 'react-toastify';

import DToast from '../DToast/DToast';

import type { ToastType } from '../interface';

export type ToastConfig = {
  type?: ToastType;
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
      <DToast
        type={type}
        showClose={showClose}
        onClose={closeToast}
        id="alertID"
      >
        {message}
      </DToast>
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
