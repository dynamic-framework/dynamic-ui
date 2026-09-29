import { useMemo } from 'react';

import { useDContext } from '../contexts/DContext';
import { PREFIX_BS } from '../components/config';
import getCssVariable from '../utils/getCssVariable';

import type { BreakpointProps } from '../contexts/DContext';
import useMediaQuery from './useMediaQuery';

/**
 * Pixel value of a breakpoint. `DContextProvider` reads them from the CSS and
 * shares them through the context; outside of it (a tree without the
 * provider, or its first render) they are read from the same CSS variables
 * here, so responsive props resolve either way.
 */
export function useBreakpointValue(breakpoint: keyof BreakpointProps) {
  const { breakpoints } = useDContext();
  const fromContext = breakpoints[breakpoint];

  return useMemo(() => {
    if (fromContext) return fromContext;
    if (typeof document === 'undefined') return '';
    return getCssVariable(`--${PREFIX_BS}breakpoint-${breakpoint}`);
  }, [fromContext, breakpoint]);
}

function useMediaBreakpointUp(
  breakpoint: keyof BreakpointProps,
  useListener: boolean = false,
) {
  const value = useBreakpointValue(breakpoint);

  // Without a breakpoint the query can't match; `not all` keeps it false
  // instead of an invalid `(min-width: )`.
  const mediaQuery = value ? `(min-width: ${value})` : 'not all';

  return useMediaQuery(mediaQuery, useListener);
}

export function useMediaBreakpointUpXs(useListener: boolean = false) {
  return useMediaBreakpointUp('xs', useListener);
}

export function useMediaBreakpointUpSm(useListener: boolean = false) {
  return useMediaBreakpointUp('sm', useListener);
}

export function useMediaBreakpointUpMd(useListener: boolean = false) {
  return useMediaBreakpointUp('md', useListener);
}

export function useMediaBreakpointUpLg(useListener: boolean = false) {
  return useMediaBreakpointUp('lg', useListener);
}

export function useMediaBreakpointUpXl(useListener: boolean = false) {
  return useMediaBreakpointUp('xl', useListener);
}

export function useMediaBreakpointUpXxl(useListener: boolean = false) {
  return useMediaBreakpointUp('xxl', useListener);
}
