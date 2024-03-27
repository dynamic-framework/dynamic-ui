import useDToast from '../../src/components/DToastContainer/useDToast';
import DButton from '../../src/components/DButton';
import DToastContainer from '../../src/components/DToastContainer';
import { DContextProvider } from '../../src';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';

export function UseToastExample() {
  const { toast } = useDToast();
  return (
    <>
      <DButton
        text="Show Toast"
        onClick={() => (
          toast(
            'Example',
            {
              type: 'info',
              showClose: true,
              autoClose: 500,
            },
          )
        )}
      />
      <DToastContainer
        position="top-right"
      />
    </>
  );
}

export function UseToastMaterialExample() {
  const { toast } = useDToast();
  return (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DButton
        text="Show Toast"
        onClick={() => (
          toast(
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

export function UseToastTransitionExample() {
  const { toast } = useDToast();

  return (
    <div className="d-flex gap-4">
      <DButton
        text="Show Toast Slide"
        onClick={() => (
          toast(
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
          toast(
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
          toast(
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
          toast(
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
