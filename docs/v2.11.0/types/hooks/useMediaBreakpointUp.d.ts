import type { BreakpointProps } from '../contexts/DContext';
/** Clears the cached CSS breakpoints. Only meant for tests. */
export declare function resetCssBreakpointsCache(): void;
/**
 * Pixel value of a breakpoint. `DContextProvider` reads them from the CSS and
 * shares them through the context; outside of it (a tree without the
 * provider, or its first render) they are read from the same CSS variables
 * here, so responsive props resolve either way.
 */
export declare function useBreakpointValue(breakpoint: keyof BreakpointProps): string;
export declare function useMediaBreakpointUpXs(useListener?: boolean): boolean;
export declare function useMediaBreakpointUpSm(useListener?: boolean): boolean;
export declare function useMediaBreakpointUpMd(useListener?: boolean): boolean;
export declare function useMediaBreakpointUpLg(useListener?: boolean): boolean;
export declare function useMediaBreakpointUpXl(useListener?: boolean): boolean;
export declare function useMediaBreakpointUpXxl(useListener?: boolean): boolean;
