/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import getCssVariable from '../getCssVariable';

describe('getCssVariable', () => {
  let getComputedStyleSpy: jest.SpyInstance;

  beforeEach(() => {
    getComputedStyleSpy = jest.spyOn(window, 'getComputedStyle').mockImplementation(() => ({
      getPropertyValue: jest.fn((variable) => {
        if (variable === '--color-primary') return ' #123456 ';
        if (variable === '--empty') return ' ';
        return '';
      }),
    }) as any);
  });

  afterEach(() => {
    getComputedStyleSpy.mockRestore();
  });

  it('should return trimmed value of existing variable', () => {
    expect(getCssVariable('--color-primary')).toBe('#123456');
  });

  it('should return empty string for variable with only spaces', () => {
    expect(getCssVariable('--empty')).toBe('');
  });

  it('should return empty string for non-existing variable', () => {
    expect(getCssVariable('--not-exist')).toBe('');
  });
});
