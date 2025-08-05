/// <reference types="@testing-library/jest-dom" />

import {
  render,
  screen,
} from '@testing-library/react';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import DQuickActionSelect from '.';
import { DContextProvider } from '../../contexts';

describe('<DQuickActionSelect />', () => {
  it('should render my component', () => {
    const shortcut = {
      id: 'component',
      name: 'name',
      line1: 'total',
      line2: '$ 7.432.450',
      value: 'value',
    };

    const { container } = render(
      <DContextProvider>
        <DQuickActionSelect {...shortcut} />
      </DContextProvider>,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <label
          class="d-quick-action-select"
          for="component"
        >
          <input
            id="component"
            name="name"
            type="radio"
            value="value"
          />
          <span
            class="d-quick-action-select-line1"
          >
            total
          </span>
          <span
            class="d-quick-action-select-line2"
          >
            $ 7.432.450
          </span>
        </label>
      </div>
    `);
  });

  it('renders with correct labels and value', () => {
    render(
      <DContextProvider>
        <DQuickActionSelect
          name="test"
          line1="Line 1 Text"
          line2="Line 2 Text"
          value="test-value"
        />
      </DContextProvider>,
    );

    expect(screen.getByText('Line 1 Text')).toBeInTheDocument();
    expect(screen.getByText('Line 2 Text')).toBeInTheDocument();

    const radioInput = screen.getByRole('radio');
    // CORRECCIÓN: Usamos .toHaveAttribute() para verificar el atributo 'value' en un radio button.
    expect(radioInput).toHaveAttribute('value', 'test-value');
  });

  it('calls onChange when selected', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <DContextProvider>
        <DQuickActionSelect
          name="test"
          line1="Clickable"
          line2="Item"
          value="value"
          onChange={handleChange}
        />
      </DContextProvider>,
    );

    const label = screen.getByText('Clickable').closest('label');
    await user.click(label as HTMLLabelElement);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('is checked when the selected prop is true', () => {
    render(
      <DContextProvider>
        <DQuickActionSelect
          name="test"
          line1="Selected"
          line2="Item"
          value="value"
          selected
        />
      </DContextProvider>,
    );

    const radioInput = screen.getByRole('radio');
    expect(radioInput).toBeChecked();
  });

  it('functions as a radio button in a group', async () => {
    const user = userEvent.setup();
    function TestGroup() {
      const [selectedValue, setSelectedValue] = useState('val1');
      return (
        <>
          <DQuickActionSelect
            name="group"
            line1="Option 1"
            line2="A"
            value="val1"
            selected={selectedValue === 'val1'}
            onChange={(e) => setSelectedValue(e.target.value)}
          />
          <DQuickActionSelect
            name="group"
            line1="Option 2"
            line2="B"
            value="val2"
            selected={selectedValue === 'val2'}
            onChange={(e) => setSelectedValue(e.target.value)}
          />
        </>
      );
    }

    render(
      <DContextProvider>
        <TestGroup />
      </DContextProvider>,
    );

    const radio1 = screen.getByRole('radio', { name: /Option 1/i });
    const radio2 = screen.getByRole('radio', { name: /Option 2/i });

    expect(radio1).toBeChecked();
    expect(radio2).not.toBeChecked();

    await user.click(screen.getByText('Option 2').closest('label') as HTMLLabelElement);

    expect(radio1).not.toBeChecked();
    expect(radio2).toBeChecked();
  });
});
