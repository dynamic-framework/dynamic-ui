import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DList from './DList';

describe('<DList />', () => {
  it('should render basic list', () => {
    const { container } = render(
      <DList>
        <DList.Item>Item 1</DList.Item>
        <DList.Item>Item 2</DList.Item>
      </DList>,
    );

    expect(container.firstChild).toHaveClass('list-group');
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('should render flush list', () => {
    const { container } = render(
      <DList flush>
        <DList.Item>Item 1</DList.Item>
      </DList>,
    );

    expect(container.firstChild).toHaveClass('list-group-flush');
  });

  it('should render numbered list', () => {
    const { container } = render(
      <DList numbered>
        <DList.Item>Item 1</DList.Item>
      </DList>,
    );

    expect(container.firstChild).toHaveClass('list-group-numbered');
  });

  it('should render horizontal list', () => {
    const { container } = render(
      <DList horizontal>
        <DList.Item>Item 1</DList.Item>
      </DList>,
    );

    expect(container.firstChild).toHaveClass('list-group-horizontal');
  });

  it('should render horizontal list with breakpoint', () => {
    const { container } = render(
      <DList horizontal horizontalBreakpoint="md">
        <DList.Item>Item 1</DList.Item>
      </DList>,
    );

    expect(container.firstChild).toHaveClass('list-group-horizontal-md');
    expect(container.firstChild).not.toHaveClass('list-group-horizontal');
  });

  it('should apply custom className and style', () => {
    const { container } = render(
      <DList className="custom-class" style={{ color: 'red' }}>
        <DList.Item>Item 1</DList.Item>
      </DList>,
    );

    expect(container.firstChild).toHaveClass('custom-class');
    expect(container.firstChild).toHaveStyle({ color: 'red' });
  });

  it('should apply data attributes', () => {
    const { container } = render(
      <DList dataAttributes={{ 'data-testid': 'list' }}>
        <DList.Item>Item 1</DList.Item>
      </DList>,
    );

    expect(container.firstChild).toHaveAttribute('data-testid', 'list');
  });

  it('should throw error when flush and horizontal are both true', () => {
    expect(() => {
      render(
        <DList flush horizontal>
          <DList.Item>Item 1</DList.Item>
        </DList>,
      );
    }).toThrow("Horizontal and Flush props don't work together");
  });

  it('should render list item as button when onClick is provided', () => {
    const handleClick = jest.fn();

    render(
      <DList>
        <DList.Item onClick={handleClick}>Clickable Item</DList.Item>
      </DList>,
    );

    const item = screen.getByRole('button', { name: 'Clickable Item' });
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute('type', 'button');
  });

  it('should render list item as div when onClick is not provided', () => {
    const { container } = render(
      <DList>
        <DList.Item>Static Item</DList.Item>
      </DList>,
    );

    const item = container.querySelector('.list-group-item');
    expect(item?.tagName).toBe('DIV');
  });

  it('should handle list item click', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(
      <DList>
        <DList.Item onClick={handleClick}>Clickable Item</DList.Item>
      </DList>,
    );

    const item = screen.getByRole('button', { name: 'Clickable Item' });
    await user.click(item);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render active list item', () => {
    render(
      <DList>
        <DList.Item active>Active Item</DList.Item>
      </DList>,
    );

    const item = screen.getByText('Active Item');
    expect(item).toHaveClass('active');
    expect(item).toHaveAttribute('aria-current', 'true');
  });

  it('should render disabled list item', () => {
    render(
      <DList>
        <DList.Item disabled>Disabled Item</DList.Item>
      </DList>,
    );

    const item = screen.getByText('Disabled Item');
    expect(item).toHaveClass('disabled');
  });

  it('should render list item with theme', () => {
    render(
      <DList>
        <DList.Item theme="danger">Danger Item</DList.Item>
      </DList>,
    );

    const item = screen.getByText('Danger Item');
    expect(item).toHaveClass('list-group-item-danger');
  });

  it('should apply custom className and style to list item', () => {
    render(
      <DList>
        <DList.Item className="custom-item" style={{ fontSize: '14px' }}>
          Custom Item
        </DList.Item>
      </DList>,
    );

    const item = screen.getByText('Custom Item');
    expect(item).toHaveClass('custom-item');
    expect(item).toHaveStyle({ fontSize: '14px' });
  });

  it('should have list-group-item-action class on list items', () => {
    render(
      <DList>
        <DList.Item>Item</DList.Item>
      </DList>,
    );

    const item = screen.getByText('Item');
    expect(item).toHaveClass('list-group-item', 'list-group-item-action');
  });
});
