import { useCallback } from 'react';

import useScreenshot from './useScreenshot';

export default function useScreenshotWebShare() {
  const { takeBlob, clipRef } = useScreenshot();

  const share = useCallback(async (fileName: string = 'voucher') => {
    const blob = await takeBlob('image/jpeg');

    // The extension is always appended by the hook to guarantee a valid image file,
    // regardless of what fileName the caller passes (e.g. "receipt.png" -> "receipt.png.jpeg").
    const image = new File([blob], `${fileName}.jpeg`, { type: 'image/jpeg' });

    if (
      !navigator.canShare
        && (navigator.canShare && !navigator.canShare({ files: [image] }))
    ) {
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
