/**
 * A mapping of breakpoint names to values for responsive properties.
 *
 * This type allows you to specify a value for one or more
 * breakpoints ('xs', 'sm', 'md', 'lg', 'xl', 'xxl').
 * When used with `useResponsiveProp`, the value for
 * the highest matching breakpoint will be selected.
 *
 * Usage example:
 * ```ts
 * const prop: ResponsiveProp = { xs: "small", md: "medium", xl: "large" };
 * ```
 */
export type ResponsiveProp = Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl', string>>;
/**
 * React hook to resolve a responsive property value based on the current viewport breakpoint.
 *
 * Given a `ResponsiveProp` object, this hook returns the value for the highest matching breakpoint.
 * If multiple breakpoints match, the value for the largest (highest) breakpoint is used.
 * If no breakpoints match, `undefined` is returned.
 *
 * @param useListener - Whether to listen for breakpoint changes (default: false).
 * @returns An object with a `responsivePropValue` function that takes a
 * `ResponsiveProp` and returns the resolved value.
 *
 * Usage example:
 * ```ts
 * const { responsivePropValue } = useResponsiveProp();
 * const value = responsivePropValue({ xs: "A", md: "B", xl: "C" });
 * // value will be "C" if xl breakpoint is active, "B" if md is active, etc.
 * ```
 */
export declare function useResponsiveProp(useListener?: boolean): {
    responsivePropValue: (prop: ResponsiveProp) => string | undefined;
};
