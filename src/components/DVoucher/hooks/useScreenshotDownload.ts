import { useCallback } from 'react';

import useScreenshot from './useScreenshot';

export default function useScreenshotDownload() {
  const { clipRef, takeBlob } = useScreenshot();

  const download = useCallback(async (fileName: string = 'voucher') => {
    const blob = await takeBlob('image/jpeg');
    const url = window.URL.createObjectURL(blob);
    const link = window.document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    // The extension is always appended by the hook to guarantee a valid image file,
    // regardless of what fileName the caller passes (e.g. "receipt.png" -> "receipt.png.jpg").
    link.download = `${fileName}.jpg`;
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
