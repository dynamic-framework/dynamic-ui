import { checkMediaQuery, subscribeToMediaQuery } from '../mediaQuery';

describe('mediaQuery utils', () => {
  let addEventListenerMock: jest.Mock;
  let removeEventListenerMock: jest.Mock;
  beforeEach(() => {
    addEventListenerMock = jest.fn();
    removeEventListenerMock = jest.fn();
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: query === '(min-width: 100px)',
        addEventListener: addEventListenerMock,
        removeEventListener: removeEventListenerMock,
      })),
    });
  });

  it('should subscribe and unsubscribe to media query changes', () => {
    const callback = jest.fn();
    const unsubscribe = subscribeToMediaQuery('(min-width: 100px)', callback);
    expect(addEventListenerMock).toHaveBeenCalledWith('change', callback);
    unsubscribe();
    expect(removeEventListenerMock).toHaveBeenCalledWith('change', callback);
  });

  it('should return true if matchMedia matches', () => {
    expect(checkMediaQuery('(min-width: 100px)')).toBe(true);
  });

  it('should return false if matchMedia does not match', () => {
    expect(checkMediaQuery('(min-width: 200px)')).toBe(false);
  });
});
