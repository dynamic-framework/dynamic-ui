import {
  act,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { PropsWithChildren } from 'react';
import { DContextProvider } from '../../contexts';
import DConfirmModalContainer from '../../components/DConfirmModal/DConfirmModalContainer';
import useConfirmModal from '../useConfirmModal';

function Wrapper({ children }: PropsWithChildren) {
  return (
    <DContextProvider>
      {children}
      <DConfirmModalContainer nodeId="d-portal" />
    </DContextProvider>
  );
}

describe('useConfirmModal', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should open modal with default title and message', () => {
    const onConfirm = jest.fn();
    const { result } = renderHook(() => useConfirmModal({ onConfirm }), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.open();
    });

    expect(screen.getByText('Are you sure you want to proceed?')).toBeInTheDocument();
    expect(screen.getByText('Please confirm if you want to continue with this action.')).toBeInTheDocument();
  });

  it('should render custom labels, title and message', () => {
    const onConfirm = jest.fn();
    const { result } = renderHook(() => useConfirmModal({
      title: 'Delete Contact',
      message: 'Are you sure you want to delete John Doe from your contact list?',
      confirmLabel: 'Delete',
      cancelLabel: 'Keep',
      onConfirm,
    }), { wrapper: Wrapper });

    act(() => {
      result.current.open();
    });

    expect(screen.getByText('Delete Contact')).toBeInTheDocument();
    expect(screen.getByText('Are you sure you want to delete John Doe from your contact list?')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Keep' })).toBeInTheDocument();
  });

  it('should call onClose when cancel button is clicked', async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    const { result } = renderHook(() => useConfirmModal({
      title: 'Archive',
      message: 'Archive message',
      onConfirm: jest.fn(),
      onClose,
    }), { wrapper: Wrapper });

    act(() => {
      result.current.open();
    });

    await user.click(screen.getByRole('button', { name: 'Cancel' }));

    await waitFor(() => {
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  it('should require matching critical code before enabling confirm', async () => {
    const user = userEvent.setup();
    const { result } = renderHook(() => useConfirmModal({
      title: 'Delete Account',
      message: 'Critical action',
      onConfirm: jest.fn(),
      critical: {
        code: 'DELETE ACCOUNT',
        codeLabel: 'Type confirmation code',
      },
    }), { wrapper: Wrapper });

    act(() => {
      result.current.open();
    });

    const confirmButton = screen.getByRole('button', { name: 'Confirm' });
    const input = screen.getByLabelText('Type confirmation code');

    expect(confirmButton).toBeDisabled();

    await user.type(input, 'DELETE');
    expect(confirmButton).toBeDisabled();

    await user.clear(input);
    await user.type(input, 'DELETE ACCOUNT');
    expect(confirmButton).toBeEnabled();
  });

  it('should deduplicate if open() is called multiple times before modal closes', () => {
    const onConfirm = jest.fn();
    const { result } = renderHook(() => useConfirmModal({
      title: 'Delete Item',
      message: 'Are you sure?',
      onConfirm,
    }), { wrapper: Wrapper });

    act(() => {
      result.current.open();
    });

    // Simulate double-click: call open() again before modal closes
    act(() => {
      result.current.open();
    });

    // Should only have one modal visible, not two
    const modals = screen.getAllByText('Delete Item');
    expect(modals).toHaveLength(1);
  });
});
