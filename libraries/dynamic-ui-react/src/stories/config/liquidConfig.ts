import { liquidParser } from '../../utils';
import liquidConfig from './liquid.json';

liquidParser.init(
  liquidConfig,
  window.liquidjs,
);
