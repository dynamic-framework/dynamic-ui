import { liquidParser } from '@dynamic-framework/ui';

import liquidConfig from './liquid.json';

liquidParser.init(
  liquidConfig,
  window.liquidjs,
);
