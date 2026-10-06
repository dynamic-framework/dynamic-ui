import nextChoice from './themeCycle';

/**
 * The cycle the visible toggle walks.
 *
 * Three states rather than two, because "system" is a real one — it is what
 * most readers are in, where only `prefers-color-scheme` decides, and a
 * two-way switch could never get back to it.
 */
describe('nextChoice', () => {
  it.each([
    ['system', 'light'],
    ['light', 'dark'],
    ['dark', 'system'],
  ])('should go from %s to %s', (from, to) => {
    expect(nextChoice(from)).toBe(to);
  });

  it('should come back round', () => {
    expect(nextChoice(nextChoice(nextChoice('system')))).toBe('system');
  });

  /*
   * An unset or unknown global lands on `light`, not on `system`.
   *
   * `indexOf` returns -1 for those, and `-1 + 1` is 0 — which is `system`, the
   * state the reader is already in. Cycling to it would make the first press
   * appear to do nothing, which reads as a broken button.
   */
  it.each([undefined, '', 'nonsense'])('should move off %p on the first press', (value) => {
    expect(nextChoice(value)).toBe('light');
  });
});
