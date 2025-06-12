import React, { useMemo } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DTabContent from './DTabContent';
import TabContext from '../TabContext';
import DTabs from '../DTabs';

function mockContext(isSelectedFn: (tab: string) => boolean) {
  return function MockProvider({ children }: { children: React.ReactNode }) {
    const contextValue = useMemo(
      () => ({ isSelected: isSelectedFn }),
      [],
    );

    return (
      <TabContext.Provider value={contextValue}>
        {children}
      </TabContext.Provider>
    );
  };
}

describe('DTabContent component', () => {
  it('renders children when tab is selected', () => {
    const Wrapper = mockContext((tab) => tab === 'tab1');

    render(
      <Wrapper>
        <DTabContent tab="tab1">Visible Content</DTabContent>
      </Wrapper>,
    );

    expect(screen.getByText('Visible Content')).toBeInTheDocument();
    expect(screen.getByRole('tabpanel')).toHaveAttribute('id', 'tab1Pane');
    expect(screen.getByRole('tabpanel')).toHaveClass('tab-pane', 'fade', 'show', 'active');
  });

  it('Does not render anything when tab is not selected', () => {
    const Wrapper = mockContext(() => false);

    const { container } = render(
      <Wrapper>
        <DTabContent tab="tab1">Hidden Content</DTabContent>
      </Wrapper>,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('Render children when tab is active', () => {
    render(
      <DTabs
        options={[{ label: 'A', tab: 'a' }]}
        defaultSelected="a"
      >
        <DTabs.Tab tab="a">Active content</DTabs.Tab>
      </DTabs>,
    );

    expect(screen.getByText('Active content')).toBeInTheDocument();
  });

  it('Applies custom className and style', () => {
    const Wrapper = mockContext((tab) => tab === 'tab1');

    render(
      <Wrapper>
        <DTabContent
          tab="tab1"
          className="custom-class"
          style={{ color: 'red' }}
        >
          Styled Content
        </DTabContent>
      </Wrapper>,
    );

    const tabPanel = screen.getByRole('tabpanel');
    expect(tabPanel).toHaveClass('custom-class');
    expect(tabPanel).toHaveStyle('color: red');
  });
});
