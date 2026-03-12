import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DTabs, { DTabOption } from './DTabs';

const options: DTabOption[] = [
  { label: 'Tab 1', tab: 'tab1' },
  { label: 'Tab 2', tab: 'tab2' },
  { label: 'Tab 3', tab: 'tab3', disabled: true },
];

describe('<DTabs />', () => {
  it('selects first enabled tab if defaultSelected is disabled', () => {
    const opts = [
      { label: 'Tab 1', tab: 'tab1', disabled: true },
      { label: 'Tab 2', tab: 'tab2' },
      { label: 'Tab 3', tab: 'tab3', disabled: true },
    ];
    render(
      <DTabs options={opts} defaultSelected="tab1">
        <div>Tab Content</div>
      </DTabs>,
    );
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveClass('active');
  });

  it('arrow keys move focus and skip disabled tabs', () => {
    const opts = [
      { label: 'Tab 1', tab: 'tab1' },
      { label: 'Tab 2', tab: 'tab2', disabled: true },
      { label: 'Tab 3', tab: 'tab3' },
    ];
    render(
      <DTabs options={opts} defaultSelected="tab1">
        <div>Tab Content</div>
      </DTabs>,
    );
    const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
    const tab3 = screen.getByRole('tab', { name: 'Tab 3' });
    tab1.focus();
    fireEvent.keyDown(tab1, { key: 'ArrowRight' });
    expect(document.activeElement).toBe(tab3);
    fireEvent.keyDown(tab3, { key: 'ArrowLeft' });
    expect(document.activeElement).toBe(tab1);
  });

  it('applies aria-label and aria-labelledby correctly', () => {
    const opts = [
      { label: 'Tab 1', tab: 'tab1' },
      { label: 'Tab 2', tab: 'tab2' },
    ];
    const { rerender } = render(
      <DTabs options={opts} defaultSelected="tab1" ariaLabel="My Tabs">
        <div>Tab Content</div>
      </DTabs>,
    );
    const tablist = screen.getByRole('tablist');
    expect(tablist).toHaveAttribute('aria-label', 'My Tabs');
    rerender(
      <DTabs options={opts} defaultSelected="tab1" ariaLabelledBy="my-label">
        <div>Tab Content</div>
      </DTabs>,
    );
    const tablist2 = screen.getByRole('tablist');
    expect(tablist2).toHaveAttribute('aria-labelledby', 'my-label');
    expect(tablist2).not.toHaveAttribute('aria-label');
  });

  it('renders tabs and selects default tab', () => {
    render(
      <DTabs
        options={options}
        defaultSelected="tab1"
      >
        <div>Tab Content</div>
      </DTabs>,
    );

    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveClass('active');
    expect(screen.getByText('Tab Content')).toBeInTheDocument();
  });

  it('changes tab on click and calls onChange', () => {
    const handleChange = jest.fn();

    render(
      <DTabs
        options={options}
        defaultSelected="tab1"
        onChange={handleChange}
      >
        <div>Tab Content</div>
      </DTabs>,
    );

    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    fireEvent.click(tab2);

    expect(tab2).toHaveClass('active');
    expect(handleChange).toHaveBeenCalledWith(options[1]);
  });

  it('does not call onChange when clicking disabled tab', () => {
    const handleChange = jest.fn();

    render(
      <DTabs
        options={options}
        defaultSelected="tab1"
        onChange={handleChange}
      >
        <div>Tab Content</div>
      </DTabs>,
    );

    const disabledTab = screen.getByRole('tab', { name: 'Tab 3' });
    fireEvent.click(disabledTab);

    expect(disabledTab).not.toHaveClass('active');
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('calls onChange even if tab is falsy', () => {
    const handleChange = jest.fn();

    const invalidOption = { label: 'No Tab', tab: '' };

    render(
      <DTabs
        options={[invalidOption]}
        defaultSelected="tab1"
        onChange={handleChange}
      >
        <div>Tab Content</div>
      </DTabs>,
    );

    const button = screen.getByRole('tab', { name: 'No Tab' });
    fireEvent.click(button);

    expect(handleChange).toHaveBeenCalledWith(invalidOption);
    // No cambio de selección, porque tab es ''
    expect(screen.getByRole('tab', { name: 'No Tab' })).not.toHaveClass('active');
  });

  it('Apply vertical classname', () => {
    const { container } = render(
      <DTabs
        options={[{ label: 'Tab 1', tab: 'tab1' }]}
        defaultSelected="tab1"
        vertical
        variant="pills"
      >
        <div>Contenido</div>
      </DTabs>,
    );

    const nav = container.querySelector('ul[role="tablist"]');
    expect(nav).toHaveClass('flex-column', 'align-items-center');
    expect(nav).toHaveClass('nav-pills');
  });

  it('Add custom className to generateClasses', () => {
    const { container } = render(
      <DTabs
        options={[{ label: 'Tab 1', tab: 'tab1' }]}
        defaultSelected="tab1"
        className="custom-tabs"
      >
        <div>Contenido</div>
      </DTabs>,
    );

    const nav = container.querySelector('ul[role="tablist"]');
    expect(nav).toHaveClass('custom-tabs');
  });

  it('does not fail if onChange is not provided', () => {
    const invalidOption = { label: 'No Tab', tab: '' };

    render(
      <DTabs
        options={[invalidOption]}
        defaultSelected="tab1"
      >
        <div>Tab Content</div>
      </DTabs>,
    );

    const button = screen.getByRole('tab', { name: 'No Tab' });

    expect(() => fireEvent.click(button)).not.toThrow();
  });

  it('applies correct variant class', () => {
    const { container } = render(
      <DTabs
        options={options}
        defaultSelected="tab1"
        variant="pills"
      >
        <div>Tab Content</div>
      </DTabs>,
    );

    const nav = container.querySelector('ul[role="tablist"]');
    expect(nav).toHaveClass('nav-pills');
  });

  it('renders vertical layout when vertical is true', () => {
    const { container } = render(
      <DTabs
        options={options}
        defaultSelected="tab1"
        vertical
      >
        <div>Tab Content</div>
      </DTabs>,
    );

    const nav = container.querySelector('ul[role="tablist"]');
    expect(nav).toHaveClass('flex-column');
  });

  it('reacts to changes in defaultSelected prop', () => {
    const { rerender } = render(
      <DTabs
        options={options}
        defaultSelected="tab1"
      >
        <div>Tab Content</div>
      </DTabs>,
    );

    expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveClass('active');

    rerender(
      <DTabs
        options={options}
        defaultSelected="tab2"
      >
        <div>Tab Content</div>
      </DTabs>,
    );

    expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveClass('active');
  });
});
