import useToast from '../../src/components/DToastContainer/useToast';
import DButton from '../../src/components/DButton';
import DToastContainer from '../../src/components/DToastContainer';
import { DContextProvider } from '../../src';

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
      icon={{
        materialStyle: true,
        familyClass: 'material-symbols-outlined',
        familyPrefix: '',
      }}
      iconMap={{
        xIcon: 'close',
        xLgIcon: 'close',
        chevronDownIcon: 'expand_more',
        alert: {
          warning: 'warning',
          danger: 'error',
          success: 'done',
          info: 'info',
          dark: 'info',
          light: 'info',
          primary: 'info',
          secondary: 'info',
        },
      }}
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
