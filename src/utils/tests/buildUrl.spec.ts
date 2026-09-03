import buildUrl from '../buildUrl';

describe('buildUrl', () => {
  it('should add the / prefix and serialize the query params', () => {
    expect(buildUrl('accounts', { account_id: '42' })).toBe('/accounts?account_id=42');
  });

  it('should work without params', () => {
    expect(buildUrl('dashboard', {})).toBe('/dashboard');
  });

  it('should serialize numeric params', () => {
    expect(buildUrl('accounts', { page: 2 })).toBe('/accounts?page=2');
  });

  it('should normalize leading slashes to prevent scheme-relative URLs', () => {
    expect(buildUrl('/accounts', { account_id: 42 })).toBe('/accounts?account_id=42');
    expect(buildUrl('//accounts', {})).toBe('/accounts');
    expect(buildUrl('///accounts', {})).toBe('/accounts');
  });

  it('should normalize leading backslashes, which browsers resolve as slashes', () => {
    expect(buildUrl('\\\\evil.com', {})).toBe('/evil.com');
    expect(buildUrl('/\\evil.com', {})).toBe('/evil.com');
    expect(buildUrl('\\/evil.com', {})).toBe('/evil.com');
  });

  it('should remove the characters ignored by the URL parser', () => {
    expect(buildUrl('/\t/evil.com', {})).toBe('/evil.com');
    expect(buildUrl('/\n/evil.com', {})).toBe('/evil.com');
    expect(buildUrl('/ac\rcounts', {})).toBe('/accounts');
  });

  it('should trim surrounding whitespace', () => {
    expect(buildUrl('  /accounts  ', { account_id: 42 })).toBe('/accounts?account_id=42');
  });

  it('should return "#" as-is when the path normalizes to "#" (unconfigured liquid var)', () => {
    expect(buildUrl('#', { account_id: '42' })).toBe('#');
    expect(buildUrl('/#', { account_id: '42' })).toBe('#');
  });

  it('should not prefix fragment paths with /', () => {
    expect(buildUrl('#accounts', {})).toBe('#accounts');
    expect(buildUrl('#accounts', { account_id: '42' })).toBe('#accounts?account_id=42');
  });

  it('should return "/" when the path is empty and there are no params', () => {
    expect(buildUrl('', {})).toBe('/');
  });

  it('should return "/?query" when the path is empty but there are params', () => {
    expect(buildUrl('', { tab: 'movimientos' })).toBe('/?tab=movimientos');
  });
});
