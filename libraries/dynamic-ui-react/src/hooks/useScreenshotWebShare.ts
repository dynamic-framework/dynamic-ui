import { useCallback } from 'react';

import useScreenshot from './useScreenshot';

export default function useScreenshotWebShare() {
  const { takeBlob, clipRef } = useScreenshot();

  const share = useCallback(async () => {
    const blob = await takeBlob();

    const image = new File([blob], 'voucher.jpeg', { type: 'image/jpeg' });

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
