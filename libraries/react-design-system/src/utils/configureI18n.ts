import i18n, { InitOptions, Resource, TFunction } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { liquidParser } from '@modyolabs/design-system';

const LANG = liquidParser.parse('{{site.language}}');

export default async function configureI8n(
  resources: Resource,
  {
    lng = LANG,
    fallbackLng = 'es',
    ...config
  }: InitOptions | undefined = {}
): Promise<TFunction> {
  return i18n
    .use(initReactI18next)
    .init({
      resources,
      lng,
      initImmediate: false,
      fallbackLng,
      interpolation: {
        escapeValue: false, // react already safes from xss
        prefix: '{{{',
        suffix: '}}}',
      },
      ...config,
    })
    .then((t) => t);
}
