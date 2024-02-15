import useToast from '../../src/components/DToastContainer/useToast';
import DButton from '../../src/components/DButton';
import DToastContainer from '../../src/components/DToastContainer';
import { DContextProvider } from '../../src';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';

export function UseToastExample() {
  const { toast } = useToast();
  return (
    <>
      <DButton
        text="Show Toast"
        onClick={() => (
          toast(
            'Example',
            { type: 'info', showClose: true, autoClose: 500 },
          )
        )}
      />
      <DToastContainer position="bottom-center" />
    </>
  );
}

export function UseToastMaterialExample() {
  const { toast } = useToast();
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
            },
          )
        )}
      />
      <DToastContainer position="bottom-center" />
    </DContextProvider>
  );
}
