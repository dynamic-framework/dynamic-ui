/// <reference types="@testing-library/jest-dom" />

import {
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DInputSelect from '.';
import { DContextProvider } from '../../contexts';

describe('<DInputSelect />', () => {
  const defaultOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ];

  describe('Rendering and Props', () => {
    it('should render the component with default options', () => {
      const { container } = render(
        <DContextProvider>
          <DInputSelect id="Random-id" options={defaultOptions} />
        </DContextProvider>,
      );

      expect(container).toMatchInlineSnapshot(`
        <div>
          <div>
            <div
              class="input-group"
            >
              <select
                aria-label=""
                class="form-select"
                id="Random-id"
              >
                <option
                  value="1"
                >
                  Option 1
                </option>
                <option
                  value="2"
                >
                  Option 2
                </option>
              </select>
            </div>
          </div>
        </div>
      `);
    });

    it('should render with a floating label', () => {
      render(
        <DContextProvider>
          <DInputSelect label="My Select" options={defaultOptions} floatingLabel />
        </DContextProvider>,
      );

      const select = screen.getByLabelText('My Select');
      expect(select.closest('.form-floating')).toBeInTheDocument();
    });

    it('should be disabled when the disabled prop is true', () => {
      render(
        <DContextProvider>
          <DInputSelect label="My Select" options={defaultOptions} disabled />
        </DContextProvider>,
      );

      const select = screen.getByLabelText('My Select');
      expect(select).toBeDisabled();
    });

    it('should show the invalid state when the invalid prop is true', () => {
      render(
        <DContextProvider>
          <DInputSelect label="My Select" options={defaultOptions} invalid />
        </DContextProvider>,
      );

      const select = screen.getByLabelText('My Select');
      expect(select).toHaveClass('is-invalid');
    });

    it('should show the valid state when the valid prop is true', () => {
      render(
        <DContextProvider>
          <DInputSelect label="Valid Select" options={defaultOptions} valid />
        </DContextProvider>,
      );
      const select = screen.getByLabelText('Valid Select');
      expect(select).toHaveClass('is-valid');
    });

    it('should be disabled and show a spinner when loading', () => {
      render(
        <DContextProvider>
          <DInputSelect label="Loading Select" options={[]} loading />
        </DContextProvider>,
      );

      const select = screen.getByLabelText('Loading Select');
      expect(select).toBeDisabled();

      const spinner = screen.getByRole('status', { hidden: true });
      expect(spinner).toBeInTheDocument();
    });

    it.each(['sm', 'lg'])('should render with the correct size class for size "%s"', (size) => {
      render(
        <DContextProvider>
          <DInputSelect
            label="Sized Select"
            size={size as 'sm' | 'lg'}
            options={[]}
            onChange={jest.fn()}
          />
        </DContextProvider>,
      );

      const select = screen.getByLabelText('Sized Select');
      expect(select).toHaveClass(`form-select-${size}`);
    });

    it('should work with custom data structure using extractors', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      const customOptions = [
        { id: 101, name: 'Product A' },
        { id: 102, name: 'Product B' },
      ];

      render(
        <DContextProvider>
          <DInputSelect
            label="Custom Select"
            options={customOptions}
            onChange={handleChange}
            valueExtractor={(item) => item.id}
            labelExtractor={(item) => item.name}
          />
        </DContextProvider>,
      );

      const select = screen.getByLabelText('Custom Select');
      expect(screen.getByText('Product A')).toBeInTheDocument();

      await user.selectOptions(select, '102');
      expect(handleChange).toHaveBeenCalledWith({ id: 102, name: 'Product B' });
    });
  });

  describe('Conditional Rendering', () => {
    it('should render with a hint text and correct aria-describedby', () => {
      render(
        <DContextProvider>
          <DInputSelect label="Select with Hint" options={[]} hint="This is a hint" />
        </DContextProvider>,
      );
      const select = screen.getByLabelText('Select with Hint');
      expect(screen.getByText('This is a hint')).toBeInTheDocument();
      expect(select).toHaveAttribute('aria-describedby', expect.stringContaining('Hint'));
    });

    it('should render an empty label when floatingLabel is true and no label text is provided', () => {
      const { container } = render(
        <DContextProvider>
          <DInputSelect options={[]} floatingLabel />
        </DContextProvider>,
      );
      const select = container.querySelector('select');
      expect(select).toHaveClass('floating-label');

      const label = container.querySelector('label');
      expect(label).toBeInTheDocument();
      expect(label).toHaveTextContent('');
    });

    it('should render with start icon but no end icon', () => {
      render(
        <DContextProvider>
          <DInputSelect
            label="Select with Start Icon"
            options={[]}
            iconStart="check"
            iconStartAriaLabel="start-icon"
          />
        </DContextProvider>,
      );
      const iconButton = screen.getByRole('button', { name: /start-icon/i });
      expect(iconButton).toBeInTheDocument();
      const select = screen.getByLabelText('Select with Start Icon');
      expect(select).toHaveAttribute('aria-describedby', expect.stringContaining('Start'));
    });

    it('should render with end icon but no start icon', () => {
      render(
        <DContextProvider>
          <DInputSelect
            label="Select with End Icon"
            options={[]}
            iconEnd="check"
            iconEndAriaLabel="end-icon"
          />
        </DContextProvider>,
      );
      const iconButton = screen.getByRole('button', { name: /end-icon/i });
      expect(iconButton).toBeInTheDocument();
      const select = screen.getByLabelText('Select with End Icon');
      expect(select).toHaveAttribute('aria-describedby', expect.stringContaining('End'));
    });
  });

  describe('Events and Interaction', () => {
    it('should call onChange with the full selected option object', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(
        <DContextProvider>
          <DInputSelect label="My Select" options={defaultOptions} onChange={handleChange} />
        </DContextProvider>,
      );

      const select = screen.getByLabelText('My Select');
      await user.selectOptions(select, '2');

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith({ label: 'Option 2', value: '2' });
    });

    it('should call onIconEndClick when the end icon is clicked', async () => {
      const user = userEvent.setup();
      const handleIconClick = jest.fn();
      render(
        <DContextProvider>
          <DInputSelect
            label="Select with Icon"
            options={defaultOptions}
            iconEnd="box"
            iconEndAriaLabel="box-icon"
            onIconEndClick={handleIconClick}
          />
        </DContextProvider>,
      );

      const iconButton = screen.getByRole('button', { name: /box-icon/i });
      await user.click(iconButton);

      expect(handleIconClick).toHaveBeenCalledTimes(1);
    });

    it('should call onIconStartClick when the start icon is clicked', async () => {
      const user = userEvent.setup();
      const handleIconClick = jest.fn();
      render(
        <DContextProvider>
          <DInputSelect
            label="Select with Start Icon"
            options={defaultOptions}
            iconStart="box"
            iconStartAriaLabel="box-icon-start"
            onIconStartClick={handleIconClick}
          />
        </DContextProvider>,
      );

      const iconButton = screen.getByRole('button', { name: /box-icon-start/i });
      await user.click(iconButton);

      expect(handleIconClick).toHaveBeenCalledTimes(1);
    });

    it('should call onBlur when the select loses focus', async () => {
      const user = userEvent.setup();
      const handleBlur = jest.fn();
      render(
        <DContextProvider>
          <DInputSelect label="My Select" options={defaultOptions} onBlur={handleBlur} />
        </DContextProvider>,
      );

      const select = screen.getByLabelText('My Select');
      await user.click(select);
      await user.tab();

      expect(handleBlur).toHaveBeenCalledTimes(1);
    });
  });
});
