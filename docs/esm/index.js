export { i as initialize } from './initialize-0bfd0f5e.js';
import { c as currency_min } from './currency.min-03df623a.js';
export { s as setIconSettings } from './store-9e8bd73b.js';
import './index-39190b44.js';

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
