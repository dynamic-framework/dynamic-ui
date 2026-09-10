/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DButtonIcon from './DButtonIcon';
import { DContextProvider } from '../../contexts';

const MATERIAL_CONTEXT = {
  familyClass: 'material-symbols-outlined',
  familyPrefix: '',
  materialStyle: true,
};

describe('<DButtonIcon /> a11y', () => {
  it('should have no violations when named with aria-label', async () => {
    const { container } = render(
      <DButtonIcon icon="ArrowLeft" aria-label="Go back" />,
    );

    expect(screen.getByRole('button', { name: 'Go back' })).toBeInTheDocument();

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a material icon and aria-label', async () => {
    const { container } = render(
      <DContextProvider icon={MATERIAL_CONTEXT}>
        <DButtonIcon icon="arrow_back" aria-label="Go back" />
      </DContextProvider>,
    );

    // The ligature is decorative; the button's own label is the accessible name.
    expect(screen.getByRole('button', { name: 'Go back' })).toBeInTheDocument();

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('warns when the icon-only button has no accessible name', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    render(<DButtonIcon icon="ArrowLeft" />);

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining('has no accessible name'),
    );

    consoleWarnSpy.mockRestore();
  });
});
