import { configureI18n } from '@modyolabs/react-design-system';

import es from '../locales/es.json';
import en from '../locales/en.json';
import liquidParser from '../shame/liquidParser';

const resources = {
  es: { translation: es },
  en: { translation: en },
};

const LANG = liquidParser.parse('{{site.language}}');

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
configureI18n(resources, { lng: LANG })
  .then(console.log)
  .catch(console.error);
