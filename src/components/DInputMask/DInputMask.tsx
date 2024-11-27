import { forwardRef } from 'react';
import { InputMask } from '@react-input/mask';

import type { ComponentPropsWithoutRef, ForwardedRef } from 'react';
import type { MaskProps } from '@react-input/mask';

import DInput from '../DInput';

import type { Merge } from '../../types';

type NonDInputProps = MaskProps;

type Props = Merge<ComponentPropsWithoutRef<typeof DInput>, NonDInputProps>;

function DInputMask(props: Props, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <InputMask
      ref={ref}
      component={DInput}
      {...props}
    />
  );
}

const ForwardedDInputMask = forwardRef<HTMLInputElement, Props>(DInputMask);
ForwardedDInputMask.displayName = 'DInputMask';
export default ForwardedDInputMask;
