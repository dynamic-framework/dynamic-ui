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
