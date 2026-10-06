/**
 * The chrome's theme.
 *
 * Two things worth holding: that the colours come from the tokens rather than
 * from a copy of them, and that "system" is resolved rather than treated as a
 * missing value.
 */

import { palette } from './palette';
import resolveTheme from './resolveTheme';

describe('palette', () => {
  it('should define the same keys in both themes', () => {
    expect(Object.keys(palette.dark)).toEqual(Object.keys(palette.light));
  });

  it('should be real colours, not references', () => {
    Object.values(palette).forEach((theme) => {
      Object.values(theme).forEach((value) => {
        expect(value).toMatch(/^#[0-9a-f]{3,8}$/i);
      });
    });
  });

  /*
   * The drift the generator exists to prevent: the hand-written theme used one
   * blue for both chromes, and the light-mode blue on a near-black sidebar is
   * the wrong blue. If these ever match again, the accent has stopped being
   * per-mode.
   */
  it('should use a different accent on each ground', () => {
    expect(palette.dark.colorPrimary).not.toBe(palette.light.colorPrimary);
  });

  it('should invert the ground', () => {
    expect(palette.light.appBg).not.toBe(palette.dark.appBg);
    expect(palette.light.textColor).not.toBe(palette.dark.textColor);
  });
});

describe('resolveTheme', () => {
  const matchMedia = (dark: boolean) => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockReturnValue({ matches: dark, addEventListener: jest.fn() }),
    });
  };

  it.each([
    ['light', 'light'],
    ['dark', 'dark'],
  ])('should honour an explicit %s', (choice, expected) => {
    matchMedia(false);
    expect(resolveTheme(choice)).toBe(expected);
  });

  /*
   * "System" is a state, not a missing value. It is what most viewers are in,
   * and a chrome that fell back to light there would be bright for everyone
   * whose OS is dark and who never touches the toolbar.
   */
  it('should follow the OS when the choice is system', () => {
    matchMedia(true);
    expect(resolveTheme('system')).toBe('dark');
    matchMedia(false);
    expect(resolveTheme('system')).toBe('light');
  });

  it('should follow the OS when there is no choice at all', () => {
    matchMedia(true);
    expect(resolveTheme(undefined)).toBe('dark');
  });

  /* An environment without `matchMedia` must not throw; light is the floor. */
  it('should fall back to light when the browser cannot answer', () => {
    Object.defineProperty(window, 'matchMedia', { writable: true, value: undefined });
    expect(resolveTheme('system')).toBe('light');
  });
});
