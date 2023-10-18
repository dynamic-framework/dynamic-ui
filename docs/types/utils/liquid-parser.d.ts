declare const _default: {
    library: {};
    engine: any;
    init(library: any, Liquid: any): void;
    /**
     * Parse a liquid string
     * @param liquidString Target Content Space UID
     * @returns a usable object or string
     */
    parseLiquidAsync(liquidString: string): Promise<string>;
    /**
     * Parse a liquid string
     * @param liquidString Target Content Space UID
     * @returns a usable object or string
     */
    parseLiquid(liquidString: string): string;
    parse(liquidString: string): string;
    parseAsync(liquidString: string): Promise<string>;
};
export default _default;
