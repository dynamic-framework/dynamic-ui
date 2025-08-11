import { renderHook } from '@testing-library/react';
import useDisableBodyScrollEffect from '../useDisableBodyScrollEffect';

describe('useDisableBodyScrollEffect', () => {
  beforeEach(() => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  });

  it('should set body overflow and paddingRight to hidden and 0px when disable is true', () => {
    renderHook(() => useDisableBodyScrollEffect(true));
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.body.style.paddingRight).toBe('0px');
  });

  it('should set body overflow and paddingRight to unset when disable is false', () => {
    renderHook(() => useDisableBodyScrollEffect(false));
    expect(document.body.style.overflow).toBe('unset');
    expect(document.body.style.paddingRight).toBe('0px');
  });

  it('should reset body styles when disable changes from true to false', () => {
    const { rerender } = renderHook((props) => useDisableBodyScrollEffect(props), {
      initialProps: true,
    });
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.body.style.paddingRight).toBe('0px');
    rerender(false);
    expect(document.body.style.overflow).toBe('unset');
    expect(document.body.style.paddingRight).toBe('0px');
  });
});
