/// <reference types="react" />
export default function useScreenshotDownload(): {
    download: (fileName?: string) => Promise<void>;
    downloadRef: import("react").RefObject<HTMLDivElement | null>;
};
