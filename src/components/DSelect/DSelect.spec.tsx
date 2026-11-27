import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as warnLabelUsageModule from '../../utils/warnLabelUsage';
import DSelect from './DSelect';

it('should render my component', () => {
  const input = {
    id: 'componentId1',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    style: {
      minWidth: '200px',
    },
  };

  const { container } = render(
    <DSelect {...input} />,
  );

  const selectContainer = container.querySelector('.d-select');
  const selectComponent = container.querySelector('.d-select-component');
  const inputElement = container.querySelector('#componentId1');

  expect(selectContainer).toBeInTheDocument();
  expect(selectComponent).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute('type', 'text');
});

describe('<DSelect /> loading', () => {
  const options = [{ label: 'Chile', value: 'cl' }];

  it('no deshabilita el buscador y marca el contenedor con aria-busy', () => {
    const { container } = render(<DSelect label="Country" options={options} loading />);

    // El caso típico de loading en un select es la búsqueda asíncrona: si el
    // combobox se deshabilita, no se puede escribir lo que hay que buscar.
    expect(screen.getByRole('combobox')).toBeEnabled();
    expect(container.querySelector('.d-select')).toHaveAttribute('aria-busy', 'true');
    expect(container.querySelector('.d-select')).not.toHaveClass('disabled');
  });

  it('acepta lo que se escribe para buscar mientras carga', async () => {
    const user = userEvent.setup();
    render(<DSelect label="Country" options={options} loading />);

    await user.type(screen.getByRole('combobox'), 'chi');

    expect(screen.getByRole('combobox')).toHaveValue('chi');
  });

  it('`disabled` sí lo deshabilita, con o sin loading', () => {
    const { container } = render(
      <DSelect label="Country" options={options} disabled loading />,
    );

    // react-select deshabilitado no renderiza el input de búsqueda.
    expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
    expect(container.querySelector('.d-select')).toHaveClass('disabled');
  });
});

describe('<DSelect /> accessible name', () => {
  const options = [{ label: 'Chile', value: 'cl' }];

  it('should name the control with a text label', () => {
    render(<DSelect label="Country" options={options} />);

    const input = screen.getByRole('combobox');
    expect(input).toHaveAccessibleName('Country');
    expect(input).not.toHaveAttribute('aria-label');
  });

  it('should associate the label with an explicit inputId', () => {
    render(<DSelect inputId="countrySelect" label="Country" options={options} />);

    const input = screen.getByRole('combobox');
    expect(input).toHaveAttribute('id', 'countrySelect');
    expect(input).toHaveAccessibleName('Country');
  });

  it('should let ariaLabel replace the name given by the label', () => {
    render(<DSelect label="Country" ariaLabel="Country of residence" options={options} />);

    expect(screen.getByRole('combobox')).toHaveAccessibleName('Country of residence');
  });

  it('should fall back to the generic name only without a label', () => {
    render(<DSelect options={options} />);

    expect(screen.getByRole('combobox')).toHaveAccessibleName('Search for an option');
  });

  it('should not add the generic name next to aria-labelledby', () => {
    render(
      <>
        <span id="countryHeading">Country</span>
        <DSelect aria-labelledby="countryHeading" options={options} />
      </>,
    );

    const input = screen.getByRole('combobox');
    expect(input).toHaveAccessibleName('Country');
    expect(input).not.toHaveAttribute('aria-label');
  });

  it('should warn in development when a node label has no accessible name', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    render(<DSelect label={<span>Country</span>} options={options} />);

    expect(warn).toHaveBeenCalledWith(expect.stringContaining('DSelect'));
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('ariaLabel'));
    warn.mockRestore();
  });

  // `{...props}` is spread after `aria-label={ariaLabel}`, so a native
  // `aria-label` wins — including an explicitly undefined one. The warning is
  // deduplicated per page load and already fired above, so this checks what
  // the component reports to it.
  it('should report no accessible name when a native aria-label removes ariaLabel', () => {
    const spy = jest.spyOn(warnLabelUsageModule, 'default');

    render(
      <DSelect
        label={<span>Country</span>}
        ariaLabel="Country"
        aria-label={undefined}
        options={options}
      />,
    );

    expect(screen.getByRole('combobox')).not.toHaveAttribute('aria-label');
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ hasAccessibleName: false }));
    spy.mockRestore();
  });

  it('should name the control with ariaLabel when the label is a node', () => {
    render(<DSelect label={<span>Country</span>} ariaLabel="Country" options={options} />);

    expect(screen.getByRole('combobox')).toHaveAccessibleName('Country');
  });
});

describe('<DSelect /> focus announcement', () => {
  const options = [{ label: 'Chile', value: 'cl' }];

  function focusGuidance(container: HTMLElement) {
    act(() => screen.getByRole('combobox').focus());
    return container.querySelector('#aria-guidance')?.textContent;
  }

  it('should announce the text label on focus', () => {
    const { container } = render(<DSelect label="Country" options={options} />);

    expect(focusGuidance(container)).toMatch(/^Country is focused/);
  });

  it('should announce ariaLabel over the text label', () => {
    const { container } = render(
      <DSelect label="Country" ariaLabel="Country of residence" options={options} />,
    );

    expect(focusGuidance(container)).toMatch(/^Country of residence is focused/);
  });

  it('should announce the aria-labelledby name over the text label and ariaLabel', () => {
    const { container } = render(
      <>
        <span id="countryHeading">Country of birth</span>
        <DSelect
          label="Country"
          ariaLabel="Country of residence"
          aria-labelledby="countryHeading"
          options={options}
        />
      </>,
    );

    expect(screen.getByRole('combobox')).toHaveAccessibleName('Country of birth');
    expect(focusGuidance(container)).toMatch(/^Country of birth is focused/);
  });

  it('should announce the aria-label of an aria-labelledby target over its text', () => {
    const { container } = render(
      <>
        <span id="countryHeading" aria-label="Country of birth">Country</span>
        <DSelect aria-labelledby="countryHeading" options={options} />
      </>,
    );

    expect(screen.getByRole('combobox')).toHaveAccessibleName('Country of birth');
    expect(focusGuidance(container)).toMatch(/^Country of birth is focused/);
  });

  it('should keep the guidance passed through ariaLiveMessages', () => {
    const { container } = render(
      <DSelect
        label="Country"
        options={options}
        ariaLiveMessages={{ guidance: () => 'Custom guidance' }}
      />,
    );

    expect(focusGuidance(container)).toBe('Custom guidance');
  });
});
