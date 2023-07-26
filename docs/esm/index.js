export { i as initialize } from './initialize-77ea9d4a.js';
import { c as currency_min } from './store-d1bbe9e1.js';
export { s as setIconSettings } from './store-d1bbe9e1.js';
export { I as ICON_FAMILY_CLASS, a as ICON_FAMILY_PREFIX, P as PREFIX_BS } from './component-config-025f7932.js';
import './index-c7f2daf2.js';

/* eslint-disable @typescript-eslint/no-explicit-any */
const liquidParser = {
  library: {},
  engine: undefined,
  init(library, Liquid) {
    this.library = library;
    if (Liquid) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
      this.engine = new Liquid.Liquid({
        strictFilters: true,
        strictVariables: true,
      });
    }
  },
  /**
   * Parse a liquid string
   * @param liquidString Target Content Space UID
   * @returns a usable object or string
   */
  async parseLiquidAsync(liquidString) {
    try {
      return this.engine.parseAndRender(liquidString, this.library);
    }
    catch (error) {
      return error.message;
    }
  },
  /**
   * Parse a liquid string
   * @param liquidString Target Content Space UID
   * @returns a usable object or string
   */
  parseLiquid(liquidString) {
    try {
      return this.engine.parseAndRenderSync(liquidString, this.library);
    }
    catch (error) {
      return error.message;
    }
  },
  parse(liquidString) {
    if (this.engine) {
      return this.parseLiquid(liquidString);
    }
    return liquidString;
  },
  async parseAsync(liquidString) {
    if (this.engine) {
      return this.parseLiquidAsync(liquidString);
    }
    return liquidString;
  },
};

function formatCurrency(amount, options) {
  return currency_min(amount, options).format();
}

/**
 * @deprecated
 * @param client
 * @param config
 */
function createControlledRequest(client, config) {
  const abortController = new AbortController();
  return {
    perform: async () => {
      const { data } = await client.request(Object.assign(Object.assign({}, config), { signal: abortController.signal }));
      return data;
    },
    abort: () => abortController.abort(),
  };
}

class Deferred {
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}

/**
 * @deprecated
 * @param config
 * @param data
 */
function createMockedRequest(data) {
  const deferred = new Deferred();
  const timer = setTimeout(() => deferred.resolve(), 1000);
  return {
    abort: () => {
      deferred.reject(new Error('AbortError'));
      clearTimeout(timer);
    },
    perform: async () => {
      await deferred.promise;
      return data;
    },
  };
}

export { Deferred, createControlledRequest, createMockedRequest, formatCurrency, liquidParser };

//# sourceMappingURL=index.js.map