import { useRef, useCallback } from 'react';
import html2canvas from 'html2canvas';

export default function useScreenshot() {
  const clipRef = useRef<HTMLDivElement | null>(null);
  const takeBlob = useCallback<(type?: string) => Promise<Blob>>(async (type) => {
    if (!clipRef.current) {
      throw new Error('set the clipRef');
    }
    const canvas = await html2canvas(clipRef?.current, {
      allowTaint: true,
      useCORS: true,
    });

    return (new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((innerBlob) => {
        if (!innerBlob) {
          return reject();
        }

        return resolve(innerBlob);
      }, type);
    }));
  }, []);

  return {
    clipRef,
    takeBlob,
  };
}
