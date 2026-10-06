import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DListGroup from '.';
import { DContextProvider } from '../../contexts';

describe('<DListGroup /> a11y', () => {
  it('should have no violations with a basic list group', async () => {
    const { container } = render(
      <DContextProvider>
        <DListGroup>
          <DListGroup.Item>Item A</DListGroup.Item>
          <DListGroup.Item>Item B</DListGroup.Item>
          <DListGroup.Item>Item C</DListGroup.Item>
        </DListGroup>
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a numbered, horizontal list group', async () => {
    const { container } = render(
      <DContextProvider>
        <DListGroup numbered horizontal="md">
          <DListGroup.Item>First</DListGroup.Item>
          <DListGroup.Item>Second</DListGroup.Item>
        </DListGroup>
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with link and action items', async () => {
    // "as" is set to "div" here because link/button items are not valid
    // direct children of a <ul>/<ol> per the "list" axe rule.
    const { container } = render(
      <DContextProvider>
        <DListGroup as="div">
          <DListGroup.Item href="/test">Link Item</DListGroup.Item>
          <DListGroup.Item action>Button Item</DListGroup.Item>
        </DListGroup>
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with active, disabled and colored items', async () => {
    const { container } = render(
      <DContextProvider>
        <DListGroup as="div">
          <DListGroup.Item action active>Active Button</DListGroup.Item>
          <DListGroup.Item action disabled>Disabled Button</DListGroup.Item>
          <DListGroup.Item as="button" color="success">Themed Item</DListGroup.Item>
        </DListGroup>
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it.each([
    ['a named <ul>', <DListGroup ariaLabel="Movimientos"><DListGroup.Item>Uno</DListGroup.Item></DListGroup>],
    ['a named as="div" group of links', (
      <DListGroup as="div" ariaLabel="Accesos rápidos">
        <DListGroup.Item href="/cuentas">Cuentas</DListGroup.Item>
      </DListGroup>
    )],
  ])('should have no violations with %s', async (_, node) => {
    const { container } = render(<DContextProvider>{node}</DContextProvider>);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with links and buttons in the default list', async () => {
    const { container } = render(
      <DContextProvider>
        <DListGroup ariaLabel="Accesos">
          <DListGroup.Item href="/cuentas" active ariaCurrent="page">Cuentas</DListGroup.Item>
          <DListGroup.Item href="/tarjetas" disabled>Tarjetas</DListGroup.Item>
          <DListGroup.Item action>Pagar</DListGroup.Item>
          <DListGroup.Item action disabled color="primary">Transferir</DListGroup.Item>
        </DListGroup>
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with interactive items in a numbered list', async () => {
    const { container } = render(
      <DContextProvider>
        <DListGroup numbered>
          <DListGroup.Item action active ariaCurrent="step">Datos</DListGroup.Item>
          <DListGroup.Item href="/confirmar">Confirmar</DListGroup.Item>
        </DListGroup>
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
