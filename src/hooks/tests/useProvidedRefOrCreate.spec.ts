import { renderHook } from '@testing-library/react';
import React from 'react';
import useProvidedRefOrCreate from '../useProvidedRefOrCreate';

describe('useProvidedRefOrCreate', () => {
  it('should return provided ref if given', () => {
    const providedRef = React.createRef<HTMLDivElement>();
    const { result } = renderHook(() => useProvidedRefOrCreate<HTMLDivElement>(providedRef));
    expect(result.current).toBe(providedRef);
  });

  it('should create a new ref if none is provided', () => {
    const { result } = renderHook(() => useProvidedRefOrCreate<HTMLDivElement>());
    expect(result.current).toHaveProperty('current');
    expect(result.current.current).toBeNull();
  });

  it('should keep the same ref instance between renders if none is provided', () => {
    const { result, rerender } = renderHook(() => useProvidedRefOrCreate<HTMLDivElement>());
    const firstRef = result.current;
    rerender();
    expect(result.current).toBe(firstRef);
  });

  it('should keep the provided ref instance between renders', () => {
    const providedRef = React.createRef<HTMLDivElement>();
    const { result, rerender } = renderHook(
      () => useProvidedRefOrCreate<HTMLDivElement>(providedRef),
    );
    const firstRef = result.current;
    rerender();
    expect(result.current).toBe(firstRef);
  });
});
