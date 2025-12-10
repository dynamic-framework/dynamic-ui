import { useCallback } from 'react';
import {
  useMediaBreakpointUpLg,
  useMediaBreakpointUpMd,
  useMediaBreakpointUpSm,
  useMediaBreakpointUpXl,
  useMediaBreakpointUpXs,
  useMediaBreakpointUpXxl,
} from './useMediaBreakpointUp';

export type ResponsiveProp = Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl', string>>;

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
