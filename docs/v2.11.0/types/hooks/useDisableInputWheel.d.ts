import type { ForwardedRef, WheelEvent } from 'react';
export default function useDisableInputWheel(ref?: ForwardedRef<HTMLInputElement>): {
    handleOnWheel: (event: WheelEvent<HTMLInputElement>) => void;
};
