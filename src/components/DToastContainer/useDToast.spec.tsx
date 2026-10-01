import { act, render, renderHook } from '@testing-library/react';
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
        color: 'success',
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

    const closeButton = container.querySelector('.df-toast-dismiss');
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

    const closeButton = container.querySelector('.df-toast-dismiss') as HTMLButtonElement;
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

    const closeButton = container.querySelector('.df-toast-dismiss') as HTMLButtonElement;
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
        color: 'info',
      });
    });

    const renderFunction = mockCustom.mock.calls[0][0] as ToastRenderFunction;
    const { container } = render(
      <DContextProvider>
        {renderFunction(createMockToast({ visible: true }))}
      </DContextProvider>,
    );

    expect(container.querySelector('.df-toast-title')).toHaveTextContent('Test Title');
    expect(container.querySelector('.df-toast-timestamp')).toHaveTextContent('10:30 AM');
    expect(container).toHaveTextContent('Test Description');
    expect(container.querySelector('.df-toast-icon')).toBeInTheDocument();
  });

  /**
   * The header and the body are SIBLINGS, and the stylesheet has to agree.
   *
   * `toast.css` had `.df-toast` as a flex ROW with `.df-toast-content` set to
   * `flex-direction: column` and `flex: 1 1 auto` — a shape that only makes
   * sense if the content WRAPS the header. It does not; both builds render
   * them side by side. So a toast with a description came out as one long
   * line: icon, title, timestamp, close button, then the description off to
   * the right of all of it.
   *
   * Nothing caught it. Every other test asserts that an element is present,
   * and all of them were — in the wrong arrangement. This pins the arrangement
   * instead, so a later change to the nesting has to be a deliberate one made
   * alongside the CSS.
   */
  it('should render the header and the body as siblings, not nested', () => {
    const { result } = renderWithContext(() => useDToast());

    act(() => {
      result.current.toast({
        title: 'Test Title',
        description: 'Test Description',
        timestamp: '10:30 AM',
        icon: 'info',
      });
    });

    const renderFunction = mockCustom.mock.calls[0][0] as ToastRenderFunction;
    const { container } = render(
      <DContextProvider>
        {renderFunction(createMockToast({ visible: true }))}
      </DContextProvider>,
    );

    const toast = container.querySelector('.df-toast')!;
    const header = toast.querySelector('.df-toast-header')!;
    const content = toast.querySelector('.df-toast-content')!;

    expect(header.parentElement).toBe(toast);
    expect(content.parentElement).toBe(toast);
    expect(header.contains(content)).toBe(false);

    // The description is in the body, below the title row — not beside it.
    expect(content).toHaveTextContent('Test Description');
    expect(header).toHaveTextContent('Test Title');
    expect(header).not.toHaveTextContent('Test Description');
  });

  /**
   * The compact toast has no header at all: the icon, the title and the
   * dismiss live in `.df-toast-content`, which is why that rule is a ROW.
   */
  it('should put everything in the body when there is no description', () => {
    const { result } = renderWithContext(() => useDToast());

    act(() => {
      result.current.toast({ title: 'Test Title', icon: 'info' });
    });

    const renderFunction = mockCustom.mock.calls[0][0] as ToastRenderFunction;
    const { container } = render(
      <DContextProvider>
        {renderFunction(createMockToast({ visible: true }))}
      </DContextProvider>,
    );

    const content = container.querySelector('.df-toast-content')!;
    expect(container.querySelector('.df-toast-header')).toBeNull();
    expect(content.querySelector('.df-toast-icon')).toBeInTheDocument();
    expect(content.querySelector('.df-toast-title')).toBeInTheDocument();
    expect(content.querySelector('.df-toast-dismiss')).toBeInTheDocument();
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

    expect(container.querySelector('.df-toast-timestamp')).not.toBeInTheDocument();
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

    expect(container.querySelector('.df-toast-icon')).not.toBeInTheDocument();
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

    // The colour is an attribute, and `show` is gone: it was Bootstrap's
    // JS-driven visibility class, and react-hot-toast already controls whether
    // the toast is mounted, so it never did anything here.
    expect(container.querySelector('[data-color="danger"]')).toBeInTheDocument();
  });
});
