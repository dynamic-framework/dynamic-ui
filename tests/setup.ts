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
* `<dialog>` for jsdom, which does not implement it. 
*
* Includes only the two methods and the `open` attribute—the elements that
* components actually interact with. The features that truly define the
* element—focus trapping, the inert state of the underlying page, the top layer,
* the Escape key, `::backdrop`, and the restoration of focus upon closing—are
* handled by the browser and have no equivalent here; such functionality is
* verified in Chromium, not in jsdom. 
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
