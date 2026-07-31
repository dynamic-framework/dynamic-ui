import { useCallback } from 'react';

import useScreenshot from './useScreenshot';

export default function useScreenshotWebShare() {
  const { takeBlob, clipRef } = useScreenshot();

  const share = useCallback(async (fileName: string = 'voucher') => {
    const blob = await takeBlob('image/jpeg');

    // Fall back to the default base name when the caller passes a blank/whitespace value,
    // so the file is never named just ".jpeg".
    const safeFileName = fileName.trim() || 'voucher';
    // The extension is always appended by the hook to guarantee a valid image file,
    // regardless of what fileName the caller passes (e.g. "receipt.png" -> "receipt.png.jpeg").
    const image = new File([blob], `${safeFileName}.jpeg`, { type: 'image/jpeg' });

    if (!navigator.canShare || !navigator.canShare({ files: [image] })) {
      window.print();
      return;
    }

    await navigator.share({ files: [image] });
  }, [takeBlob]);

  return {
    share,
    shareRef: clipRef,
  };
}
