import { liquidParser } from '@modyolabs/design-system';
import { configureI18n } from '@modyolabs/react-design-system';

import es from '../locales/es.json';
import en from '../locales/en.json';

const resources = {
  es: { translation: es },
  en: { translation: en },
};

const LANG = liquidParser.parse('{{site.language}}');

configureI18n(resources, { lng: LANG })
  .then(console.log)
  .catch(console.error);
