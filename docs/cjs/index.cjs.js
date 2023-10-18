'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const initialize = require('./initialize-a976f3a7.js');
const store = require('./store-22751436.js');
const componentConfig = require('./component-config-a8f1d95a.js');
require('./index-be9a6731.js');

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
  return store.currency_min(amount, options).format();
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

exports.initialize = initialize.initialize;
exports.setIconSettings = store.setIconSettings;
exports.ICON_FAMILY_CLASS = componentConfig.ICON_FAMILY_CLASS;
exports.ICON_FAMILY_PREFIX = componentConfig.ICON_FAMILY_PREFIX;
exports.PREFIX_BS = componentConfig.PREFIX_BS;
exports.Deferred = Deferred;
exports.createControlledRequest = createControlledRequest;
exports.createMockedRequest = createMockedRequest;
exports.formatCurrency = formatCurrency;
exports.liquidParser = liquidParser;

//# sourceMappingURL=index.cjs.js.map