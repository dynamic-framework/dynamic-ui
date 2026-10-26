import { useMemo } from 'react';
import { useDContext } from '../contexts/DContext.js';
import { PREFIX_BS } from '../components/config.js';
import useMediaQuery from './useMediaQuery.js';

const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
// Breakpoints read from the CSS on first use and shared by every component
// that resolves responsive props: one computed-style read for the page,
// instead of one per breakpoint per render. `dynamic-ui.css` has to be loaded
// before rendering; if it isn't, the empty result is kept too, so a
// misconfigured tree doesn't pay the read on every render (responsive props
// then keep their default value and useResponsiveProp warns in development).
let cssBreakpoints = null;
function readCssBreakpoint(breakpoint) {
    if (cssBreakpoints)
        return cssBreakpoints[breakpoint];
    if (typeof document === 'undefined')
        return '';
    const style = getComputedStyle(document.documentElement);
    const read = Object.fromEntries(BREAKPOINTS.map((name) => [
        name,
        style.getPropertyValue(`--${PREFIX_BS}breakpoint-${name}`).trim(),
    ]));
    cssBreakpoints = read;
    return read[breakpoint];
}
/** Clears the cached CSS breakpoints. Only meant for tests. */
function resetCssBreakpointsCache() {
    cssBreakpoints = null;
}
/**
 * Pixel value of a breakpoint. `DContextProvider` reads them from the CSS and
 * shares them through the context; outside of it (a tree without the
 * provider, or its first render) they are read from the same CSS variables
 * here, so responsive props resolve either way.
 */
function useBreakpointValue(breakpoint) {
    const { breakpoints } = useDContext();
    const fromContext = breakpoints[breakpoint];
    return useMemo(() => fromContext || readCssBreakpoint(breakpoint), [fromContext, breakpoint]);
}
function useMediaBreakpointUp(breakpoint, useListener = false) {
    const value = useBreakpointValue(breakpoint);
    // Without a breakpoint the query can't match; `not all` keeps it false
    // instead of an invalid `(min-width: )`.
    const mediaQuery = value ? `(min-width: ${value})` : 'not all';
    return useMediaQuery(mediaQuery, useListener);
}
function useMediaBreakpointUpXs(useListener = false) {
    return useMediaBreakpointUp('xs', useListener);
}
function useMediaBreakpointUpSm(useListener = false) {
    return useMediaBreakpointUp('sm', useListener);
}
function useMediaBreakpointUpMd(useListener = false) {
    return useMediaBreakpointUp('md', useListener);
}
function useMediaBreakpointUpLg(useListener = false) {
    return useMediaBreakpointUp('lg', useListener);
}
function useMediaBreakpointUpXl(useListener = false) {
    return useMediaBreakpointUp('xl', useListener);
}
function useMediaBreakpointUpXxl(useListener = false) {
    return useMediaBreakpointUp('xxl', useListener);
}

export { resetCssBreakpointsCache, useBreakpointValue, useMediaBreakpointUpLg, useMediaBreakpointUpMd, useMediaBreakpointUpSm, useMediaBreakpointUpXl, useMediaBreakpointUpXs, useMediaBreakpointUpXxl };
//# sourceMappingURL=useMediaBreakpointUp.js.map
