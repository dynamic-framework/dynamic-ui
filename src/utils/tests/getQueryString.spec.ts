import getQueryString from '../getQueryString';

describe('getQueryString', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '?foo=bar&baz=qux');
  });

  afterEach(() => {
    window.history.replaceState({}, '', '/');
  });

  it('should return value for existing param', () => {
    expect(getQueryString('foo')).toBe('bar');
    expect(getQueryString('baz')).toBe('qux');
  });

  it('should return undefined for non-existing param', () => {
    expect(getQueryString('notfound')).toBeUndefined();
  });

  it('should return default if param not found and default is provided', () => {
    expect(getQueryString('notfound', { default: 'defaultValue' })).toBe('defaultValue');
  });

  it('should use empty search if useSearch is false', () => {
    expect(getQueryString('foo', { useSearch: false })).toBeUndefined();
    expect(getQueryString('foo', { useSearch: false, default: 'x' })).toBe('x');
  });
});
