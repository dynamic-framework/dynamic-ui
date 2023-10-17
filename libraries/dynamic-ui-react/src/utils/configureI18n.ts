import i18n, { InitOptions, Resource, TFunction } from 'i18next';
import { initReactI18next } from 'react-i18next';
import liquidParser from './liquid-parser';

const LANG = liquidParser.parse('{{site.language}}');

export default async function configureI8n(
  resources: Resource,
  {
    lng = LANG,
    fallbackLng = 'es',
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
