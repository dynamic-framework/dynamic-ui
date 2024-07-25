import { toast as reactToast, Toast } from 'react-hot-toast';

import useDToast from '../../src/components/DToastContainer/useDToast';
import DButton from '../../src/components/DButton';
import DToastContainer from '../../src/components/DToastContainer';
import { DContextProvider } from '../../src';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';

export function ExampleSimpleToastUsage() {
  const { toast } = useDToast();
  return (
    <div className="d-flex flex-wrap gap-2">
      <DButton
        text="Toast - No theme"
        theme="light"
        onClick={() => (
          toast(
            {
              title: 'Example',
              timestamp: 'just now',
              icon: 'check',
            },
            { duration: 40000 },
          )
        )}
      />
      <DButton
        text="Toast secondary"
        theme="light"
        onClick={() => (
          toast(
            {
              title: 'Example',
              timestamp: 'just now',
              icon: 'check',
              theme: 'secondary',
            },
            { duration: 40000 },
          )
        )}
      />
      <DButton
        text="Toast soft secondary"
        theme="light"
        onClick={() => (
          toast(
            {
              title: 'Example',
              timestamp: 'just now',
              icon: 'check',
              theme: 'secondary',
              soft: true,
            },
            { duration: 40000 },
          )
        )}
      />
    </div>
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
    <div className="d-flex flex-wrap gap-2">
      <DButton
        text="Toast full - No theme"
        theme="light"
        onClick={() => (
          toast(
            {
              title: 'Example',
              description: 'This is a description',
              timestamp: 'just now',
              icon: 'check',
            },
            { duration: 4000 },
          )
        )}
      />
      <DButton
        text="Toast full secondary"
        theme="light"
        onClick={() => (
          toast(
            {
              title: 'Example',
              description: 'This is a description',
              timestamp: 'just now',
              theme: 'secondary',
              icon: 'check',
            },
            { duration: 4000 },
          )
        )}
      />
      <DButton
        text="Toast soft full secondary"
        theme="light"
        onClick={() => (
          toast(
            {
              title: 'Example',
              description: 'This is a description',
              timestamp: 'just now',
              theme: 'secondary',
              soft: true,
              icon: 'check',
            },
            { duration: 4000 },
          )
        )}
      />
    </div>
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

export function CustomToastExample({ id, visible }: Toast) {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-surface-secondary rounded-2 p-4 text-center">
      <p className="fw-bold mt-0">Toast!</p>
      <DButton
        size="sm"
        variant="outline"
        theme="secondary"
        text="Close toast"
        onClick={() => reactToast.dismiss(id)}
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
            duration: 1000,
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
