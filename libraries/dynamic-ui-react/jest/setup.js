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
