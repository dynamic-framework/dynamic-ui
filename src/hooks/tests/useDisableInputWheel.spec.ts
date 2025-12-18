/* eslint-disable @typescript-eslint/unbound-method */

import { renderHook } from '@testing-library/react';
import { createRef } from 'react';
import useDisableInputWheel from '../useDisableInputWheel';

describe('useDisableInputWheel', () => {
  it('should call stopPropagation and blur on wheel event', () => {
    const ref = createRef<HTMLInputElement>();
    ref.current = document.createElement('input');

    const blurSpy = jest.spyOn(ref.current, 'blur');
    const { result } = renderHook(() => useDisableInputWheel(ref));
    const event = {
      stopPropagation: jest.fn(),
    } as unknown as React.WheelEvent<HTMLInputElement>;

    result.current.handleOnWheel(event);

    expect(event.stopPropagation).toHaveBeenCalled();
    expect(blurSpy).toHaveBeenCalled();
  });

  it('should not throw if ref.current is null', () => {
    const ref = createRef<HTMLInputElement>();
    ref.current = null;
    const { result } = renderHook(() => useDisableInputWheel(ref));
    const event = {
      stopPropagation: jest.fn(),
    } as unknown as React.WheelEvent<HTMLInputElement>;

    expect(() => result.current.handleOnWheel(event)).not.toThrow();
  });
});
