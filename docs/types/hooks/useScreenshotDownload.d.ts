/// <reference types="react" />
export default function useScreenshotDownload(): {
    download: () => Promise<void>;
    downloadRef: import("react").MutableRefObject<HTMLDivElement | null>;
};
