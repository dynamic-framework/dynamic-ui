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
    // Fall back to the default base name when the caller passes a blank/whitespace value,
    // so the file is never named just ".jpg".
    const safeFileName = fileName.trim() || 'voucher';
    // The extension is always appended by the hook to guarantee a valid image file,
    // regardless of what fileName the caller passes (e.g. "receipt.png" -> "receipt.png.jpg").
    link.download = `${safeFileName}.jpg`;
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
