/// <reference types="react" />
export default function useScreenshotWebShare(): {
    share: () => Promise<void>;
    shareRef: import("react").RefObject<HTMLDivElement | null>;
};
