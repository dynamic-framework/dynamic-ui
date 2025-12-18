import { renderHook } from '@testing-library/react';
import { checkMediaQuery, subscribeToMediaQuery } from '../../utils/mediaQuery';
import useMediaQuery from '../useMediaQuery';

jest.mock('../../utils/mediaQuery', () => ({
  subscribeToMediaQuery: jest.fn(() => () => {}),
  checkMediaQuery: jest.fn(),
}));

describe('useMediaQuery', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: query === '(min-width: 100px)',
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      })),
    });
  });

  it('should use subscribeToMediaQuery when useListener is true', () => {
    (checkMediaQuery as jest.Mock).mockReturnValue(true);
    const { result } = renderHook(() => useMediaQuery('(min-width: 100px)', true));
    expect(result.current).toBe(true);
    expect(subscribeToMediaQuery).toHaveBeenCalled();
  });

  it('should use noop as subscribe function when useListener is false', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 100px)', false));
    expect(result.current).toBe(true);
  });

  it('should return true if mediaQuery is falsy', () => {
    const { result } = renderHook(() => useMediaQuery('', false));
    expect(result.current).toBe(true);
  });

  it('should return false if checkMediaQuery returns false and useListener is true', () => {
    (checkMediaQuery as jest.Mock).mockReturnValue(false);
    const { result } = renderHook(() => useMediaQuery('(min-width: 200px)', true));
    expect(result.current).toBe(false);
  });
});
