/* eslint-disable react/prop-types */
const React = require('react');

jest.mock('react-content-loader', () => jest.fn());

jest.mock('react-responsive-pagination', () => {
  function MockPagination(props) {
    const {
      current,
      total,
      onPageChange,
      className = '',
    } = props;

    const handleClick = (page) => {
      if (page !== current && page >= 1 && page <= total) {
        onPageChange(page);
      }
    };

    return React.createElement('div', {
      className,
      'data-testid': 'responsive-pagination',
    }, [
      React.createElement('button', {
        type: 'button',
        key: 'prev',
        onClick: () => handleClick(current - 1),
        disabled: current === 1,
        'data-testid': 'pagination-previous',
      }, 'Previous'),

      ...Array.from({ length: total }, (_, i) => i + 1).map((page) => React.createElement('button', {
        key: page,
        type: 'button',
        onClick: () => handleClick(page),
        'data-testid': `pagination-page-${page}`,
        'aria-current': page === current ? 'page' : undefined,
        style: { fontWeight: page === current ? 'bold' : 'normal' },
      }, page)),

      React.createElement('button', {
        key: 'next',
        type: 'button',
        onClick: () => handleClick(current + 1),
        disabled: current === total,
        'data-testid': 'pagination-next',
      }, 'Next'),
    ]);
  }

  return MockPagination;
});

jest.mock('@react-input/mask', () => ({
  InputMask: jest.fn(),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (text) => text,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));

global.window = {};
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
