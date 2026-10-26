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
  describe('descarta lo que no entra en la secuencia de Tab', () => {
    let container: HTMLDivElement;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      container.remove();
    });

    const labels = () => getKeyboardFocusableElements(container)
      .map((element) => element.getAttribute('aria-label'));

    it.each([
      ['un input type="hidden"', '<input type="hidden" aria-label="excluido" />'],
      ['un elemento nativo con tabindex="-1"', '<button tabindex="-1" aria-label="excluido"></button>'],
      ['un elemento disabled', '<button disabled aria-label="excluido"></button>'],
      ['el atributo hidden en el elemento', '<button hidden aria-label="excluido"></button>'],
      ['el atributo hidden en un ancestro', '<div hidden><button aria-label="excluido"></button></div>'],
      ['inert en el elemento', '<button inert aria-label="excluido"></button>'],
      ['inert en un ancestro', '<div inert><button aria-label="excluido"></button></div>'],
      ['display: none en el elemento', '<button style="display: none" aria-label="excluido"></button>'],
      ['display: none en un ancestro', '<div style="display: none"><button aria-label="excluido"></button></div>'],
      ['visibility: hidden en el elemento', '<button style="visibility: hidden" aria-label="excluido"></button>'],
      ['visibility: hidden en un ancestro', '<div style="visibility: hidden"><button aria-label="excluido"></button></div>'],
    ])('%s', (_, html) => {
      container.innerHTML = `<button aria-label="visible"></button>${html}`;

      expect(labels()).toEqual(['visible']);
    });

    it('incluye un hijo visible de un ancestro con visibility: hidden', () => {
      container.innerHTML = `
        <div style="visibility: hidden">
          <button style="visibility: visible" aria-label="visible"></button>
        </div>
      `;

      expect(labels()).toEqual(['visible']);
    });

    it('no mira el display del propio contenedor', () => {
      container.style.display = 'none';
      container.innerHTML = '<button aria-label="visible"></button>';

      expect(labels()).toEqual(['visible']);
    });
  });
});
