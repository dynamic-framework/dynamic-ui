/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  library: {},
  engine: undefined as any,
  init(library: any, Liquid: any) {
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
  async parseLiquidAsync(liquidString: string): Promise<string> {
    try {
      return this.engine.parseAndRender(liquidString, this.library);
    } catch (error: any) {
      return error.message;
    }
  },
  /**
   * Parse a liquid string
   * @param liquidString Target Content Space UID
   * @returns a usable object or string
   */
  parseLiquid(liquidString: string): string {
    try {
      return this.engine.parseAndRenderSync(liquidString, this.library);
    } catch (error: any) {
      return error.message;
    }
  },
  parse(liquidString: string): string {
    if (this.engine) {
      return this.parseLiquid(liquidString);
    }
    return liquidString;
  },
  async parseAsync(liquidString: string): Promise<string> {
    if (this.engine) {
      return this.parseLiquidAsync(liquidString);
    }
    return liquidString;
  },
};
