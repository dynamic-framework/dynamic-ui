import { liquidParser } from '@modyolabs/design-system';

import liquidConfig from './liquid.json';

liquidParser.init(
  liquidConfig,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  process.env.NODE_ENV !== 'production' ? require('liquidjs') : null,
);
