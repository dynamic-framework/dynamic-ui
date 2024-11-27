import i18n, { InitOptions, Resource, TFunction } from 'i18next';
import { initReactI18next } from 'react-i18next';

export default async function configureI8n(
  resources: Resource,
  {
    lng = 'en',
    fallbackLng = 'en',
    ...config
  }: InitOptions | undefined = {},
): Promise<TFunction> {
  return i18n
    .use(initReactI18next)
    .init({
      resources,
      lng,
      initImmediate: true,
      fallbackLng,
      interpolation: {
        escapeValue: false, // react already safes from xss
        prefix: '{',
        suffix: '}',
        // skipOnVariables: false,
      },
      ...config,
    })
    .then((t) => t);
}
