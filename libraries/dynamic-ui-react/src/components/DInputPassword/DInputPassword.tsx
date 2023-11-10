import { forwardRef, useCallback, useState } from 'react';

import type { ForwardedRef, ComponentPropsWithoutRef, RefObject } from 'react';

import DInput from '../DInput';
import useProvidedRefOrCreate from '../../hooks/useProvidedRefOrCreate';

type Props = Omit<ComponentPropsWithoutRef<typeof DInput>, 'iconEnd' | 'type'>;

function DInputPassword(
  {
    onIconEndClick,
    iconEndAriaText = 'show/hide password',
    ...props
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const inputRef = useProvidedRefOrCreate(ref as RefObject<HTMLInputElement>);
  const [visible, setVisible] = useState(false);

  const handleOnIconEndClick = useCallback(() => {
    setVisible((prevVisible) => !prevVisible);
    onIconEndClick?.();
  }, [onIconEndClick]);

  return (
    <DInput
      ref={inputRef}
      iconEnd={!visible ? 'eye-slash' : 'eye'}
      type={!visible ? 'password' : 'text'}
      onIconEndClick={handleOnIconEndClick}
      iconEndAriaText={iconEndAriaText}
      {...props}
    />
  );
}

const ForwardedDInputPassword = forwardRef<HTMLInputElement, Props>(DInputPassword);
ForwardedDInputPassword.displayName = 'DInputPassword';
export default ForwardedDInputPassword;
