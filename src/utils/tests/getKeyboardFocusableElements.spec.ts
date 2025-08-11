import getKeyboardFocusableElements from '../getKeyboardFocusableElements';

describe('getKeyboardFocusableElements', () => {
  it('should return empty array if container is undefined', () => {
    expect(getKeyboardFocusableElements(undefined)).toEqual([]);
  });

  it('should return empty array if container has no focusable elements', () => {
    const div = document.createElement('div');
    expect(getKeyboardFocusableElements(div)).toEqual([]);
  });

  it('should return all focusable elements except disabled', () => {
    const div = document.createElement('div');
    div.innerHTML = `
      <a href="#"></a>
      <button></button>
      <input />
      <textarea></textarea>
      <select></select>
      <details></details>
      <button disabled></button>
      <input disabled />
      <div tabindex="0"></div>
      <div tabindex="-1"></div>
    `;
    const result = getKeyboardFocusableElements(div);
    expect(result.length).toBe(7);
    expect(result.some((el) => el.hasAttribute('disabled'))).toBe(false);
    expect(result.some((el) => el.getAttribute('tabindex') === '-1')).toBe(false);
  });
});
