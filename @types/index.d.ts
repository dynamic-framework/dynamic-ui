/*
 * Namespace 'React' has no exported member 'StatelessComponent'
 * in formik
 */
declare namespace React {
  type StatelessComponent<P> = React.FunctionComponent<P>;
}

/**
 * `jest-axe` ships no types.
 *
 * Declared here rather than reached for with `any` at each call site, so the
 * shape is written down once and a typo in an option is still a type error.
 */
declare module 'jest-axe' {
  import type { AxeResults, RunOptions } from 'axe-core';

  export function axe(html: Element | string, options?: RunOptions): Promise<AxeResults>;
  /* The matcher map `expect.extend` takes. Typed as jest's own shape so the
     call site does not have to cast. */
  export const toHaveNoViolations: {
    toHaveNoViolations(results: AxeResults): {
      pass: boolean;
      message(): string;
    };
  };
  export function configureAxe(options?: RunOptions): typeof axe;
}

declare namespace jest {
  interface Matchers<R> {
    toHaveNoViolations(): R;
  }
}
