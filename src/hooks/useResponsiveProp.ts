import { useCallback } from 'react';
import {
  useMediaBreakpointUpLg,
  useMediaBreakpointUpMd,
  useMediaBreakpointUpSm,
  useMediaBreakpointUpXl,
  useMediaBreakpointUpXs,
  useMediaBreakpointUpXxl,
} from './useMediaBreakpointUp';

/**
 * A mapping of breakpoint names to values for responsive properties.
 *
 * This type allows you to specify a value for one or more
 * breakpoints ('xs', 'sm', 'md', 'lg', 'xl', 'xxl').
 * When used with `useResponsiveProp`, the value for
 * the highest matching breakpoint will be selected.
 *
 * Usage example:
 * ```ts
 * const prop: ResponsiveProp = { xs: "small", md: "medium", xl: "large" };
 * ```
 */
export type ResponsiveProp = Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl', string>>;

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
export function useResponsiveProp(useListener: boolean = false) {
  const bpXsUp = useMediaBreakpointUpXs(useListener);
  const bpSmUp = useMediaBreakpointUpSm(useListener);
  const bpMdUp = useMediaBreakpointUpMd(useListener);
  const bpLgUp = useMediaBreakpointUpLg(useListener);
  const bpXlUp = useMediaBreakpointUpXl(useListener);
  const bpXxlUp = useMediaBreakpointUpXxl(useListener);

  const responsivePropValue = useCallback((prop: ResponsiveProp) => {
    // Pick the highest matched breakpoint value that is defined in prop
    if (prop.xxl !== undefined && bpXxlUp) return prop.xxl;
    if (prop.xl !== undefined && bpXlUp) return prop.xl;
    if (prop.lg !== undefined && bpLgUp) return prop.lg;
    if (prop.md !== undefined && bpMdUp) return prop.md;
    if (prop.sm !== undefined && bpSmUp) return prop.sm;
    if (prop.xs !== undefined && bpXsUp) return prop.xs;

    // Fallback: return undefined if no breakpoint matches
    return undefined;
  }, [bpSmUp, bpMdUp, bpLgUp, bpXlUp, bpXxlUp, bpXsUp]);

  return { responsivePropValue };
}
