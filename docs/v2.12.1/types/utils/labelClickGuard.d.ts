import type { MouseEvent } from 'react';
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
export default function labelClickGuard(event: MouseEvent<HTMLLabelElement>): void;
