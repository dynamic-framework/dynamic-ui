/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import DButtonIcon from './DButtonIcon';

const iconProps: Array<Record<string, unknown>> = [];

// DIcon is replaced to read the props DButtonIcon hands it: whether the
// breakpoint listener is on is not observable from the rendered markup.
jest.mock('../DIcon', () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    iconProps.push(props);
    return null;
  },
}));

describe('<DButtonIcon /> iconSize listener', () => {
  beforeEach(() => {
    iconProps.length = 0;
  });

  it.each([
    ['button', {}],
    ['link', { href: '/descargas' }],
  ])('listens to breakpoints for a responsive iconSize on a %s', (_, props) => {
    const iconSize = { xs: '1rem', lg: '2rem' };
    render(<DButtonIcon icon="Download" iconSize={iconSize} aria-label="Descargar" {...props} />);
    expect(iconProps.at(-1)).toMatchObject({ size: iconSize, useListenerSize: true });
  });

  it.each([
    ['a fixed iconSize', '2rem'],
    ['no iconSize', undefined],
  ])('does not listen with %s', (_, iconSize) => {
    render(<DButtonIcon icon="Download" iconSize={iconSize} aria-label="Descargar" />);
    expect(iconProps.at(-1)).toMatchObject({ useListenerSize: false });
  });
});
