import { useCallback, useState } from 'react';

import type { ComponentPropsWithoutRef } from 'react';

import DInput from './DInput';

type Props = Omit<ComponentPropsWithoutRef<typeof DInput>, 'iconEnd' | 'type'>;

export default function DInputPassword(
  {
    onIconEndClick,
    ...props
  }: Props,
) {
  const [visible, setVisible] = useState(false);

  const handleOnIconEndClick = useCallback(() => {
    setVisible((prevVisible) => !prevVisible);
    onIconEndClick?.();
  }, [onIconEndClick]);

  return (
    <DInput
      iconEnd={!visible ? 'eye-slash' : 'eye'}
      type={!visible ? 'password' : 'text'}
      onIconEndClick={handleOnIconEndClick}
      {...props}
    />
  );
}
