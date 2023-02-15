import { useCallback } from 'react';

import useScreenshot from './useScreenshot';

export default function useScreenshotDownload() {
  const { clipRef, takeBlob } = useScreenshot();

  const download = useCallback(async () => {
    const blob = await takeBlob();
    const url = window.URL.createObjectURL(blob);
    const link = window.document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.download = 'voucher.jpg';
    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }, [takeBlob]);

  return {
    download,
    downloadRef: clipRef,
  };
}
