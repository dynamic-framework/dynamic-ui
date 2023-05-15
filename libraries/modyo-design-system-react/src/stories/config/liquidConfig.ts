import { liquidParser } from '@modyo-dynamic/modyo-design-system';

import liquidConfig from './liquid.json';

liquidParser.init(
  liquidConfig,
  window.liquidjs,
);
