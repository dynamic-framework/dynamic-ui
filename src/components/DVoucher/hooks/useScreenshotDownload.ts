import { useCallback } from 'react';

import useScreenshot from './useScreenshot';

export default function useScreenshotDownload() {
  const { clipRef, takeBlob } = useScreenshot();

  const download = useCallback(async (fileName: string = 'voucher.jpg') => {
    const blob = await takeBlob();
    const url = window.URL.createObjectURL(blob);
    const link = window.document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.download = fileName;
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
