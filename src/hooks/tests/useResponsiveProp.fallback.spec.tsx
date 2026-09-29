import { renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';
import { DContextProvider } from '../../contexts';
import { useBreakpointValue } from '../useMediaBreakpointUp';
import { useResponsiveProp } from '../useResponsiveProp';

const setBreakpoint = (name: string, value: string | null) => {
  if (value === null) document.documentElement.style.removeProperty(`--bs-breakpoint-${name}`);
  else document.documentElement.style.setProperty(`--bs-breakpoint-${name}`, value);
};

describe('breakpoints without DContextProvider', () => {
  afterEach(() => setBreakpoint('sm', null));

  it('reads the breakpoint from the CSS variable outside the provider', () => {
    setBreakpoint('sm', '576px');
    const { result } = renderHook(() => useBreakpointValue('sm'));
    expect(result.current).toBe('576px');
  });

  it('uses the value shared by DContextProvider inside it', () => {
    setBreakpoint('sm', '576px');
    const wrapper = ({ children }: { children: ReactNode }) => (
      <DContextProvider>{children}</DContextProvider>
    );
    const { result } = renderHook(() => useBreakpointValue('sm'), { wrapper });
    expect(result.current).toBe('576px');
  });

  it('warns once, only when a responsive object is resolved without breakpoints', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation();
    const { result } = renderHook(() => useResponsiveProp());
    expect(warn).not.toHaveBeenCalled();

    result.current.responsivePropValue({ xs: 'sm', lg: 'lg' });
    result.current.responsivePropValue({ md: 'lg' });
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn.mock.calls[0][0]).toContain('--bs-breakpoint-* CSS variables are not available');
    warn.mockRestore();
  });
});
