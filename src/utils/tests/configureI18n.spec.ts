import configureI18n from '../configureI18n';

describe('configureI18n', () => {
  const resources = {
    en: { translation: { hello: 'Hello', greet: 'Hi {name}!' } },
    es: { translation: { hello: 'Hola', greet: '¡Hola {name}!' } },
  };

  it('should initialize and translate with default language', async () => {
    const t = await configureI18n(resources);
    expect(t('hello')).toBe('Hello');
    expect(t('greet', { name: 'John' })).toBe('Hi John!');
  });

  it('should translate with provided language', async () => {
    const t = await configureI18n(resources, { lng: 'es' });
    expect(t('hello')).toBe('Hola');
    expect(t('greet', { name: 'Juan' })).toBe('¡Hola Juan!');
  });

  it('should fallback to fallbackLng if language missing', async () => {
    const t = await configureI18n(resources, { lng: 'fr', fallbackLng: 'en' });
    expect(t('hello')).toBe('Hello');
  });

  it('should allow custom config', async () => {
    const customResources = {
      en: { translation: { hello: 'Hello', greet: 'Hi [name]!' } },
      es: { translation: { hello: 'Hola', greet: '¡Hola [name]!' } },
    };

    const t = await configureI18n(customResources, { lng: 'en', interpolation: { prefix: '[', suffix: ']' } });
    expect(t('greet', { name: 'Jane' })).toBe('Hi Jane!');
  });
});
