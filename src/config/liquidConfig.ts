import { liquidParser } from '@modyolabs/design-system';

import liquidConfig from './liquid.json';

liquidParser.init(liquidConfig, process.env.NODE_ENV !== 'production');
