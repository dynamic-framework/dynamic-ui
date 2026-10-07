import type { ParsedCountry } from 'react-international-phone';

/**
 * A `useMemo` dependency for a list of ISO codes, derived from its CONTENTS.
 *
 * `preferredCountries` is almost always written inline at the call site —
 * `preferredCountries={['cl', 'us']}` — which is a new array on every render
 * of the consumer's component. Depending on the array itself would therefore
 * memoise nothing in the normal case, which is the whole point of memoising
 * here: the list it guards is 217 options long and this component re-renders
 * on every keystroke.
 *
 * `|` as the separator because an ISO 3166-1 alpha-2 code cannot contain it,
 * so two different lists cannot collide on one key.
 */
export function preferredKeyOf(preferred?: string[]): string {
  return (preferred ?? []).join('|');
}

/**
 * The pinned countries first, then the rest, each group in its own order.
 *
 * Pure so the ordering is testable without rendering: the list is 217 items
 * and the interesting cases — a code that is not in the list, a duplicate,
 * the order within the pinned group — are about the array and not the DOM.
 */
export default function orderCountries(
  countries: ParsedCountry[],
  preferred: string[] = [],
): ParsedCountry[] {
  if (!preferred.length) return countries;

  const byIso = new Map(countries.map((country) => [country.iso2, country]));
  /*
   * Driven by `preferred`, so the pinned group keeps the order the caller
   * wrote rather than the alphabetical one — "Chile, Colombia, United States"
   * is a decision, and sorting it would undo it.
   *
   * An unknown code is skipped rather than throwing: a consumer's list can
   * legitimately name a country that `filteredCountries` has excluded.
   *
   * Deduplicated, because a repeated code produced the same country twice —
   * two identical options in the select, where picking the second does
   * nothing visible and the list is one longer than the country count.
   */
  const pinned = [...new Set(preferred)]
    .map((iso) => byIso.get(iso))
    .filter((country): country is ParsedCountry => !!country);

  const seen = new Set(pinned.map((country) => country.iso2));
  return pinned.concat(countries.filter((country) => !seen.has(country.iso2)));
}
