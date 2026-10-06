import { useCallback } from 'react';
import { PREFIX_BS } from '../components/config.js';
import { useMediaBreakpointUpXs, useMediaBreakpointUpSm, useMediaBreakpointUpMd, useMediaBreakpointUpLg, useMediaBreakpointUpXl, useMediaBreakpointUpXxl, useBreakpointValue } from './useMediaBreakpointUp.js';

let warnedMissingBreakpoints = false;
/**
 * React hook to resolve a responsive property value based on the current viewport breakpoint.
 *
 * Given a `ResponsiveProp` object, this hook returns the value for the highest matching breakpoint.
 * If multiple breakpoints match, the value for the largest (highest) breakpoint is used.
 * If no breakpoints match, `undefined` is returned.
 *
 * @param useListener - Whether to listen for breakpoint changes (default: false).
 * @returns An object with a `responsivePropValue` function that takes a
 * `ResponsiveProp` and returns the resolved value.
 *
 * Usage example:
 * ```ts
 * const { responsivePropValue } = useResponsiveProp();
 * const value = responsivePropValue({ xs: "A", md: "B", xl: "C" });
 * // value will be "C" if xl breakpoint is active, "B" if md is active, etc.
 * ```
 */
function useResponsiveProp(useListener = false) {
    const bpXsUp = useMediaBreakpointUpXs(useListener);
    const bpSmUp = useMediaBreakpointUpSm(useListener);
    const bpMdUp = useMediaBreakpointUpMd(useListener);
    const bpLgUp = useMediaBreakpointUpLg(useListener);
    const bpXlUp = useMediaBreakpointUpXl(useListener);
    const bpXxlUp = useMediaBreakpointUpXxl(useListener);
    // `xs` is `0` and can't tell a missing variable apart, so `sm` is checked.
    const hasBreakpoints = !!useBreakpointValue('sm');
    const responsivePropValue = useCallback((prop) => {
        if (process.env.NODE_ENV !== 'production' && !hasBreakpoints && !warnedMissingBreakpoints) {
            warnedMissingBreakpoints = true;
            // eslint-disable-next-line no-console
            console.warn(`[Dynamic UI] The --${PREFIX_BS}breakpoint-* CSS variables are not available, so a `
                + 'responsive prop (an object by breakpoint) falls back to its default value. Load '
                + 'dynamic-ui.css before rendering. It never appears in production builds.');
        }
        // Pick the highest matched breakpoint value that is defined in prop
        if (prop.xxl !== undefined && bpXxlUp)
            return prop.xxl;
        if (prop.xl !== undefined && bpXlUp)
            return prop.xl;
        if (prop.lg !== undefined && bpLgUp)
            return prop.lg;
        if (prop.md !== undefined && bpMdUp)
            return prop.md;
        if (prop.sm !== undefined && bpSmUp)
            return prop.sm;
        if (prop.xs !== undefined && bpXsUp)
            return prop.xs;
        // Fallback: return undefined if no breakpoint matches
        return undefined;
    }, [bpSmUp, bpMdUp, bpLgUp, bpXlUp, bpXxlUp, bpXsUp, hasBreakpoints]);
    return { responsivePropValue };
}

export { useResponsiveProp };
//# sourceMappingURL=useResponsiveProp.js.map
