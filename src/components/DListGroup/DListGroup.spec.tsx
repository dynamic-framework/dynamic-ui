/// <reference types="@testing-library/jest-dom" />

import {
  fireEvent,
  render,
  screen,
  within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DListGroup from '.';
import { DContextProvider } from '../../contexts';

describe('<DListGroup />', () => {
  describe('Rendering and Props', () => {
    it('should render a basic list group', () => {
      const { container } = render(
        <DContextProvider>
          <DListGroup>
            <DListGroup.Item>Item A</DListGroup.Item>
            <DListGroup.Item>Item B</DListGroup.Item>
            <DListGroup.Item>Item C</DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );

      expect(container).toMatchInlineSnapshot(`
        <div>
          <ul
            class="list-group"
          >
            <li
              class="list-group-item"
            >
              Item A
            </li>
            <li
              class="list-group-item"
            >
              Item B
            </li>
            <li
              class="list-group-item"
            >
              Item C
            </li>
          </ul>
        </div>
      `);
    });

    it('should render as an ordered list when numbered', () => {
      render(
        <DContextProvider>
          <DListGroup numbered>
            <DListGroup.Item>First</DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );
      const list = screen.getByRole('list');
      expect(list.tagName).toBe('OL');
      expect(list).toHaveClass('list-group-numbered');
    });

    it('should render a flush list', () => {
      render(
        <DContextProvider>
          <DListGroup flush>
            <DListGroup.Item>Flush Item</DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );
      expect(screen.getByRole('list')).toHaveClass('list-group-flush');
    });

    it.each([
      [true, 'list-group-horizontal'],
      ['md', 'list-group-horizontal-md'],
    ])('should render a horizontal list with prop %s', (prop, expectedClass) => {
      render(
        <DContextProvider>
          <DListGroup horizontal={prop as true | 'md'}>
            <DListGroup.Item>Horizontal Item</DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );
      expect(screen.getByRole('list')).toHaveClass(expectedClass);
    });
  });
});

describe('<DListGroup.Item />', () => {
  describe('Rendering and Props', () => {
    it('should render as a link when href is provided', () => {
      render(
        <DContextProvider>
          <DListGroup as="div">
            <DListGroup.Item href="/test">Link Item</DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );

      const item = screen.getByRole('link', { name: 'Link Item' });
      expect(item).toBeInTheDocument();
      expect(item).toHaveAttribute('href', '/test');
      expect(item).toHaveClass('list-group-item-action');
    });

    it('should render as a button when action is true', () => {
      render(
        <DContextProvider>
          <DListGroup as="div">
            <DListGroup.Item action>Button Item</DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );

      const item = screen.getByRole('button', { name: 'Button Item' });
      expect(item).toBeInTheDocument();
    });

    it('should apply active and disabled states to a default item', () => {
      render(
        <DContextProvider>
          <DListGroup>
            <DListGroup.Item active disabled>Stateful Item</DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );

      const textElement = screen.getByText('Stateful Item');
      const item = textElement.closest('.list-group-item');
      expect(item).toHaveClass('active');
      expect(item).toHaveClass('disabled');
      expect(item).toHaveAttribute('aria-disabled', 'true');
    });

    it('should apply a color', () => {
      render(
        <DContextProvider>
          <DListGroup>
            <DListGroup.Item color="success">Themed Item</DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );

      const textElement = screen.getByText('Themed Item');
      const item = textElement.closest('.list-group-item');
      expect(item).toHaveClass('list-group-item-success');
    });

    it('should apply active state to an action item (button)', () => {
      render(
        <DContextProvider>
          <DListGroup as="div">
            <DListGroup.Item action active>Active Button</DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );

      const item = screen.getByRole('button', { name: 'Active Button' });
      expect(item).toHaveClass('active');
      expect(item).toHaveAttribute('aria-current', 'true');
    });

    it('should apply disabled state to an action item (button)', () => {
      render(
        <DContextProvider>
          <DListGroup as="div">
            <DListGroup.Item action disabled>Disabled Button</DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );

      const item = screen.getByRole('button', { name: 'Disabled Button' });
      expect(item).toBeDisabled();
      expect(item).toHaveClass('disabled');
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
          <DListGroup>
            <DListGroup.Item iconStart="star" iconEnd="heart">Item</DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );

      const icons = container.querySelectorAll('.d-icon');
      expect(icons).toHaveLength(2);
      icons.forEach((icon) => {
        expect(icon.className).toContain('material-symbols-outlined');
        expect(icon.tagName).toBe('I');
      });
      expect(icons[0]).toHaveTextContent('star');
      expect(icons[1]).toHaveTextContent('heart');
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
          <DListGroup>
            <DListGroup.Item
              iconStart="Star"
              iconStartMaterialStyle={false}
              iconStartFamilyClass="bi"
              iconStartFamilyPrefix="bi-"
              iconEnd="Heart"
              iconEndMaterialStyle={false}
              iconEndFamilyClass="bi"
              iconEndFamilyPrefix="bi-"
            >
              Item
            </DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );

      const icons = container.querySelectorAll('.d-icon');
      expect(icons).toHaveLength(2);
      icons.forEach((icon) => {
        expect(icon.className).not.toContain('material-symbols-outlined');
        expect(icon.querySelector('svg')).toBeInTheDocument();
      });
    });
  });

  describe('Events and Interaction', () => {
    it('should handle onClick event on an action item', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      render(
        <DContextProvider>
          <DListGroup as="div">
            <DListGroup.Item action onClick={handleClick}>
              Click Me
            </DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );

      await user.click(screen.getByText('Click Me'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('development warning for invalid markup', () => {
    // The warning is deduplicated per container>item pair for the whole page
    // load, so each case below uses a pair no other test renders.
    it('does not warn for links or buttons inside a list: they are wrapped in <li>', () => {
      const warn = jest.spyOn(console, 'warn').mockImplementation();
      render(
        <DContextProvider>
          <DListGroup>
            <DListGroup.Item href="/cuentas">Cuentas</DListGroup.Item>
          </DListGroup>
          <DListGroup numbered>
            <DListGroup.Item action>Paso</DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );
      expect(warn).not.toHaveBeenCalled();
      warn.mockRestore();
    });

    it('warns when a plain <li> item renders inside as="div"', () => {
      const warn = jest.spyOn(console, 'warn').mockImplementation();
      render(
        <DContextProvider>
          <DListGroup as="div">
            <DListGroup.Item>Texto</DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );
      expect(warn).toHaveBeenCalledTimes(1);
      expect(warn.mock.calls[0][0]).toContain('a <li> inside a <div> is invalid markup');
      warn.mockRestore();
    });

    it('does not warn for valid combinations or for an item outside a DListGroup', () => {
      const warn = jest.spyOn(console, 'warn').mockImplementation();
      render(
        <DContextProvider>
          <DListGroup>
            <DListGroup.Item>Texto</DListGroup.Item>
          </DListGroup>
          <DListGroup as="div">
            <DListGroup.Item href="/cuentas">Cuentas</DListGroup.Item>
            <DListGroup.Item action>Acción</DListGroup.Item>
          </DListGroup>
          <DListGroup.Item href="/suelto">Suelto</DListGroup.Item>
        </DContextProvider>,
      );
      expect(warn).not.toHaveBeenCalled();
      warn.mockRestore();
    });
  });

  describe('accessible name', () => {
    it.each([
      ['ul', {}],
      ['ol', { numbered: true }],
    ] as const)('names the <%s> with ariaLabel', (tag, props) => {
      render(
        <DContextProvider>
          <DListGroup {...props} ariaLabel="Movimientos recientes">
            <DListGroup.Item>Transferencia recibida</DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );
      const list = screen.getByRole('list', { name: 'Movimientos recientes' });
      expect(list.tagName).toBe(tag.toUpperCase());
      expect(list).not.toHaveAttribute('role');
    });

    it('exposes a named as="div" container as a group', () => {
      render(
        <DContextProvider>
          <DListGroup as="div" ariaLabel="Accesos rápidos">
            <DListGroup.Item href="/cuentas">Cuentas</DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );
      expect(screen.getByRole('group', { name: 'Accesos rápidos' })).toHaveClass('list-group');
    });

    it('prefers ariaLabelledBy over ariaLabel', () => {
      render(
        <DContextProvider>
          <h2 id="movimientos-title">Movimientos</h2>
          <DListGroup ariaLabel="Ignorado" ariaLabelledBy="movimientos-title">
            <DListGroup.Item>Transferencia recibida</DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );
      const list = screen.getByRole('list', { name: 'Movimientos' });
      expect(list).toHaveAttribute('aria-labelledby', 'movimientos-title');
      expect(list).not.toHaveAttribute('aria-label');
    });

    it('leaves the markup unchanged without a name', () => {
      const { container } = render(
        <DContextProvider>
          <DListGroup as="div">
            <DListGroup.Item href="/cuentas">Cuentas</DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );
      const group = container.querySelector('.list-group');
      expect(group).not.toHaveAttribute('role');
      expect(group).not.toHaveAttribute('aria-label');
      expect(group).not.toHaveAttribute('aria-labelledby');
    });
  });

  describe('list semantics for links and buttons', () => {
    const renderList = (node: React.ReactNode) => render(
      <DContextProvider>{node}</DContextProvider>,
    );

    it('renders links as list > listitem > link inside the default <ul>', () => {
      renderList(
        <DListGroup ariaLabel="Accesos">
          <DListGroup.Item href="/cuentas">Cuentas</DListGroup.Item>
          <DListGroup.Item href="/movimientos">Movimientos</DListGroup.Item>
        </DListGroup>,
      );
      const list = screen.getByRole('list', { name: 'Accesos' });
      const items = within(list).getAllByRole('listitem');
      expect(items).toHaveLength(2);
      const link = within(items[0]).getByRole('link', { name: 'Cuentas' });
      expect(link).toHaveAttribute('href', '/cuentas');
      expect(link).toHaveClass('d-list-group-item-link');
      expect(items[0]).toHaveClass('list-group-item', 'list-group-item-action', 'd-list-group-item-interactive');
    });

    it('renders buttons inside a numbered <ol> as listitems', () => {
      const onClick = jest.fn();
      renderList(
        <DListGroup numbered>
          <DListGroup.Item action onClick={onClick}>Paso</DListGroup.Item>
        </DListGroup>,
      );
      const item = within(screen.getByRole('list')).getByRole('listitem');
      const button = within(item).getByRole('button', { name: 'Paso' });
      expect(button).toHaveAttribute('type', 'button');
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('puts item classes and style on the <li> and data attributes on the control', () => {
      renderList(
        <DListGroup>
          <DListGroup.Item
            href="/cuentas"
            color="primary"
            active
            className="hover:bg-gray-25"
            style={{ minHeight: '3rem' }}
            dataAttributes={{ 'data-testid': 'cuentas' }}
          >
            Cuentas
          </DListGroup.Item>
        </DListGroup>,
      );
      const item = screen.getByRole('listitem');
      expect(item).toHaveClass('list-group-item-primary', 'active', 'hover:bg-gray-25');
      expect(item).toHaveStyle('min-height: 3rem');
      expect(screen.getByTestId('cuentas')).toBe(screen.getByRole('link'));
    });

    it('keeps the flat structure with as="div"', () => {
      const { container } = renderList(
        <DListGroup as="div">
          <DListGroup.Item href="/cuentas">Cuentas</DListGroup.Item>
        </DListGroup>,
      );
      const link = screen.getByRole('link', { name: 'Cuentas' });
      expect(link).toHaveClass('list-group-item', 'list-group-item-action');
      expect(container.querySelector('li')).toBeNull();
    });
  });

  describe('disabled and current state', () => {
    const renderItem = (node: React.ReactNode) => render(
      <DContextProvider>
        <DListGroup>{node}</DListGroup>
      </DContextProvider>,
    );

    it('takes a disabled link out of the tab order and does not activate it', () => {
      const onClick = jest.fn();
      renderItem(<DListGroup.Item href="/tarjetas" disabled onClick={onClick}>Tarjetas</DListGroup.Item>);
      const link = screen.getByRole('link', { name: 'Tarjetas' });
      expect(link.tagName).toBe('A');
      expect(link).not.toHaveAttribute('href');
      expect(link).toHaveAttribute('tabindex', '-1');
      expect(link).toHaveAttribute('aria-disabled', 'true');
      fireEvent.click(link);
      expect(onClick).not.toHaveBeenCalled();
      expect(screen.getByRole('listitem')).toHaveClass('disabled');
    });

    it('disables a button with the disabled attribute', () => {
      renderItem(<DListGroup.Item action disabled>Pagar</DListGroup.Item>);
      expect(screen.getByRole('button', { name: 'Pagar' })).toBeDisabled();
    });

    it('sets aria-current to "true" by default and to ariaCurrent when given', () => {
      renderItem(
        <>
          <DListGroup.Item href="/a" active>A</DListGroup.Item>
          <DListGroup.Item href="/b" active ariaCurrent="page">B</DListGroup.Item>
        </>,
      );
      expect(screen.getByRole('link', { name: 'A' })).toHaveAttribute('aria-current', 'true');
      expect(screen.getByRole('link', { name: 'B' })).toHaveAttribute('aria-current', 'page');
    });

    it('does not set aria-current on inactive items', () => {
      renderItem(<DListGroup.Item href="/a" ariaCurrent="page">A</DListGroup.Item>);
      expect(screen.getByRole('link', { name: 'A' })).not.toHaveAttribute('aria-current');
    });
  });
});
