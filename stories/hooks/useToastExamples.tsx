import { toast as reactToast, Toast } from 'react-hot-toast';

import { DContextProvider } from '../../src';
import DButton from '../../src/components/DButton';
import DToastContainer from '../../src/components/DToastContainer';
import useDToast from '../../src/components/DToastContainer/useDToast';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';

export function ExampleSimpleToastUsage() {
  const { toast } = useDToast();
  return (
    <DButton
      text="Toast - No color"
      color="light"
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
  );
}

export function ExampleSimpleSecondaryToastUsage() {
  const { toast } = useDToast();
  return (
    <DButton
      text="Toast secondary"
      color="light"
      onClick={() => (
        toast(
          {
            title: 'Example',
            timestamp: 'just now',
            icon: 'check',
            color: 'secondary',
          },
          { duration: 40000 },
        )
      )}
    />
  );
}

export function ExampleSimpleSecondarySoftToastUsage() {
  const { toast } = useDToast();
  return (
    <DButton
      text="Toast soft secondary"
      color="light"
      onClick={() => (
        toast(
          {
            title: 'Example',
            timestamp: 'just now',
            icon: 'check',
            color: 'secondary',
            soft: true,
          },
          { duration: 40000 },
        )
      )}
    />
  );
}

export function ExampleSimpleToastRoot({ type = 'base' }: { type: string }) {
  return (
    <DContextProvider>
      {type === 'base' && <ExampleSimpleToastUsage />}
      {type === 'secondary' && <ExampleSimpleSecondaryToastUsage />}
      {type === 'soft' && <ExampleSimpleSecondarySoftToastUsage />}
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
      text="Toast full - No color"
      color="light"
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
  );
}

export function ExampleFullSecondaryToastUsage() {
  const { toast } = useDToast();
  return (
    <DButton
      text="Toast full secondary"
      color="light"
      onClick={() => (
        toast(
          {
            title: 'Example',
            description: 'This is a description',
            timestamp: 'just now',
            color: 'secondary',
            icon: 'check',
          },
          { duration: 4000 },
        )
      )}
    />
  );
}

export function ExampleFullSecondarySoftToastUsage() {
  const { toast } = useDToast();
  return (
    <DButton
      text="Toast soft full secondary"
      color="light"
      onClick={() => (
        toast(
          {
            title: 'Example',
            description: 'This is a description',
            timestamp: 'just now',
            color: 'secondary',
            soft: true,
            icon: 'check',
          },
          { duration: 4000 },
        )
      )}
    />
  );
}

export function ExampleFullToastRoot({ type = 'base' }: { type: string }) {
  return (
    <DContextProvider>
      {type === 'base' && <ExampleFullToastUsage />}
      {type === 'secondary' && <ExampleFullSecondaryToastUsage />}
      {type === 'soft' && <ExampleFullSecondarySoftToastUsage />}
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
    <div className="bg-subtle-secondary rounded-2 p-4 text-center">
      <p className="fw-bold mt-0">Toast!</p>
      <DButton
        size="sm"
        variant="outline"
        color="secondary"
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
