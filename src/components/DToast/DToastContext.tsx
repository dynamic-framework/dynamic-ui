import { createContext, useContext } from 'react';

/**
 * What a toast's content can know about itself.
 *
 * 2.x handed a custom toast `react-hot-toast`'s own `Toast` object — an `id`
 * and a `visible` flag the content had to translate into rendering `null`.
 * Both were the library's bookkeeping leaking into a consumer's component:
 * the container decides what is mounted, so `visible` was never the content's
 * business, and the `id` only existed so the content could call the LIBRARY's
 * dismiss.
 *
 * A context instead, so content gets the one thing it actually needs — a way
 * to close itself — without being handed an id to pass back somewhere.
 */
export type DToastContextValue = {
  /** This toast's id, for a consumer that tracks its own notifications. */
  id: string;
  /** Starts this toast's exit. */
  dismiss: () => void;
};

export const DToastContext = createContext<DToastContextValue | undefined>(undefined);

/**
 * The toast the calling component is inside.
 *
 * Throws outside one rather than returning `undefined`: a dismiss button that
 * silently does nothing is a worse outcome than a message naming the mistake,
 * and there is no sensible fallback for "which toast am I in".
 */
export function useDToastContext(): DToastContextValue {
  const value = useContext(DToastContext);
  if (!value) {
    throw new Error(
      'useDToastContext must be called inside a toast — pass the component to `toast()`',
    );
  }
  return value;
}
