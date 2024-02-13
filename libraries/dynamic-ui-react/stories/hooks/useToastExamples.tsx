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
        x: 'close',
        xLg: 'close',
        chevronDown: 'expand_more',
        upload: 'cloud_upload',
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
        input: {
          invalid: 'priority_high',
          valid: 'done',
          search: 'search',
          show: 'visibility',
          hide: 'visibility_off',
          increase: 'add_box',
          decrease: 'indeterminate_check_box',
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
