import html2canvas from 'html2canvas';
import { useRef, useCallback } from 'react';

function useScreenshot() {
    const clipRef = useRef(null);
    const takeBlob = useCallback(async (type) => {
        if (!clipRef.current) {
            throw new Error('set the clipRef');
        }
        const canvas = await html2canvas(clipRef === null || clipRef === void 0 ? void 0 : clipRef.current, {
            allowTaint: true,
            useCORS: true,
        });
        return (new Promise((resolve, reject) => {
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

export { useScreenshot as default };
//# sourceMappingURL=useScreenshot.js.map
