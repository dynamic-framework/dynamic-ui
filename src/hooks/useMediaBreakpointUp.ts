import { useMemo } from 'react';

import { useDContext } from '../contexts/DContext';

import type { BreakpointProps } from '../contexts/DContext';
import useMediaQuery from './useMediaQuery';

export default function useMediaBreakpointUp(
  breakpoint: keyof BreakpointProps,
  useListener: boolean = false,
) {
  const { breakpoints } = useDContext();

  const mediaQuery = useMemo(() => (
    `(min-width: ${breakpoints[breakpoint]})`
  ), [breakpoint, breakpoints]);

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
