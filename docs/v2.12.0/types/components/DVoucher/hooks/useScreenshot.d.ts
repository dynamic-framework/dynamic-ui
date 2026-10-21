/// <reference types="react" />
export default function useScreenshot(): {
    clipRef: import("react").RefObject<HTMLDivElement | null>;
    takeBlob: (type?: string) => Promise<Blob>;
};
