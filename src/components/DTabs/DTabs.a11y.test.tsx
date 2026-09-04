import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import axe from '../../../tests/a11y/axeHelper';
import DTabs, { DTabOption } from './DTabs';

const options: DTabOption[] = [
  { label: 'Tab 1', tab: 'tab1' },
  { label: 'Tab 2', tab: 'tab2' },
  { label: 'Tab 3', tab: 'tab3', disabled: true },
];

const renderTabPanes = () => options.map((option) => (
  <DTabs.Tab key={option.tab} tab={option.tab}>
    Content for
    {' '}
    {option.label}
  </DTabs.Tab>
));

describe('<DTabs /> a11y', () => {
  it('should have no violations with default underline variant', async () => {
    const { container } = render(
      <DTabs options={options} defaultSelected="tab1">
        {renderTabPanes()}
      </DTabs>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with pills variant and vertical layout', async () => {
    const { container } = render(
      <DTabs options={options} defaultSelected="tab1" variant="pills" vertical>
        {renderTabPanes()}
      </DTabs>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with an aria-label', async () => {
    const { container } = render(
      <DTabs options={options} defaultSelected="tab2" ariaLabel="My Tabs">
        {renderTabPanes()}
      </DTabs>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a disabled tab selected as default', async () => {
    const { container } = render(
      <DTabs options={options} defaultSelected="tab3">
        {renderTabPanes()}
      </DTabs>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
