import { useCallback } from 'react';
import { toast as reactToast } from 'react-toastify';

import type { AlertType } from '@dynamic-framework/ui';

import { MAlert } from '../components';

export type ToastConfig = {
  type?: AlertType;
  showClose?: boolean;
};

export default function useToast() {
  const toast = useCallback((message: string, { type = 'info', showClose = true }: ToastConfig = {}) => {
    reactToast(({ closeToast }) => (
      <MAlert
        type={type}
        showClose={showClose}
        onMClose={closeToast}
      >
        {message}
      </MAlert>
    ));
  }, []);

  return {
    toast,
  };
}
