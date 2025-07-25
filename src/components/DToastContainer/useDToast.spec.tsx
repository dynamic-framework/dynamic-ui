/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/unbound-method, max-len, @typescript-eslint/no-unused-vars */
import { renderHook, act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DContextProvider } from '../../contexts';
import useDToast from './useDToast';

// Mock react-hot-toast
const mockCustom = jest.fn();
const mockDismiss = jest.fn();

jest.mock('react-hot-toast', () => ({
  toast: {
    custom: mockCustom,
    dismiss: mockDismiss,
  },
  dismiss: mockDismiss,
}));

const renderWithContext = (hook: () => any) => renderHook(hook, {
  wrapper: ({ children }) => (
    <DContextProvider>
      {children}
    </DContextProvider>
  ),
});

describe('useDToast', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return toast function', () => {
    const { result } = renderWithContext(() => useDToast());

    expect(result.current).toHaveProperty('toast');
    expect(typeof result.current.toast).toBe('function');
  });

  it('should call reactHotToast.custom with function data', () => {
    const { result } = renderWithContext(() => useDToast());
    const mockFunction = jest.fn();
    const mockProps = { duration: 5000 };

    act(() => {
      result.current.toast(mockFunction, mockProps);
    });

    expect(mockCustom).toHaveBeenCalledWith(mockFunction, mockProps);
  });

  it('should create toast without description', () => {
    const { result } = renderWithContext(() => useDToast());

    act(() => {
      result.current.toast({
        title: 'Test Title',
        icon: 'star',
        theme: 'primary',
      });
    });

    expect(mockCustom).toHaveBeenCalledWith(expect.any(Function), undefined);

    // Test the render function
    const renderFunction = mockCustom.mock.calls[0][0];
    const toastElement = renderFunction({ id: 'test-id', visible: true } as any);

    expect(toastElement).toBeTruthy();
  });

  it('should create toast with description', () => {
    const { result } = renderWithContext(() => useDToast());

    act(() => {
      result.current.toast({
        title: 'Test Title',
        description: 'Test Description',
        timestamp: '10:30 AM',
        icon: 'info',
        theme: 'success',
      });
    });

    expect(mockCustom).toHaveBeenCalledWith(expect.any(Function), undefined);
  });

  it('should create soft themed toast', () => {
    const { result } = renderWithContext(() => useDToast());

    act(() => {
      result.current.toast({
        title: 'Test Title',
        theme: 'warning',
        soft: true,
      });
    });

    expect(mockCustom).toHaveBeenCalledWith(expect.any(Function), undefined);
  });

  it('should pass toast props correctly', () => {
    const { result } = renderWithContext(() => useDToast());
    const toastProps = {
      id: 'custom-id',
      duration: 3000,
      position: 'top-right' as const,
    };

    act(() => {
      result.current.toast({
        title: 'Test Title',
      }, toastProps);
    });

    expect(mockCustom).toHaveBeenCalledWith(expect.any(Function), toastProps);
  });

  it('should return null when toast is not visible', () => {
    const { result } = renderWithContext(() => useDToast());

    act(() => {
      result.current.toast({
        title: 'Test Title',
      });
    });

    const renderFunction = mockCustom.mock.calls[0][0];
    const toastElement = renderFunction({ id: 'test-id', visible: false } as any);

    expect(toastElement).toBeNull();
  });

  it('should use custom close icon', () => {
    const { result } = renderWithContext(() => useDToast());

    act(() => {
      result.current.toast({
        title: 'Test Title',
        closeIcon: 'custom-close',
      });
    });

    const renderFunction = mockCustom.mock.calls[0][0];
    const { container } = render(
      <DContextProvider>
        {renderFunction({ id: 'test-id', visible: true } as any)}
      </DContextProvider>,
    );

    const closeButton = container.querySelector('.d-close');
    expect(closeButton).toBeInTheDocument();
  });

  it('should handle close button click for toast without description', async () => {
    const user = userEvent.setup();
    const { result } = renderWithContext(() => useDToast());

    act(() => {
      result.current.toast({
        title: 'Test Title',
      });
    });

    const renderFunction = mockCustom.mock.calls[0][0];
    const { container } = render(
      <DContextProvider>
        {renderFunction({ id: 'test-id', visible: true } as any)}
      </DContextProvider>,
    );

    const closeButton = container.querySelector('.d-close') as HTMLButtonElement;
    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);

    expect(mockDismiss).toHaveBeenCalledWith('test-id');
  });

  it('should handle close button click for toast with description', async () => {
    const user = userEvent.setup();
    const { result } = renderWithContext(() => useDToast());

    act(() => {
      result.current.toast({
        title: 'Test Title',
        description: 'Test Description',
      });
    });

    const renderFunction = mockCustom.mock.calls[0][0];
    const { container } = render(
      <DContextProvider>
        {renderFunction({ id: 'test-id', visible: true } as any)}
      </DContextProvider>,
    );

    const closeButton = container.querySelector('.d-close') as HTMLButtonElement;
    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);

    expect(mockDismiss).toHaveBeenCalledWith('test-id');
  });

  it('should render toast with all elements when description is provided', () => {
    const { result } = renderWithContext(() => useDToast());

    act(() => {
      result.current.toast({
        title: 'Test Title',
        description: 'Test Description',
        timestamp: '10:30 AM',
        icon: 'info',
        theme: 'primary',
      });
    });

    const renderFunction = mockCustom.mock.calls[0][0];
    const { container } = render(
      <DContextProvider>
        {renderFunction({ id: 'test-id', visible: true } as any)}
      </DContextProvider>,
    );

    expect(container.querySelector('.toast-title')).toHaveTextContent('Test Title');
    expect(container.querySelector('.toast-timestamp')).toHaveTextContent('10:30 AM');
    expect(container).toHaveTextContent('Test Description');
    expect(container.querySelector('.toast-icon')).toBeInTheDocument();
  });

  it('should render toast without timestamp when not provided', () => {
    const { result } = renderWithContext(() => useDToast());

    act(() => {
      result.current.toast({
        title: 'Test Title',
        description: 'Test Description',
      });
    });

    const renderFunction = mockCustom.mock.calls[0][0];
    const { container } = render(
      <DContextProvider>
        {renderFunction({ id: 'test-id', visible: true } as any)}
      </DContextProvider>,
    );

    expect(container.querySelector('.toast-timestamp')).not.toBeInTheDocument();
  });

  it('should render toast without icon when not provided', () => {
    const { result } = renderWithContext(() => useDToast());

    act(() => {
      result.current.toast({
        title: 'Test Title',
      });
    });

    const renderFunction = mockCustom.mock.calls[0][0];
    const { container } = render(
      <DContextProvider>
        {renderFunction({ id: 'test-id', visible: true } as any)}
      </DContextProvider>,
    );

    expect(container.querySelector('.toast-icon')).not.toBeInTheDocument();
  });

  it('should apply correct theme classes', () => {
    const { result } = renderWithContext(() => useDToast());

    act(() => {
      result.current.toast({
        title: 'Test Title',
        theme: 'danger',
      });
    });

    const renderFunction = mockCustom.mock.calls[0][0];
    const { container } = render(
      <DContextProvider>
        {renderFunction({ id: 'test-id', visible: true } as any)}
      </DContextProvider>,
    );

    expect(container.querySelector('.toast-danger')).toBeInTheDocument();
    expect(container.querySelector('.show')).toBeInTheDocument();
  });

  it('should apply correct soft theme classes', () => {
    const { result } = renderWithContext(() => useDToast());

    act(() => {
      result.current.toast({
        title: 'Test Title',
        theme: 'info',
        soft: true,
      });
    });

    const renderFunction = mockCustom.mock.calls[0][0];
    const { container } = render(
      <DContextProvider>
        {renderFunction({ id: 'test-id', visible: true } as any)}
      </DContextProvider>,
    );

    expect(container.querySelector('.toast-soft-info')).toBeInTheDocument();
    expect(container.querySelector('.toast-info')).not.toBeInTheDocument();
  });
});
