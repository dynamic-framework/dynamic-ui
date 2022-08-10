// eslint-disable-next-line max-len
/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/require-await,@typescript-eslint/no-unsafe-return */
class LiquidParserClass {
  /** context of liquid drops in local */
  private library: any = {};

  private engine;

  constructor() {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
      const Liquid = require('liquidjs');
      this.engine = new Liquid.Liquid({
        strictFilters: true,
        strictVariables: true,
      });
    }
  }

  setLibrary(library: any) {
    this.library = library;
  }

  /**
   * Parse a liquid string
   * @param liquidString Target Content Space UID
   * @returns a usable object or string
   */
  async parseLiquidAsync(liquidString: string): Promise<string | unknown> {
    try {
      return this.engine.parseAndRender(liquidString, this.library);
    } catch (error) {
      return error;
    }
  }

  /**
   * Parse a liquid string
   * @param liquidString Target Content Space UID
   * @returns a usable object or string
   */
  parseLiquid(liquidString: string) {
    try {
      return this.engine.parseAndRenderSync(liquidString, this.library);
    } catch (error) {
      return error;
    }
  }

  parse(liquidString: string) {
    if (process.env.NODE_ENV !== 'production') {
      return this.parseLiquid(liquidString);
    }
    return liquidString;
  }

  parseAsync(liquidString: string) {
    if (process.env.NODE_ENV !== 'production') {
      return this.parseLiquidAsync(liquidString);
    }
    return liquidString;
  }
}

const liquidParser = new LiquidParserClass();

export default liquidParser;
