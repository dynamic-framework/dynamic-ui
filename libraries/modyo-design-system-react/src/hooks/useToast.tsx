import { useCallback } from 'react';
import { toast as reactToast } from 'react-toastify';

import { MAlert } from '../components';

export default function useToast() {
  const toast = useCallback((message: string, { theme = 'info', showClose = true } = {}) => {
    reactToast(({ closeToast }) => (
      <MAlert
        theme={theme}
        close={showClose}
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
