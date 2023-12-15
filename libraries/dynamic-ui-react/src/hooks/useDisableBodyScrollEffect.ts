import { useEffect } from 'react';

export default function useDisableBodyScrollEffect(disable: boolean) {
  useEffect(() => {
    if (disable) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = 'unset';
    }
  }, [disable]);
}
