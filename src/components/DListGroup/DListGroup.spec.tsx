/// <reference types="@testing-library/jest-dom" />

import {
  render,
  screen,
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
              <div
                class="w-100"
              >
                Item A
              </div>
            </li>
            <li
              class="list-group-item"
            >
              <div
                class="w-100"
              >
                Item B
              </div>
            </li>
            <li
              class="list-group-item"
            >
              <div
                class="w-100"
              >
                Item C
              </div>
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

    it('should render as a button when action is true', () => {
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
          <DListGroup>
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
          <DListGroup>
            <DListGroup.Item action disabled>Disabled Button</DListGroup.Item>
          </DListGroup>
        </DContextProvider>,
      );

      const item = screen.getByRole('button', { name: 'Disabled Button' });
      expect(item).toBeDisabled();
      expect(item).toHaveClass('disabled');
    });
  });

  describe('Events and Interaction', () => {
    it('should handle onClick event on an action item', async () => {
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
  });
});
