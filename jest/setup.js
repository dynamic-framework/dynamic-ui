/* eslint-disable react/prop-types */
const React = require('react');

jest.mock('react-responsive-pagination', () => {
  function MockPagination(props) {
    const {
      current,
      total,
      onPageChange,
      className = '',
    } = props;

    const handleClick = React.useCallback(
      (page) => {
        if (page !== current && page >= 1 && page <= total) {
          onPageChange(page);
        }
      },
      [current, total, onPageChange],
    );

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

      ...(function getPageButtons() {
        const pageButtons = [];
        const windowSize = 2; // Show current ±2
        const startPage = Math.max(1, current - windowSize);
        const endPage = Math.min(total, current + windowSize);
        // Always show first page
        if (startPage > 1) {
          pageButtons.push(React.createElement('button', {
            key: 1,
            type: 'button',
            onClick: () => handleClick(1),
            'data-testid': 'pagination-page-1',
            'aria-current': current === 1 ? 'page' : undefined,
            style: { fontWeight: current === 1 ? 'bold' : 'normal' },
          }, 1));
          if (startPage > 2) {
            pageButtons.push(React.createElement('span', { key: 'start-ellipsis', style: { margin: '0 4px' } }, '...'));
          }
        }
        // Window of page buttons
        for (let page = startPage; page <= endPage; page += 1) {
          if (!(page === 1 && startPage > 1)) {
            pageButtons.push(React.createElement('button', {
              key: page,
              type: 'button',
              onClick: () => handleClick(page),
              'data-testid': `pagination-page-${page}`,
              'aria-current': page === current ? 'page' : undefined,
              style: { fontWeight: page === current ? 'bold' : 'normal' },
            }, page));
          }
        }
        // Always show last page
        if (endPage < total) {
          if (endPage < total - 1) {
            pageButtons.push(React.createElement('span', { key: 'end-ellipsis', style: { margin: '0 4px' } }, '...'));
          }
          pageButtons.push(React.createElement('button', {
            key: total,
            type: 'button',
            onClick: () => handleClick(total),
            'data-testid': `pagination-page-${total}`,
            'aria-current': total === current ? 'page' : undefined,
            style: { fontWeight: total === current ? 'bold' : 'normal' },
          }, total));
        }
        return pageButtons;
      }()),

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
