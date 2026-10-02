import { useMemo } from 'react';

import { useDContext } from '../contexts/DContext';
import { PREFIX_BS } from '../components/config';

import type { BreakpointProps } from '../contexts/DContext';
import useMediaQuery from './useMediaQuery';

const BREAKPOINTS: Array<keyof BreakpointProps> = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

// Breakpoints read from the CSS on first use and shared by every component
// that resolves responsive props: one computed-style read for the page,
// instead of one per breakpoint per render. `dynamic-ui.css` has to be loaded
// before rendering; if it isn't, the empty result is kept too, so a
// misconfigured tree doesn't pay the read on every render (responsive props
// then keep their default value and useResponsiveProp warns in development).
let cssBreakpoints: BreakpointProps | null = null;

function readCssBreakpoint(breakpoint: keyof BreakpointProps): string {
  if (cssBreakpoints) return cssBreakpoints[breakpoint];
  if (typeof document === 'undefined') return '';

  const style = getComputedStyle(document.documentElement);
  const read = Object.fromEntries(BREAKPOINTS.map((name) => [
    name,
    style.getPropertyValue(`--${PREFIX_BS}breakpoint-${name}`).trim(),
  ])) as BreakpointProps;

  cssBreakpoints = read;
  return read[breakpoint];
}

/** Clears the cached CSS breakpoints. Only meant for tests. */
export function resetCssBreakpointsCache() {
  cssBreakpoints = null;
}

/**
 * Pixel value of a breakpoint. `DContextProvider` reads them from the CSS and
 * shares them through the context; outside of it (a tree without the
 * provider, or its first render) they are read from the same CSS variables
 * here, so responsive props resolve either way.
 */
export function useBreakpointValue(breakpoint: keyof BreakpointProps) {
  const { breakpoints } = useDContext();
  const fromContext = breakpoints[breakpoint];

  return useMemo(
    () => fromContext || readCssBreakpoint(breakpoint),
    [fromContext, breakpoint],
  );
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
