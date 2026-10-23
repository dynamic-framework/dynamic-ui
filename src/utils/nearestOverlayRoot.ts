/**
 * The nearest overlay above an element — a modal or an offcanvas — or
 * `undefined` when the element is on the page itself.
 *
 * ## Why a floating menu needs this
 *
 * `<FloatingPortal>` with no `root` mounts into `document.body`, and a menu
 * there is no longer inside the overlay that contains the control that opened
 * it. Two things then go wrong at once: `$zindex-dropdown` (1000) sits below
 * `$zindex-modal` (1055), so the menu paints behind the modal; and `DModal`
 * animates with a `transform`, which makes it the containing block for any
 * fixed-position descendant — so the coordinates floating-ui computed against
 * the viewport stop meaning what they said.
 *
 * Portalling into the overlay solves both: the menu shares its stacking
 * context and its containing block. A select inside a modal is not an edge
 * case; a filter panel is where most of them live.
 *
 * `dialog[open]` is in the list for a consumer rendering a native dialog: it
 * puts the element in the browser's top layer, which paints above the whole
 * document whatever `z-index` says, so a menu on the body would be hidden
 * behind it with no value of `z-index` able to help. A closed `<dialog>` is
 * not rendered at all, hence `[open]` — portalling into one would hide the
 * menu completely.
 *
 * ## Why a function and not a hook
 *
 * The answer depends on where the control is in the DOM right now — the same
 * component is mounted inside a modal on one screen and on the page on
 * another — but it does not need to be remembered. Resolving it during the
 * render that opens the menu means the menu mounts in the right place the
 * first time; a hook holding it in state would mount it on the body for one
 * frame and then move it, remounting the subtree.
 */
export default function nearestOverlayRoot(
  element: Element | null | undefined,
): HTMLElement | undefined {
  /*
   * Guarded rather than called directly: the reference is read during render,
   * so on the very first render it is still null, and a test may hand this a
   * detached node from an environment without `closest`.
   */
  if (!element || typeof element.closest !== 'function') return undefined;
  return element.closest<HTMLElement>('.modal, .offcanvas, dialog[open]') ?? undefined;
}
