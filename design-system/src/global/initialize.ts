/* eslint-disable no-underscore-dangle, @typescript-eslint/no-explicit-any */
import { setPlatformHelpers } from '@stencil/core';

import type { Config } from '../interface';

export const initialize = (userConfig: Config = {
}) => {
  if (typeof (window as any) === 'undefined') {
    return;
  }

  // TODO: check if a vue application and set platformHelpers with the code of DesignSystemPlugin
  //  can be work to single vue page.

  const platformHelpers: any = {
  };
  if (userConfig._ael) {
    platformHelpers.ael = userConfig._ael;
  }
  if (userConfig._rel) {
    platformHelpers.rel = userConfig._rel;
  }
  if (userConfig._ce) {
    platformHelpers.ce = userConfig._ce;
  }
  setPlatformHelpers(platformHelpers);
};

export default initialize;
