import { useCallback } from 'react';
import { toast as reactToast } from 'react-toastify';

import { MAlert } from '../components';

export default function useToast() {
  const toast = useCallback((message: string, theme = 'info') => {
    reactToast(({ closeToast }) => (
      <MAlert
        theme={theme}
        close
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
