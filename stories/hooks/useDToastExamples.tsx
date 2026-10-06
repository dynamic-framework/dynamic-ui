import { DContextProvider, DToastDismiss } from '../../src';
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

export function ExampleSimpleSuccessToastUsage() {
  const { toast } = useDToast();
  return (
    <DButton
      text="Toast success"
      color="light"
      onClick={() => (
        toast(
          {
            title: 'Example',
            timestamp: 'just now',
            icon: 'check',
            color: 'success',
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
      {type === 'success' && <ExampleSimpleSuccessToastUsage />}
      <DToastContainer
        placement="top-end"
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

export function ExampleFullSuccessToastUsage() {
  const { toast } = useDToast();
  return (
    <DButton
      text="Toast full success"
      color="light"
      onClick={() => (
        toast(
          {
            title: 'Example',
            description: 'This is a description',
            timestamp: 'just now',
            color: 'success',
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
      {type === 'success' && <ExampleFullSuccessToastUsage />}
      <DToastContainer
        placement="top-end"
      />
    </DContextProvider>
  );
}

/**
 * A custom toast.
 *
 * It took `{ id, visible }` — `react-hot-toast`'s own toast object — and had
 * to render `null` when not visible. Both were the library's bookkeeping in a
 * consumer's component: the container decides what is mounted, and
 * `DToastDismiss` reads which toast it is in from context.
 */
export function CustomToastExample() {
  return (
    <div className="df-bg-secondary-subtle df-rounded-control df-p-4 df-text-center">
      <p className="df-fw-semibold df-mt-0">Toast!</p>
      <DToastDismiss label="Close toast" />
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
          <CustomToastExample />,
          { duration: 4000 },
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
        placement="top-end"
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
        placement="top-end"
      />
    </DContextProvider>
  );
}
