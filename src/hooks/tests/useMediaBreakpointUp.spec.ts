import { renderHook } from '@testing-library/react';
import * as DContext from '../../contexts/DContext';
import {
  useMediaBreakpointUpLg,
  useMediaBreakpointUpMd,
  useMediaBreakpointUpSm,
  useMediaBreakpointUpXl,
  useMediaBreakpointUpXs,
  useMediaBreakpointUpXxl,
} from '../useMediaBreakpointUp';

const breakpoints = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

jest.mock('../../contexts/DContext', () => ({
  useDContext: jest.fn(),
}));

jest.mock('../useMediaQuery', () => jest.fn(() => true));

describe('useMediaBreakpointUp shortcuts', () => {
  beforeEach(() => {
    (DContext.useDContext as jest.Mock).mockReturnValue({ breakpoints });
  });

  it('useMediaBreakpointUpXs', () => {
    const { result } = renderHook(() => useMediaBreakpointUpXs());
    expect(result.current).toBe(true);
  });
  it('useMediaBreakpointUpSm', () => {
    const { result } = renderHook(() => useMediaBreakpointUpSm());
    expect(result.current).toBe(true);
  });
  it('useMediaBreakpointUpMd', () => {
    const { result } = renderHook(() => useMediaBreakpointUpMd());
    expect(result.current).toBe(true);
  });
  it('useMediaBreakpointUpLg', () => {
    const { result } = renderHook(() => useMediaBreakpointUpLg());
    expect(result.current).toBe(true);
  });
  it('useMediaBreakpointUpXl', () => {
    const { result } = renderHook(() => useMediaBreakpointUpXl());
    expect(result.current).toBe(true);
  });
  it('useMediaBreakpointUpXxl', () => {
    const { result } = renderHook(() => useMediaBreakpointUpXxl());
    expect(result.current).toBe(true);
  });
});
