jest.mock('react-content-loader', () => jest.fn());

jest.mock('react-responsive-pagination', () => jest.fn());

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
