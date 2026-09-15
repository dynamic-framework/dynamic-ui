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
 */
export default function hasLabelContent(label: ReactNode): boolean {
  return label !== undefined
    && label !== null
    && label !== ''
    && typeof label !== 'boolean';
}
