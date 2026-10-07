import { useEffect, useState } from 'react';

/**
 * @internal
 * Resolves the DOM `<div>` portal mount point for a provider, creating it on
 * `document.body` the first time. This hook is used exclusively by
 * `DPortalContextProvider` and is **not** part of the public API. Use
 * `useDPortalContext` instead.
 *
 * ## Why it reuses rather than replaces
 *
 * This used to destroy any existing node with the same id and put a fresh one in
 * its place:
 *
 * ```js
 * const previous = document.querySelector(`#${portalName}`);
 * if (previous) previous.remove();
 * ```
 *
 * Which is fine for exactly one provider and hostile to two. A second provider
 * on the same `portalName` ripped the node out from under the first — and the
 * first is still rendering into it through `createPortal`, so whatever it had
 * open was detached from the document without anything noticing. A Storybook
 * docs page mounts one provider per story, so the modal page did this a dozen
 * times over on load.
 *
 * It got worse when the panels became `<dialog>`s. A detached node is merely
 * invisible; a `<dialog>` that is detached while `showModal()` has it in the TOP
 * LAYER leaves the page `inert` behind a modal that is no longer in the
 * document. The page paints and then ignores every click, which reads as the
 * browser hanging rather than as anything to do with portals.
 *
 * Sharing one container between providers is not a problem: `createPortal`
 * manages its own children inside it, and two portals into one node do not see
 * each other. Destroying the container was the problem.
 *
 * The node is deliberately NOT removed on unmount. It is an empty `<div>`, the
 * previous version left exactly one behind anyway, and removing it would mean
 * deciding whether another provider still needs it — the question that caused
 * this.
 */
export default function usePortal(portalName: string) {
  const [hasPortal, setHasPortal] = useState(false);

  useEffect(() => {
    const existing = document.getElementById(portalName);

    if (existing) {
      /* Adopt it: a consumer may have put the node in their HTML themselves. */
      existing.classList.add('d-portal');
      setHasPortal(true);
      return;
    }

    const portal = document.createElement('div');
    portal.id = portalName;
    portal.className = 'd-portal';
    document.body.appendChild(portal);
    setHasPortal(true);
  }, [portalName]);

  return { created: hasPortal };
}
