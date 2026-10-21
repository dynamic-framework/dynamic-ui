/// <reference types="react" />
export default function useScreenshotWebShare(): {
    share: (fileName?: string) => Promise<void>;
    shareRef: import("react").RefObject<HTMLDivElement | null>;
};
