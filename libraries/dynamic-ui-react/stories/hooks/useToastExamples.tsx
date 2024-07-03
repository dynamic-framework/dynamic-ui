import useDToast from '../../src/components/DToastContainer/useDToast';
import DButton from '../../src/components/DButton';
import DToastContainer from '../../src/components/DToastContainer';
import { DContextProvider } from '../../src';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';

export function ExampleSimpleToastUsage() {
  const { toast } = useDToast();
  return (
    <DButton
      text="Show Toast"
      onClick={() => (
        toast(
          { title: 'Example' },
          { duration: 40000 },
        )
      )}
    />
  );
}

export function ExampleSimpleToastRoot() {
  return (
    <DContextProvider>
      <ExampleSimpleToastUsage />
      <DToastContainer
        position="top-right"
      />
    </DContextProvider>
  );
}

export function ExampleFullToastUsage() {
  const { toast } = useDToast();
  return (
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
  );
}

export function ExampleFullToastRoot() {
  return (
    <DContextProvider>
      <ExampleFullToastUsage />
      <DToastContainer
        position="top-right"
      />
    </DContextProvider>
  );
}

export function CustomToastExample() {
  return (
    <div className="bg-surface-secondary rounded-2 p-4 text-center">
      <p className="fw-bold mt-0">Toast!</p>
      <DButton
        size="sm"
        variant="outline"
        theme="secondary"
        text="Close toast"
      />
    </div>
  );
}

export function ExampleCustomToastUsage() {
  const { toast } = useDToast();
  return (
    <DButton
      text="Show Toast"
      onClick={() => (
        toast(
          CustomToastExample,
          {
            duration: 3000,
          },
        )
      )}
    />
  );
}

export function ExampleCustomToastRoot() {
  return (
    <DContextProvider>
      <ExampleCustomToastUsage />
      <DToastContainer
        position="top-right"
      />
    </DContextProvider>
  );
}

export function ExampleMaterialIconToastUsage() {
  const { toast } = useDToast();
  return (
    <DButton
      text="Show Toast"
      onClick={() => (
        toast(
          { title: 'Example' },
          { duration: 5000 },
        )
      )}
    />
  );
}

export function ExampleMaterialIconToastRoot() {
  return (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <ExampleMaterialIconToastUsage />
      <DToastContainer
        key="material-icon-toast-container"
        position="top-right"
      />
    </DContextProvider>
  );
}
