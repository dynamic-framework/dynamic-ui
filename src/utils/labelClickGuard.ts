import type { MouseEvent } from 'react';

/**
 * Descendants the browser already exempts from a label's click forwarding.
 *
 * Per the HTML spec a label does nothing for events targeted at its interactive
 * content descendants, so these need — and must get — no help from us: calling
 * `preventDefault` on a click targeting a link, or on an image map area, would
 * cancel the navigation it was meant to perform.
 *
 * The list mirrors the spec's interactive content, image maps included, since
 * one of those carrying a `tabindex` would otherwise fall through to the
 * pseudo-interactive branch below and be suppressed by mistake.
 */
const NATIVE_INTERACTIVE = 'a[href], area[href], button, input, select, textarea, details, summary, img[usemap], object[usemap], audio[controls], video[controls], embed, iframe';

/**
 * Descendants that act like controls without being interactive content.
 *
 * A tooltip or modal trigger built from a `span` with a role and a tabindex is
 * the common case. Browsers do not exempt these, so a click on one activates
 * the labelled control as well.
 */
const PSEUDO_INTERACTIVE = '[role="button"], [role="link"], [role="checkbox"], [role="switch"], [role="menuitem"], [tabindex]';

/**
 * Stops a click on a non-native trigger inside a `<label>` from also activating
 * the labelled control.
 *
 * Verified against Chromium, which forwards the click for every one of the
 * `PSEUDO_INTERACTIVE` selectors above while exempting the native ones. Note
 * that jsdom does not reproduce this: its `isInteractiveContent` counts any
 * element carrying a `tabindex` as interactive content, so a jsdom test passes
 * whether or not this guard exists. That is why the guard is unit-tested
 * directly rather than through a rendered component.
 *
 * Native interactive content returns early rather than falling through, since
 * `preventDefault` on those clicks would cancel the link navigation or the
 * image map the label is meant to let through.
 *
 * `DFormLabel` wires this in the capture phase so a trigger that stops
 * propagation cannot skip it.
 */
export default function labelClickGuard(event: MouseEvent<HTMLLabelElement>): void {
  const label = event.currentTarget;
  const target = event.target as HTMLElement | null;

  if (!target?.closest) return;

  /**
   * `closest` walks the whole ancestor chain, so a match may sit above the
   * label — a card with a `role` or a `tabindex` wrapping the control and its
   * label, say. Acting on one of those would suppress the plain label text's
   * own click and leave the control unresponsive, so only matches inside the
   * label count.
   */
  const inside = (match: Element | null) => (
    !!match && match !== label && label.contains(match)
  );

  if (inside(target.closest(NATIVE_INTERACTIVE))) return;

  if (inside(target.closest(PSEUDO_INTERACTIVE))) {
    event.preventDefault();
  }
}
