/// <reference types="@testing-library/jest-dom" />

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { ComponentProps } from 'react';
import DCollapse from '.';

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

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="collapse-container"
        >
          <button
            class="collapse-button"
            type="button"
          >
            <div
              class="flex-grow-1"
            >
              Header Content
            </div>
            <i
              class="d-icon bi bi-chevron-down"
              style="--bs-icon-component-loading-duration: 1.8s; --bs-icon-component-size: var(--bs-fs-small); --bs-icon-component-color: var(--bs-gray); --bs-icon-component-padding: 0;"
            />
          </button>
        </div>
      </div>
    `);
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
    expect(screen.queryByText('Collapsible Body')).not.toBeInTheDocument();
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

    expect(screen.queryByText('Collapsible Body')).not.toBeInTheDocument();
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

  it('applies separator style when hasSeparator is true', () => {
    render(
      <DCollapse
        Component={HeaderMock}
        defaultCollapsed={false}
        hasSeparator
      >
        {BodyMock}
      </DCollapse>,
    );

    const body = screen.getByText('Collapsible Body');
    expect(body).toHaveStyle('--bs-collapse-separator-display: block');
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
});
