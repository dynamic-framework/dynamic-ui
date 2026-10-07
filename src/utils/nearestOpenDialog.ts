/**
 * The nearest open `<dialog>` above an element, or `undefined`.
 *
 * ## Why a floating menu needs this
 *
 * `<FloatingPortal>` with no `root` — and `createPortal(…, document.body)` —
 * mount into `document.body`. `DModal` and `DOffcanvas` open with
 * `showModal()`, which puts the dialog in the browser's TOP LAYER, and the top
 * layer paints above the entire document regardless of `z-index` — so a menu
 * portalled to the body renders BEHIND the modal that contains the control
 * that opened it. No value of `--bs-dropdown-zindex` fixes it: the two are not
 * in comparable stacking contexts.
 *
 * Portalling into the dialog puts the menu in the top layer too. A select or a
 * date picker inside a modal is not an edge case; a filter offcanvas is where
 * most of them live.
 *
 * ## Why a function and not a hook
 *
 * The answer depends on where the control is in the DOM right now — the same
 * component is mounted inside a modal on one screen and on the page on another
 * — but it does not need to be remembered. Resolving it during the render that
 * opens the menu means the menu mounts in the right place the first time; a
 * hook holding it in state would mount it on the body for one frame and then
 * move it, remounting the subtree.
 *
 * `[open]` rather than any `<dialog>`, because a closed dialog is not in the
 * top layer and is not rendered at all — portalling into one would hide the
 * menu completely.
 */
export default function nearestOpenDialog(
  element: Element | null | undefined,
): HTMLElement | undefined {
  /*
   * Guarded rather than called directly: the reference is read during render,
   * so on the very first render it is still null, and a test may hand this a
   * detached node from an environment without `closest`.
   */
  if (!element || typeof element.closest !== 'function') return undefined;
  return element.closest<HTMLDialogElement>('dialog[open]') ?? undefined;
}
