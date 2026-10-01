import {
  createContext,
  useContext,
} from 'react';

/**
 * The id a modal or offcanvas points `aria-labelledby` at.
 *
 * Both panels wrote `aria-labelledby={`${name}Label`}` and nothing anywhere
 * carried that id, so the reference dangled — and a dangling `aria-labelledby`
 * is not a fallback, it is ignored. The panel had **no accessible name at all**:
 * a screen reader announced a dialog with no title.
 *
 * It needed a context rather than a prop because the id belongs to the panel
 * and the element carrying it is in the header, which is a separate component a
 * consumer composes themselves. Passing it down by hand would mean every call
 * site had to get it right, which is how it broke in the first place.
 */
export const DOverlayContext = createContext<{ labelId?: string }>({});

export function useOverlayLabelId(): string | undefined {
  return useContext(DOverlayContext).labelId;
}
