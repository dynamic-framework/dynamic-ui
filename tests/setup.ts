/* eslint-disable no-undef */

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

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
 * `<dialog>` for jsdom, which does not implement it.
 *
 * Only the two methods and the `open` attribute, which is what the components
 * and the stylesheet interact with. Everything the element is actually chosen
 * for — the focus trap, page inertness, the top layer, Escape, `::backdrop` —
 * is the browser's and has no stand-in here. That is the point of using the
 * tag: those parts cannot be verified in jsdom, and cannot be got wrong
 * either.
 */
const dialogProto = window.HTMLElement.prototype as unknown as Record<string, unknown>;

dialogProto.showModal = function showModal(this: HTMLElement) {
  this.setAttribute('open', '');
};

dialogProto.show = function show(this: HTMLElement) {
  this.setAttribute('open', '');
};

dialogProto.close = function close(this: HTMLElement, returnValue?: string) {
  if (!this.hasAttribute('open')) return;
  this.removeAttribute('open');
  if (returnValue !== undefined) (this as HTMLDialogElement).returnValue = returnValue;
  this.dispatchEvent(new Event('close'));
};
