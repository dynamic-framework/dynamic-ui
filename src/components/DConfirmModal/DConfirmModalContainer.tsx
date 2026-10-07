import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import useRenderLoopWarning from '../../hooks/useRenderLoopWarning';

import {
  useConfirmModalStore,
  type ConfirmModalEntry,
} from './confirmModalStore';
import DConfirmModalUI from './DConfirmModalUI';

type Props = {
  /** ID of the DOM element (portal node) to render the confirm modal into. */
  nodeId: string;
};

/**
 * Container that renders confirm modals into the specified portal node.
 *
 * Must be explicitly mounted by the user (typically as a sibling of app content
 * within `DContextProvider`). Each confirm modal is a `DModal`, so it opens with
 * `showModal()` and enters the browser's top layer — which is what puts it above
 * the portal stack without `$zindex-modal + 10`, and what makes Escape close the
 * top one only.
 *
 * @example
 * <DContextProvider>
 *   <App />
 *   <DConfirmModalContainer nodeId="d-portal" />
 * </DContextProvider>
 */
export default function DConfirmModalContainer({ nodeId }: Props) {
  const store = useConfirmModalStore();
  const [entries, setEntries] = useState<ConfirmModalEntry[]>([]);

  useRenderLoopWarning('DConfirmModalContainer');

  useEffect(() => {
    const unsubscribe = store.subscribe((next) => {
      setEntries(next);
    });
    return unsubscribe;
  }, [store]);

  const portalNode = document.getElementById(nodeId);

  if (!portalNode || entries.length === 0) {
    return null;
  }

  /*
   * No wrapper, no second scrim, no animation library.
   *
   * This was an `<AnimatePresence>` of `motion.div`s fading a wrapper around
   * `DConfirmModalUI` — which renders a `DModal`, a native `<dialog>` that
   * already animates itself in `_d-modal.scss` with `@starting-style` and
   * `transition-behavior: allow-discrete`. The fade ran on top of the panel's
   * own transition, and `framer-motion` was on the page for it.
   *
   * The `.backdrop.backdrop-confirm-modal` div went with it: a native dialog
   * paints its scrim through `::backdrop`, so rendering a second one stacked two
   * dimming layers and left an element over the page swallowing the next click.
   * `DPortalContext` had already been fixed for exactly this and the fix never
   * reached here.
   *
   * Escape went too: it was a capture-phase `keydown` listener here, fighting
   * the one in `DPortalContext` for who got to handle the key. `<dialog>` fires
   * `close` for Escape on its own, and the confirm modal is in the top layer, so
   * the browser already routes the key to the topmost panel.
   * `DConfirmModalUI` passes the store's `onCloseAction` as the panel's
   * `onClose`, which covers Escape and the outside click together.
   */
  return createPortal(
    entries.map((entry) => <DConfirmModalUI key={entry.id} entry={entry} />),
    portalNode,
  );
}
