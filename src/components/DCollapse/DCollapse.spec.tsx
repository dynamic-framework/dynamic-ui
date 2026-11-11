/// <reference types="@testing-library/jest-dom" />

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProps } from 'react';
import DCollapse from '.';
import { DContextProvider } from '../../contexts';

describe('<DCollapse />', () => {
  const HeaderMock = <>Header Content</>;
  const BodyMock = <>Collapsible Body</>;

  it('should render a collapse and hide its content', () => {
    const props: ComponentProps<typeof DCollapse> = {
      Component: HeaderMock,
      children: BodyMock,
    };

    const { container } = render(
      <DCollapse {...props} />,
    );

    const collapseContainer = container.querySelector('.collapse-container');
    const button = container.querySelector('button.collapse-button');
    const icon = button?.querySelector('.d-icon');

    expect(collapseContainer).toBeInTheDocument();
    expect(screen.getByText('Header Content')).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(icon?.querySelector('svg')).toBeInTheDocument();
    expect(container.querySelector('.collapse-body-wrapper')).not.toHaveClass('show');
  });

  it('renders with header and without body by default', () => {
    render(
      <DCollapse
        Component={HeaderMock}
      >
        {BodyMock}
      </DCollapse>,
    );

    expect(screen.getByText('Header Content')).toBeInTheDocument();
    expect(screen.getByText('Collapsible Body')).toBeInTheDocument();
    expect(screen.getByText('Collapsible Body').closest('.collapse-body-wrapper')).not.toHaveClass('show');
  });

  it('shows the body when defaultCollapsed is false', () => {
    render(
      <DCollapse
        Component={HeaderMock}
        defaultCollapsed={false}
      >
        {BodyMock}
      </DCollapse>,
    );

    expect(screen.getByText('Collapsible Body')).toBeInTheDocument();
  });

  it('toggles and shows the body when clicked', () => {
    render(
      <DCollapse
        Component={HeaderMock}
      >
        {BodyMock}
      </DCollapse>,
    );

    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);

    expect(screen.getByText('Collapsible Body')).toBeInTheDocument();
  });

  it('collapses the body again when clicked twice', () => {
    render(
      <DCollapse
        Component={HeaderMock}
      >
        {BodyMock}
      </DCollapse>,
    );

    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton); // expand
    fireEvent.click(toggleButton); // collapse

    expect(screen.getByText('Collapsible Body').closest('.collapse-body-wrapper')).not.toHaveClass('show');
  });

  it('calls onChange with correct state on toggle', () => {
    const onChangeMock = jest.fn();

    render(
      <DCollapse
        defaultCollapsed
        Component={HeaderMock}
        onChange={onChangeMock}
      >
        {BodyMock}
      </DCollapse>,
    );

    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton); // false
    fireEvent.click(toggleButton); // true
    expect(onChangeMock).toHaveBeenCalledTimes(2);

    expect(onChangeMock).toHaveBeenNthCalledWith(1, false);
    expect(onChangeMock).toHaveBeenNthCalledWith(2, true);
  });

  it('applies custom class and styles', () => {
    const { container } = render(
      <DCollapse
        Component={HeaderMock}
        className="custom-collapse"
        style={{ marginTop: '10px' }}
      >
        {BodyMock}
      </DCollapse>,
    );
    expect(container.firstChild).toHaveClass('collapse-container', 'custom-collapse');
    expect(container.firstChild).toHaveStyle({ marginTop: '10px' });
  });

  it('renders the open and close icons depending on the state', () => {
    render(
      <DCollapse
        Component={HeaderMock}
      >
        {BodyMock}
      </DCollapse>,
    );

    const toggleButton = screen.getByRole('button');
    expect(toggleButton.innerHTML).toContain('chevron-down');

    fireEvent.click(toggleButton);
    expect(toggleButton.innerHTML).toContain('chevron-up');
  });

  it('falls back to context icon configuration when no icon family props are provided', () => {
    const { container } = render(
      <DContextProvider
        icon={{
          familyClass: 'material-symbols-outlined',
          familyPrefix: '',
          materialStyle: true,
        }}
      >
        <DCollapse Component={HeaderMock}>
          {BodyMock}
        </DCollapse>
      </DContextProvider>,
    );

    const icon = container.querySelector('.collapse-icon');
    expect(icon?.className).toContain('material-symbols-outlined');
    expect(icon).toHaveTextContent('ChevronDown');
    expect(icon?.tagName).toBe('I');
  });

  it('prioritizes local icon family props over context configuration', () => {
    const { container } = render(
      <DContextProvider
        icon={{
          familyClass: 'material-symbols-outlined',
          familyPrefix: '',
          materialStyle: true,
        }}
      >
        <DCollapse
          Component={HeaderMock}
          iconMaterialStyle={false}
          iconFamilyClass="bi"
          iconFamilyPrefix="bi-"
        >
          {BodyMock}
        </DCollapse>
      </DContextProvider>,
    );

    const icon = container.querySelector('.collapse-icon');
    expect(icon?.className).not.toContain('material-symbols-outlined');
    expect(icon?.querySelector('svg')).toBeInTheDocument();
  });
  describe('estado anunciado del encabezado', () => {
    it('anuncia el estado actual y la región que controla', () => {
      const { container } = render(
        <DCollapse Component={HeaderMock}>
          {BodyMock}
        </DCollapse>,
      );

      const button = screen.getByRole('button');
      const bodyWrapper = container.querySelector('.collapse-body-wrapper');

      expect(button).toHaveAttribute('aria-expanded', 'false');
      expect(button.getAttribute('aria-controls')).toBe(bodyWrapper?.id);
      expect(bodyWrapper?.id).toBeTruthy();
    });

    it('anuncia expandido cuando arranca abierto', () => {
      render(
        <DCollapse Component={HeaderMock} defaultCollapsed={false}>
          {BodyMock}
        </DCollapse>,
      );

      expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
    });

    it('cambia aria-expanded al hacer clic', async () => {
      const user = userEvent.setup();
      render(
        <DCollapse Component={HeaderMock}>
          {BodyMock}
        </DCollapse>,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-expanded', 'false');

      await user.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');

      await user.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('cambia aria-expanded con el teclado', async () => {
      const user = userEvent.setup();
      render(
        <DCollapse Component={HeaderMock}>
          {BodyMock}
        </DCollapse>,
      );

      const button = screen.getByRole('button');
      await user.tab();
      expect(button).toHaveFocus();

      await user.keyboard('{Enter}');
      expect(button).toHaveAttribute('aria-expanded', 'true');

      await user.keyboard(' ');
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });

    it('apunta al cuerpo que realmente se muestra y se oculta', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <DCollapse Component={HeaderMock}>
          {BodyMock}
        </DCollapse>,
      );

      const button = screen.getByRole('button');
      const controlled = document.getElementById(button.getAttribute('aria-controls') as string);

      expect(controlled).toBe(container.querySelector('.collapse-body-wrapper'));
      expect(controlled).toHaveTextContent('Collapsible Body');
      expect(controlled).not.toHaveClass('show');

      await user.click(button);
      expect(controlled).toHaveClass('show');
    });

    it('deriva el id del cuerpo del id del contenedor sin duplicarlo', () => {
      const { container } = render(
        <DCollapse id="myCollapse" Component={HeaderMock}>
          {BodyMock}
        </DCollapse>,
      );

      const button = screen.getByRole('button');
      const bodyId = button.getAttribute('aria-controls') as string;

      expect(bodyId).not.toBe('myCollapse');
      expect(container.querySelector('.collapse-container')?.id).toBe('myCollapse');
      expect(document.getElementById(bodyId)).toHaveClass('collapse-body-wrapper');
      expect(document.querySelectorAll(`[id="${bodyId}"]`)).toHaveLength(1);
    });

    it('da ids distintos a dos collapse sin id propio', () => {
      render(
        <>
          <DCollapse Component={<>First Header</>}>First Body</DCollapse>
          <DCollapse Component={<>Second Header</>}>Second Body</DCollapse>
        </>,
      );

      const [first, second] = screen.getAllByRole('button');
      expect(first.getAttribute('aria-controls')).not.toBe(second.getAttribute('aria-controls'));
    });
  });
});
