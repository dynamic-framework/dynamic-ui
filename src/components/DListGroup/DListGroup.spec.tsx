/// <reference types="@testing-library/jest-dom" />

import {
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DListGroup from '.';
import { DContextProvider } from '../../contexts';

describe('<DListGroup />', () => {
  it('should render my component', () => {
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

  it('renders as an ordered list when numbered', () => {
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

  it('renders a flush list', () => {
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
  ])('renders a horizontal list with prop %s', (prop, expectedClass) => {
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

describe('<DListGroup.Item />', () => {
  it('renders as a link when href is provided', () => {
    render(
      <DContextProvider>
        <DListGroup>
          <DListGroup.Item href="/test">Link Item</DListGroup.Item>
        </DListGroup>
      </DContextProvider>,
    );

    const item = screen.getByRole('link', { name: 'Link Item' });
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute('href', '/test');
    expect(item).toHaveClass('list-group-item-action');
  });

  it('renders as a button when action is true', () => {
    render(
      <DContextProvider>
        <DListGroup>
          <DListGroup.Item action>Button Item</DListGroup.Item>
        </DListGroup>
      </DContextProvider>,
    );

    const item = screen.getByRole('button', { name: 'Button Item' });
    expect(item).toBeInTheDocument();
  });

  it('handles onClick event on an action item', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(
      <DContextProvider>
        <DListGroup>
          <DListGroup.Item action onClick={handleClick}>
            Click Me
          </DListGroup.Item>
        </DListGroup>
      </DContextProvider>,
    );

    await user.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies active and disabled states', () => {
    render(
      <DContextProvider>
        <DListGroup>
          <DListGroup.Item active disabled>Stateful Item</DListGroup.Item>
        </DListGroup>
      </DContextProvider>,
    );

    const item = screen.getByText('Stateful Item');
    expect(item).toHaveClass('active');
    expect(item).toHaveClass('disabled');
    expect(item).toHaveAttribute('aria-disabled', 'true');
  });

  it('applies a theme color', () => {
    render(
      <DContextProvider>
        <DListGroup>
          <DListGroup.Item theme="success">Themed Item</DListGroup.Item>
        </DListGroup>
      </DContextProvider>,
    );

    const item = screen.getByText('Themed Item');
    expect(item).toHaveClass('list-group-item-success');
  });
});
