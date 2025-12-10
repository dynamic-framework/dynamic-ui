import { useCallback } from 'react';
import {
  useMediaBreakpointUpLg,
  useMediaBreakpointUpMd,
  useMediaBreakpointUpSm,
  useMediaBreakpointUpXl,
  useMediaBreakpointUpXxl,
} from './useMediaBreakpointUp';

export type ResponsivePropType = Partial<Record<'sm' | 'md' | 'lg' | 'xl' | 'xxl', string>>;

export function useResponsiveProp(useListener: boolean = false) {
  const bpSmUp = useMediaBreakpointUpSm(useListener);
  const bpMdUp = useMediaBreakpointUpMd(useListener);
  const bpLgUp = useMediaBreakpointUpLg(useListener);
  const bpXlUp = useMediaBreakpointUpXl(useListener);
  const bpXxlUp = useMediaBreakpointUpXxl(useListener);

  const responsivePropValue = useCallback((prop: ResponsivePropType) => {
    // Pick the highest matched breakpoint value que esté definido en prop
    if (prop.xxl !== undefined && bpXxlUp) return prop.xxl;
    if (prop.xl !== undefined && bpXlUp) return prop.xl;
    if (prop.lg !== undefined && bpLgUp) return prop.lg;
    if (prop.md !== undefined && bpMdUp) return prop.md;
    if (prop.sm !== undefined && bpSmUp) return prop.sm;

    // Fallback: pick the smallest defined value
    return prop.sm ?? prop.md ?? prop.lg ?? prop.xl ?? prop.xxl;
  }, [bpSmUp, bpMdUp, bpLgUp, bpXlUp, bpXxlUp]);

  return { responsivePropValue };
}
