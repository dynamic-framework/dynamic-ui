import { useCallback } from 'react';

import type {
  ForwardedRef,
  RefObject,
  WheelEvent,
} from 'react';

import useProvidedRefOrCreate from './useProvidedRefOrCreate';

export default function useDisableInputWheel(ref?: ForwardedRef<HTMLInputElement>) {
  const inputRef = useProvidedRefOrCreate(ref as RefObject<HTMLInputElement>);

  const handleOnWheel = useCallback((event: WheelEvent<HTMLInputElement>) => {
    event.stopPropagation();
    inputRef.current?.blur();
  }, [inputRef]);

  return {
    handleOnWheel,
  };
}
