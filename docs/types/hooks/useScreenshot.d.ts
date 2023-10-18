/// <reference types="react" />
export default function useScreenshot(): {
    clipRef: import("react").MutableRefObject<HTMLDivElement | null>;
    takeBlob: (type?: string | undefined) => Promise<Blob>;
};
