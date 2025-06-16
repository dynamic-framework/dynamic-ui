import { render, screen } from '@testing-library/react';
import TabContext, { useTabContext } from './TabContext';
import '@testing-library/jest-dom';

describe('useTabContext', () => {
  it('Returns the selected tab', () => {
    function TestComponent() {
      const { isSelected } = useTabContext();
      return <div>{isSelected('test') ? 'Selected' : 'Not Selected'}</div>;
    }

    render(
      <TabContext.Provider value={{ isSelected: (tab) => tab === 'test' }}>
        <TestComponent />
      </TabContext.Provider>,
    );

    expect(screen.getByText('Selected')).toBeInTheDocument();
  });

  it('Throws an error if used outside of context', () => {
    function TestComponent() {
      useTabContext();
      return <div />;
    }

    // Silence expected error temporarily
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<TestComponent />)).toThrow(
      'useTabContext was used outside of MTab',
    );

    spy.mockRestore();
  });
});
