/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import changeQueryString from '../changeQueryString';

describe('changeQueryString', () => {
  beforeEach(() => {
    window.location.search = '?foo=1&bar=2';
    window.location.href = 'http://localhost/?foo=1&bar=2';
    window.history.pushState = jest.fn();
  });

  it('should add new params', () => {
    const result = changeQueryString({ baz: 3 });
    expect(result).toContain('baz=3');
  });

  it('should update existing params', () => {
    const result = changeQueryString({ foo: 42 });
    expect(result).toContain('foo=42');
  });

  it('should remove param if value is falsy', () => {
    const result = changeQueryString({ bar: null });
    expect(result).not.toContain('bar=');
    expect(result).not.toContain('bar');
  });

  it('should use empty search if useSearch is false', () => {
    const result = changeQueryString({ foo: 99 }, { useSearch: false });
    expect(result).toBe('foo=99');
  });

  it('should call pushState if pushState is true', () => {
    const pushStateMock = jest.fn();
    window.history.pushState = pushStateMock;
    changeQueryString({ foo: 123 }, { pushState: true });
    expect(pushStateMock).toHaveBeenCalled();
    const { calls } = (pushStateMock).mock;
    const url = calls[0][2];
    expect(url).toContain('foo=123');
  });

  it('should handle multiple params', () => {
    const result = changeQueryString({ foo: 'a', bar: 'b', baz: 'c' });
    expect(result).toContain('foo=a');
    expect(result).toContain('bar=b');
    expect(result).toContain('baz=c');
  });
});
