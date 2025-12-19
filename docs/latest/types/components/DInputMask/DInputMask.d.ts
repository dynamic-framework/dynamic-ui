import { type InputMaskProps } from '@react-input/mask';
import type { ComponentPropsWithoutRef } from 'react';
import DInput from '../DInput';
import type { Merge } from '../../types';
type NonDInputProps = InputMaskProps<typeof DInput>;
type Props = Merge<ComponentPropsWithoutRef<typeof DInput>, NonDInputProps>;
declare const ForwardedDInputMask: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default ForwardedDInputMask;
