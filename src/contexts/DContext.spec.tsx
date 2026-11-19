import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { DContextProvider, useDContext } from './DContext';

const CSS_BREAKPOINTS = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

function Breakpoints() {
  const { breakpoints } = useDContext();
  return <output>{JSON.stringify(breakpoints)}</output>;
}

describe('DContextProvider breakpoints', () => {
  beforeEach(() => {
    Object.entries(CSS_BREAKPOINTS).forEach(([name, value]) => {
      document.documentElement.style.setProperty(`--bs-breakpoint-${name}`, value);
    });
  });

  afterEach(() => {
    Object.keys(CSS_BREAKPOINTS).forEach((name) => {
      document.documentElement.style.removeProperty(`--bs-breakpoint-${name}`);
    });
  });

  // La prop está deprecada pero tiene que seguir compilando: ts-jest comprueba
  // los tipos, así que este archivo deja de compilar si se retira.
  it('acepta la prop breakpoints, pero el contexto los lee del CSS', () => {
    render(
      <DContextProvider
        breakpoints={{
          xs: '1px',
          sm: '2px',
          md: '3px',
          lg: '4px',
          xl: '5px',
          xxl: '6px',
        }}
      >
        <Breakpoints />
      </DContextProvider>,
    );

    expect(screen.getByRole('status')).toHaveTextContent(JSON.stringify(CSS_BREAKPOINTS));
  });
});
