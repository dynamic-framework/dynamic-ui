import countryFlag from './countryFlag';

/**
 * The flag, built from the ISO code rather than fetched.
 *
 * The library this replaces requests one SVG per flag from a CDN — 217 of them
 * when the selector opens. A regional-indicator pair costs nothing and leaves
 * the origin alone, which matters more than the bytes for the pages this is
 * for.
 */
describe('countryFlag', () => {
  it.each([
    ['cl', '🇨🇱'],
    ['us', '🇺🇸'],
    ['br', '🇧🇷'],
    ['ar', '🇦🇷'],
  ])('should build the flag for %s', (iso, flag) => {
    expect(countryFlag(iso)).toBe(flag);
  });

  it('should accept either case', () => {
    expect(countryFlag('CL')).toBe(countryFlag('cl'));
  });

  /* Two regional indicators, which is two code points and four UTF-16 units. */
  it('should be exactly two code points', () => {
    expect([...countryFlag('cl')]).toHaveLength(2);
  });

  /*
   * Anything that is not a two-letter code returns nothing.
   *
   * The arithmetic would happily map any character into the regional-indicator
   * block, so a three-letter code or a stray character would render as a pair
   * of unrelated symbols — which looks like a corrupted flag rather than like
   * a mistake in the input.
   */
  it.each(['', 'c', 'usa', '12', '🇨🇱'])('should return nothing for %p', (value) => {
    expect(countryFlag(value)).toBe('');
  });
});
