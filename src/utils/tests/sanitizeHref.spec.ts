import sanitizeHref from '../sanitizeHref';

describe('sanitizeHref', () => {
  it('should return undefined for an empty or whitespace-only string', () => {
    expect(sanitizeHref('')).toBeUndefined();
    expect(sanitizeHref('   ')).toBeUndefined();
  });

  it('should return undefined for scheme-relative URLs', () => {
    expect(sanitizeHref('//evil.com')).toBeUndefined();
  });

  it('should return undefined for the backslash variants of scheme-relative URLs', () => {
    expect(sanitizeHref('/\\evil.com')).toBeUndefined();
    expect(sanitizeHref('\\/evil.com')).toBeUndefined();
    expect(sanitizeHref('\\\\evil.com')).toBeUndefined();
  });

  it('should remove the characters ignored by the URL parser before validating', () => {
    expect(sanitizeHref('/\t/evil.com')).toBeUndefined();
    expect(sanitizeHref('/\n/evil.com')).toBeUndefined();
    expect(sanitizeHref('/\r/evil.com')).toBeUndefined();
    expect(sanitizeHref(['java\tscript', 'alert(1)'].join(':'))).toBeUndefined();
  });

  it('should return absolute paths as-is', () => {
    expect(sanitizeHref('/internal/path')).toBe('/internal/path');
  });

  it('should normalize a single leading backslash to a slash', () => {
    expect(sanitizeHref('\\internal/path')).toBe('/internal/path');
  });

  it('should allow http and https URLs', () => {
    expect(sanitizeHref('http://example.com')).toBe('http://example.com');
    expect(sanitizeHref('https://example.com')).toBe('https://example.com');
  });

  it('should allow mailto and tel URLs', () => {
    expect(sanitizeHref('mailto:test@example.com')).toBe('mailto:test@example.com');
    expect(sanitizeHref('tel:+123456789')).toBe('tel:+123456789');
  });

  it('should return undefined for unsafe schemes', () => {
    const unsafeScheme = ['javascript', 'alert(1)'].join(':');
    expect(sanitizeHref(unsafeScheme)).toBeUndefined();
    expect(sanitizeHref('data:text/html,<script>alert(1)</script>')).toBeUndefined();
  });

  it('should return undefined for values without a recognizable scheme or leading slash', () => {
    expect(sanitizeHref('#anchor')).toBeUndefined();
    expect(sanitizeHref('relative/path')).toBeUndefined();
  });

  it('should trim leading and trailing whitespace before validating', () => {
    expect(sanitizeHref('  https://example.com  ')).toBe('https://example.com');
  });
});
