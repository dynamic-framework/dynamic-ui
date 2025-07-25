import {
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react';

import type { ForwardedRef, ComponentPropsWithoutRef, RefObject } from 'react';

import DInput from '../DInput';
import useProvidedRefOrCreate from '../../hooks/useProvidedRefOrCreate';
import { useDContext } from '../../contexts';

type Props = Omit<
ComponentPropsWithoutRef<typeof DInput>,
| 'type'
>;

function DInputPassword(
  {
    onIconEndClick,
    iconEndAriaLabel = 'show/hide password',
    ...props
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const inputRef = useProvidedRefOrCreate(ref as RefObject<HTMLInputElement | null>);
  const [visible, setVisible] = useState(false);

  const handleOnIconEndClick = useCallback(() => {
    setVisible((prevVisible) => !prevVisible);
    onIconEndClick?.();
  }, [onIconEndClick]);
  const { iconMap: { input } } = useDContext();

  const iconEnd = useMemo(
    () => (!visible ? input.hide : input.show),
    [input.hide, input.show, visible],
  );

  return (
    <DInput
      ref={inputRef}
      iconEnd={iconEnd}
      type={!visible ? 'password' : 'text'}
      onIconEndClick={handleOnIconEndClick}
      iconEndAriaLabel={iconEndAriaLabel}
      {...props}
    />
  );
}

const ForwardedDInputPassword = forwardRef<HTMLInputElement, Props>(DInputPassword);
ForwardedDInputPassword.displayName = 'DInputPassword';
export default ForwardedDInputPassword;
