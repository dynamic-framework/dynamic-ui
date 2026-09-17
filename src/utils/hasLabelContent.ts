import { isValidElement } from 'react';

import type { ReactNode } from 'react';

/**
 * Whether a `DLabel` has something to render.
 *
 * The render paths cannot test `label` for truthiness: since the prop widened
 * to `ReactNode` it also accepts `0`, which React renders as the text "0" and
 * which `isTextLabel` counts as a text label, yet which a truthiness check
 * would drop — leaving the control visibly unlabelled.
 *
 * Absent (`undefined`, `null`), empty (`''`) and boolean labels render nothing,
 * so they are the ones that stand for "no label". The empty string matters
 * because it is the default several components fall back to.
 *
 * Iterables are inspected rather than taken at face value: `ReactNode` includes
 * them, and `label={items.map(...)}` over an empty list yields `[]`, while a
 * list of skipped entries yields `[false, null]`. Both render nothing, so
 * treating them as content would leave an empty `<label>` on the page — and
 * make the naming warning fire over a label that was never there.
 *
 * Anything else — an element, a portal — counts as content: what it renders is
 * only knowable by rendering it, and an element that draws nothing visible is
 * the consumer's decision rather than an absent label.
 */
export default function hasLabelContent(label: ReactNode): boolean {
  if (label === undefined || label === null || typeof label === 'boolean') {
    return false;
  }

  if (typeof label === 'string') {
    return label !== '';
  }

  if (isValidElement(label)) {
    return true;
  }

  if (typeof label === 'object' && Symbol.iterator in label) {
    return Array.from(label as Iterable<ReactNode>).some(hasLabelContent);
  }

  return true;
}
