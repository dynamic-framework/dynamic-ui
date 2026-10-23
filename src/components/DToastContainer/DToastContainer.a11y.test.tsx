import { act, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import axe from '../../../tests/a11y/axeHelper';
import DToastContainer from './DToastContainer';
import { toastStore } from '../DToast/toastStore';
import { DContextProvider } from '../../contexts';

afterEach(() => {
  act(() => toastStore.reset());
});

describe('<DToastContainer /> a11y', () => {
  it('should have no violations while empty', async () => {
    const { baseElement } = render(<DToastContainer />);

    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });

  /*
   * The empty container renders nothing at all, so the case worth checking is
   * the one with a live region and a dismiss button actually on the page.
   */
  it('should have no violations with a toast in it', async () => {
    const { baseElement } = render(
      <DContextProvider>
        <DToastContainer portal={false} placement="top-end" />
      </DContextProvider>,
    );
    act(() => { toastStore.show({ content: 'Saved' }); });

    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with the order reversed', async () => {
    const { baseElement } = render(
      <DContextProvider>
        <DToastContainer portal={false} reverseOrder />
      </DContextProvider>,
    );
    act(() => {
      toastStore.show({ content: 'One' });
      toastStore.show({ content: 'Two' });
    });

    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
});
