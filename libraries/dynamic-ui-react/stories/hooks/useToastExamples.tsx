import { ToastContentProps } from 'react-toastify';
import useDToast from '../../src/components/DToastContainer/useDToast';
import DButton from '../../src/components/DButton';
import DToastContainer from '../../src/components/DToastContainer';
import { DContextProvider } from '../../src';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';

export function UseToastExample() {
  const { toastAlert } = useDToast();
  return (
    <>
      <DButton
        text="Show Toast"
        onClick={() => (
          toastAlert(
            'Example',
            {
              type: 'info',
              showClose: true,
              autoClose: 500,
              containerId: 'example1',
            },
          )
        )}
      />
      <DToastContainer
        position="top-right"
        containerId="example1"
      />
    </>
  );
}

export function UseToastMaterialExample() {
  const { toastAlert } = useDToast();
  return (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DButton
        text="Show Toast"
        onClick={() => (
          toastAlert(
            'Example',
            {
              type: 'info',
              showClose: true,
              autoClose: 500,
              containerId: 'example2',
            },
          )
        )}
      />
      <DToastContainer
        position="top-right"
        containerId="example2"
        transition="flip"
      />
    </DContextProvider>
  );
}

export function MyComponent({ closeToast }: ToastContentProps) {
  return (
    <div className="bg-surface-secondary rounded-2 p-4 text-center">
      <p className="fw-bold mt-0">Toast!</p>
      <DButton
        size="sm"
        variant="outline"
        theme="secondary"
        onClick={closeToast}
        text="Close toast"
      />
    </div>
  );
}

export function UseToastCustomContent() {
  const { toastChildren } = useDToast();
  return (
    <>
      <DButton
        text="Show Toast"
        onClick={() => (
          toastChildren(
            MyComponent,
            {
              autoClose: 4000,
            },
          )
        )}
      />
      <DToastContainer
        position="top-right"
        style={{
          '--toastify-toast-width': '200px',
          color: 'var(--bs-gray-700)',
        }}
      />
    </>
  );
}

export function UseToastTransitionExample() {
  const { toastAlert } = useDToast();

  return (
    <div className="d-flex gap-4">
      <DButton
        text="Show Toast Slide"
        onClick={() => (
          toastAlert(
            'Example',
            {
              type: 'info',
              showClose: true,
              autoClose: 500,
              containerId: 'example3',
              transition: 'slide',
            },
          )
        )}
      />
      <DButton
        text="Show Toast Flip"
        onClick={() => (
          toastAlert(
            'Example',
            {
              type: 'info',
              showClose: true,
              autoClose: 500,
              containerId: 'example3',
              transition: 'flip',
            },
          )
        )}
      />
      <DButton
        text="Show Toast Bounce"
        onClick={() => (
          toastAlert(
            'Example',
            {
              type: 'info',
              showClose: true,
              autoClose: 500,
              containerId: 'example3',
              transition: 'bounce',
            },
          )
        )}
      />
      <DButton
        text="Show Toast Zoom"
        onClick={() => (
          toastAlert(
            'Example',
            {
              type: 'info',
              showClose: true,
              autoClose: 500,
              containerId: 'example3',
            },
          )
        )}
      />
      <DToastContainer
        containerId="example3"
        position="top-right"
        transition="zoom"
      />
    </div>
  );
}
