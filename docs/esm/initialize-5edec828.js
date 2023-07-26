import { a as setPlatformHelpers } from './index-a19c3827.js';

/* eslint-disable no-underscore-dangle, @typescript-eslint/no-explicit-any */
const initialize = (userConfig = {}) => {
  if (typeof window === 'undefined') {
    return;
  }
  // TODO: check if a vue application and set platformHelpers with the code of DesignSystemPlugin
  //  can be work to single vue page.
  const platformHelpers = {};
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

export { initialize as i };

//# sourceMappingURL=initialize-5edec828.js.map