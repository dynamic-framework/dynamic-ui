import useDToast from '../../src/components/DToastContainer/useDToast';
import DButton from '../../src/components/DButton';
import DToastContainer from '../../src/components/DToastContainer';
import { DContextProvider } from '../../src';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';

export function UseSimpleToastExample() {
  const { toast } = useDToast();
  return (
    <>
      <DButton
        text="Show Toast"
        onClick={() => (
          toast(
            { title: 'Example' },
            { duration: 40000 },
          )
        )}
      />
      <DToastContainer
        position="top-right"
      />
    </>
  );
}

export function UseFullToastExample() {
  const { toast } = useDToast();
  return (
    <>
      <DButton
        text="Show Toast"
        onClick={() => (
          toast(
            {
              title: 'Example',
              description: 'This is a description',
              icon: 'check',
            },
            { duration: 40000 },
          )
        )}
      />
      <DToastContainer
        position="top-right"
      />
    </>
  );
}

export function MyComponent() {
  return (
    <div className="bg-surface-secondary rounded-2 p-4 text-center">
      <p className="fw-bold mt-0">Toast!</p>
      <DButton
        size="sm"
        variant="outline"
        theme="secondary"
        // onClick={closeToast}
        text="Close toast"
      />
    </div>
  );
}

export function UseCustomToastExample() {
  const { toast } = useDToast();
  return (
    <>
      <DButton
        text="Show Toast"
        onClick={() => (
          toast(
            MyComponent,
            {
              duration: 3000,
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
            { title: 'Example' },
            { duration: 5000 },
          )
        )}
      />
      <DToastContainer
        position="top-right"
      />
    </DContextProvider>
  );
}
