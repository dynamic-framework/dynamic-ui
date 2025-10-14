import { renderHook, act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toast as reactHotToast, Toast } from 'react-hot-toast';
import { DContextProvider } from '../../contexts';
import useDToast from './useDToast';

// Type for the toast render function
type ToastRenderFunction = (toast: Pick<Toast, 'id' | 'visible'>) => React.ReactElement | null;

// Type for the hook return value
type UseDToastHook = () => ReturnType<typeof useDToast>;

// Mock toast object for testing
const createMockToast = (overrides: Partial<Pick<Toast, 'id' | 'visible'>> = {}): Pick<Toast, 'id' | 'visible'> => ({
  id: 'test-id',
  visible: true,
  ...overrides,
});

// Mock react-hot-toast
jest.mock('react-hot-toast', () => {
  /* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment */
  const actualModule = jest.requireActual('react-hot-toast');
  const mockCustom = jest.fn();
  const mockDismiss = jest.fn();

  return {
    ...actualModule,
    toast: {
      /* eslint-disable @typescript-eslint/no-unsafe-member-access */
      ...actualModule.toast,
      /* eslint-enable */
      custom: mockCustom,
      dismiss: mockDismiss,
    },
  };
  /* eslint-enable */
});

// Get references to the mocked functions after the module is mocked
const mockCustom = (reactHotToast.custom as jest.MockedFunction<typeof reactHotToast.custom>);
// eslint-disable-next-line @typescript-eslint/unbound-method
const mockDismiss = (reactHotToast.dismiss as jest.MockedFunction<typeof reactHotToast.dismiss>);

const renderWithContext = (hook: UseDToastHook) => renderHook(hook, {
  wrapper: ({ children }) => (
    <DContextProvider>
      {children}
    </DContextProvider>
  ),
});

describe('useDToast', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
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
        color: 'primary',
      });
    });

    expect(mockCustom).toHaveBeenCalledWith(expect.any(Function), undefined);

    // Test the render function
    const renderFunction = mockCustom.mock.calls[0][0] as ToastRenderFunction;
    const toastElement = renderFunction(createMockToast({ visible: true }));

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
        color: 'success',
      });
    });

    expect(mockCustom).toHaveBeenCalledWith(expect.any(Function), undefined);
  });

  it('should create soft themed toast', () => {
    const { result } = renderWithContext(() => useDToast());

    act(() => {
      result.current.toast({
        title: 'Test Title',
        color: 'warning',
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

    const renderFunction = mockCustom.mock.calls[0][0] as ToastRenderFunction;
    const toastElement = renderFunction(createMockToast({ visible: false }));

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

    const renderFunction = mockCustom.mock.calls[0][0] as ToastRenderFunction;
    const { container } = render(
      <DContextProvider>
        {renderFunction(createMockToast({ visible: true }))}
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

    const renderFunction = mockCustom.mock.calls[0][0] as ToastRenderFunction;
    const { container } = render(
      <DContextProvider>
        {renderFunction(createMockToast({ visible: true }))}
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

    const renderFunction = mockCustom.mock.calls[0][0] as ToastRenderFunction;
    const { container } = render(
      <DContextProvider>
        {renderFunction(createMockToast({ visible: true }))}
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
        color: 'primary',
      });
    });

    const renderFunction = mockCustom.mock.calls[0][0] as ToastRenderFunction;
    const { container } = render(
      <DContextProvider>
        {renderFunction(createMockToast({ visible: true }))}
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

    const renderFunction = mockCustom.mock.calls[0][0] as ToastRenderFunction;
    const { container } = render(
      <DContextProvider>
        {renderFunction(createMockToast({ visible: true }))}
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

    const renderFunction = mockCustom.mock.calls[0][0] as ToastRenderFunction;
    const { container } = render(
      <DContextProvider>
        {renderFunction(createMockToast({ visible: true }))}
      </DContextProvider>,
    );

    expect(container.querySelector('.toast-icon')).not.toBeInTheDocument();
  });

  it('should apply correct color classes', () => {
    const { result } = renderWithContext(() => useDToast());

    act(() => {
      result.current.toast({
        title: 'Test Title',
        color: 'danger',
      });
    });

    const renderFunction = mockCustom.mock.calls[0][0] as ToastRenderFunction;
    const { container } = render(
      <DContextProvider>
        {renderFunction(createMockToast({ visible: true }))}
      </DContextProvider>,
    );

    expect(container.querySelector('.toast-danger')).toBeInTheDocument();
    expect(container.querySelector('.show')).toBeInTheDocument();
  });

  it('should apply correct soft color classes', () => {
    const { result } = renderWithContext(() => useDToast());

    act(() => {
      result.current.toast({
        title: 'Test Title',
        color: 'info',
        soft: true,
      });
    });

    const renderFunction = mockCustom.mock.calls[0][0] as ToastRenderFunction;
    const { container } = render(
      <DContextProvider>
        {renderFunction(createMockToast({ visible: true }))}
      </DContextProvider>,
    );

    expect(container.querySelector('.toast-soft-info')).toBeInTheDocument();
    expect(container.querySelector('.toast-info')).not.toBeInTheDocument();
  });
});
