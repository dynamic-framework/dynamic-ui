/* eslint-disable no-undef */

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

// eslint-disable-next-line no-undef
globalThis.ResizeObserver = class {
  observe() {
    return this;
  }

  unobserve() {
    return this;
  }

  disconnect() {
    return this;
  }
};

Object.defineProperty(global.window, 'matchMedia', {
  writable: true,
  value: jest.fn(() => ({
    matches: false,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

/**
 * `<dialog>` para jsdom, que no lo implementa.
 *
 * Sólo los dos métodos y el atributo `open`, que es con lo que hablan los
 * componentes. Lo que de verdad justifica la etiqueta —la trampa de foco, la
 * página inerte detrás, la capa superior, Escape, `::backdrop` y la devolución
 * del foco al cerrar— es del navegador y aquí no tiene sustituto: esa parte se
 * verifica en Chromium, no en jsdom.
 */
const dialogProto = window.HTMLElement.prototype as unknown as Record<string, unknown>;

dialogProto.showModal = function showModal(this: HTMLElement) {
  this.setAttribute('open', '');
};

dialogProto.show = function show(this: HTMLElement) {
  this.setAttribute('open', '');
};

dialogProto.close = function close(this: HTMLElement) {
  if (!this.hasAttribute('open')) return;
  this.removeAttribute('open');
  this.dispatchEvent(new Event('close'));
};
