import type { ReactNode } from 'react';

/**
 * Narrows a `DLabel` to the plain-text case.
 *
 * `label` accepts any `ReactNode` so patterns like a terms-and-conditions link
 * or an info trigger can live next to the field name. Anything that is not text
 * cannot be forwarded to a string-only attribute (`aria-label`, `placeholder`)
 * nor laid out by Bootstrap's `form-floating`, so those paths check this first.
 *
 * Numbers and bigints count as text: React renders them as their string form
 * and so does `String()`, which is what the string-only attributes end up
 * receiving. `bigint` is part of `ReactNode` under these React types, so
 * leaving it out made a label React draws as text get treated as a rich node.
 */
export default function isTextLabel(label: ReactNode): label is string | number | bigint {
  return typeof label === 'string'
    || typeof label === 'number'
    || typeof label === 'bigint';
}
