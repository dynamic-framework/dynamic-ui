/**
 * Deferred media inside a carousel slide.
 *
 * ## Why this exists when `loading="lazy"` does
 *
 * Native lazy loading is the right default and this does not replace it: a
 * slide scrolled off to the side does not intersect the viewport, so the
 * browser already defers it, in both environments and **without JavaScript** —
 * which the framework-free layer promises and this cannot keep.
 *
 * What native does badly in a carousel is the look-ahead. Its threshold is
 * tuned for a page scrolling vertically, so it either defers too eagerly and
 * the next slide arrives blank, or not at all. This keys off the carousel's
 * own notion of which slides are near, so the neighbour is already loading
 * when it is reached.
 *
 * It also covers what `loading="lazy"` does not: an `<iframe>` with a map, a
 * `<video>` poster, anything whose cost is a `src`.
 *
 * ## The contract
 *
 * ```html
 * <div class="df-carousel-slide" data-visible>
 *   <img data-src="hero.jpg" data-srcset="hero@2x.jpg 2x" width="800" height="450" alt="…">
 * </div>
 * ```
 *
 * Identical in React and in the vanilla build, because it is a contract about
 * the DOM rather than about a framework. This function is the whole of it, and
 * both layers call it.
 *
 * ## The cost, stated
 *
 * With `data-src` the image does not load at all without JavaScript. That is a
 * real trade and the reason this is opt-in: use `loading="lazy"` unless the
 * look-ahead or the non-image cases are what you need.
 */

/** Attributes moved onto the element, in the order a browser wants them. */
const DEFERRED = [
  /* `srcset` before `src`: a browser picks from `srcset` when both are set,
     and setting `src` first can start a download it then discards. */
  ['data-srcset', 'srcset'],
  ['data-sizes', 'sizes'],
  ['data-src', 'src'],
  ['data-poster', 'poster'],
] as const;

const SELECTOR = DEFERRED.map(([from]) => `[${from}]`).join(',');

function warnUnsized(element: Element): void {
  if (process.env.NODE_ENV === 'production') return;
  if (!(element instanceof HTMLImageElement)) return;
  if (element.getAttribute('width') && element.getAttribute('height')) return;
  if (element.style.aspectRatio) return;

  // eslint-disable-next-line no-console
  console.warn(
    '[dynamic-ui] a deferred image has no width/height and no aspect-ratio, so '
    + 'the slide will jump when it loads. Give it both attributes, or an '
    + 'aspect-ratio, and the space is reserved before the bytes arrive.',
    element,
  );
}

/**
 * Swaps every deferred attribute inside `root`, and reports how many elements
 * it touched.
 *
 * Idempotent: the attributes are removed as they are moved, so a slide that
 * scrolls in and out does not re-trigger anything, and an element already
 * loaded is skipped by the selector rather than by a flag nobody can see.
 */
export default function loadDeferredMedia(root: ParentNode): number {
  const pending = root.querySelectorAll(SELECTOR);

  pending.forEach((element) => {
    warnUnsized(element);

    DEFERRED.forEach(([from, to]) => {
      const value = element.getAttribute(from);
      if (value === null) return;
      element.setAttribute(to, value);
      element.removeAttribute(from);
    });
  });

  return pending.length;
}
