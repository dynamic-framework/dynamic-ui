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

  it('warns once per icon when the icon-only button has no accessible name', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    const { rerender } = render(<DButtonIcon icon="WarnOnceIcon" />);
    rerender(<DButtonIcon icon="WarnOnceIcon" className="changed" />);
    render(<DButtonIcon icon="WarnOnceIcon" />);

    // A re-render or a second instance must not flood the console.
    const nameWarnings = consoleWarnSpy.mock.calls
      .filter(([message]) => String(message).includes('has no accessible name'));
    expect(nameWarnings).toHaveLength(1);
    expect(String(nameWarnings[0][0])).toContain('WarnOnceIcon');
    expect(String(nameWarnings[0][0])).toContain('button has no accessible name');

    consoleWarnSpy.mockRestore();
  });

  it('does not warn when named by aria-labelledby or title, which reach the button', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    render(
      <>
        <span id="labelledbyTarget">Go back</span>
        <DButtonIcon icon="LabelledByIcon" aria-labelledby="labelledbyTarget" />
        <DButtonIcon icon="TitleIcon" title="Go back" />
      </>,
    );

    // Both naming routes resolve, so both buttons carry the same name.
    expect(screen.getAllByRole('button', { name: 'Go back' })).toHaveLength(2);
    expect(consoleWarnSpy).not.toHaveBeenCalledWith(
      expect.stringContaining('has no accessible name'),
    );

    consoleWarnSpy.mockRestore();
  });

  it('still warns for an anchor named by aria-labelledby, which the href branch drops', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    render(
      <DButtonIcon icon="AnchorLabelledByIcon" href="#go" aria-labelledby="missingTarget" />,
    );

    // `rest` is not spread onto the anchor, so the name never reaches the DOM.
    expect(screen.getByRole('link')).not.toHaveAttribute('aria-labelledby');
    // The message has to name the element it actually rendered.
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining('link has no accessible name'),
    );

    consoleWarnSpy.mockRestore();
  });

  it('does not warn when the button is named', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    render(<DButtonIcon icon="NamedIcon" aria-label="Go back" />);

    expect(consoleWarnSpy).not.toHaveBeenCalledWith(
      expect.stringContaining('has no accessible name'),
    );

    consoleWarnSpy.mockRestore();
  });
});
