import useToast from '../../src/components/DToastContainer/useToast';
import DButton from '../../src/components/DButton';
import DToastContainer from '../../src/components/DToastContainer';
import { DContextProvider } from '../../src';
import { DContextProviderConfigMaterial } from '../config/contextProviderMaterial';

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
      {...DContextProviderConfigMaterial}
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
