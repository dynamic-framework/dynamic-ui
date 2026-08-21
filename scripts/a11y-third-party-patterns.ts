/**
 * a11y-third-party-patterns.ts
 *
 * Used by `generate-a11y-browser-warnings.ts` to classify axe-core
 * violations found in Storybook stories as either:
 *   - "own"         → markup authored/controlled by this design system.
 *   - "third-party" → markup generated internally by a third-party
 *                      dependency, which this design system does not
 *                      directly control.
 *
 * This classification does NOT change whether a violation is reported —
 * it only groups the warnings so maintainers can tell at a glance whether
 * a fix belongs in our own component code or should be reported/worked
 * around upstream.
 *
 * Matching strategy, in order of preference:
 *   1. `classPattern` / `attrPattern`: match against the offending node's
 *      outerHTML (className list or data-/aria- attributes) that are
 *      unique to the third-party library's own renderer. This is the
 *      most reliable and future-proof signal.
 *   2. `storyTitlePattern` + `ruleIds`: fallback for libraries whose
 *      generated markup reuses generic/Bootstrap class names (so it
 *      can't be told apart from our own markup by class alone). Scoped
 *      to the specific component's story and the specific rule(s) known
 *      to originate from that dependency, verified by reading the
 *      library's source directly (see the comment on each entry).
 *
 * When bumping/replacing a dependency, revisit the matching entry below.
 */

export interface ThirdPartyPattern {
  /** npm package this pattern attributes violations to. */
  library: string;
  /** Regex tested against the violation node's outerHTML. */
  classPattern?: RegExp;
  /** Regex tested against the violation node's outerHTML (data- / aria- attributes). */
  attrPattern?: RegExp;
  /** Restrict this pattern to stories whose title matches (e.g. specific component). */
  storyTitlePattern?: RegExp;
  /** Restrict this pattern to specific axe rule ids. */
  ruleIds?: string[];
  /** Short justification, surfaced in reports for maintainers. */
  reason: string;
}

export const THIRD_PARTY_PATTERNS: ThirdPartyPattern[] = [
  {
    library: '@splidejs/splide',
    classPattern: /\bsplide__/,
    reason: 'DCarousel delegates slide/track/pagination markup (including role="tabpanel") to @splidejs/splide.',
  },
  {
    library: 'react-datepicker',
    classPattern: /\breact-datepicker__/,
    reason: 'DDatePicker renders the calendar popup markup via react-datepicker.',
  },
  {
    library: 'react-international-phone',
    classPattern: /\breact-international-phone__/,
    reason: 'DInputPhone delegates the country selector/flag dropdown markup to react-international-phone.',
  },
  {
    library: 'react-select',
    classPattern: /\bd-select__/,
    reason: 'DSelect uses react-select (classNamePrefix="d-select"); the listbox/option/control markup and its aria wiring are generated internally by react-select.',
  },
  {
    library: '@floating-ui/react',
    attrPattern: /data-floating-ui-[\w-]+/,
    reason: 'DPopover/DTooltip/DDropdown use @floating-ui/react for positioning; elements it manages are tagged with data-floating-ui-* attributes.',
  },
  // NOTE: react-responsive-pagination intentionally has no entry here.
  // Its rendered markup (`<a>`/`<span className="page-link" ...>`, see
  // node_modules/react-responsive-pagination/dist/index.js) reuses the
  // plain "page-link" class that DPaginator's own SCSS colors — verified
  // locally that the "Paginator / Label Arrows" color-contrast violation
  // comes from our own `--pagination-page-control-disabled-color` token
  // (src/style/base/_pagination.scss), not from the library. Attributing
  // it to a third party would misclassify a real DS bug as out-of-scope.
];

/**
 * Determines whether a single axe violation node (its outerHTML) matches
 * a known third-party pattern for the given rule and story.
 */
export function matchThirdPartyPattern(
  nodeHtml: string,
  ruleId: string,
  storyTitle: string,
): ThirdPartyPattern | undefined {
  return THIRD_PARTY_PATTERNS.find((pattern) => {
    if (pattern.ruleIds && !pattern.ruleIds.includes(ruleId)) return false;
    if (pattern.storyTitlePattern && !pattern.storyTitlePattern.test(storyTitle)) return false;
    if (pattern.classPattern && pattern.classPattern.test(nodeHtml)) return true;
    if (pattern.attrPattern && pattern.attrPattern.test(nodeHtml)) return true;
    // Patterns that only rely on storyTitlePattern + ruleIds (no markup
    // signature) are considered a match once those two conditions pass.
    return !pattern.classPattern && !pattern.attrPattern;
  });
}
