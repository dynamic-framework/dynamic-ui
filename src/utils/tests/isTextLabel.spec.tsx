import isTextLabel from '../isTextLabel';

describe('isTextLabel', () => {
  it('should accept strings and numbers', () => {
    expect(isTextLabel('Terms')).toBe(true);
    expect(isTextLabel('')).toBe(true);
    expect(isTextLabel(0)).toBe(true);
  });

  it('should reject nodes, nullish values and booleans', () => {
    expect(isTextLabel(<span>Terms</span>)).toBe(false);
    expect(isTextLabel(['Terms', <a key="t" href="#terms">and conditions</a>])).toBe(false);
    expect(isTextLabel(undefined)).toBe(false);
    expect(isTextLabel(null)).toBe(false);
    expect(isTextLabel(false)).toBe(false);
  });
});
